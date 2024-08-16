import { Box, Button, Container, TextField, Typography } from '@mui/material'
import { lightBlue } from '@mui/material/colors'
import { usePassword } from '../hooks/usePassword'

export default function PasswordChangeForm() {
  const { currentPassword, newPassword, confirmPassword, handleCurrentPassword, handleNewPassword, handleConfirmPassword } = usePassword()

  return (
    <Box sx={{ bgcolor: lightBlue[50], height: '100vh' }}>
      <Box sx={{ textAlign: 'center', bgcolor: 'white', py: '1rem' }}>
        <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
          Change Password
        </Typography>
      </Box>
      <Container maxWidth='sm' component='form' sx={{ display: 'flex', flexDirection: 'column', mt: '2rem', height: '85vh', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'inherit', flexDirection: 'inherit', gap: '2rem' }}>
          <Box sx={{ display: 'inherit', flexDirection: 'inherit' }}>
            <Typography variant='caption' display='block' gutterBottom>
              Current Password
            </Typography>
            <TextField
              type='password'
              name='currentPassword'
              value={currentPassword || ''}
              onChange={handleCurrentPassword}
              sx={{ bgcolor: 'white' }}
            ></TextField>
          </Box>
          <Box sx={{ display: 'inherit', flexDirection: 'inherit' }}>
            <Typography variant='caption' display='block' gutterBottom>
              New Password
            </Typography>
            <TextField
              name='newPassword'
              value={newPassword || ''}
              onChange={handleNewPassword}
              sx={{ bgcolor: 'white' }}
            ></TextField>
          </Box>
          <Box sx={{ display: 'inherit', flexDirection: 'inherit' }}>
            <Typography variant='caption' display='block' gutterBottom>
              Confirm Password
            </Typography>
            <TextField
              name='confirmPassword'
              value={confirmPassword || ''}
              onChange={handleConfirmPassword}
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