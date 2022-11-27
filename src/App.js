import logo from './logo.svg';
import './App.css';

import IncreaseCounter from './components/IncreaseCounter'
import IncreaseByTwoCounter from './components/IncreaseByTwoCounter'
import DecreaseCounter from './components/DecreaseCounter'
import Counter from './components/Counter'
function App() {
  return (
    <div > 
      <Counter/>
        
     <IncreaseCounter/>
     <IncreaseByTwoCounter/>
     <DecreaseCounter/>
      
    
    </div>
  );
}

export default App;
