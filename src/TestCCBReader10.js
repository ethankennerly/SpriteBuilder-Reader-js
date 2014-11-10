/**
 * Test reading version 5 and version 10 of CCBI format.
 */

var MainScene = cc.Class.extend({});
var MainScreen = cc.Class.extend({});
var StoreAScene = cc.Class.extend({});
var StoreBScene = cc.Class.extend({});

function TestCCBReader10(parent) {
    cc.log("TestCCBReader10: version 5 CocosBuilder");
    var scene5 = cc.BuilderReader.loadAsScene("ccb/MainScene");
    parent.addChild(scene5);
    cc.log("TestCCBReader10: version 10 SpriteBuilder: TODO");
    var version10usable = false;
    if (version10usable) {
        var name10 = "ccb/SpriteBuilder_Bullet";
        var scene10 = cc.BuilderReader10.loadAsScene(name10);
        parent.addChild(scene10);
    }
}
