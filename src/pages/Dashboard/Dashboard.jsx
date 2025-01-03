import { Outlet } from "react-router-dom";
import LeftSideNav from "./LeftSideNav";
import { useState } from "react";

const Dashboard = () => {
    const [show, setShow] = useState(true)
    console.log(show);
    return (
        <div className="flex gap-8">
            <div className={` ${show ? 'hidden w-1/2' : 'block'} md:w-1/5 bg-slate-600 text-white min-h-screen p-6`}>
                {/* left side nav */}
                <LeftSideNav></LeftSideNav>
            </div>
            <div className={` md:w-4/5 p-8`}>
                <div className="flex justify-end">
                    <button
                        onClick={() => setShow(!show)}
                        className="btn btn-secondary md:hidden ">Show</button>
                </div>
                {/* dynamic content  */}
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;