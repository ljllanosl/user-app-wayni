const USER_API = 'https://localhost:7244/api/UserItems'

export const fetchUser = async () => {
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
