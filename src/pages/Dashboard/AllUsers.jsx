import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { FaTrash, FaUsers } from "react-icons/fa";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const data = await axiosSecure.get('/users')
            return data.data
        }
    })

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
            <div>
                <h3 className="text-3xl">Total Users: {users.length}</h3>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table table-zebra">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((user, i) => <tr key={user._id}>
                                        <th>{i + 1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            <button
                                            // onClick={() => handleMakeAdmin(user._id)}
                                            >
                                                <FaUsers className="text-xl text-green-600"></FaUsers>
                                            </button>
                                        </td>
                                        <td>
                                            <button
                                                onClick={() => handleDelete(user._id)}
                                            >
                                                <FaTrash className="text-xl text-red-600 hover:text-red-700"></FaTrash>
                                            </button>
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;