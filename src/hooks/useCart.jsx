import { useQuery } from "@tanstack/react-query";
import useAuth from "./useMenu/useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const { data: cart = [], refetch } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const data = await axiosSecure.get(`/cart?email=${user?.email}`);
            return data.data;
        }
    })
    return [cart, refetch]
};

export default useCart;