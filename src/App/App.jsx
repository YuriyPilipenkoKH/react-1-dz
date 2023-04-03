
import transactions from 'data/transactions.json'
// import { Container } from './App.styled';
import { TransactionTable } from 'components/TransactionsHistory/TransactionHistory';


export const App = () => {
  return (
    <div>
   <TransactionTable transactions = {transactions} />
    </div>
  );
}; 