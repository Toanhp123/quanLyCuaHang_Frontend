import { useState } from "react";
import { SubmitForm } from "../../components";
import { InputForm, Button } from "../../components";
import { register } from "./service";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Register() {
    const [add, setAdd] = useState("");
    const [step, setStep] = useState(1);
    const [pass, setPass] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [birth, setBirth] = useState("");
    const [rePass, setRePass] = useState("");
    const [username, setUsername] = useState("");
    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [err, setErr] = useState("");

    const user = useSelector((state) => state.auth.user);

    const handleRegister = async (e, force = false) => {
        e.preventDefault();

        if (!force && step < 3) {
            handleNextStep();
            return;
        }

        if (pass !== rePass) {
            setErr("Passwords do not match!");
            return;
        }

        const user = {
            username: username,
            password: pass,
            firstName: firstName,
            lastName: lastName,
            email: email,
            address: add,
            birthday: birth,
            phoneNumber: phone,
        };

        try {
            console.log(user);

            const res = await register(user);

            console.log("Đăng ký thành công:", res.data);
        } catch (err) {
            console.error("Lỗi đăng ký:", err.response?.data || err.message);
        }
    };

    const handleNextStep = () => {
        setStep((prev) => prev + 1);
        setErr(() => "");
    };

    const handleBackStep = (e) => {
        e.preventDefault();

        setStep((prev) => prev - 1);
        setErr(() => "");
    };

    return (
        <SubmitForm onSubmit={handleRegister}>
            <h1 className="mb-4 flex justify-center text-2xl font-bold">
                Create an account
            </h1>

            <p>{user.id}</p>

            <div className="flex items-center gap-3 px-4">
                <div
                    className={
                        "flex h-5 w-5 items-center justify-center rounded-full text-sm text-white " +
                        (step === 1 ? " bg-gray-800" : "bg-gray-400")
                    }
                >
                    1
                </div>

                <div className="flex-1 border-t"></div>

                <div
                    className={
                        "flex h-5 w-5 items-center justify-center rounded-full text-sm text-white " +
                        (step === 2 ? "bg-gray-800" : "bg-gray-400")
                    }
                >
                    2
                </div>

                <div className="flex-1 border-t"></div>

                <div
                    className={
                        "flex h-5 w-5 items-center justify-center rounded-full text-sm text-white " +
                        (step === 3 ? " bg-gray-800" : "bg-gray-400")
                    }
                >
                    3
                </div>
            </div>

            <div className="flex items-center justify-center">
                {step === 1 && (
                    <p className="text-gray-600">
                        Enter username and your email
                    </p>
                )}

                {step === 2 && (
                    <p className="text-gray-600">
                        Enter your personal information
                    </p>
                )}

                {step === 3 && (
                    <p className="text-gray-600">Enter your password</p>
                )}
            </div>

            {step === 1 && (
                <div className="space-y-4">
                    <InputForm
                        type="text"
                        placeholder="Username"
                        value={username}
                        setValue={setUsername}
                    />

                    <InputForm
                        type="email"
                        placeholder="Email"
                        value={email}
                        setValue={setEmail}
                    />
                </div>
            )}

            {step === 2 && (
                <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <InputForm
                            type="text"
                            placeholder="First Name"
                            value={firstName}
                            setValue={setFirstName}
                        />

                        <InputForm
                            type="text"
                            placeholder="Last Name"
                            value={lastName}
                            setValue={setLastName}
                        />
                    </div>

                    <InputForm
                        type="text"
                        placeholder="Address"
                        value={add}
                        setValue={setAdd}
                    />

                    <InputForm
                        type="date"
                        placeholder="Birthday"
                        value={birth}
                        setValue={setBirth}
                    />

                    <InputForm
                        type="tel"
                        placeholder="Phone Number"
                        value={phone}
                        setValue={setPhone}
                    />
                </div>
            )}

            {step === 3 && (
                <div className="space-y-4">
                    <InputForm
                        type="password"
                        placeholder="Password"
                        value={pass}
                        setValue={setPass}
                    />

                    <InputForm
                        type="password"
                        placeholder="Retype Password"
                        value={rePass}
                        setValue={setRePass}
                    />

                    {err !== "" && (
                        <p className="flex items-center justify-center text-[16px] font-semibold text-red-600">
                            {err}
                        </p>
                    )}
                </div>
            )}

            <div className="flex items-center justify-between gap-4">
                {step > 1 && (
                    <Button
                        text="Back"
                        type="cancel"
                        handleClick={handleBackStep}
                    />
                )}

                <Button
                    text={step < 3 ? "Next" : "Create Account"}
                    type="primary"
                />
            </div>

            <p className="flex justify-center gap-2 text-gray-400">
                Already Have An Account?
                <Link to="/login" className="text-blue-600">
                    Sign In
                </Link>
            </p>

            <div className="flex items-center gap-2 text-gray-400">
                <div className="flex-1 border-t"></div>
                <h1 className="text-black">OR</h1>
                <div className="flex-1 border-t"></div>
            </div>

            <div className="flex items-center justify-between gap-4">
                <Button
                    text="Sign up with Google"
                    type="second-primary"
                    icon="fa-brands fa-google"
                    handleClick={(e) => handleRegister(e, true)}
                />
            </div>
        </SubmitForm>
    );
}

export default Register;
