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

// testReader5
var MainScene = cc.Class.extend({});
var MainScreen = cc.Class.extend({});
var StoreAScene = cc.Class.extend({});
var StoreBScene = cc.Class.extend({});

var scene5;

function testReader5(parent) {
    cc.log("TestCCBReader10: version 5 CocosBuilder");
    scene5 = cc.BuilderReader.loadAsScene("ccb/MainScene");
    parent.addChild(scene5);
}

var scene10;

function testReader10(parent) {
    cc.log("TestCCBReader10: version 10 SpriteBuilder");
    cc.log("    TODO: Load sprite sheet.");
    var name10 = "ccb/Bear";
    scene10 = cc.BuilderReader10.loadAsScene(name10);
    scene10.setPosition(160, 240);
    parent.addChild(scene10);
}

function TestCCBReader10(parent) {
    testReadIntOLD();
    testReadVariableLengthIntFromArray();
    testReadInt();
    // testReader5(parent);
    testReader10(parent);
}
