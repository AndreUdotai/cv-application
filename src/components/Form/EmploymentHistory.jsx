/* eslint-disable react/prop-types */
import { FaAngleDown } from 'react-icons/fa6';
import { FaAngleUp } from 'react-icons/fa6';
import Input from './Input';
import Button from './Button';
import ListDisplay from './ListDisplay';

export default function EmploymentHistory({
    inputs,
    handleInput,
    workHistory,
    handleAddWork,
    handleDeleteWork,
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
                    <form>
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
                    </form>
                    <ListDisplay list={workHistory} handleDeleteItem={handleDeleteWork} />
                </>
            )}
        </div>
    );
}
