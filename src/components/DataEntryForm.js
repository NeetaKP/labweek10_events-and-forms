import React, { Component } from 'react'

const outline_style = {
    border: 'solid green', 
    margin: 'auto',
    width: '600px',
    paddingBottom: '10px',
    textAlign: 'center'
}

const form_style = {
    display: 'flex',
    alignItems: 'stretch',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    margin: '-15px 0px 0px 0px'
}

const item_row_style = {
    display:'flex',
    alignItems: "flex-start",
    flexDirection: 'row',
    width: '100%',
    textAlign:'center',
}

const tail_item_row_style = {
    width: '100%',
    textAlign:'center',
    margin: '2px'
}

const item_style = {
    display: 'flex',
    width:"100%",
    flexDirection: 'column',
     margin: '0px 10px -6px 10px'
}

const submit_button = {
    backgroundColor: "green",
    color: 'white',
    border: "green",
    borderRadius: "5px",
    padding:'3px 9px 3px 9px'



}

const input_style = {
    width: "100%"
}

const output_box = {
    border: 'solid green', 
    margin: 'auto',
    width: '600px',
    paddingBottom: '10px',
    textAlign: 'center',
    marginTop: "20px"
}

const output_table_label = {
    textAlign: "right",
    color: "green",
    fontWeight: "bold",
    fontFamily: "sans-serif"
   
}

const output_table_data = {
    textAlign: "left"
}

const right = {
    display:"inline", 
    color:"green", 
    textAlign: 'right',
    fontFamily: "Georgia, serif"
}

const left = {
    display:"inline", 
    textAlign: 'left',
    fontFamily: "serif"
}

export default class DataEntryForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            email:'',
            fullName:'',
            address:'',
            address2:'',
            city:'',
            province:'',
            postalCode:'',
            myDisplay:false,
            agree:false
            


            
        }
        this.provinces = ['Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 
            'Newfoundland and Labrador', 'Nova Scotia', 'Ontario',
            'Prince Edward Island', 'Quebec', 'Saskatchewan']
        
    }    

    ontextinputAdded=(event)=>{
        //event.preventDefault()
        this.setState({[event.target.name]: event.target.value})
        //e.handleInput()
        
    }

    onFormSubmit=(event)=>{
        event.preventDefault()
        //if(this.ontextinputAdded())
            this.setState({myDisplay: true})
    }
    ischecked = (event)=>{
        this.setState({agree: !this.state.agree})
    }

    


    
    render()
    {
        return(
            <div>
            <div  style={outline_style}>
                <h1>Data Entry Form</h1>
                <form style={form_style} onSubmit={this.handleSubmit}  >
                    <div style={item_row_style}>
                    <div style={item_style}>
                        <label>Email</label>
                        <input type='text' 
                            name= 'email'
                            style={input_style} 
                            value={this.state.email} 
                            
                            placeholder= 'Enter email'
                            onChange ={(e)=>this.ontextinputAdded(e)}
                        />
                    </div>
                    <div style={item_style}>
                        <label> Full Name</label>
                            <input type='text'
                            name= 'fullName' 
                            style={input_style}
                            value={this.state.fullName} 
                            onChange={(e) => this.ontextinputAdded(e)} 
                            placeholder= 'Full Name'/><br/>
                    </div>
                    </div>
                    <div style={item_row_style}>
                    <div style={item_style}>
                        <label>Address</label>
                            <input type='text'
                            name='address'
                            style={input_style}
                            value={this.state.address}
                            onChange={(e)=>this.ontextinputAdded(e)}
                            placeholder='1234'/><br/>
                    </div>
                    </div>
                    <div style={item_row_style}>
                    <div style={item_style}>
                        <label>Address2</label>
                            <input type='text' 
                            name='address2'
                            style={input_style}
                            value={this.state.address2}
                            onChange={(e)=>this.ontextinputAdded(e)}
                            placeholder='1234'/><br/>
                    </div>
                    </div>
                    <div style={item_row_style}>

                    <div style={item_style}>
                        <label>City</label>
                            <input type ='text'
                            name='city'
                            style={input_style}
                            value={this.state.city} 
                            onChange={(e)=>this.ontextinputAdded(e)}/>
                    </div>

 
                    <div style={item_style}>
                        <label>Province</label>
                        <select
                            name='province' 
                            onChange={(e)=>this.ontextinputAdded(e)}>
                            <option value='Default' >Choose...</option>
                            {

                            this.provinces.map((province) => (
                                <option key={province} value={province}>{province}</option>
                            )) } 
                            
                        </select> 
                    </div>
                        {/* Province: <select name ='province' onChange={this.handleInput}>
                            <option value = 'toronto'>Toronto</option>
                            <option value = 'alberta'>Alberta</option>
                            <option value = 'manitoba'>Manitoba</option>
                            <option value = 'yukon'>Yukon</option>
                            <option value = 'britishColumbia'>British Columbia</option>
                        </select> */}
                    <div style={item_style}>
                        <label>PostalCode</label>
                            <input type ='text' 
                            name='postalCode' 
                            value={this.state.postalCode} 
                            onChange={(e)=>this.ontextinputAdded(e)}/><br></br>
                    </div>
                    </div>
                    <div style={tail_item_row_style}>
                    <div >
                        <input  type="checkbox"
                        name = "agree"
                        value={this.state.checkbox}
                        onChange={(e)=> this.ontextinputAdded(e)} />
                        <label>Agree Term & Conditions?</label>
                    </div> 
                    </div>


                    <div style={tail_item_row_style}>
                        <input type="submit" style={submit_button}
                        value='Submit'
                        name='btnSubmit' 
                        onClick={(e)=>this.onFormSubmit(e)}/>


                    </div>
                </form> 

                </div> 

                    {this.state.myDisplay && 
                        <div style={output_box}>
                            <br></br>
                            <table align="center">
                                <tr>
                                    <td style={output_table_label}>Email: </td>
                                    <td style={output_table_data}>{this.state.email}</td>
                                </tr>
                                <tr>
                                    <td style={output_table_label}>Full Name: </td>
                                    <td style={output_table_data}>{this.state.fullName}</td>
                                </tr>
                                <tr>
                                    <td style={output_table_label}>Address: </td>
                                    <td style={output_table_data}>{this.state.address}</td>
                                </tr>
                                <tr>
                                    <td style={output_table_label}>Address2: </td>
                                    <td style={output_table_data}>{this.state.address2}</td>
                                </tr>
                                <tr>
                                    <td style={output_table_label}>City: </td>
                                    <td style={output_table_data}>{this.state.city}</td>
                                </tr>
                                <tr>
                                    <td style={output_table_label}>Province: </td>
                                    <td style={output_table_data}>{this.state.province}</td>
                                </tr>
                                <tr>
                                    <td style={output_table_label}>Postal Code: </td>
                                    <td style={output_table_data}>{this.state.postalCode}</td>
                                </tr>


                            </table>

                        </div>


                    }
           </div>
        )
    }
}
              

               
       
            
        
    
    

