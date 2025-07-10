<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use App\Http\Resources\UserResource;
use App\Models\User;

class AuthController extends Controller
{
     public function login(Request $request)
     {        
        
        //1 validate the incoming shape 
        $data = $request->validate([
            'email'     => ['required', 'email'],
            'password'  => ['required'],
        ]);

        //2 Look up the user by email
        $user = User::where('email', $data['email'])->first();

        if (! $user ) {
            //3a) No such email - 422 with field-specific error
            throw ValidationException::withMessages([
                'email' => ['No Account Found For This Email.'],
            ]);
        }

            //3b) Wrong password - 422 with field specific error
        if (! Hash::check($data['password'], $user->password)) {
            throw ValidationException::withMessage([
                'password' => ['The password you entered is incorrect.'],
            ]);
        }

        // 4) Credentials are valid - log in and return the user
        Auth::login($user);
        $request->session()->regenerate();

        return response()->json($user, 200);
     }

     /** 
      * Return the currently authenticated user.
      */
      public function user(Request $request)
      {
        return new UserResource($request->user());
      }

      /**
       * Log the user out (invalidate session).
       */

    public function logout(Request $request)
    {
        auth()->logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return response()->json([], 204);
    }

}
