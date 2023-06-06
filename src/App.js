import logo from './logo.svg';
import './App.css';
import Counter from './components/counter';
import InputVal from './components/inputVal';
import Message from './components/message';

function App() {
  return (
    <div className='container'>
      <h1 className='text-danger'>React</h1>
      <Message txt="first 1111"/>
      <Message txt="last 2222"/>
      <Counter></Counter>
      <InputVal/>

    </div>
  );
}

export default App;
