/* eslint-disable react/prop-types */
import WorkHistory from "./WorkHistory";
import Education from "./Education";

export default function LeftSide({education}) {
    return (
        <div className="leftSide">
            <WorkHistory />
            <Education education={education} /> 
        </div>
    )
}