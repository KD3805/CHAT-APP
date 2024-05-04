import React from "react";

const Login = () => {
    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-8 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-gray-700">
                <div className="flex justify-between items-center my-3 text-center">
                    <img src="https://res.cloudinary.com/deq0hxr3t/image/upload/v1714819661/GossipGrid-ideogram9-removebg-preview_xxa1qy.png" alt="" width={100} height={100} />
                    <h1 className="text-4xl text-gray-300 font-semibold">Login</h1>
                </div>

                <form>
                    <div className="flex flex-col gap-3">
                        <div>
                            <label htmlFor="" className="label p-2">
                                <span className="text-base label-text">Username</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter username"
                                className="input input-bordered input-accent w-full"
                            />
                        </div>

                        <div>
                            <label htmlFor="" className="label p-2">
                                <span className="text-base label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Enter password"
                                className="input input-bordered input-accent w-full"
                            />
                        </div>
                    </div>

                    <a
                        href="#"
                        className="text-sm hover:underline hover:text-accent mt-4 inline-block cursor-pointer"
                    >
                        {"Don't"} have an account?
                    </a>

                    <div>
                        <button className="btn btn-outline btn-accent btn-block btn-md mt-6 mb-4">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
