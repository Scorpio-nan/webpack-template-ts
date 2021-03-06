interface Config{
    type:string,
    expires?:number
}
export default{
    setCookie(name:string,value:any,obj:any){//设置cookie
        let config:Config = {
            type:"天"
        }
        if(obj){
            Object.assign(config,obj);
        }
        let oDate = new Date();
        let expires = null;
        if(config.expires){
            if(config.type){
                switch (config.type){
                    case '秒':
                        oDate.setSeconds(oDate.getSeconds() + config.expires)
                        expires = oDate.toUTCString();
                    break;
                    case '分':
                        oDate.setMinutes(oDate.getMinutes() + config.expires)
                        expires = oDate.toUTCString();
                    break;
                    case '时':
                        oDate.setHours(oDate.getHours() + config.expires)
                        expires = oDate.toUTCString();
                    break;
                    case '天':
                        oDate.setDate(oDate.getDate() + config.expires);
                        expires = oDate.toUTCString();
                    break;
                    case '月':
                        oDate.setMonth(oDate.getMonth() + config.expires);
                        expires = oDate.toUTCString();
                    break;
                    case '年':
                        oDate.setFullYear(oDate.getFullYear() + config.expires);
                        expires = oDate.toUTCString();
                    break;
                    default:
                        oDate.setDate(oDate.getDate() + config.expires);
                        expires = oDate.toUTCString();
                    break;
                }
            }else{
                oDate.setDate(oDate.getDate() + config.expires);
                expires = oDate.toUTCString();
            }
        }else{
            oDate.setDate(oDate.getDate() + 1);
            expires = oDate.toUTCString();
        }
        document.cookie = name + "=" + encodeURIComponent(value) + ";expires=" + expires;
    },
    getCookie(key:string){//获取cookie
        let str = document.cookie.replace(/;\s*/,';');
        if(str){
            let cookieArr = str.split(';');
            let cookieObj:any = {};
            let len = cookieArr.length;
            for(let i = 0; i < len;i++){
                let data = cookieArr[i];
                let k = data.split('=')[0].trim();
                let v = data.split('=')[1].trim();
                cookieObj[k] = v;
            }
            if(cookieObj[key]){
                return decodeURIComponent(cookieObj[key]);
            }else{
                return false;
            }
        }else{
            return false;
        }
    },
    removeCookie(key:string){//删除cookie
        document.cookie = key + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}