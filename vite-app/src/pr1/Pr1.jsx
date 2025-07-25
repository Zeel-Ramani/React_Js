import { Component } from "react";

class Usercard extends Component{
  render() {

    let {name,instaid,phone,emailid,img} = this.props

    return (
      <div style={{ display: 'flex', margin: '10px', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ width: '350px', height: '500px', border: '2px solid white', borderRadius: '10px', padding: '10px', boxShadow: '0 4px 8px rgba(63, 66, 126, 0.1)' }} className="user-card-container">
                <div className="user-card">
                <img src={img} alt="User Avatar" style={{ width:'100%', height: '270px', borderRadius: '10px' ,border: '2px solid white', objectFit: 'cover', objectPosition: 'top'}} />
                <h2>Name : {this.props.name}</h2>
                <p>Instaid : {this.props.instaid}</p>
                <p>Phone : {this.props.phone}</p>
                <h3>Email : {this.props.emailid}</h3>
            </div>
            </div>
      </div>
    );
  }
}

export default Usercard;