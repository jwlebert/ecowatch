import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBIToEBBXpngnJymATRKTx5BX7MdnvdXtk",
  authDomain: "ecowatch-c3a72.firebaseapp.com",
  projectId: "ecowatch-c3a72",
  storageBucket: "ecowatch-c3a72.appspot.com",
  messagingSenderId: "361212644337",
  appId: "1:361212644337:web:a79a5546f7ed8edfb95250",
  measurementId: "G-WBY6W9Y0F7"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const LoginScreen = ({ onToggleSignUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in successfully");
    } catch (error) {
      console.error("Error logging in:", error.message);
    }
  };

  return (
    <div className="m-5 flex place-items-center flex-col">
      <h1 className="text-6xl m-2 mb-10 content-center">Login</h1>
      <form>
        <label className="m-2 flex place-items-center flex-col text-2xl content-center text-emerald-600">
          Email
          <input
            className="mt-2 rounded-lg bg-transparent border-2"
            type="email"
            defaultValue="example@domain.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="my-6 flex place-items-center flex-col text-2xl content-center text-emerald-600">
          Password
          <input
            className="mt-2 rounded-lg bg-transparent border-2"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div className="flex flex-col place-items-center">
          <button
            type="button"
            className='bg-green-950 font-bold text-center text-lg py-2 px-5 rounded-lg border-2 border-green-700'
            onClick={handleLogin}
          >
            Login
          </button>
          <span>Don't have an account? <button type="button" onClick={onToggleSignUp}><u>Sign Up</u></button></span>
        </div>
      </form>
    </div>
  );
};