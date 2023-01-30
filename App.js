import { Student } from "./Student";

import React from "react";

 

let arr=[

  { id:1,name:"geethika",marks:97},

  { id:2,name:"jyotika",marks:98},

  { id:3,name:"pramila",marks:93},

  { id:4,name:"sravani",marks:92},

  { id:5,name:"tabu",marks:99},

  { id:6,name:"sowmya",marks:97},

  { id:7,name:"navya",marks:79},

  { id:8,name:"devi",marks:100},

  { id:9,name:"snehaja",marks:90},

  { id:10,name:"durga",marks:96}

 

]

function App(){

   

    return(

      <div>

        <h1>Students</h1>

         {

          arr.map((student)=>{

            return <Student {...student} key={student.id}/>

          })

         }

      </div>

    )

  }

 

  export default App;