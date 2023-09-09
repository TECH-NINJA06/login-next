"use client";
import Link from "next/link";
import React from "react";
import {useRouter} from "next/navigation";
import {axios} from "axios";




export default function SignupPage() {
    const [user, setUser] = React.useState({
        email: "",
        password:"",
        username:"",
    })
    const onSignup =async () => {
        
    }

    return(
        <div className="flex justify-center items-center flex-col min-h-screen py-2">
           <h1>Signup</h1>
           <hr />
           <label htmlFor="username">Username</label>
           <input className="p-2 border border-gray-300 rounded-lg mb-4"
           id="username" type="text" value={user.username} onChange={(e) => setUser({...user, username: e.target.value})} placeholder="username"
            />
            <label htmlFor="email">Email</label>
           <input className="p-2 border border-gray-300 rounded-lg mb-4"
           id="email" type="text" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} placeholder="email"
            />
            <label htmlFor="username">Password</label>
           <input className="p-2 border border-gray-300 rounded-lg mb-4"
           id="password" type="text" value={user.password} onChange={(e) => setUser({...user, password: e.target.value})} placeholder="password"
            />
            <button 
           onClick={onSignup}
            className="p-2 border border-gray-300 rounded-lg mb-4">Signup here</button>
            <Link href="/login">Visit Login Page</Link>
        </div>
    )
}