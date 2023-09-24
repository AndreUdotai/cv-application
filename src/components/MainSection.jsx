import RightSide from "./RightSide";
import LeftSide from "./leftSide";
import '../App.css';


// eslint-disable-next-line react/prop-types
export default function MainSection({skills}) {
    return (
        <div className="mainSection">
            < LeftSide />
            < RightSide skills={skills} />
        </div>
    )
}