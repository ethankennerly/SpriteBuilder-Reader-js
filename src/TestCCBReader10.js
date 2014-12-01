/**
 * Test reading version 5 and version 10 of CCBI format.
 * Expects sprite frame plists were preloaded.
 */

// http://stackoverflow.com/questions/15313418/javascript-assert
function assertEquals(expected, got, message) {
    if (expected !== got) {
        message = message || "Assertion failed.";
	message += "  Expected <" + expected + ">.";
	message += "  Got <" + got + ">. ";
        if (typeof Error !== "undefined") {
            throw new Error(message);
        }
        throw message; // Fallback
    }
}

function assertArrayEquals(expected, got, message) {
    if (expected == null || got == null) {
        assertEquals(expected, got, "null");
    }
    assertEquals(expected.length, got.length, "length");
    for (var e = 0; e < expected.length; e++) {
        assertEquals(expected[e], got[e]);
    }
}

function testData() {
    var byteArray = new Uint8Array(6);
	byteArray[0] = 3;
	byteArray[1] = 14;
	byteArray[2] = 27;
	byteArray[3] = 129;
	byteArray[4] = 130;
	byteArray[5] = 27;
    return byteArray;
}

function testReadVariableLengthIntFromArray() {
    var byteArray = testData();
	var currentByteContainer = {_currentByte: 2}
	var value = cc.BuilderReader10.prototype.readVariableLengthIntFromArray(currentByteContainer, byteArray);
	assertEquals(27, value, "Value");
	assertEquals(3, currentByteContainer._currentByte, "currentByte");
	var value = cc.BuilderReader10.prototype.readVariableLengthIntFromArray(currentByteContainer, byteArray);
	assertEquals(1 | (2 << 7) | (27 << 14), value, "Value");
	assertEquals(6, currentByteContainer._currentByte, "currentByte");
}

function testReadIntOLD() {
    var reader = new cc.BuilderReader10();
    reader.initWithData(new Uint8Array([104]));
    assertEquals(10, reader.readIntOLD(false));
}

function testReadInt() {
    var reader = new cc.BuilderReader10();
    reader.initWithData(testData());
    assertEquals(3, reader.readInt(false));
    assertEquals(7, reader.readInt(true));
    assertEquals(-14, reader.readInt(true));
    assertEquals(1 | (2 << 7) | (27 << 14), reader.readInt(false));
}

/**
 * http://www.html5rocks.com/en/tutorials/webgl/typed_arrays/
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays
 */
function testFloat32Array() {
    var f = new Float32Array(1);
    f[0] = 2;
    var uf = new Uint8Array(f.buffer, 0, 4);
    assertArrayEquals([0, 0, 0, 64], uf);
    f[0] = 3;
    uf = new Uint8Array(f.buffer, 0, 4);
    assertArrayEquals([0, 0, 64, 64], uf);
    f[0] = 1;
    var uf = new Uint8Array(f.buffer, 0, 4);
    [0, 0, 128, 63]
    assertArrayEquals([0, 0, 128, 63], uf);
}

function testDataFloat() {
    var byteArray = new Uint8Array([3, 
        5, 0, 0, 128, 63,
        5, 0, 0, 0, 64,
        0, 
        1, 
        2, 
        3, 
        4, 27]);
    return byteArray;
}

function testReadFloatVersion5() {
    var reader = new cc.BuilderReader();
    reader.initWithData(testDataFloat());
    assertEquals(3, reader.readByte());
    assertEquals(1, reader.readFloat());
    assertEquals(2, reader.readFloat());
    assertEquals(0, reader.readFloat());
    assertEquals(1, reader.readFloat());
    assertEquals(-1, reader.readFloat());
    assertEquals(0.5, reader.readFloat());
    assertEquals(0, reader.readFloat());
}

function testReadFloat() {
    var reader = new cc.BuilderReader10();
    reader.initWithData(testDataFloat());
    assertEquals(3, reader.readByte());
    assertEquals(1, reader.readFloat());
    assertEquals(2, reader.readFloat());
    assertEquals(0, reader.readFloat());
    assertEquals(1, reader.readFloat());
    assertEquals(-1, reader.readFloat());
    assertEquals(0.5, reader.readFloat());
    assertEquals(-14, reader.readFloat());
}

