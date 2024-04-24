import { useState } from 'react'
import SideNav from './components/SideNav';
import Main from './components/Main';
import Work from './components/Work'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ResumeFiles from './assets/ResumeFiles'

function App() {


  return (
    <div>
      <SideNav />
      <Main />
      <Work />
      <ResumeFiles />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
