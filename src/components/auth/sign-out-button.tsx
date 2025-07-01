
// import { signOut } from "@/lib/auth/auth-client";
// import { Icons } from "../ui/icons";
// import { useRouter } from "next/navigation";

// export default function SignOutButton(){
//     const router= useRouter();
//    const handleClick = async () => {
//     await signOut({
//       fetchOptions: {
//         onSuccess: () => {
//           router.push('/login')
//         },
//       },
//     });
//    };


//     return(
//         <div 
//         onClick={handleClick}
//         className="flex items-center justify-between w-18 cursor-pointer">
//    <Icons.logOut />
//     Log Out
//         </div>
        
//     );
// }
"use client";

import { signOut } from "@/lib/auth/auth-client";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

export default function SignOutButton() {
  const router = useRouter();

  const handleClick = async () => {
    try {
      await signOut();
      router.push("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <DropdownMenuItem onClick={handleClick}>
      <LogOut className="mr-2 h-4 w-4" />
      <span>Log Out</span>
    </DropdownMenuItem>
  );
}
