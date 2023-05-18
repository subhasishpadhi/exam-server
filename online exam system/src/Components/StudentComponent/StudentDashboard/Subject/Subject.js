
   
   import style from "../StudentDashboard.module.css";

     import {useState , useEffect} from "react";
     import axios from "axios";

     import {NavLink} from "react-router-dom";
  

     function Subject(){

          const [allSubject , setAllSubject] = useState([]);

          useEffect(() => {
              async function getAllSubject(){
                  let value = await axios.get("http://localhost:3333/subject");
                  setAllSubject(value.data);
              }
              getAllSubject();
          },[])


         return (
               <>
                  <div id={style.displayBoxHeadingBox}>
                       <h1>Choose Subjects</h1>
                  </div>

                  {
                      allSubject.map((data , i) => {
                          return (
                              <div id={style.displayBoxSubjectBox} key={i}>

                                 <div id={style.subjectText}>
                                     <span>{data.subject_name}</span>
                                 </div>

                                <div id={style.subjectButton}>
                                     <NavLink exact to={`/StudentDashboard/Exam/${data.subject_name}`}> 
                                       <button>Go to Exam</button>
                                     </NavLink>
                                </div>
                           </div>
                          );
                      })
                  }
               </>
         );
     }

    export default Subject;