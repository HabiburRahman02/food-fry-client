import { FaTrash } from "react-icons/fa6";
import SectionTitle from "../../components/SectionTitle";
import useCart from "../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Cart = () => {
    const [cart, refetch] = useCart();
    const axiosSecure = useAxiosSecure();
    const totalPrice = cart.reduce((prevValue, currentValue) => {
        return prevValue + currentValue.price
    }, 0)

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/cart/${id}`)
                    .then(data => {
                        if (data.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            // load data when delete a item
                            refetch();
                        }
                    })
            }
        });
    }
    return (
        <div>
            <SectionTitle
                heading={"Wanna add more?"}
                subHeading='My Cart'
            ></SectionTitle>
            <div>
                <div className="flex justify-between">
                    <h3 className="text-3xl">Orders: {cart.length}</h3>
                    <h3 className="text-3xl">Total Price: ${totalPrice}</h3>
                    <button className="btn">Pay</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                cart.map((item, i) => <tr key={item._id}>
                                    <th>
                                        {i + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={item.image}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>Purple</td>
                                    <th>
                                        <button
                                            onClick={() => handleDelete(item._id)}
                                        >
                                            <FaTrash className="text-xl text-red-600 hover:text-red-700"></FaTrash>
                                        </button>
                                    </th>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;