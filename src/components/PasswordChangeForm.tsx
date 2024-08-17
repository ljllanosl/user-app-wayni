import { Box, Button, Container, TextField, Typography } from '@mui/material'
import { usePassword } from '../hooks/usePassword'
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

export default function PasswordChangeForm() {
  const { currentPassword, newPassword, confirmPassword, handleCurrentPassword, handleNewPassword,
    handleConfirmPassword, handlePasswordSubmit, errorNewPassword, errorConfirmPassword, errorCurrentPassword } = usePassword()

  return (
    <Box sx={{ bgcolor: '#f6fbff', height: '100vh' }}>
      <Box sx={{ textAlign: 'center', bgcolor: 'white', p: '1rem', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box component={Link} to='/'>
          <ArrowBackIcon />
        </Box>
        <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
          Change Password
        </Typography>
        <ArrowBackIcon sx={{ color: 'white' }} />
      </Box>
      <Container maxWidth='sm' component='form' sx={{ display: 'flex', flexDirection: 'column', mt: '2rem', height: '85vh', justifyContent: 'space-between' }} onSubmit={handlePasswordSubmit} noValidate>
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
              error={errorCurrentPassword ? true : false}
              helperText={errorCurrentPassword}
              inputProps={{ maxLength: 16 }}
            ></TextField>
          </Box>
          <Box sx={{ display: 'inherit', flexDirection: 'inherit' }}>
            <Typography variant='caption' display='block' gutterBottom>
              New Password
            </Typography>
            <TextField
              required
              name='newPassword'
              type='password'
              value={newPassword || ''}
              onChange={handleNewPassword}
              error={errorNewPassword ? true : false}
              helperText={errorNewPassword}
              inputProps={{ maxLength: 16 }}
            ></TextField>
          </Box>
          <Box sx={{ display: 'inherit', flexDirection: 'inherit' }}>
            <Typography variant='caption' display='block' gutterBottom>
              Confirm Password
            </Typography>
            <TextField
              required
              name='confirmPassword'
              type='password'
              value={confirmPassword || ''}
              onChange={handleConfirmPassword}
              error={errorConfirmPassword ? true : false}
              helperText={errorConfirmPassword}
              inputProps={{ maxLength: 16 }}
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