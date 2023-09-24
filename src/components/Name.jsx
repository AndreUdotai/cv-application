import '../App.css';


// eslint-disable-next-line react/prop-types
export default function Name({nameInput}){
    return (
        <h1 className="name">{nameInput ? nameInput : 'Andre Udotai'}</h1>
    )
}