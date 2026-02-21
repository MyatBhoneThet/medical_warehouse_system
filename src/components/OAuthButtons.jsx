import { FaGoogle, FaApple, FaFacebookF } from "react-icons/fa";

export default function OAuthButtons() {
  const base = "w-12 h-12 flex items-center justify-center rounded-full shadow hover:scale-110 transition";

  return (
    <div className="flex justify-center gap-4">
      <button className={`${base} bg-white`}><FaGoogle /></button>
      <button className={`${base} bg-black text-white`}><FaApple /></button>
      <button className={`${base} bg-blue-600 text-white`}><FaFacebookF /></button>
    </div>
  );
}
