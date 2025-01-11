import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../useAxiosPublic";


const useMenu = () => {
    const axiosPublic = useAxiosPublic();
    // const [menu, setMenu] = useState([]);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     axios.get('http://localhost:5000/menus')
    //         .then(data => {
    //             setMenu(data.data);
    //             setLoading(false)
    //         })
    // }, [])

    const { data: menu, isLoading: loading, refetch } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const data = await axiosPublic.get('/menus');
            return data.data
        }
    })
    return [menu, loading, refetch]
};

export default useMenu;