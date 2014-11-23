/**
 * Test reading version 5 and version 10 of CCBI format.
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

// testReader5 expects custom classes already defined:
var MainScene = cc.Node.extend({});
var MainScreen = cc.Node.extend({});
var StoreAScene = cc.Node.extend({});
var StoreBScene = cc.Node.extend({});

var _parent;
var scene;
var scene5;

function testReader5(parent, basePath) {
    cc.log('TestCCBReader10: version 5 CocosBuilder'
       + '"' + basePath + '"');
    scene5 = cc.BuilderReader.loadAsScene(basePath);
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
    var scene = cc.BuilderReader10.loadAsScene(basePath);
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

function TestCCBReader10(parent) {
    testReadIntOLD();
    testReadVariableLengthIntFromArray();
    testReadInt();
    testFloat32Array();
    testReadFloat();
    testReadFloatVersion5();
    // testReader5(parent, "ccb/MainScene_5");
    scene = testReader10(parent, "ccb/MainScene_10", true);
    scene.setScale(0.25);
    scene.setPositionY(320);
    // scene = testReader10(parent, "ccb/Bear");
    // cc.log("Look for bear in center of screen with arm rotating.");
    // scene = testReader10(parent, "ccb/Seal");
    // scene = testReader10(parent, "ccb/Penguin");
    // scene = testReader10(parent, "ccb/WaitingPenguin");
    // scene = testReader10(parent, "Machine");
    scene = testReader10(parent, "Machines", true);
    // scene.setPositionY(480);
    // Physics or something else not parsed:
    // scene = testReader10(parent, "ccb/Gameplay");
    // scene.setScale(0.25);
    // cc.log("Look for button in top left of screen.");
}
