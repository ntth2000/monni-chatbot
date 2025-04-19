export default function Input({
  label,
  required,
  placeholder,
  type,
  id,
}: {
  label: string;
  type: string;
  id: string,
  placeholder: string;
  required: boolean;
}) {
  return (
    <div className="">
      <label className="block mb-2 font-bold">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        placeholder={placeholder}
        className="bg-gray-100 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
      />
    </div>
  );
}
