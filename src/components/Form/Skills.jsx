import { useState } from 'react';
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
    handleSkillChange,
    isActive,
    onToggle,
}) {
    const [isActive1, setIsActive1] = useState(false);

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
                                    {isActive1 ? (
                                        <div>
                                            <input
                                                type='text'
                                                value={item.name}
                                                onChange={(e) => handleSkillChange(e, item.id)}
                                            />
                                            <button
                                                type='button'
                                                onClick={() => setIsActive1(false)}
                                            >
                                                Close
                                            </button>
                                        </div>
                                    ) : (
                                        <div>
                                            <p>{item.name}</p>
                                            <div className='updateIcons'>
                                                <FaPencil onClick={() => setIsActive1(true)}/>
                                                <FaTrashCan onClick={() => handleDeleteSkill(item.id,)}/>
                                            </div>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* <ListDisplay list={skills} handleDeleteItem={handleDeleteSkill} /> */}
                </>
            )}
        </div>
    );
}
