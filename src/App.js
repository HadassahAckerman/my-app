
import AppTv from './api_comps/appTv';
import './App.css';
import AppHooks from './hooks_comps/appHooks';
import AppWeather from './weather_comps/appWeather';
import AppHw from './hw_comps/appHw';

function App() {
 return (
  <div className="App">

   <AppHw />
   {/* <AppHooks /> */}
   {/* <AppTv /> */}
   <AppWeather />
  </div>
 );
}

export default App;