import { useEffect, useState } from 'react'
import { fetchUser } from '../services/users'
import { User } from '../types'

export function useUser() {
  const [user, setUser] = useState<User[]>()

  const getUser = () => {
    fetchUser().then(newUser => {
      setUser(newUser)
    })
  }

  useEffect(() => {
    getUser()
  }, [])

  return { user, getUser }
}