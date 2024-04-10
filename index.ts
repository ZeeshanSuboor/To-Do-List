#! /usr/bin/env node
let myToDo : string[] = [];
import inquirer from "inquirer"

console.log ("Currently To Do list is empty.");
//console.log (myToDo,"\nDo you want to add an item to your To Do list?");
let flag : boolean = true;

while(flag==true)
{
let addToDo = await inquirer.prompt
([{
name: "operation",
message: "Please select the operation you want to peeform on your To Do List: ",
type: "list",
choices: ["Add Task", "Update Task", "Delete Task", "Exit the Program"]
}])
console.clear();
if (addToDo.operation == "Add Task")
{
        //console.log("Check Point 1");
    addToDo = await inquirer.prompt 
    ([{
name: "newTask",
message: "Please enter new task: ",
type: "input"
    }])
if (addToDo.newTask=="")
    console.log("You cannot enter empty task");
else
    myToDo.push(addToDo.newTask); 
}

if (addToDo.operation == "Delete Task")
    {
            /*console.log("Check Point 1");
        addToDo = await inquirer.prompt 
        ([{
    name: "newTask",
    message: "Please enter new task: ",
    type: "input"
        }])
            myToDo.push(addToDo.newTask); 
    */
   let deleted = myToDo.pop(); 
   console.log(deleted," was deleted from the To Do list");
   }
    
if (addToDo.operation=="Update Task")
    {
        let updateTask = await inquirer.prompt
        (
            [{
                name: "nowUpdate",
                message: "Select Item to update",
                type: "list",
                choices: myToDo.map(item => item),      
            }
            ]
        )
        addToDo = await inquirer.prompt 
        ([{
    name: "newTask",
    message: "Please enter new task to update: ",
    type: "input"
        }])
        var position = myToDo.indexOf(updateTask.nowUpdate);
        console.log(updateTask.nowUpdate, "will be updated with", addToDo.newTask, "at positon", position);
        myToDo[position]=addToDo.newTask;

    }



if (addToDo.operation == "Exit the Program")
    flag=false;

//console.log (myToDo);
let count = 0;
//console.clear();
while (count < myToDo.length)
    {
        console.log((count+1), myToDo[count]);
        count++;
    }
}
