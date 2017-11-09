# ceshi
这是刚学习前端时写的一个小练习,下面时查看地址：

https://leechao1994.github.io/ceshi/tuxiaobai/
<br>
if(typeof this.sendDataObj.byFields[i].params[0] === 'object'){
                                this.sendDataObj.byFields[i].params = this.sendDataObj.byFields[i].params.map(item =>{
                                    return item.name
                                })
                            }
                            
                            
                            <template>
    <div  :class="['data-list', className]" @click="open" ref="dataList" >
        <div v-if="inputType === 'many'" class="value-item" v-for="(option,index) in value">{{option}}<button ref="button" hidefocus="true" class="icon icon-close" @click="delItem(value,index)"></button></div>
        <div class="keyword-input" :class="{single:inputType === 'single'}">
            <input :style="value.length === 0 && inputType === 'many'?'width:110px':''" type="text" ref="input"   @blur="close" @focus="open"  @keyup.enter="addItem" @keyup.down="readySelectDown" @keyup.up="readySelectUp" @keyup.delete="deleteSelect"
                   v-model="keyword" maxlength="20" autocomplete="off" aria-autocomplete="none">
            <ul class="options" v-if="visualMode && filteredOptions.length > 0">
                <li ref="option" v-for="(item,index) of filteredOptions" :class="{selectedOption:readySelectIdx === index}"  @mousedown.stop="toggleCheck(item)" v-model="filterItem">{{item.name}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
    import filterArrayByName from '../utils/filterArrayByName'
    export default {
        props:{
            options:{
                type: Array,
                required: true
            },
            //class名,修改样式使用
            className: {
                type: String,
                default: ''
            },
            value: {
                type: Array,
                required: true
            },
            inputType:{
                type:String,
                default:'many'   //single  many
            }
        },
        data(){
            return{
                keyword:'',
                filterItem:'',
                visualMode:false,
                readySelectIdx:0,
                deleteIdx:0,
                doneIdx:0
            }
        },
        computed:{
            //查找匹配的选项
            filteredOptions() {
                if(this.inputType === 'many'){
                    let arr = filterArrayByName(this.options, this.keyword);
                    this.value.forEach(item =>{
                        arr = arr.filter(x=>{
                            return x !== item
                        })
                    });
                    if(arr.length === 0){
                        this.visualMode = false;
                        this.doneIdx = 1;
                    }
                    return arr
                }else {
//                    if(filterArrayByName(this.options, this.keyword).length === 0){
//                        this.doneIdx = 1;
//                    }
                    return filterArrayByName(this.options,this.keyword)
                }

            },

        },
        methods:{
            //增加选项
            addItem(){
                //首位做去空格处理
                function trim(str) {
                    return str.replace(/(^\s*)|(\s*$)/g,'');
                }
                if(this.filteredOptions.length>0 || this.keyword !== ''){
                    //可以多选的情况
                    if(this.inputType === 'many'){
                        //根据下拉列表是否展开来判断是从列表中取值还是取input中的值
                        if(this.visualMode){
                            this.value.push(
                                this.filteredOptions[this.readySelectIdx]
                            )
                        }else {
                            if(trim(this.keyword) !== ''){
                                if(this.value.length>0){
                                    let _this = this;
                                    function check() {
                                        for(let i=0;i<_this.value.length;i++){
                                            if(_this.value[i] === _this.keyword){
                                                return i
                                            }
                                        }
                                    }
                                    if(check() === undefined){
                                        this.value.push(trim(this.keyword)
                                        )
                                    }
                                }else {
                                    this.value.push(trim(this.keyword)
                                    )
                                }
                                }

                            }
                        this.keyword = '';
                    }

                    //这是单选的情况
                    if(this.inputType === 'single') {
                        if(this.value.length<1){
                            this.value.push(this.keyword
                            );
                        }else {
                            this.value.splice(0,1,trim(this.keyword))
                        }

                    }
                }
                this.readySelectIdx = 0;
                this.doneIdx = 0 ;
            },

            //删除存在的选项
            delItem(list,index){
                list.splice(index,1);
                this.$refs.input.focus();

            },

            //点击选择下拉选项
            toggleCheck(item){
                this.keyword = item;
                this.addItem();
            },

            //展开下拉选项列表
            open(){
                this.visualMode = true;
            },

            //关闭下拉选项列表
            close(){
                this.visualMode = false;
                this.addItem();
            },

            //点击键盘向下按键
            readySelectDown(){
                this.readySelectIdx++;
                if(this.readySelectIdx === this.filteredOptions.length){
                    this.readySelectIdx = 0;
                }
            },

            //点击键盘向上按键
            readySelectUp(){
                this.readySelectIdx--;
                if(this.readySelectIdx === -1){
                    this.readySelectIdx = this.filteredOptions.length -1;
                }
            },

            //删除已选中的选项（delete按键）
            deleteSelect(e){
                if(!e.isComposing && this.value.length>0){
                        if(this.deleteIdx === 1 && this.keyword === ''){
                            this.value.pop();
                        }
                        this.deleteIdx = 1;


                }else {
                    this.deleteIdx = 0;
                }
            }
        }
    }

</script>
<style lang="scss" type="text/scss" rel="stylesheet/scss" scoped>
    .data-list{
        display: inline-flex;
        min-width: 120px;
        margin: 0 5px 5px 0;
        min-height: 27px;
        flex-wrap:wrap;
        border: 1px solid #cacdd1;
        border-radius: 3px;
        align-items: center;
        padding-left: 8px;
        cursor: text;
        padding-bottom: 5px;
        vertical-align: top;
        &.data-analysis{
            .value-item{
                background-color: #f3fcfb;
                border-color: #0cc2a9;
                color: #0cc2a9;
                button{
                    color: #0cc2a9;
                    background-color: #f3fcfb;
                }
                &:hover{
                    background-color: #c5f5ed;
                    button{
                        background-color: #c5f5ed;
                        color: #0cc2a9;
                        &:hover{
                            background-color: #ef6266;
                            color: white;
                        }
                    }
                }
            }
        }
        .keyword-input{
            position: relative;
            &.single{
                input{
                    width: 150px;
                }
                .options{
                    width: 160px;
                }
            }
            input{
                width: 50px;
                height: 80%;
                border: 1px solid transparent;
                background-color: inherit;
            }
            .options{
                position: absolute;
                top: 26px;
                left: -9px;
                width: 128px;
                z-index: 3;
                background-color: white;
                border: 1px solid #e0e0e0;
                text-indent: 1em;
                li{
                    padding: 7px 0;
                    cursor: pointer;
                    &:hover{
                        background-color: #f0f0f0;
                    }
                    &.selectedOption{
                        background-color: #f0f0f0;
                    }
                }
            }
        }
        .value-item{
            border: 1px solid #745ec5;
            margin-right: 10px;
            margin-top: 5px;
            padding-left: 5px;
            border-radius: 3px;
            cursor: pointer;
            transition: all .5s;
            button{
                padding:0 3px;
                cursor: pointer;
                border: 1px solid transparent;
                line-height: 18px;
                transition: all .5s;
                border-bottom-right-radius: 3px;
                border-top-right-radius: 3px;
                background-color: inherit;
                color: #d5ceee;
            }
        }
    }

</style>
