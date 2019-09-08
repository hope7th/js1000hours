export default {
    data () {
       return {
           msg:"hello mixin"
       }
     },
     mounted(){
         alert(this.msg)
     },
     methods:{
         testMessage(){
             alert("hello test")
         }
     }
}