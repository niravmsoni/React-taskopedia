import ReactDOM from 'react-dom/client';
import "./css/style.css";
import TempHeader from './header';

const root = ReactDOM.createRoot(document.getElementById('root'));

function MainBody() {
  const whatWeWillLearn = 'React JS';
  const totalLecture = 3;
  return(
<div>
    <p>In this course, we will learn {whatWeWillLearn} by building TaskOPedia!
    <br/>
    Total Lecture - {totalLecture}
    </p>
    <ul>
      <li>Basic Foundation</li>
      <li>Functional and Class Components</li>
    </ul>
    {/* <div>
    Enter Task : <input maxLength={5} readOnly={true} placeholder={"test123456"}></input>
    </div> */}
  </div>
  );
}

function Students(){
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


function Footer(){
  return(
    <p style={{color:"gray", backgroundColor:"black"}}> Happy Coding!</p>
  );
}

root.render(
<div>
  <TempHeader />
  <MainBody/>
  <Students/>
  <Footer/>
</div>
);
