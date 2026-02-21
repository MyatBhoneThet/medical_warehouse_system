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
