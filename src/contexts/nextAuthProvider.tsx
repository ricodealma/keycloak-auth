'use client'
import { signIn, useSession } from 'next-auth/react'
import { useEffect } from "react"
import { SessionProvider } from 'next-auth/react'
import type { SessionProviderProps } from 'next-auth/react'

const AuthProvider = ({ children, ...rest }: SessionProviderProps) => {
    const { status } = useSession()

    useEffect(() => {
        if (status === 'unauthenticated') {
            void signIn('keycloak')
        }
        console.log(status)
    }, [status])

    return <></>
}

export const NextAuthProvider = ({ children, ...rest }: SessionProviderProps) => {

    return (
        <SessionProvider {...rest}>
            <AuthProvider>
                {children}
            </AuthProvider>
        </SessionProvider>)
}