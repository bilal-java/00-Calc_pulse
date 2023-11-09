# 00-Calc_pulse
1- Make  a folder and open in vs code
2- Open terminal and write these commands one by one 

   a-npm init -y,
   b-npm install typescript,
   c-tsc --init,
   d-tsc -w,
     <!-- dependencies -->
   .npm install inquirer,
   .npm install chalk chalk animations,
   .npm install ts-node,
    <!--  devdependencies -->
   .npm install @types/inquirer _D,
   .npm install @types/chalk -D,
   .npm install @types/chalk-animation -D,
   .npm install @types/node -D(it will add types of nodes and this will become a default node project),
   
3-  Changes needed in tsconfig.json

     line 14: set     "target": "ES2022",
     line 28:  set     "module": "NodeNext",
     line 30:  set     "moduleResolution": "NodeNext",

**Optional Change  if you want to save your.js files in separate folder(anyName)

     line 58:  uncomment "outDir": "./dist",  (and add dist)

4-   Add type in package.json 
   "type":"module";

      
