import React, { Component } from 'react';
import axios from 'axios';
import MyForm from './components/MyForm';
import CustomerList from './components/CustomerList';
import Loader from './components/Loader';
import './App.css';

class  App extends Component {
  state ={
    loader:false,
    customers:[],
    customer:{},
    url:'https://lapicrud1.herokuapp.com/api/customer'
  };
  getCustomers = async () => {
    this.setState({ loader:true })
    const customerstraer = await axios.get(this.state.url);
    this.setState
    ( 
      { 
        customers: customerstraer.data, 
        loader:false
       }
    )
  }

  createCustomer = async (data) => {
    this.setState({
      loader:true,

    });
    await axios.post(this.state.url, {
      nombres:data.nombres,
      apellidos:data.apellidos,
      email:data.email
    });
    this.getCustomers();
  };

  editCustomer = async (data) => {
    this.setState({
      customer: {},
      loader:true
    });
    await axios.put(`${this.state.url}/${data.id}`,{
      nombres:data.nombres,
      apellidos:data.apellidos,
      email:data.email
    });
    this.getCustomers();
  };

  componentDidMount(){
    this.getCustomers();
  }
  //eliminar
  onDelete = async (id) => {

    
    this.setState(
      {
     
        loader:true
      }
      );
    //eliminar de la bd
    await axios.delete(`${this.state.url}/${id}`);
    //llamar a mi lista de clientes
    this.getCustomers();
    
 } 
 //editar
 onEdit = data =>{
  console.log("customer edit",data.nombres);
  this.setState({
    customer:data
  });
 }
 //guardar
 onFormSubmit = (data) => {
    if(data.isEdit) {
      this.editCustomer(data);

    }else{
      this.createCustomer(data);
    }
 }
  render(){
    return (
        <div>
           <div className="ui fixed  inverted menu">
              <div className="ui container">
                <a href="/d" className="header item">
                  React Js Crud con Laravel
                </a>
              </div> 
           </div>
           <div className="ui main container">
              <MyForm customer = { this.state.customer }
                onFormSubmit = { this.onFormSubmit }
              
              />
              {
                this.state.loader ? <Loader/> : ""
              }
              <CustomerList 
              customers = {this.state.customers} 
              onDelete = { this.onDelete }
              onEdit = { this.onEdit }
              />
           </div>

        </div>
      );
  }
  
}

export default App;
