import {StrictMode, strictMode} from 'react';
import {createRoot} from 'react-dom/client';
import "./style.css";

function App(){
  return (
    <div className='card'>
      <Avatar/>
      <div className='data'>
        <Intro/>
      
        <SkillList/>
      </div>

    </div>
  )
}
function Avatar(){
  return (
    <div>
      <img className="avatar" src="images/mypic.jpeg" alt="myimage"></img>
    </div>
  );
}

function Intro(){
  return <div>
    <h1>Saravanan Arumugam</h1>
    <p>Hi I'm full stack developer and Teacher at Systech,
     When i not coding i play video games as well as developing video games(not a professional dev)
     </p>
  </div>
}

function SkillList(){
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="💪" color="#BF00FF" />
      <Skill skill="Javascript" emoji="💪" color="#FFD700" />
      <Skill skill="HTML and CSS" emoji="💪" color="#F94D00" />
      <Skill skill="Java" emoji="😎" color="#FF8000" />
      <Skill skill="Spring and Spring Boot" emoji="👍" color="#03C03C" />
      <Skill skill="Git and GitHub" emoji="👍" color="#FF91AF" />
      <Skill skill="Python" emoji="✌️" color="#C71585" />
      <Skill skill="Django" emoji="🐥" color="#5D8AA8" />
    </div>
  );
}

function Skill(props){
  return <div className='skill' style={{backgroundColor:props.color}}>
  <span>{props.skill}</span>
  <span>{props.emoji}</span>
  </div>
}
const rootElement=document.getElementById('root')
const root=createRoot(rootElement)

root.render(
  <StrictMode>
    <App/>
  </StrictMode>
)