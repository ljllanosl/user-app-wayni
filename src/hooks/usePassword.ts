import { useEffect, useState } from 'react'
import { editUser, fetchUser, verifyPassword } from '../services/users'
import { User } from '../types'
import { useNavigate } from 'react-router-dom'

export function usePassword() {
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [data, setData] = useState<User>()
  const [errorCurrentPassword, setErrorCurrentPassword] = useState('')
  const [errorNewPassword, setErrorNewPassword] = useState('')
  const [errorConfirmPassword, setErrorConfirmPassword] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    fetchUser().then((item: User) => {
      setData(item)
    })
  }, [])

  useEffect(() => {
    // new password validation
    if (newPassword.length === 0) {
      setErrorNewPassword('⚠ New password is required')
    }
    else if (newPassword.length < 8) {
      setErrorNewPassword('⚠ New password must be at least 8 characters long')
    }
    else if (!newPassword.match(/[0-9]/)) {
      setErrorNewPassword('⚠ New password must contain at least one number')
    }
    else if (!newPassword.match(/[a-z]/)) {
      setErrorNewPassword('⚠ New password must contain at least one lowercase letter')
    }
    else if (!newPassword.match(/[A-Z]/)) {
      setErrorNewPassword('⚠ New password must contain at least one uppercase letter')
    }
    else {
      setErrorNewPassword('')
    }
    // confirm password validation
    if (confirmPassword.length === 0) {
      setErrorConfirmPassword('⚠ Please confirm your new password')
    }
    else if (confirmPassword !== newPassword) {
      setErrorConfirmPassword('⚠ Passwords do not match')
    }
    else {
      setErrorConfirmPassword('')
    }
  }, [newPassword, confirmPassword])

  const handleCurrentPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setCurrentPassword(e.target.value)
    if (e.target.value.length === 0) {
      setErrorCurrentPassword('⚠ Current password is required')
    } else {
      setErrorCurrentPassword('')
    }
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
    verifyPassword(currentPassword).then((res) => {
      if (res.isValid) {
        if (!errorConfirmPassword && !errorNewPassword && newPassword && confirmPassword) {
          editUser({ ...data, password: newPassword } as User).then(() => {
            console.log('Password updated!')
            navigate('/')
          })
        }
      } else {
        setErrorCurrentPassword('⚠ Current password is incorrect')
      }
    })
  }

  return { currentPassword, newPassword, confirmPassword, handleCurrentPassword, handleNewPassword, handleConfirmPassword, handlePasswordSubmit, errorNewPassword, errorConfirmPassword, errorCurrentPassword }

}