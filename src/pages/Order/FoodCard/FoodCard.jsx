import Swal from "sweetalert2";
import useAuth from "../../../hooks/useMenu/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";

const FoodCard = ({ item }) => {
    const { name, recipe, image, _id, price, category } = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();

    const handleAddToCart = () => {
        if (user && user?.email) {
            //store cart data in db
            const foodItem = {
                food_id: _id,
                email: user.email,
                name,
                image,
                recipe,
                price,
                category,
            }
            axiosSecure.post('/carts', foodItem)
                .then(data => {
                    if (data.data.insertedId) {
                        Swal.fire({
                            title: `${name} added success`,
                            icon: "success",
                            timer: 1000,
                        })
                        // load data again
                        refetch();
                    }
                })
        }
        else {
            Swal.fire({
                title: "You are not logged in",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    // send to login page
                    navigate('/login')
                }
            });
        }
    }
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="mx-auto text-center">
                    <button
                        onClick={() => handleAddToCart(item)}
                        className="btn btn-outline border-0 border-b-4 mt-4">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;