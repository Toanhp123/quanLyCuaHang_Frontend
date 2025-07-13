function SubmitForm({ onSubmit = () => {}, children }) {
    return (
        <form
            className="m-6 flex w-full max-w-md flex-col gap-4 rounded-2xl bg-white p-10 shadow-md"
            onSubmit={onSubmit}
        >
            {children}
        </form>
    );
}

export default SubmitForm;
