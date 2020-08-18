import '../../main';
import './index.scss';
import {Vue,Component,Watch } from 'vue-property-decorator';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import cookie from '../../assets/ts/cookie';
console.log('自己封装的cookie',cookie);
console.log('jquery',$);
enum Color{Red = 1,Green,Blue};
@Component
class App extends Vue{
    private msg:string = 'hello world!';
    private myNumber:number = 199;
    private state:number = Color.Red;
    private async getcode():Promise<void>{
        let last = await axios.get('/static/json/urls.json');
        console.log(last);
    }
    private clickMe():void{
        let number:number = Math.floor(Math.random()*10 + 1);
        this.msg = 'hello world' + number;
    }
    private add(num1:number,num2:number):number{
        return this.myNumber + num1 + num2;
    }
    @Watch('msg')
    private watchMsg(newVal:string,oldVal:string):void{
        if(newVal){
            console.log('这是新值',newVal);
        }
    }
    private mounted():void{
        this.getcode();
        console.log(this.add(1,2));
    }
}
Vue.config.productionTip = false;
let app = new App({el:'#app'});

