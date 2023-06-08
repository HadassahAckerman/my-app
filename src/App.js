import logo from './logo.svg';
import './App.css';
import Counter from './components/counter';
import InputVal from './components/inputVal';
import Message from './components/message';
import AddUntilFive from './components/addUntilFive';
import Gallery from './components/gallery';
import FavoriteColor from './components/favoriteColor';
import FavoriteMovie from './components/favoriteMovie';
import ExchangeCalc from './components/exchangeCalc';


function App() {
  return (
    <div className='container'>
      <h1 className='text-danger'>React</h1>
      <Message txt="first 1111" />
      <Message txt="last 2222" />
      <Counter></Counter>
      <InputVal />
      <AddUntilFive />
      <Gallery/>
      <FavoriteColor/>
      <FavoriteMovie/>
      <ExchangeCalc/>
    </div>
  );
}

export default App;
