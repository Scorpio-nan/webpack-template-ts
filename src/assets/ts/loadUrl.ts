import utils from './utils';
let last:any = utils.get('/static/json/urls.json');
let urls:any = last.data.data;
urls.forEach((item:any) => {
    Object.defineProperty(window,item.name,{
        value: item.value,
        writable: false,
        enumerable: false,
        configurable: false
    });
});