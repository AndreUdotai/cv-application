/* eslint-disable react/prop-types */
import RightSide from './rightSide/RightSide';
import LeftSide from './leftSide/LeftSide'

export default function MainSection({ skills, references, education, workHistory }) {
    return (
        <div className='mainSection'>
            <LeftSide education={education} workHistory={workHistory} />
            <RightSide skills={skills} references={references} />
        </div>
    );
}
