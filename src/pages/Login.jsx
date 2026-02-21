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

    // Simple email validation
    const validateEmail = (value) => {
        if (!value.includes("@") || !value.includes(".")) {
            setError("Invalid email address");
            return false;
        }
        setError("");
        return true;
    };

    // Continue button handler
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
            
            {/* LEFT SIDE (FORM) */}
            <div
                className={`w-full lg:w-1/2 flex items-center justify-center bg-white ${
                    wobble ? "animate-wobble" : ""
                }`}
            >
                <div className="w-[90%] max-w-md mx-auto text-center">

                    {/* Title */}
                    <h1 className="text-3xl font-bold mb-6">SmartSave</h1>

                    {/* Subtitle */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold">
                            {mode === "signin" ? "Welcome Back" : "Create Account"}
                        </h2>
                        <p className="text-gray-400 mt-2">
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
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            error={error}
                        />
                    </div>

                    {/* Button */}
                    <button
                        onClick={handleSubmit}
                        className="w-full bg-blue-800 text-white py-3 rounded-xl mt-6 hover:scale-105 hover:bg-blue-900 transition"
                    >
                        Continue
                    </button>

                    {/* Divider */}
                    <p className="text-gray-400 my-4">Or Continue With</p>

                    {/* OAuth */}
                    <OAuthButtons />
                </div>
            </div>

            {/* RIGHT SIDE (IMAGE) */}
            <div className="hidden lg:flex w-1/2 items-center justify-center bg-gray-50">
                <img
                    src={safeImg}
                    alt="safe"
                    className="w-2/3 max-w-md"
                />
            </div>
        </div>
    );
}
