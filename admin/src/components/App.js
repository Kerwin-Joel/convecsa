
import { Aside } from './aside/index';
import { SectionOne } from './sections/sectionOne/index';
import { SectionTwo } from './sections/SectionTwo/index';
import {
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    
    <div className='container'>
      <Aside/>
      <Routes>
        <Route path="/" element={<SectionOne />} />
        <Route path="sectionTwo" element={<SectionTwo />} />
      </Routes>
    </div>
  );
}

export default App;
