/* eslint-disable react/prop-types */

export default function Skills({ skills }) {
    return (
        <div className='skills'>
            <h3>Skills</h3>
            {skills.length > 0 ? (
                <ul>
                    {skills.map((item) => (
                        <li key={item.id}>{item.skill}</li>
                    ))}
                </ul>
            ) : (
                <ul>
                    <li>Writing</li>
                    <li>Coding</li>
                    <li>Data processing</li>
                    <li>HTML</li>
                    <li>Project Management</li>
                    <li>Microsoft Powerpoint presentation</li>
                    <li>Builing no code websites</li>
                </ul>
            )}
        </div>
    );
}
