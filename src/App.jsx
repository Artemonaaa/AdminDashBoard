import {  CssBaseline, ThemeProvider } from '@mui/material'
import { ColorModeContext, useMode } from './theme'
import { TopBar } from './scenses/global/TopBar'

export default function App() {
  const [theme, colorMode] = useMode();
  
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className='app'>
          <main className='content'>
            <TopBar />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
