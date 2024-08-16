import { useEffect, useState } from 'react'
import { getUsers } from '../services/users'
import { User } from '../types'

export function usePassword() {
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  useEffect(() => {
    getPassword()
  }, [])

  const getPassword = () => {
    getUsers().then((item: User[]) => {
      setCurrentPassword(item[0].password)
    })
  }

  const handleCurrentPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setCurrentPassword(e.target.value)
  }

  const handleNewPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setNewPassword(e.target.value)
  }

  const handleConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setConfirmPassword(e.target.value)
  }

  return { currentPassword, newPassword, confirmPassword, handleCurrentPassword, handleNewPassword, handleConfirmPassword }

}