
import { tabLabels } from './constant'
import { Link } from 'react-router-dom'
import "./Tabs.css"

const Tabs = ({activeTab, onClickTab}) => {
    const {CANCEL_AT_ANY_TIME, WATCH_ANYWHERE, PICK_YOUR_PRICE} = tabLabels

    const renderTabTitle = (tabTitle, isActive, icon, id) => (

        <div onClick={() =>console.log(tabTitle) }
         id ={id}
        className={`tab-item ${isActive && "tab-border"}`}  >
            <i className={icon}></i>
            <p>{tabTitle}</p>

            </div>
    )
    return (
        <>
            <section className="tabs">
                <div className="container">
                    {renderTabTitle(CANCEL_AT_ANY_TIME, activeTab === CANCEL_AT_ANY_TIME,
                         "fas fa-door-open fa-3x", 
                         "tab-1")}
                    {renderTabTitle(WATCH_ANYWHERE, activeTab === WATCH_ANYWHERE,
                         "fas fa-tablet-alt fa-3x", 
                         "tab-2")}
                    {renderTabTitle(PICK_YOUR_PRICE, activeTab === PICK_YOUR_PRICE,
                         "fas fa-tags fa-3x", 
                         "tab-3")}
                </div>
            </section>
          {/* {activeTab === CANCEL_AT_ANY_TIME && (
                <section className="tab-content">
                    <div className="container">
                        <div id="tab-1-content" 
                        className = {`tab-content-item ${
                            activeTab === CANCEL_AT_ANY_TIME && "show" }`}
                            >
                            <div className="tab-1-content-inner">
                                <div>
                                    <p className="text-lg" id="pk">
                                       If you decide NetFlix isn't for you - no problem. No commitment
                                    </p>
                                <Link to="/netflix-show" className="btn btn-lg" >
                                    Watch Free For 30 days
                                </Link>
                        
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            )}
            {activeTab === WATCH_ANYWHERE &&(

                <section className="tab-content">
                    <div className="container">
                    <div id="tab-1-content" 
                        className = {`tab-content-item ${
                            activeTab === WATCH_ANYWHERE && "show" }`}
                            >
                                <div className="tab-2-content-top">
                                <p className="text-lg">
                                       If you decide NetFlix isn't for you - no problem. No commitment.
                                    </p>
                                <Link to="/netflix-show" className="btn btn-lg" >
                                    Watch Free For 30 days
                                </Link>

                                </div>

                            </div>
                    </div>
                </section>
            )} */}
        </>
    )
}

export default Tabs
