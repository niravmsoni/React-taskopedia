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

root.render(
<div>
  <MainBody/>
  <MainBody/>
  <MainBody/>
</div>
  );
