//数字转化为中文
function toChineseNum(num) {
    num += "";
    let numLength = num.length;
    let numStr = "零一二三四五六七八九";
    let unitArr = ['', '十', '百', '千', '万'];

    function getResult(str) {
        let res = '';
        if (str.length > 5) {
            let first = str.slice(-5);
            let second = str.slice(0, str.length - 5);
            for (let i in second)  {
                res = res + numStr[second[i]] + unitArr[second.length - 1];
            }

            for (let i in first) {
                res = res + numStr[first[i]] + unitArr[first.length - i - 1];
            }
        } else {
            let first = str.slice(-5);
            for (let i in first) {
                res = res + numStr[first[i]] + unitArr[first.length - i - 1];
            }
        }

        res = res.replace(/零[零十百千]+/g,'零').replace(/零+$/g, '').replace(/零万/g, '万');
        return res;
    }

    if (numLength > 8) {
        return getResult(num.slice(0, numLength - 8)) + '亿' + getResult(num.slice(-8))
      } 

}

console.log(toChineseNum(1000005600454456))