import { FaAd, FaBook, FaCalendar, FaHome, FaJediOrder, FaList, FaUsers } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const LeftSideNav = () => {
    const isAdmin = true;
    return (
        <ul className="space-y-3">
            {
                isAdmin ? <>
                    <li>
                        <NavLink to='/dashboard/adminHome' className='flex items-center gap-2'>
                            <FaHome></FaHome>
                            Admin Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/addItems' className='flex items-center gap-2'>
                            <FaAd></FaAd>
                            Add Items
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/manageItems' className='flex items-center gap-2'>
                            <FaList></FaList>
                            Manage Items
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/manageBookings' className='flex items-center gap-2'>
                            <FaBook></FaBook>
                            Manage Bookings
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/allUsers' className='flex items-center gap-2'>
                            <FaUsers></FaUsers>
                            All Users
                        </NavLink>
                    </li>
                </> : <>
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
                </>
            }
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
    );
};

export default LeftSideNav;