import { useEffect, useState } from 'react'
import { fetchUser } from '../services/users'
import { User } from '../types'

export function useUser() {
  const [user, setUser] = useState<User>()

  useEffect(() => {
    getUser()
  }, [])

  const getUser = () => {
    fetchUser().then((item: User) => {
      setUser(item)
    })
  }

  return { user }
}