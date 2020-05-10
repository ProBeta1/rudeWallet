import React from 'react'
import Card from './Card'


const Cards = ({items}) => {
  const calc = (spent,budget) => {
    return Math.floor((spent / budget) * 100);
  }

  return(
    <div>
{
  items.map((item) => (
    <Card
      title={item.title}
      spent={item.spent}
      budget={item.budget}
      percentage={calc(item.spent, item.budget)}
    />
  ))
    }
    </div>
  );
}

export default Cards