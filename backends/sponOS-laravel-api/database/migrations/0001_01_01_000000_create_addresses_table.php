<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
/**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('addresses', function (Blueprint $table) {
            $table->uuid('id')->primary();

            //Unit/Apartment
            $table->string('unit_type', 20)->nullable();
            $table->string('unit_number', 10)->nullable();

            //Building
            $table->unsignedInteger('street_number');
            $table->string('street_number_suffix', 5)->nullable();

            //Street
            $table->enum('pre_directional', ['N','S','E','W','NE','NW','SE','SW'])->nullable();
            $table->string('street_name', 100);
            $table->enum('street_type', ['Street','Avenue','Road','Boulevard','Drive','Court','Circuit','Way','Lane','Terrace','Place', 'Trail', 'Parkway', 'Commons']);
            $table->enum('post_directional', ['N','S','E','W','NE','NW','SE','SW'])
              ->nullable();

            //Locality
            $table->string('city', 100);
            $table->string('region_code', 10);
            $table->string('country_code', 2);
            $table->string('postal_code', 20);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('addresses');
    }
};
