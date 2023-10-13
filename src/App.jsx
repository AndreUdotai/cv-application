import { useState } from 'react';

// import { Preview, print } from 'react-html2pdf';

import { v4 as uuidv4 } from 'uuid';

import './App.css';
import Cv from './components/Cv/Cv';
import Form from './components/Form/Form';
// import Download from './components/Download';

let skillsArray = []; //7
let references = []; //8, 9, 10, 11
let educationArray = []; //12, 13, 14, 15, 16, 17
let workHistory = []; //18, 19, 20, 21, 22, 23

function App() {
    // Initialise a state for inputs with an array of length 6 with empty string
    const [inputs, setInputs] = useState(Array(17).fill(''));
    // Create a state for skills
    const [skills, setSkills] = useState(skillsArray);

    // Create a function that takes index and input value as arguments and inputs the value by index
    function handleInput(i, inputValue) {
        // Copy the inputs array
        const inputArray = inputs.slice();
        // set the value of the array items by index to the input value
        inputArray[i] = inputValue;
        // set the new value of inputs with the inputArray
        setInputs(inputArray);
    }

    const handleAddSkill = (event) => {
        event.preventDefault();
        let allSkills;
        const inputArray = inputs.slice();
        if (inputArray[6]) {
            allSkills = [...skills, { id: uuidv4(), name: inputArray[6] }];
        }
        inputArray[6] = '';
        setInputs(inputArray);
        setSkills(allSkills);
    };

    // Create a delete function for skills array
    const handleDeleteSkill = (skillToRemove) => {
        setSkills(
            skills.filter(skill => skill.id !== skillToRemove )
        )
    }
 
    const handleAddReference = (e) => {
        e.preventDefault();
        const inputArray = inputs.slice();
        if (inputArray[7]) {
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
    };

    const handleAddEducation = (e) => {
        e.preventDefault();
        const inputArray = inputs.slice();
        if (inputArray[11]) {
            educationArray = [
                ...educationArray,
                {
                    id: uuidv4(),
                    degree: inputArray[11],
                    department: inputArray[12],
                    school: inputArray[13],
                    location: inputArray[14],
                    start: inputArray[15],
                    end: inputArray[16],
                },
            ];
            inputArray[11] = '';
            inputArray[12] = '';
            inputArray[13] = '';
            inputArray[14] = '';
            inputArray[15] = '';
            inputArray[16] = '';
            setInputs(inputArray);
        }
    };

    const handleAddWork = (e) => {
        e.preventDefault();
        const inputArray = inputs.slice();
        if (inputArray[17]) {
            workHistory = [
                ...workHistory,
                {
                    id: uuidv4(),
                    position: inputArray[17],
                    name: inputArray[18],
                    location: inputArray[19],
                    start: inputArray[20],
                    end: inputArray[21],
                    achievement: inputArray[22],
                },
            ];
            inputArray[17] = '';
            inputArray[18] = '';
            inputArray[19] = '';
            inputArray[20] = '';
            inputArray[21] = '';
            inputArray[22] = '';
            setInputs(inputArray);
        }
    };

    return (
        <div className='app'>
            <Form
                inputs={inputs}
                handleInput={handleInput}
                skills={skills}
                handleAddSkill={handleAddSkill}
                handleDeleteSkill={handleDeleteSkill}
                references={references}
                handleAddReference={handleAddReference}
                educationArray={educationArray}
                handleAddEducation={handleAddEducation}
                workHistory={workHistory}
                handleAddWork={handleAddWork}
            />
            {/* <Preview id={'jsx-template'}> */}
            <Cv
                inputs={inputs}
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
