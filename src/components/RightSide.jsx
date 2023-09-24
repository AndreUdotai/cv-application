/* eslint-disable react/prop-types */
import References from "./References"
import Skills from "./Skills"


export default function RightSide({skills}) {
    return(
        <div className="rightSide">
            <Skills skills={skills} />
            <References />
        </div>
    )
}