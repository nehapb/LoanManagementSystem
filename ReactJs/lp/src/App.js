import logo from './logo.svg';
import './App.css';
import Login from './Components/Login'
import Register from './Components/Register'
import Admin from './Admin/Admin'
import User from './Components/User'
import { Button } from '@material-ui/core';
import HomeLoan from './Components/HomeLoan'
import Manager from './ClientManager/Manager'
import InterviewDate from './ClientManager/InterviewDate'
import FinalVerification from './ClientManager/FinalVerification'
import ClientStatusView from './ClientManager/ClientStatusView'
import AdminClients from './Admin/AdminClients'
import ClientManager from './ClientManager/ClientManager';
import Home from "./Components/Home";
import Header from "./Components/Header";
import LoanList from './Admin/LoanList';
import CreateLoanProgram from './Admin/CreateLoanProgram';
import Balance from './Components/Balance';
import UserLoanProgram from './Components/UserLoanProgram'
import Edit from './Components/Edit'
import Calculator from './EMI/Calculator'
import AddManager from './Admin/AddManager'
import ViewManager from './Admin/ViewManager'
import HomeIcon  from '@material-ui/icons/Home';
import ContactUs from './Components/ContactUs';
import InfoPage from './Components/InfoPage';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EditLoanProgram from './Components/EditLoanProgram'
import ServicePage from './Components/ServicePage'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';  

function App() {
  return (
    <div className="App">
             <Router>      
     
        <Switch>           
          <Route  path="/Login" component={Login}/>
          <Route path='/Register' component={Register}/> 
          <Route path='/Admin' component={Admin}/>
           
         <Route path='/User' component={User}/>
         <Route path='/HomeLoan' component={HomeLoan}/>  
         <Route path='/Manager' component={Manager}/>
         <Route path='/InterviewDate/:id' component={InterviewDate}/>
         <Route path='/FinalVerification/:id' component={FinalVerification}/>
         <Route path='/ClientStatusView' component={ClientStatusView}/>
         <Route path='/Edit/:id' component={Edit} />  
          <Route  path='/ClientManager' component={ClientManager}/>
          <Route  path='/EditLoanProgram/:id' component={EditLoanProgram}/>
      
         
      
          <Route path='/CreateLoanProgram' component={CreateLoanProgram}/>
        
          <Route path='/Balance' component={Balance}/>
          <Route path='/UserLoanProgram' component={UserLoanProgram}/>
          <Route path='/Calculator' component={Calculator}/>
          <Route path='/AddManager' component={AddManager}/>
          <Route path='/ViewManager' component={ViewManager}/>
          <Route path='/AdminClients' component={AdminClients}/>
         
        
          <Route exact path="/" component={Home}/> 
      <Route path='/InfoPage' component={InfoPage}/>
    
    
      <Route path='/LoanList' component={LoanList}/>
      <Route path='/ContactUs' component={ContactUs}/>
      <Route path='/ServicePage' component={ServicePage}/>
      <Route path='/Header' component={Header}/>
        </Switch>      
      
    </Router>  





  
 

     
  </div> 
  );
}

export default App;