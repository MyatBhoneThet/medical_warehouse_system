import { useState } from "react";
import ToggleAuth from "../components/Login/ToggleAuth";
import EmailField, { PasswordField } from "../components/Login/InputField";
import OAuthButtons from "../components/Login/OAuthButtons";
import safeImg from "../assets/pill.gif";

export default function Login() {
    const [mode, setMode] = useState("signin");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [wobble, setWobble] = useState(false);

    const validateEmail = (value) => {
        if (!value.includes("@") || !value.includes(".")) {
            setError("Invalid email address");
            return false;
        }
        setError("");
        return true;
    };

    const handleSubmit = () => {
        if (!validateEmail(email) || password.length < 7) {
            setWobble(true);
            setTimeout(() => setWobble(false), 500);
            return;
        }
        alert("Continue...");
    };

    return (
        <div className="min-h-screen flex">
            
            {/* LEFT SIDE */}
            <div
                className={`w-full lg:w-1/2 flex justify-center bg-white pt-16 lg:pt-24 ${
                    wobble ? "animate-wobble" : ""
                }`}
            >
                <div className="w-[85%] max-w-sm mx-auto text-center translate-x-4 lg:translate-x-8">

                    {/* Title */}
                    <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">
                        SmartSave
                    </h1>

                    {/* Content */}
                    <div className="mt-12">

                        {/* Subtitle */}
                        <div className="mb-6">
                            <h2 className="text-xl font-semibold">
                                {mode === "signin" ? "Welcome Back" : "Create Account"}
                            </h2>
                            <p className="text-gray-400 mt-2 text-sm">
                                {mode === "signin"
                                    ? "Please enter your details"
                                    : "Start your SmartSave journey"}
                            </p>
                        </div>

                        {/* Toggle */}
                        <ToggleAuth mode={mode} setMode={setMode} />

                        {/* Inputs */}
                        <div className="space-y-4 mt-4 text-left">
                            <EmailField
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                error={error}
                            />

                            <PasswordField
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                error={error}
                            />
                        </div>

                        {/* Button */}
                        <button
                            onClick={handleSubmit}
                            className="w-full bg-blue-800 text-white py-2.5 rounded-xl mt-6 hover:scale-105 hover:bg-blue-900 transition"
                        >
                            Continue
                        </button>

                        {/* Divider */}
                        <p className="text-gray-400 my-4 text-sm">
                            Or Continue With
                        </p>

                        {/* OAuth */}
                        <OAuthButtons />
                    </div>
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="hidden lg:flex w-1/2 items-center justify-center">
                <img
                    src={safeImg}
                    alt="safe"
                    className="w-2/3 max-w-md"
                />
            </div>
        </div>
    );
}
