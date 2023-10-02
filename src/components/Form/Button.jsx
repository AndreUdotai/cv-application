/* eslint-disable react/prop-types */

export default function Button({ name, handleAdd }) {
    return (
        <div>
            <button className='button' onClick={handleAdd}>
                {name}
            </button>
        </div>
    );
}
