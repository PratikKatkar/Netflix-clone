
import  {useState} from 'react';
import  tabLabels  from "./Constants";
import Tabs from './Tabs';
const TabComponent = () => {

    const [activeTab, setActiveTab] = useState(tabLabels.CANCEL_AT_ANY_TIME);

    const onClickTab = (tab) => {
        setActiveTab(tab);

    }
    return (
        <div>
            <Tabs activeTabName={activeTab} onClickTab={onClickTab}></Tabs>
        </div> 
    )
}

export default TabComponent;
