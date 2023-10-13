/* eslint-disable react/prop-types */
import { FaAngleDown } from 'react-icons/fa6';
import { FaAngleUp } from 'react-icons/fa6';
import Input from './Input';
import Button from './Button';
import ListDisplay from './ListDisplay';

export default function References({
    inputs,
    handleInput,
    references,
    handleAddReference,
    handleDeleteReference,
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
                            label={'Full name'}
                            value={inputs[8]}
                            handleInput={(e) => handleInput(8, e.target.value)}
                        />
                        <Input
                            label={'Full name'}
                            value={inputs[9]}
                            handleInput={(e) => handleInput(9, e.target.value)}
                        />
                        <Input
                            label={'Full name'}
                            value={inputs[10]}
                            handleInput={(e) => handleInput(10, e.target.value)}
                        />
                        <Button
                            name={'Add'}
                            handleAdd={(e) => handleAddReference(e)}
                        />
                    </div>
                    <ListDisplay list={references} handleDeleteItem={handleDeleteReference}/>
                </>
            )}
        </div>
    );
}
