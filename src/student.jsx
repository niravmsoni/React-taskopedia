export default function Student(props){
    return (
      <div className="container p-4">
        <div className="row border">
        <div className="col-2">
          <img className="w-100" src={`https://ui-avatars.com/api/?name=${props.name}`} />
        </div>
        <div className="col-10">
          {props.name}<br/>
          Coding Experience: {props.experience} years
        </div>
        </div>
      </div>
    );
  }
  