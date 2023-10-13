/* eslint-disable react/prop-types */
import { FaAngleDown } from 'react-icons/fa6';
import { FaAngleUp } from 'react-icons/fa6';
import Input from './Input';
import Button from './Button';
import ListDisplay from './ListDisplay';
// import { FaTrashCan } from 'react-icons/fa6';


export default function Education({
    inputs,
    handleInput,
    education,
    handleAddEducation,
    handleDeleteEducation,
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
                    <ListDisplay list={education} handleDeleteItem={handleDeleteEducation}/>
                    {/* <div className='listDisplay'>
                        <ul>
                            {education.map((item) => (
                                <li key={item.id}>
                                    <p>{item.degree}</p>
                                    <FaTrashCan
                                        onClick={() =>
                                            handleDeleteEducation(item.id)
                                        }
                                    />
                                </li>
                            ))}
                        </ul>
                    </div> */}
                    {/* <div className='listDisplay'>
                        <ul>
                            {education.map((item) => (
                                <li key={item.id}>{item.degree}</li>
                            ))}
                        </ul>
                    </div> */}
                </>
            )}
        </div>
    );
}
