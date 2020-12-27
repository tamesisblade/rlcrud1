import React, { Component } from 'react';
class MyForm extends Component {

   constructor(props){
      super(props);
      this.state = {
         form:{
            nombres:'',
            apellidos:'',
            email:'',
            isEdit:false
         },
         btnName:"save",
         btnClass:"ui primary button submit-button"

      };
      
      
   }
   isEmpty = (obj) => {
      return Object.entries(obj).length === 0 && obj.constructor === Object;
   }
   componentDidUpdate(prevProps){
      if(prevProps !== this.props && !this.isEmpty(this.props.customer) ){
        this.setState({
            form:{
               ...this.props.customer,
               isEdit:true
              
            },
            btnName:"Update",
            btnClass:"ui orange button submit-button"
        })
      }
   }

   handleChange = (e) => {
      const { name,value } =  e.target;
      let form = this.state.form;
      form[name] = value;
      this.setState({
         form
      });
   }
   onFormSubmit = (e) => {
      e.preventDefault();
      if(this.formValidation()){
         this.props.onFormSubmit(this.state.form);
      }
      this.clearFormFields();
   };
   formValidation = () => {
      if(document.getElementsByName("nombres")[0].value === ''){
         alert("Ingrese nombres");
         return false;
      }
      if(document.getElementsByName("apellidos")[0].value === ''){
         alert("Ingrese apellidos");
         return false;
      }
      if(document.getElementsByName("email")[0].value === ''){
         alert("Ingrese email");
         return false;
      }
      return true;
   }
   clearFormFields  = () => {
      //limpiar el state
      this.setState({
         form:{
            nombres:"",
            apellidos:"",
            email:"",
            isEdit:false
         }
      });
      

      //cambiar el boton a guardar
      this.setState({
         btnName:"save",
         btnClass:"ui primary button submit-button"
      });
      //limpiar los campos de texto
      document.querySelector(".form").reset();
   };
    render()
    
    {
       
        return(
            <div>
               <form className="ui form">
                 <div className="fields">
                     <div className="four wide field">
                        <label>Nombres</label>
                        <input 
                        onChange = { this.handleChange }
                        value = { this.state.form.nombres }
                        type="text"
                        name = "nombres"
                        placeholder="Escriba su nombre"
                        />
                     </div>
                     <div className="four wide field">
                        <label>Apellidos</label>
                        <input 
                        onChange = { this.handleChange }
                        value= { this.state.form.apellidos }
                        type="text"
                        name = "apellidos"
                        placeholder="Escriba su apellido"
                        />
                     </div>
                     <div className="four wide field">
                        <label>Email</label>
                        <input 
                        onChange = { this.handleChange }
                        value = { this.state.form.email }
                        type="email"
                        name = "email"
                        placeholder="Escriba su email"
                        />
                     </div>
                     <div className="four wide field">
                        <button 
                        className={ this.state.btnClass }
                        onClick = { this.onFormSubmit }
                        >
                           { this.state.btnName }
                        </button>
                     </div>
                 </div>   
               </form>
            </div>
        );
    };
}
 
export default MyForm  