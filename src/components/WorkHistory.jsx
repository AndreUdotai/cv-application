/* eslint-disable react/prop-types */

import { Fragment } from 'react';

function WorkExperience({ workHistory }) {
    return (
        <div className='workExperience'>
            {workHistory.length > 0 ? (
                workHistory.map((work) => (
                    <Fragment key={work.id}>
                        <h4>
                            {work.position} at {work.name}, {work.location}
                        </h4>
                        <p>
                            {work.start} - {work.end}
                        </p>
                        <ul>
                            <li>{work.achievement}</li>
                        </ul>
                    </Fragment>
                ))
            ) : (
                <>
                    <h4>Project Manager at Digital Community</h4>
                    <p>04/03/2019 - 03/03/2022</p>
                    <ul>
                        <li>conducted through neuroligical assessemnts</li>
                    </ul>
                </>
            )}
        </div>
    );
}

export default function WorkHistory({ workHistory }) {
    return (
        <>
            <h3>Employment History</h3>
            <WorkExperience workHistory={workHistory} />
        </>
    );
}
