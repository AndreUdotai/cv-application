/* eslint-disable react/prop-types */
import { FaGraduationCap } from 'react-icons/fa6';

function School({ education }) {
    return (
        <div className='school'>
            {education && education.length > 0 ? (
                <ul>
                    {education.map((program) => (
                        <div key={program.id}>
                            <h4>
                                {program.school}, {program.location}
                            </h4>
                            <p>
                                {program.start} - {program.end}
                            </p>
                            <ul>
                                <p>
                                    {program.degree}, <br />{' '}
                                    {program.department}
                                </p>
                            </ul>
                        </div>
                    ))}
                </ul>
            ) : (
                <>
                    <h4>Harvard University, Cambridge, Massachusetts, USA</h4>
                    <p>04/03/2006 - 03/03/2011</p>
                    <ul>
                        <p>
                            Master of Business, <br /> Harvard Business School
                        </p>
                    </ul>
                </>
            )}
        </div>
    );
}

export default function Education({ education }) {
    return (
        <>
            <h3 className='iconHeader'><FaGraduationCap /> Education</h3>
            <School education={education} />
        </>
    );
}
