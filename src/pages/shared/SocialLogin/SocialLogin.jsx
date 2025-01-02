import Swal from "sweetalert2";
import useAuth from "../../../hooks/useMenu/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const { googleLogin } = useAuth();
    const location = useLocation()
    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user);
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