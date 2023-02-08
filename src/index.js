import ReactDOM from 'react-dom/client';
import "./css/style.css";
import Header from './header';
import Student from './student';

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


function Footer(){
  return(
    <p style={{color:"gray", backgroundColor:"black"}}> Happy Coding!</p>
  );
}

root.render(
<div className="">
  <Header />
  <MainBody/>
  <div className = "container row">Students Enrolled</div>
  <Student experience={2} name="Hemali Soni" headShot="https://api.lorem.space/image/face?w=150&h=150"/>
  <Student experience={5} name="Nirav Soni" headShot="https://api.lorem.space/image/face?w=150&h=150"/>
  <Student experience={7} name="Angel Soni" headShot="https://api.lorem.space/image/face?w=150&h=150"/>
  <Footer/>
</div>
);
