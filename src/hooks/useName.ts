import { useEffect, useState } from 'react'
import { getUsers } from '../services/users'
import { User } from '../types'

export function useName() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  useEffect(() => {
    getNames()
  }, [])

  const getNames = () => {
    getUsers().then((item: User[]) => {
      const tempArray = item[0].name.split(' ')
      setFirstName(tempArray[0])
      setLastName(tempArray[1])
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

  return { firstName, lastName, handleFirstName, handleLastName }
}