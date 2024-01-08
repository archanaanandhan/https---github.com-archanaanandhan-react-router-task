import React from 'react'
import TopBar from './components/TopBar'
import All from './components/All'
import FullStrackDevlopment  from'./components/FullStrackDevlopment'
import CeyberSecurity from './components/CeyberSecurity'
import DataScience from './components/DataScience'
import Career from './components/Career'
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom'

function App() {

  return <>
  <BrowserRouter>
  <TopBar/>
  <Routes>
    <Route path='/all' element={<All />}/>
    <Route path='/fullstrackdevlopment' element={<FullStrackDevlopment/>}/>
    <Route path='/datascience'  element={<DataScience/>}/>
    <Route path='/ceybersecurity' element={<CeyberSecurity/>}/>
    <Route path='/career' element={<Career/>}/>
    <Route path='/*' element={<Navigate to='/all'/>}/>
  </Routes>
  </BrowserRouter>
  </>
    
  
}

export default App


