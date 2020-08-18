export default{
    //数组去重复
    duplicate(arr:any,type:string):any{
        var newArr = [];
        var tArr = [];
        if(arr.length == 0){
            return arr;
        }else{
            if(type){
                for(var i = 0; i < arr.length;i++){
                    if(!tArr[arr[i][type]]){
                        newArr.push(arr[i]);
                        tArr[arr[i][type]] = true;
                    }
                }
                return newArr;
            }else{
                for(var i = 0; i < arr.length;i++){
                    if(!tArr[arr[i]]){
                        newArr.push(arr[i]);
                        tArr[arr[i]] = true;
                    }
                }
                return newArr;
            }
        }
    },
    //获取地址栏上的参数，形成对象的形式返回
    GetUrlParams(URL:string):any{
        let url = URL?URL:document.location.toString();
        let arrObj = url.split("?");
        let params = Object.create(null);
        if(arrObj.length > 1){
            arrObj = arrObj[1].split("&");
            arrObj.forEach((item:any) => {
                item = item.split("=");
                params[item[0]] = item[1]
            })
        }
        return params;
    }, 
    //同步请求url，只用于请求urls.json使用
    get(url:string){
        var xmlhttp:any;
        var data = {};
        if (window.XMLHttpRequest){
            //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
            xmlhttp=new XMLHttpRequest();
        }else
        {
            // IE6, IE5 浏览器执行代码
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.open('get',url,false);
        xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        // 4.监听状态的变化
        xmlhttp.onreadystatechange = function():void{
            if(xmlhttp.readyState === 4){
                if(xmlhttp.status >= 200 && xmlhttp.status < 300 ||
                    xmlhttp.status === 304){
                    data = {
                        data:JSON.parse(xmlhttp.responseText),
                        status:xmlhttp.status
                    } 
                }else{
                    data = {
                        data:JSON.parse(xmlhttp.responseText),
                        status:xmlhttp.status
                    }
                }
            }
        }
        xmlhttp.send();
        return data;
    },
    //动态往head里加link标签
    putcss(url:string):void{
        let link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = url;
        document.querySelector('head').appendChild(link);
    },
    //动态往head里加js标签
    putJs(url:string):void{
        let script = document.createElement('script');
        script.src = url;
        document.querySelector('head').appendChild(script);
    },
    //根据不同页面按需加载arcgis的css
    putArcgisCss(arr:string[],url:string):void{
        let href = window.location;
        let pathname = href.pathname;
        let a = pathname.lastIndexOf('/');
        let name = pathname.substr(a+1);
        let nameArr = name.split('.');
        let pageName = nameArr[0];
        if(pageName == ''){
            pageName = 'index';
        }
        let myArr = arr.filter(item => item == pageName);
        if(myArr.length > 0){
            let link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = url;
            document.querySelector('head').appendChild(link);
        }
    },
    //格式化日期
    dateFormater(formater:any,t:any):any{
        let date = t?new Date(t):new Date();
        let Y = date.getFullYear() + '';
        let M = date.getMonth() + 1;
        let D = date.getDate();
        let H = date.getHours();
        let m = date.getMinutes();
        let s = date.getMinutes();
        console.log(Y);
        console.log(Y.substr(2,2));
        return formater.replace(/YYYY|yyyy/g,Y)
        .replace(/YY|yy/g,Y.substr(2,2))
        .replace(/MM/g,(M<10?'0':'') + M)
        .replace(/DD/g,(D<10?'0':'') + D)
        .replace(/HH|hh/g,(H<10?'0':'') + H)
        .replace(/mm/g,(m<10?'0':'') + m)
        .replace(/ss/g,(s<10?'0':'') + s)
    },
    //返回范围随机数
    random(lower:any,upper:any):number{
        lower = +lower || 0
        upper = +upper || 0
        return Math.random()*(upper - lower) + lower;
    }   
}