import { useEffect, useState } from 'react'
import { fetchUser, editName } from '../services/users'
import { User } from '../types'
import { useNavigate } from 'react-router-dom'

export function useName() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [errorFirstName, setErrorFirstName] = useState('')
  const [errorLastName, setErrorLastName] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    getNames()
  }, [])

  const getNames = () => {
    fetchUser().then((item: User) => {
      const tempArray = item.name.split(' ')
      setFirstName(tempArray[0])
      setLastName(tempArray[1])
    })
  }

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (e.target.name === 'firstName') {
      setFirstName(e.target.value)
      if (e.target.value.length === 0) {
        setErrorFirstName('⚠ First name is required')
      }
      else if (e.target.value.match(/[^a-zA-Z]/)) {
        setErrorFirstName('⚠ First name must contain only letters')
      }
      else {
        setErrorFirstName('')
      }
    }
    else {
      setLastName(e.target.value)
      if (e.target.value.length === 0) {
        setErrorLastName('⚠ Last name is required')
      }
      else if (e.target.value.match(/[^a-zA-Z]/)) {
        setErrorLastName('⚠ Last name must contain only letters')
      }
      else {
        setErrorLastName('')
      }
    }

  }

  const handleNameSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!errorFirstName && !errorLastName) {
      const fullName = `${firstName} ${lastName}`
      editName(fullName).then(() => {
        console.log('Name updated!')
        navigate('/')
      })
    }


  }

  return { firstName, lastName, handleName, handleNameSubmit, errorFirstName, errorLastName }
}