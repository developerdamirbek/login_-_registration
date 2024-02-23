import React from "react";
import { request } from "../../../../config/request";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { saveState } from "../../../../lib/storage";

export const Login = ({ close }) => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const submit = (data) => {
        request.post("/login", data).then((res) => {
            if (res.data) {
                saveState("user", res.data);
                navigate("/user");
                close();
            }
        });
    };
    return (
        <form onSubmit={handleSubmit(submit)}>
            <div className="flex flex-col mb-3">
                <input
                    {...register("email")}
                    className="border rounded-md border-blue-400 p-3 outline-none"
                    placeholder="email"
                    type="email"
                />
            </div>
            <div className="flex flex-col mb-3">
                <input
                    {...register("password")}
                    className="border rounded-md border-[#299efe] p-3 outline-none"
                    type="password"
                    placeholder="Password"
                />
            </div>
            <button className=' text-[14px] text-[#45a2ff] '>
                Forgot Password
            </button>
            <button className="p-4 text-white rounded-lg w-[100%] mt-8 bg-[#299efe] mb-4" type="submit">
                Login
            </button>
        </form>
    );
};
