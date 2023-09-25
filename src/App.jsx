import { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import './App.css';
import Cv from './components/Cv';
import Form from './components/Form';

const skillsArray = [];
const referencesArray = [];

function App() {
    const [nameInput, setNameInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [phoneInput, setPhoneInput] = useState('');
    const [addressInput, setAddressInput] = useState('');
    const [titleInput, setTitleInput] = useState('');
    const [profileInput, setProfileInput] = useState('');

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

    const [skills, setSkills] = useState(skillsArray);
    const [skillsInput, setSkillsInput] = useState('');

    const handleSkillsInput = (newSkill) => {
        setSkillsInput(newSkill);
    };

    const handleAddSkill = (event) => {
        event.preventDefault();
        setSkills([...skills, { id: uuidv4(), skill: skillsInput }]);
        setSkillsInput('');
    };

    const [referenceName, setReferenceName] = useState('');
    const [referenceEmail, setReferenceEmail] = useState('');
    const [referencePhone, setReferencePhone] = useState('');
    const [references, setReferences] = useState(referencesArray)

    const referenceNameInput = (name) => {
        setReferenceName(name)
    };

    const referenceEmailInput = (email) => {
        setReferenceEmail(email)
    };

    const referencePhoneInput = (phone) => {
        setReferencePhone(phone)
    };

    const handleAddReference = (e) => {
        e.preventDefault();
        setReferences([
            ...references,
            {
                id: uuidv4(),
                name: referenceName,
                email: referenceEmail,
                phone: referencePhone,
            },
        ]);
        setReferenceName('');
        setReferenceEmail('');
        setReferencePhone('');
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
                referenceName={referenceName}
                referenceEmail={referenceEmail}
                referencePhone={referencePhone}
                references={references}
                handleInputChange={handleInputChange}
                handleEmailInput={handleEmailInput}
                handlePhoneInput={handlePhoneInput}
                handleAddressInput={handleAddressInput}
                handleTitleInput={handleTitleInput}
                handleProfileInput={handleProfileInput}
                handleAddSkill={handleAddSkill}
                handleSkillsInput={handleSkillsInput}
                referenceNameInput={referenceNameInput}
                referenceEmailInput={referenceEmailInput}
                referencePhoneInput={referencePhoneInput}
                handleAddReference={handleAddReference}
            />
            <Cv
                nameInput={nameInput}
                emailInput={emailInput}
                phoneInput={phoneInput}
                addressInput={addressInput}
                titleInput={titleInput}
                profileInput={profileInput}
                skills={skills}
                references={references}
            />
        </div>
    );
}

export default App;
