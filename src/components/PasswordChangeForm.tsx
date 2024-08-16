import { Box, Button, Container, FormControl, FormLabel, TextField, Typography } from '@mui/material'
import { lightBlue } from '@mui/material/colors'

export default function PasswordChangeForm() {
  return (
    <Box sx={{ bgcolor: lightBlue[50], height: '100vh' }}>
      <Box sx={{ textAlign: 'center', bgcolor: 'white', py: '1rem' }}>
        <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
          Change Password
        </Typography>
      </Box>
      <Container maxWidth='sm' component='form' sx={{ display: 'flex', flexDirection: 'column', mt: '2rem', height: '85vh', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'inherit', flexDirection: 'inherit', gap: '2rem' }}>
          <FormControl variant='standard' sx={{ display: 'inherit', flexDirection: 'inherit', gap: '1rem' }}>
            <FormLabel htmlFor='current-password'>Current Password</FormLabel>
            <TextField id='current-password' type='password' sx={{ bgcolor: 'white' }}></TextField>
          </FormControl>
          <FormControl variant='standard' sx={{ display: 'inherit', flexDirection: 'inherit', gap: '1rem' }}>
            <FormLabel htmlFor='new-password'>New Password</FormLabel>
            <TextField id='new-password' type='password' sx={{ bgcolor: 'white' }}></TextField>
          </FormControl> 
          <FormControl variant='standard' sx={{ display: 'inherit', flexDirection: 'inherit', gap: '1rem' }}>
            <FormLabel htmlFor='confirm-password'>Confirm Password</FormLabel>
            <TextField id='confirm-password' type='password' sx={{ bgcolor: 'white' }}></TextField>
          </FormControl>
          <Typography color='primary' sx={{textAlign: 'center', fontWeight: 'bold'}}>Forgot password?</Typography>           
        </Box>

        <Button variant='contained' color='primary' type='submit'>
          Save
        </Button>
      </Container>
    </Box>
  )
}