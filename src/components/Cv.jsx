/* eslint-disable react/prop-types */

// import MainSection from './components/MainSection';
import MainSection from './MainSection';
import PersonalDetails from './PersonalDetails';

function Cv({
    nameInput,
    emailInput,
    phoneInput,
    addressInput,
    titleInput,
    profileInput,
    skills,
}) {
    return (
        <div className='cv'>
            <PersonalDetails
                nameInput={nameInput}
                emailInput={emailInput}
                phoneInput={phoneInput}
                addressInput={addressInput}
                titleInput={titleInput}
                profileInput={profileInput}
            />
            <hr />
            <MainSection
                skills={skills}
            />
        </div>
    );
}

export default Cv;
