/* eslint-disable react/prop-types */

export default function ListDisplay({ list }) {
    return (
        <div className='listDisplay'>
            <ul>
                {list.map((item) => (
                    <li key={item.id}>
                        <p>{item.name}</p>
                        {/* <FaXmark /> */}
                    </li>
                ))}
            </ul>
        </div>
    );
}
