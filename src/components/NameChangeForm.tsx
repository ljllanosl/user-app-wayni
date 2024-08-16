import { Box, Button, Container, FormControl, FormLabel, TextField, Typography } from '@mui/material'
import { lightBlue } from '@mui/material/colors'

export default function NameChangeForm() {
  return (
    <Box sx={{ bgcolor: lightBlue[50], height: '100vh' }}>
      <Box sx={{ textAlign: 'center', bgcolor: 'white', py: '1rem' }}>
        <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
          Name
        </Typography>
      </Box>
      <Container maxWidth='sm' component='form' sx={{ display: 'flex', flexDirection: 'column', mt: '2rem', height: '85vh', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'inherit', flexDirection: 'inherit', gap: '2rem' }}>
          <FormControl variant='standard' sx={{ display: 'inherit', flexDirection: 'inherit', gap: '1rem' }}>
            <FormLabel htmlFor='first-name'>First Name</FormLabel>
            <TextField id='first-name' placeholder='John' sx={{ bgcolor: 'white' }}></TextField>
          </FormControl>
          <FormControl variant='standard' sx={{ display: 'inherit', flexDirection: 'inherit', gap: '1rem' }}>
            <FormLabel htmlFor='last-name'>Last Name</FormLabel>
            <TextField id='last-name' placeholder='Smith' sx={{ bgcolor: 'white' }}></TextField>
          </FormControl>
        </Box>

        <Button variant='contained' color='primary' type='submit'>
          Save
        </Button>
      </Container>
    </Box>
  )
}