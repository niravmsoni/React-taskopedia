import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

function MainBody() {
  return(
<div>
    <p>In this course, we will learn react js by building TaskOPedia!</p>
    <ul>
      <li>Call Ben</li>
      <li>Go to DMart</li>
    </ul>
  </div>
  );
}

function Header(){
  return(
    <h1>REACT COURSE</h1>
  );
}

function Footer(){
  return(
    <p>Happy Coding!</p>
  );
}

root.render(
<div>
  <Header />
  <MainBody/>
  <Footer/>
</div>
  );
