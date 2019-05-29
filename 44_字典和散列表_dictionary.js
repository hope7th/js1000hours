//dictionary
import linklist from './41_链表_link'

function Dictionary() {
    var items = {};
    this.has = function (key) {
        return items.hasOwnProperty(key)
    };
    this.set = function (key,value) {
        items[key] = value
    };
    this.delete = function (key) {
        if (this.has(key)) {
            delete items[key]
            return true;
        }
        return false;
    };
    this.get=function (key) {
        return this.has(key)?items[key]:undefined
    };
    this.values = function () {
        var values = [];
        for (var k in items){
            if (this.has(k)){
                values.push(items[k])
            }
        }
        return values;
    };
    this.keys = function () {
        return Object.keys(items)
    }
}

var loseloseHashCode = function (key) {
    var hash = 0;
    for (var i=0;i<key.length;i++){
        hash += key.charCodeAt(i)
    }
    return hash % 37
}
//散列表。主要是散列函数,用数组来实现
//解决散列冲突，分离联表法
function HashTable() {
    var table = [];
    this.put = function (key,value) {
        var position = loseloseHashCode(key);
        console.log(position+'--'+key);
        // table[position] = value;
        if (table[position]==undefined){
            table[position] = new linklist()
        }

        table[position].append(new ValuePair(key,value))
    };
    this.get = function (key) {
        var position = loseloseHashCode(key);
        if (table[position]!==undefined){
            var current = table[position].getHead();
            while (current.next){
                if (current.element.key===key){
                    return current.element.value
                }
                current = current.next;
            }
            if (current.element.key === key){
                return current.element.value
            }
            return undefined;
        }
      // return table[loseloseHashCode(key)]
    };
    this.remove = function (key) {
        var position = loseloseHashCode(key)
        if (table[position]!==undefined){
            var current = table[position].getHead();
            while (current.next){
                if (current.element.key === key){
                    table[position].remove(current.element);
                    if (table[position].isEmpty()){
                        table[position] = undefined
                    }
                    return true
                }
                current = current.next;
            }

            if (current.element.key===key){
                table[position].remove(current.element)
                if (table[position].isEmpty()){
                    table[position]=undefined
                };
                return true;
            }
        }
        return false;

      // table[loseloseHashCode(key)] = undefined
    };

}

var ValuePair = function (key,value) {
    this.key = key;
    this.value = value;
    this.toString = function () {
        return '['+this.key+'-'+this.value+']'
    }
};

//

var hash = new HashTable();
hash.put('Gandalf','gandalf@email.com');
hash.put('John','john@email.com');
hash.put('Tyrion','tyrion@email.com');
console.log(hash.get("Gandalf"));
console.log(hash.get("John"));

