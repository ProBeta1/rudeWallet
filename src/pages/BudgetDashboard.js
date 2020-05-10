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
    return Math.floor((spent/budget)*100);
  }

  const showItems = items.map((item) => (
    <Item
      title={item.title}
      spent={item.spent}
      budget={item.budget}
      percentage={calc(item.spent, item.budget)}
    />
  ));

  return (
    <div>
      <Dashboard items={items} />
    </div>
  );
}

export default BudgetDashboard;
