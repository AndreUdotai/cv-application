

function School() {
    return (
        <div className="school">
            <h4>Federal University of Technology, Owerri</h4>
            <p>04/03/2006 - 03/03/2011</p>
            <ul>
                <li>Bachelor of Technology, <br /> Food Science and Technology</li>
            </ul>
        </div>
    )
}

export default function Education() {
    return (
        <>
            <h3>Education</h3>
            <School />
        </>
    )
}