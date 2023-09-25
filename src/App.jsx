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

    const [skills, setSkills] = useState(skillsArray);
    const [skillsInput, setSkillsInput] = useState('');

    const handleSkillsInput = (newSkill) => {
        setSkillsInput(newSkill);
    };

    const handleAddSkill = (event, newSkill) => {
        event.preventDefault();
        setSkills([...skills, { id: uuidv4(), skill: newSkill }]);
        setSkillsInput('');
    };

    const [referenceProfile, setReferenceProfile] = useState({
        name: '',
        email: '',
        phone: '',
    });

    const [references, setReferences] = useState(referencesArray);

    const handleReferenceInput = (e) => {
        const value = e.target.value;
        setReferenceProfile({
            ...referenceProfile,
            [e.target.name]: value,
        });
    };

    const handleAddReference = (e, newReference) => {
        e.preventDefault();
        setReferences([
            ...references,
            {
                id: uuidv4(),
                name: newReference.name,
                email: newReference.email,
                phone: newReference.phone,
            },
        ]);
    };

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
                referenceProfile={referenceProfile}
                references={references}
                handleInputChange={handleInputChange}
                handleEmailInput={handleEmailInput}
                handlePhoneInput={handlePhoneInput}
                handleAddressInput={handleAddressInput}
                handleTitleInput={handleTitleInput}
                handleProfileInput={handleProfileInput}
                handleAddSkill={handleAddSkill}
                handleSkillsInput={handleSkillsInput}
                handleAddReference={handleAddReference}
                handleReferenceInput={handleReferenceInput}
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
