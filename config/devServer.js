let fs = require('fs');
let path = require('path');
let testData = 
`{
    "data": [
        {
            "name": "URL",
            "value": "/api"
        }
    ]
}
`
fs.writeFileSync(path.resolve(__dirname,'../static/json/urls.json'),testData);
