
const userJson = require('./user_input.json');
const {deduplicationUserConfig} = require("./deduplication.js");

/* 
* GET handler method /user/config/dedup
* @returns dedupliated userconfig 
*/
module.exports.handler = async (event) => {

    // parse user data and return deduplicated field names. 
    const userData = deduplicationUserConfig(userJson)
    return {
      statusCode: 200,
      body: JSON.stringify( { results: userData,}, null, 2),
    };
  };