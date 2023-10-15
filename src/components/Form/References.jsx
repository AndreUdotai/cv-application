/* eslint-disable react/prop-types */
import { FaAngleDown } from 'react-icons/fa6';
import { FaAngleUp } from 'react-icons/fa6';
import Input from './Input';
import Button from './Button';
// import ListDisplay from './ListDisplay';
import { FaTrashCan } from 'react-icons/fa6';
import { FaPencil } from 'react-icons/fa6';

export default function References({
    inputs,
    handleInput,
    references,
    handleAddReference,
    handleDeleteReference,
    handleReferenceChange,
    // handleRefActiveChange,
    handleArrayItemActiveChange,
    isActive,
    onToggle,
}) {
    return (
        <div className='form'>
            <div className='formHeader' onClick={onToggle}>
                <h2>References</h2>
                {isActive ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            {isActive && (
                <>
                    <div className='referencesForm'>
                        <Input
                            label={'Full name'}
                            value={inputs[7]}
                            handleInput={(e) => handleInput(7, e.target.value)}
                        />
                        <Input
                            label={'Institution'}
                            value={inputs[8]}
                            handleInput={(e) => handleInput(8, e.target.value)}
                        />
                        <Input
                            label={'Email'}
                            value={inputs[9]}
                            handleInput={(e) => handleInput(9, e.target.value)}
                        />
                        <Input
                            label={'Phone Number'}
                            value={inputs[10]}
                            handleInput={(e) => handleInput(10, e.target.value)}
                        />
                        <Button
                            name={'Add'}
                            handleAdd={(e) => handleAddReference(e)}
                        />
                    </div>
                    <div className='listDisplay'>
    <ul>
        {references.map((item) => (
            <li key={item.id}>
                {item.isActive ? (
                    <div>
                        <input
                            className='input'
                            type='text'
                            name='name'
                            value={item.name}
                            onChange={(e) => handleReferenceChange(e, item.id)}
                        />
                        <input
                            className='input'
                            type='text'
                            name='institution'
                            value={item.institution}
                            onChange={(e) => handleReferenceChange(e, item.id)}
                        />
                        <input
                            className='input'
                            type='text'
                            name='email'
                            value={item.email}
                            onChange={(e) => handleReferenceChange(e, item.id)}
                        />
                        <input
                            className='input'
                            type='text'
                            name='phone'
                            value={item.phone}
                            onChange={(e) => handleReferenceChange(e, item.id)}
                        />
                        <button
                            className='button'
                            type='button'
                            // onClick={() => handleRefActiveChange(item.id, false)}
                            onClick={() => handleArrayItemActiveChange(item.id, 'references', references, false)}
                        >
                            Close
                        </button>
                    </div>
                ) : (
                    <div className='listItem'>
                        <p>{item.name}</p>
                        <div>
                            {/* <FaPencil className='editIcon' onClick={() => handleRefActiveChange(item.id, true)}/> */}
                            <FaPencil className='editIcon' onClick={() => handleArrayItemActiveChange(item.id, 'references', references, true)}/>
                            <FaTrashCan className='deleteIcon' onClick={() => handleDeleteReference(item.id,)}/>
                        </div>
                    </div>
                )}
            </li>
        ))}
    </ul>
</div>
                    {/* <ListDisplay list={references} handleDeleteItem={handleDeleteReference} handleItemChange={handleReferenceChange} handleItemActiveChange={handleRefActiveChange}/> */}
                </>
            )}
        </div>
    );
}
