import Tabs from "./Tabs"
import react, {useState} from "react";
import {tabLabels} from "./constant"


const TabComponent = () => {

    const [activeTab, setActiveTab] = useState(tabLabels.CANCEL_AT_ANY_TIME);

    const onClickTab= (tab) =>{
        setActiveTab(tab);
    }



    return (
        <div>
            <Tabs activeTab={activeTab} onClickTab={onClick}/>
        </div>
    )
}

export default TabCom
