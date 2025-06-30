<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use App\Models\User;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        //1) validate the incoming shape
        $data = $request->validate([
            'email'     => ['required', 'email'],
            'password'  => ['required'],
        ]);

        //2) look up the user by email
        $user = User::where('email', $data['email'])->first();

        if (! $user) {
            // 3a) No such email - 422 with field-specific error
            throw ValidationException::withMessages([
                'email' => ['No account found for this email.'],
            ]);
        }

        //3b) Wrong password - 422 with field-specific error
        if (! Hash::check($data['password'], $user->password)) {
            throw ValidationException::withMessages([
                'password' => ['The password you entered is incorrect.'],
            ]);
        }

        // 4) Credentials are valid - log in and return the user
        Auth::login($user);
        $request->session()->regenerate();

        return response()->json($user, 200);
    }

    public function update(Request $request)
    {
        $user = $request->user();

        //Validate all the fields you want editable.

     $data = $request->validate([
    'title'                  => ['nullable', 'string', 'max:10'],
    'first_name'             => ['required', 'string', 'max:255'],
    'middle_name'            => ['nullable', 'string', 'max:255'],
    'last_name'              => ['required', 'string', 'max:255'],
    'suffix'                 => ['nullable', 'string', 'max:255'],
    'preferred_name'         => ['nullable', 'string', 'max:255'],

    'email'                  => ['required', 'email', 'max:255', "unique:users,email,{$user->id}"],

    'date_of_birth'          => ['nullable', 'date'],

    'sport'                  => ['nullable', 'string', 'max:255'],
    'sponsorship_goal'       => ['nullable', 'numeric'],
    'sponsorship_currency'   => ['nullable', 'string', 'size:3'],

    'position'               => ['nullable', 'string', 'max:255'],
    'club'                   => ['nullable', 'string', 'max:255'],
    'division'               => ['nullable', 'string', 'max:255'],
    'league'                 => ['nullable', 'string', 'max:255'],

    // JSON arrays of accolades
    'player_accolades'             => ['nullable', 'array'],
    'player_accolades.*.team'      => ['required_with:player_accolades', 'string'],
    'player_accolades.*.year'      => ['required_with:player_accolades', 'integer'],
    'player_accolades.*.award'     => ['required_with:player_accolades', 'string'],

    // JSON arrays of perks
    'sponsorship_perks'            => ['nullable', 'array'],
    'sponsorship_perks.*.item'     => ['required_with:sponsorship_perks', 'string'],
    'sponsorship_perks.*.description' => ['required_with:sponsorship_perks', 'string'],

    // Foreign keys for addresses
    'primary_address_id'      => ['nullable', 'uuid', 'exists:addresses,id'],
    'billing_address_id'      => ['nullable', 'uuid', 'exists:addresses,id'],
]);
    }
}
