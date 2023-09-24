import { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import './App.css';
import Cv from './components/Cv';
import Form from './components/Form';


const skillsArray = [];

function App() {
    const [nameInput, setNameInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [phoneInput, setPhoneInput] = useState('');
    const [addressInput, setAddressInput] = useState('');
    const [titleInput, setTitleInput] = useState('');
    const [profileInput, setProfileInput] = useState('');

    const [skills, setSkills] = useState(skillsArray);
    const [skillsInput, setSkillsInput] = useState('');

    const handleInputChange = (newValue) => {
        setNameInput(newValue);
    };

    const handleEmailInput = (newValue) => {
        setEmailInput(newValue);
    };

    const handlePhoneInput = (newValue) => {
        setPhoneInput(newValue);
    };

    const handleAddressInput = (newValue) => {
        setAddressInput(newValue);
    };

    const handleTitleInput = (newValue) => {
        setTitleInput(newValue);
    };

    const handleProfileInput = (newValue) => {
        setProfileInput(newValue);
    };

    const handleSkillsInput = (newSkill) => {
        setSkillsInput(newSkill)
    };

    const handleAddSkill = (event, newSkill) => {
        event.preventDefault()
        setSkills([...skills, {id: uuidv4(), skill: newSkill}]);
        setSkillsInput('')
    };

    return (
        <div className='app'>
            <Form
                nameInput={nameInput}
                emailInput={emailInput}
                phoneInput={phoneInput}
                addressInput={addressInput}
                titleInput={titleInput}
                profileInput={profileInput}
                skills={skills}
                skillsInput={skillsInput}
                handleInputChange={handleInputChange}
                handleEmailInput={handleEmailInput}
                handlePhoneInput={handlePhoneInput}
                handleAddressInput={handleAddressInput}
                handleTitleInput={handleTitleInput}
                handleProfileInput={handleProfileInput}
                handleAddSkill={handleAddSkill}
                handleSkillsInput={handleSkillsInput}
            />
            <Cv
                nameInput={nameInput}
                emailInput={emailInput}
                phoneInput={phoneInput}
                addressInput={addressInput}
                titleInput={titleInput}
                profileInput={profileInput}
                skills={skills}
                handleInputChange={handleInputChange}
                handleEmailInput={handleEmailInput}
                handlePhoneInput={handlePhoneInput}
                handleAddressInput={handleAddressInput}
                handleTitleInput={handleTitleInput}
                handleProfileInput={handleProfileInput}
            />
        </div>
    );
}

export default App;

