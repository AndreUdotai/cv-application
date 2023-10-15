/* eslint-disable react/prop-types */
import { FaAngleDown } from 'react-icons/fa6';
import { FaAngleUp } from 'react-icons/fa6';
import Input from './Input';
import Button from './Button';
import { FaTrashCan } from 'react-icons/fa6';
import { FaPencil } from 'react-icons/fa6';

export default function Education({
    inputs,
    handleInput,
    education,
    handleAddEducation,
    handleDeleteEducation,
    handleUpdateItem,
    handleArrayItemActiveChange,
    isActive,
    onToggle,
}) {
    return (
        <div className='form'>
            <div className='formHeader' onClick={onToggle}>
                <h2>Education</h2>
                {isActive ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            {isActive && (
                <>
                    <div className='educationForm'>
                        <Input
                            label={'Degree'}
                            value={inputs[11]}
                            handleInput={(e) => handleInput(11, e.target.value)}
                        />
                        <Input
                            label={'Department'}
                            value={inputs[12]}
                            handleInput={(e) => handleInput(12, e.target.value)}
                        />
                        <Input
                            label={'School'}
                            value={inputs[13]}
                            handleInput={(e) => handleInput(13, e.target.value)}
                        />
                        <Input
                            label={'Location'}
                            value={inputs[14]}
                            handleInput={(e) => handleInput(14, e.target.value)}
                        />
                        <Input
                            label={'Start date'}
                            value={inputs[15]}
                            handleInput={(e) => handleInput(15, e.target.value)}
                        />
                        <Input
                            label={'End date'}
                            value={inputs[16]}
                            handleInput={(e) => handleInput(16, e.target.value)}
                        />
                        <Button
                            name={'Add'}
                            handleAdd={(e) => handleAddEducation(e)}
                        />
                    </div>
                    <div className='listDisplay'>
                        <ul>
                            {education.map((item) => (
                                <li key={item.id}>
                                    {item.isActive ? (
                                        <div>
                                            <input
                                                className='input'
                                                type='text'
                                                name='degree'
                                                value={item.degree}
                                                onChange={(e) =>
                                                    handleUpdateItem(
                                                        e,
                                                        'education',
                                                        item.id,
                                                    )
                                                }
                                            />
                                            <input
                                                className='input'
                                                type='text'
                                                name='department'
                                                value={item.department}
                                                onChange={(e) =>
                                                    handleUpdateItem(
                                                        e,
                                                        'education',
                                                        item.id,
                                                    )
                                                }
                                            />
                                            <input
                                                className='input'
                                                type='text'
                                                name='school'
                                                value={item.school}
                                                onChange={(e) =>
                                                    handleUpdateItem(
                                                        e,
                                                        'education',
                                                        item.id,
                                                    )
                                                }
                                            />
                                            <input
                                                className='input'
                                                type='text'
                                                name='location'
                                                value={item.location}
                                                onChange={(e) =>
                                                    handleUpdateItem(
                                                        e,
                                                        'education',
                                                        item.id,
                                                    )
                                                }
                                            />
                                            <input
                                                className='input'
                                                type='text'
                                                name='start'
                                                value={item.start}
                                                onChange={(e) =>
                                                    handleUpdateItem(
                                                        e,
                                                        'education',
                                                        item.id,
                                                    )
                                                }
                                            />
                                            <input
                                                className='input'
                                                type='text'
                                                name='end'
                                                value={item.end}
                                                onChange={(e) =>
                                                    handleUpdateItem(
                                                        e,
                                                        'education',
                                                        item.id,
                                                    )
                                                }
                                            />
                                            <button
                                                className='button'
                                                type='button'
                                                onClick={() =>
                                                    handleArrayItemActiveChange(
                                                        item.id,
                                                        'education',
                                                        false,
                                                    )
                                                }
                                            >
                                                Close
                                            </button>
                                        </div>
                                    ) : (
                                        <div className='listItem'>
                                            <p>{item.school}</p>
                                            <div>
                                                <FaPencil
                                                    className='editIcon'
                                                    onClick={() =>
                                                        handleArrayItemActiveChange(
                                                            item.id,
                                                            'education',
                                                            true,
                                                        )
                                                    }
                                                />
                                                <FaTrashCan
                                                    className='deleteIcon'
                                                    onClick={() =>
                                                        handleDeleteEducation(
                                                            item.id,
                                                        )
                                                    }
                                                />
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
