import { EyeIcon, EyeSlashIcon } from "../icons/eye";
interface Props extends React.HTMLProps<HTMLInputElement> {
  ...
  }
export default function Input({
  label,
  required,
  placeholder,
  type,
  id,
  error,
  handleShowPassword
}: {
  label: string;
  type: string;
  id: string;
  placeholder: string;
  required: boolean;
  error?: string;
}) {
  return (
    <div className="">
      <label className="block mb-2 font-bold" htmlFor={id}>
        {label}
      </label>
      <div
        className={`relative rounded-lg bg-gray-100 ${
          id === "password" ? "pr-10" : ""
        }`}
      >
        <input
          id={id}
          type={type}
          required={required}
          placeholder={placeholder}
          className={`bg-gray-100 rounded-lg block w-full p-2.5 border ${
            error
              ? "border-red-500 focus:border-red-500"
              : "border-gray-100 focus:border-gray-100"
          }`}
        />
        <div className="absolute cursor-pointer right-2 top-1/2  -translate-y-1/2">
          {id === "password" && type === "password" && <EyeIcon />}
          {id === "password" && type === "text" && <EyeSlashIcon />}
        </div>
      </div>
      <p className="text-xs text-red-500 min-h-5 pt-2">{error}</p>
    </div>
  );
}
