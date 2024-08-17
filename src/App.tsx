import './App.css'
import { List, ListItem, ListItemText, Divider, Box, Typography, Container } from '@mui/material'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { lightBlue } from '@mui/material/colors'
import { useUser } from './hooks/useUser'
import { Link } from 'react-router-dom'

function App() {
  const { user } = useUser()

  return (
    <Box sx={{ bgcolor: '#f6fbff', minHeight: '100vh' }}>
      <Box sx={{ textAlign: 'center', bgcolor: 'white', py: '1rem' }}>
        <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
          Profile Setting
        </Typography>
      </Box>
      <Container maxWidth='sm' sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', mt: '2rem' }}>
        <List sx={{ border: 1, borderColor: lightBlue[100], borderRadius: '16px', bgcolor: 'white' }}>
          <ListItem component={Link} to='/name'>
            <ListItemText primary='Name' secondary={user?.name} />
            <ChevronRightIcon />
          </ListItem>
          <Divider component='li' sx={{ bgcolor: lightBlue[100] }} />
          <ListItem component={Link} to='/username'>
            <ListItemText primary='Username' secondary={user?.username} />
            <ChevronRightIcon />
          </ListItem>
          <Divider component='li' sx={{ bgcolor: lightBlue[100] }} />
          <ListItem component={Link} to='/'>
            <ListItemText primary='Email' secondary={user?.email} />
            <ChevronRightIcon />
          </ListItem>
          <Divider component='li' sx={{ bgcolor: lightBlue[100] }} />
          <ListItem component={Link} to='/'>
            <ListItemText primary='Phone number' secondary={user?.phone} />
            <ChevronRightIcon />
          </ListItem>
          <Divider component='li' sx={{ bgcolor: lightBlue[100] }} />
          <ListItem component={Link} to='/password'>
            <ListItemText primary='Change Password' />
            <ChevronRightIcon />
          </ListItem>
        </List>

        <List sx={{ border: 1, borderColor: lightBlue[100], borderRadius: '16px', bgcolor: 'white' }}>
          <ListItem component={Link} to='/'>
            <ListItemText primary='Delete my account and data' />
            <ChevronRightIcon />
          </ListItem>
        </List>

        <List sx={{ border: 1, borderColor: lightBlue[100], borderRadius: '16px', bgcolor: 'white' }}>
          <ListItem component={Link} to='/'>
            <ListItemText primary='Notification' secondary='On' />
            <ChevronRightIcon />
          </ListItem>
        </List>
      </Container>

    </Box>
  )
}

export default App
