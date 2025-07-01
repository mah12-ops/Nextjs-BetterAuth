'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { forgetPassword } from "@/lib/auth/auth-client";
import { Link } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default  function Page(){
const params = useSearchParams();
const emailFromQuery = params.get('email') || "" ;
const [email,setEmail] = useState("")
const [message , setMessage] = useState("");

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const {error} = await forgetPassword({
          email,
          redirectTo: `${window.location.origin}/login/forgot-account/forgot-password/reset-password`,

    });
    if(error){
        setMessage("Something Went Wrong. Please Try Again.")
    }else{
        setMessage("Check your emailfor reset link")
    }
    setEmail("")
}
    return (
       <form
        onSubmit={handleSubmit}
        className="p-6 max-w-md mx-auto space-y-4 container"
        >
            <h1 className="text-x1 font-semibold"> Forgot Your Password? </h1>
            <Input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 border rounded"        
            />
            <div className="grid grid-cols-3 gap-2">

            <Button type="submit">Send Reset Link</Button>
            <Button asChild variant={"outline"}>
                <Link href="/login">Sign In</Link>
            </Button>
            </div>
            {message && <p>{message}</p>}
       </form>
    )

}