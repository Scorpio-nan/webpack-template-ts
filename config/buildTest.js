let fs = require('fs');
let path = require('path');
let testData = 
`{
    "data": [
        {
            "name": "URL",
            "value": "http://58.56.42.50:6101/service"
        }
    ]
}
`
fs.writeFileSync(path.resolve(__dirname,'../static/json/urls.json'),testData);
