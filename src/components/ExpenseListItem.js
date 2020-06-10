import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'

// load a locale
numeral.register('locale', 'fi', {
    delimiters: {
        thousands: ' ',
        decimal: ','
    },
    abbreviations: {
        thousand: 'k',
        million: 'm',
        billion: 'b',
        trillion: 't'
    },
    ordinal : function (number) {
        return number === 1 ? 'eurou' : 'euros';
    },
    currency: {
        symbol: '€'
    }
});

// switch between locales
numeral.locale('fi');

const ExpenseListItem = ({description, amount, createdAt, id}) => (
    <div>
        <Link to={`/edit/${id}`}>{description}</Link>
        <p>
        {numeral(amount / 100).format('$0,0.00')}
        -
        {moment(createdAt).format('MMMM Do, YYYY')}
        </p>
    </div>
)

export default ExpenseListItem