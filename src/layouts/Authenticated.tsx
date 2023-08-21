import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import { Container, CssBaseline, Paper, Stack } from '@mui/material'
import { defaultTheme } from './config'

const Authenticated = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('loginid-auth-token')
    if (token === null || token === '') {
      return navigate('/signin')
    }
  }, [navigate])

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="xs" component={Stack}>
        <Paper sx={{mt: '200px'}}>
          <Outlet/>
        </Paper>
      </Container>
    </ThemeProvider>
  )
}

export default Authenticated
