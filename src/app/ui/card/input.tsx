import { EyeIcon, EyeSlashIcon } from "../icons/eye";

interface Props extends React.HTMLProps<HTMLInputElement> {
  label: string;
  type: string;
  id: string;
  name: string;
  error?: string;
  hint?: string;
  handleShowPassword?: (e: React.MouseEvent) => void;
  value?: string;
}

export default function Input({
  label,
  name,
  type,
  id,
  error,
  hint,
  handleShowPassword,
}: Props) {
  console.log("error", error);
  return (
    <div className="">
      <label className="block mb-2 font-bold" htmlFor={id}>
        {label}
      </label>
      <div
        className={`relative rounded-lg bg-gray-100 border-1 ${
          id === "password" ? "pr-10" : ""
        } ${
          !!error
            ? "border-red-400 focus:border-red-400"
            : "border-gray-100 focus:border-gray-100"
        }`}
      >
        <input
          id={id}
          type={type}
          name={name}
          className={`bg-gray-100 rounded-lg block w-full p-2.5 focus:outline-none`}
        />
        {id === "password" && (
          <div
            className="absolute cursor-pointer right-2 top-1/2  -translate-y-1/2"
            onClick={handleShowPassword}
          >
            {id === "password" && type === "password" && <EyeIcon />}
            {id === "password" && type === "text" && <EyeSlashIcon />}
          </div>
        )}
      </div>
      {hint && <p className={`text-xs ${error ? "text-red-500" : "text-gray-500"} pt-2`}>{hint}</p>}
    </div>
  );
}
