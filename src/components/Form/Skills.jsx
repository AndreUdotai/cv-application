/* eslint-disable react/prop-types */
import { FaAngleDown } from 'react-icons/fa6';
import { FaAngleUp } from 'react-icons/fa6';
import Input from './Input';
import Button from './Button';
import ListDisplay from './ListDisplay';
// import { FaTrashCan } from 'react-icons/fa6';


export default function Skills({
    inputs,
    handleInput,
    skills,
    handleAddSkill,
    handleDeleteSkill,
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
                    {/* <div className='listDisplay'>
                        <ul>
                            {skills.map((item) => (
                                <li key={item.id}>
                                    <p>{item.name}</p>
                                    <FaTrashCan onClick={()=>handleDeleteSkill(item.id)} />
                                </li>
                            ))}
                        </ul>
                    </div> */}
                    <ListDisplay list={skills} handleDeleteItem={handleDeleteSkill} />
                </>
            )}
        </div>
    );
}
