import React, { Component } from 'react'

class Login extends Component {
    constructor(props){
        super(props)
        this.state ={

            fname:'',
            lName:''
        }
    }
    
   
    handleClick(e)
    {
        alert(`Hello world : ${e.target.name} - ${e.target.value}`)
        // target is name or value -- id is for user/client and name for server side
    }

    handleInput=(e)=>{
        const {name,value} = e.target
        //console.log(`${name}:${value}`)
    
        this.setState ({
            ...this.state,
            [name]:value
        })
        console.log(`${this.state.fname}`)
    }
    render()
    {

        return (
            <div>
                <h2>Login(Controlled Form)</h2>
                FirstName: <input type='text' name='fname' value={this.state.fname} onChange={this.handleInput}  placeholder='Enter First Name'/><br/>
                LastName: <input type = "text" name='lName' value={this.state.lName} onChange={this.handleInput} placeholder='Enter last Name'></input>





                <button  value = 'TEST' name='btnSubmit' onClick={this.handleClick}>Submit</button>




                <p>{this.state.fname}</p>
                <p>JSON.stringify{this.state}</p>
            
            </div>
        )

    } 
}
export default Login