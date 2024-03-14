import NextAuth from "next-auth"
import KeycloakProvider from "next-auth/providers/keycloak";

export const authOptions = {
    providers: [
        KeycloakProvider({
            clientId: `${process.env.REACT_AUTH_CLIENT_ID}`,
            clientSecret: `${process.env.REACT_AUTH_CLIENT_SECRET}`,
            issuer: `${process.env.AUTH_ISSUER}`,
        })
    ]
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }





