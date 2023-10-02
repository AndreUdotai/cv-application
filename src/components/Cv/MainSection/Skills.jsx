/* eslint-disable react/prop-types */
import { FaLaptopCode } from 'react-icons/fa6';

export default function Skills({ skills }) {
    return (
        <div className='skills'>
            <h3 className='iconHeader'>< FaLaptopCode/> Skills</h3>
            {skills && skills.length > 0 ? (
                <ul>
                    {skills.map((item) => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            ) : (
                <ul>
                    <li>Strategic Planning</li>
                    <li>Leadership</li>
                    <li>Financial Acumen</li>
                    <li>Market Analysis</li>
                    <li>Negotiation</li>
                    <li>Project Management</li>
                    <li>Problem Solving</li>
                </ul>
            )}
        </div>
    );
}
