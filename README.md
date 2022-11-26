//project_calculator class summary
this is physical second class of typescript and we are making calculator 

create new folder (Directory)
open VScode in current folder
npm init -y //Used to initialize new or existing npm package.
tsc --init //To initialize a TypeScript project.
open package.json.
add "type" : "module", in first block of { }, usually at line 6.
now open tsconfig.json.
Note: Line number can be vary

On line no. 14 >>> change "target": "es2016" to "target": "es2022".
On line no. 28 >>> change "module": "commonjs" to "module": "NodeNext".
On line no. 30 >>> change "moduleResolution": "node" to "moduleResolution": "NodeNext".
Goto Terminal in vscode.
npm install inquirer. //Will be use to prompt user.
npm i @types/inquirer -D //Inquirer will be available to be use in TypeScript.
