import { User } from '../types'

const USER_API = 'https://localhost:7244/api/UserItems'

export const getUsers = async () => {
  try {
    const res = await fetch(USER_API)
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`)
    }
    const data = await res.json()
    return data
  } catch (error) {
    console.error('There was an error with the fetch operation:', error)
  }
}

export const updateUser = async (user: User) => {
  try {
    const res = await fetch(`${USER_API}/1`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`)
    }
    const data = await res.json()
    return data
  } catch (error) {
    console.error('There was an error with the fetch operation:', error)
  }
}