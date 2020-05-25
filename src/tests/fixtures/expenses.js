import moment from 'moment'

export default [{
    id: '1',
    description: 'banana',
    note: '',
    amount: 195,
    createdAt: moment(0)
}, {
    id: '2',
    description: 'rent',
    note: '',
    amount: 109500,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '3',
    description: 'credit card',
    note: '',
    amount: 8500,
    createdAt: moment(0).add(4, 'days').valueOf()
}]