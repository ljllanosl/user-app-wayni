import { useEffect, useState } from 'react'
import { getUsers, editUser } from '../services/users'
import { User } from '../types'
import { useNavigate } from 'react-router-dom'

export function useName() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [data, setData] = useState<User>()
  const navigate = useNavigate()

  useEffect(() => {
    getNames()
  }, [])

  const getNames = () => {
    getUsers().then((item: User[]) => {
      const tempArray = item[0].name.split(' ')
      setFirstName(tempArray[0])
      setLastName(tempArray[1])
      setData(item[0])
    })
  }

  const handleFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setFirstName(e.target.value)
  }

  const handleLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setLastName(e.target.value)
  }

  const handleNameSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const fullName = `${firstName} ${lastName}`
    editUser({ ...data, name: fullName } as User).then(() => {
      console.log('Name updated!')
    })
    navigate('/')
  }

  return { firstName, lastName, handleFirstName, handleLastName, handleNameSubmit }
}