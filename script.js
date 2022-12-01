import  { addTask }  from "./components/addTask.js";
import dateElement from "./components/dateElement.js";
import { displayTask } from "./components/readTasks.js";
const btn = document.querySelector("[data-form-btn]");




//listener
//arrow funtions o funciones anonimas


btn.addEventListener("click", addTask);

displayTask();




