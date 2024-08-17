import { Box, Button, Container, TextField, Typography } from '@mui/material'
import { lightBlue } from '@mui/material/colors'
import { useName } from '../hooks/useName'

export default function NameChangeForm() {

  const { firstName, lastName, handleFirstName, handleLastName, handleNameSubmit } = useName()

  return (
    <Box sx={{ bgcolor: lightBlue[50], height: '100vh' }}>
      <Box sx={{ textAlign: 'center', bgcolor: 'white', py: '1rem' }}>
        <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
          Name
        </Typography>
      </Box>
      <Container maxWidth='sm' component='form' sx={{ display: 'flex', flexDirection: 'column', mt: '2rem', height: '85vh', justifyContent: 'space-between' }} onSubmit={handleNameSubmit}>
        <Box sx={{ display: 'inherit', flexDirection: 'inherit', gap: '2rem' }}>
          <Box sx={{ display: 'inherit', flexDirection: 'inherit' }}>
            <Typography variant='caption' display='block' gutterBottom>
              First Name
            </Typography>
            <TextField
              name='firstName'
              value={firstName || ''}
              onChange={handleFirstName}
              sx={{ bgcolor: 'white' }}
            ></TextField>
          </Box>
          <Box sx={{ display: 'inherit', flexDirection: 'inherit' }}>
            <Typography variant='caption' display='block' gutterBottom>
              Last Name
            </Typography>
            <TextField
              name='lastName'
              value={lastName || ''}
              onChange={handleLastName}
              sx={{ bgcolor: 'white' }}
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