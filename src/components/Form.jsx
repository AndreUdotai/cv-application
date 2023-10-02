/* eslint-disable react/prop-types */
import { useState } from 'react';

import { FaAngleDown } from 'react-icons/fa6';
import { FaAngleUp } from 'react-icons/fa6';
// import { FaXmark } from 'react-icons/fa6';

function Input({ label, value, handleInput }) {
    return (
        <div className='inputComponent'>
            <label className='label'>{label}</label>
            <input
                type='text'
                className='input'
                value={value}
                // the handleInput function is called in the Input component with the needed arguments
                onChange={handleInput}
            />
        </div>
    );
}

function TextArea({ label, value, handleInput }) {
    return (
        <div className='inputComponent'>
            <label className='label'>{label}</label>
            <textarea
                cols='30'
                rows='10'
                className='input'
                value={value}
                onChange={handleInput}
            ></textarea>
        </div>
    );
}

function Button({ name, handleAdd }) {
    return (
        <div>
            <button className='button' onClick={handleAdd}>
                {name}
            </button>
        </div>
    );
}

function ListDisplay({ list }) {
    return (
        <div className='listDisplay'>
            <ul>
                {list.map((item) => (
                    <li key={item.id}>
                        <p>{item.name}</p>
                        {/* <FaXmark /> */}
                    </li>
                ))}
            </ul>
        </div>
    );
}

function PersonalDetails({ inputs, handleInput, isActive, onToggle }) {
    return (
        <>
            <div className='form'>
                <div className='formHeader' onClick={onToggle}>
                    <h2>Personal Details</h2>
                    {isActive ? <FaAngleUp /> : <FaAngleDown />}
                </div>
                {isActive && (
                    <form>
                        <Input
                            label={'Full name'}
                            value={inputs[0]}
                            handleInput={(e) => handleInput(0, e.target.value)}
                        />
                        <Input
                            label={'Email'}
                            value={inputs[1]}
                            handleInput={(e) => handleInput(1, e.target.value)}
                        />
                        <Input
                            label={'Phone number'}
                            value={inputs[2]}
                            handleInput={(e) => handleInput(2, e.target.value)}
                        />
                        <Input
                            label={'Address'}
                            value={inputs[3]}
                            handleInput={(e) => handleInput(3, e.target.value)}
                        />
                        <Input
                            label={'Professional title'}
                            value={inputs[4]}
                            handleInput={(e) => handleInput(4, e.target.value)}
                        />
                        <TextArea
                            label={'Profile'}
                            value={inputs[5]}
                            handleInput={(e) => handleInput(5, e.target.value)}
                        />
                    </form>
                )}
            </div>
        </>
    );
}

