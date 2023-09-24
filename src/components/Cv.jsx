import Name from './components/Name';
import PersonalInfo from './components/PersonalInfo';

import './App.css'
import MainSection from './components/MainSection';

function Cv () {

  return (
    <div className='cv'> 
      < Name />
      < PersonalInfo />
      <hr />
      < MainSection />
    </div>
  )
}

export default Cv