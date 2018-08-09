//不包含任何成员的集合称为空集，全集则是包含一切可能成员的集合。
//如果两个集合的成员完全相同，则称两个集合相等。
//如果一个集合中所有的成员都属于另外一个集合，则前一集合称为后一集合的子集。

function Set() {
    this.dataStore = [];
    this.add = add;
    this.remove = remove;
    this.show = show;
    this.contains = contains;
    this.union = union;
    this.intersect = intersect;
    this.subset = subset;
    this.size = size;
    this.difference = difference;
    function intersect(set) {
        var tmpSet = new Set();
        for (var i=0;i<this.dataStore.length;++i){
            if (set.contains(this.dataStore[i])){
                tmpSet.add(this.dataStore[i]);
            }
        }
        return tmpSet;
    }

    function add(data) {
        if(this.dataStore.indexOf(data)<0){
            this.dataStore.push(data);
            return true;
        }
        else {
            return false;
        }
    }

    function contains(data) {
        if(this.dataStore.indexOf(data)>-1){
            return true
        }else {
            return false
        }
    }

    function union(set) {
        var tmpSet = new Set();
        for (var i=0;i<this.dataStore.length;++i){
            tmpSet.add(this.dataStore[i])
        }
        for (var i=0;i<set.dataStore.length;++i){
            tmpSet.dataStore.push(set.dataStore[i])
        }
        return tmpSet
    }
    function remove(data) {
        var pos = this.dataStore.indexOf(data);
        if (pos>-1){
            this.dataStore.splice(pos,1);
            return true;
        } else {
            return false
        }

    }
    function subset(set) {
        if(this.size()>set.size()){
            return false;
        }else {
            for (let member of this.dataStore){
                if(!set.contains(member)){
                    console.log('member'+member);
                    return false;
                }
            }
        }
        return true;
    }

    function size() {
        return this.dataStore.length;
    }

    function show() {
        return this.dataStore;
    }
    function difference(set) {
        var tempset =new Set();
        for(var i=0;i<this.dataStore.length;++i){
            if(!set.contains(this.dataStore[i])){
                tempset.add(this.dataStore[i]);
            }
        }
        return tempset;
    }
}

var names = new Set();
names.add('David');
console.info(names.show());
names.add('Jennifer');
names.add('Cynthia');
names.add('Mike');
names.add('Raymond');

if(names.add('Mike')){
    console.log('Mike added')
}else {
    console.log("cann't add Mike.must already be in set")
}
console.log(names.show());
var removed = 'Mike';

if (names.remove(removed)){
    console.log(removed + 'removed.')
} else {
    console.log(removed + "not removed.");
}

names.add('Clayon');
console.log(names.show());

removed = "Alisa";
if (names.remove(removed)){
    console.log(removed + "removed.")
} else {
    console.log(removed + "not removed");
}

var cis = new Set();
cis.add('Mike');
cis.add('Clayton');
cis.add("Jennifer");
cis.add("Raymond");
var dmp = new Set();
dmp.add("Raymond");
dmp.add("Cynthia");
dmp.add("Jonathan");
var it = new Set();
it = cis.union(dmp);
console.info(it.show()); // 显示 Mike,Clayton,Jennifer,Raymond,Cynthia,Jonathan
var inter = cis.intersect(dmp);
// console.log('intersect')
console.info(inter.show());

//子集
var it = new Set();
it.add("Cynthia");
it.add("Clayton");
it.add("Jennifer");
it.add("Danny");
it.add("Jonathan");
it.add("Terrill");
it.add("Raymond");
it.add("Mike");
var dmp = new Set();
dmp.add("Cynthia");
dmp.add("Raymond");
dmp.add("Jonathan");
if (dmp.subset(it)) {
    console.log("DMP is a subset of IT.");
} else {
    console.log(it.dataStore);
    console.log(dmp.dataStore);
    console.log("DMP is not a subset of IT.");
}

//补集
var cis = new Set();
var it = new Set();
var diff = new Set();
cis.add("Clayton");
cis.add("Jennifer");
cis.add("Danny");
it.add("Bryan");
it.add("Clayton");
it.add("Jennifer");
diff = cis.difference(it);
console.log("[" + cis.show() + "] difference [" + it.show() + "] -> [" + diff.show() + "]");






