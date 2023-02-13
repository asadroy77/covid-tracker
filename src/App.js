import './App.css';
import { useState } from 'react';
import { FetchData } from './components/FetcchData/FetchData';
import {DataChart} from './components/dataChart/DataChart'
function App() {

  let [report ,setReport] = useState({ confirmed:{} , recovered:{} , deaths:{} })

  let [country ,setCountry] = useState('');

  return (
    <div className="App">
     <FetchData country ={country} setCountry={setCountry} report={report} setReport={setReport}></FetchData>
     <DataChart></DataChart>
    </div>
  );
}

export default App;
