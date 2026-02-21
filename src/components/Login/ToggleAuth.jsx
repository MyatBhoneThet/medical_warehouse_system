// what is this file for? This is the toggle button component for switching between sign in and sign up modes on the login page. It takes in the current mode and a function to set the mode as props, and renders two buttons that allow the user to switch between the modes. The active button is highlighted with a different background color and shadow.
export default function ToggleAuth({ mode, setMode }) {
    return (
        <div className="flex bg-gray-100 rounded-xl p-1 mb-4">
            <button
                onClick={() => setMode("signin")}
                className={`flex-1 py-2 rounded-xl transition ${
                    mode === "signin" ? "bg-white shadow" : ""
                }`}
            >
                Sign In
            </button>
            <button
                onClick={() => setMode("signup")}
                className={`flex-1 py-2 rounded-xl transition ${
                    mode === "signup" ? "bg-white shadow" : ""
                }`}
            >
                Sign Up
            </button>
        </div>
    );
}
