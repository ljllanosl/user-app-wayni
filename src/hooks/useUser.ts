import { useEffect, useState } from 'react'
import { getUsers } from '../services/users'
import { User } from '../types'

export function useUser() {
  const [user, setUser] = useState<User>()

  useEffect(() => {
    getUser()
  }, [])

  const getUser = () => {
    getUsers().then((item: User[]) => {
      setUser(item[0])
    })
  }

  return { user }
}