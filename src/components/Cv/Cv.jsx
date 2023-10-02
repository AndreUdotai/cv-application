/* eslint-disable react/prop-types */

import MainSection from './MainSection/MainSection';
import PersonalDetails from './PersonalDetails/PersonalDetails';

function Cv({ inputs, skills, references, education, workHistory }) {
    return (
        <div className='cv'>
            <PersonalDetails inputs={inputs} />
            <hr />
            <MainSection
                skills={skills}
                references={references}
                education={education}
                workHistory={workHistory}
            />
        </div>
    );
}

export default Cv;
