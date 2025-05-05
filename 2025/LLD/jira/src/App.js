
import { useState } from 'react';
import './App.css';
import BarChart from './BarChart';
import CHART_DATA from './data';

function App() {
  const [showChart, setShowChart] = useState(false);

  const handleToggleChart = () => {
    setShowChart((prevShowChart) => !prevShowChart);
  }
  return (
    <div className="App">
      <button className='Toggle-Button' onClick={handleToggleChart}>Toggle Chart</button>
     {showChart &&  <BarChart data={CHART_DATA}/>}
    
    </div>
  );
}

export default App;
