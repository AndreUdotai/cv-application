// import { useState } from 'react';
/* eslint-disable react/prop-types */
import { FaAngleDown } from 'react-icons/fa6';
import { FaAngleUp } from 'react-icons/fa6';
import Input from './Input';
import Button from './Button';
// import ListDisplay from './ListDisplay';
import { FaTrashCan } from 'react-icons/fa6';
import { FaPencil } from 'react-icons/fa6';

export default function Skills({
    inputs,
    handleInput,
    skills,
    handleAddSkill,
    handleDeleteSkill,
    // handleSkillChange,
    // handleSkillActiveChange,
    handleUpdateItem,
    handleArrayItemActiveChange,
    isActive,
    onToggle,
}) {
    return (
        <div className='form'>
            <div className='formHeader' onClick={onToggle}>
                <h2>Skills</h2>
                {isActive ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            {isActive && (
                <>
                    <div className='skillsForm'>
                        <Input
                            value={inputs[6]}
                            handleInput={(e) => handleInput(6, e.target.value)}
                        />
                        <Button
                            name={'Add'}
                            handleAdd={(e) => handleAddSkill(e)}
                        />
                    </div>
                    <div className='listDisplay'>
                        <ul>
                            {skills.map((item) => (
                                <li key={item.id}>
                                    {item.isActive ? (
                                        <div>
                                            <input
                                                className='input'
                                                type='text'
                                                name='name'
                                                value={item.name}
                                                // onChange={(e) => handleSkillChange(e, item.id)}
                                                onChange={(e) => handleUpdateItem(e, 'skills', item.id)}
                                            />
                                            <button
                                                className='button'
                                                type='button'
                                                onClick={() => handleArrayItemActiveChange(item.id, 'skills', false)}
                                            >
                                                Close
                                            </button>
                                        </div>
                                    ) : (
                                        <div className='listItem'>
                                            <p>{item.name}</p>
                                            <div>
                                                <FaPencil className='editIcon' onClick={() => handleArrayItemActiveChange(item.id, 'skills', true)}/>
                                                <FaTrashCan className='deleteIcon' onClick={() => handleDeleteSkill(item.id,)}/>
                                            </div>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* <ListDisplay list={skills} handleDeleteItem={handleDeleteSkill} handleItemChange={handleSkillChange} handleItemActiveChange={handleSkillActiveChange} /> */}
                </>
            )}
        </div>
    );
}
