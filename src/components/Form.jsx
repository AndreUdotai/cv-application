/* eslint-disable react/prop-types */
import { useState } from 'react';

import { FaAngleDown } from 'react-icons/fa6';
import { FaAngleUp } from 'react-icons/fa6';
// import { FaXmark } from 'react-icons/fa6';

// function Input({ label, inputValue, handleInputChange, name }) {
//     return (
//         <div className='inputComponent'>
//             <label className='label'>{label}</label>
//             <input
//                 type='text'
//                 name={name}
//                 className='input'
//                 value={inputValue}
//                 onChange={(event) => handleInputChange(event.target.value)}
//             />
//         </div>
//     );
// }

function PersonalDetailInput({ label, value, handleInput }) {
    return (
        <div className='inputComponent'>
            <label className='label'>{label}</label>
            <input
                type='text'
                className='input'
                value={value}
                // the handleInput function is called in the PersonalDetailInput component with the needed arguments
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

function PersonalDetails({
    inputs,
    handleInput,
    // nameInput,
    // emailInput,
    // phoneInput,
    // addressInput,
    // titleInput,
    // profileInput,
    // handleInputChange,
    // handleEmailInput,
    // handlePhoneInput,
    // handleAddressInput,
    // handleTitleInput,
    // handleProfileInput,
    isActive,
    onToggle,
}) {
    return (
        <>
            <div className='form'>
                <div className='formHeader' onClick={onToggle}>
                    <h2>Personal Details</h2>
                    {isActive ? <FaAngleUp /> : <FaAngleDown />}
                </div>
                {isActive && (
                    <form>
                        <PersonalDetailInput
                            label={'Full name'}
                            value={inputs[0]}
                            handleInput={(e) => handleInput(0, e.target.value)}
                        />
                        <PersonalDetailInput
                            label={'Email'}
                            value={inputs[1]}
                            handleInput={(e) => handleInput(1, e.target.value)}
                        />
                        <PersonalDetailInput
                            label={'Phone number'}
                            value={inputs[2]}
                            handleInput={(e) => handleInput(2, e.target.value)}
                        />
                        <PersonalDetailInput
                            label={'Address'}
                            value={inputs[3]}
                            handleInput={(e) => handleInput(3, e.target.value)}
                        />
                        <PersonalDetailInput
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
    // workPosition,
    // workName,
    // workLocation,
    // workStart,
    // workEnd,
    // workAchievement,
    workHistory,
    // handleWorkPosition,
    // handleWorkName,
    // handleWorkLocation,
    // handleWorkStart,
    // handleWorkEnd,
    // handleWorkAchievement,
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
                        <PersonalDetailInput
                            label={'Position'}
                            value={inputs[17]}
                            handleInput={(e) => handleInput(17, e.target.value)}
                        />
                        <PersonalDetailInput
                            label={'Name of Company'}
                            value={inputs[18]}
                            handleInput={(e) => handleInput(18, e.target.value)}
                        />
                        <PersonalDetailInput
                            label={'Location'}
                            value={inputs[19]}
                            handleInput={(e) => handleInput(19, e.target.value)}
                        />
                        <PersonalDetailInput
                            label={'Start date'}
                            input={inputs[20]}
                            handleInput={(e) => handleInput(20, e.target.value)}
                        />
                        <PersonalDetailInput
                            label={'End date'}
                            value={inputs[21]}
                            handleInput={(e) => handleInput(21, e.target.value)}
                        />
                        <PersonalDetailInput
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
    // educationDegree,
    // educationDepartment,
    // educationSchool,
    // educationLocation,
    // educationStart,
    // educationEnd,
    educationArray,
    // handleDegreeInput,
    // handleDepartmentInput,
    // handleSchoolInput,
    // handleLocationInput,
    // handleStartInput,
    // handleEndInput,
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
                        <PersonalDetailInput
                            label={'Degree'}
                            value={inputs[11]}
                            handleInput={(e) => handleInput(11, e.target.value)}
                        />
                        <PersonalDetailInput
                            label={'Department'}
                            value={inputs[12]}
                            handleInput={(e) => handleInput(12, e.target.value)}
                        />
                        <PersonalDetailInput
                            label={'School'}
                            value={inputs[13]}
                            handleInput={(e) => handleInput(13, e.target.value)}
                        />
                        <PersonalDetailInput
                            label={'Location'}
                            value={inputs[14]}
                            handleInput={(e) => handleInput(14, e.target.value)}
                        />
                        <PersonalDetailInput
                            label={'Start date'}
                            value={inputs[15]}
                            handleInput={(e) => handleInput(15, e.target.value)}
                        />
                        <PersonalDetailInput
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
    // skillsInput,
    handleAddSkill,
    // handleSkillsInput,
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
                        <PersonalDetailInput
                            value={inputs[6]}
                            handleInput={(e) => handleInput(6, e.target.value)}
                        />
                        {/* <Input
                            inputValue={skillsInput}
                            handleInputChange={handleSkillsInput}
                        /> */}
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
    // referenceName,
    // referenceInstitution,
    // referenceEmail,
    // referencePhone,
    references,
    // referenceNameInput,
    // referenceInstitutionInput,
    // referenceEmailInput,
    // referencePhoneInput,
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
                        <PersonalDetailInput
                            label={'Full name'}
                            value={inputs[7]}
                            handleInput={(e) => handleInput(7, e.target.value)}
                        />
                        <PersonalDetailInput
                            label={'Full name'}
                            value={inputs[8]}
                            handleInput={(e) => handleInput(8, e.target.value)}
                        />
                        <PersonalDetailInput
                            label={'Full name'}
                            value={inputs[9]}
                            handleInput={(e) => handleInput(9, e.target.value)}
                        />
                        <PersonalDetailInput
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
    // nameInput,
    // emailInput,
    // phoneInput,
    // addressInput,
    // titleInput,
    // profileInput,
    skills,
    // skillsInput,
    // referenceName,
    // referenceInstitution,
    // referenceEmail,
    // referencePhone,
    references,
    // handleInputChange,
    // handleEmailInput,
    // handlePhoneInput,
    // handleAddressInput,
    // handleTitleInput,
    // handleProfileInput,
    handleAddSkill,
    // handleSkillsInput,
    // referenceNameInput,
    // referenceInstitutionInput,
    // referenceEmailInput,
    // referencePhoneInput,
    handleAddReference,
    // educationDegree,
    // educationDepartment,
    // educationSchool,
    // educationLocation,
    // educationStart,
    // educationEnd,
    educationArray,
    // handleDegreeInput,
    // handleDepartmentInput,
    // handleSchoolInput,
    // handleLocationInput,
    // handleStartInput,
    // handleEndInput,
    handleAddEducation,
    // workPosition,
    // workName,
    // workLocation,
    // workStart,
    // workEnd,
    // workAchievement,
    workHistory,
    // handleWorkPosition,
    // handleWorkName,
    // handleWorkLocation,
    // handleWorkStart,
    // handleWorkEnd,
    // handleWorkAchievement,
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
                // nameInput={nameInput}
                // emailInput={emailInput}
                // phoneInput={phoneInput}
                // addressInput={addressInput}
                // titleInput={titleInput}
                // profileInput={profileInput}
                // handleInputChange={handleInputChange}
                // handleEmailInput={handleEmailInput}
                // handlePhoneInput={handlePhoneInput}
                // handleAddressInput={handleAddressInput}
                // handleTitleInput={handleTitleInput}
                // handleProfileInput={handleProfileInput}
                isActive={isActive1}
                onToggle={() => setIsActive1(!isActive1)}
            />
            <EmploymentHistory
                inputs={inputs}
                handleInput={handleInput}
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
                isActive={isActive2}
                onToggle={() => setIsActive2(!isActive2)}
            />
            <Education
                inputs={inputs}
                handleInput={handleInput}
                // educationDegree={educationDegree}
                // educationDepartment={educationDepartment}
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
                isActive={isActive3}
                onToggle={() => setIsActive3(!isActive3)}
            />
            <Skills
                skills={skills}
                inputs={inputs}
                handleInput={handleInput}
                // skillsInput={skillsInput}
                handleAddSkill={handleAddSkill}
                // handleSkillsInput={handleSkillsInput}
                isActive={isActive4}
                onToggle={() => setIsActive4(!isActive4)}
            />
            <References
                inputs={inputs}
                handleInput={handleInput}
                // referenceName={referenceName}
                // referenceInstitution={referenceInstitution}
                // referenceEmail={referenceEmail}
                // referencePhone={referencePhone}
                references={references}
                // referenceNameInput={referenceNameInput}
                // referenceInstitutionInput={referenceInstitutionInput}
                // referenceEmailInput={referenceEmailInput}
                // referencePhoneInput={referencePhoneInput}
                handleAddReference={handleAddReference}
                isActive={isActive5}
                onToggle={() => setIsActive5(!isActive5)}
            />
        </div>
    );
}
