
import './App.css';
import Users from './Users';
import Routes from './Routes';
import Topbar from './Topbar';
import Uploadfile from './Uploadfile';
// App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import SingleUpload from './SingleUpload';
import InputField from './InputField';
import Search from './Expressprac/Search';
import Buttonrotate from './Buttonrotate';
import PdfView from './PdfView'
import { PDFViewer } from '@react-pdf/renderer';


function App() {
  return (
    <div className="App">
      <header>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        {/* <Search/> */}
        {/* <Topbar /> */}
        {/* <Routes /> */}
        {/* <Uploadfile/> */}
        {/* <SingleUpload /> */}
        {/* <InputField /> */}
        {/* <Users /> */}
        <Buttonrotate />
        <PDFViewer style={{width:'100%', height:'100vh'}}>
          <PdfView />
        </PDFViewer>
      </header>
    </div>
  );
}

export default App;
