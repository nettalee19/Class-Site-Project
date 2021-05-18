import React, { useEffect, useState } from "react";
import api from "../ApiSource/api";

import "../Lessons/lessons.css";

function Lesson(props) {
  const { favoriteLessons, onRemove, lesson } = props;
  //const {lesson, onRemove} = props
  const [token] = useState(localStorage.getItem("token"));
  const [fav, setFav] = useState([]);
  useEffect(() => {
    const fetchFav = async () => {
      try {
        const { data } = await api("/users/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setFav(data.favorites);
      } catch (e) {
        console.log(e.response);
      }
    };
    if (token) {
      fetchFav();
    }
  }, []);
  const renderFav = fav.map((el) => {
    
    return (
      <div className="FavLessonBox">
        <button onClick={() => onRemove(el.title)}><i class="fas fa-minus-square"></i></button>
        <h4>{el.title}</h4>
        <p>{el.description}</p>
        {/* <button onClick={() => onRemove()}><i class="fas fa-trash"></i></button> */}
      </div>
    );
  });
  return (
    <div className="FavLesson">
      {favoriteLessons.length === 0 && (
        <div>You don't have any favorite lessons</div>
      )}
      {renderFav}

      {/* {favoriteLessons.map((lesson) => {
        return (
          <div className="FavLessonBox">
            <h4>{lesson.name}</h4>
            <p>{lesson.description}</p>
            <button onClick={() => onRemove(lesson)}>Remove</button>
          </div>
        );
      })} */}
    </div>
  );
}

export default Lesson;
