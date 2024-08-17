import { Box, Button, Container, TextField, Typography } from '@mui/material'
import { useUsername } from '../hooks/useUsername'
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

export default function UsernameChangeForm() {
  const { username, handleUsername, handleUsernameSubmit, error } = useUsername()

  return (
    <Box sx={{ bgcolor: '#f6fbff', height: '100vh' }}>
      <Box sx={{ textAlign: 'center', bgcolor: 'white', p: '1rem', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box component={Link} to='/'>
          <ArrowBackIcon />
        </Box>
        <Typography variant='h5' sx={{ fontWeight: 'bold' }} >
          User Name
        </Typography>
        <ArrowBackIcon sx={{ color: 'white' }} />
      </Box>
      <Container maxWidth='sm' component='form' sx={{ display: 'flex', flexDirection: 'column', mt: '2rem', height: '85vh', justifyContent: 'space-between' }} onSubmit={handleUsernameSubmit} noValidate>
        <Box sx={{ display: 'inherit', flexDirection: 'inherit' }}>
          <Typography variant='caption' display='block' gutterBottom>
            User Name
          </Typography>
          <TextField
            required
            id='username'
            name='username'
            value={username || ''}
            onChange={handleUsername}
            error={error ? true : false}
            helperText={error}
            inputProps={{ maxLength: 30 }}
          />
        </Box>

        <Button variant='contained' color='success' type='submit'>
          Save
        </Button>
      </Container>
    </Box>
  )
}