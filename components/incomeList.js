"use client";
import React from "react";
import { currencyFormatter } from "@/lib/utils";
import { getAllIncomeData } from "@/lib/api";

export default async function IncomeList() {
	const incomeData = await getAllIncomeData();
	return (
		<div className="overflow-x-auto">
			<table className="table">
				{/* head */}
				<thead>
					<tr className="text-white">
						<th>No</th>
						<th>Description</th>
						<th>Amount</th>
					</tr>
				</thead>
				<tbody>
					{incomeData.map((income, index) => (
						<tr key={income.id} className="hover:bg-bgColor/50">
							<th>{index + 1}</th>
							<td>{income.description}</td>
							<td>{currencyFormatter(income.amount)}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
