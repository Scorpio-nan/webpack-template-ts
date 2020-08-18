import '../../main';
import './news.scss';
import { Vue,Component } from 'vue-property-decorator';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import Children from '../../components/children/children';
@Component
class App extends Vue{
    private msg:string = '这是新闻页面!';
    private async getcode():Promise<void>{
        let last = await axios.get('/static/json/urls.json');
        console.log(last);
    }
    private clickChild(val:string):void{
        console.log(val);
    }
    private mounted():void{
        this.getcode();
    }
}
Vue.config.productionTip = false;
let app = new App({el:'#app',components:{Children}});

