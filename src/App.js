
import { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

export  class App extends Component{
  render(){
  return (
   
    
  <Router>
   
  
  <Navbar/>
   <Routes>
  
    <Route exact path='/' element={<News pageSize={8} country="in" category="general"/>}>
  </Route>
  
<Route exact path='/entertainment' element={<News key="entertainment" pageSize={8} country="in" category="entertainment"/>}>

</Route>
<Route exact path='/sports' element={<News key="sports" pageSize={8} country="in" category="sports"/>}>

</Route>

<Route exact path='/science' element={<News key="science" pageSize={8} country="in" category="science"/>}>

</Route>

<Route exact path='/health' element={<News key="health" pageSize={8} country="in" category="health"/>}>

</Route>

<Route exact path='/business' element={<News key="business" pageSize={8} country="in" category="business"/>}>

</Route>

<Route exact path='/technology' element={<News key="technology" pageSize={8} country="in" category="technology"/>}>

</Route>

    </Routes>
  

   </Router>
     
  
  );
}
}


export default App;