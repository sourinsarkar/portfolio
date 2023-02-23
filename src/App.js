import MainHeader from "./component/MainHeader";
import MainBody from "./component/MainBody";
import MainFooter from "./component/MainFooter";
// import Preview from './component/Preview.png'
// import Preview from './assests/media/png/Preview.png'


function App() {
  return (
    <div>
      <MainHeader />
      <MainBody />
      <MainFooter />
      {/* <img src={Preview} alt="logo"></img> */}
    </div>
  );
}

export default App;
