import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useMenu/useAuth";
import Swal from "sweetalert2";
import { MdShoppingCart } from "react-icons/md";
import useCart from "../../../hooks/useCart";

const Navbar = () => {
    const { user, logOut } = useAuth();
    const [cart] = useCart();

    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log(result.user);
                Swal.fire("Logout user success!");

            })
            .catch(err => {
                console.log(err);
            })
    }

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/menu'>Our Menu</NavLink></li>
        <li><NavLink to='/order/salads'>Order</NavLink></li>
        <li>
            <NavLink to='dashboard/cart'>
                <button className="flex items-center gap-2">
                    <MdShoppingCart></MdShoppingCart>
                    <div className="badge badge-secondary">+{cart.length}</div>
                </button>
            </NavLink>
        </li>
    </>
    return (
        <div className="navbar bg-black bg-opacity-15 w-full max-w-7xl text-white fixed z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 text-black w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">FoodFry</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <button
                            onClick={handleLogOut}
                            className="btn"
                        >Logout</button>

                    </> : <>
                        <NavLink to='/login' className='btn'>Login</NavLink>
                    </>
                }
            </div>
        </div>
    );
};

export default Navbar;