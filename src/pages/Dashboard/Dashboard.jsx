import { FaAd, FaBook, FaCalendar, FaHome, FaJediOrder } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex gap-8">
            <div className="bg-slate-600 text-white min-h-screen p-6 w-1/5">
                {/* left side nav */}
                <ul className="space-y-3">
                    <li>
                        <NavLink to='/dashboard/userHome' className='flex items-center gap-2'>
                            <FaHome></FaHome>
                            User Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/reservation' className='flex items-center gap-2'>
                            <FaCalendar></FaCalendar>
                            Reservation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/cart' className='flex items-center gap-2'>
                            <FaHome></FaHome>
                            My Cart
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/addReview' className='flex items-center gap-2'>
                            <FaAd></FaAd>
                            Add Review
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/myBooking' className='flex items-center gap-2'>
                            <FaBook></FaBook>
                            My Booking
                        </NavLink>
                    </li>
                    <div className=" border border-1"></div>
                    <li>
                        <NavLink to='/' className='flex items-center gap-2'>
                            <FaHome></FaHome>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/menu' className='flex items-center gap-2'>
                            <FaJediOrder></FaJediOrder>
                            Menu
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="w-4/5 p-8">
                {/* dynamic content  */}
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;