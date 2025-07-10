FROM php:8.2-cli-alpine AS builder
WORKDIR /app

# Install build tools, MySQL headers, Oniguruma (for mbstring), etc.
RUN apk add --no-cache \
      build-base \
      autoconf \
      pkgconf \
      libzip-dev \
      zip \
      unzip \
      mariadb-dev \
      mariadb-client \
      oniguruma-dev \
      bash \
 && docker-php-ext-install pdo_mysql zip mbstring

# Install Composer
COPY --from=composer:2 /usr/bin/composer /usr/local/bin/composer

# Copy the Laravel app and install PHP dependencies
COPY backends/sponOS-laravel-api/ ./
RUN composer install --no-dev --optimize-autoloader

# 2) Runtime stage: minimal image with runtime extensions and health check
FROM php:8.2-cli-alpine
WORKDIR /app

# Install runtime deps and netcat for waiting on MySQL
RUN apk add --no-cache \
      mariadb-client \
      oniguruma-dev \
      bash \
      busybox-extras \
 && docker-php-ext-install pdo_mysql mbstring

# Copy the built app and vendor directory from the builder
COPY --from=builder /app ./

# Expose Laravel’s built-in server port
EXPOSE 8000

# Wait for MySQL, run migrations & seeders, then start the server
CMD ["sh", "-c", "\
  echo 'Waiting for MySQL...'; \
  until nc -z db 3306; do \
    sleep 1; \
  done; \
  echo 'MySQL is up — running migrations'; \
  php artisan migrate --force; \
  php artisan db:seed; \
  echo 'Starting Laravel'; \
  php artisan serve --host=0.0.0.0 --port=8000\
"]