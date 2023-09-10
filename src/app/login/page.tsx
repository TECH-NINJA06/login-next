"use client";
import Link from "next/link";
import React from "react";
import {useRouter} from "next/navigation";
import axios from "axios";




export default function LoginPage() {
    const [user, setUser] = React.useState({
        email: "",
        password:"",
       
    })
    const onLogin =async () => {
        
    }

    return(
        <div className="flex justify-center items-center flex-col min-h-screen py-2 bg-slate-700 text-white">
           <h1>Login</h1>
           <hr />
           
            <label htmlFor="email">Email</label>
           <input className="p-2 border border-gray-300 rounded-lg mb-4"
           id="email" type="text" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} placeholder="email"
            />
            <label htmlFor="username">Password</label>
           <input className="p-2 border border-gray-300 rounded-lg mb-4"
           id="password" type="text" value={user.password} onChange={(e) => setUser({...user, password: e.target.value})} placeholder="password"
            />
            <button 
           onClick={onLogin}
            className="p-2 border border-gray-300 rounded-lg mb-4">Login here</button>
            <Link href="/signup">Visit Signup Page</Link>
        </div>
    )
}