export default function Students(){
    const fullName = "Hemali Soni";
    const programmingExp = 2;
    return (
      <div className="container p-4">
        <div className = "row">
          Students Enrolled
        </div>
        <div className="row border">
        <div className="col-2">
          <img className="w-100" src={`https://ui-avatars.com/api/?name=${fullName}`} />
        </div>
        <div className="col-10">
          {fullName}<br/>
          Coding Experience: {programmingExp} years
        </div>
        </div>
      </div>
    );
  }
  