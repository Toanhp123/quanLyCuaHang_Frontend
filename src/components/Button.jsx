import clsx from "clsx";

function Button({ type, text, icon = "", handleClick = () => {} }) {
    return (
        <button
            className={clsx(
                "mt-2 flex w-full items-center justify-center gap-2 rounded-md p-2 font-semibold md:p-3",

                {
                    "bg-red-500 text-white hover:bg-red-600": type === "error",
                    "bg-gray-400 text-white hover:bg-gray-500":
                        type === "cancel",
                    "bg-blue-500 text-white hover:bg-blue-600":
                        type === "primary",
                    "bg-blue-200 text-blue-700 hover:bg-blue-400":
                        type === "second-primary",
                },
            )}
            onClick={handleClick}
        >
            {icon && <i className={icon}></i>}
            {text}
        </button>
    );
}

export default Button;
