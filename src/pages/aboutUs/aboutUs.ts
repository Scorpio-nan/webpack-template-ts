import '../../main';
import './aboutUs.scss';
import { Vue,Component } from 'vue-property-decorator';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
@Component
class App extends Vue{
    private msg:string = '这是关于我们页面!';
    private async getcode():Promise<void>{
        let last = await axios.get('/static/json/urls.json');
        console.log(last);
    }
    private judge(val:string):boolean{
        let arr:string[] = ['北京','天津','济南','青岛'];
        let obj = {
            a:1,
            b:2
        }
        let obj2 = {
            c:3,
            d:4
        }
        Object.assign(obj,obj2);
        console.log(obj);
        return arr.includes(val);
    }
    private mounted():void{
        this.getcode();
        console.log(this.judge('北京'));
    }
}
Vue.config.productionTip = false;
let app = new App({el:'#app'});

