/* eslint-disable react/prop-types */
import References from './References';
import Skills from './Skills';

export default function RightSide({
    skills,
    referenceName,
    referenceEmail,
    referencePhone,
    references,
}) {
    return (
        <div className='rightSide'>
            <Skills skills={skills} />
            <References
                referenceName={referenceName}
                referenceEmail={referenceEmail}
                referencePhone={referencePhone}
                references={references}
            />
        </div>
    );
}
