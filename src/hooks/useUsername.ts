import { useEffect, useState } from 'react'
import { getUsers, editUser } from '../services/users'
import { User } from '../types'
import { useNavigate } from 'react-router-dom'

export function useUsername() {
  const [username, setUsername] = useState('')
  const [data, setData] = useState<User>()
  const [error, setError] = useState('')
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
    if (e.target.value.length === 0) {
      setError('⚠ Username is required')
    }
    else if (e.target.value.length > 20) {
      setError('⚠ Username must be less than 20 characters long')
    }
    else if (e.target.value.match(/[^a-zA-Z0-9]/)) {
      setError('⚠ Username must contain only letters and numbers')
    }
    else {
      setError('')
    }
  }

  const handleUsernameSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!error) {
      editUser({ ...data, username: username } as User).then(() => {
        console.log('Username updated!')
        navigate('/')
      })
    }

  }

  return { username, handleUsername, handleUsernameSubmit, error }
}