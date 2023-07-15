
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";



import Firstaidkit from './Navitem/Firstaidkit';
import Aboutus from './Navitem/Aboutus';
import Main from './componant/Main';
import Home from './Navitem/Home';
import Contactus from './Footeritem/Contactus';
import Disclaimer from './Footeritem/Disclaimer';
import Lifesavingskill from './Option/Lifesavingskill';
import Do_donts from './Option/Do_donts';
import Earthquakes from './Option/Earthquakes';
import Cyclone from './Option/Cyclone';
import Floods from './Option/Floods';
import Landslide from './Option/Landslide';
import Tsunami from './Option/Tsunami';
import Fire from './Option/Fire';
import Disease from './Navitem/Disease';
import Firstaidbasics from './Navitem/Firstaidbasics';

import Emergencycontacts from './Option/Emergencycontacts';
import Bones_joint from './Disease_type/Bones_joint';
import Breathing from './Disease_type/Breathing';
import Ifectionusdisease from './Disease_type/Ifectionusdisease';
import Carouseal_1 from './componant/Carouseal_1';
import Carouseal_2 from './componant/Carouseal_2';
import Common_Disease from './Disease_type/Common_Disease';
import Cuts_wounds from './Disease_type/Cuts_wounds';
import Skin_burns from './Disease_type/Skin_burns';
import Bits_Stings from './Disease_type/Bits_Stings';
import De_1 from './Disease_type/De_1';
import De_2 from './Disease_type/De_2';
import De_3 from './Disease_type/De_3';
import De_4 from './Disease_type/De_4';
import De_5 from './Disease_type/De_5';
import De_6 from './Disease_type/De_6';
import De_7 from './Disease_type/De_7';
import De_8 from './Disease_type/De_8';
import De_9 from './Disease_type/De_9';
import De_10 from './Disease_type/De_10';
import De_11 from './Disease_type/De_11';
import De_12 from './Disease_type/De_12';
import De_13 from './Disease_type/De_13';
import De_14 from './Disease_type/De_14';
import De_15 from './Disease_type/De_15';
import Form from './Contactus/Form';
import Chatbot_1 from './Contactus/Chatbot_1';
import Privacy_Policy from './Footeritem/Privacy_Policy';










function App() {
  return (
    <div >
      <Router>
    <div>
      <Routes>
        <Route exact path='/' element=<Main/> />
        <Route exact path='/Home' element=<Home/> />
        <Route exact path='/firstaidkit' element=<Firstaidkit/> />
        <Route exact path='/firstaidbasics' element=<Firstaidbasics/> />
        <Route exact path='/Disease' element=<Disease/> />
        <Route exact path='/Aboutus' element=<Aboutus/> />
        <Route exact path='/Contactus' element=<Contactus/> />
        <Route exact path='/Disclaimer' element=<Disclaimer/> />
        <Route exact path='/Lifesavingskill' element=<Lifesavingskill/> />
        <Route exact path='/Emergencycontacts' element=<Emergencycontacts/> />
        <Route exact path='/Do&Dont' element=<Do_donts/> />
        <Route exact path='/Earthquakes' element=<Earthquakes/> />
        <Route exact path='/Cyclone' element=<Cyclone/> />
        <Route exact path='/Floods' element=<Floods/> />
        <Route exact path='/Landslide' element=<Landslide/> />
        <Route exact path='/Tsunami' element=<Tsunami/> />
        <Route exact path='/Fire' element=<Fire/> />
        
        <Route exact path='/Bones_joint' element=<Bones_joint/> />
        <Route exact path='/breathing' element=<Breathing/> />
        <Route exact path='/Infectious_disease' element=<Ifectionusdisease/> />
        <Route exact path='/welcome_first_aid' element=<Carouseal_1/> />
        <Route exact path='/important_first_aid' element=<Carouseal_2/> />
        <Route exact path='/Common_Disease' element=<Common_Disease/> />
        <Route exact path='/Cuts_wounds' element=<Cuts_wounds/> />
        <Route exact path='/Skin_burns' element=<Skin_burns/> />
        <Route exact path='/Bits_Stings' element=<Bits_Stings/> />
        <Route exact path='/de_1' element=<De_1/> />
        <Route exact path='/de_2' element=<De_2/> />
        <Route exact path='/de_3' element=<De_3/> />
        <Route exact path='/de_4' element=<De_4/> />
        <Route exact path='/de_5' element=<De_5/> />
        <Route exact path='/de_6' element=<De_6/> />
        <Route exact path='/de_7' element=<De_7/> />
        <Route exact path='/de_8' element=<De_8/> />
        <Route exact path='/de_9' element=<De_9/> />
        <Route exact path='/de_10' element=<De_10/> />
        <Route exact path='/de_11' element=<De_11/> />
        <Route exact path='/de_12' element=<De_12/> />
        <Route exact path='/de_13' element=<De_13/> />
        <Route exact path='/de_14' element=<De_14/> />
        <Route exact path='/de_15' element=<De_15/> />
       <Route exact path='/form' element=<Form/> />
       <Route exact path='/aa' element=<Chatbot_1/> />
        <Route exact path='Privacy_Policy' element=<Privacy_Policy/> />
      </Routes>
    </div>
  </Router>
    </div>
  );
}

export default App;
