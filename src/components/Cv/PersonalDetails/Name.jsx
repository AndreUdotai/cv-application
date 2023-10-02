/* eslint-disable react/prop-types */

export default function Name({nameInput}){
    return (
        <h1 className="name">{nameInput ? nameInput : 'Mbuotidem Ekra'}</h1>
    )
}