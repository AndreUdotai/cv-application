
/* eslint-disable react/prop-types */

function Input({ label, inputValue, handleInputChange }) {
    return (
        <div className='inputComponent'>
            <label className='label'>{label}</label>
            <input
                type='text'
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
            <button 
                className='button'
                onClick={handleAdd}>
                {name}
            </button>
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

function EmploymentHistory() {
    return (
        <div className='form'>
            <h2>Employment History</h2>
            <form>
                <Input
                    label={'Position, Company name, Location'}
                    // handleInputChange={handleInputChange}
                />
                <Input
                    label={'Start date'}
                    // inputValue={}
                    // handleInputChange={handleEmailInput}
                />
                <Input
                    label={'End date'}
                    // inputValue={}
                    // handleInputChange={handlePhoneInput}
                />
                <Input
                    label={'Achievements'}
                    // inputValue={}
                    // handleInputChange={handleAddressInput}
                />
            </form>
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
                <Button
                    name={'Add'}
                    handleAdd={(e) => handleAddSkill(e, skillsInput)}
                    
                />
            </div>
            <ul>
                    {
                        skills.map(item => 
                            <li key={item.id}>{item.skill}</li>
                        )
                    }
                </ul>
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
    handleInputChange,
    handleEmailInput,
    handlePhoneInput,
    handleAddressInput,
    handleTitleInput,
    handleProfileInput,
    handleAddSkill,
    handleSkillsInput,
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
            <EmploymentHistory />
            <Skills
                skills={skills}
                skillsInput={skillsInput}
                handleAddSkill={handleAddSkill}
                handleSkillsInput={handleSkillsInput}
            />
        </div>
    );
}
