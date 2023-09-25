/* eslint-disable react/prop-types */
import RightSide from './RightSide';
import LeftSide from './leftSide';
import '../App.css';

export default function MainSection({ skills, references }) {
    return (
        <div className='mainSection'>
            <LeftSide />
            <RightSide skills={skills} references={references} />
        </div>
    );
}
