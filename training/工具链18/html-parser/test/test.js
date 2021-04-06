var assert = require("assert");
import {paserHTML} from "../src/parser.js"
describe('parse html', () => {
    it('<a>123131</a>', () => {
        let tree = paserHTML('<a>1231312</a>');
        console.log(tree);
        assert.equal(tree.children[0].tagName, "a");
        assert.equal(tree.children[0].children.length, 1);
    });

    it('<a href="//time.geekbang.org">123131</a>', () => {
        let tree = paserHTML('<a href="//time.geekbang.org">1231312</a>');
        console.log(tree);
        assert.equal(tree.children[0].tagName, "a");
        assert.equal(tree.children[0].children.length, 1);
    });
    it('<a id=\'abc\'/>', () => {
        let tree = paserHTML('<a id=\'abc\'/>');
        console.log(tree);
        assert.equal(tree.children.length, 1);
        assert.equal(tree.children[0].children.length, 0);
    });
    it('<a />', () => {
        let tree = paserHTML('<a />');
        console.log(tree);
        assert.equal(tree.children.length, 1);
        assert.equal(tree.children[0].children.length, 0);
    });
    it('<>', () => {
        let tree = paserHTML('<>');
        console.log(tree);
        assert.equal(tree.children.length, 1);
        assert.equal(tree.children[0].children.length, 0);
    });
});