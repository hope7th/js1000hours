<input v-model="message" placeholde="edit me">
<p>Message is :{{message}}</p>


<!-- 其实就是动态绑定了 input 的 value 指向了 messgae 变量，并且在触发 input 事件的时候去动态把 message 设置为目标值，这样实际上就完成了数据双向绑定了，所以说 v-model 实际上就是语法糖。 -->
<input v-bind:value="message" v-on:input="message=$event.target.value">