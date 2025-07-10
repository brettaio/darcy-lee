
FROM nginx:1.25-alpine

# Copy your compiled Angular app
COPY dist/sponOS/browser /usr/share/nginx/html

# Write nginx config via printf (no cat, as requested)
RUN printf "\
server {\n\
  listen 80;\n\
  server_name _;\n\
\n\
  root /usr/share/nginx/html;\n\
  index index.html;\n\
\n\
  # === Sanctum CSRF endpoint ===\n\
  location = /sanctum/csrf-cookie {\n\
    # Allow the browser to accept these cookies\n\
    add_header Access-Control-Allow-Origin  \$http_origin always;\n\
    add_header Access-Control-Allow-Credentials true          always;\n\
\n\
    # Proxy to Laravel\n\
    proxy_pass        http://laravel:8000/sanctum/csrf-cookie;\n\
    proxy_http_version 1.1;\n\
    proxy_set_header  Host              \$host;\n\
    proxy_set_header  X-Real-IP         \$remote_addr;\n\
    proxy_set_header  X-Forwarded-For   \$proxy_add_x_forwarded_for;\n\
    proxy_set_header  X-Forwarded-Proto \$scheme;\n\
    proxy_set_header  Cookie            \$http_cookie;\n\
    proxy_set_header  Origin            \$http_origin;\n\
\n\
    # Also echo the raw CSRF token in a header if you like\n\
    add_header        XSRF-TOKEN        \$cookie_XSRF_TOKEN always;\n\
  }\n\
\n\
  # === All other API calls (with preflight) ===\n\
  location ^~ /api/ {\n\
    # CORS for API\n\
    add_header Access-Control-Allow-Origin  \$http_origin always;\n\
    add_header Access-Control-Allow-Credentials true          always;\n\
    if (\$request_method = 'OPTIONS') {\n\
      add_header Access-Control-Allow-Methods  'GET, POST, PUT, DELETE, OPTIONS' always;\n\
      add_header Access-Control-Allow-Headers  'Authorization,Content-Type,X-XSRF-TOKEN' always;\n\
      return 204;\n\
    }\n\
\n\
    # Proxy to Laravel\n\
    proxy_pass        http://laravel:8000/api/;\n\
    proxy_http_version 1.1;\n\
    proxy_set_header  Host              \$host;\n\
    proxy_set_header  X-Real-IP         \$remote_addr;\n\
    proxy_set_header  X-Forwarded-For   \$proxy_add_x_forwarded_for;\n\
    proxy_set_header  X-Forwarded-Proto \$scheme;\n\
    proxy_set_header  Cookie            \$http_cookie;\n\
    proxy_set_header  Origin            \$http_origin;\n\
  }\n\
\n\
  # === SPA fallback ===\n\
  location / {\n\
    try_files \$uri \$uri/ /index.html;\n\
  }\n\
}\n" > /etc/nginx/conf.d/default.conf

EXPOSE 80

# Shell form CMD so it starts nginx properly
CMD nginx -g 'daemon off;'