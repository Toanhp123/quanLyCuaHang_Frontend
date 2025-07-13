import { useState } from "react";
import { login } from "./service";
import { SubmitForm } from "../../components";
import { Button, InputForm } from "../../components";
import { setUser } from "./authSlice";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function LoginForm() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e, force = false) => {
        e.preventDefault();

        try {
            const res = await login(username, password);
            dispatch(setUser(res.data.data));

            console.log("Đăng nhập thành công");

            navigate("/profile", { replace: true });
        } catch (err) {
            console.error("Lỗi đăng nhập:", err.response?.data || err.message);
        }
    };

    return (
        <SubmitForm onSubmit={handleLogin}>
            <h1 className="mb-4 flex justify-center text-2xl font-bold">
                Login to your account
            </h1>

            <InputForm
                type="text"
                placeholder="Username"
                value={username}
                setValue={setUsername}
            />

            <InputForm
                type="password"
                placeholder="Password"
                isLogin={true}
                value={password}
                setValue={setPassword}
            />

            <Button type="primary" text="Login Now" />

            <p className="flex justify-center gap-2 text-gray-400">
                Don't Have An Account?
                <Link to="/register" replace className="text-blue-600">
                    Sign Up
                </Link>
            </p>

            <div className="flex items-center gap-2 text-gray-400">
                <div className="flex-1 border-t"></div>
                <h1 className="text-black">OR</h1>
                <div className="flex-1 border-t"></div>
            </div>

            <div className="flex items-center justify-between gap-4">
                <Button
                    text="Sign in with Google"
                    type="second-primary"
                    icon="fa-brands fa-google"
                    handleClick={(e) => handleLogin(e, true)}
                />
            </div>
        </SubmitForm>
    );
}

export default LoginForm;
