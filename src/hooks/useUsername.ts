import { useEffect, useState } from 'react'
import { getUsers } from '../services/users'
import { User } from '../types'

export function useUsername() {
  const [username, setUsername] = useState('')

  useEffect(() => {
    getUsername()
  }, [])

  const getUsername = () => {
    getUsers().then((item: User[]) => {
      setUsername(item[0].username)
    })
  }

  const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setUsername(e.target.value)
  }
  
  return { username, handleUsername }
}