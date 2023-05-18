
//    import style from "./Question.module.css";

   import style from "../SubjectComponent/Subject.module.css";

   import axios from "axios";

   import {useEffect , useState} from "react";

      function Question(){

        const [questions , setQuestions] = useState([]);

         useEffect(() => {

            async function getAllQuestions(){
               const value = await axios.get("http://localhost:3333/question");
                setQuestions(value.data);
            }
            getAllQuestions();
         } ,[])



          return (
              <>
                  <div id={style.displayHeadingBox}> 
                      <h2>Question List</h2>     
                   </div>

                   <div id={style.tableBox}>
                      <table>
                         <thead>
                           <tr>
                               <th id={style.center}>Question Name</th>
                               <th id={style.center}>Option one</th>
                               <th id={style.center}>Option two</th>
                               <th id={style.center}>Option three</th>
                               <th id={style.center}>Option Four</th>
                               <th id={style.center}>Question Answer</th>
                                <th id={style.center}>Subject Name</th>
                            </tr>
                         </thead>
                         <tbody id={style.tbody}>
                             {
                                 questions.map((data,i) => {
                                    return(
                                        <tr key={i}>
                                            <td>{data.question_name}</td>
                                            <td>{data.option_one}</td>
                                            <td>{data.option_two}</td>
                                            <td>{data.option_three}</td>
                                            <td>{data.option_four}</td>
                                            <td>{data.question_answer}</td>
                                            <td>{data.subject_name}</td>
                                        </tr>
                                    );  
                                 })
                             }
                               
                        </tbody>
                      </table>
                   </div>
              </>
          );
      }

      export default Question ;