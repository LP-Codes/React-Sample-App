import React, { useState } from 'react'
import Course from "./Course"

function Allcourses() {

    const [courses, setcourses] = useState([
        { title: "SampleProp fromallcourses1", description: "Sample Description2 from prop" },
        { title: "SampleProp fromallcourses2", description: "Sample Description2 from prop" },
        { title: "SampleProp fromallcourses3", description: "Sample Description2 from prop" }
    ])
    return (
        <div className='text-center'>
            <h1>All props</h1>

         {
             courses.length>0?courses.map((x) => <Course lpprop={x}></Course>):"Nothing"
             
             
         }


        </div>
    )
}

export default Allcourses
