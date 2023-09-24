
import '../App.css'

function Details() {
    return (
        <div className='details'>
            <p>andreudotai@gmail.com</p>
            <p>+234 (813) 881 8457</p>
            <p>House 24B, Zone B, Apo Resettlement, Garki 2, Abuja</p>
        </div>
    )
}

function Profile() {
    return (
        <div className='column profile'>
            <h3>Project Manager | Full Stack Web Developer</h3>
            <p>Dedicated Project Manager with experience in building web applications, ideation. Dedicated Project Manager with experience in building web applications, ideation. Dedicated Project Manager with experience in building web applications, ideation.Dedicated Project Manager with experience in building web applications, ideation.</p>
        </div>
    )
}

export default function PersonalInfo() {
    return (
        <div className='row personalInfo'>
            <Details />
            <Profile />
        </div>
    )
}
