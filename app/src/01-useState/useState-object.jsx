import { useState } from "react";

const UseStateObject = () => {
  {/*const [name,setName] = useState('Peter');
  const [age,setAge] = useState(33);
  const [hobby,setHobby] = useState('Playing Chess');*/}
  const [person, setPerson] = useState({
    name: 'Peter',
    age: 33,
    hobby: 'playing Chess'
  });

  const handleClick = () => {
    setPerson({ ...person, name: 'Michael'});
  }
  
  return(
  <>
    <h1>{person.name}</h1>
    <h2>{person.age}</h2>
    <h2>Enjoys {person.hobby}</h2>
    <button className="btn" type="button" onClick={handleClick}>Change Me</button>
  </>)
};

export default UseStateObject;
