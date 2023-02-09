import Student from './Student';

function MainBody() {
    const whatWeWillLearn = 'React JS';
    const totalLecture = 3;
    return(
  <div style={{minHeight: "70vh"}}>
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
      <div className = "col-4">Students Enrolled</div>
        <Student experience={2} name="Hemali Soni" headShot="https://api.lorem.space/image/face?w=150&h=150"/>
        <Student experience={5} name="Nirav Soni" headShot="https://api.lorem.space/image/face?w=151&h=150"/>
        <Student experience={7} name="Angel Soni" headShot="https://api.lorem.space/image/face?w=152&h=150"/>
    </div>
    
    );
}

export default MainBody;