import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import NameChangeForm from '../components/NameChangeForm'
import PasswordChangeForm from '../components/PasswordChangeForm'
import UsernameChangeForm from '../components/UsernameChangeForm'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/name',
    element: <NameChangeForm />
  },
  {
    path: '/username',
    element: <UsernameChangeForm />
  },
  {
    path: '/password',
    element: <PasswordChangeForm />
  },
])