import { useState } from 'react';

// import { Preview, print } from 'react-html2pdf';

import { v4 as uuidv4 } from 'uuid';

import './App.css';
import Cv from './components/Cv/Cv';
import Form from './components/Form/Form';
// import Download from './components/Download';

let skillsArray = []; //7
let referencesArray = []; //8, 9, 10, 11
let educationArray = []; //12, 13, 14, 15, 16, 17
let workHistoryArray = []; //18, 19, 20, 21, 22, 23

function App() {
    // Initialise a state for inputs with an array of length 6 with empty string
    const [inputs, setInputs] = useState(Array(17).fill(''));
    // Create a state for skills Array
    const [skills, setSkills] = useState(skillsArray);
    // Create a state for references Array
    const [references, setReferences] = useState(referencesArray);
    // Create a state for education array
    const [education, setEducation] = useState(educationArray);
    // Create a state for workHistory array
    const [workHistory, setWorkHistory] = useState(workHistoryArray);

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
        let nextSkills;
        const inputArray = inputs.slice();
        if (inputArray[6]) {
            nextSkills = [
                ...skills,
                { id: uuidv4(), name: inputArray[6], isActive: false },
            ]; // isActive is added to track the active state for each skill
        }
        inputArray[6] = '';
        setInputs(inputArray);
        setSkills(nextSkills);
    };

    // Create a delete function for skills array
    const handleDeleteSkill = (skillToRemove) => {
        setSkills(skills.filter((skill) => skill.id !== skillToRemove));
    };

    // Create an edit function for skills array
    const handleSkillChange = (e, skillToUpdate) => {
        const nextSkills = skills.map((skill) => {
            if (skill.id === skillToUpdate) {
                return {
                    ...skill,
                    name: e.target.value,
                };
            }
            return skill;
        });
        setSkills(nextSkills);
    };

    // a function that changes the active status of each list item for updates
    const handleSkillActiveChange = (skillId, isActive) => {
        const updatedSkills = skills.map((item) => {
            if (item.id === skillId) {
                return { ...item, isActive: isActive };
            }
            return item;
        });
        setSkills(updatedSkills);
    };

    // // a function that changes the active status of each list item for updates
    // const handleArrayItemActiveChange = (itemId, arrayName, isActive) => {
    //     const nextArray = arrayName.map((item) => {
    //         if (item.id === itemId) {
    //             return { ...arrayName, isActive: isActive };
    //         }
    //         return item;
    //     });
    //     // Set the updated array based on arrayName
    //     if (arrayName === 'skills') {
    //         setSkills(nextArray);
    //     } else if (arrayName === 'references') {
    //         setReferences(nextArray);
    //     } // Add other conditions as needed
    // };

    const handleAddReference = (e) => {
        e.preventDefault();
        let allReferences;
        const inputArray = inputs.slice();
        if (inputArray[7]) {
            allReferences = [
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
        setReferences(allReferences);
    };

    const handleDeleteReference = (refToRemove) => {
        setReferences(references.filter((ref) => ref.id !== refToRemove));
    };

    // Create an edit function for skills array
    const handleReferenceChange = (e, refToUpdate) => {
        const nextReferences = references.map((ref) => {
            if (ref.id === refToUpdate) {
                return {
                    ...ref,
                    [e.target.name]: e.target.value,
                };
            }
            return ref;
        });
        setReferences(nextReferences);
    };

    // a function that changes the active status of each list item for updates
    const handleRefActiveChange = (refId, isActive) => {
        const updatedReferences = references.map((ref) => {
            if (ref.id === refId) {
                return { ...ref, isActive: isActive };
            }
            return ref;
        });
        setReferences(updatedReferences);
    };

    const handleAddEducation = (e) => {
        e.preventDefault();
        let allEducation;
        const inputArray = inputs.slice();
        if (inputArray[11]) {
            allEducation = [
                ...education,
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
            setEducation(allEducation);
        }
    };

    const handleDeleteEducation = (eduToRemove) => {
        setEducation(
            education.filter((education) => education.id !== eduToRemove),
        );
    };

    const handleAddWork = (e) => {
        e.preventDefault();
        const inputArray = inputs.slice();
        let allWorkHistory;
        if (inputArray[17]) {
            allWorkHistory = [
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
            setWorkHistory(allWorkHistory);
        }
    };

    const handleDeleteWork = (workToRemove) => {
        setWorkHistory(workHistory.filter((work) => work.id !== workToRemove));
    };

    return (
        <div className='app'>
            <Form
                inputs={inputs}
                handleInput={handleInput}
                skills={skills}
                handleAddSkill={handleAddSkill}
                handleDeleteSkill={handleDeleteSkill}
                handleSkillChange={handleSkillChange}
                handleSkillActiveChange={handleSkillActiveChange}
                references={references}
                handleAddReference={handleAddReference}
                handleDeleteReference={handleDeleteReference}
                handleReferenceChange={handleReferenceChange}
                handleRefActiveChange={handleRefActiveChange}
                education={education}
                handleAddEducation={handleAddEducation}
                handleDeleteEducation={handleDeleteEducation}
                workHistory={workHistory}
                handleAddWork={handleAddWork}
                handleDeleteWork={handleDeleteWork}
            />
            {/* <Preview id={'jsx-template'}> */}
            <Cv
                inputs={inputs}
                skills={skills}
                references={references}
                education={education}
                workHistory={workHistory}
            />
            {/* </Preview> */}
            {/* <button onClick={() => print('a', 'jsx-template')}> print</button> */}
            {/* < Download /> */}
        </div>
    );
}

export default App;
