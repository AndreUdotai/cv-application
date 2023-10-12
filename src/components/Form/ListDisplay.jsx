/* eslint-disable react/prop-types */
import { FaTrashCan } from 'react-icons/fa6';

export default function ListDisplay({ list }) {
    return (
        <div className='listDisplay'>
            <ul>
                {list.map((item) => (
                    <li key={item.id}>
                        <p>{item.name}</p>
                        <FaTrashCan onClick={()=> alert('Clicked on delete')} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
