// Count total amount of expenses
export default (expenses) => {
    // If no expenses are given, return 0
    if(expenses.length === 0) {
        return 0
    }

    // For multiple expenses, sum up all amounts
    if(expenses.length >= 1){
        const reducer = (accumulator, currentValue) => accumulator + currentValue
        const expenseAmounts = expenses.map(expense => expense.amount)
        return expenseAmounts.reduce(reducer)
    }
}
