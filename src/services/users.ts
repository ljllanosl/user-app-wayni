import { User } from '../types'

export const fetchUser = async () => {
  try {
    const res = await fetch(`${import.meta.env.VITE_USER_API}/1`)
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`)
    }
    const data = await res.json()
    return data
  } catch (error) {
    console.error('There was an error with the fetch operation:', error)
  }
}

export const editUser = async (user: User) => {
  try {
    const res = await fetch(`${import.meta.env.VITE_USER_API}/1`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`)
    }
  } catch (error) {
    console.error('There was an error with the fetch operation:', error)
  }
}

export const editUsername = async (username: string) => {
  try {
    const res = await fetch(`${import.meta.env.VITE_USER_API}/1`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify([{
        'op': 'replace',
        'path': '/username',
        'value': username
      }])
    })
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`)
    }
  } catch (error) {
    console.error('There was an error with the fetch operation:', error)
  }
}

export const editName = async (name: string) => {
  try {
    const res = await fetch(`${import.meta.env.VITE_USER_API}/1`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify([{
        'op': 'replace',
        'path': '/name',
        'value': name
      }])
    })
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`)
    }
  } catch (error) {
    console.error('There was an error with the fetch operation:', error)
  }
}

export const verifyPassword = async (password: string) => {
  try {
    const res = await fetch(`${import.meta.env.VITE_USER_API}/VerifyPassword`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 'userId': 1, 'currentPassword': password })
    })
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`)
    }
    const data = await res.json()
    return data
  }
  catch (error) {
    console.error('There was an error with the fetch operation:', error)
  }
}