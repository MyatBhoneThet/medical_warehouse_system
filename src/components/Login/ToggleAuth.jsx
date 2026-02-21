export default function ToggleAuth({ mode, setMode }) {
    return (
        <div className="relative flex bg-gray-100 rounded-xl p-1 mb-6">

            {/* Sliding background */}
            <div
                className={`absolute top-1 bottom-1 w-1/2 rounded-xl bg-white shadow-sm transition-all duration-300 ${
                    mode === "signin" ? "left-1" : "left-1/2"
                }`}
            />

            {/* Sign In */}
            <button
                onClick={() => setMode("signin")}
                className={`relative w-1/2 py-2 text-sm font-medium transition ${
                    mode === "signin"
                        ? "text-blue-800"
                        : "text-gray-500 hover:text-gray-700"
                }`}
            >
                Sign In
            </button>

            {/* Sign Up */}
            <button
                onClick={() => setMode("signup")}
                className={`relative w-1/2 py-2 text-sm font-medium transition ${
                    mode === "signup"
                        ? "text-blue-800"
                        : "text-gray-500 hover:text-gray-700"
                }`}
            >
                Sign Up
            </button>
        </div>
    );
}
