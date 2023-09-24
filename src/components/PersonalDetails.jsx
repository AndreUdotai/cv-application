/* eslint-disable react/prop-types */
import Name from "./Name";
import PersonalInfo from "./PersonalInfo";



export default function PersonalDetails({
    nameInput,
    emailInput,
    phoneInput,
    addressInput,
    titleInput,
    profileInput,
}) {
    return (
        <>
            <Name
                nameInput={nameInput}
            />
            <PersonalInfo
                emailInput={emailInput}
                phoneInput={phoneInput}
                addressInput={addressInput}
                titleInput={titleInput}
                profileInput={profileInput}
            />
        </>
    )
}