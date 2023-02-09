export default function Student(props){
    return (
      <div className="container p-1">
        <div className="row border">
        <div className="col-2">
          <img className="w-100 py-2" src={props.headShot} />
        </div>
        <div className="col-8">
          {props.name}<br/>
          Coding Experience: {props.experience} years
        </div>
        <div className="col-2">
          {props.children}
        </div>
        </div>
      </div>
    );
  }
  