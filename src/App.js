import './App.css';
import Adminheader from './components/adminheader';
import Normalheader from './components/normalheader';

function App(props) {
  const myArray = ['apple', 'banana', 'orange'];
  const authenticated = true;
  const name = "Learner";
  const element = <h1>Hello,
{ name }.Welcome to Scope India.</h1>;
  return (
    <div className="App">
      {props.isAdmin ? 
      <Adminheader /> :
      <Normalheader />}
      <body>
        {myArray.map((item) => <h1>{item}</h1>)}
        {authenticated ? <h1>authenticated</h1>:<h1>Not authenticated</h1>}
        {element}
        <h2>{new Date().toLocaleDateString()}</h2>
      </body>
    </div>
  );
}

export default App;
