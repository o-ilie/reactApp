import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
	const [filterYear, setFilterYear] = useState("2020");
	const saveExpenseFilterHandler = (selectedYear) => {
		setFilterYear(selectedYear);
	};

	const filteredExpenses = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === filterYear;
	});

	return (
		<li>
			<Card className="expenses">
				<ExpensesFilter
					selected={filterYear}
					onChangeFilter={saveExpenseFilterHandler}
				/>
				<ExpensesChart expenses={filteredExpenses} />
				<ExpensesList items={filteredExpenses} />
			</Card>
		</li>
	);
}

export default Expenses;
