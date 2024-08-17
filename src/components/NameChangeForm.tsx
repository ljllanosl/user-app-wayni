import { Box, Button, Container, TextField, Typography } from '@mui/material'
import { useName } from '../hooks/useName'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { Link } from 'react-router-dom'

export default function NameChangeForm() {

  const { firstName, lastName, handleName, handleNameSubmit, errorLastName, errorFirstName } = useName()

  return (
    <Box sx={{ bgcolor: '#f6fbff', height: '100vh' }}>
      <Box sx={{ textAlign: 'center', bgcolor: 'white', p: '1rem', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box component={Link} to='/'>
          <ArrowBackIcon />
        </Box>
        <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
          Name
        </Typography>
        <ArrowBackIcon sx={{ color: 'white' }} />
      </Box>
      <Container maxWidth='sm' component='form' sx={{ display: 'flex', flexDirection: 'column', mt: '2rem', height: '85vh', justifyContent: 'space-between' }} onSubmit={handleNameSubmit} noValidate>
        <Box sx={{ display: 'inherit', flexDirection: 'inherit', gap: '2rem' }}>
          <Box sx={{ display: 'inherit', flexDirection: 'inherit' }}>
            <Typography variant='caption' display='block' gutterBottom>
              First Name
            </Typography>
            <TextField
              required
              name='firstName'
              value={firstName || ''}
              onChange={handleName}
              error={errorFirstName ? true : false}
              helperText={errorFirstName}
              inputProps={{ maxLength: 20 }}
            ></TextField>
          </Box>
          <Box sx={{ display: 'inherit', flexDirection: 'inherit' }}>
            <Typography variant='caption' display='block' gutterBottom>
              Last Name
            </Typography>
            <TextField
              required
              name='lastName'
              value={lastName || ''}
              onChange={handleName}
              error={errorLastName ? true : false}
              helperText={errorLastName}
              inputProps={{ maxLength: 20 }}
            ></TextField>
          </Box>
        </Box>

        <Button variant='contained' color='primary' type='submit'>
          Save
        </Button>
      </Container>
    </Box>
  )
}