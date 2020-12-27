import React, { Component } from 'react';

class Customer  extends Component {
   
    onDelete = () =>{
        this.props.onDelete(this.props.customer.id)
    }
    // para editar
    onEditar = () =>{
        this.props.onEdit(this.props.customer)
    }

    render(){
     const { id,nombres, apellidos, email } = this.props.customer;
        return (
           <tr>
               <td style={{ textAlign:"center" }}>{ id }</td>
                <td>{ nombres}</td>
                <td>{ apellidos }</td>
                <td>{ email }</td>
                <td>
                   <button 
                    onClick={ this.onEditar }
                    className="mini ui blue button"
                    >Edit
                    </button>

                    <button 
                    onClick={ this.onDelete }
                    className="mini ui red button"
                    >Delete
                    </button>
                </td>
           </tr>
          );
    }
  
}
 
export default Customer;