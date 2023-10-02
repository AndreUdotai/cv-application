import { useState } from 'react';

// import { Preview, print } from 'react-html2pdf';

import { v4 as uuidv4 } from 'uuid';

import './App.css';
import Cv from './components/Cv';
import Form from './components/Form';
// import Download from './components/Download';

let skills = []; //7
let references = []; //8, 9, 10, 11
let educationArray = []; //12, 13, 14, 15, 16, 17
let workHistory = []; //18, 19, 20, 21, 22, 23

function App() {
    // Initialise a state for inputs with an array of length 6 with empty string
    const [inputs, setInputs] = useState(Array(17).fill(''));
    // Create a function that takes index and input value as arguments and inputs the value by index
    function handleInput(i, inputValue) {
        // Copy the inputs array
        const inputArray = inputs.slice();
        // set the value of the array items by index to the input value
        inputArray[i] = inputValue;
        // set the new value of inputs with the inputArray
        setInputs(inputArray);
    }

    // const [nameInput, setNameInput] = useState('');
    // const [emailInput, setEmailInput] = useState('');
    // const [phoneInput, setPhoneInput] = useState('');
    // const [addressInput, setAddressInput] = useState('');
    // const [titleInput, setTitleInput] = useState('');
    // const [profileInput, setProfileInput] = useState('');

    // const handleInputChange = (newValue) => {
    //     setNameInput(newValue);
    // };
    // const handleEmailInput = (newValue) => {
    //     setEmailInput(newValue);
    // };
    // const handlePhoneInput = (newValue) => {
    //     setPhoneInput(newValue);
    // };
    // const handleAddressInput = (newValue) => {
    //     setAddressInput(newValue);
    // };
    // const handleTitleInput = (newValue) => {
    //     setTitleInput(newValue);
    // };
    // const handleProfileInput = (newValue) => {
    //     setProfileInput(newValue);
    // };

    // const [skillsInput, setSkillsInput] = useState('');

    // const handleSkillsInput = (newSkill) => {
    //     setSkillsInput(newSkill);
    // };

    const handleAddSkill = (event) => {
        event.preventDefault();
        const inputArray = inputs.slice();
        if(inputArray[6]){
        skills = [...skills, { id: uuidv4(), name: inputArray[6] }];
        }
        inputArray[6] = '';
        setInputs(inputArray);
    };

    // const [referenceName, setReferenceName] = useState('');
    // const [referenceInstitution, setReferenceInstitution] = useState('');
    // const [referenceEmail, setReferenceEmail] = useState('');
    // const [referencePhone, setReferencePhone] = useState('');

    // const referenceNameInput = (name) => {
    //     setReferenceName(name)
    // };

    // const referenceInstitutionInput = (name) => {
    //     setReferenceInstitution(name)
    // }

    // const referenceEmailInput = (email) => {
    //     setReferenceEmail(email)
    // };

    // const referencePhoneInput = (phone) => {
    //     setReferencePhone(phone)
    // };

    const handleAddReference = (e) => {
        e.preventDefault();
        const inputArray = inputs.slice();
        if(inputArray[7]){
            references = [
                ...references,
                {
                    id: uuidv4(),
                    name: inputArray[7],
                    institution: inputArray[8],
                    email: inputArray[9],
                    phone: inputArray[10],
                },
            ];
        }
        inputArray[7] = '';
        inputArray[8] = '';
        inputArray[9] = '';
        inputArray[10] = '';
        setInputs(inputArray);
        // setReferenceName('');
        // setReferenceInstitution('');
        // setReferenceEmail('');
        // setReferencePhone('');
    };

    // const [educationDegree, setEducationDegree] = useState('');
    // const [educationDepartment, setEducationDepartment] = useState('');
    // const [educationSchool, setEducationSchool] = useState('');
    // const [educationLocation, setEducationLocation] = useState('');
    // const [educationStart, setEducationStart] = useState('');
    // const [educationEnd, setEducationEnd] = useState('');

    // const handleDegreeInput = (degree) => {
    //     setEducationDegree(degree)
    // };

    // const handleDepartmentInput = (department) => {
    //     setEducationDepartment(department)
    // }

    // const handleSchoolInput = (school) => {
    //     setEducationSchool(school)
    // };

    // const handleLocationInput = (location) => {
    //     setEducationLocation(location)
    // };

    // const handleStartInput = (start) => {
    //     setEducationStart(start)
    // }

    // const handleEndInput = (end) => {
    //     setEducationEnd(end)
    // }

    const handleAddEducation = (e) => {
        e.preventDefault();
        const inputArray = inputs.slice();
        if(inputArray[11]){
            educationArray = [...educationArray, {
                id: uuidv4(),
                degree: inputArray[11],
                department: inputArray[12],
                school: inputArray[13],
                location: inputArray[14],
                start: inputArray[15],
                end: inputArray[16],
            }]
            inputArray[11] = '';
            inputArray[12] = '';
            inputArray[13] = '';
            inputArray[14] = '';
            inputArray[15] = '';
            inputArray[16] = '';
        setInputs(inputArray);
        
        }
        // setEducationDegree('');
        // setEducationDepartment('');
        // setEducationSchool('')
        // setEducationLocation('');
        // setEducationStart('')
        // setEducationEnd('')
    };

    // const [workPosition, setWorkPosition] = useState('');
    // const [workName, setWorkName] = useState('');
    // const [workLocation, setWorkLocation] = useState('');
    // const [workStart, setWorkStart] = useState('');
    // const [workEnd, setWorkEnd] = useState('');
    // const [workAchievement, setWorkAchievement] = useState('');

    // const handleWorkPosition = (work) => {
    //     setWorkPosition(work)
    // };

    // const handleWorkName = (department) => {
    //     setWorkName(department)
    // }

    // const handleWorkLocation = (school) => {
    //     setWorkLocation(school)
    // };

    // const handleWorkStart = (location) => {
    //     setWorkStart(location)
    // };

    // const handleWorkEnd = (start) => {
    //     setWorkEnd(start)
    // }

    // const handleWorkAchievement = (end) => {
    //     setWorkAchievement(end)
    // }

    const handleAddWork = (e) => {
        e.preventDefault();
        const inputArray = inputs.slice();
        if(inputArray[17]){
            workHistory = [...workHistory, {
                id: uuidv4(),
                position:       inputArray[17],
                name:           inputArray[18],
                location:       inputArray[19],
                start:          inputArray[20],
                end:            inputArray[21],
                achievement:    inputArray[22],
            }]
            inputArray[17] = '';
            inputArray[18] = '';
            inputArray[19] = '';
            inputArray[20] = '';
            inputArray[21] = '';
            inputArray[22] = '';
        setInputs(inputArray);
        }
        // setWorkPosition('');
        // setWorkName('');
        // setWorkLocation('')
        // setWorkStart('');
        // setWorkEnd('');
        // setWorkAchievement('');
    };

    return (
        <div className='app'>
            <Form
                inputs={inputs}
                handleInput={handleInput}
                // nameInput={nameInput}
                // emailInput={emailInput}
                // phoneInput={phoneInput}
                // addressInput={addressInput}
                // titleInput={titleInput}
                // profileInput={profileInput}
                skills={skills}
                // skillsInput={skillsInput}
                // referenceName={referenceName}
                // referenceInstitution={referenceInstitution}
                // referenceEmail={referenceEmail}
                // referencePhone={referencePhone}
                references={references}
                // handleInputChange={handleInputChange}
                // handleEmailInput={handleEmailInput}
                // handlePhoneInput={handlePhoneInput}
                // handleAddressInput={handleAddressInput}
                // handleTitleInput={handleTitleInput}
                // handleProfileInput={handleProfileInput}
                handleAddSkill={handleAddSkill}
                // handleSkillsInput={handleSkillsInput}
                // referenceNameInput={referenceNameInput}
                // referenceInstitutionInput={referenceInstitutionInput}
                // referenceEmailInput={referenceEmailInput}
                // referencePhoneInput={referencePhoneInput}
                handleAddReference={handleAddReference}
                // educationDegree={educationDegree}
                // educationDepartment= {educationDepartment}
                // educationSchool={educationSchool}
                // educationLocation={educationLocation}
                // educationStart={educationStart}
                // educationEnd={educationEnd}
                educationArray={educationArray}
                // handleDegreeInput={handleDegreeInput}
                // handleDepartmentInput={handleDepartmentInput}
                // handleSchoolInput={handleSchoolInput}
                // handleLocationInput={handleLocationInput}
                // handleStartInput={handleStartInput}
                // handleEndInput={handleEndInput}
                handleAddEducation={handleAddEducation}
                // workPosition={workPosition}
                // workName={workName}
                // workLocation={workLocation}
                // workStart={workStart}
                // workEnd={workEnd}
                // workAchievement={workAchievement}
                workHistory={workHistory}
                // handleWorkPosition={handleWorkPosition}
                // handleWorkName={handleWorkName}
                // handleWorkLocation={handleWorkLocation}
                // handleWorkStart={handleWorkStart}
                // handleWorkEnd={handleWorkEnd}
                // handleWorkAchievement={handleWorkAchievement}
                handleAddWork={handleAddWork}
            />
            {/* <Preview id={'jsx-template'}> */}
            <Cv
                inputs={inputs}
                // nameInput={nameInput}
                // emailInput={emailInput}
                // phoneInput={phoneInput}
                // addressInput={addressInput}
                // titleInput={titleInput}
                // profileInput={profileInput}
                skills={skills}
                references={references}
                education={educationArray}
                workHistory={workHistory}
            />
            {/* </Preview> */}
            {/* <button onClick={() => print('a', 'jsx-template')}> print</button> */}
            {/* < Download /> */}
        </div>
    );
}

export default App;
