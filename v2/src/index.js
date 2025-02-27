import {StrictMode, strictMode} from 'react';
import {createRoot} from 'react-dom/client';
import "./style.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Spring and Spring Boot",
    level: "Intermediate",
    color: "#03C03C",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#BF00FF",
  },
  {
    skill: "Python",
    level: "Intermediate",
    color: "#C71585",
  },
  {
    skill: "Django",
    level: "beginner",
    color: "#5D8AA8",
  },
];

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
     {skills.map(skill=><Skill color={skill.color} skill={skill.skill} level={skill.level}/>)}
    </div>
  );
}

function Skill({color,skill,level}){
  return <div className='skill' style={{backgroundColor:color}}>
  <span>{skill}</span>
  <span>
  {/* using and operator short circuiting */}
    {level==='beginner'&&"🐥"}
    {level==='advanced'&&"💪"}
    {level==='Intermediate'&&"👍"}
  </span>
  </div>
}
const rootElement=document.getElementById('root')
const root=createRoot(rootElement)

root.render(
  <StrictMode>
    <App/>
  </StrictMode>
)