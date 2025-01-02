import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import useAuth from '../../hooks/useMenu/useAuth';
import Swal from 'sweetalert2';
import SocialLogin from '../shared/SocialLogin/SocialLogin';

const Login = () => {
    const [disabledBtn, setDisabledBtn] = useState(true);
    const captchaRef = useRef();
    const location = useLocation()
    const navigate = useNavigate();
    const { loginUser } = useAuth();

    useEffect(() => {
        loadCaptchaEnginge(4);
    }, [])

    const handleCaptcha = () => {
        const myCaptchaValue = captchaRef.current.value
        if (validateCaptcha(myCaptchaValue)) {
            setDisabledBtn(false);
        }
        else {
            setDisabledBtn(true)
        }
    }

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire("Login success!");
                navigate(location.state || '/')
            })
            .catch(err => {
                console.log(err);
            })

    }


    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <LoadCanvasTemplate />
                            <input onBlur={handleCaptcha} ref={captchaRef} name='captcha' type="text" placeholder="Type captcha" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            {/* disabled={disabledBtn} */}
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <SocialLogin></SocialLogin>
                        <p><Link to='/signup'>Sign Up</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;