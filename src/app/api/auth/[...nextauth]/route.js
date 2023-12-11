import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/User";
import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';

const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_SECRET_ID
        })
    ],
    callbacks: {
        async signIn({user, account}) {
            console.log("User:", user)
            console.log("Account: ", account)

            try {
                await connectMongoDB();
                const { name, email } = user

                const userExists = await User.findOne({email})

                if(!userExists) {
                    if(account.provider === 'google') {
                       
                        const res = await fetch('http://localhost:3000/api/user', {
                            method: 'POST',
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                name, email
                            })
                        })
                    }
                    if(res.ok) {
                        return user
                    }
                }

            } catch (error) {
                console.log(error)
            }

            return user
        }
    }
}

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST}