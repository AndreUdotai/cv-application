/* eslint-disable react/prop-types */

export default function Input({ label, value, handleInput }) {
    return (
        <div className='inputComponent'>
            <label className='label'>{label}</label>
            <input
                type='text'
                className='input'
                value={value}
                // the handleInput function is called in the Input component with the needed arguments
                onChange={handleInput}
            />
        </div>
    );
}