function testReadNumbers() {
    testReadIntOLD();
    testReadVariableLengthIntFromArray();
    testReadInt();
    testFloat32Array();
    testReadFloat();
    testReadFloatVersion5();
}

function testConvertPositionToPointsBasic() {
    var position = new cc.p(-2.0, 3.0);
    var positionType = {corner: 0, xUnit: 0, yUnit: 0};
    var parentContentSize = new cc.Size(640, 960);
    var uiScaleFactor = 0.5;
    var points = cc.Node.convertPositionToPoints(position, positionType, 
        parentContentSize, uiScaleFactor);
    assertEquals(-2, points.x);
    assertEquals(3, points.y);
}

function testConvertPositionToPointsNormalized() {
    var position = new cc.p(0.5, 94);
    var positionType = {corner: 0, xUnit: 2, yUnit: 0};
    var parentContentSize = new cc.Size(640, 960);
    var uiScaleFactor = 0.5;
    var points = cc.Node.convertPositionToPoints(position, positionType, 
        parentContentSize, uiScaleFactor);
    assertEquals(320, points.x);
    assertEquals(94, points.y);
}

function testConvertContentSizeToPointsBasic() {
    var size = new cc.Size(20.0, 30.0);
    var sizeType = {corner: 0, widthUnit: 0, heightUnit: 0};
    var parentContentSize = new cc.Size(640, 960);
    var uiScaleFactor = 0.5;
    var points = cc.Node.convertContentSizeToPoints(size, sizeType, 
        parentContentSize, uiScaleFactor);
    assertEquals(20, points.width);
    assertEquals(30, points.height);
}

function testConvertContentSizeToPointsNormalized() {
    var size = new cc.Size(1.0, 93);
    var sizeType = {corner: 0, widthUnit: 2, heightUnit: 0};
    var parentContentSize = new cc.Size(640, 960);
    var uiScaleFactor = 0.5;
    var points = cc.Node.convertContentSizeToPoints(size, sizeType, 
        parentContentSize, uiScaleFactor);
    assertEquals(640, points.width);
    assertEquals(93, points.height);
}

/**
 * @param   UIScaleFactor {Number}   If not defined, default to 1.0.  One use case of UI scale factor, (which is different from content scale factor) is to set UI scale factor for iPhad to be at 50% and iPhone to be at 100% so UI elements, such as a HUD, is not much larger on iPad.  Example from cocos2d-iphone CCAppDelegate.m: director.UIScaleFactor = (UI_USER_INTERFACE_IDIOM() == UIUserInterfaceIdiomPhone ? 1.0 : 0.5);
 */
function UIScaleFactorIpadHalf() {
    var size = cc.Director.getInstance().getWinSize();
    var min = Math.min(size.width, size.height);
    var UIScaleFactor = min <= 640 ? 1.0 : 0.5;
    return UIScaleFactor;
}

function testConvertToPoints() {
    testConvertPositionToPointsBasic();
    testConvertPositionToPointsNormalized();
    testConvertContentSizeToPointsBasic();
    testConvertContentSizeToPointsNormalized();
}

// testReader5 expects custom classes already defined:
var MainScene = cc.Node.extend({
    ctor: function() {
        this._super();
        cc.log("MainScene: Constructed custom class.");
    }
});

var MainScreen = cc.Node.extend({});
var StoreAScene = cc.Node.extend({});
var StoreBScene = cc.Node.extend({});

var _parent;
var scene;
var scene5;

function testReader5(parent, basePath) {
    cc.log('TestCCBReader10: version 5 CocosBuilder'
       + '"' + basePath + '"');
    scene5 = cc.BuilderReader.load(basePath);
    parent.addChild(scene5);
    _parent = parent;
}

