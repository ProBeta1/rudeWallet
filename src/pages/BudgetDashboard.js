import React from 'react'
import Item from "../components/Item"

function BudgetDashboard() {

  //const 

  return (
    <div>
      <Item title="food" spent="20" budget="40" percentage={50}/>
      <Item title="outing" spent="20" budget="40" percentage={30}/>

    </div> 
  )
}

export default BudgetDashboard
