import React from 'react'
import { removeExpense } from '../actions/expenses'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const ExpenseListItem = ({description, amount, createdAt, id}) => (
    <div>
        <Link to={`/edit/${id}`}>{description}</Link>
        <p>{amount} - {createdAt}</p>
    </div>
)

export default ExpenseListItem