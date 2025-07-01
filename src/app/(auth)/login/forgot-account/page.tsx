'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { searchAccount } from "@/lib/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page (){
    const[email,setEmail] = useState("");
    const router = useRouter();
    const handleSearch = async(e: React.FormEvent) =>{
        e.preventDefault();
        //to check the email is in my database
        const found =await searchAccount(email)
        if (found){
     router.push(`/login/forgot-account?email=${encodeURIComponent(email)}`)
        }else{
            router.push("/signup")
        }
    };
    return(
       <form
        onSubmit={handleSearch}
        className="p-6 max-w-md mx-auto space-y-4 container"
        >
            <h1 className="text-x1 font-semibold">Find Your Account</h1>
            <Input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 border rounded"        
            />
            <Button type="submit">Search</Button>
       </form>
    )
}