import React, { Component } from 'react'
import axios from "axios";

class Inputclient extends Component {
    constructor(props) {
        super(props);
    this.state = {
        name: "",
        nationality: "",
        passport_no: "",
        emirates_id_no: "",
        mobil_no: "",
        email: ""
    };
    }
    
    handleChange=(e)=> {
        console.log(e.target.name)
        console.log(e.target.value)
        this.setState({[e.target.name]: e.target.value})

    }

    handleSubmit ()  {
        // e.preventDefault();

        if
        ((
        this.state.name !== "" && 
        this.state.nationality !== "" &&
        this.state.passport_no !== "" && 
        this.state.emirates_id_no !== "" &&
        this.state.mobil_no !== "" &&
        this.state.email !== "" 
        ))

        {
            axios.post("http://localhost:5000/clients", this.state)
            .then(res=>{
                console.log(res);
                this.setState({name:'',nationality:'',passport_no:'',emirates_id_no:'',mobil_no:'',email:'' })
            });
            window.location = "/";
            
        }
    }
    render() {
        return(
            <div className="row text-center">
                <div className="col-md-4">
                    <form onSubmit={()=>this.handleSubmit()}>
                        <input type="text" required onChange={(e)=>this.handleChange(e)} name='name' value={this.state.name} style={{fontFamily:'Cursive,san-serif,Gugi',boderRadius:'10px',marginLeft:"50px",marginTop:"20px"}} placeholder="Name" className="form-control" />
                        <input type="text"required onChange={(e)=>this.handleChange(e)} name='nationality'value={this.state.nationality}style={{fontFamily:'Cursive,san-serif,Gugi',boderRadius:'10px',marginLeft:"50px",marginTop:"20px"}} placeholder="Nationality" className="form-control"/>
                        <input type="text"required onChange={(e)=>this.handleChange(e)} name='passport_no'value={this.state.passport_no}style={{fontFamily:'Cursive,san-serif,Gugi',boderRadius:'10px',marginLeft:"50px",marginTop:"20px"}}placeholder="Passport_no" className="form-control"/>
                        <input type="text"required onChange={(e)=>this.handleChange(e)} name='emirates_id_no'value={this.state.emirates_id_no}style={{fontFamily:'Cursive,san-serif,Gugi',boderRadius:'10px',marginLeft:"50px",marginTop:"20px"}}placeholder="Emirates_id_no" className="form-control"/>
                        <input type="number"required onChange={(e)=>this.handleChange(e)} name='mobil_no'value={this.state.mobil_no}style={{fontFamily:'Cursive,san-serif,Gugi',boderRadius:'10px',marginLeft:"50px",marginTop:"20px"}}placeholder="Mobil_no" className="form-control"/>
                        <input type="email"required onChange={(e)=>this.handleChange(e)} name='email'value={this.state.email}style={{fontFamily:'Cursive,san-serif,Gugi',boderRadius:'10px',marginLeft:"50px",marginTop:"20px"}}placeholder="Email" className="form-control"/>

                        {/* <button style={{marginLeft:"50px",width:'435px'}}className="btn-btn-primary"> Create</button> */}
                        <button 
                        style={{boderRadius:'10px',fontFamily:'Cursive,san-serif,Gugi', outline:'none',color:'white',backgroundColor:'#000066',marginLeft:"50px",width:'435px' ,marginTop:"20px"}} 
                        // onClick={this.handleSubmit()} 
                        className="btn">
                            CREATE
                            </button>

                    </form>

                </div>
                <div className="col-md-8">
                    <img src="team.png" alt=""/>

                </div>
            </div>
        )
    }
}

export default Inputclient