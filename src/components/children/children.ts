import './children.scss';
import { Vue,Component,Emit,Prop} from 'vue-property-decorator';
const template = require('./children.html');
@Component({
    template:template
})
export default class Children extends Vue{
    @Prop() private message!: string;
    private msg:string = "这是孩子组件";
    @Emit()
    private emitClick():string{
        return '这是emit出来的东西';
    }
    private mounted():void{
        console.log('我是uuu赵翔');
    }
}