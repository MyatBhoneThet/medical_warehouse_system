import { Mail, CheckCircle } from "lucide-react";

export default function EmailField({ value, onChange, error }) {
    const isValid = value && value.includes("@") && value.includes(".");

    return (
        <div className="w-full">
            <div className="flex items-center border rounded-2xl px-4 py-3 bg-gray-50 focus-within:ring-2 focus-within:ring-blue-400 transition">

                {/* Icon */}
                <Mail className="text-gray-400 mr-3 flex-shrink-0" size={20} />

                {/* Divider */}
                <div className="h-6 w-px bg-gray-300 mr-3" />

                {/* Input container */}
                <div className="relative flex-1">
                    <label
                        className={`absolute left-0 transition-all duration-200 pointer-events-none
                        ${value ? "-top-2 text-xs text-gray-500" : "top-2 text-sm text-gray-400"}
                        `}
                    >
                        Email Address
                    </label>

                    <input
                        type="email"
                        value={value}
                        onChange={onChange}
                        className="w-full bg-transparent outline-none pt-4 text-sm"
                    />
                </div>

                {/* Check icon */}
                {isValid && (
                    <CheckCircle className="text-green-500 ml-3 flex-shrink-0" size={20} />
                )}
            </div>

            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
}

import { useState } from "react";
import { Lock, Eye, EyeOff } from "lucide-react";

export function PasswordField({ value, onChange, error }) {
    const [show, setShow] = useState(false);

    return (
        <div className="w-full">
            <div className="flex items-center border rounded-2xl px-4 py-3 bg-gray-50 focus-within:ring-2 focus-within:ring-blue-400 transition">

                {/* Left Icon */}
                <Lock className="text-gray-400 mr-3 flex-shrink-0" size={20} />

                {/* Divider */}
                <div className="h-6 w-px bg-gray-300 mr-3" />

                {/* Input + Floating Label */}
                <div className="relative flex-1">
                    <label
                        className={`absolute left-0 transition-all duration-200 pointer-events-none
                        ${value ? "-top-2 text-xs text-gray-500" : "top-2 text-sm text-gray-400"}
                        `}
                    >
                        Password
                    </label>

                    <input
                        type={show ? "text" : "password"}
                        value={value}
                        onChange={onChange}
                        className="w-full bg-transparent outline-none pt-4 text-sm"
                    />
                </div>

                {/* Eye Toggle */}
                <button
                    type="button"
                    onClick={() => setShow(!show)}
                    className="ml-3 text-gray-400 hover:text-gray-600 transition"
                >
                    {show ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
            </div>

            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
}
