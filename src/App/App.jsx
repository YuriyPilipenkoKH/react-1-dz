
import transactions from 'data/transactions.json'
// import { Container } from './App.styled';
import { Profile } from 'components/Profile/Profile';
import { TransactionTable } from 'components/TransactionsHistory/TransactionHistory';
import '../css/index.css'
import user from '../data/user.json'

export const App = () => {
  return (

    <div>
      <Profile/>
   {/* <TransactionTable transactions = {transactions} /> */}
    </div>
  );
}; 