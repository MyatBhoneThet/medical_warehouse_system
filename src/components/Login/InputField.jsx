export default function EmailField({ value, onChange, error }) {
  return (
    <div>
      <input
        type="email"
        placeholder="Email Address"
        value={value}
        onChange={onChange}
        className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}

export function PasswordField({ value, onChange, error }) {
  return (
    <div>
      <input
        type="password"
        placeholder="Password"
        value={value}
        onChange={onChange}
        className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
