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
        if (!validateEmail(email) && password.length < 7) {
            setWobble(true);
            setTimeout(() => setWobble(false), 500);
            return;
        }
        alert("Continue...");
    };

    return (
        <div className="min-h-screen flex">
            <div className={`w-full lg:w-1/2 flex items-center justify-center bg-white ${wobble ? "animate-wobble" : ""}`}>
                <div className="w-[90%] max-w-md">

                    <h1 className="text-3xl font-bold mb-2">SmartSave</h1>

                    <h2 className="text-2xl font-semibold">Welcome Back</h2>

                    <p className="text-gray-400 mb-6">Please enter your details</p>

                    <ToggleAuth mode={mode} setMode={setMode} />
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

                    <button
                        onClick={handleSubmit}
                        className="w-full bg-blue-800 text-white py-3 rounded-xl mt-4 hover:scale-105 transition"
                    >
                        Continue
                    </button>

                    <p className="text-center text-gray-400 my-4">Or Continue With</p>

                    <OAuthButtons />
                    </div>
                </div>

                <div className="hidden lg:flex w-1/2 items-center justify-center">
                    <img src={safeImg} alt="safe" className="w-2/3" />
                </div>
            </div>
    );
}
