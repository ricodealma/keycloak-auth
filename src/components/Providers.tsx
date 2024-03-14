'use client'
import { AuthProvider, NextAuthProvider } from '@/contexts/nextAuthProvider'
import React from 'react'



function Providers({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    console.log('oi')
    return (
        <NextAuthProvider>
            {children}
        </NextAuthProvider>
    )
}

export default Providers