/*
1. make a package.json
-either:
  -create-react-app (if using react)
  -npm init (if not using react)

2. npm i --save-dev eslint
3. node_modules/.bin/eslint --init

Fix package.json to fix errors automatically:  
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "lint-fix": "node_modules/.bin/eslint --fix ./*.js"
  },

Run command to actually fix code automatically:  
 npm run lint-fix
*/
