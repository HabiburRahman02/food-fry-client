import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useMenu/useAuth";
import Swal from "sweetalert2";

const SignUp = () => {
    const { createUser, updateUserProfile } = useAuth();
    const location = useLocation()
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()


    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(() => {
                Swal.fire("Create user success!");
                navigate(location.state || '/')
                // update user profile
                updateUserProfile(data.name, data.photoUrl)
                    .then(() => {
                        console.log('profile updated');
                    })
                    .catch(err => {
                        console.log(err);
                    })
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input {...register("name", { required: true })} name="name" type="text" placeholder="Name" className="input input-bordered" />
                            {errors.name && <span className="text-orange-500 mt-1">Name field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input  {...register("photoUrl", { required: true })} name="photoUrl" type="text" placeholder="photo" className="input input-bordered" />
                            {errors.photoUrl && <span className="text-orange-500 mt-1">PhotoUrl field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input  {...register("email", { required: true })} name="email" type="email" placeholder="email" className="input input-bordered" />
                            {errors.email && <span className="text-orange-500 mt-1">Email field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 15,
                                pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/

                            })} name="password" type="password" placeholder="password" className="input input-bordered" />
                            {errors.password?.type === 'required' && <span className="text-orange-500 mt-1">Password field is required</span>}
                            {errors.password?.type === 'minLength' && <span className="text-orange-500 mt-1">Password must have 6 Character</span>}
                            {errors.password?.type === 'maxLength' && <span className="text-orange-500 mt-1">Password max 15  Character</span>}
                            {errors.password?.type === 'pattern' && <span className="text-orange-500 mt-1">Pass must be one uppercase, lowercase, number and special character</span>}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                        <p><Link to='/login'>Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;