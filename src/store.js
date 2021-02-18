import { store } from '@risingstack/react-easy-state'

const state = store({
  tablePrice: [
    { id: 1, people: 'до 1000 чел.', price: 1 },
    { id: 2, people: '1000-3000 чел.', price: 2 },
    { id: 3, people: '3000-10000 чел.', price: 3 },
    { id: 4, people: '10000-30000 чел.', price: 4 },
    { id: 5, people: 'более 3000 чел.', price: 5 },
    { id: 6, people: 'Новые учатсники', price: 7 },
  ],
})

export default state
