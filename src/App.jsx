import {  CssBaseline, ThemeProvider } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import { ColorModeContext, useMode } from './theme'
import  TopBar  from './scenses/global/TopBar'
import  SideBar  from './scenses/global/SideBar'
import  DashBoard  from './scenses/dashboard/index'
import  Team  from './scenses/team'
import  Contacts  from './scenses/contacts'
import  Invoices  from './scenses/invoices'
import  Form  from './scenses/form'
import  Bar  from './scenses/bar'
import  Line  from './scenses/line'
import  Pie  from './scenses/pie'
import  FAQ  from './scenses/faq'
import  Geography from './scenses/geography'

export default function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className='app'>
          <SideBar />
          <main className='content'>
            <TopBar />
            <Routes>
              <Route path='/' element={<DashBoard />}/>
              <Route path='/team' element={<Team />}/>
              <Route path='/contacts' element={<Contacts />}/>
              <Route path='/invoices' element={<Invoices />}/>
              <Route path='/form' element={<Form />}/>
              <Route path='/bar' element={<Bar />}/>
              <Route path='/line' element={<Line />}/>
              <Route path='/pie' element={<Pie />}/>
              <Route path='/faq' element={<FAQ />}/>
              <Route path='/geography' element={<Geography />}/>
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
  