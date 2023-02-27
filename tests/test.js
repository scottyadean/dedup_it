const userJson = require('../user_input.json');
const {deduplicationObject, deduplicationUserConfig} = require("../deduplication.js");

test("can parse user data", () => {
    expect( typeof userJson ).toEqual("object");
});

test("can identify and remove duplicate keys by name ", () => {

    const fields = [      {
        type: 'auto_increment',
        required: false,
        unique: false,
        user: false,
        conditional: false,
        rules: [],
        validation: [],
        _id: '61e869d51137bc002545fedf',
        name: 'Product ID',
        key: 'field_2'
      },
      {
        type: 'auto_increment',
        required: false,
        unique: false,
        user: false,
        conditional: false,
        rules: [],
        validation: [],
        _id: '61e869d51137bc002545fedf',
        name: 'Product ID',
        key: 'field_2'
      },
      {
        type: 'paragraph_text',
        required: false,
        unique: false,
        user: false,
        conditional: false,
        rules: [],
        validation: [],
        _id: '61e869d51137bc002545fee1',
        name: 'Description',
        key: 'field_4'
      },
      {
        type: 'paragraph_text',
        required: false,
        unique: false,
        user: false,
        conditional: false,
        rules: [],
        validation: [],
        _id: '61e869d51137bc002545fee2',
        name: 'Description',
        key: 'field_4'
      },];
    

    expect( fields.length ).toEqual(4);
    const dedup =  deduplicationObject(fields, 'name');
    expect( dedup.length ).toEqual(2);
    
});


test("can loop over user input and remove duplicate objects", () => { 
    let userData = deduplicationUserConfig( userJson );
    let userFields =  userData.versions[0].objects[0].fields;
    expect( userFields.length ).toEqual(6);
});

