'use client'

import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import { signIn, useSession } from 'next-auth/react'
import { useEffect } from "react"
import Loading from "@/components/Loading"
import { Skeleton } from '../../node_modules/@mui/material/index'



export default function Home() {

  const { status } = useSession()

  useEffect(() => {
    if (status === 'unauthenticated') {
      void signIn('keycloak')
    }
  }, [status])

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
      Main Page
    </div>
  )

}