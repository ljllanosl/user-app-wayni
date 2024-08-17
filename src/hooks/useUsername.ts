import { useEffect, useState } from 'react'
import { fetchUser, editUsername } from '../services/users'
import { User } from '../types'
import { useNavigate } from 'react-router-dom'

export function useUsername() {
  const [username, setUsername] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    getUsername()
  }, [])

  const getUsername = () => {
    fetchUser().then((item: User) => {
      setUsername(item.username)
    })
  }

  const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setUsername(e.target.value)
    if (e.target.value.length === 0) {
      setError('⚠ Username is required')
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
      editUsername(username).then(() => {
        console.log('Username updated!')
        navigate('/')
      })
    }

  }

  return { username, handleUsername, handleUsernameSubmit, error }
}