/* eslint-disable react/prop-types */
import { useState } from 'react';

import PersonalDetails from './PersonalDetails';
import EmploymentHistory from './EmploymentHistory';
import Education from './Education';
import Skills from './Skills';
import References from './References';

export default function Form({
    inputs,
    handleInput,
    skills,
    handleAddSkill,
    handleDeleteSkill,
    references,
    handleAddReference,
    handleDeleteReference,
    education,
    handleAddEducation,
    handleDeleteEducation,
    workHistory,
    handleAddWork,
    handleDeleteWork,
    handleUpdateItem,
    handleArrayItemActiveChange,
}) {
    const [isActive1, setIsActive1] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);
    const [isActive4, setIsActive4] = useState(false);
    const [isActive5, setIsActive5] = useState(false);

    return (
        <div className='formSection'>
            <div className='formForm'>
                <p>
                    Fill in your details in the forms below to edit the content
                    of the sample CV.
                </p>
            </div>
            <PersonalDetails
                inputs={inputs}
                handleInput={handleInput}
                isActive={isActive1}
                onToggle={() => setIsActive1(!isActive1)}
            />
            <EmploymentHistory
                inputs={inputs}
                handleInput={handleInput}
                workHistory={workHistory}
                handleAddWork={handleAddWork}
                handleDeleteWork={handleDeleteWork}
                handleUpdateItem={handleUpdateItem}
                handleArrayItemActiveChange={handleArrayItemActiveChange}
                isActive={isActive2}
                onToggle={() => setIsActive2(!isActive2)}
            />
            <Education
                inputs={inputs}
                handleInput={handleInput}
                education={education}
                handleAddEducation={handleAddEducation}
                handleDeleteEducation={handleDeleteEducation}
                handleUpdateItem={handleUpdateItem}
                handleArrayItemActiveChange={handleArrayItemActiveChange}
                isActive={isActive3}
                onToggle={() => setIsActive3(!isActive3)}
            />
            <Skills
                skills={skills}
                inputs={inputs}
                handleInput={handleInput}
                handleAddSkill={handleAddSkill}
                handleDeleteSkill={handleDeleteSkill}
                handleUpdateItem={handleUpdateItem}
                handleArrayItemActiveChange={handleArrayItemActiveChange}
                isActive={isActive4}
                onToggle={() => setIsActive4(!isActive4)}
            />
            <References
                inputs={inputs}
                handleInput={handleInput}
                references={references}
                handleAddReference={handleAddReference}
                handleDeleteReference={handleDeleteReference}
                handleUpdateItem={handleUpdateItem}
                handleArrayItemActiveChange={handleArrayItemActiveChange}
                isActive={isActive5}
                onToggle={() => setIsActive5(!isActive5)}
            />
        </div>
    );
}
