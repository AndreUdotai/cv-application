// import { useState } from 'react'

import './App.css'
import MainSection from './components/MainSection';
import PersonalDetails from './components/PersonalDetails';

function App() {

  return (
    <div className='app'>
      < PersonalDetails />
      <hr />
      < MainSection />
    </div>
  )
}

export default App
