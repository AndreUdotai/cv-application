/* eslint-disable react/prop-types */
import { FaTrashCan } from 'react-icons/fa6';

export default function ListDisplay({ list, handleDeleteItem }) {
    return (
        <div className='listDisplay'>
            <ul>
                {list.map((item) => (
                    <li key={item.id}>
                        {item.degree ? <p>{item.degree}</p> : <p>{item.name}</p> }
                        <FaTrashCan onClick={()=>handleDeleteItem(item.id)} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
