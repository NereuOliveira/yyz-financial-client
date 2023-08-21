import React, { useState } from 'react'
import { Button, Stack, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Logo from '@/assets/logo.svg'

const Signup = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const onSigninClick = () => {
    return navigate('/signin')
  }

  const onUsernameChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setUsername(e.target.value)
    if (errorMessage !== '') {
      setErrorMessage('')
    }
  }

  return (
    <Stack 
      direction="column" 
      padding={2}
    >
      <img 
        src={Logo} 
        alt="YYZ Financial" 
        style={{margin: '30px'}}
      />
      <TextField 
        error={errorMessage !== ''}
        label="Username" 
        variant="outlined" 
        size="small" 
        sx={{mt: '20px'}} 
        value={username}
        helperText={errorMessage}
        onChange={onUsernameChange}
      />
      <Button 
        variant="contained" 
        sx={{mt: '20px'}}
      >
        Signup
      </Button>
      <Button 
        variant="text" 
        sx={{mt: '5px'}} 
        onClick={onSigninClick}
      >
        Already have an account?
      </Button>
    </Stack>
  )
}

export default Signup
