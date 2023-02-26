import React from "react";
import './App.css';
import IdCard  from './components/IdCard';
import Greetings from "./components/Greetings";
import Random from "./components/Random";

function App() {
  return (
    <div className="App">
      <h1> First Iteration</h1>
      <IdCard 
      firstName = "John"
      lastName = "Doe"
      gender = "Male"
      height = {1.79}
      birth = "1992-07-14"
      picture = {"https://randomuser.me/api/portraits/men/44.jpg"}/>

      <IdCard
      firstName='Obrien'
      lastName='Delores'
      gender='Female'
      height={1.72}
      birth='1988-05-11'
      picture='https://randomuser.me/api/portraits/women/44.jpg'/>
 <h1> Second Iteration</h1>
<Greetings lang="de">Ludwig</Greetings>
            <Greetings lang="fr">François</Greetings>
            <h1> Third Iteration</h1>
            <Random min={1} max={6}/>
              <Random min={1} max={100}/>
    </div>
  );
}



export default App;