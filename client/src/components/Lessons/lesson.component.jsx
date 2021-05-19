import React from 'react'
import {  Link } from 'react-router-dom';
import '../Lessons/lessons.css'

function Lesson(props) {
  const {lesson, onAdd} = props
  // const token = useState(localStorage.getItem("token"));
  // const [lesson, setLesson] = useState([])

  // const getLesson = async () =>{
  //   const data = await axios.get('http://localhost:8000/class')
  //   console.log(data)
  //   //setUser(data.data)
  //   setLesson(data.data)
  // }

  // useEffect(() => {
  //   getLesson()
  // }, [])


  return (
    <div className="Lesson">

          {/* {`Lessons: ${lesson}`} */}
        <div className="lessons">
          
        {lesson.map(l =>{
            return <>
             <div className="lessonBox">
              <button className="lessonBoxBtn" onClick={() => onAdd(l)}><i class="heart icon"></i></button>
              <h4>{l.name}</h4>
              <p>{l.description}</p>
              
            </div> 
              {/* <input type="button">Add to Favorites</input> */}
          </>
        })}

        </div>

        <div>
          <Link to="/favorites">Favorites</Link>
        </div>
      
    </div>
  );
}

export default Lesson;

// import React from 'react'
// import { Button } from 'semantic-ui-react'

// const ButtonExampleButton = () => <Button>Click Here</Button>

// export default ButtonExampleButton
