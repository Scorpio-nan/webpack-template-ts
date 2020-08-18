const fs = require('fs');
const path = require('path');
function readDir(url){
    return fs.readdirSync(path.resolve(__dirname,url));
}
const files = readDir('../src/pages').filter(item => item != 'include');
let htmlArray = [];
let entries = {};
files.forEach(item => {
    let result = readDir(`../src/pages/${item}`);
    result.forEach(val => {
        let extname = path.extname(val).slice(1);
        switch(extname){
            case 'html':
            if(val == 'index.html'){
                htmlArray.push({
                    template:path.resolve(__dirname,`../src/pages/${item}/${val}`),
                    filename:`${val}`,
                    chunks:result.length == 3?[val.split('.')[0]]:[],
                    minify:{
                        removeAttributeQuotes:true,//删除html属性的双引号
                        collapseWhitespace:true,//折叠空行，把所有的html折叠成一行
                    }
                });
            }else{
                htmlArray.push({
                    template:path.resolve(__dirname,`../src/pages/${item}/${val}`),
                    filename:`pages/${item}/${val}`,
                    chunks:result.length == 3?[val.split('.')[0]]:[],
                    minify:{
                        removeAttributeQuotes:true,//删除html属性的双引号
                        collapseWhitespace:true,//折叠空行，把所有的html折叠成一行
                    }
                });
            }
            break;
            case 'ts':
            entries[val.split('.')[0]] = path.resolve(__dirname,`../src/pages/${item}/${val}`);
            break;
        }
    })
});
module.exports = {
    entries,
    htmlArray
}
