import React from 'react'
import teacherStudent from "./teacher+student.jpg"
import './Main.css'

function MainContent() {
    return (
        <div>
            <div className="main">
                
                <img src={teacherStudent} alt="main" />

                <div className="mainText">
                    <h1>Our goal is to connect between students and teachers</h1>
                    {/* <h1>here to help you acheive your goals</h1> */}
                </div>

                {/* <div id="cf2" class="shadow">
                    <img src={teacher1} alt="main" />  
                    <img src={teacher2} alt="main" />  
                </div> */}

            </div>
        
        </div>
    )
}

export default MainContent
