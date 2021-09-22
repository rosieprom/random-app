import { useState } from "react";

type contentProps = {
    title: string;
}

export type TabProps = {
    content: contentProps[]
}

const Tabs = ({ content }: TabProps) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center"}}>
            <div style={{ display: "flex", height: "50%", width: 'auto' }}>
                {
                    content.map((btn, id) => {
                        return (
                            <button key={id} onClick={() => setActiveTab(id)}>
                                {btn.title}
                            </button>
                        )
                    }) 
                }
            </div>
            <TabSection title={content[activeTab].title} />
        </div>
    )
}

const TabSection = ({ title }: contentProps) => {
    return (
        <div style={{
            height: "50%",
            width: 'auto',
            alignContent: "center",
            display: "flex"
        }}>
            <h1>
                {title}
            </h1>
        </div>
    )
}

export default Tabs;