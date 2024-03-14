'use client'
import { NextAuthProvider } from '@/contexts/nextAuthProvider'
import React from 'react'

function Providers({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <NextAuthProvider>
            {children}
        </NextAuthProvider>
    )
}

export default Providers