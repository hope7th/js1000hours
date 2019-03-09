function Container() {
    var store = [];
    return {
        getItem:function (index) {
            return store[index]
        },
        addItem:function (obj) {
            var index = store.push(obj);
            //push并返回新的长度
            return index -1
        },
        length:function () {
            return store.length;
        }
    }
}

var c = Container();
console.log(c.length());
var index1 = c.addItem({name:"feipeng"});
console.log(index1);
console.log(c.length());
console.log(c.getItem(index1));
//js一切都是对象