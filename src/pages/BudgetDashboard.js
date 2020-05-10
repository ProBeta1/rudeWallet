import React from "react";
import Item from "../components/Item";
import Dashboard from '../components/Dashboard'

function BudgetDashboard() {
  const items = [
    {
      title: "food",
      spent: 30,
      budget: 60,
    },
    {
      title: "foodoo",
      spent: 80,
      budget: 80,
    },
  ];
  
  const calc = (spent,budget) => {
    return Math.floor((spent / budget) * 100);
  }

  let totalSpent = 0
  let totalBudget = 0
  items.forEach(item => {
    totalBudget += item.budget;
    totalSpent += item.spent;
  })

  return (
    <div>
      <Dashboard items={items} budget={totalBudget} spent={totalSpent} per={calc(totalSpent, totalBudget)} />
    </div>
  );
}

export default BudgetDashboard;
