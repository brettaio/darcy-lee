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
        Schema::create('sponsorships', function (Blueprint $table) {
            $table->id();
            
            // Single UUID foreign key to sponsors.id
            $table->foreignUuid('sponsor_id')
                  ->constrained('sponsors')
                  ->cascadeOnDelete();

            // Player ID is a 6-char string PK on users
            $table->string('user_id', 6);
            $table->foreign('user_id')
                  ->references('id')
                  ->on('users')
                  ->cascadeOnDelete();

            $table->decimal('amount', 10, 2);
            $table->string('stripe_payment_intent_id')->nullable();
            $table->timestamp('sponsorship_at')->useCurrent();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sponsorships');
    }
};
