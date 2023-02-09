import React from "react";

class Student extends React.Component{
  render(){
    return (
      <div className="container p-1">
        <div className="row border">
        <div className="col-2">
          <img className="w-100 py-2" src={this.props.headShot} />
        </div>
        <div className="col-8">
          {this.props.name}<br/>
          Coding Experience: {this.props.experience} years
        </div>
        <div className="col-2">
          {this.props.children}
        </div>
        </div>
      </div>
    );
  }
  }
  
  export default Student;