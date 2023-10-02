/* eslint-disable react/prop-types */
import { FaAngleDown } from 'react-icons/fa6';
import { FaAngleUp } from 'react-icons/fa6';

import Input from './Input';
import TextArea from './TextArea';

export default function PersonalDetails({
    inputs,
    handleInput,
    isActive,
    onToggle,
}) {
    return (
        <>
            <div className='form'>
                <div className='formHeader' onClick={onToggle}>
                    <h2>Personal Details</h2>
                    {isActive ? <FaAngleUp /> : <FaAngleDown />}
                </div>
                {isActive && (
                    <form>
                        <Input
                            label={'Full name'}
                            value={inputs[0]}
                            handleInput={(e) => handleInput(0, e.target.value)}
                        />
                        <Input
                            label={'Email'}
                            value={inputs[1]}
                            handleInput={(e) => handleInput(1, e.target.value)}
                        />
                        <Input
                            label={'Phone number'}
                            value={inputs[2]}
                            handleInput={(e) => handleInput(2, e.target.value)}
                        />
                        <Input
                            label={'Address'}
                            value={inputs[3]}
                            handleInput={(e) => handleInput(3, e.target.value)}
                        />
                        <Input
                            label={'Professional title'}
                            value={inputs[4]}
                            handleInput={(e) => handleInput(4, e.target.value)}
                        />
                        <TextArea
                            label={'Profile'}
                            value={inputs[5]}
                            handleInput={(e) => handleInput(5, e.target.value)}
                        />
                    </form>
                )}
            </div>
        </>
    );
}
