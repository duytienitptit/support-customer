'use client'

import { useMutation, useQuery, Authenticated, Unauthenticated } from 'convex/react'
import { api } from '@workspace/backend/_generated/api'
import { Button } from '@workspace/ui/components/button'
import { SignInButton, UserButton } from '@clerk/nextjs'

export default function Page() {
  const users = useQuery(api.users.getMany)
  const addUser = useMutation(api.users.add)

  return (
    <>
      <Authenticated>
        <div className='flex items-center justify-center min-h-svh'>
          <p>app/web</p>
          <UserButton />
          <Button onClick={() => addUser()}>Add</Button>
          <pre>{JSON.stringify(users, null, 2)}</pre>
        </div>
      </Authenticated>
      <Unauthenticated>
        Must be signed in to view this page
        <SignInButton>Sign In</SignInButton>
      </Unauthenticated>
    </>
  )
}
