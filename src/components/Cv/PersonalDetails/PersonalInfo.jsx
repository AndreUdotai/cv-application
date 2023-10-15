/* eslint-disable react/prop-types */
import { FaPhoneFlip } from 'react-icons/fa6';
import { FaLocationDot } from 'react-icons/fa6';
import { FaEnvelope } from 'react-icons/fa6';

function Details({ emailInput, phoneInput, addressInput }) {
    return (
        <div className='details'>
            <p className='iconHeader'><FaEnvelope/>{emailInput ? emailInput : 'ekarikamboutidem@gmail.com'}</p>
            <p className='iconHeader'><FaPhoneFlip/>{phoneInput ? phoneInput : '+234 (813) 881 XXXX'}</p>
            <p className='iconHeader'><FaLocationDot/>
                {addressInput
                    ? addressInput
                    : 'House 5A, Ekpenyong Street, Uyo, Akwa Ibom, Nigeria'}
            </p>
        </div>
    );
}

function Profile({ titleInput, profileInput }) {
    return (
        <div className='column profile'>
            <h3>{titleInput ? titleInput : 'Business Manager'}</h3>
            <p>
                {profileInput
                    ? profileInput
                    : 'Dedicated and results-driven Business Manager with over 10 years of experience in leading cross-functional teams to achieve business growth and profitability. Proven track record in strategic planning, financial management, and market expansion. Strong communication and negotiation skills.'}
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