// testReader10 expects custom classes already defined:
var Penguin = cc.Sprite.extend({});
var Seal = cc.Sprite.extend({});
var WaitingPenguin = cc.Sprite.extend({});

var scene10;

function testReader10(parent, basePath, preservePosition) {
    cc.log('TestCCBReader10: version 10 SpriteBuilder '
       + '"' + basePath + '"');
    var scene = cc.BuilderReader10.load(basePath);
    var prop = basePath.replace(/^\d/g, '_')
                       .replace(/[- /]/g, '_');
    parent[prop] = scene;
    if (!preservePosition) {
        scene.setPosition(160, 240);
    }
    parent.addChild(scene);
    _parent = parent;
    return scene;
}

function testSingleAnimation(parent) {
    scene = testReader10(parent, "Bear");
    cc.log("Testing single animation: Look for a bear with its arm rotating.");
}

var testAnimation;

function testMultipleAnimations(parent) {
    scene = testReader10(parent, "Machine");
    // cc.BuilderReader10._currentReader.getAnimationManager().runAnimations("down");
    testAnimation = scene.CircleButton;
    // testAnimation.animationManager.runAnimations("down");
    testAnimation.animationManager.runAnimations("up");
    cc.log("Look for circle moving down and highlight rotating clockwise.");
    scene = testReader10(parent, "Machines");
    scene.getChildren()[1].getChildren()[1].animationManager.runAnimations("down");
    scene.getChildren()[2].getChildren()[1].animationManager.runAnimations("up");
    scene.machine_5.CircleButton.animationManager.runAnimations("down");
    scene.machine_6.CircleButton.animationManager.runAnimations("up");
    cc.log("Testing animation in sub CCBI:  Look for circle moving down on two left machines and up on two right machines.");
}

/**
 * TODO
 */
function testSpriteFrameAnimation(parent) {
    cc.log("testSpriteFrameAnimation: TODO");
    scene = testReader10(parent, "WaitingPenguin");
}

/**
 * The animation manager expects a function "onResolveCCBCCMenuItemSelector" to bind a function.
 */
function testButtonCallback(parent) {
    var TestController = cc.Class.extend({
        onResolveCCBCCMenuItemSelector: function(target, selectorName) {
            cc.log("TestController.onResolveCCBCCMenuItemSelector: " + target + " name " + selectorName);
            return this[selectorName];
        },

        play: function(target, controlEvent) {
            target.setPositionX(20.0 + target.getPositionX());
            cc.log("TestController.play: Moving button right:  " + target 
                + " event " + controlEvent);
        }
    });
    var controller = new TestController();
    var reader = new cc.BuilderReader10.defaultReader(null, controller);
    scene = cc.BuilderReader10.loadReader(reader, "MainScene_10", true);
    parent.addChild(scene);
    cc.log("Testing button:  Click button at bottom-center.  Look at log.  Expect to read 'play'.");
}

/**
 * Read physics but don't wire the physical properties.
 * Expect to assign a member variable.
 * Constructs global node class "Gameplay", that the reader expects.
 */
function testIgnorePhysics(parent) {
    var assigned = false;
    Gameplay = cc.Node.extend({
        onAssignCCBMemberVariable: function(target, memberVarAssignmentName, node) {
            cc.log("Gameplay.onAssignCCBMemberVariable: " + target 
                + " name " + memberVarAssignmentName 
                + " node.name " + node.getName());
            assigned = true;
            return assigned;
        }
    });
    scene = testReader10(parent, "Gameplay", true);
    scene.setPositionY(40);
    cc.log("Testing ignoring physics:  Look for button in top or bottom left of screen.");
    assertEquals(true, assigned, "assigned");
}

function TestCCBReader10(parent) {
    testReadNumbers();
    testConvertToPoints();
    // testReader5(parent, "MainScene_5");
    // testMultipleAnimations(parent);
    // testIgnorePhysics(parent);
    testButtonCallback(parent);
    // testSingleAnimation(parent);
    // scene = testReader10(parent, "Seal");
    // scene = testReader10(parent, "Penguin");
    // testSpriteFrameAnimation(parent);
}
