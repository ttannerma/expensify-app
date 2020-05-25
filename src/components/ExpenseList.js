import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'
const ExpenseList = (props) => (
    <div>
        <h1>ExpenseList</h1>
        {props.expenses.length === 0 && <p>No expenses found!</p>}
        {props.expenses.map(({id, description, amount, createdAt}) => 
        <ExpenseListItem
         key={id}
         id={id}
         description={description}
         amount={amount}
         createdAt={createdAt}
         dispatch={props.dispatch}
         />
         )}
    </div>
)

const mapStateToProps = ({expenses, filters}) => {
    return {
        expenses: selectExpenses(expenses, filters)
    }
}

export default connect(mapStateToProps)(ExpenseList)
