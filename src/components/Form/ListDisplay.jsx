/* eslint-disable react/prop-types */
import { FaTrashCan } from 'react-icons/fa6';
import { FaPencil } from 'react-icons/fa6';

// export default function ListDisplay({ list, handleDeleteItem }) {
//     return (
//         <div className='listDisplay'>
//             <ul>
//                 {list.map((item) => (
//                     <li key={item.id}>
//                         {item.degree ? <p>{item.degree}</p> : <p>{item.name}</p> }
//                         <div className='updateIcons'>
//                             <FaPencil />
//                             <FaTrashCan onClick={()=>handleDeleteItem(item.id)} />
//                         </div>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

export default function ListDisplay({ list, handleDeleteItem, handleItemChange, handleItemActiveChange }) {
    return (
<div className='listDisplay'>
    <ul>
        {list.map((item) => (
            <li key={item.id}>
                {item.isActive ? (
                    <div>
                        <input
                            className='input'
                            type='text'
                            value={item.name}
                            onChange={(e) => handleItemChange(e, item.id)}
                        />
                        <button
                            className='button'
                            type='button'
                            onClick={() => handleItemActiveChange(item.id, false)}
                        >
                            Close
                        </button>
                    </div>
                ) : (
                    <div className='listItem'>
                        <p>{item.name}</p>
                        <div>
                            <FaPencil className='editIcon' onClick={() => handleItemActiveChange(item.id, true)}/>
                            <FaTrashCan className='deleteIcon' onClick={() => handleDeleteItem(item.id,)}/>
                        </div>
                    </div>
                )}
            </li>
        ))}
    </ul>
</div>
    );
}