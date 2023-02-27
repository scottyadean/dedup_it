
/**
 * @todo extend set to include multiple keys to drop by
 * @function deduplicationObject
 * @description remove duplicate items for array of object
 * @param {object} collection user input config object
 * @param {string} unique_key key value string to drop dupliate objects by. 
 * @returns {object} with deduplicated maps removed. 
 */
const deduplicationObject = (collection, unique_key) =>  {
    return Array.from(collection.reduce((m, t) => m.set(t[unique_key], t), new Map()).values());
}


/**
 * @function deduplicationUserConfig
 * @description remove duplicate fields from nested user data object
 * @param {object} userData user input config object
 * @returns {object} userData with deduplicated fields. 
 */
const deduplicationUserConfig = (userData) => {
    let versions = userData.versions;
    for(let i=0; i< versions.length; i++){
        versions[i].objects.forEach((data, idx) => {
            versions[i].objects[idx].fields = deduplicationObject(data.fields, 'name')
        });
    }


    userData.versions = [...versions];

    return userData


}

module.exports = { deduplicationObject, deduplicationUserConfig  }; 