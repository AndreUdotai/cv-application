import { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import './App.css';
import Cv from './components/Cv';
import Form from './components/Form';

const skillsArray = [];
const referencesArray = [];
let educationArray = [];

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

    const [educationDegree, setEducationDegree] = useState('');
    const [educationDepartment, setEducationDepartment] = useState('');
    const [educationSchool, setEducationSchool] = useState('');
    const [educationLocation, setEducationLocation] = useState('');
    const [educationStart, setEducationStart] = useState('');
    const [educationEnd, setEducationEnd] = useState('');

    const handleDegreeInput = (degree) => {
        setEducationDegree(degree)
    };

    const handleDepartmentInput = (department) => {
        setEducationDepartment(department)
    }

    const handleSchoolInput = (school) => {
        setEducationSchool(school)
    };

    const handleLocationInput = (location) => {
        setEducationLocation(location)
    };

    const handleStartInput = (start) => {
        setEducationStart(start)
    }

    const handleEndInput = (end) => {
        setEducationEnd(end)
    }

    const handleAddEducation = (e) => {
        e.preventDefault();
        educationArray = [...educationArray, {
            id: uuidv4(),
            degree: educationDegree,
            department: educationDepartment,
            school: educationSchool,
            location: educationLocation,
            start: educationStart,
            end: educationEnd,
        }]
        setEducationDegree('');
        setEducationDepartment('');
        setEducationSchool('')
        setEducationLocation('');
        setEducationStart('')
        setEducationEnd('')
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
                educationDegree={educationDegree}
                educationDepartment= {educationDepartment}
                educationSchool={educationSchool}
                educationLocation={educationLocation}
                educationStart={educationStart}
                educationEnd={educationEnd}
                educationArray={educationArray}
                handleDegreeInput={handleDegreeInput}
                handleDepartmentInput={handleDepartmentInput}
                handleSchoolInput={handleSchoolInput}
                handleLocationInput={handleLocationInput}
                handleStartInput={handleStartInput}
                handleEndInput={handleEndInput}
                handleAddEducation={handleAddEducation}
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
                education={educationArray}
            />
        </div>
    );
}

export default App;
