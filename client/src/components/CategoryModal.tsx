import { FC } from "react";
import { Form } from "react-router-dom";

interface Props {
    type: "post" | "patch";
    id?: number;
    setVisibleModal: (visible: boolean) => void;
    setIsEdit?: (visible: boolean) => void;
}

export const CategoryModal: FC<Props> = ({
    type,
    id,
    setVisibleModal,
    setIsEdit,
}) => {
    return (
        <div className="fixed top-0 left-0 bottom-0 right-0 w-full h-full bg-black/50 flex justify-center items-center">
            <Form
                action="/categories"
                method={type}
                onSubmit={() => {
                    setVisibleModal(false);
                    if (setIsEdit) setIsEdit(false);
                }}
                className="grid gap-2 w-[300px] p-5 rounded-md bg-slate-900"
            >
                <label htmlFor="title">
                    <small>Category title</small>
                    <input
                        className="bg-transparent p-2 border placeholder:text-white border-slate-800 rounded-md outline-none focus:border-slate-300 w-full"
                        type="text"
                        name="title"
                        placeholder="title..."
                    />
                    <input type="hidden" name="id" value={id} />
                </label>

                <div className="flex items-center gap-2">
                    <button
                        className="flex gap-2 items-center text-white py-2 px-4 rounded-md disabled:bg-gray-400 disabled:cursor-not-allowed disabled:hover:bg-gray-400 bg-green-600 hover:bg-green-800 cursor-pointer"
                        type="submit"
                    >
                        {type === "patch" ? "Save" : "Create"}
                    </button>
                    <button
                        onClick={() => setVisibleModal(false)}
                        className="flex gap-2 items-center text-white py-2 px-4 rounded-md disabled:bg-gray-400 disabled:cursor-not-allowed disabled:hover:bg-gray-400 bg-rose-900 hover:bg-rose-800 cursor-pointer"
                    >
                        Close
                    </button>
                </div>
            </Form>
        </div>
    );
};
