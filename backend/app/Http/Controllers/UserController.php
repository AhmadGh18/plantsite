<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Str;

class UserController extends Controller
{

    public function register(UserRequest $request)
    {
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'phone_number' => $request->phone_number,
        ]);

        $token = $user->createToken('auth_token')->plainTextToken;
        $user->sendEmailVerificationNotification();

        return response()->json(['user' => $user, 'token' => $token]);
    }
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string'
        ]);

        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }

        $user = User::where('email', $request->email)->first();
        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json(['user' => $user, 'token' => $token]);
    }

    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();
        return response()->json(['message' => 'Logged out successfully']);
    }
    public function redirect()
    {
        return Socialite::driver("google")->redirect();
    }
    public function callback(Request $request)
    {
        $usergoogle = Socialite::driver('google')->user();
        $user = User::UpdateOrCreate(

            ['google_id' => $usergoogle->id],

            [
                'name' => $usergoogle->name,
                'email' => $usergoogle->email,
                'password' => bcrypt(Str::random(12)),
                'email_verified_at' => now()
            ]

        );
        Auth::login($user);
        $token = $user->createToken("main")->plainTextToken;
        $redirectUrl = env('FRONTEND_REDIRECT_URL', 'http://localhost:3000/auth/callback');

        return redirect()->to($redirectUrl . '?token=' . $token);
    }
}
