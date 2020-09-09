function getStyle(element) {
    if (!element.style) {
        element.style = {};
    }

    for (let prop in element.computedStyle) {
        var p = element.computedStyle.value;
        element.style[prop] = element.computedStyle[prop].value;

        if (element.style[prop].toString().match(/px&/)) {
            element.style[prop] = parseInt(element.style[prop]);
        }

        if (element.style[prop].toString().match(/^[0-9\.]+$/)) {
            element.style[prop] = parseInt(element.style[prop])
        }
    }
    return element.style;
}

function layout(element) {
    if (!element.computedStyle)
        return;
    var elementStyle = getStyle(element);
    if (elementStyle.display !== "flex")
        return;

    //过滤文本节点
    var items = element.children.filter(e => e.type === "element");

    items.sort(function (a, b) {
        return (a.order || 0) - (b.order || 0);
    })

    var style = elementStyle;
    ['width', 'height'].forEach(size => {
        if (style[size] === "auto" || style[size] === "") {
            style[size] = null;
        }
    })

    if (!style.flexDirection || style.flexDirection === "auto")
        style.flexDirection = 'row';
    if (!style.alignItems || style.alignItems === "suto")
        style.alignItems = 'stretch';
    if (!style.justfyContent || style.justfyContent === "auto")
        style.justfyContent = 'flex-start';
    if (!style.flexWrap || style.flexWrap === "auto")
        style.flexWrap = 'nowrap';
    if (!style.alignContent || style.alignContent === 'auto')
        style.alignContent = 'stretch';

    var mainSize, mainStart, mainEnd, mainSign, mainBase,
        crossSize, crossStart, crossEnd, crossSign, crossBase;
    if (style.flexDirection === 'row') {
        mainSize = 'width';
        mainStart = 'left';
        mainEnd = 'right';
        mainSign = +1;
        mainBase = 0;

        crossSize = 'height';
        crossStart = 'top';
        crossEnd = 'bottom';
    }

    if (size.flexDirection === 'row-reverse') {
        mainSize = 'width';
        mainStart = 'right';
        mainEnd = 'left';
        mainSign = -1;
        mainBase = 0;

        crossSize = 'height';
        crossStart = 'top';
        crossEnd = 'bottom';
    }

    if (style.flexDirection === 'column') {
        mainSize = 'height';
        mainStart = 'top';
        mainEnd = 'bottom';
        mainSign = +1;
        mainBase = 0;

        crossSize = 'width';
        crossStart = 'left';
        crossEnd = 'right';
    }

    if (style.flexDirection === 'column-reverse') {
        mainSize = 'height';
        mainStart = 'bottom';
        mainEnd = 'top';
        mainSign = -1;
        mainBase = style.height;

        crossSize = 'width';
        crossStart = 'left';
        crossEnd = 'right';
    }

    if (style.flexWrap === 'wrap-reverse') {
        //交叉轴的开始和结束互换。
        var tmp = crossStart;
        crossStart = crossEnd;
        crossEnd = tmp;
        crossSign = -1;
    } else {
        crossBase = 0;
        crossSign = 1;
    }

    var isAUtoMaiSize = false; //父元素没有设置主轴尺寸
    if (!style[mainSize]) {
        elementStyle[mainSize] = 0;
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var itemStyle = getStyle(item);
            if (itemStyle[mainSize] !== null || itemStyle[mainSize] !== (void 0)) {
                elementStyle[mainSign] = elementStyle[mainSize] + item.size[mainSize];
            }

        }
        isAUtoMaiSize = true;
    }

    var flexLine = [];
    var flexLines = [flexLine];

    var mainSpace = elementStyle[mainSize];
    var crossSpace = 0;
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        var itemStyle = getStyle(item);
        if (itemStyle[mainSize] === null) {
            itemStyle[mainSize] = 0;
        }

        if (itemStyle.flex) {
            flexLine.push(item);
        } else if (style.flexWrap === "nowrap" && isAUtoMaiSize) {
            mainSpace -= itemStyle[mainSize];
            if (itemStyle[crossSize] !== null && itemStyle[crossSize] !== (void 0)) {
                crossSpace = Math.max(crossSpace, itemStyle[crossSize]);
            }
            flexLine.push(item);
        } else {
            if (itemStyle[mainSize] > style[mainSize]) {
                itemStyle[mainSize] = style[mainSize];
            }
            if (mainSpace < itemStyle[mainSize]) {
                flexLine.mainSpace = mainSpace;
                flexLine.crossSpace = crossSpace;
                flexLine = [item];
                flexLines.push(flexLine);
                mainSpace = style[mainSize];
                crossSpace = 0;
            } else {
                flexLine.push(item);
            }
            if (itemStyle[crossSize] !== null && itemStyle[crossSize] !== (void 0)) {
                crossSpace = Math.max(crossSpace, itemStyle[crossSize]);
            }
            mainSpace -= itemStyle[mainSize];
        }
    }
    flexLine.mainSpace = mainSpace;
    if (style.flexWrap == "nowrap" || isAUtoMaiSize) {
        flexLine.crossSpace = (style[crossSpace] !== undefined) ? style[crossSize] : crossSpace;
    } else {
        flexLine.crossSpace = crossSpace;
    }

    if (mainSpace < 0) {
        var scale = style[mainSize] / (style[mainSign] - mainSpace);
        var currentMain = mainBase;
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var itemStyle = getStyle(item);
            if (itemStyle.flex) {
                itemStyle[mainSize] = 0;
            }
            itemStyle[mainSize] = itemStyle[mainSize] * scale;
            itemStyle[mainStart] = currentMain;
            itemStyle[mainEnd] = itemStyle[mainStart] + mainSign * itemStyle[mainSign]
            currentMain = itemStyle[mainEnd]
        }
    } else {
        flex.forEach(function (items) {
            var mainSpace = items.mainSpace;
            var flexTotal = 0;
            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                var itemStyle = getStyle(item);
                if ((itemStyle.flex !== null) && (item.flex !== (void 0))) {
                    flexTotal += itemStyle.flex;
                    continue;
                }
            }
            if (flexTotal > 0) {
                var currentMain = mainBase;
                for (var i = 0; i < items.length; i++) {
                    var item = items[i];
                    var itemStyle = getStyle(item);
                    if (itemStyle.flex) {
                        itemStyle[mainSize] = (mainSpace / flexTotal) * itemStyle.flex;
                    }
                    itemStyle[mainStart] = currentMain;
                    itemStyle[mainEnd] = itemStyle[mainStart] + mainSign * itemStyle[mainSign]
                    currentMain = itemStyle[mainEnd]
                }
            }else {
                if(style.justfyContent==="flex-start"){
                    var currentMain =  mainBase;
                    var step = 0;
                }
                if(style.justfyContent==="flex-end"){
                    var currentMain =  mainBase * mainSign + mainBase;
                    var step = 0;
                }
                if(style.justfyContent==="center"){
                    var currentMain = mainSpace / 2 * mainSign + mainBase;
                    var step = 0;
                }
                if(style.justfyContent==="space-between"){
                    var step =  mainSpace / (items.length-1) * mainBase;
                    var currentMain =  mainBase;
                }
                if(style.justfyContent==="space-around"){
                    var step =  mainSpace / (items.length-1) * mainBase;
                    var currentMain = step / 2+ mainBase;
                }

                for(var i=0;i<items.length;i++){
                    var item = items[i];
                    itemStyle[mainStart]=currentMain;
                    itemStyle[mainEnd] = itemStyle[mainStart] + mainSize + itemStyle[mainSize];
                    currentMain = itemStyle[mainEnd] + step;
                }
              
            }
        })
    }

    var crossSpace;
    if(!style[crossSize]){
        crossSpace = 0;
        elementStyle[crossSize] = 0;
        for(var i=0;i<flexLines.length;i++){
            elementStyle[crossSize] = elementStyle[crossSize] +flexLines[i].crossSpace;
        }
    }else {
        crossSpace = style[crossSize];
        for(var i =0;i<flexLines.length;i++){
            crossSpace -= flexLines[i].crossSpace;
        }
    }

    if(style.flexWrap ==="wrap-reverse"){
        crossBase = style[crossSize];
    }else {
        crossBase = 0;
    }
    
    var lineSize = style[crossSize]/flexLines.length;
    var step;
    if(style.alignContent==="flex-start"){
        crossBase += 0;
        step = 0;
    }
    
    if(style.alignContent ==="flex-end"){
        crossBase +=crossSign * crossSpace;
        step = 0;
    }

    if(style.alignContent ==="center"){
        crossBase +=crossSign * crossSpace/2;
        step = 0;
    }
    if(style.alignContent ==="space-between"){
        crossBase +=0;
        step = crossSpace/(flexLines.length-1);
        step = 0;
    }
    if(style.alignContent ==="space-around"){
        step = crossSpace/(flexLines.length);
        crossBase += crossSign * step /2;
    }
    if(style.alignContent ==="strech"){
        crossBase += 0;
        step = 0;
    }

    flexLines.forEach(function(items){
        var lineCrossSize = style.alignContent==="stretch"?
            items.crossSpace + crossSpace / flexLines.length:
            items.crossSpace;
        for(var i=0;i<items.length;i++){
            var item = items[i];
            var itemStyle = getStyle(item);
            var align = itemStyle.alignSelf || style.alignItems;
            if(item===null){
                itemStyle[crossSize] = (align==="stretch")?lineCrossSize:0;
            }

            if(align==="flex-start"){
                itemStyle[crossStart] = crossBase;
                itemStyle[crossEnd] = itemStyle[crossStart] + crossSign * itemStyle[crossSize];
            }

            if(align==="flex-end"){
                itemStyle[crossStart] = crossBase + crossSign * lineCrossSize;
                itemStyle[crossEnd] = itemStyle[crossEnd] - crossSign * itemStyle[crossSize];
            }

            if(align==="center"){
                itemStyle[crossStart] = crossBase + crossSign * (lineCrossSize - itemStyle[crossSize])/2;
                itemStyle[crossEnd] = itemStyle[crossStart] + crossSign * itemStyle[crossSize];
            }

            if(align==="stretch"){
                itemStyle[crossStart] = crossBase;
                itemStyle[crossEnd] = itemStyle[crossStart] + crossSign * itemStyle[crossSize];
                itemStyle[crossSize] = itemStyle[crossStart] + crossSign * (itemStyle[crossEnd]-itemStyle[crossStart]);
            }
        }
        crossSpace +=crossSign*(lineCrossSize+step)
    })

}

module.exports = layout;