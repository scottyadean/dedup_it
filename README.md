## Remove Duplicates Application Schema
Example of removing duplicate objects from a js object. 

## Setting up Env. 
npm install
note: you may want to install nvm to update your env to long term support version
```
nvm install --lts
nvm use --let
```

## Running Tests 
npx jest ./tests/test.js --watch


## Running Serverless
you can run the sample with sls to invoke the offline sls plug-in run the shell script provided in the project
this will provide an endpoint for you to test the deduplated user config on. 
GET | http://localhost:5000/local/user/config/dedup
POST | http://localhost:5000/2015-03-31/functions/function1/invocations 
```
./serverless_offline.sh
```
### Deployment
In order to deploy the example, you need to run the following command:
``` $ serverless deploy ```
