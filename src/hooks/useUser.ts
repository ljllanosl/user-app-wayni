import { useEffect, useState } from 'react'
import { getUsers } from '../services/users'
import { User } from '../types'

export function useUser() {
  const [user, setUser] = useState<User>()

  useEffect(() => {
    getUsers().then((newUser: User[]) => {
      setUser(newUser[0])
    })
  }, [])

  return { user }
}