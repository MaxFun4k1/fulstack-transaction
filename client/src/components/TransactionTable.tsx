import { FC } from "react";
import { FaTrash } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import { IResponseTransactionLoader } from "../types/types";
import { formatDate } from "../helpers/date.helper";

export const TransactionTable: FC = () => {
    const { transactions } = useLoaderData() as IResponseTransactionLoader;

    return (
        <>
            <div className="bg-slate-800 px-4 py-3 mt-4 rounded-md">
                <table className="w-full">
                    <thead>
                        <tr>
                            <td className="font-boold"> № </td>
                            <td className="font-boold">Title</td>
                            <td className="font-boold">Amount($)</td>
                            <td className="font-boold">Category</td>
                            <td className="font-boold">Date</td>
                            <td className="text-right">Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((transaction, id) => (
                            <tr key={id}>
                                <td>{id + 1}</td>
                                <td>{transaction.title}</td>
                                <td>{transaction.amount}</td>
                                <td>{transaction.category.title}</td>
                                <td>{formatDate(transaction.createdAt)}</td>
                                <td>
                                    <button className="flex gap-2 items-center text-white py-2 px-4 rounded-md disabled:bg-gray-400 disabled:cursor-not-allowed disabled:hover:bg-gray-400 cursor-pointer hover:bg-rose-900 ml-auto">
                                        <FaTrash />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};
