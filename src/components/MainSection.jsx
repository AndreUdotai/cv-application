/* eslint-disable react/prop-types */
import RightSide from './RightSide';
import LeftSide from './leftSide';
import '../App.css';

export default function MainSection({ skills, references, education, workHistory }) {
    return (
        <div className='mainSection'>
            <LeftSide education={education} workHistory={workHistory} />
            <RightSide skills={skills} references={references} />
        </div>
    );
}
