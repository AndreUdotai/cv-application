/* eslint-disable react/prop-types */
import { FaAngleDown } from 'react-icons/fa6';
import { FaAngleUp } from 'react-icons/fa6';
import Input from './Input';
import Button from './Button';
import { FaTrashCan } from 'react-icons/fa6';
import { FaPencil } from 'react-icons/fa6';

export default function EmploymentHistory({
    inputs,
    handleInput,
    workHistory,
    handleAddWork,
    handleDeleteWork,
    handleUpdateItem,
    handleArrayItemActiveChange,
    isActive,
    onToggle,
}) {
    return (
        <div className='form'>
            <div className='formHeader' onClick={onToggle}>
                <h2>Work History</h2>
                {isActive ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            {isActive && (
                <>
                    <div>
                        <Input
                            label={'Position'}
                            value={inputs[17]}
                            handleInput={(e) => handleInput(17, e.target.value)}
                        />
                        <Input
                            label={'Name of Company'}
                            value={inputs[18]}
                            handleInput={(e) => handleInput(18, e.target.value)}
                        />
                        <Input
                            label={'Location'}
                            value={inputs[19]}
                            handleInput={(e) => handleInput(19, e.target.value)}
                        />
                        <Input
                            label={'Start date'}
                            input={inputs[20]}
                            handleInput={(e) => handleInput(20, e.target.value)}
                        />
                        <Input
                            label={'End date'}
                            value={inputs[21]}
                            handleInput={(e) => handleInput(21, e.target.value)}
                        />
                        <Input
                            label={'Achievements'}
                            value={inputs[22]}
                            handleInput={(e) => handleInput(22, e.target.value)}
                        />
                        <Button
                            name={'Add'}
                            handleAdd={(e) => handleAddWork(e)}
                        />
                    </div>
                    <div className='listDisplay'>
                        <ul>
                            {workHistory.map((item) => (
                                <li key={item.id}>
                                    {item.isActive ? (
                                        <div>
                                            <input
                                                className='input'
                                                type='text'
                                                name='position'
                                                value={item.position}
                                                onChange={(e) => handleUpdateItem(e, 'workHistory', item.id)}
                                            />
                                            <input
                                                className='input'
                                                type='text'
                                                name='name'
                                                value={item.name}
                                                onChange={(e) => handleUpdateItem(e, 'workHistory', item.id)}
                                            />
                                            <input
                                                className='input'
                                                type='text'
                                                name='location'
                                                value={item.location}
                                                onChange={(e) => handleUpdateItem(e, 'workHistory', item.id)}
                                            />
                                            <input
                                                className='input'
                                                type='text'
                                                name='start'
                                                value={item.start}
                                                onChange={(e) => handleUpdateItem(e, 'workHistory', item.id)}
                                            />
                                            <input
                                                className='input'
                                                type='text'
                                                name='end'
                                                value={item.end}
                                                onChange={(e) => handleUpdateItem(e, 'workHistory', item.id)}
                                            />
                                            <input
                                                className='input'
                                                type='text'
                                                name='achievement'
                                                value={item.achievement}
                                                onChange={(e) => handleUpdateItem(e, 'workHistory', item.id)}
                                            />
                                            <button
                                                className='button'
                                                type='button'
                                                onClick={() =>handleArrayItemActiveChange(item.id, 'workHistory', false )}
                                            >
                                                Close
                                            </button>
                                        </div>
                                    ) : (
                                        <div className='listItem'>
                                            <p>{item.name}</p>
                                            <div>
                                                <FaPencil
                                                    className='editIcon'
                                                    onClick={() => handleArrayItemActiveChange(item.id, 'workHistory', true)}
                                                />
                                                <FaTrashCan className='deleteIcon' onClick={() => handleDeleteWork(item.id,)}/>
                                            </div>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
            )}
        </div>
    );
}
