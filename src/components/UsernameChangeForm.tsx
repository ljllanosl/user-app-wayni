import { Box, Button, Container, TextField, Typography } from '@mui/material'
import { lightBlue } from '@mui/material/colors'
import { useUsername } from '../hooks/useUsername'

export default function UsernameChangeForm() {
  const { username, handleUsername, handleUsernameSubmit } = useUsername()

  return (
    <Box sx={{ bgcolor: lightBlue[50], height: '100vh' }}>
      <Box sx={{ textAlign: 'center', bgcolor: 'white', py: '1rem' }}>
        <Typography variant='h5' sx={{ fontWeight: 'bold' }} >
          User Name
        </Typography>
      </Box>
      <Container maxWidth='sm' component='form' sx={{ display: 'flex', flexDirection: 'column', mt: '2rem', height: '85vh', justifyContent: 'space-between' }} onSubmit={handleUsernameSubmit}>
        <Box sx={{ display: 'inherit', flexDirection: 'inherit' }}>
          <Typography variant='caption' display='block' gutterBottom>
            User Name
          </Typography>
          <TextField
            id='username'
            name='username'
            value={username || ''}
            onChange={handleUsername}
            sx={{ bgcolor: 'white' }} />
        </Box>

        <Button variant='contained' color='primary' type='submit'>
          Save
        </Button>
      </Container>
    </Box>
  )
}