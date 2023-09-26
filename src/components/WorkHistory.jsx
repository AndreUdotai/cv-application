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
                    <>
                        <h4>Chief Executive Office at Swiss Inc</h4>
                        <p>04/03/2022 - Present</p>
                        <ul>
                            <li>
                                Led the company through a successful initial
                                public offering (IPO), securing $100 million in
                                capital and achieving a market capitalization of
                                $1 billion within the first year of going
                                public. This milestone marked a significant
                                growth phase for the company, attracting new
                                investors, expanding market reach, and
                                solidifying our position as a key player in the
                                industry.
                            </li>
                        </ul>
                    </>

                    <>
                        <h4>Business Manager at Salsa Technologies</h4>
                        <p>04/03/2019 - 03/03/2022</p>
                        <ul>
                            <li>
                                Launched a strategic partnership program,
                                boosting new client acquisitions by 30% in the
                                first quarter. This initiative solidified key
                                industry alliances and improved our product
                                portfolio, establishing us as a tech industry
                                leader.
                            </li>
                        </ul>
                    </>
                </>
            )}
        </div>
    );
}

export default function WorkHistory({ workHistory }) {
    return (
        <>
            <h3>Work History</h3>
            <WorkExperience workHistory={workHistory} />
        </>
    );
}
