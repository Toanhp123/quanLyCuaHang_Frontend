function InputForm({
    type,
    placeholder,
    isLogin = false,
    value,
    setValue = () => {},
}) {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex justify-between">
                <label htmlFor={placeholder}>{placeholder}</label>

                {isLogin && (
                    <label>
                        <a href="#" className="text-blue-600">
                            Forgot?
                        </a>
                    </label>
                )}
            </div>

            <input
                className="rounded-md border border-gray-300 p-2 focus:bg-white focus:ring-3 focus:ring-blue-300 focus:outline-none md:p-3"
                type={type}
                id={placeholder}
                placeholder={placeholder}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                required
            />
        </div>
    );
}

export default InputForm;
