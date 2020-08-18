let fs = require('fs');
let path = require('path');
let testData = 
`{
    "data": [
        {
            "name": "URL",
            "value": "http://mds.nmdis.org.cn/service"
        }
    ]
}
`
fs.writeFileSync(path.resolve(__dirname,'../static/json/urls.json'),testData);