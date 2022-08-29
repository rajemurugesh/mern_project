// eslint-disable-next-line
import React, { Component } from 'react'
import axios from 'axios'

class Listclient extends Component {
    constructor(props) {
        super(props);
    this.state = {
        clients : [],
        uname: '',
        unationality:'',
        upassport_no:'',
        uemirates_id_no:'',
        umobil_no:'',
        uemail:'',
        uid:''

        
    }
}
    getClients = () => {
        axios.get("http://localhost:5000/")
        .then(res=>{
            console.log(res);
            this.setState({clients:res.data});
        })

    }
    componentDidMount = () =>{
        this.getClients();
    }
    handleDelete = (id) => {
        axios.delete(`http://localhost:5000/clients/${id}`)
        .then(res=>{
            console.log(res);
            window.location = "/";
        })
    }

    handleUpdate=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }

    handleModalUpdate=()=>{
        axios.put(`http://localhost:5000/clients/${this.state.uid}`,{name:this.state.uname,nationality:this.state.unationality,passport_no:this.state.upassport_no,emirates_id_no:this.state.uemirates_id_no,mobil_no:this.state.umobil_no,email:this.state.uemail})
        .then(res=>{
            console.log(res);
            this.setState({uname:'',unationality:'',upassport_no:'',uemirates_id_no:'',umobil_no:'',uemail:''})
            window.location = '/';
        })
    }
    render() {
        return(
            <div>
                {
                    this.state.clients.map(client=>(
                        <div key={client._id} className="card" style={{borderRadius:'10px',padding:'15px',backgroundColor:'whitesmoke',display:'inline-block',marginLeft:'15px',marginTop:'10px'}}>
                            <div className="card-body">
                                <h4>Name: {client.name} </h4>
                                <h4>Nationality: {client.nationality} </h4>
                                <h4>Passport No: {client.passport_no} </h4>
                                <h4>Emirates ID No: {client.emirates_id_no} </h4>
                                <h4>Mobile Number: {client.mobil_no} </h4>
                                <h4>Email: {client.email} </h4>
                                {/* <button className="btn btn-warning">UPDATE</button> */}
                                <div className="container">
                                    <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#myModal" onClick={()=>{this.setState({uid:client._id,uname:client.name,unationality:client.nationality,upassport_no:client.passport_no,uemirates_id_no:client.emirates_id_no,umobil_no:client.mobil_no,uemail:client.email})}}> UPDATE
                                    </button>

                                    <button style={{marginLeft: '20px'}} onClick={() => this.handleDelete(client._id)}className="btn btn-danger">DELETE</button>
                                    
                                    <div className="modal fade" id="myModal" tabindex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title">UPDATE</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                    <div className="modal-body">
                                        <input onChange={(e)=>this.handleUpdate(e)} value={this.state.uname} name='uname'className="form-control" style={{marginBottom:"10px",fontFamily:"cursive",fontSize:"15px"}} placeholder='Name'/>
                                        <input onChange={(e)=>this.handleUpdate(e)} value={this.state.unationality} name='unationality'className="form-control" style={{marginBottom:"10px",fontFamily:"cursive",fontSize:"15px"}} placeholder='Nationality'/>
                                        <input onChange={(e)=>this.handleUpdate(e)} value={this.state.upassport_no} name='upassport_no'className="form-control" style={{marginBottom:"10px",fontFamily:"cursive",fontSize:"15px"}} placeholder='Passport_no'/>
                                        <input onChange={(e)=>this.handleUpdate(e)} value={this.state.uemirates_id_no} name='uemirates_id_no'className="form-control" style={{marginBottom:"10px",fontFamily:"cursive",fontSize:"15px"}} placeholder='Emirates_id_no'/>
                                        <input onChange={(e)=>this.handleUpdate(e)} value={this.state.umobil_no} name='umobil_no'className="form-control" style={{marginBottom:"10px",fontFamily:"cursive",fontSize:"15px"}} placeholder='Mobil_no'/>
                                        <input onChange={(e)=>this.handleUpdate(e)} value={this.state.uemail} name='uemail'className="form-control" style={{marginBottom:"10px",fontFamily:"cursive",fontSize:"15px"}} placeholder='Email'/>
                                    </div>
                                    <div className="modal-footer">
                                        <button className="btn btn-warning" onClick={(e)=>this.handleModalUpdate(e)}>Update</button>
                                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() =>{this.setState({uname:'',unationality:'',upassport_no:'',uemirates_id_no:'',umobil_no:'',uemail:''})}}>Close</button>
                                        {/* <button type="button" className="btn btn-primary">Save changes</button> */}
                                    </div>
                                    </div>
                                </div>
                                </div>





                                </div>
                                </div>
                        </div>
                        
                    ))
                }
                
            </div>
        )
    }
}

export default Listclient