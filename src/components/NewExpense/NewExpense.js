import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
	const [isEditing, setIsEditing] = useState(false);

	const startEditing = () => {
		setIsEditing(true);
	};

	const stopEditing = () => {
		setIsEditing(false);
	};

	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};

		props.onAddExpenseHandler(expenseData);
		setIsEditing(false);
	};

	return (
		<div className="new-expense">
			{!isEditing && (
				<button type="submit" onClick={startEditing}>
					Add Expense
				</button>
			)}
			{isEditing && (
				<ExpenseForm
					onSaveExpenseData={saveExpenseDataHandler}
					onCancel={stopEditing}
				/>
			)}
		</div>
	);
};

export default NewExpense;
