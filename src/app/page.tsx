'use client'

import { getServerSession } from 'next-auth'
import { signIn } from 'next-auth/react'
import { authOptions } from './api/auth/[...nextauth]/route'


export default async function Home() {
  const session = await getServerSession(authOptions)
  if (session) {
    return <div>
      <div>Your name is {session.user?.name}</div>
      <div>Your email is {session.user?.email}</div>
    </div>
  }
  return (
    <div>
      <button onClick={() => signIn('keycloak')}>Faça login com keycloak</button>
    </div>
  )
}