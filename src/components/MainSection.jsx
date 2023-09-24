import RightSide from "./RightSide";
import LeftSide from "./leftSide";
import '../App.css';


export default function MainSection() {
    return (
        <div className="mainSection">
            < LeftSide />
            < RightSide />
        </div>
    )
}