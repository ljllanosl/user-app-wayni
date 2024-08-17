import { useEffect, useState } from 'react'
import { getUsers, editUser } from '../services/users'
import { User } from '../types'
import { useNavigate } from 'react-router-dom'

export function useUsername() {
  const [username, setUsername] = useState('')
  const [data, setData] = useState<User>()
  const navigate = useNavigate()

  useEffect(() => {
    getUsername()
  }, [])

  const getUsername = () => {
    getUsers().then((item: User[]) => {
      setUsername(item[0].username)
      setData(item[0])
    })
  }

  const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setUsername(e.target.value)
  }

  const handleUsernameSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    editUser({ ...data, username: username } as User).then(() => {
      console.log('Username updated!')
    })
    navigate('/')
  }

  return { username, handleUsername, handleUsernameSubmit }
}