import { useState } from "react"

const Accordion = () => {
    const [toggleSection, setToggleSection ] = useState(false);

    return (
        <div>
            <button onClick={() => { toggleSection ? setToggleSection(false) : setToggleSection(true)}}>Toggle Me</button>
            {toggleSection && (
                <div>
                    Content
                </div>
            )}
        </div>
    )
}

export default Accordion