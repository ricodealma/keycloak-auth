'use client'
import { useRouter } from "../../../node_modules/next/navigation"
import { signIn, useSession } from 'next-auth/react'
import { useEffect } from "react"
import Loading from "@/components/Loading"
import { Skeleton } from "../../../node_modules/@mui/material/index"

export default function privatePage() {
    const router = useRouter()
    const { status } = useSession()

    useEffect(() => {
        if (status === 'unauthenticated') {
            void signIn('keycloak')
        }
    }, [status])
    const style = {
        width: '100%',
        height: '60%',
        boxSizing: 'border-box'
    };
    if (status === 'loading') return (

        <div style={style}>
            <Skeleton width="100%" />
        </div>

    )

    if (status === 'unauthenticated') return (
        <Loading />
    )
    else return (
        <div>
            To-do
        </div>
    )
}