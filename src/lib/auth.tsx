import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { db } from "./prisma";
// If your Prisma file is located elsewhere, you can change the path


export const auth = betterAuth({
    database: prismaAdapter(db, {
        provider: "mysql", // or "mysql", "postgresql", ...etc
    }),
    emailAndPassword: {  
        enabled: true,
        minPasswordLength: 8,
        maxPasswordLength: 128,
        autoSignIn:true,
    },
    //to allow user create with password and email and later on sign in in google accout.
    account: {
accountLinking:{
    enabled: true
}
    },
    socialProviders: { 
        github: { 
           clientId: process.env.GITHUB_CLIENT_ID as string, 
           clientSecret: process.env.GITHUB_CLIENT_SECRET as string, 
        },
         google: { 
           clientId: process.env.GOOGLE_CLIENT_ID as string, 
           clientSecret: process.env.GOOGLE_CLIENT_SECRET as string, 
        },  
    }, 
});