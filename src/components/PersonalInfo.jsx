// import './App.css'
import '../App.css'

function PersonalDetails() {
    return (
        <div className='column'>
            <h3>Full stack web developer | Project Manager</h3>
            <div>
                <p>andreudotai@gmail.com</p>
                <p>+234 (813) 881 8457</p>
                <p>House 24B, Zone B, Apo Resettlement, Garki 2, Abuja</p>
            </div>
        </div>
    )
}

function Profile() {
    return (
        <div className='column'>
            <h3>Profile</h3>
            <p>Dedicated Project Manager with experience in building web applications, ideation. Dedicated Project Manager with experience in building web applications, ideation. Dedicated Project Manager with experience in building web applications, ideation.Dedicated Project Manager with experience in building web applications, ideation.</p>
        </div>
    )
}

export default function PersonalInfo() {
    return (
        <div className='row'>
            <PersonalDetails />
            <Profile />
        </div>
    )
}
