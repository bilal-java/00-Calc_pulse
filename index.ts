import inquirer from "inquirer";//inquirer allows you to ask multiple questions or simply interact with user
import chalk from "chalk";
import chalkAnimations from "chalk-animation";

// Animations for message:
const sleep=()=>{
  return new Promise((resolve)=>{
    setTimeout(resolve,2000)
})
}

async function welcome(){
 let rainbowTitle=chalkAnimations.rainbow("Let's start Calculation");
 await sleep(); //sleep is asynchronous function
 rainbowTitle.stop();//stop after 2 sec
 console.log(`          
  _____________________
 |  _________________  |
 | | JO           0. | |
 | |_________________| |
 |  ___ ___ ___   ___  |
 | | 7 | 8 | 9 | | + | |
 | |___|___|___| |___| |
 | | 4 | 5 | 6 | | - | |
 | |___|___|___| |___| |
 | | 1 | 2 | 3 | | x | |
 | |___|___|___| |___| |
 | | . | 0 | = | | / | |
 | |___|___|___| |___| |
 |_____________________|`);
};
 await welcome();

async function askQuestion(){
 const answers=await inquirer.prompt([ 
    {
     type: "list",
     name:"operator",
     message:"Select operation you want to perform?\n",
     choices:["Addition","Subtraction","Division","Multiplication"]
     },
    {
   type: "number",
   name:"num1",
   message:"Enter number 1:" 
  },

 { 
  type: "number",
  name:"num2",
  message:"Enter number 2:" 
 }
  ]);

    if(answers.operator=="Addition"){
     console.log(chalk.bgGreen(`${answers.num1}+${answers.num2}=${answers.num1+answers.num2}`));
    }else if(answers.operator=="Subtraction"){
     console.log(chalk.bgGreen(`${answers.num1}-${answers.num2}=${answers.num1-answers.num2}`));
     }
     else if(answers.operator=="Division"){
      console.log(chalk.bgGreen(`${answers.num1}/${answers.num2}=${answers.num1/answers.num2}`));}
      else if(answers.operator=="Multiplication"){
        console.log(chalk.bgGreen(`${answers.num1}*${answers.num2}=${answers.num1*answers.num2}`));}
        
  } ;


// askQuestion();
 
// askQuestion to continue or not
async function startAgain(){
   do{
     await askQuestion();
    var again=await inquirer.prompt({
      type:"input",  
      name:"restart",
      message:"Do you want to continue? Press y or n:",
     });
   }
   while(again.restart=="y"||again.restart=="Y"||again.restart=="yes"||again.restart=="YES")}
 
  startAgain();
