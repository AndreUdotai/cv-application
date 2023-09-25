/* eslint-disable react/prop-types */

export default function References({ references }) {
    return (
        <div className='references'>
            <h3>References</h3>
            {references.length > 0 ? (
                <ul>
                    {references.map((reference) => (
                        <li key={reference.id}>
                            <p>{reference.name}, <br /> {reference.institution}</p>
                            <p>{reference.email}</p>
                            <p>{reference.phone}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <ul>
                    <li>
                        <p>Dr. Gene Randolph from the University of Oklahoma</p>
                        <p>grandolph@Oklahoma.edu</p>
                        <p>08138818457</p>
                    </li>
                    <li>
                        <p>Dr. Gene Randolph from the University of Oklahoma</p>
                        <p>grandolph@Oklahoma.edu</p>
                        <p>08138818457</p>
                    </li>
                    <li>
                        <p>Dr. Gene Randolph from the University of Oklahoma</p>
                        <p>grandolph@Oklahoma.edu</p>
                        <p>08138818457</p>
                    </li>
                </ul>
            )}
        </div>
    );
}
