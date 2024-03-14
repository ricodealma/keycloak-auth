import NextAuth from "next-auth"
import KeycloakProvider from "next-auth/providers/keycloak";
import { signIn } from 'next-auth/react'

export const authOptions = {
    providers: [
        KeycloakProvider({
            clientId: `${process.env.REACT_AUTH_CLIENT_ID}`,
            clientSecret: `${process.env.REACT_AUTH_CLIENT_SECRET}`,
            issuer: `${process.env.AUTH_ISSUER}`,
        })
    ],
    callbacks: {
        async signIn() {
            await signIn('keycloak')
        },
    }
}


