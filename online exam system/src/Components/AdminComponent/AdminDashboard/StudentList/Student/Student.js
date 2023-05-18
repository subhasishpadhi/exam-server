
  
  import style from "../../SubjectComponent/Subject.module.css";

  import {useParams , useHistory} from "react-router-dom";
  import React, {useState , useEffect} from "react";
  import axios from "axios";

     function Student(){

         const {id} = useParams();

         const [email , setEmail] = useState();

         const[result , setResult] = useState([]);

         useEffect(() => {
             async function getStudentEmail(){
                 //user whose result we have to fetch
                let value = await axios.get(`http://localhost:3333/user/${id}`);
                 setEmail(value.data.user_email);
                 
             }
             getStudentEmail();
         })


         useEffect(() => {   
             async function getAllResult(){
                let value = await axios.get("http://localhost:3333/result");
                setResult(value.data);
             }
             getAllResult();
        },[])


         const history = useHistory();

        function handleGoBack(){ 
            history.push("/AdminDashboard/StudentList");
        }

         return (
              <>
               <div id={style.displayHeadingBox}> 
                   <h2>Student Exam List</h2>     
                </div>

                <div id={style.tableBox}>
                    <table>
                       <thead>
                          <tr>
                             <th id={style.center}>User Email</th>
                              <th id={style.center}>Exam Name</th>
                              <th id={style.center}>Exam Date</th>
                              <th id={style.center}>Result Status</th>
                              <th id={style.center}>Total Marks</th>
                              <th id={style.center}>Result Score</th>  
                           </tr>
                        </thead>
                        <tbody>
                        {
                                result.map((data , i) => {
                                    if(data.user_email === email)
                                    return(
                                          <tr key={i}>
                                              <td>{data.user_email}</td>
                                              <td>{data.exam_name}</td>
                                              <td>{data.exam_date}</td>
                                              <td>{data.result_status}</td>
                                              <td>{data.result_score}</td>
                                              <td>{data.total_marks}</td>
                                          </tr>
                                    );

                                    return <React.Fragment key={i}></React.Fragment>;
                                })
                            }
                               
                        </tbody>
                     </table>
                </div>

                 <div id={style.addSubjectBox}>
                       <button onClick={handleGoBack}>Go Back</button>
                 </div>
              </>
         );
     }

     export default Student;