/* eslint-disable react/prop-types */

function Input({ label, inputValue, handleInputChange, name }) {
    return (
        <div className='inputComponent'>
            <label className='label'>{label}</label>
            <input
                type='text'
                name={name}
                className='input'
                value={inputValue}
                onChange={(event) => handleInputChange(event.target.value)}
            />
        </div>
    );
}

function TextArea({ label, inputValue, handleInputChange }) {
    return (
        <div className='inputComponent'>
            <label className='label'>{label}</label>
            <textarea
                cols='30'
                rows='10'
                className='input'
                value={inputValue}
                onChange={(e) => handleInputChange(e.target.value)}
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
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}

function PersonalDetails({
    formTitle,
    nameInput = { nameInput },
    emailInput = { emailInput },
    phoneInput = { phoneInput },
    addressInput = { addressInput },
    titleInput = { titleInput },
    profileInput = { profileInput },
    handleInputChange = { handleInputChange },
    handleEmailInput = { handleEmailInput },
    handlePhoneInput = { handlePhoneInput },
    handleAddressInput = { handleAddressInput },
    handleTitleInput = { handleTitleInput },
    handleProfileInput = { handleProfileInput },
}) {
    return (
        <div className='form'>
            <h2>{formTitle}</h2>
            <form>
                <Input
                    label={'Full name'}
                    inputValue={nameInput}
                    handleInputChange={handleInputChange}
                />
                <Input
                    label={'Email'}
                    inputValue={emailInput}
                    handleInputChange={handleEmailInput}
                />
                <Input
                    label={'Phone number'}
                    inputValue={phoneInput}
                    handleInputChange={handlePhoneInput}
                />
                <Input
                    label={'Address'}
                    inputValue={addressInput}
                    handleInputChange={handleAddressInput}
                />
                <Input
                    label={'Professional title'}
                    inputValue={titleInput}
                    handleInputChange={handleTitleInput}
                />
                <TextArea
                    label={'Profile'}
                    inputValue={profileInput}
                    handleInputChange={handleProfileInput}
                />
            </form>
        </div>
    );
}

function EmploymentHistory({
    workPosition,
    workName,
    workLocation,
    workStart,
    workEnd,
    workAchievement,
    workHistory,
    handleWorkPosition,
    handleWorkName,
    handleWorkLocation,
    handleWorkStart,
    handleWorkEnd,
    handleWorkAchievement,
    handleAddWork,
}) {
    return (
        <div className='form'>
            <h2>Employment History</h2>
            <form>
                <Input
                    label={'Position'}
                    inputValue={workPosition}
                    handleInputChange={handleWorkPosition}
                />
                <Input
                    label={'Name of Company'}
                    inputValue={workName}
                    handleInputChange={handleWorkName}
                />
                <Input
                    label={'Location'}
                    inputValue={workLocation}
                    handleInputChange={handleWorkLocation}
                />
                <Input
                    label={'Start date'}
                    inputValue={workStart}
                    handleInputChange={handleWorkStart}
                />
                <Input
                    label={'End date'}
                    inputValue={workEnd}
                    handleInputChange={handleWorkEnd}
                />
                <Input
                    label={'Achievements'}
                    inputValue={workAchievement}
                    handleInputChange={handleWorkAchievement}
                />
                <Button name={'Add'} handleAdd={(e) => handleAddWork(e)} />
            </form>
            <div className="listDisplay">
                <ul>
                    {workHistory.map((item) => (
                        <li key={item.id}>{item.position}</li>
                    ))}
                </ul>
            </div>

        </div>
    );
}

function Education({
    educationDegree,
    educationDepartment,
    educationSchool,
    educationLocation,
    educationStart,
    educationEnd,
    educationArray,
    handleDegreeInput,
    handleDepartmentInput,
    handleSchoolInput,
    handleLocationInput,
    handleStartInput,
    handleEndInput,
    handleAddEducation,
}) {
    return (
        <div className='form'>
            <h2>Education</h2>
            <div className='educationForm'>
                <Input
                    label={'Degree'}
                    inputValue={educationDegree}
                    handleInputChange={handleDegreeInput}
                />
                <Input
                    label={'Department'}
                    inputValue={educationDepartment}
                    handleInputChange={handleDepartmentInput}
                />
                <Input
                    label={'School'}
                    inputValue={educationSchool}
                    handleInputChange={handleSchoolInput}
                />
                <Input
                    label={'Location'}
                    inputValue={educationLocation}
                    handleInputChange={handleLocationInput}
                />
                <Input
                    label={'Start date'}
                    inputValue={educationStart}
                    handleInputChange={handleStartInput}
                />
                <Input
                    label={'End date'}
                    inputValue={educationEnd}
                    handleInputChange={handleEndInput}
                />
                <Button name={'Add'} handleAdd={(e) => handleAddEducation(e)} />
            </div>
            <div className='listDisplay'>
                <ul>
                    {educationArray.map((item) => (
                        <li key={item.id}>{item.degree}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}


function Skills({ skills, skillsInput, handleAddSkill, handleSkillsInput }) {
    return (
        <div className='form'>
            <h2>Skills</h2>
            <div className='skillsForm'>
                <Input
                    inputValue={skillsInput}
                    handleInputChange={handleSkillsInput}
                />
                <Button name={'Add'} handleAdd={(e) => handleAddSkill(e)} />
            </div>
            <ListDisplay list={skills} />
        </div>
    );
}

function References({
    referenceName,
    referenceInstitution,
    referenceEmail,
    referencePhone,
    references,
    referenceNameInput,
    referenceInstitutionInput,
    referenceEmailInput,
    referencePhoneInput,
    handleAddReference,
}) {
    return (
        <div className='form'>
            <h2>References</h2>
            <div className='referencesForm'>
                <Input
                    label={'Name'}
                    inputValue={referenceName}
                    handleInputChange={referenceNameInput}
                />
                <Input
                    label={'Institution'}
                    inputValue={referenceInstitution}
                    handleInputChange={referenceInstitutionInput}
                />
                <Input
                    label={'Email'}
                    inputValue={referenceEmail}
                    handleInputChange={referenceEmailInput}
                />
                <Input
                    label={'Phone number'}
                    inputValue={referencePhone}
                    handleInputChange={referencePhoneInput}
                />
                <Button name={'Add'} handleAdd={(e) => handleAddReference(e)} />
            </div>
            <ListDisplay list={references} />
        </div>
    );
}

export default function Form({
    nameInput,
    emailInput,
    phoneInput,
    addressInput,
    titleInput,
    profileInput,
    skills,
    skillsInput,
    referenceName,
    referenceInstitution,
    referenceEmail,
    referencePhone,
    references,
    handleInputChange,
    handleEmailInput,
    handlePhoneInput,
    handleAddressInput,
    handleTitleInput,
    handleProfileInput,
    handleAddSkill,
    handleSkillsInput,
    referenceNameInput,
    referenceInstitutionInput,
    referenceEmailInput,
    referencePhoneInput,
    handleAddReference,
    educationDegree,
    educationDepartment,
    educationSchool,
    educationLocation,
    educationStart,
    educationEnd,
    educationArray,
    handleDegreeInput,
    handleDepartmentInput,
    handleSchoolInput,
    handleLocationInput,
    handleStartInput,
    handleEndInput,
    handleAddEducation,
    workPosition,
    workName,
    workLocation,
    workStart,
    workEnd,
    workAchievement,
    workHistory,
    handleWorkPosition,
    handleWorkName,
    handleWorkLocation,
    handleWorkStart,
    handleWorkEnd,
    handleWorkAchievement,
    handleAddWork,
}) {
    return (
        <div className='formSection'>
            <PersonalDetails
                formTitle={'Personal Details'}
                nameInput={nameInput}
                emailInput={emailInput}
                phoneInput={phoneInput}
                addressInput={addressInput}
                titleInput={titleInput}
                profileInput={profileInput}
                handleInputChange={handleInputChange}
                handleEmailInput={handleEmailInput}
                handlePhoneInput={handlePhoneInput}
                handleAddressInput={handleAddressInput}
                handleTitleInput={handleTitleInput}
                handleProfileInput={handleProfileInput}
            />
            <EmploymentHistory
                workPosition={workPosition}
                workName={workName}
                workLocation={workLocation}
                workStart={workStart}
                workEnd={workEnd}
                workAchievement={workAchievement}
                workHistory={workHistory}
                handleWorkPosition={handleWorkPosition}
                handleWorkName={handleWorkName}
                handleWorkLocation={handleWorkLocation}
                handleWorkStart={handleWorkStart}
                handleWorkEnd={handleWorkEnd}
                handleWorkAchievement={handleWorkAchievement}
                handleAddWork={handleAddWork}
            />
            <Education
                educationDegree={educationDegree}
                educationDepartment={educationDepartment}
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
            <Skills
                skills={skills}
                skillsInput={skillsInput}
                handleAddSkill={handleAddSkill}
                handleSkillsInput={handleSkillsInput}
            />
            <References
                referenceName={referenceName}
                referenceInstitution={referenceInstitution}
                referenceEmail={referenceEmail}
                referencePhone={referencePhone}
                references={references}
                referenceNameInput={referenceNameInput}
                referenceInstitutionInput={referenceInstitutionInput}
                referenceEmailInput={referenceEmailInput}
                referencePhoneInput={referencePhoneInput}
                handleAddReference={handleAddReference}
            />
        </div>
    );
}
