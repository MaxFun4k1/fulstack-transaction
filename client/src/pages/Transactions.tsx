import { FC } from "react";
import { TransactionForm } from "../components/TransactionForm";
import { instance } from "../api/axios.api";
import { ICategory } from "../types/types";
import { toast } from "react-toastify";
import { TransactionTable } from "../components/TransactionTable";

export const TransactionLoader = async () => {
    const categories = await instance.get<ICategory>("/categories");
    const transactions = await instance.get("/transactions");

    const data = {
        categories: categories.data,
        transactions: transactions.data,
    };
    return data;
};

export const TransactionAction = async ({ request }: any) => {
    switch (request.method) {
        case "POST": {
            const formData = await request.formData();
            const newTransaction = {
                title: formData.get("title"),
                amount: +formData.get("amount"),
                category: formData.get("category"),
                type: formData.get("type"),
            };

            await instance.post("/transactions", newTransaction);
            toast.success("Transaction added.");
            return null;
        }
        case "DELETE": {
        }
    }
};

const Transactions: FC = () => {
    return (
        <>
            <div className="grid grid-cols-3 gap-4 mt-4 items-start">
                {/* Add Transaction From */}
                <div className="grid col-span-2">
                    <TransactionForm />
                </div>

                {/* Statistic blocks */}
                <div className="rounded-md bg-slate-800 p-3">
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <p className="uppercase text-md font-bold text-center">
                                Total Income:
                            </p>
                            <p className="bg-green-600 p-1 rounded-sm mt-2 text-center">
                                1000$
                            </p>
                        </div>
                        <div>
                            <p className="uppercase text-md font-bold text-center">
                                Total Expense:
                            </p>
                            <p className="bg-red-500 p-1 rounded-sm mt-2 text-center">
                                1000$
                            </p>
                        </div>
                    </div>

                    <>Chart</>
                </div>
            </div>

            {/* Transactions table */}
            <h1 className="my-5">
                <TransactionTable />
            </h1>
        </>
    );
};

export default Transactions;
