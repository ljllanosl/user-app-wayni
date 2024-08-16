import { useState } from 'react'
import './App.css'
import { List, ListItem, ListItemText, Divider, Box, Typography } from '@mui/material'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { lightBlue } from '@mui/material/colors'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Box sx={{ bgcolor: lightBlue[50], minHeight: '100vh' }}>
      <Box sx={{ textAlign: 'center', bgcolor: 'white', py: '1rem' }}>
        <Typography variant='h5' sx={{fontWeight: 'bold'}}>
          Profile Setting
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', m: '2rem' }}>

        <List sx={{ border: 1, borderColor: lightBlue[100], borderRadius: '16px', width: '100%', maxWidth: '1280px', bgcolor: 'white', margin: '0 auto' }}>
          <ListItem>
            <ListItemText primary='Name' secondary='John Smith' />
            <ChevronRightIcon />
          </ListItem>
          <Divider component='li' sx={{ bgcolor: lightBlue[100] }} />
          <ListItem>
            <ListItemText primary='Email' secondary='johnsmith@email.com' />
            <ChevronRightIcon />
          </ListItem>
          <Divider component='li' sx={{ bgcolor: lightBlue[100] }} />
          <ListItem>
            <ListItemText primary='Phone number' secondary='990442696' />
            <ChevronRightIcon />
          </ListItem>
          <Divider component='li' sx={{ bgcolor: lightBlue[100] }} />
          <ListItem>
            <ListItemText primary='Change Password' />
            <ChevronRightIcon />
          </ListItem>
        </List>

        <List sx={{ border: 1, borderColor: lightBlue[100], borderRadius: '16px', width: '100%', maxWidth: '1280px', bgcolor: 'white', margin: '0 auto' }}>
          <ListItem>
            <ListItemText primary='Delete my account and data' />
            <ChevronRightIcon />
          </ListItem>
        </List>

        <List sx={{ border: 1, borderColor: lightBlue[100], borderRadius: '16px', width: '100%', maxWidth: '1280px', bgcolor: 'white', margin: '0 auto' }}>
          <ListItem>
            <ListItemText primary='Notification' secondary='On' />
            <ChevronRightIcon />
          </ListItem>
        </List>

      </Box>
    </Box>
  )
}

export default App
