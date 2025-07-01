import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { resetPassword } from "@/lib/auth/auth-client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";


export default function Page(){
    const [password, setPassword] = useState("")
    const [message ,setMessage] = useState("")
    const searchParams = useSearchParams();
    const token = searchParams.get("token")
    const router = useRouter();

    useEffect(() =>{
        if(!token){
            setMessage("Invalid or Missing token")
        }   
    },[token]);


    const handleSubmit = async (e: React.FormEvent) => {
e.preventDefault();


    if (!token) {
      setMessage("Missing or invalid token");
      return;
    }

const {error} = await resetPassword({
   token,
   newPassword: password,
});
if(error){
    setMessage("Faild to reset password");
}else{
 setMessage("Password reest ! Now You Can sign in ")
 setTimeout(() => router.push("/login"),3000)
}
    }
    
    return (
       <form
        onSubmit={handleSubmit}
        className="p-6 max-w-md mx-auto space-y-4 container"
        >
            <h1 className="text-x1 font-semibold"> Reset Password? </h1>
            {message && <p>{message}</p>}
            <Input
            type="password"
            placeholder="New Passwoed"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-2 border "        
            />
           

            <Button type="submit"> Reset password</Button>
            
            
       </form>
    )
}