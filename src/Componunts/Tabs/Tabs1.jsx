// import  tabLabels from "./Constants"
// import { Link } from "react-router-dom"
// import "./Tabs.css"

// const Tabs = ({activeTabName, onClickTab }) => {

//     const { CANCEL_AT_ANY_TIME, PICK_YOUR_PRICE, WATCH_ANYWHERE } = tabLabels;

//     const renderTabTitle = (tabTitle, isActive, icon, id) => (
//         <div onClick={() => onClickTab(tabTitle)}
//             id={id}
//             className={`tab-item ${isActive && "tab-border"}`}  >
//             <i className={icon}></i>
//             <p>{tabTitle}</p>
//         </div>
//     );
//     return (
//         <>
//             <section className="tabs">
//                 <div className="container">
//                     {renderTabTitle(
//                         CANCEL_AT_ANY_TIME,
//                         activeTabName === CANCEL_AT_ANY_TIME,
//                         "fas fa-door-open fa-3x",
//                         "tab-1"
//                     )}
//                     {renderTabTitle(
//                         WATCH_ANYWHERE,
//                         activeTabName === WATCH_ANYWHERE,
//                         "fas fa-tablet-alt fa-3x",
//                         "tab-2"
//                     )}
//                     {renderTabTitle(
//                         PICK_YOUR_PRICE,
//                         activeTabName === PICK_YOUR_PRICE,
//                         "fas fa-tags fa-3x",
//                         "tab-2"
//                     )}
//                 </div>
//             </section>
//             {activeTabName === PICK_YOUR_PRICE && (
//                 <section className="tab-content">
//                     <div className="container">

//                         <div
//                             id="tab-1-content"
//                             className={`tab-content-item ${activeTabName === CANCEL_AT_ANY_TIME && "show"}`}>

//                             <div className="tab-1-content-inner">
//                                 <div>
//                                     <p className="textlg">
//                                         if you decide NetFlix isn't you - no problem. No commitment. Cancel online anytime

//                                     </p>
//                                     <Link to="/netflixshow" className="btn btn-lg">
//                                         Watch Free For 30 Days
//                                     </Link>

//                                 </div>
//                                 <img src="https://i.ibb.co/J2xDJV7/tab-content-1.png" alt="not" />
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//             )}
//             {activeTabName === WATCH_ANYWHERE && (
//                 <section className="tab-content">
//                     <div id="tab-1-content">
//                         className={`tab-content-item ${activeTabName === WATCH_ANYWHERE && "show"} `}
//                     </div>
//                 </section>
//             )}
//         </>
//     )
// }

// export default Tabs
