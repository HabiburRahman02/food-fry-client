import Swal from "sweetalert2";
import useAuth from "../../../hooks/useMenu/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const SocialLogin = () => {
    const { googleLogin } = useAuth();
    const location = useLocation()
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const userInfo = {
                    name: result.user?.displayName,
                    email: result.user?.email
                }
                axiosPublic.post('/users', userInfo)
                    .then(data => {
                        console.log(data.data);
                    })
                Swal.fire("Login user success!");
                navigate(location.state || '/')


            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div>
            <button
                onClick={handleGoogleLogin}
                className="btn">Google</button>
        </div>
    );
};

export default SocialLogin;