## Remove Duplicates Application Schema
Example of removing duplicate objects from a js object. 

## Setting up Env. 
 - npm install
 - [nvm install](https://github.com/nvm-sh/nvm)
 - note: you may want to install nvm to update your env to long term support version
```
# example of using long term support version of node. 
nvm install --lts
nvm use --lts
```

## Running Tests 
npx jest ./tests/test.js --watch

## Running Serverless
you can run the sample with sls to invoke the offline sls plug-in run the shell script provided in the project
this will provide an endpoint for you to test the deduplated user config on. 
GET | http://localhost:5000/local/user/config/dedup
curl --location 'http://localhost:5000/local/user/config/dedup'

```
./serverless_offline.sh
```
### Deployment
In order to deploy the example, you need to run the following command:
``` $ serverless deploy ```

### Who do I talk to:
- Scott Dean
