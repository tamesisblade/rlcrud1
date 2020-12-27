import React, { Component } from 'react';
import Customer from './Customer';

class  CustomerList  extends Component {
   
    render(){
        const customers = this.props.customers;


        return ( 
            <div className="data"> 
                <table className="ui celled table">
                    <thead>
                        <tr>
                            <th 
                            style={{ width:'50px',
                            textAlign:'center' 
                            }}  >
                                #
                            </th>
                            <th>Nombres</th>
                            <th>Apellidos</th>
                            <th>Email</th>
                            <th
                            style={{ width:'148px' }}
                            >
                                Action
                            </th>
                        </tr>
                    </thead>   
                    <tbody>
                       {
                           customers.map( (p) =>{
                               return <Customer customer ={ p }  key= { p.id } 
                               onDelete = { this.props.onDelete }
                               onEdit = { this.props.onEdit }
                               />;
                               
                           })
                       }
                      
                    </tbody> 
                </table>
            </div>
         );
    }
    
}
 
export default CustomerList;