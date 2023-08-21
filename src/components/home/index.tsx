import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Stack, Typography } from '@mui/material'
import jwtDecode from 'jwt-decode'

const Home = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')

  useEffect(() => {
    const token = localStorage.getItem('loginid-auth-token')
    if (token) {
      const payload = jwtDecode<{udata: string}>(token)
      setUsername(payload.udata)
    }
  }, [])

  const onLogoutClick = () => {
    localStorage.removeItem('loginid-auth-token')
    setUsername('')
    return navigate('/signin')
  }

  return (
    <Stack 
      direction="column" 
      padding={2}
    >
      <Typography 
        variant="h4" 
        component="h2" 
        textAlign="center" 
        marginTop="50px"
      >
        Hello <strong>{username}</strong>
      </Typography>
      <Typography 
        variant="h4" 
        component="h2" 
        textAlign="center" 
        marginTop="20px" 
        marginBottom="50px"
      >
        👋
      </Typography>
      <Button 
        variant="contained" 
        sx={{mt: '20px'}}
        onClick={onLogoutClick}
      >
        Logout
      </Button>
    </Stack>
  )
}

export default Home
