import { createTheme, ThemeProvider } from '@mui/material'
import Routes from './routes/Routes'

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  }
})

function App() {

  return (
    <ThemeProvider theme={darkTheme}>
    <Routes />
    </ThemeProvider>
  )
}

export default App