function EmploymentHistory({
    inputs,
    handleInput,
    workHistory,
    handleAddWork,
    isActive,
    onToggle,
}) {
    return (
        <div className='form'>
            <div className='formHeader' onClick={onToggle}>
                <h2>Work History</h2>
                {isActive ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            {isActive && (
                <>
                    <form>
                        <Input
                            label={'Position'}
                            value={inputs[17]}
                            handleInput={(e) => handleInput(17, e.target.value)}
                        />
                        <Input
                            label={'Name of Company'}
                            value={inputs[18]}
                            handleInput={(e) => handleInput(18, e.target.value)}
                        />
                        <Input
                            label={'Location'}
                            value={inputs[19]}
                            handleInput={(e) => handleInput(19, e.target.value)}
                        />
                        <Input
                            label={'Start date'}
                            input={inputs[20]}
                            handleInput={(e) => handleInput(20, e.target.value)}
                        />
                        <Input
                            label={'End date'}
                            value={inputs[21]}
                            handleInput={(e) => handleInput(21, e.target.value)}
                        />
                        <Input
                            label={'Achievements'}
                            value={inputs[22]}
                            handleInput={(e) => handleInput(22, e.target.value)}
                        />
                        <Button
                            name={'Add'}
                            handleAdd={(e) => handleAddWork(e)}
                        />
                    </form>
                    <div className='listDisplay'>
                        <ul>
                            {workHistory.map((item) => (
                                <li key={item.id}>{item.position}</li>
                            ))}
                        </ul>
                    </div>
                </>
            )}
        </div>
    );
}

function Education({
    inputs,
    handleInput,
    educationArray,
    handleAddEducation,
    isActive,
    onToggle,
}) {
    return (
        <div className='form'>
            <div className='formHeader' onClick={onToggle}>
                <h2>Education</h2>
                {isActive ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            {isActive && (
                <>
                    <div className='educationForm'>
                        <Input
                            label={'Degree'}
                            value={inputs[11]}
                            handleInput={(e) => handleInput(11, e.target.value)}
                        />
                        <Input
                            label={'Department'}
                            value={inputs[12]}
                            handleInput={(e) => handleInput(12, e.target.value)}
                        />
                        <Input
                            label={'School'}
                            value={inputs[13]}
                            handleInput={(e) => handleInput(13, e.target.value)}
                        />
                        <Input
                            label={'Location'}
                            value={inputs[14]}
                            handleInput={(e) => handleInput(14, e.target.value)}
                        />
                        <Input
                            label={'Start date'}
                            value={inputs[15]}
                            handleInput={(e) => handleInput(15, e.target.value)}
                        />
                        <Input
                            label={'End date'}
                            value={inputs[16]}
                            handleInput={(e) => handleInput(16, e.target.value)}
                        />
                        <Button
                            name={'Add'}
                            handleAdd={(e) => handleAddEducation(e)}
                        />
                    </div>
                    <div className='listDisplay'>
                        <ul>
                            {educationArray.map((item) => (
                                <li key={item.id}>{item.degree}</li>
                            ))}
                        </ul>
                    </div>
                </>
            )}
        </div>
    );
}

function Skills({
    inputs,
    handleInput,
    skills,
    handleAddSkill,
    isActive,
    onToggle,
}) {
    return (
        <div className='form'>
            <div className='formHeader' onClick={onToggle}>
                <h2>Skills</h2>
                {isActive ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            {isActive && (
                <>
                    <div className='skillsForm'>
                        <Input
                            value={inputs[6]}
                            handleInput={(e) => handleInput(6, e.target.value)}
                        />
                        <Button
                            name={'Add'}
                            handleAdd={(e) => handleAddSkill(e)}
                        />
                    </div>
                    <ListDisplay list={skills} />
                </>
            )}
        </div>
    );
}

function References({
    inputs,
    handleInput,
    references,
    handleAddReference,
    isActive,
    onToggle,
}) {
    return (
        <div className='form'>
            <div className='formHeader' onClick={onToggle}>
                <h2>References</h2>
                {isActive ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            {isActive && (
                <>
                    <div className='referencesForm'>
                        <Input
                            label={'Full name'}
                            value={inputs[7]}
                            handleInput={(e) => handleInput(7, e.target.value)}
                        />
                        <Input
                            label={'Full name'}
                            value={inputs[8]}
                            handleInput={(e) => handleInput(8, e.target.value)}
                        />
                        <Input
                            label={'Full name'}
                            value={inputs[9]}
                            handleInput={(e) => handleInput(9, e.target.value)}
                        />
                        <Input
                            label={'Full name'}
                            value={inputs[10]}
                            handleInput={(e) => handleInput(10, e.target.value)}
                        />
                        <Button
                            name={'Add'}
                            handleAdd={(e) => handleAddReference(e)}
                        />
                    </div>
                    <ListDisplay list={references} />
                </>
            )}
        </div>
    );
}

export default function Form({
    inputs,
    handleInput,
    skills,
    references,
    handleAddSkill,
    handleAddReference,
    educationArray,
    handleAddEducation,
    workHistory,
    handleAddWork,
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
                isActive={isActive2}
                onToggle={() => setIsActive2(!isActive2)}
            />
            <Education
                inputs={inputs}
                handleInput={handleInput}
                educationArray={educationArray}
                handleAddEducation={handleAddEducation}
                isActive={isActive3}
                onToggle={() => setIsActive3(!isActive3)}
            />
            <Skills
                skills={skills}
                inputs={inputs}
                handleInput={handleInput}
                handleAddSkill={handleAddSkill}
                isActive={isActive4}
                onToggle={() => setIsActive4(!isActive4)}
            />
            <References
                inputs={inputs}
                handleInput={handleInput}
                references={references}
                handleAddReference={handleAddReference}
                isActive={isActive5}
                onToggle={() => setIsActive5(!isActive5)}
            />
        </div>
    );
}
