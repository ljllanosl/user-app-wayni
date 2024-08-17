import { useEffect, useState } from 'react'
import { editUser, getUsers } from '../services/users'
import { User } from '../types'
import { useNavigate } from 'react-router-dom'

export function usePassword() {
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [data, setData] = useState<User>()
  const navigate = useNavigate()

  useEffect(() => {
    getPassword()
  }, [])

  const getPassword = () => {
    getUsers().then((item: User[]) => {
      setCurrentPassword(item[0].password)
      setData(item[0])
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

  const handlePasswordSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (newPassword === confirmPassword) {
      editUser({ ...data, password: newPassword } as User).then(() => {
        console.log('Password updated!')
      })
      navigate('/')
    } else {
      console.log('Passwords do not match!')
    }
  }

  return { currentPassword, newPassword, confirmPassword, handleCurrentPassword, handleNewPassword, handleConfirmPassword , handlePasswordSubmit}

}