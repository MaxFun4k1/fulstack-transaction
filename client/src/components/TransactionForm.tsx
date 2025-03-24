import { FC, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Form, useLoaderData } from "react-router-dom";
import { IResponseTransactionLoader } from "../types/types";
import { CategoryModal } from "./CategoryModal";

export const TransactionForm: FC = () => {
    const { categories } = useLoaderData() as IResponseTransactionLoader;
    const [visibleModal, setVisibleModal] = useState(false);

    return (
        <div className="rounded-md bg-slate-800 p-4">
            <Form className="grid gap-2" method="post" action="/transactions">
                <label className="grid" htmlFor="title">
                    <span>Title</span>
                    <input
                        className="border-slate-700 bg-transparent p-2 border placeholder:text-white rounded-md outline-none focus:border-slate-300"
                        type="text"
                        placeholder="Title..."
                        name="title"
                        required
                    />
                </label>
                <label className="grid" htmlFor="amount">
                    <span>Amount</span>
                    <input
                        className="border-slate-700 bg-transparent p-2 border placeholder:text-white rounded-md outline-none focus:border-slate-300"
                        type="number"
                        placeholder="Amount..."
                        name="amount"
                        required
                    />
                </label>

                {/* Select */}
                {categories?.length ? (
                    <label htmlFor="category" className="grid">
                        <span>Category</span>
                        <select
                            className=" p-2 border bg-slate-800 placeholder:text-white border-slate-700 rounded-md outline-none focus:border-slate-300"
                            name="category"
                            required
                        >
                            {categories.map((category, id) => (
                                <option key={id} value={category.id}>
                                    {category.title}
                                </option>
                            ))}
                        </select>
                    </label>
                ) : (
                    <h1 className="mt-1 text-red-300">
                        To continue create a category first
                    </h1>
                )}

                <button
                    onClick={(e) => {
                        e.preventDefault();
                        setVisibleModal(true);
                    }}
                    className="max-w-fit flex items-center gap-2 text-white/50 hover:text-white cursor-pointer"
                >
                    <FaPlus />
                    <span>Manage Categories</span>
                </button>

                {/* Radio Buttons */}
                <div className="flex gap-4 items-center">
                    <label className="cursor-pointer flex items-center gap-2">
                        <input
                            type="radio"
                            name="type"
                            value={"income"}
                            className="form-radio text-blue-600"
                        />
                        <span>Income</span>
                    </label>
                    <label className="cursor-pointer flex items-center gap-2">
                        <input
                            type="radio"
                            name="type"
                            value={"Expense"}
                            className="form-radio text-blue-600"
                        />
                        <span>Expense</span>
                    </label>
                </div>

                {/* Submit button */}
                <button className="flex gap-2 items-center text-white py-2 px-4 rounded-md disabled:bg-gray-400 disabled:cursor-not-allowed disabled:hover:bg-gray-400 bg-green-600 hover:bg-green-800 max-w-fit mt-2 cursor-pointer">
                    Submit
                </button>
            </Form>

            {/* Add Category Modal */}
            {visibleModal && (
                <CategoryModal type="post" setVisibleModal={setVisibleModal} />
            )}
        </div>
    );
};
