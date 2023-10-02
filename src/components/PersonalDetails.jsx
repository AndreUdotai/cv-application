/* eslint-disable react/prop-types */
import Name from './Name';
import PersonalInfo from './PersonalInfo';

export default function PersonalDetails({ inputs }) {
    return (
        <>
            <Name nameInput={inputs[0]} />
            <PersonalInfo
                emailInput={inputs[1]}
                phoneInput={inputs[2]}
                addressInput={inputs[3]}
                titleInput={inputs[4]}
                profileInput={inputs[5]}
            />
        </>
    );
}
