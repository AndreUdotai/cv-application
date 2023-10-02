/* eslint-disable react/prop-types */
import { FaHandshakeSimple } from 'react-icons/fa6';

export default function References({ references }) {
    return (
        <div className='references'>
            <h3 className='iconHeader'>< FaHandshakeSimple/>References</h3>
            {references && references.length > 0 ? (
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
                        <p>0813881XXXX</p>
                    </li>
                    <li>
                        <p>Dr. Gene Randolph from the University of Oklahoma</p>
                        <p>grandolph@Oklahoma.edu</p>
                        <p>0813881XXXX</p>
                    </li>
                    <li>
                        <p>Dr. Gene Randolph from the University of Oklahoma</p>
                        <p>grandolph@Oklahoma.edu</p>
                        <p>0813881XXXX</p>
                    </li>
                </ul>
            )}
        </div>
    );
}
