/* eslint-disable react/prop-types */

function School({ education }) {
    return (
        <div className='school'>
            {education.length > 0 ? (
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
                                <p>{program.degree}, <br /> {program.department}</p>
                            </ul>
                        </div>
                    ))}
                </ul>
            ) : (
                <>
                    <h4>Federal University of Technology, Owerri</h4>
                    <p>04/03/2006 - 03/03/2011</p>
                    <ul>
                        <p>
                            Bachelor of Technology, <br /> Food Science and
                            Technology
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
            <h3>Education</h3>
            <School education={education} />
        </>
    );
}
