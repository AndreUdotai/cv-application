/* eslint-disable react/prop-types */
import WorkHistory from "./WorkHistory";
import Education from "./Education";

export default function LeftSide({education, workHistory}) {
    return (
        <div className="leftSide">
            <WorkHistory workHistory={workHistory} />
            <Education education={education} /> 
        </div>
    )
}