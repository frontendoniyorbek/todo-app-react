import Form from './components/Form'
import './App.css';
import Header from './components/Header';


function App() {
  return (
   <div>
      <div className="header">
          <div className='container'>
            <Header/>
            <Form/>
          </div>
      </div>
   </div>
  );
}

export default App;
