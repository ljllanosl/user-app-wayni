const USER_API = 'https://localhost:7244/api/UserItems'

export const fetchUser = async () => {
  const res = await fetch(USER_API)
  const data = await res.json()
  return data
}
