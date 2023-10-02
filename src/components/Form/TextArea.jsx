/* eslint-disable react/prop-types */

export default function TextArea({ label, value, handleInput }) {
    return (
        <div className='inputComponent'>
            <label className='label'>{label}</label>
            <textarea
                cols='30'
                rows='10'
                className='input'
                value={value}
                onChange={handleInput}
            ></textarea>
        </div>
    );
}
