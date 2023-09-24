/* eslint-disable react/prop-types */

import '../App.css';

function Details({ emailInput, phoneInput, addressInput }) {
    return (
        <div className='details'>
            <p>{emailInput ? emailInput : 'andreudotai@gmail.com'}</p>
            <p>{phoneInput ? phoneInput : "+234 (813) 881 8457"}</p>
            <p>{addressInput ? addressInput : 'House 24B, Zone B, Apo Resettlement, Garki 2, Abuja'}</p>
        </div>
    );
}

function Profile({titleInput, profileInput}) {
    return (
        <div className='column profile'>
            <h3>{titleInput ? titleInput : 'Project Manager | Full Stack Web Developer'}</h3>
            <p>
                {profileInput ? profileInput : 'DDedicated Project Manager with experience in building web applications, ideation. Dedicated Project Manager with experience in building web applications, ideation. Dedicated Project Manager with experience in building web applications,ideation.Dedicated Project Manager with experience in building web applications, ideation.'}
            </p>
        </div>
    );
}

export default function PersonalInfo({
    emailInput,
    phoneInput,
    addressInput,
    titleInput,
    profileInput,
}) {
    return (
        <div className='row personalInfo'>
            <Details
                emailInput={emailInput}
                phoneInput={phoneInput}
                addressInput={addressInput}
            />
            <Profile titleInput={titleInput} profileInput={profileInput} />
        </div>
    );
}
