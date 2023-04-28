import React, {useState} from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        />
      </Card>
    </div>
  );
};

export default Expenses;

// import React from "react";
// import ExpenseItem from "./ExpenseItem";
// import Card from "../UI/Card";
// import './Expenses.css';

// const Expenses = (props) => {
//   // return (
//   //   <Card className="expenses">
//   //     {props.items.map((item) => (
//   //       <ExpenseItem
//   //         title={item.title}
//   //         amount={item.amount}
//   //         date={item.date}
//   //       ></ExpenseItem>
//   //     ))}
//   //   </Card>
//   // );

//   const expenseComponent = props.items.map((item) => (
//   <ExpenseItem title={item.title} amount={item.amount} date={item.date} />
//   ));

//   return <Card className="expenses">{expenseComponent}</Card>;

//   // return <div className="expenses">{expenseComponent}</div>;

//   // return (
//   //   <Card className="expenses">
//   //     <ExpenseItem
//   //       title={props.items[0].title}
//   //       amount={props.items[0].amount}
//   //       date={props.items[0].date}
//   //     ></ExpenseItem>

//   //     <ExpenseItem
//   //       title={props.items[1].title}
//   //       amount={props.items[1].amount}
//   //       date={props.items[1].date}
//   //     ></ExpenseItem>

//   //     <ExpenseItem
//   //       title={props.items[2].title}
//   //       amount={props.items[2].amount}
//   //       date={props.items[2].date}
//   //     ></ExpenseItem>

//   //     <ExpenseItem
//   //       title={props.items[3].title}
//   //       amount={props.items[3].amount}
//   //       date={props.items[3].date}
//   //     ></ExpenseItem>
//   //   </Card>
//   // );
// }

// export default Expenses;
