/****************************************************************************
 2014 Partially upgraded to version 10 for Cocos2d-js v2.2.2. by Ethan Kennerly
 Copyright (c) 2010-2012 cocos2d-x.org
 Copyright (c) 2008-2010 Ricardo Quesada
 Copyright (c) 2011      Zynga Inc.

 http://www.cocos2d-x.org

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 ****************************************************************************/

/**
 * Features, @see README.md
 */
var CCB_VERSION_10 = 10;

var CCB_PROPTYPE_POSITION = 0;
var CCB_PROPTYPE_SIZE = 1;
var CCB_PROPTYPE_POINT = 2;
var CCB_PROPTYPE_POINTLOCK = 3;
var CCB_PROPTYPE_SCALELOCK = 4;
var CCB_PROPTYPE_DEGREES = 5;
var CCB_PROPTYPE_INTEGER = 6;
var CCB_PROPTYPE_FLOAT = 7;
var CCB_PROPTYPE_FLOATVAR = 8;
var CCB_PROPTYPE_CHECK = 9;
var CCB_PROPTYPE_SPRITEFRAME = 10;
var CCB_PROPTYPE_TEXTURE = 11;
var CCB_PROPTYPE_BYTE = 12;
var CCB_PROPTYPE_COLOR3 = 13;
var CCB_PROPTYPE_COLOR4VAR = 14;
var CCB_PROPTYPE_FLIP = 15;
var CCB_PROPTYPE_BLENDMODE = 16;
var CCB_PROPTYPE_FNTFILE = 17;
var CCB_PROPTYPE_TEXT = 18;
var CCB_PROPTYPE_FONTTTF = 19;
var CCB_PROPTYPE_INTEGERLABELED = 20;
var CCB_PROPTYPE_BLOCK = 21;
var CCB_PROPTYPE_ANIMATION = 22;
var CCB_PROPTYPE_CCBFILE = 23;
var CCB_PROPTYPE_STRING = 24;
var CCB_PROPTYPE_BLOCKCCCONTROL = 25;
var CCB_PROPTYPE_FLOATSCALE = 26;
var CCB_PROPTYPE_FLOATXY = 27;
// Version 6:
var CCB_PROPTYPE_COLOR4 = 28;
// Version 10:
var CCB_PROPTYPE_NODE_REFERENCE = 29;
var CCB_PROPTYPE_FLOAT_CHECK = 30;
var CCB_PROPTYPE_EFFECTS = 31;

var CCB_FLOAT0 = 0;
var CCB_FLOAT1 = 1;
var CCB_FLOAT_MINUS1 = 2;
var CCB_FLOAT05 = 3;
var CCB_FLOAT_INTEGER = 4;
var CCB_FLOAT_FULL = 5;

var CCB_PLATFORM_ALL = 0;
var CCB_PLATFORM_IOS = 1;
var CCB_PLATFORM_MAC = 2;

var CCB_TARGETTYPE_NONE = 0;
var CCB_TARGETTYPE_DOCUMENTROOT = 1;
var CCB_TARGETTYPE_OWNER = 2;

var CCB_KEYFRAME_EASING_INSTANT = 0;
var CCB_KEYFRAME_EASING_LINEAR = 1;
var CCB_KEYFRAME_EASING_CUBIC_IN = 2;
var CCB_KEYFRAME_EASING_CUBIC_OUT = 3;
var CCB_KEYFRAME_EASING_CUBIC_INOUT = 4;
var CCB_KEYFRAME_EASING_ELASTIC_IN = 5;
var CCB_KEYFRAME_EASING_ELASTIC_OUT = 6;
var CCB_KEYFRAME_EASING_ELASTIC_INOUT = 7;
var CCB_KEYFRAME_EASING_BOUNCE_IN = 8;
var CCB_KEYFRAME_EASING_BOUNCE_OUT = 9;
var CCB_KEYFRAME_EASING_BOUNCE_INOUT = 10;
var CCB_KEYFRAME_EASING_BACK_IN = 11;
var CCB_KEYFRAME_EASING_BACK_OUT = 12;
var CCB_KEYFRAME_EASING_BACK_INOUT = 13;

var CCB_POSITIONTYPE_RELATIVE_BOTTOM_LEFT = 0;
var CCB_POSITIONTYPE_RELATIVE_TOP_LEFT = 1;
var CCB_POSITIONTYPE_RELATIVE_TOP_RIGHT = 2;
var CCB_POSITIONTYPE_RELATIVE_BOTTOM_RIGHT = 3;
var CCB_POSITIONTYPE_PERCENT = 4;
var CCB_POSITIONTYPE_MULTIPLY_RESOLUTION = 5;

var CCB_SIZETYPE_ABSOLUTE = 0;
var CCB_SIZETYPE_PERCENT = 1;
var CCB_SIZETYPE_RELATIVE_CONTAINER = 2;
var CCB_SIZETYPE_HORIZONTAL_PERCENT = 3;
var CCB_SIZETYPE_VERTICAL_PERCENT = 4;
var CCB_SIZETYPE_MULTIPLY_RESOLUTION = 5;

var CCB_SCALETYPE_ABSOLUTE = 0;
var CCB_SCALETYPE_MULTIPLY_RESOLUTION = 1;

// Version 10:
// Reusing POSITION_UNITs for SIZE_UNITs
/// Content size is set in points (this is the default)
var CCB_POSITION_UNIT_POINTS = 0;
/// Position is UI points, on iOS this corresponds to the native point system
var CCB_POSITION_UNIT_UI_POINTS = 1;    
/// Position is a normalized value multiplied by the content size of the parent's container
var CCB_POSITION_UNIT_NORMALIZED = 2;    
/// Content size is the size of the parents container inset by the supplied value
var CCB_SIZE_UNIT_INSET_POINTS = 3;    
/// Content size is the size of the parents container inset by the supplied value multiplied by the UIScaleFactor (as defined by CCDirector)
var CCB_SIZE_UNIT_INSET_UI_POINTS = 4;    
    
/**
 * "this" instead of "window" in case on a device that does not define "window".
 */
var _ccbGlobalContext = _ccbGlobalContext || this;

cc.BuilderFile = cc.Node.extend({
    _ccbFileNode:null,

    getCCBFileNode:function () {
        return this._ccbFileNode;
    },
    setCCBFileNode:function (node) {
        this._ccbFileNode = node;
    }
});

cc.BuilderFile.create = function () {
    return new cc.BuilderFile();
};

/**
 * Parse CCBI version 10 file which is generated by SpriteBuilder
 */
cc.BuilderReader10 = cc.Class.extend({
    _data:null,
    _ccbRootPath:"",

    _bytes:0,
    _currentByte:0,
    _currentBit:0,

    _stringCache:null,
    _loadedSpriteSheets:null,

    _owner:null,
    _animationManager:null,
    _animationManagers:null,
    _animatedProps:null,

    _ccNodeLoaderLibrary:null,
    _ccNodeLoaderListener:null,
    _ccbMemberVariableAssigner:null,
    _ccbSelectorResolver:null,

    _ownerOutletNames:null,
    _ownerOutletNodes:null,
    _nodesWithAnimationManagers:null,
    _animationManagerForNodes:null,

    _ownerCallbackNames:null,
    _ownerCallbackNodes:null,

    _readNodeGraphFromData:false,

    ctor:function (ccNodeLoaderLibrary, ccbMemberVariableAssigner, ccbSelectorResolver, ccNodeLoaderListener) {
        cc.BuilderReader10.requiring();
        cc.BuilderReader10.extend();
        this._nodesWithAnimationManagers = [];
        this._animationManagerForNodes = [];
        this._stringCache = [];
        this._loadedSpriteSheets = [];
        this._currentBit = -1;
        this._currentByte = -1;

        if (arguments.length != 0) {
            if (ccNodeLoaderLibrary instanceof cc.BuilderReader10) {
                var ccbReader = ccNodeLoaderLibrary;

                /* Borrow data from the 'parent' CCBReader. */
                this._loadedSpriteSheets = ccbReader._loadedSpriteSheets;
                this._ccNodeLoaderLibrary = ccbReader._ccNodeLoaderLibrary;

                this._ccbMemberVariableAssigner = ccbReader._ccbMemberVariableAssigner;
                this._ccbSelectorResolver = ccbReader._ccbSelectorResolver;
                this._ccNodeLoaderListener = ccbReader._ccNodeLoaderListener;

                this._ownerCallbackNames = ccbReader._ownerCallbackNames;
                this._ownerCallbackNodes = ccbReader._ownerCallbackNodes;
                this._ownerOutletNames = ccbReader._ownerOutletNames;
                this._ownerOutletNodes = ccbReader._ownerOutletNodes;
                this._ccbRootPath = ccbReader._ccbRootPath;
            } else {
                this._ccNodeLoaderLibrary = ccNodeLoaderLibrary;
                this._ccbMemberVariableAssigner = ccbMemberVariableAssigner;
                this._ccbSelectorResolver = ccbSelectorResolver;
                this._ccNodeLoaderListener = ccNodeLoaderListener;
            }
        }
    },

    getCCBRootPath:function () {
        return this._ccbRootPath;
    },

    setCCBRootPath:function (rootPath) {
        this._ccbRootPath = rootPath;
    },

    initWithData:function (data, owner) {

        //setup action manager
        this._animationManager = new cc.BuilderAnimationManager10();

        //setup byte array
        //Array replace to CCData in Javascript
        this._data = data;
        this._bytes = data.length;
        this._currentBit = 0;
        this._currentByte = 0;

        this._owner = owner;

        //setup resolution scale and container size
        this._animationManager.setRootContainerSize(cc.Director.getInstance().getWinSize());

        return true;
    },

    readNodeGraphFromFile:function (ccbFileName, owner, parentSize, animationManager) {
        this._currentCCBFile = ccbFileName;
        if (parentSize == null) {
            parentSize = cc.Director.getInstance().getWinSize();
        } else if (parentSize instanceof  cc.BuilderAnimationManager) {
            animationManager = parentSize;
            parentSize = cc.Director.getInstance().getWinSize();
        }
        var fileUtils = cc.FileUtils.getInstance();
        var path = fileUtils.fullPathFromRelativePath(ccbFileName);
        var data = fileUtils.getByteArrayFromFile(path);

        return this.readNodeGraphFromData(data, owner, parentSize, animationManager);
    },

    readNodeGraphFromData:function (data, owner, parentSize) {
        this.initWithData(data, owner);
        var locAnimationManager = this._animationManager;
        locAnimationManager.setRootContainerSize(parentSize);
        locAnimationManager.setOwner(owner);

        this._ownerOutletNames = [];
        this._ownerOutletNodes = [];
        this._ownerCallbackNames = [];
        this._ownerCallbackNodes = [];
        this._animationManagers = new cc._Dictionary();

        var nodeGraph = this.readFileWithCleanUp(true);

        this.autoPlayAnimation(nodeGraph);
        return nodeGraph;
    },

    /**
     * If no sequence, ignore.
     *
     * Cocos2d-x 2.2.2 only supports runAnimations by name, not by id.  
     * Otherwise Cocos2d-x interprets the name as id -1.
     * However, this version does bind "runAnimationsForSequenceIdTweenDuration".
     * which is what jsb_cocosbuilder.js calls.
     */
    autoPlayAnimation: function(nodeGraph)
    {
        if (nodeGraph) {
            var man = this._animationManager;
            var id = man.getAutoPlaySequenceId();
            if (-1 != id) {
                var seqs = man.getSequences();
                var seq = seqs[id];
                if (seq) {
                    cc.log("cc.BuilderReader10.autoPlayAnimation: " + id + " seq " + seq);
                    man.runAnimationsForSequenceIdTweenDuration(id, 0);
                }
                else {
                    cc.log("cc.BuilderReader10.autoPlayAnimation: No such " + id + " seq " + seq);
                }
            }
        }
    },

    createSceneWithNodeGraphFromFile:function (ccbFileName, owner, parentSize, animationManager) {
        var node = this.readNodeGraphFromFile(ccbFileName, owner, parentSize, animationManager);
        var scene = cc.Scene.create();
        scene.addChild(node);
        return scene;
    },

    getCCBMemberVariableAssigner:function () {
        return this._ccbMemberVariableAssigner;
    },

    getCCBSelectorResolver:function () {
        return this._ccbSelectorResolver;
    },

    getAnimationManager:function () {
        return this._animationManager;
    },

    setAnimationManager:function (animationManager) {
        this._animationManager = animationManager;
    },

    getAnimatedProperties:function () {
        return this._animatedProps;
    },

    getLoadedSpriteSheet:function () {
        return this._loadedSpriteSheets;
    },

    getOwner:function () {
        return this._owner;
    },

    readIntOLD:function (signed) {
        var numBits = 0;
        while (!this._getBit()) {
            numBits++;
        }

        var current = 0;
        for (var a = numBits - 1; a >= 0; a--) {
            if (this._getBit()) {
                current |= 1 << a;
            }
        }
        current |= 1 << numBits;

        var num;
        if (signed) {
            var s = current % 2;
            if (s) {
                num = 0 | (current / 2);
            } else {
                num = 0 | (-current / 2);
            }
        } else {
            num = current - 1;
        }

        this._alignBits();

        return num;
    },

    /**
     * @param   signed  Divides raw value by 2.  Least significant bit indicates negative number.
     * @return  number {int}   Parsed from this._data.  Also advances _currentByte.
     */
    readInt:function (signed) {
        var value = this.readVariableLengthIntFromArray(this, this._data);
        var num = 0;
        if (signed) {
            if (value & 0x1)
                num = -((value+1) >> 1);
            else
                num = (value >> 1);
        }
        else {
            num = value;
        }
        return num;
    },

    /**
     * @param   currentByteContainer    Expects property "_currentByte".  Adds to it for each byte read, in-place.
     * @param   data {Uint8Array}       If the 8th bit is set, then continue to read, up to a maximum of 5 bytes.  For each additional byte read, bitshift the value by 7.
     * @return  value {int}             Value in byte, or multiple bytes.
     * Example @see TestCCBReader10.js
     */
	readVariableLengthIntFromArray: function(currentByteContainer, data) {
        var value = 0;
        var previous = currentByteContainer._currentByte;
        var shiftStep = 7;
        var moreBit = 1 << shiftStep;
        var bitmask = moreBit - 1;
        var maxBytes = 5;
        var maxShiftBytes = maxBytes - 1;
        var shift = 0;
        var part = 0;
        var offset = 0;
        do {
            part = data[previous + offset];
            var masked = (offset < maxShiftBytes) 
                ? (part & bitmask)
                : part;
            value |= masked << shift;
            shift += shiftStep;
            offset++;
        }
        while ((part & moreBit) && offset < maxBytes)
        currentByteContainer._currentByte = previous + offset;
        return value;
    },

    readByte:function () {
        var byteValue = this._data[this._currentByte];
        this._currentByte++;
        return byteValue;
    },

    readBool:function () {
        return (0 != this.readByte());
    },

    readFloat:function () {
        var type = this.readByte();

        switch (type) {
            case CCB_FLOAT0:
                return 0;
            case CCB_FLOAT1:
                return 1;
            case CCB_FLOAT_MINUS1:
                return -1;
            case CCB_FLOAT05:
                return 0.5;
            case CCB_FLOAT_INTEGER:
                return this.readInt(true);
            default:
                var pF = this._decodeFloat();
                return pF;
        }
    },

    /**
     * @return  32-bit (4-byte) float.
     *
     * Depends on TypedArray support.
     * http://www.html5rocks.com/en/tutorials/webgl/typed_arrays/
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays
     */ 
    _decodeFloat: function() {
        var byteLength = 4;
        var doubleWord = new Uint8Array(byteLength);
        for (var byte = 0; byte < byteLength; byte++) {
            doubleWord[byte] = this._data[this._currentByte + byte];
        }
        var floats = new Float32Array(doubleWord.buffer, 0, 1);
        this._currentByte += byteLength;
        return floats[0];
    },

    /* using a memcpy since the compiler isn't
     * doing the float ptr math correctly on device.
     * this._bytes + this._currentByte;
     * Usage was:
     *      var pF = this._decodeFloat(23, 8);
     */
    _decodeFloatVersion5:function (precisionBits, exponentBits) {
        precisionBits = precisionBits === undefined ? 23 : precisionBits;
        exponentBits = exponentBits === undefined ? 8 : exponentBits;
        var length = precisionBits + exponentBits + 1;
        var size = length >> 3;
        this._checkSize(length);

        var bias = Math.pow(2, exponentBits - 1) - 1;
        var signal = this._readBitsOnly(precisionBits + exponentBits, 1, size);
        var exponent = this._readBitsOnly(precisionBits, exponentBits, size);
        var significand = 0;
        var divisor = 2;
        var curByte = 0; //length + (-precisionBits >> 3) - 1;
        do {
            var byteValue = this._readByteOnly(++curByte, size);
            var startBit = precisionBits % 8 || 8;
            var mask = 1 << startBit;
            while (mask >>= 1) {
                if (byteValue & mask) {
                    significand += 1 / divisor;
                }
                divisor *= 2;
            }
        } while (precisionBits -= startBit);

        this._currentByte += size;

        return exponent == (bias << 1) + 1 ? significand ? NaN : signal ? -Infinity : +Infinity
            : (1 + signal * -2) * (exponent || significand ? !exponent ? Math.pow(2, -bias + 1) * significand
            : Math.pow(2, exponent - bias) * (1 + significand) : 0);
    },

    _readBitsOnly:function (start, length, size) {
        var offsetLeft = (start + length) % 8;
        var offsetRight = start % 8;
        var curByte = size - (start >> 3) - 1;
        var lastByte = size + (-(start + length) >> 3);
        var diff = curByte - lastByte;

        var sum = (this._readByteOnly(curByte, size) >> offsetRight) & ((1 << (diff ? 8 - offsetRight : length)) - 1);

        if (diff && offsetLeft) {
            sum += (this._readByteOnly(lastByte++, size) & ((1 << offsetLeft) - 1)) << (diff-- << 3) - offsetRight;
        }

        while (diff) {
            sum += this._shl(this._readByteOnly(lastByte++, size), (diff-- << 3) - offsetRight);
        }

        return sum;
    },

    _readByteOnly:function (i, size) {
        return this._data[this._currentByte + size - i - 1];
    },

    _shl:function (a, b) {
        for (++b; --b; a = ((a %= 0x7fffffff + 1) & 0x40000000) == 0x40000000 ? a * 2 : (a - 0x40000000) * 2 + 0x7fffffff + 1);
        return a;
    },

    _checkSize:function (neededBits) {
        if (!(this._currentByte + Math.ceil(neededBits / 8) < this._data.length)) {
            throw new Error("Index out of bound");
        }
    },

    readCachedString:function () {
        return this._stringCache[this.readInt(false)];
    },

    isJSControlled:function () {
        return false;
    },

    getOwnerCallbackNames:function () {
        return this._ownerCallbackNames;
    },

    getOwnerCallbackNodes:function () {
        return this._ownerCallbackNodes;
    },

    getOwnerOutletNames:function () {
        return this._ownerOutletNames;
    },

    getOwnerOutletNodes:function () {
        return this._ownerOutletNodes;
    },

    getNodesWithAnimationManagers:function () {
        return this._nodesWithAnimationManagers;
    },

    getAnimationManagersForNodes:function () {
        return this._animationManagerForNodes;
    },

    getAnimationManagers:function () {
        return this._animationManagers;
    },

    setAnimationManagers:function (animationManagers) {
        this._animationManagers = animationManagers;
    },

    addOwnerCallbackName:function (name) {
        this._ownerCallbackNames.push(name)
    },

    addOwnerCallbackNode:function (node) {
        this._ownerCallbackNodes.push(node);
    },

    addDocumentCallbackName:function (name) {
        this._animationManager.addDocumentCallbackName(name);
    },

    addDocumentCallbackNode:function (node) {
        this._animationManager.addDocumentCallbackNode(node);
    },

    addDocumentCallbackControlEvents:function(controlEvents){
        this._animationManager.addDocumentCallbackControlEvents(controlEvents);
    },

    /**
     * Version 10 fixes typo of control loader "preferedSize" as "preferredSize".
     * Should be = "preferredSize". This is a typo in cocos2d-iphone, cocos2d-x and CocosBuilder!
     * SpriteBuilder 1.3 exports normalMapSpriteFrame.  Ignore this.
     */
    overrideConstants: function() {
        PROPERTY_GRAVITY = "gravity";
        PROPERTY_NAME = "name";
        PROPERTY_PREFEREDSIZE = "preferredSize";
        PROPERTY_MAXSIZE = "maxSize";
        PROPERTY_USER_INTERACTION_ENABLED = "userInteractionEnabled";
        PROPERTY_BACKGROUNDSPRITEFRAME_NORMAL = "backgroundSpriteFrame|Normal";
        PROPERTY_BACKGROUNDSPRITEFRAME_HIGHLIGHTED = "backgroundSpriteFrame|Highlighted";
        PROPERTY_BACKGROUNDSPRITEFRAME_DISABLED = "backgroundSpriteFrame|Disabled";
        PROPERTY_BACKGROUNDSPRITEFRAME_SELECTED = "backgroundSpriteFrame|Selected";
        PROPERTY_NORMAL_MAP_SPRITEFRAME = "normalMapSpriteFrame";
        PROPERTY_TITLECOLOR_NORMAL = "labelColor|Normal";
        PROPERTY_TITLECOLOR_HIGHLIGHTED = "labelColor|Highlighted";
        PROPERTY_TITLECOLOR_DISABLED = "labelColor|Disabled";
    },

    /**
     * Version 10 joints feature is not read and is not supported.
     */
    readFileWithCleanUp:function (cleanUp) {
        this.overrideConstants();
        if (!this._readHeader())
            return null;
        if (!this._readStringCache())
            return null;
        if (!this._readSequences())
            return null;

        var node = this._readNodeGraph();
        cc.BuilderReader10.trySetDescendents(node);
        // this.readJoints();
        this._animationManagers.setObject(this._animationManager, node);

        if (cleanUp)
            this._cleanUpNodeGraph(node);
        return node;
    },

    readJoints: function()
    {
        var numJoints = this.readInt(false);
        for (var i =0; i < numJoints; i++)
        {
            this.readJoint();
        }
    },

    /**
     * Could extract readPropertyForNode so it does not double-read property count.
     */
    readJoint: function()
    {
        var joint;
        var className = this.readCachedString();
        cc.log("cc.BuilderReader10.readJoint: Not supported " + className);

        var propertyCount = this.readInt(false);
        var properties = {};
        for (var i =0; i < propertyCount; i++)
        {
            //Hack to extract the properties serialized. the dictionary is Not a node.
            // this.readPropertiesForNode:(CCNode*)properties parent:nil isExtraProp:NO];
        }
        
        /*
        CCNode * nodeBodyA = properties[@"bodyA"];
        CCNode * nodeBodyB = properties[@"bodyB"];
        
        float breakingForce = [properties[@"breakingForceEnabled"] boolValue] ? [properties[@"breakingForce"] floatValue] : INFINITY;
        float maxForce = [properties[@"maxForceEnabled"] boolValue] ? [properties[@"maxForce"] floatValue] : INFINITY;
        bool  collideBodies = [properties[@"collideBodies"] boolValue];
        float referenceAngle = [properties[@"referenceAngle"] floatValue];
        referenceAngle = CC_DEGREES_TO_RADIANS(referenceAngle);
        
        if([className isEqualToString:@"CCPhysicsPivotJoint"])
        {
            if([properties[@"motorEnabled"] boolValue])
            {
                float motorRate = properties[@"motorRate"] ? [properties[@"motorRate"]  floatValue] : 1.0f;
                CCPhysicsJoint * motorJoint = [CCPhysicsJoint connectedMotorJointWithBodyA:nodeBodyA.physicsBody bodyB:nodeBodyB.physicsBody rate:motorRate];
                
                float maxMotorForce = [properties[@"motorMaxForceEnabled"] boolValue] ? [properties[@"motorMaxForce"] floatValue] : INFINITY;

                motorJoint.maxForce = maxMotorForce;
                motorJoint.breakingForce = breakingForce;
                motorJoint.collideBodies = collideBodies;
            }
            
            if([properties[@"dampedSpringEnabled"] boolValue])
            {
                float   restAngle = properties[@"dampedSpringRestAngle"] ?  [properties[@"dampedSpringRestAngle"]  floatValue] : 0.0f;
                restAngle = CC_DEGREES_TO_RADIANS(restAngle);
                float   stiffness = properties[@"dampedSpringStiffness"] ? [properties[@"dampedSpringStiffness"] floatValue] : 1.0f;
                stiffness *= 1000.0f;
                float   damping = properties[@"dampedSpringDamping"] ? [properties[@"dampedSpringDamping"] floatValue] : 4.0f;
                damping *= 100.0f;

                CCPhysicsJoint * rotarySpringJoint = [CCPhysicsJoint connectedRotarySpringJointWithBodyA:nodeBodyA.physicsBody bodyB:nodeBodyB.physicsBody restAngle:restAngle stifness:stiffness damping:damping];
                
                rotarySpringJoint.maxForce = maxForce;
                rotarySpringJoint.breakingForce = breakingForce;
                rotarySpringJoint.collideBodies = collideBodies;
            }
            
            
            if([properties[@"limitEnabled"] boolValue])
            {
                float   limitMax = properties[@"limitMax"] ? [properties[@"limitMax"]  floatValue] : 90.0f;
                limitMax = CC_DEGREES_TO_RADIANS(limitMax);
                
                float   limitMin = properties[@"limitMin"] ? [properties[@"limitMin"] floatValue] : 0;
                limitMin = CC_DEGREES_TO_RADIANS(limitMin);
                
                CCPhysicsJoint * limitJoint = [CCPhysicsJoint connectedRotaryLimitJointWithBodyA:nodeBodyA.physicsBody bodyB:nodeBodyB.physicsBody min:limitMin max:limitMax];
                
                limitJoint.maxForce = maxForce;
                limitJoint.breakingForce = breakingForce;
                limitJoint.collideBodies = collideBodies;
            }
                
            if([properties[@"ratchetEnabled"] boolValue])
            {
                float ratchetValue = properties[@"ratchetValue"] ? [properties[@"ratchetValue"]  floatValue] : 30.0f;
                ratchetValue = CC_DEGREES_TO_RADIANS(ratchetValue);
                float ratchetPhase = properties[@"ratchetPhase"] ? [properties[@"ratchetPhase"]  floatValue] : 0.0f;
                ratchetPhase = CC_DEGREES_TO_RADIANS(ratchetPhase);
                
                CCPhysicsJoint * ratchetJoint = [CCPhysicsJoint connectedRatchetJointWithBodyA:nodeBodyA.physicsBody bodyB:nodeBodyB.physicsBody phase:ratchetPhase ratchet:ratchetValue];
                
                ratchetJoint.maxForce = maxForce;
                ratchetJoint.breakingForce = breakingForce;
                ratchetJoint.collideBodies = collideBodies;
        
            }
            
            CGPoint anchorA = [properties[@"anchorA"] CGPointValue];
            joint = [CCPhysicsJoint connectedPivotJointWithBodyA:nodeBodyA.physicsBody bodyB:nodeBodyB.physicsBody anchorA:anchorA];
            
        }
        else if([className isEqualToString:@"CCPhysicsSpringJoint"])
        {
            CGPoint anchorA = [properties[@"anchorA"] CGPointValue];
            CGPoint anchorB = [properties[@"anchorB"] CGPointValue];
            
            CGPoint anchoAWorldPos = [nodeBodyA convertToWorldSpace:anchorA];
            CGPoint anchoBWorldPos = [nodeBodyB convertToWorldSpace:anchorB];
            float distance =  ccpDistance(anchoAWorldPos, anchoBWorldPos);
            
            BOOL    restLengthEnabled = [properties[@"restLengthEnabled"] boolValue];
            float   restLength = restLengthEnabled?  [properties[@"restLength"] floatValue] : distance;

            float   stiffness = [properties[@"stiffness"] floatValue];
            float   damping = [properties[@"damping"] floatValue];
            
            joint = [CCPhysicsJoint connectedSpringJointWithBodyA:nodeBodyA.physicsBody bodyB:nodeBodyB.physicsBody anchorA:anchorA anchorB:anchorB restLength:restLength stiffness:stiffness damping:damping];

            
        }
        else if([className isEqualToString:@"CCPhysicsPinJoint"])
        {
            CGPoint anchorA = [properties[@"anchorA"] CGPointValue];
            CGPoint anchorB = [properties[@"anchorB"] CGPointValue];
            
            BOOL minEnabled = [properties[@"minDistanceEnabled"] boolValue];
            BOOL maxEnabled = [properties[@"maxDistanceEnabled"] boolValue];
            
            CGPoint anchoAWorldPos = [nodeBodyA convertToWorldSpace:anchorA];
            CGPoint anchoBWorldPos = [nodeBodyB convertToWorldSpace:anchorB];
            
            float distance =  ccpDistance(anchoAWorldPos, anchoBWorldPos);
            
            float minDistance = minEnabled ? [properties[@"minDistance"] floatValue] : distance;
            float maxDistance = maxEnabled ? [properties[@"maxDistance"] floatValue] : distance;
            
            if(maxEnabled || minEnabled)
            {
                joint =  [CCPhysicsJoint connectedDistanceJointWithBodyA:nodeBodyA.physicsBody bodyB:nodeBodyB.physicsBody anchorA:anchorA anchorB:anchorB minDistance:minDistance maxDistance:maxDistance];
            }
            else
            {
                joint =  [CCPhysicsJoint connectedDistanceJointWithBodyA:nodeBodyA.physicsBody bodyB:nodeBodyB.physicsBody anchorA:anchorA anchorB:anchorB];
            }
        }
        else
        {
            return;
        }
        joint.maxForce = maxForce;
        joint.breakingForce = breakingForce;
        joint.collideBodies = collideBodies;
        [joint resetScale:NodeToPhysicsScale(nodeBodyA).x];
        
    }
    */
    },

    addOwnerOutletName: function(name){
         this._ownerOutletNames.push(name);
    },

    addOwnerOutletNode: function(node){
         if(node == null)
            return;

        this._ownerOutletNodes.push(node);
    },

    /**
     * If null, ignore.
     * Cocos2d-x does not tolerate null object.
     * Test case: Set null object.  JavaScript error: CCBReader10.js line ... Error: Error processing arguments
     */
    setUserObject: function(node, obj) {
        if (obj) {
            node.setUserObject(obj);
        }
        else {
            cc.log("cc.BuilderReader10.setUserObject: Expected value.  Got " + obj);
        }
    },

    /**
     * Cocos2d-x does not like setting user object to null, so do nothing.
     */
    _cleanUpNodeGraph:function (node) {
        //- this.setUserObject(node, null);
        var getChildren = node.getChildren();
        for (var i = 0, len = getChildren.length; i < len; i++) {
            this._cleanUpNodeGraph(getChildren[i]);
        }
    },

    _readCallbackKeyframesForSeq:function(seq) {
        var numKeyframes = this.readInt(false);

        if (!numKeyframes)
            return true;

        var channel = new cc.BuilderSequenceProperty();
        var locAnimationManager = this._animationManager, locKeyframes = channel.getKeyframes();
        for (var i = 0; i < numKeyframes; i++) {
            var time = this.readFloat();
            var callbackName = this.readCachedString();
            var callbackType = this.readInt(false);

            var value = [ callbackName, callbackType];

            var keyframe = new cc.BuilderKeyframe();
            keyframe.setTime(time);
            keyframe.setValue(value);

            locKeyframes.push(keyframe);
        }

        // Assign to sequence
        seq.setCallbackChannel(channel);

        return true;
    },

    _readSoundKeyframesForSeq:function(seq) {
        var numKeyframes = this.readInt(false);

        if (!numKeyframes)
            return true;

        var channel = new cc.BuilderSequenceProperty();
        var locKeyframes = channel.getKeyframes();
        for (var i = 0; i < numKeyframes; i++) {
            var time = this.readFloat();
            var soundFile = this.readCachedString();
            var pitch = this.readFloat();
            var pan = this.readFloat();
            var gain = this.readFloat();

            var value  = [soundFile, pitch, pan, gain];
            var keyframe = new cc.BuilderKeyframe();
            keyframe.setTime(time);
            keyframe.setValue(value);

            locKeyframes.push(keyframe);
        }

        // Assign to sequence
        seq.setSoundChannel(channel);
        return true;
    },

    /**
     * Reads but ignores if has physics nodes.
     * Sets animation manager, fixedTimeStep which is ignored.
     */
    _readSequences: function() {
        var sequences = this._animationManager.getSequences();
        var numSeqs = this.readInt(false);
        var hasPhysicsBodies = this.readBool();
        var hasPhysicsNodes  = this.readBool();
        if (hasPhysicsBodies || hasPhysicsNodes) {
            cc.log('cc.BuilderReader10._readSequences: Physics bodies or nodes are not supported.  CCB file "' + this._currentCCBFile + '"');
        }

        for (var i = 0; i < numSeqs; i++) {
            var seq = new cc.BuilderSequence();
            var duration = this.readFloat();
            seq.setDuration(duration);
            seq.setName(this.adaptProp(this.readCachedString()));
            seq.setSequenceId(this.readInt(false));
            seq.setChainedSequenceId(this.readInt(true));

            if (!this._readCallbackKeyframesForSeq(seq))
                return false;
            if (!this._readSoundKeyframesForSeq(seq))
                return false;

            sequences.push(seq);
        }
        this._animationManager.setAutoPlaySequenceId(this.readInt(true));
        this._animationManager.fixedTimestep = hasPhysicsBodies || hasPhysicsNodes;
        return true;
    },

    /**
     * Version 10 adds float keyframe type.
     * To catch more types unsupported, throw error on an unsupported type.
     * If name is "opacity" and type is float, then convert float to byte.
     * Test case: 2014-11-29 Expect machine background opacity fades in.  Got disappears.
     * Retrofit position.
     *
     * @param   node    If this node has a normalized or scaled position, then keyframe position needs position type.
     *
     * cocos2d-iphone reader scale lock keyframe does not read a scale type.
     */
    readKeyframe:function (type, name, node) {
        var keyframe = new cc.BuilderKeyframe();
        keyframe.setTime(this.readFloat());
        var easingType = this.readInt(false);
        var easingOpt = 0;
        var value = null;

        if (easingType === CCB_KEYFRAME_EASING_CUBIC_IN
            || easingType === CCB_KEYFRAME_EASING_CUBIC_OUT
            || easingType === CCB_KEYFRAME_EASING_CUBIC_INOUT
            || easingType === CCB_KEYFRAME_EASING_ELASTIC_IN
            || easingType === CCB_KEYFRAME_EASING_ELASTIC_OUT
            || easingType === CCB_KEYFRAME_EASING_ELASTIC_INOUT) {
            easingOpt = this.readFloat();
        }

        keyframe.setEasingType(easingType);
        keyframe.setEasingOpt(easingOpt);

        if (type == CCB_PROPTYPE_CHECK) {
            value = this.readBool();
        } else if (type == CCB_PROPTYPE_BYTE) {
            value = this.readByte();
        } else if (type == CCB_PROPTYPE_COLOR3
        || type == CCB_PROPTYPE_COLOR4) {
            var c4 = this.readColor(name);
            value = cc.Color4BWapper.create(c4);
        } else if (type == CCB_PROPTYPE_FLOAT && name == PROPERTY_OPACITY) {
            value = this.float2byte(this.readFloat(), name);
        } else if (type == CCB_PROPTYPE_DEGREES
        || type == CCB_PROPTYPE_FLOAT) {
            value = this.readFloat();
        } else if (type == CCB_PROPTYPE_SCALELOCK
        || type == CCB_PROPTYPE_FLOATXY) {
            value = [this.readFloat(), this.readFloat()];
        } else if (type == CCB_PROPTYPE_SCALELOCK 
        || type == CCB_PROPTYPE_FLOATXY) {
            value = [this.readFloat(), this.readFloat()];
        } else if (type == CCB_PROPTYPE_POSITION) {
            var x = this.readFloat();
            var y = this.readFloat();
            value = this.convertPositionToAbsoluteKeyframe(x, y, node);
        } else if (type == CCB_PROPTYPE_SPRITEFRAME) {
            value = this.readSpriteFrame();
        }
        else {
            throw new Error("Expected to read keyframe type " + type 
                + " in file " + this._currentCCBFile);
        }
        keyframe.setValue(value);
        return keyframe;
    },

    /**
     * @return  Convert from v3 to absolute v2 position [x, y].
     * Cocos2d-x v2 hardcodes the animation manager to accept only position values as [x, y].
     * Test case:  Cocos2d-x v2.2.2.  Set base value or animation plays.  Error: Invalid Native Object.
     */
    convertPositionToAbsoluteKeyframe: function(x, y, node)
    {
        var points = cc.Node.convertPositionToPointsXY(x, y, node._positionType, 
            this.getContainerSize(node.getParent()));
        var value = [points.x, points.y, 0];
        var value = new Array();
        value.push(points.x);
        value.push(points.y);
        value.push(0);
        cc.log("cc.BuilderReader10.convertPositionToAbsoluteKeyframe: " + value);
        return value;
    },

    /**
     * Expects sprite sheets were already loaded.
     * If sprite frame image not found, load image file.
     */
    readSpriteFrame: function() 
    {
        var spriteFile = this.readCachedString();
        return cc.BuilderReader10.loadSpriteFrame(spriteFile, this._ccbRootPath, this._currentCCBFile);
    },

    /**
     * Cocos2D v2 has color and opacity range [0..255].
     * Cocos2D v3 has color and opacity range [0.0..1.0].
     * @param   float {Number}  Error if not a number or out of bounds [0.0..1.0].
     * @return  Cocos2D v3 [0.0..1.0] converted to v2 [0..255].
     */
    float2byte: function(float, name)
    {
        var max = 255;
        if (float < 0.0 || isNaN(float)) {
            throw new Error("Expected float between 0.0 and 1.0. Got " + float 
                + " for property name " + name);
        }
        else if (1.0 < float) {
            cc.log("cc.BuilderReader10.float2byte: Expected float between 0.0 and 1.0. Got " +  float 
                + " for property name " + name);
            max = 1;
        }
        var byte = Math.round(max * float);
        return byte;
    },

    /**
     * Version 10 reads keyframe RGBA (alpha) instead of RGB.  (Color4).  Whenever property type color3 (RGB) [0..255] is encountered, it is parsed as RGBA float [0.0 .. 1.0]
     */
    readColor: function(propertyName)
    {
        var r = this.float2byte(this.readFloat(), propertyName + ".r");
        var g = this.float2byte(this.readFloat(), propertyName + ".g");
        var b = this.float2byte(this.readFloat(), propertyName + ".b");
        var a = this.float2byte(this.readFloat(), propertyName + ".a");
        var c4 = cc.c4(r, g, b, a);
        return c4;
    },

    _readHeader:function () {
        /* If no bytes loaded, don't crash about it. */
        if (this._data == null) {
            return false;
        }

        /* Read magic bytes */
        var magicBytes = this._readStringFromBytes(this._currentByte, 4, true);
        this._currentByte += 4;

        if (magicBytes != 'ccbi') {
            return false;
        }

        /* Read version. */
        var version = this.readIntOLD(false);
        if (version != CCB_VERSION_10) {
            cc.log("WARNING! Incompatible ccbi file version (file: " + version + " reader: " + CCB_VERSION_10 + ")");
            return false;
        }

        return true;
    },

    _readStringFromBytes:function (startIndex, strLen, reverse) {
        reverse = reverse || false;
        var strValue = "";
        var i, locData = this._data, locCurrentByte = this._currentByte;
        if (reverse) {
            for (i = strLen - 1; i >= 0; i--)
                strValue += String.fromCharCode(locData[locCurrentByte + i]);
        } else {
            for (i = 0; i < strLen; i++)
                strValue += String.fromCharCode(locData[locCurrentByte + i]);
        }
        return strValue;
    },

    _readStringCache:function () {
        var numStrings = this.readInt(false);
        for (var i = 0; i < numStrings; i++)
            this._readStringCacheEntry();
        return true;
    },

    _readStringCacheEntry:function () {
        var b0 = this.readByte();
        var b1 = this.readByte();

        var numBytes = b0 << 8 | b1;

        var str = "", locData = this._data, locCurrentByte = this._currentByte;
        for (var i = 0; i < numBytes; i++) {
            var hexChar = locData[locCurrentByte + i].toString("16").toUpperCase();
            hexChar = hexChar.length > 1 ? hexChar : "0" + hexChar;
            str += "%" + hexChar;
        }
        str = decodeURIComponent(str);

        this._currentByte += numBytes;
        this._stringCache.push(str);
    },

    /**
     * Read but ignore UUID.
     * Try to create node as a custom class.  
     * Fall back on loading a node.
     * Test case:  Seal is a predefined custom class that inherits cc.Sprite.  Expect sprite loader and sprite node class.
     * Resolve class in case Cocos2D is on a mobile device without access to global namespace.
     * To debug, record current class name.
     * Disable zoomOnTouchDown by default.
     *
     */
    _readNodeGraph: function(parent) {
        /* Read class name. */
        var className = this.readCachedString();
        this._currentClassName = className;

        var locActionManager = this._animationManager;
        var memberVarAssignmentType = this.readInt(false);
        var memberVarAssignmentName;
        if (memberVarAssignmentType != CCB_TARGETTYPE_NONE) {
            memberVarAssignmentName = this.readCachedString();
        }

        var ccNodeLoader = this._ccNodeLoaderLibrary.guess(className, this._stringCache);
        var useLoader = null != this._ccNodeLoaderLibrary.getCCNodeLoader(className);
        var node;
        if (!useLoader) {
            var nodeClass = cc.BuilderReader10.getDefinitionByName(_ccbGlobalContext, className);
            if (nodeClass) {
                node = cc.BuilderReader10.tryCreate(nodeClass, className);
                useLoader = null == node;
            }
            else {
                useLoader = true;
            }
        }
        if (useLoader) {
            node = ccNodeLoader.loadCCNode(parent, this);
        }

        //set root node
        if (!locActionManager.getRootNode())
            locActionManager.setRootNode(node);

        //read animated properties
        var seqs = new cc._Dictionary();
        this._animatedProps = [];

        var i, locAnimatedProps = this._animatedProps;
        var numSequence = this.readInt(false);
        for (i = 0; i < numSequence; ++i) {
            var seqId = this.readInt(false);
            var seqNodeProps = new cc._Dictionary();

            var numProps = this.readInt(false);

            for (var j = 0; j < numProps; ++j) {
                var seqProp = new cc.BuilderSequenceProperty();
                var name = this.readCachedString();
                seqProp.setName(name);
                seqProp.setType(this.readInt(false));

                locAnimatedProps.push(name);
                var numKeyframes = this.readInt(false);
                var locKeyframes = seqProp.getKeyframes();
                for (var k = 0; k < numKeyframes; ++k) {
                    var keyFrame = this.readKeyframe(seqProp.getType(), name, node);
                    locKeyframes.push(keyFrame);
                }
                seqNodeProps.setObject(seqProp, seqProp.getName());
                this.getNodesWithAnimationManagers().push(node);
                this.getAnimationManagersForNodes().push(locActionManager);
                cc.log('cc.BuilderReader10._readNodeGraph: sequence "' + name + '"');
            }
            seqs.setObject(seqNodeProps, seqId);
        }

        if (seqs.count() > 0)
            locActionManager.addNode(node, seqs);

        var uuid = this.readInt(false);
        this._currentUuid = uuid;
        if(uuid)
        {
            /**/
            cc.log('cc.BuilderReader10._readNodeGraph: Node reference not supported.' 
                + '  CCB file "' + this._currentCCBFile + '"'
                + ', class name "' + className + '"'
                + ', UUID <' + uuid + '>');
            //*/
            if (undefined == this.nodeMapping) {
                this.nodeMapping = {};
            }
            this.nodeMapping[uuid] = node;
        }
        this.readPropertiesForNode(node, parent, this, ccNodeLoader);
        cc.BuilderReader10.mayScaleCapInsets(node, cc.BuilderReader10.capInsetsScale, false);
        cc.BuilderReader10.clipByStencilName(parent, node);
        if (node.getName && node.getName()) {
            cc.log('cc.BuilderReader10._readNodeGraph: node name "' + node.getName() + '"');
        }

        //handle sub ccb files(remove middle node)
        var isCCBFileNode = node instanceof cc.BuilderFile;
        if (isCCBFileNode) {
            var embeddedNode = node.getCCBFileNode();
            embeddedNode.setPosition(node.getPosition());
            embeddedNode._positionType = node._positionType;
            embeddedNode.setRotation(node.getRotation());
            embeddedNode.setScaleX(node.getScaleX());
            embeddedNode.setScaleY(node.getScaleY());
            if (node.getName) {
                var name = node.getName();
                cc.BuilderReader10.setName(embeddedNode, name);
            }
            var visible = node.isVisible() !== false;
            if (!visible) {
                cc.log("cc.BuilderReader10._readNodeGraph: hiding node " + embeddedNode);
            }
            embeddedNode.setVisible(visible);
            //embeddedNode.ignoreAnchorPointForPosition(node.isIgnoreAnchorPointForPosition());

            locActionManager.moveAnimationsFromNode(node, embeddedNode);
            node.setCCBFileNode(null);
            node._beforeEmbedded = node;
            node = embeddedNode;
        }
        var target = null, locMemberAssigner = null;
        if (memberVarAssignmentType != CCB_TARGETTYPE_NONE) {
            if (memberVarAssignmentType === CCB_TARGETTYPE_DOCUMENTROOT) {
                target = locActionManager.getRootNode();
            } else if (memberVarAssignmentType === CCB_TARGETTYPE_OWNER) {
                target = this._owner;
            }

            if (target != null) {
                var assigned = false;

                if (target != null && (target.onAssignCCBMemberVariable)) {
                    assigned = target.onAssignCCBMemberVariable(target, memberVarAssignmentName, node);
                }
                locMemberAssigner = this._ccbMemberVariableAssigner;
                if (!assigned && locMemberAssigner != null && locMemberAssigner.onAssignCCBMemberVariable) {
                    locMemberAssigner.onAssignCCBMemberVariable(target, memberVarAssignmentName, node);
                }
            }
        }

        // Assign custom properties.
        if (ccNodeLoader.getCustomProperties().length > 0) {
            var customAssigned = false;
            target = node;
            if(target != null && target.onAssignCCBCustomProperty != null) {
                var customProperties = ccNodeLoader.getCustomProperties();
                var customPropKeys = customProperties.allKeys();
                for(i = 0;i < customPropKeys.length;i++){
                    var customPropValue = customProperties.objectForKey(customPropKeys[i]);
                    customAssigned = target.onAssignCCBCustomProperty(target, customPropKeys[i], customPropValue);
                    locMemberAssigner = this._ccbMemberVariableAssigner;
                    if(!customAssigned && (locMemberAssigner != null) && (locMemberAssigner.onAssignCCBCustomProperty != null))
                        customAssigned = locMemberAssigner.onAssignCCBCustomProperty(target, customPropKeys[i], customPropValue);
                }
            }
        }

        this._animatedProps = null;
        var hasPhysicsBody = this.readBool();
        if (hasPhysicsBody) {
            this._readPhysicsBody(node, className);
        }

        /* Read and add children. */
        var numChildren = this.readInt(false);
        for (i = 0; i < numChildren; i++) {
            if (!node) {
                cc.log('cc.BuilderReader10._readNodeGraph: Expected node. Got ' + node); 
            }
            var child = this._readNodeGraph(node);
            node.addChild(child);
        }

        // FIX ISSUE #1860: "onNodeLoaded will be called twice if ccb was added as a CCBFile".
        // If it's a sub-ccb node, skip notification to CCNodeLoaderListener since it will be
        // notified at LINE #734: CCNode * child = this->readNodeGraph(node);
        if (!isCCBFileNode) {
            // Call onNodeLoaded
            if (node != null && node.onNodeLoaded)
                node.onNodeLoaded(node, ccNodeLoader);
            else if (this._ccNodeLoaderListener != null)
                this._ccNodeLoaderListener.onNodeLoaded(node, ccNodeLoader);
        }

        return node;
    },
   
    /**
     * Not supported.
     * Stub to avoid corrupting data when a physics body is read.
     */
    _readPhysicsBody: function(node, className)
    {
        cc.log("Physics body is not supported.  Stubbing.");
        var bodyShape = this.readInt(false);
        var cornerRadius = this.readFloat();

        var body;
        var i, j;
        if (bodyShape == 0)
        {
            var numPolygons = this.readInt(false);
            var polygons = [];
            for(j = 0; j < numPolygons; j++)
            {
                var numPoints = this.readInt(false);
                var points = [];
                for (i = 0; i < numPoints; i++)
                {
                    var x = this.readFloat();
                    var y = this.readFloat();
                    
                    points[i] = cc.p(x, y);
                }
                polygons[j] = {};
                polygons[j].polygon = points;
                polygons[j].numPoints = numPoints;
            }
            
            var shapes = [];
            for (i = 0; i < numPolygons; i++)
            {
                // [CCPhysicsShape polygonShapeWithPoints:polygons[i].polygon count:polygons[i].numPoints cornerRadius:cornerRadius];
                var shape = {polygon: polygons[i].polygon, 
                             count: polygons[i].numPoints, 
                             cornerRadius: cornerRadius};
                shapes.push(shape);
            }
            //Construct body.
            // [CCPhysicsBody bodyWithShapes:shapes];
            body = {shapes: shapes};
        }
        else if (bodyShape == 1)
        {
            var x = this.readFloat();
            var y = this.readFloat();
            
            var point = cc.p(x, y);
            // [CCPhysicsBody bodyWithCircleOfRadius:cornerRadius andCenter:point];
            body = {radius: cornerRadius, center: point};

        }
        if (!body) {
            throw new Error('[PHYSICS] Unknown body shape ' + bodyShape 
                + ', class name "' + className 
                + '", in CCB file: "' + this._currentCCBFile + '"');
        }

        var dynamic = this.readBool();
        var affectedByGravity = this.readBool();
        var allowsRotation = this.readBool();
       
        if (dynamic) body.type = "CCPhysicsBodyTypeDynamic";
        else body.type = "CCPhysicsBodyTypeStatic";
        
        var density = this.readFloat();
        var friction = this.readFloat();
        var elasticity = this.readFloat();
        
        var collisionType = this.readCachedString();
        var collisionCategories = this.readCachedString();
        var collisionMask = this.readCachedString();
        
        if (dynamic)
        {
            body.affectedByGravity = affectedByGravity;
            body.allowsRotation = allowsRotation;
        }
        
        body.density = density;
        body.friction = friction;
        body.elasticity = elasticity;
        
        body.collisionType = collisionType;
        
        var masks;
        if("" != collisionMask)
        {
            masks = collisionMask.split(";");
        }
        
        var categories;
        if("" != collisionCategories)
        {
            categories = collisionCategories.split(";");
        }

        body.collisionMask = masks;
        body.collisionCategories = categories;
        
        node.physicsBody = body;
    },

    _getBit:function () {
        var bit = (this._data[this._currentByte] & (1 << this._currentBit)) != 0;

        this._currentBit++;

        if (this._currentBit >= 8) {
            this._currentBit = 0;
            this._currentByte++;
        }

        return bit;
    },

    _alignBits:function () {
        if (this._currentBit) {
            this._currentBit = 0;
            this._currentByte++;
        }
    },

    _readUTF8:function () {
    },

    /**
     * Version 10 does not read platform.  All properties are set.
     * Version 10 adds color4 property.
     * Does version 10 not record name property type as string?
     *
     * Consolidate string and text.  Read if string or text is localized.
     *
     * Read if node is a physics body.  Throw error if physics body.
     * Adapt sprite frame property name to display frame, which the version 5 sprite loader expects.
     *
     * Ignore PhysicsNode gravity.  Reads floats to avoid corrupting data.
     * https://github.com/spritebuilder/SpriteBuilder/blob/979516511d1bd91d235ade5000bddd20c14c9ca8/SpriteBuilder/CCPhysicsNode/CCBPProperties.plist
     */
    readPropertiesForNode: function (node, parent, ccbReader, ccNodeLoader) {
        var numRegularProps = ccbReader.readInt(false);
        var numExtraProps = ccbReader.readInt(false);
        var propertyCount = numRegularProps + numExtraProps;

        for (var i = 0; i < propertyCount; i++) {
            var isExtraProp = (i >= numRegularProps);
            var type = ccbReader.readInt(false);
            var propertyName = ccbReader.readCachedString();
            /*
            if (node instanceof cc.ControlButton || node instanceof cc.LabelTTF) {
                cc.log("cc.BuilderReader10.readPropertiesForNode: " + propertyName);
            }
             */
            var setProp = true;

            //forward properties for sub ccb files
            if(node instanceof cc.BuilderFile){
                if(node.getCCBFileNode() && isExtraProp){
                    node = node.getCCBFileNode();
                    //skip properties that doesn't have a value to override
                    var getExtraPropsNames = node.getUserObject();
                    setProp = cc.ArrayContainsObject(getExtraPropsNames,propertyName);
                }
            } else if(isExtraProp && node == ccbReader.getAnimationManager().getRootNode()){
                var extraPropsNames = node.getUserObject();
                if(!extraPropsNames){
                    extraPropsNames = [];
                    this.setUserObject(node, extraPropsNames);
                }
                extraPropsNames.push(propertyName);
            }

            switch (type) {
                case CCB_PROPTYPE_POSITION:
                {
                    var position = this.readPosition();
                    if (setProp)
                        this.onHandlePropTypePosition(node, parent, propertyName, position, ccbReader);
                    break;
                }
                case CCB_PROPTYPE_POINT:
                {
                    var point = ccNodeLoader.parsePropTypePoint(node, parent, ccbReader);
                    if (setProp) {
                        ccNodeLoader.onHandlePropTypePoint(node, parent, propertyName, point, ccbReader);
                    }
                    break;
                }
                case CCB_PROPTYPE_POINTLOCK:
                {
                    var pointLock = ccNodeLoader.parsePropTypePointLock(node, parent, ccbReader);
                    if (setProp)
                        ccNodeLoader.onHandlePropTypePointLock(node, parent, propertyName, pointLock, ccbReader);
                    break;
                }
                case CCB_PROPTYPE_SIZE:
                {
                    var size = this.parsePropTypeSize(node, parent, ccbReader);
                    if (setProp) {
                        if (PROPERTY_MAXSIZE == propertyName) {
                            cc.log('Property "' + propertyName + '" not supported.');
                            //- propertyName = PROPERTY_PREFEREDSIZE;
                        }
                        else {
                            ccNodeLoader.onHandlePropTypeSize(node, parent, propertyName, size, ccbReader);
                        }
                    }
                    break;
                }
                case CCB_PROPTYPE_SCALELOCK:
                {
                    var scaleLock = ccNodeLoader.parsePropTypeScaleLock(node, parent, ccbReader, propertyName);
                    if (setProp)
                        ccNodeLoader.onHandlePropTypeScaleLock(node, parent, propertyName, scaleLock, ccbReader);
                    break;
                }
                case CCB_PROPTYPE_FLOATXY:
                {
                    var xy = ccNodeLoader.parsePropTypeFloatXY(node, parent, ccbReader);
                    if (setProp)
                        ccNodeLoader.onHandlePropTypeFloatXY(node, parent, propertyName, xy, ccbReader);
                    break;
                }

                case CCB_PROPTYPE_FLOAT:
                {
                    var f = ccNodeLoader.parsePropTypeFloat(node, parent, ccbReader);
                    if (setProp) {
                        ccNodeLoader.onHandlePropTypeFloat(node, parent, propertyName, f, ccbReader);
                    }
                    break;
                }
                case CCB_PROPTYPE_DEGREES:
                {
                    var degrees = ccNodeLoader.parsePropTypeDegrees(node, parent, ccbReader, propertyName);
                    if (setProp) {
                        ccNodeLoader.onHandlePropTypeDegrees(node, parent, propertyName, degrees, ccbReader);
                    }
                    break;
                }
                case CCB_PROPTYPE_FLOATSCALE:
                {
                    var floatScale = ccNodeLoader.parsePropTypeFloatScale(node, parent, ccbReader);
                    if (setProp) {
                        ccNodeLoader.onHandlePropTypeFloatScale(node, parent, propertyName, floatScale, ccbReader);
                    }
                    break;
                }
                case CCB_PROPTYPE_INTEGER:
                {
                    var integer = ccNodeLoader.parsePropTypeInteger(node, parent, ccbReader);
                    if (setProp) {
                        ccNodeLoader.onHandlePropTypeInteger(node, parent, propertyName, integer, ccbReader);
                    }
                    break;
                }
                case CCB_PROPTYPE_INTEGERLABELED:
                {
                    var integerLabeled = ccNodeLoader.parsePropTypeIntegerLabeled(node, parent, ccbReader);
                    if (setProp) {
                        ccNodeLoader.onHandlePropTypeIntegerLabeled(node, parent, propertyName, integerLabeled, ccbReader);
                    }
                    break;
                }
                case CCB_PROPTYPE_FLOATVAR:
                {
                    var floatVar = ccNodeLoader.parsePropTypeFloatVar(node, parent, ccbReader);
                    if (setProp) {
                        ccNodeLoader.onHandlePropTypeFloatVar(node, parent, propertyName, floatVar, ccbReader);
                    }
                    break;
                }
                case CCB_PROPTYPE_CHECK:
                {
                    var check = ccNodeLoader.parsePropTypeCheck(node, parent, ccbReader, propertyName);
                    if (setProp) {
                        if (PROPERTY_USER_INTERACTION_ENABLED == propertyName) {
                            cc.log('Property "' + propertyName + '" not supported.  Defaulting to "' + PROPERTY_ENABLED + '"');
                            propertyName = PROPERTY_ENABLED;
                        }
                        ccNodeLoader.onHandlePropTypeCheck(node, parent, propertyName, check, ccbReader);
                    }
                    break;
                }
                case CCB_PROPTYPE_SPRITEFRAME:
                {
                    var adaptedName = this.adaptProp(propertyName);
                    var spriteFrame = this.parsePropTypeSpriteFrame(node, parent, ccbReader, adaptedName);
                    if (setProp) {
                        if (!this.onHandlePropTypeSpriteFrame(node, adaptedName, spriteFrame)) {
                            ccNodeLoader.onHandlePropTypeSpriteFrame(node, parent, adaptedName, spriteFrame, ccbReader);
                        }
                    }
                    break;
                }
                case CCB_PROPTYPE_ANIMATION:
                {
                    var ccAnimation = ccNodeLoader.parsePropTypeAnimation(node, parent, ccbReader);
                    if (setProp) {
                        ccNodeLoader.onHandlePropTypeAnimation(node, parent, propertyName, ccAnimation, ccbReader);
                    }
                    break;
                }
                case CCB_PROPTYPE_TEXTURE:
                {
                    var ccTexture2D = ccNodeLoader.parsePropTypeTexture(node, parent, ccbReader);
                    if (setProp) {
                        ccNodeLoader.onHandlePropTypeTexture(node, parent, propertyName, ccTexture2D, ccbReader);
                    }
                    break;
                }
                case CCB_PROPTYPE_BYTE:
                {
                    var byteValue = ccNodeLoader.parsePropTypeByte(node, parent, ccbReader, propertyName);
                    if (setProp) {
                        ccNodeLoader.onHandlePropTypeByte(node, parent, propertyName, byteValue, ccbReader);
                    }
                    break;
                }
                case CCB_PROPTYPE_COLOR4:
                case CCB_PROPTYPE_COLOR3:
                {
                    var c4 = this.parsePropTypeColor4(node, parent, ccbReader, propertyName);
                    if (setProp) {
                        // Test case:  Load label.  Check log.  Expect color.   Got log of unexpected "fontColor".
                        if ("fontColor" == propertyName && node.setFontFillColor) {
                            node.setFontFillColor(c4);
                        }
                        else {
                            ccNodeLoader.onHandlePropTypeColor3(node, parent, propertyName, c4, ccbReader);
                        }
                        // Test case.  Load label.  outlineColor alpha 0.  Expect to see text.  Got no text.
                        /* Opacity */
                        var isFontColor = node instanceof cc.LabelTTF && "fontColor" == propertyName;
                        var isColor = (node instanceof cc.Sprite || node instanceof cc.Scale9Sprite) 
                            && !(node instanceof cc.LabelTTF) 
                            && !(node instanceof cc.ControlButton) 
                            && "color" == propertyName;
                        if (isFontColor || isColor) {
                            ccNodeLoader.onHandlePropTypeByte(node, parent, PROPERTY_OPACITY, c4.a, ccbReader);
                        }
                        // Opacity */
                    }
                    break;
                }
                case CCB_PROPTYPE_COLOR4VAR:
                {
                    var color4FVar = ccNodeLoader.parsePropTypeColor4FVar(node, parent, ccbReader);
                    if (setProp) {
                        ccNodeLoader.onHandlePropTypeColor4FVar(node, parent, propertyName, color4FVar, ccbReader);
                    }
                    break;
                }
                case CCB_PROPTYPE_FLIP:
                {
                    var flip = ccNodeLoader.parsePropTypeFlip(node, parent, ccbReader);
                    if (setProp) {
                        ccNodeLoader.onHandlePropTypeFlip(node, parent, propertyName, flip, ccbReader);
                    }
                    break;
                }
                case CCB_PROPTYPE_BLENDMODE:
                {
                    var blendFunc = ccNodeLoader.parsePropTypeBlendFunc(node, parent, ccbReader);
                    if (setProp) {
                        ccNodeLoader.onHandlePropTypeBlendFunc(node, parent, propertyName, blendFunc, ccbReader);
                    }
                    break;
                }
                case CCB_PROPTYPE_FNTFILE:
                {
                    var fntFile = ccbReader.getCCBRootPath() + ccNodeLoader.parsePropTypeFntFile(node, parent, ccbReader);
                    if (setProp) {
                        ccNodeLoader.onHandlePropTypeFntFile(node, parent, propertyName, fntFile, ccbReader);
                    }
                    break;
                }
                case CCB_PROPTYPE_FONTTTF:
                {
                    var fontTTF = ccNodeLoader.parsePropTypeFontTTF(node, parent, ccbReader);
                    fontTTF = cc.BuilderReader10.substituteFont(fontTTF);
                    if (setProp) {
                        // SpriteBuilder saves property "fontName" instead of "title|1".
                        if ("fontName" == propertyName && node.setTitleTTFForState) {
                            node.setTitleTTFForState(fontTTF, cc.CONTROL_STATE_NORMAL);
                        }
                        else {
                            ccNodeLoader.onHandlePropTypeFontTTF(node, parent, propertyName, fontTTF, ccbReader);
                        }
                    }
                    break;
                }
                case CCB_PROPTYPE_STRING:
                case CCB_PROPTYPE_TEXT:
                {
                    var text = ccbReader.readCachedString();
                    var localized = ccbReader.readBool();  // TODO
                    if (propertyName == PROPERTY_NAME)
                    {
                        if (setProp) {
                            cc.BuilderReader10.setName(node, text);
                        }
                    }
                    else {
                        if (setProp) {
                            if (node.hasOwnProperty(propertyName)) {
                                node[propertyName] = text;
                            }
                            // Test case: Load label.  Expect text.  Got "".
                            if (PROPERTY_STRING == propertyName && node.setString) {
                                node.setString(text);
                            }
                            else if ("title" == propertyName && node.setTitleForState) {
                                node.setTitleForState(text, cc.CONTROL_STATE_NORMAL);
                            }
                            else {
                                ccNodeLoader.onHandlePropTypeString(node, parent, propertyName, text, ccbReader);
                            }
                        }
                    }
                    break;
                }
                case CCB_PROPTYPE_BLOCK:
                {
                    var blockData = ccNodeLoader.parsePropTypeBlock(node, parent, ccbReader);
                    if (setProp) {
                        ccNodeLoader.onHandlePropTypeBlock(node, parent, propertyName, blockData, ccbReader);
                    }
                    break;
                }
                case CCB_PROPTYPE_BLOCKCCCONTROL:
                {
                    var blockCCControlData = ccNodeLoader.parsePropTypeBlockCCControl(node, parent, ccbReader);
                    if (setProp && blockCCControlData != null) {
                        ccNodeLoader.onHandlePropTypeBlockCCControl(node, parent, propertyName, blockCCControlData, ccbReader);
                    }
                    break;
                }
                case CCB_PROPTYPE_CCBFILE:
                {
                    var ccbFileNode = this.parsePropTypeCCBFile(node, parent, ccbReader, cc.BuilderReader10);
                    if (setProp) {
                        ccNodeLoader.onHandlePropTypeCCBFile(node, parent, propertyName, ccbFileNode, ccbReader);
                    }
                    break;
                }
                case CCB_PROPTYPE_NODE_REFERENCE:
                {
                    var uuid = this.readInt(false);
                    cc.log('cc.BuilderReader10._readPropertiesForNode: Node reference not supported.' 
                        + '  CCB file "' + this._currentCCBFile + '"'
                        + ', property name "' + propertyName + '"' 
                        + ', UUID: ' + uuid );
                    var mappedNode = this.nodeMapping[uuid];
                    if (undefined == mappedNode) {
                        throw new Error("CCBReader: Failed to find node UUID:" + uuid);
                    }
                    node[propertyName] = mappedNode;
                    break;
                }
                case CCB_PROPTYPE_FLOAT_CHECK:
                {
                    var float = this.readFloat();
                    var enabled = this.readBool();
                    cc.log('cc.BuilderReader10._readPropertiesForNode: float check not supported.' 
                        + '  CCB file "' + this._currentCCBFile + '"'
                        + ', property name "' + propertyName + '"'
                        + ', float: ' + float 
                        + ', enabled: ' + enabled );
                    node[propertyName + "Enabled"] = enabled;
                    if(enabled)
                    {
                        node[propertyName] = float;
                    }
                    break;
                }
                // Not supported:
                case CCB_PROPTYPE_EFFECTS:
                {
                    var numEffects = this.readInt();
                    if (0 != numEffects) {
                        throw new Error('cc.BuilderReader10._readPropertiesForNode: Effects not supported. Property name "' + propertyName + '" has a count of: ' + numEffects);
                    }
                    break;
                }
                default:
                    ASSERT_FAIL_UNEXPECTED_PROPERTYTYPE(type);
                        break;
            }
        }
    },

    adaptProp: function(name) {
        if (name == PROPERTY_SPRITEFRAME) {
            name = PROPERTY_DISPLAYFRAME;
        }
        return name;
    },

    /**
     * Use version 10.
     * Redundant procedures could be extracted.
     * Test case: Load version 10 CCBI which refers to sub files.  Expect subfiles are parsed with version 10 reader.
     * @param   readerClass Unlike other parsers, the readerClass is added.
     * @return  node of CCB file.
     *
     * Call "getByteArrayFromFile" with exactly one argument:  the file path.
     * In Cocos2D-HTML5 the other arguments are ignored.
     * Test case: 2014-11-28 Load with Cocos2d-x 2.2.2.  Error: wrong number of arguments: 3, was expecting 3.  (sic)
     * Extend nodes with animations by sub files.
     * Test case: 2014-11-28 Machines have Machine with animation.  Expect to access machine node animation.
     */
    parsePropTypeCCBFile:function (node, parent, ccbReader, readerClass) {
        var ccbFileName = ccbReader.getCCBRootPath() + ccbReader.readCachedString();

        /* Change path extension to .ccbi. */
        var ccbFileWithoutPathExtension = readerClass.deletePathExtension(ccbFileName);
        ccbFileName = ccbFileWithoutPathExtension + ".ccbi";

        //load sub file
        var fileUtils = cc.FileUtils.getInstance();
        var path = fileUtils.fullPathFromRelativePath(ccbFileName);
        var myCCBReader = new readerClass(ccbReader);
        myCCBReader._currentCCBFile = ccbFileName;

        var size ;
        var bytes = fileUtils.getByteArrayFromFile(path);

        myCCBReader.initWithData(bytes,ccbReader.getOwner());
        myCCBReader.getAnimationManager().setRootContainerSize(parent.getContentSize());
        myCCBReader.setAnimationManagers(ccbReader.getAnimationManagers());

        myCCBReader.getAnimationManager().setOwner(ccbReader.getOwner());
        var ccbFileNode = myCCBReader.readFileWithCleanUp(false);

        ccbReader.setAnimationManagers(myCCBReader.getAnimationManagers());
        this.extend(ccbReader.getNodesWithAnimationManagers(), myCCBReader.getNodesWithAnimationManagers());
        this.extend(ccbReader.getAnimationManagersForNodes(), myCCBReader.getAnimationManagersForNodes());
        this.autoPlayAnimation(ccbFileNode);

        return ccbFileNode;
    },

    extend: function(nodes, moreNodes)
    {
        for (var i = 0; i < moreNodes.length; i++) {
            nodes.push(moreNodes[i]);
        }
    },

    /**
     * Monkey patch NodeLoader to version 10 format:
     * Mostly add and adapt units.
     * Nevermind scale lock: read byte and int is probably the same.
     * Node loader is referenced in several files.
     * AnimationManager only sets RGB (Color3), so only save RGB to animation color.
     * Set base value of alpha to opacity.
     */
    parsePropTypeColor4: function (
    node, parent, ccbReader, propertyName) {
        var color = ccbReader.readColor(propertyName);
        if(ccbReader.getAnimatedProperties().indexOf(propertyName) > -1){
            ccbReader.getAnimationManager().setBaseValue(cc.Color3BWapper.create(color),
                node, propertyName);
        }
        if(ccbReader.getAnimatedProperties().indexOf(PROPERTY_OPACITY) > -1){
            ccbReader.getAnimationManager().setBaseValue(color.a, node, PROPERTY_OPACITY);
        }
        return color;
    },

    /**
     * If no parent, return window size.
     * Cocos2d-x says parent is null and crashes.
     * A child setting its position as a fraction of parent content size expects parent has a non-zero content size.
     */
    getContainerSize: function(parent) {
        var size;
        if (parent) {
            size = this.getAnimationManager().getContainerSize(parent);
        }
        else {
            size = cc.Director.getInstance().getWinSize();
            cc.log("cc.BuilderReader10.getContainerSize:"
                + " No parent of class " + this._currentClassName + "."
                + " Defaulting to window size: " + size.width + ", " + size.height );
        }
        return size;
    },

    /**
     * Map version 10 position to Cocos2d v2.
     * @param   posAndType      Object with properties of position and v3 positionType.  
     *                          Sets node property "_positionType" used by reading keyframe.
     *                          Sets base value for animation manager to be converted to absolute position.
     * @param   propertyName    If "position", set absolute position.
     */
    onHandlePropTypePosition: function(
    node, parent, propertyName, posAndType, ccbReader) {
        if (PROPERTY_POSITION == propertyName) {
            var containerSize = ccbReader.getContainerSize(parent);
            var points = cc.Node.convertPositionToPoints(posAndType, posAndType, containerSize);
            node.setPosition(points);
            node._positionType = posAndType;
            // cc.log("cc.BuilderReader10.onHandlePropTypePosition: _positionType.corner " 
            //     + node._positionType.corner);
            /*-
            var pt = cc._getAbsolutePosition(pos.x, pos.y, pos.type, 
                containerSize, propertyName);
            node.setPosition(cc.getAbsolutePosition(pt, pos.type, 
                containerSize, propertyName));   //different to -x    node.setPosition(pt);
            -*/
        }
        else {
            ASSERT_FAIL_UNEXPECTED_PROPERTY(propertyName);
        }

        if(ccbReader.getAnimatedProperties().indexOf(propertyName) > -1){
            var baseValue = this.convertPositionToAbsoluteKeyframe(posAndType.x, posAndType.y, node);
            cc.log("onHandlePropTypePosition: " + baseValue + " node " + node + " propertyName " + propertyName);
            ccbReader.getAnimationManager().setBaseValue(baseValue, node, propertyName);
        }

        return points;
    },

    /**
     * Reads xUnit and yUnit.
     */
    readPosition: function()
    {
        var pos = {};
        pos.x = this.readFloat();
        pos.y = this.readFloat();
        pos.corner = this.readByte();
        pos.xUnit = this.readByte();
        pos.yUnit = this.readByte();
        return pos;
    },

    /**
     * Also saves properties "w" and "h" just in case.
     */
    readSize: function()
    {
        var size = {};
        size.width = this.readFloat();
        size.height = this.readFloat();
        size.widthUnit = this.readByte();
        size.heightUnit = this.readByte();
        size.w = size.width;
        size.h = size.height;
        return size;
    },

    /**
     * Convert SpriteBuilder v3 content size to v2 absolute points.
     */
    parsePropTypeSize: function (
    node, parent, ccbReader) {
        var size = ccbReader.readSize();
        var containerSize = ccbReader.getContainerSize(parent);
        var size = cc.Node.convertContentSizeToPoints(size, size, containerSize);
        return size;
    },

    /**
     * Version 10 does not read sheet; instead preloads sprite frames.
     */
    parsePropTypeSpriteFrame: function (node, parent, ccbReader, propertyName) {
        var spriteFrame = ccbReader.readSpriteFrame();
        if(ccbReader.getAnimatedProperties().indexOf(propertyName) > -1){
            ccbReader.getAnimationManager().setBaseValue(spriteFrame, node, propertyName);
        }
        return spriteFrame;
    },

    /**
     * Selected frame for button.
     * @return  wasHandled {boolean}
     */
    onHandlePropTypeSpriteFrame: function(node, propertyName, spriteFrame) {
        var wasHandled = false;
        if (propertyName == PROPERTY_BACKGROUNDSPRITEFRAME_SELECTED) {
            if (spriteFrame != null) {
                node.setBackgroundSpriteFrameForState(spriteFrame, cc.CONTROL_STATE_SELECTED);
                wasHandled = true;
            }
        }
        else if (propertyName === PROPERTY_DISPLAYFRAME) {
            if(spriteFrame) {
                cc.log("cc.BuilderReader10.onHandlePropTypeSpriteFrame: " + spriteFrame.name 
                     + " node x " + node.getPositionX());
                node.setDisplayFrame(spriteFrame);
                wasHandled = true;
            }
            else {
                cc.log("cc.BuilderReader10.onHandlePropTypeSpriteFrame: ERROR: SpriteFrame is null");
            }
        }
        else if (propertyName === PROPERTY_NORMAL_MAP_SPRITEFRAME) {
            if(spriteFrame) {
                cc.log("cc.BuilderReader10.onHandlePropTypeSpriteFrame: Normal map sprite frame is not supported.");
            }
            wasHandled = true;
        }
        return wasHandled;
    },

});

/**
 * Alias cross-platform rectangle.
 * Cocos2d-js expects cc.rect but Cocos-html5 expects cc.Rect.  
 */
if (cc.rect && !cc.Rect) {
    cc.Rect = cc.rect;
}

cc.BuilderReader10.capInsetsScale = new cc.Rect(0, 0, 1, 1);

/**
 * Scale cap insets of ControlButton Scale9Sprite.  
 * To disable overwriting default cap insets, set this to null.
 * At (0, 0, 1, 1) cap insets disable Scale9Sprite.
 * Set preferred size to original sprite size.
 * Refers to numerical control states. 
 * Test case:  Cocos2d-js v2 does not accept string states.
 *
 * @param   enableZoomOnTouch   If defined, set zoom on touch down.
 */
cc.BuilderReader10.mayScaleCapInsets = function(node, scale, enableZoomOnTouch) {
    if (node instanceof cc.ControlButton) {
        if (undefined !== enableZoomOnTouch) {
            node.setZoomOnTouchDown(enableZoomOnTouch);
        }
        function hasArea(rect) {
            return rect && (rect.x || rect.y || rect.width || rect.height);
        }
        if (hasArea(scale)) {
            var states = [cc.CONTROL_STATE_NORMAL, cc.CONTROL_STATE_HIGHLIGHTED, 
                          cc.CONTROL_STATE_DISABLED, cc.CONTROL_STATE_SELECTED ];
            for (var s = 0; s < states.length; s++) {
                var state = states[s];
                var scale9Sprite = node.getBackgroundSpriteForState(state);
                if (scale9Sprite) {
                    var size = scale9Sprite.getOriginalSize();
                    var width = size.width;
                    var height = size.height;
                    var insets = new cc.Rect(scale.x * width, scale.y * height, 
                        scale.width * width, scale.height * height);
                    scale9Sprite.setCapInsets(insets);
                    var size = new cc.Size(width, height);
                    node.setPreferredSize(size);
                }
            }
        }
    }
}

/**
 * Workaround: For each target, create a unique function.
 *
 * GOTCHA: In Cocos2d-x, adding the same function and event to a different target silently fails.
 * "if (it->second->_jsFunc == jsFunc && arg2 == it->second->_type)"
 * https://github.com/cocos2d/cocos2d-x/blame/v2/scripting/javascript/bindings/jsb_cocos2dx_extension_manual.cpp#L687
 *
 * Test case:
 * cocos2d-html5 v2.2.2 accepts cc.Control.addTargetWithActionForControlEvents
 * However, cocos2d-x jsb this code had no apparent effect on second and third button.
 * The first button responds.
 * http://www.cocos2d-x.org/reference/html5-js/V2.2.3/index.html
 *
 * Bug reported here:
 * https://github.com/cocos2d/cocos2d-x/issues/9480
 */
cc.BuilderReader10.addTargetWithActionForControlEvents = function(control, methodOwner, method, event)
{
    if (null == method) {
        throw new Error("Calling will expect a method.");
    }
    var uniqueFunction = function(){
        return method.call(methodOwner, control, event);
    };
    return control.addTargetWithActionForControlEvents(methodOwner, uniqueFunction, event); 
};

cc.BuilderReader10.extendButton = false;
cc.BuilderReader10.UIScaleFactor = 1.0;
cc.BuilderReader10._ccbResolutionScale = 1;
cc.BuilderReader10.setResolutionScale = function(scale){
    cc.BuilderReader10._ccbResolutionScale = scale;
};

cc.BuilderReader10.getResolutionScale = function () {
    return cc.BuilderReader10._ccbResolutionScale;
};

cc.BuilderReader10.loadAsScene = function (ccbFilePath, owner, parentSize, ccbRootPath) {
    var getNode = cc.BuilderReader10.load(ccbFilePath, owner, parentSize, ccbRootPath);
    var scene = cc.Scene.create();
    scene.addChild(getNode);
    return scene;
};

cc.BuilderReader10.load = function (ccbFilePath, owner, parentSize, ccbRootPath) {
    ccbRootPath = ccbRootPath || cc.BuilderReader10.getResourcePath();
    var reader = new cc.BuilderReader10(cc.NodeLoaderLibrary.newDefaultCCNodeLoaderLibrary());
    return cc.BuilderReader10.loadReader(reader, ccbFilePath, owner, parentSize, ccbRootPath);
};

/**
 * Default loader library.  Optionally customize variable assigner, selector resolver, and loader listener.
 */
cc.BuilderReader10.defaultReader = function(ccbMemberVariableAssigner, ccbSelectorResolver, ccNodeLoaderListener) {
    var reader = new cc.BuilderReader10(cc.NodeLoaderLibrary.newDefaultCCNodeLoaderLibrary(),
        ccbMemberVariableAssigner, ccbSelectorResolver, ccNodeLoaderListener);
    return reader;
}

/**
 * If root node ends with no animation manager, assign the reader's.
 * @param   reader  Preconstruct and customize parameters.
 */
cc.BuilderReader10.loadReader = function (reader, ccbFilePath, owner, parentSize, ccbRootPath) {
    ccbRootPath = ccbRootPath || cc.BuilderReader10.getResourcePath();
    cc.BuilderReader10._currentReader = reader;
    reader.setCCBRootPath(ccbRootPath);
    if((ccbFilePath.length < 5)||(ccbFilePath.toLowerCase().lastIndexOf(".ccbi") != ccbFilePath.length - 5))
        ccbFilePath = ccbFilePath + ".ccbi";

    var node = reader.readNodeGraphFromFile(ccbFilePath, owner, parentSize);
    var i;
    var callbackName, callbackNode, callbackControlEvents, outletName, outletNode;
    // Assign owner callbacks & member variables
    if (owner) {
        // Callbacks
        var ownerCallbackNames = reader.getOwnerCallbackNames();
        var ownerCallbackNodes = reader.getOwnerCallbackNodes();
        for (i = 0; i < ownerCallbackNames.length; i++) {
            callbackName = ownerCallbackNames[i];
            callbackNode = ownerCallbackNodes[i];
            if(callbackNode instanceof cc.ControlButton)
                cc.BuilderReader10.addTargetWithActionForControlEvents(callbackNode, owner, owner[callbackName], 255);        //register all type of events
            else
                callbackNode.setCallback(owner[callbackName], owner);
        }

        // Variables
        var ownerOutletNames = reader.getOwnerOutletNames();
        var ownerOutletNodes = reader.getOwnerOutletNodes();
        for (i = 0; i < ownerOutletNames.length; i++) {
            outletName = ownerOutletNames[i];
            outletNode = ownerOutletNodes[i];
            owner[outletName] = outletNode;
        }
    }

    var nodesWithAnimationManagers = reader.getNodesWithAnimationManagers();
    var animationManagersForNodes = reader.getAnimationManagersForNodes();
    if(!nodesWithAnimationManagers || !animationManagersForNodes)
        return node;
    // Attach animation managers to nodes and assign root node callbacks and member variables
    for (i = 0; i < nodesWithAnimationManagers.length; i++) {
        var innerNode = nodesWithAnimationManagers[i];
        var animationManager = animationManagersForNodes[i];

        var j;
        innerNode.animationManager = animationManager;

        var documentControllerName = animationManager.getDocumentControllerName();
        if (!documentControllerName) continue;

        // Create a document controller
        var controller;
        if(documentControllerName.indexOf(".") > -1){
            var controllerNameArr = documentControllerName.split(".");
            controller = _ccbGlobalContext[controllerNameArr[0]];
            for(var ni = 1, niLen = controllerNameArr.length - 1; ni < niLen; ni++)
                controller = controller[controllerNameArr[ni]];
            controller = new controller[controllerNameArr[controllerNameArr.length - 1]]();
        }else
            controller = new _ccbGlobalContext[documentControllerName]();
        controller.controllerName = documentControllerName;

        innerNode.controller = controller;
        controller.rootNode = innerNode;

        // Callbacks
        var documentCallbackNames = animationManager.getDocumentCallbackNames();
        var documentCallbackNodes = animationManager.getDocumentCallbackNodes();
        var documentCallbackControlEvents = animationManager.getDocumentCallbackControlEvents();
        for (j = 0; j < documentCallbackNames.length; j++) {
            callbackName = documentCallbackNames[j];
            callbackNode = documentCallbackNodes[j];
            callbackControlEvents = documentCallbackControlEvents[j];
            if(callbackNode instanceof cc.ControlButton)
                cc.BuilderReader10.addTargetWithActionForControlEvents(callbackNode, controller, controller[callbackName], callbackControlEvents);        //register all type of events
            else
                callbackNode.setCallback(controller[callbackName], controller);
        }

        // Variables
        var documentOutletNames = animationManager.getDocumentOutletNames();
        var documentOutletNodes = animationManager.getDocumentOutletNodes();
        for (j = 0; j < documentOutletNames.length; j++) {
            outletName = documentOutletNames[j];
            outletNode = documentOutletNodes[j];

            controller[outletName] = outletNode;
        }

        if (controller.onDidLoadFromCCB && typeof(controller.onDidLoadFromCCB) == "function")
            controller.onDidLoadFromCCB();

        // Setup timeline callbacks
        var keyframeCallbacks = animationManager.getKeyframeCallbacks();
        for (j = 0; j < keyframeCallbacks.length; j++) {
            var callbackSplit = keyframeCallbacks[j].split(":");
            var callbackType = callbackSplit[0];
            var kfCallbackName = callbackSplit[1];

            if (callbackType == 1){ // Document callback
                animationManager.setCallFunc(cc.CallFunc.create(controller[kfCallbackName], controller), keyframeCallbacks[j]);
            } else if (callbackType == 2 && owner) {// Owner callback
                animationManager.setCallFunc(cc.CallFunc.create(owner[kfCallbackName], owner), keyframeCallbacks[j]);
            }
        }
    }
    if (!node.animationManager && reader.getAnimationManager()) {
        node.animationManager = reader.getAnimationManager();
    }

    return node;
};

/**
 * Set property "name".
 * Do not set tag.  Version 2.2.2 supports integer tag.  Cocos2d-x crashes if passing a string.
 * Version 3 supports string name.  Would be more compatible to getName/setName.
 */
cc.BuilderReader10.setName = function(node, name)
{
    if (node.setName) {
        node.setName(name);
    }
    else {
        node.name = name;
    }
};

/**
 * Set parent variable name of node, if valid and not already taken.
 * Flash Professional sets parent member variable to instance name.
 */
cc.BuilderReader10.trySetParentVariable = function(parent, name, node)
{
    if (!parent || !name) {
    }
    else if (undefined === parent[name]) {
        try {
            parent[name] = node;
        }
        catch (err) {
            cc.log('cc.BuilderReader10.trySetParentVariable: Cannot set "' 
                + parent + '" variable with a name of "' + name + '" to node "' + node + '".');
        }
    }
    else if (node !== parent[name]) {
        cc.log('cc.BuilderReader10.trySetParentVariable: "' 
            + parent + '" already has variable "' + name + '" of value "' + parent[name] + '".');
    }
};

/**
 * Recursively set parent member variables to child.
 */
cc.BuilderReader10.trySetDescendents = function(root)
{
    var children = root.getChildren();
    for (var c = 0; c < children.length; c++) {
        var child = children[c];
        if (child.getName) {
            var name = child.getName();
            cc.BuilderReader10.trySetParentVariable(root, name, child);
        }
        cc.BuilderReader10.trySetDescendents(child);
    }
};

/**
 * If no sprite file, then skip.
 */
cc.BuilderReader10.loadSpriteFrame = function(spriteFile, rootPath, ccbFile)
{
    if ("" == spriteFile) {
        return;
    }
    if (undefined == rootPath) {
        rootPath = "";
    }
    var frame;
    var frameCache = cc.SpriteFrameCache.getInstance();
    frame = frameCache.getSpriteFrame(spriteFile);
    if (!frame) {
        cc.log('cc.BuilderReader10.loadSpriteFrame: Sprite frame not found.  Loading separate "' + spriteFile 
            + '" in CCB file "' + ccbFile + '"');
        spriteFile = rootPath + spriteFile;
        var texture = cc.TextureCache.getInstance().addImage(spriteFile);
        var locContentSize = texture.getContentSize();
        var bounds = new cc.Rect(0, 0, locContentSize.width, locContentSize.height);
        frame = cc.SpriteFrame.createWithTexture(texture, bounds);
        frameCache.addSpriteFrame(frame, spriteFile);
    }
    cc.BuilderReader10.setName(frame, spriteFile);
    return frame;
};

cc.BuilderReader10._resourcePath = "";
cc.BuilderReader10.setResourcePath = function (rootPath) {
    cc.BuilderReader10._resourcePath = rootPath;
};

cc.BuilderReader10.getResourcePath = function () {
    return cc.BuilderReader10._resourcePath;
};

cc.BuilderReader10.lastPathComponent = function (pathStr) {
    var slashPos = pathStr.lastIndexOf("/");
    if (slashPos != -1) {
        return pathStr.substring(slashPos + 1, pathStr.length - slashPos);
    }
    return pathStr;
};

cc.BuilderReader10.deletePathExtension = function (pathStr) {
    var dotPos = pathStr.lastIndexOf(".");
    if (dotPos != -1) {
        return pathStr.substring(0, dotPos);
    }
    return pathStr;
};

cc.BuilderReader10.toLowerCase = function (sourceStr) {
    return sourceStr.toLowerCase();
};

cc.BuilderReader10.endsWith = function (sourceStr, ending) {
    if (sourceStr.length >= ending.length)
        return (sourceStr.lastIndexOf(ending) == 0);
    else
        return false;
};

cc.BuilderReader10.concat = function (stringA, stringB) {
    return stringA + stringB;
};

/**
 * @return  {Array} Subpaths to extensions.
 * @param   all {Boolean}   On cocos2d-html5 without loadExtensions, include dependencies.
 */
cc.BuilderReader10.requiresSubPaths = function(all) {
    var subPaths = [];
    subPaths.push('CCBReader/CCNodeLoader.js');
    subPaths.push('CCBReader/CCSpriteLoader.js');
    subPaths.push('CCBReader/CCControlLoader.js');
    subPaths.push('CCBReader/CCNodeLoaderLibrary.js');
    subPaths.push('CCBReader/CCBAnimationManager.js');
    subPaths.push('CCBReader/CCBSequence.js');
    subPaths.push('CCBReader/CCBRelativePositioning.js');
    subPaths.push('CCBReader/CCBKeyframe.js');
    subPaths.push('CCBReader/CCBValue.js');
    if (all) {
        subPaths.push('GUI/CCControlExtension/CCControl.js');
        subPaths.push('GUI/CCControlExtension/CCControlButton.js');
        subPaths.push('GUI/CCControlExtension/CCControlUtils.js');
        subPaths.push('GUI/CCControlExtension/CCInvocation.js');
        subPaths.push('GUI/CCControlExtension/CCScale9Sprite.js');
        subPaths.push('CCBReader/CCBReaderUtil.js');
        subPaths.push('CCBReader/CCBReader.js');
    }
    return subPaths;
};

cc.BuilderReader10.requiresFunc = function(all) {
    return function() {    
        var subPaths = cc.BuilderReader10.requiresSubPaths(all);
        var requireFunc = require;
        for (var i = 0; i < subPaths.length; i++) {
            var path = pathPrefix + subPaths[i];
            requireFunc(path);
        }
    }
};

cc.BuilderReader10.extendClassNames = [
    "ActionInstant",
    "ActionInterval",
    "Node",
    "LayerRGBA",
    "Control",
    "ControlButton",
    "NodeRGBA",
    "BuilderAnimationManager"
];

/**
 * If "extend" method not defined for each dependency, extend from cc.Class.
 * cocos2d-x JavaScript bindings might not have extended all of these.
 */
cc.BuilderReader10.extendClasses = function() {
    var names = cc.BuilderReader10.extendClassNames;
    for (var n = 0; n < names.length; n++) {
        var name = names[n];
        if (cc[name] && !cc[name].extend) {
            cc[name].extend = cc.Class.extend;
        }
    }
};

/**
 * Load SpriteBuilder reader dependencies.
 * Load required extensions that this depends on and extend.
 * Unless loadExtensions == true, the ControlButton and CCBReader were not included.
 */
cc.BuilderReader10.requiring = function() {
    if (cc.BuilderReader10.required) {
        return false;
    }
    cc.BuilderReader10.required = true;
    cc.BuilderReader10.requireDictionary();
    cc.BuilderReader10.extendClasses();
    return true;
};

/**
 * AnimationManager expects cc._Dictionary.
 * Cocos2d-x does not define cc._Dictionary.
 * Copied from cocos2d/core/platform/CCTypes.js
 * Whole CCTypes not copied in case other values were already defined in Cocos2d-x.
 */
cc.BuilderReader10.requireDictionary = function() {
    if (cc._Dictionary) {
        return;
    }
    cc._Dictionary = cc.Class.extend({
        _keyMapTb: null,
        _valueMapTb: null,
        __currId: 0,

        ctor: function () {
            this._keyMapTb = {};
            this._valueMapTb = {};
            this.__currId = 2 << (0 | (Math.random() * 10));
        },

        __getKey: function () {
            this.__currId++;
            return "key_" + this.__currId;
        },

        setObject: function (value, key) {
            if (key == null)
                return;

            var keyId = this.__getKey();
            this._keyMapTb[keyId] = key;
            this._valueMapTb[keyId] = value;
        },

        objectForKey: function (key) {
            if (key == null)
                return null;

            var locKeyMapTb = this._keyMapTb;
            for (var keyId in locKeyMapTb) {
                if (locKeyMapTb[keyId] === key)
                    return this._valueMapTb[keyId];
            }
            return null;
        },

        valueForKey: function (key) {
            return this.objectForKey(key);
        },

        removeObjectForKey: function (key) {
            if (key == null)
                return;

            var locKeyMapTb = this._keyMapTb;
            for (var keyId in locKeyMapTb) {
                if (locKeyMapTb[keyId] === key) {
                    delete this._valueMapTb[keyId];
                    delete locKeyMapTb[keyId];
                    return;
                }
            }
        },

        removeObjectsForKeys: function (keys) {
            if (keys == null)
                return;

            for (var i = 0; i < keys.length; i++)
                this.removeObjectForKey(keys[i]);
        },

        allKeys: function () {
            var keyArr = [], locKeyMapTb = this._keyMapTb;
            for (var key in locKeyMapTb)
                keyArr.push(locKeyMapTb[key]);
            return keyArr;
        },

        removeAllObjects: function () {
            this._keyMapTb = {};
            this._valueMapTb = {};
        },

        count: function() {
            return this.allKeys().length;
        }
    });
}

cc.BuilderReader10.extend = function()
{
    if (cc.BuilderReader10.extended) {
        return;
    }
    cc.BuilderReader10.extended = true;

    cc.BuilderReader10.extendClasses();
    /**
     * Like a ControlButton, except:
     * Do not zoom.
     * Sprite instead of Scale9Sprite.
     * Center margins on sprite.
     *
     * http://yannickloriot.com/2013/03/cccontrolextension-the-buttons/
     * http://yannickloriot.com/2013/02/the-control-extension-for-cocos2d/
     */
    cc.ControlSpriteButton = cc.ControlButton.extend({});

    cc.ControlSpriteButton_DISABLED = cc.ControlButton.extend({
        /**
         * Do not zoom.  Margin at image center.
         */
        initWithLabelAndBackgroundSprite: function(label, backgroundSprite) {
            var success = cc.ControlButton.prototype.initWithLabelAndBackgroundSprite.call(this, label, backgroundSprite);
            if (success) {
                this.setZoomOnTouchDown(false);
                this.centerMargins(backgroundSprite);
            }
            return success;
        },

        /**
         * Sprite instead of Scale9Sprite.
         * XXX To avoid sprite complaint and preserve content size:
         * alias setPreferredSize to setContentSize,
         *   and getPreferredSize to getContentSize.
         */
        setBackgroundSpriteFrameForState: function(spriteFrame, state) {
            var sprite = cc.Sprite.createWithSpriteFrame(spriteFrame);
            if (!sprite.setPreferredSize) {
                sprite.setPreferredSize = sprite.setContentSize;
                sprite.getPreferredSize = sprite.getContentSize;
            }
            this.setBackgroundSpriteForState(sprite, state);
            this.centerMargins(sprite);
        },

        centerMargins: function(sprite)
        {
            var size = sprite.getContentSize();
            cc.log("ControlSpriteButton.centerMargins: width " + size.width 
                                                   + " height " + size.height);
            this.setMargins(size.width * 0.5, size.height * 0.5);
        }
    });

    cc.ControlSpriteButtonLoader = cc.ControlButtonLoader.extend({
        _createCCNode: function(parent, ccbReader) {
            var controlButton = new cc.ControlSpriteButton();
            if (controlButton && controlButton.init()) {
                return controlButton;
            }
            return null;
        },

        /**
         * Listen for button touch beginning.
         * @param   blockData   Expects properties "selMenuHander" {Function} and "target" {ControlSpriteButton}.
         *                      Note "selMenuHander" (sic) was misspelled in CCNodeLoader, so misspell it here too.
         *                      Ignore if null. 
         */
        onHandlePropTypeBlock:function (node, parent, propertyName, blockData, ccbReader) {
            if (null != blockData) {
                cc.BuilderReader10.addTargetWithActionForControlEvents(node, 
                    blockData.target, blockData.selMenuHander, 
                    cc.CONTROL_EVENT_TOUCH_DOWN);
            }
        },
    });

    /**
     * Guess "CCNode".  If that is not found in string cache, then try any registered loader in string cache.
     * Test case:  Gameplay.ccbi is CCNode yet has CCSprite and CCBFile in string cache.
     * Test case:  MainScene.ccbi has CCButton in string cache.  Expect to load cc.ControlButtonLoader
     *
     * If class name is an empty string, guess "CCSprite".
     * Test case:  Load CCBI with multiple sprites and named nodes from SpriteBuilder 1.3.6.  
     * Second sprite reads class name "".  
     * XXX Some datum might have been overlooked.
     */
    cc.NodeLoaderLibrary.prototype.guessClass = function(stringCache, className) {
        var guessed;
        if ("" === className) {
            cc.log('cc.NodeLoaderLibrary.guessClass: Class name empty?  Was a property not read?  Cache: ' + stringCache);
            guessed = "CCSprite";
        }
        else {
            guessed = "CCNode";
        }
        var loaders = this._ccNodeLoaders;
        if (stringCache.indexOf(guessed) <= -1) {
            for (var registered in loaders) {
                if (0 <= stringCache.indexOf(registered)) {
                    guessed = registered;
                }
            }
        }
        cc.log('cc.NodeLoaderLibrary.guessClass: "' + guessed + '"');
        return guessed;
    };

    /**
     * If custom class, guess base class from strings.
     * Test case:  Seal.ccbi has class name of "Seal".  
     * Expect a CCSprite.
     */
    cc.NodeLoaderLibrary.prototype.guess = function(className, stringCache) {
        if (null == this.getCCNodeLoader("CCButton")) {
            var loaderClass;
            if (cc.BuilderReader10.extendButton) {
                cc.log("guess: Registering CCButton to ControlSpriteButtonLoader.");
                loaderClass = cc.ControlSpriteButtonLoader;
            }
            else {
                cc.log("guess: Registering CCButton to ControlButtonLoader.");
                loaderClass = cc.ControlButtonLoader;
            }
            var loader = new loaderClass();
            this.registerCCNodeLoader("CCButton", loader);
        }
        var ccNodeLoader = this.getCCNodeLoader(className);
        if (ccNodeLoader) {
            cc.log("cc.NodeLoaderLibrary.guess: loaded " + className );
        }
        else {
            var loaderClassName = this.guessClass(stringCache, className);
            ccNodeLoader = this.getCCNodeLoader(loaderClassName);
            if (ccNodeLoader) {
                cc.log('cc.NodeLoaderLibrary.guess: no corresponding node loader for "' 
                    + className + '". Defaulting to ' + loaderClassName);
            }
            else {
                throw new Error('Could not load "' + className + '" or "' + loaderClassName + '"');
            }
        }
        return ccNodeLoader;
    };


    /**
     * Cocos2d-x does not define this helper method.
     * Cocos2d-html5 defines this as a dummy echo.
     */
    if (!cc.FileUtils.prototype.fullPathFromRelativePath) {
        cc.FileUtils.prototype.fullPathFromRelativePath = function(pszRelativePath) {
            return pszRelativePath;
        };
    }

    /**
     * Cocos2d-x defines "size" but not "Size".  HTML5 defines "Size".
     */
    if (!cc.Size) {
        cc.Size = cc.size;
    }
    if (!cc.Point) {
        cc.Point = cc.p;
    }
    if (!cc.Color3B) {
        cc.Color3B = cc.c3b;
    }
    if (!cc.Color4B) {
        cc.Color4B = cc.c4b;
    }

    /**
     * Cocos2d-x v3 uses setName and getName.
     */
    if (!cc.Node.prototype.setName) {
        cc.Node.prototype.setName = function(name) {
            this._name = name;
        };
        cc.Node.prototype.getName = function() {
            return this._name;
        };
    }

    /**
     * HTML5 version does not support "isVisible", but JSB does not support "_visible".
     */
    if (!cc.Node.prototype.isVisible) {
        cc.Node.prototype.isVisible = function() {
            return this._visible;
        };
    }

    /**
     * Ovewrite v2 absolute position transformation with v3.
     * This is used in the animation manager and node loader.
     */
    if (!cc.getAbsolutePosition) {
        throw new Error("Expected cc.getAbsolutePosition(pt...)");
    }
    if (!cc._getAbsolutePosition) {
        throw new Error("Expected cc._getAbsolutePosition(x, y...)");
    }
    cc.getAbsolutePosition = cc.Node.convertPositionToPoints;
    cc._getAbsolutePosition = cc.Node.convertPositionToPointsXY;

    /**
     * Cocos2d-x does not define this helper method.
     * Dummy assignment that is ignored.
     */
    if (!cc.BuilderAnimationManager.prototype.setOwner) {
        cc.BuilderAnimationManager.prototype.setOwner = function(owner) {
            this._owner = owner;
        };
    }

}

/**
 * Consistent: "Wapper" was misspelled in "Color3BWapper".
 */
cc.Color4BWapper = cc.Class.extend({
    _color:null,
    ctor:function () {
        this._color = new cc.Color4B(0, 0, 0, 0);
    },
    getColor:function () {
        return this._color;
    }
});

cc.Color4BWapper.create = function (color) {
    var ret = new cc.Color4BWapper();
    if (ret) {
        ret._color.r = color.r;
        ret._color.g = color.g;
        ret._color.b = color.b;
        ret._color.a = color.a;
    }
    return ret;
};

/**
 * Load sprite sheets.  
 * Expects all sprite sheet property lists were preloaded.
 *
 * @param   plist   SpriteBuilder saves "spriteFrameFileList.plist" that contains array "spriteFrameFiles" with sprite sheet file names.  But the loader expects each sprite sheet was preloaded, so spriteFrameFileList.plist appears to not be used.
 */
cc.SpriteFrameCache.loadSpriteFramesFromFile = function(plist) {
    if (undefined == cc.SpriteFrameCache.loadedFile) {
        cc.SpriteFrameCache.loadedFile = {};
    }
    if (cc.SpriteFrameCache.loadedFile[plist])
        return;
    if(!plist)
        throw "cc.SpriteFrameCache.loadSpriteFramesFromFile(): plist should be non-null";
    var fileUtils = cc.FileUtils.getInstance();
    var fullPath = fileUtils.fullPathForFilename(plist);
    var dict = fileUtils.dictionaryWithContentsOfFileThreadSafe(fullPath);
    var frameCache = cc.SpriteFrameCache.getInstance();
    for (var s = 0; s < dict.spriteFrameFiles.length; s++) {
        var spriteSheet = dict.spriteFrameFiles[s];
        frameCache.addSpriteFrames(spriteSheet);
    }
    cc.SpriteFrameCache.loadedFile[plist] = true;
};

if (cc.Node.prototype.convertPositionToPoints) {
    throw new Error("Did not expect cc.Node.convertPositionToPoints was defined.");
}

/**
 * SpriteBuilder v3 format to absolute points in v2.
 * Static function for easy unit testing.  
 * Example @see TestCCBReader10.js
 *
 * Line ported from cocos2d-iphone v3 file CCNode.m
 * @param   positionType    Expects properties "corner", "xUnit", "yUnit".
 * @return  Retrofitted SpriteBuilder position and position type to Cocos2D v2 coordinate system of absolute points.
 * @param   UIScaleFactor {Number}   If not defined, default to 1.0.  One use case of UI scale factor, (which is different from content scale factor) is to set UI scale factor for iPhad to be at 50% and iPhone to be at 100% so UI elements, such as a HUD, is not much larger on iPad.  Example from cocos2d-iphone CCAppDelegate.m: director.UIScaleFactor = (UI_USER_INTERFACE_IDIOM() == UIUserInterfaceIdiomPhone ? 1.0 : 0.5);
 *
 * A previous porter had replaced iphone CapitalCase unit constants with html5 ALL_CAPS constants, so I continued that search and replace labor here for html5 consistency.
 */
cc.Node.convertPositionToPoints = function(position, positionType, 
parentContentSizeInPoints, propertyNameIgnored, UIScaleFactor) 
{
    if (isNaN(position.x)) 
    {
        throw new Error("Expected x.");
    }
    if (isNaN(position.y)) 
    {
        throw new Error("Expected y.");
    }
    if (positionType) { 
    if (isNaN(positionType.corner)) 
    {
        throw new Error("Expected corner.");
    }
    if (isNaN(positionType.xUnit)) 
    {
        throw new Error("Expected xUnit.");
    }
    if (isNaN(positionType.yUnit)) 
    {
        throw new Error("Expected yUnit.");
    }
    }
    else {
        // cc.log("cc.Node.convertPositionToPoints: Assuming v2 absolute positionType.");
        positionType = {
            corner: CCB_POSITIONTYPE_RELATIVE_BOTTOM_LEFT, 
            xUnit: CCB_POSITION_UNIT_POINTS, 
            yUnit: CCB_POSITION_UNIT_POINTS};
    }
    if (undefined === UIScaleFactor) 
    {
        UIScaleFactor = cc.BuilderReader10.UIScaleFactor;
    }
    var positionInPoints = new cc.p(0.0, 0.0);
    var x = 0.0;
    var y = 0.0;
    
    // Convert position to points
    var xUnit = positionType.xUnit;
    if (xUnit == CCB_POSITION_UNIT_POINTS) 
        x = position.x;
    else if (xUnit == CCB_POSITION_UNIT_UI_POINTS) 
        x = position.x * UIScaleFactor;
    else if (xUnit == CCB_POSITION_UNIT_NORMALIZED) 
        x = position.x * parentContentSizeInPoints.width;
    
    var yUnit = positionType.yUnit;
    if (yUnit == CCB_POSITION_UNIT_POINTS) 
        y = position.y;
    else if (yUnit == CCB_POSITION_UNIT_UI_POINTS) 
        y = position.y * UIScaleFactor;
    else if (yUnit == CCB_POSITION_UNIT_NORMALIZED) 
        y = position.y * parentContentSizeInPoints.height;
    
    // Account for reference corner
    var corner = positionType.corner;
    if (corner == CCB_POSITIONTYPE_RELATIVE_BOTTOM_LEFT)
    {
        // Nothing needs to be done
    }
    else if (corner == CCB_POSITIONTYPE_RELATIVE_TOP_LEFT)
    {
        // Reverse y-axis
        y = parentContentSizeInPoints.height - y;
    }
    else if (corner == CCB_POSITIONTYPE_RELATIVE_TOP_RIGHT)
    {
        // Reverse x-axis and y-axis
        x = parentContentSizeInPoints.width - x;
        y = parentContentSizeInPoints.height - y;
    }
    else if (corner == CCB_POSITIONTYPE_RELATIVE_BOTTOM_RIGHT)
    {
        // Reverse x-axis
        x = parentContentSizeInPoints.width - x;
    }
    
    positionInPoints.x = x;
    positionInPoints.y = y;
    
    return positionInPoints;
}

cc.Node.convertPositionToPointsXY = function(x, y, positionType, 
parentContentSizeInPoints, propertyNameIgnored, UIScaleFactor) 
{
    return cc.Node.convertPositionToPoints({x: x, y: y}, positionType, 
        parentContentSizeInPoints, propertyNameIgnored, UIScaleFactor);
}

if (cc.Node.prototype.convertContentSizeToPoints) {
    throw new Error("Did not expect cc.Node.convertContentSizeToPoints was defined.");
}

/**
 * SpriteBuilder v3 format to absolute points in v2.
 * Static function for easy unit testing.  
 * Example @see TestCCBReader10.js
 *
 * Line ported from cocos2d-iphone v3 file CCNode.m
 * @param   sizeType    Expects properties "widthUnit", "heightUnit".
 * @return  Retrofitted SpriteBuilder size and size type to Cocos2D v2 coordinate system of absolute points.
 * @param   UIScaleFactor {Number}   If not defined, default to 1.0.  
 */
cc.Node.convertContentSizeToPoints = function(size, sizeType, 
parentContentSizeInPoints, UIScaleFactor) 
{
    if (isNaN(size.width)) 
    {
        throw new Error("Expected width.");
    }
    if (isNaN(size.height)) 
    {
        throw new Error("Expected height.");
    }
    if (isNaN(sizeType.widthUnit)) 
    {
        throw new Error("Expected widthUnit.");
    }
    if (isNaN(sizeType.heightUnit)) 
    {
        throw new Error("Expected heightUnit.");
    }
    if (undefined === UIScaleFactor) 
    {
        UIScaleFactor = cc.BuilderReader10.UIScaleFactor;
    }
    var sizeInPoints = new cc.Size(0.0, 0.0);
    var width = 0.0;
    var height = 0.0;
    
    // Convert size to points
    var widthUnit = sizeType.widthUnit;
    if (widthUnit == CCB_POSITION_UNIT_POINTS) 
        width = size.width;
    else if (widthUnit == CCB_POSITION_UNIT_UI_POINTS) 
        width = size.width * UIScaleFactor;
    else if (widthUnit == CCB_POSITION_UNIT_NORMALIZED) 
        width = size.width * parentContentSizeInPoints.width;
    else if (widthUnit == CCB_SIZE_UNIT_INSET_POINTS) 
        width = parentContentSizeInPoints.width - size.width;
    else if (widthUnit == CCB_SIZE_UNIT_INSET_UI_POINTS) 
        width = parentContentSizeInPoints.width - size.width * UIScaleFactor;
    
    var heightUnit = sizeType.heightUnit;
    if (heightUnit == CCB_POSITION_UNIT_POINTS) 
        height = size.height;
    else if (heightUnit == CCB_POSITION_UNIT_UI_POINTS) 
        height = size.height * UIScaleFactor;
    else if (heightUnit == CCB_POSITION_UNIT_NORMALIZED) 
        height = size.height * parentContentSizeInPoints.height;
    else if (heightUnit == CCB_SIZE_UNIT_INSET_POINTS) 
        height = parentContentSizeInPoints.height - size.height;
    else if (heightUnit == CCB_SIZE_UNIT_INSET_UI_POINTS) 
        height = parentContentSizeInPoints.height - size.height * UIScaleFactor;
    
    sizeInPoints.width = width;
    sizeInPoints.height = height;
    
    return sizeInPoints;
}

/**
 * @param   scope {Object}      Where to search, such as global scope.
 * @param   address {String}    JavaScript address, such as "cc.Node".  Does not tolerate "".
 * Example @see TestCCBReader10.js
 */
cc.BuilderReader10.getDefinitionByName = function(scope, address)
{
    if (undefined == scope) {
        throw new Error("Expected scope.");
    }
    var lineage = address.split(".");
    if (lineage.length <= 0) {
        throw new Error("Expected address.");
    }
    var child;
    var parent = scope;
    for (var i = 0; i < lineage.length; i++) {
        var name = lineage[i];
        child = parent[name];
        parent = child;
    }
    return child;
}

/**
 * If create static function exists, call it.  Otherwise try to create an instance.
 * Cocos2d-x does not expose class, but does expose create static function.
 */
cc.BuilderReader10.tryCreate = function(nodeClass, logClassName)
{
    var node;
    if (nodeClass.create) {
        node = nodeClass.create();
        if (logClassName) {
            cc.log('cc.BuilderReader10._readNodeGraph: class created "' + logClassName + '"');
        }
    }
    else {
        try {
            node = new nodeClass();
            //- node = eval("new " + className + "()");
            if (logClassName) {
                cc.log('cc.BuilderReader10._readNodeGraph: new class name "' + logClassName + '"');
            }
        }
        catch (err) {
            cc.log('cc.BuilderReader10._readNodeGraph: failed to create class name "' + logClassName + '"');
        }
    }
    return node;
}

/**
 * If parent is a cc.ClippingNode and child is named "stencil", then set stencil.
 * Adapted from example: http://www.waitingfy.com/archives/1093
 *
 * Clipping UI convention, like Flash Professional "mask".
 *     Flash Professional
 *         mask layer
 *             masked layer
 *             masked layer
 *     Cocos2d
 *         ClippingNode (class)
 *             masked
 *             stencil (name of a cc.Sprite or cc.Node)
 *             masked
 * HTML5 without WebGL does not trim the pixels.  It shows rectangle rotated to the stencil.
 */
cc.BuilderReader10.clipByStencilName = function(clippingNode, nodeNamedStencil) {
    if (clippingNode instanceof cc.ClippingNode) {
        if ("stencil" == nodeNamedStencil.getName()) {
            clippingNode.setStencil(nodeNamedStencil);
            clippingNode.setAlphaThreshold(0.000001);
            var stencilSize = nodeNamedStencil.getContentSize();
            clippingNode.setContentSize(stencilSize.width, stencilSize.height);
            // nodeNamedStencil.setZOrder(-99999);
            nodeNamedStencil.setVisible(false);
            if (clippingNode._cangodhelpme) {
                clippingNode._cangodhelpme(true);
            }
        }
    }
}

/****************************************************************************
 Copyright (c) 2010-2012 cocos2d-x.org
 Copyright (c) 2008-2010 Ricardo Quesada
 Copyright (c) 2011      Zynga Inc.

 http://www.cocos2d-x.org

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/

/**
 * For JSB support, duplicate code of BuilderAnimationManager.
 * Cocos2d-x v2.2.2 bindings failed to map JS Array to a CCArray.
 * Test Case:
 * animationManager.setBaseValue([0, 0, 0], node, "position");
 * Invalid Native Object.
 * jsb_cocos2dx_extension_auto.cpp: js_cocos2dx_extension_CCBAnimationManager_setBaseValue
 *
 * Create Sequence without using an array.
 * I loaded SpriteBuilder layouts in Cocos2d-x and animations in Cocos-html5.  But Cocos2d-x crashes complaining that the JavaScript array is not converted to a Cocos2D array.
 * Fixed in Cocos2d-js after v2.2.2:
 * https://github.com/cocos2d/cocos2d-x/pull/3891/files
 */
cc.BuilderAnimationManager10 = cc.Class.extend({
    _sequences:null,
    _nodeSequences:null,
    _baseValues:null,
    _autoPlaySequenceId:0,

    _rootNode:null,
    _owner:null,
    _rootContainerSize:null,

    _delegate:null,
    _runningSequence:null,

    _documentOutletNames:null,
    _documentOutletNodes:null,
    _documentCallbackNames:null,
    _documentCallbackNodes:null,
    _documentCallbackControlEvents:null,
    _documentControllerName:"",
    _lastCompletedSequenceName:"",
    _keyframeCallbacks:null,
    _keyframeCallFuncs:null,

    _animationCompleteCallbackFunc:null,
    _target:null,
    _jsControlled:false,

    ctor:function () {
        this._rootContainerSize = cc.size(0, 0);
        this.init();
    },

    init:function () {
        this._sequences = [];
        this._nodeSequences = new cc._Dictionary();
        this._baseValues = new cc._Dictionary();

        this._documentOutletNames = [];
        this._documentOutletNodes = [];
        this._documentCallbackNames = [];
        this._documentCallbackNodes = [];
        this._documentCallbackControlEvents = [];

        this._keyframeCallbacks = [];
        this._keyframeCallFuncs = {};

        return true;
    },

    getSequences:function () {
        return this._sequences;
    },

    setSequences:function(seqs){
        this._sequences = seqs;
    },

    getAutoPlaySequenceId:function () {
        return this._autoPlaySequenceId;
    },
    setAutoPlaySequenceId:function (autoPlaySequenceId) {
        this._autoPlaySequenceId = autoPlaySequenceId;
    },

    getRootNode:function () {
        return this._rootNode;
    },
    setRootNode:function (rootNode) {
        this._rootNode = rootNode;
    },

    getOwner:function () {
        return this._owner;
    },
    setOwner:function (owner) {
        this._owner = owner;
    },

    addDocumentCallbackNode:function(node){
        this._documentCallbackNodes.push(node);
    },

    addDocumentCallbackName:function(name){
        this._documentCallbackNames.push(name);
    },

    addDocumentCallbackControlEvents:function(controlEvents){
        this._documentCallbackControlEvents.push(controlEvents);
    },

    addDocumentOutletNode:function(node){
        this._documentOutletNodes.push(node);
    },

    addDocumentOutletName:function(name){
        this._documentOutletNames.push(name);
    },

    setDocumentControllerName:function(name){
        this._documentControllerName = name;
    },

    getDocumentControllerName:function(){
        return this._documentControllerName;
    },

    getDocumentCallbackNames:function(){
        return this._documentCallbackNames;
    },

    getDocumentCallbackNodes:function(){
        return this._documentCallbackNodes;
    },

    getDocumentCallbackControlEvents:function(){
        return this._documentCallbackControlEvents;
    },

    getDocumentOutletNames:function(){
        return this._documentOutletNames;
    },

    getDocumentOutletNodes:function(){
        return this._documentOutletNodes;
    },

    getLastCompletedSequenceName:function(){
        return this._lastCompletedSequenceName;
    },

    getKeyframeCallbacks:function(){
        return this._keyframeCallbacks;
    },

    getRootContainerSize:function () {
        return this._rootContainerSize;
    },
    setRootContainerSize:function (rootContainerSize) {
        this._rootContainerSize = cc.size(rootContainerSize.width, rootContainerSize.height);
    },

    getDelegate:function () {
        return this._delegate;
    },
    setDelegate:function (delegate) {
        this._delegate = delegate;
    },

    getRunningSequenceName:function () {
        if(this._runningSequence)
            return this._runningSequence.getName();
        return null;
    },

    getContainerSize:function (node) {
        if (node)
            return node.getContentSize();
        else
            return this._rootContainerSize;
    },

    addNode:function (node, seq) {
        this._nodeSequences.setObject(seq, node);
    },
    setBaseValue:function (value, node, propName) {
        var props = this._baseValues.objectForKey(node);
        if (!props) {
            props = new cc._Dictionary();
            this._baseValues.setObject(props, node);
        }
        props.setObject(value, propName);
    },

    moveAnimationsFromNode:function(fromNode,toNode){
        // Move base values
        var locBaseValues = this._baseValues;
        var baseValue = locBaseValues.objectForKey(fromNode);
        if(baseValue != null) {
            locBaseValues.setObject(baseValue, toNode);
            locBaseValues.removeObjectForKey(fromNode);
        }

        // Move seqs
        var locNodeSequences = this._nodeSequences;
        var seqs = locNodeSequences.objectForKey(fromNode);
        if(seqs != null) {
            locNodeSequences.setObject(seqs, toNode);
            locNodeSequences.removeObjectForKey(fromNode);
        }
    },

    getActionForCallbackChannel:function(channel) {
        var lastKeyframeTime = 0;

        var actions = [];
        var keyframes = channel.getKeyframes();
        var numKeyframes = keyframes.length;

        for (var i = 0; i < numKeyframes; ++i) {
            var keyframe = keyframes[i];
            var timeSinceLastKeyframe = keyframe.getTime() - lastKeyframeTime;
            lastKeyframeTime = keyframe.getTime();
            if(timeSinceLastKeyframe > 0) {
                actions.push(cc.DelayTime.create(timeSinceLastKeyframe));
            }

            var keyVal = keyframe.getValue();
            var selectorName = keyVal[0];
            var selectorTarget = keyVal[1];

            if(this._jsControlled) {
                var callbackName = selectorTarget + ":" + selectorName;    //add number to the stream
                var callback = this._keyframeCallFuncs[callbackName];

                if(callback != null)
                    actions.push(callback);
            } else {
                var target;
                if(selectorTarget == CCB_TARGETTYPE_DOCUMENTROOT)
                    target = this._rootNode;
                else if (selectorTarget == CCB_TARGETTYPE_OWNER)
                    target = this._owner;

                if(target != null) {
                    if(selectorName.length > 0) {
                        var selCallFunc = 0;

                        var targetAsCCBSelectorResolver = target;

                        if(target.onResolveCCBCCCallFuncSelector != null)
                            selCallFunc = targetAsCCBSelectorResolver.onResolveCCBCCCallFuncSelector(target, selectorName);
                        if(selCallFunc == 0)
                            cc.log("cc.BuilderAnimationManager10.getActionForCallbackChannel: Skipping selector '" + selectorName + "' since no CCBSelectorResolver is present.");
                        else
                            actions.push(cc.CallFunc.create(selCallFunc,target));
                    } else {
                        cc.log("cc.BuilderAnimationManager10.getActionForCallbackChannel: Unexpected empty selector.");
                    }
                }
            }
        }
        if(actions.length < 1)
            return null;

        return cc.Sequence.create.apply(this, actions);
    },
    getActionForSoundChannel:function(channel) {
        var lastKeyframeTime = 0;

        var actions = [];
        var keyframes = channel.getKeyframes();
        var numKeyframes = keyframes.length;

        for (var i = 0; i < numKeyframes; ++i) {
            var keyframe = keyframes[i];
            var timeSinceLastKeyframe = keyframe.getTime() - lastKeyframeTime;
            lastKeyframeTime = keyframe.getTime();
            if(timeSinceLastKeyframe > 0) {
                actions.push(cc.DelayTime.create(timeSinceLastKeyframe));
            }

            var keyVal = keyframe.getValue();
            var soundFile = cc.BuilderReader.getResourcePath() + keyVal[0];
            var pitch = parseFloat(keyVal[1]), pan = parseFloat(keyVal[2]), gain = parseFloat(keyVal[3]);
            actions.push(cc.BuilderSoundEffect.create(soundFile, pitch, pan, gain));
        }

        if(actions.length < 1)
            return null;

        return cc.Sequence.create.apply(this, actions);
    },

    runAnimationsForSequenceNamed:function(name){
        this.runAnimationsForSequenceIdTweenDuration(this._getSequenceId(name), 0);
    },

    runAnimationsForSequenceNamedTweenDuration:function(name, tweenDuration){
         this.runAnimationsForSequenceIdTweenDuration(this._getSequenceId(name), tweenDuration);
    },

    runAnimationsForSequenceIdTweenDuration:function(nSeqId, tweenDuration){
        cc.log("runAnimationsForSequenceIdTweenDuration: " + nSeqId + " tween " + tweenDuration);
        if(nSeqId === -1)
            throw "cc.BuilderAnimationManager.runAnimationsForSequenceIdTweenDuration(): Sequence id should not be -1";
        tweenDuration = tweenDuration || 0;

        this._rootNode.stopAllActions();

        var allKeys = this._nodeSequences.allKeys();
        for(var i  = 0,len = allKeys.length  ; i< len;i++){
            var node = allKeys[i];
            node.stopAllActions();

            var seqs = this._nodeSequences.objectForKey(node);
            var seqNodeProps = seqs.objectForKey(nSeqId);
            var j;
            var seqNodePropNames = [];
            if(seqNodeProps){
                var propKeys = seqNodeProps.allKeys();
                for(j = 0; j < propKeys.length; j++){
                    var propName = propKeys[j];
                    var seqProp = seqNodeProps.objectForKey(propName);
                    seqNodePropNames.push(propName);

                    this._setFirstFrame(node, seqProp,tweenDuration);
                    this._runAction(node,seqProp,tweenDuration);
                }
            }

            var nodeBaseValues = this._baseValues.objectForKey(node);
            if(nodeBaseValues){
                var baseKeys = nodeBaseValues.allKeys();
                for(j = 0; j < baseKeys.length;j++){
                    var selBaseKey =  baseKeys[j];
                    if(seqNodePropNames.indexOf(selBaseKey) == -1){
                        var value = nodeBaseValues.objectForKey(selBaseKey);
                        if(value != null)
                            this._setAnimatedProperty(selBaseKey,node, value, tweenDuration);
                    }
                }
            }
        }

        // Make callback at end of sequence
        var seq = this._getSequence(nSeqId);
        var completeAction = cc.Sequence.create(cc.DelayTime.create(seq.getDuration() + tweenDuration),
            cc.CallFunc.create(this._sequenceCompleted,this));
        this._rootNode.runAction(completeAction);

        // Playback callbacks and sounds
        var action;
        if (seq.getCallbackChannel()) {
            // Build sound actions for channel
            action = this.getActionForCallbackChannel(seq.getCallbackChannel());
            if (action) {
                this._rootNode.runAction(action);
            }
        }

        if (seq.getSoundChannel()) {
            // Build sound actions for channel
            action = this.getActionForSoundChannel(seq.getSoundChannel());
            if (action) {
                this._rootNode.runAction(action);
            }
        }
        // Set the running scene
        this._runningSequence = this._getSequence(nSeqId);
    },

    runAnimations:function (name, tweenDuration) {
        tweenDuration = tweenDuration || 0;
        var nSeqId;
        if(typeof(name) === "string")
            nSeqId = this._getSequenceId(name);
        else
            nSeqId = name;

        this.runAnimationsForSequenceIdTweenDuration(nSeqId, tweenDuration);
    },

    setAnimationCompletedCallback:function(target,callbackFunc){
        this._target = target;
        this._animationCompleteCallbackFunc = callbackFunc;
    },

    setCompletedAnimationCallback:function(target,callbackFunc){
        this.setAnimationCompletedCallback(target,callbackFunc);
    },
    setCallFunc:function(callFunc, callbackNamed) {
        this._keyframeCallFuncs[callbackNamed] = callFunc;
    },

    debug:function () {
    },

    _getBaseValue:function (node, propName) {
        var props = this._baseValues.objectForKey(node);
        if (props)
            return props.objectForKey(propName);
        return null;
    },

    _getSequenceId:function (sequenceName) {
        var element = null;
        var locSequences = this._sequences;
        for (var i = 0, len = locSequences.length; i < len; i++) {
            element = locSequences[i];
            if (element && element.getName() === sequenceName)
                return element.getSequenceId();
        }
        return -1;
    },

    _getSequence:function (sequenceId) {
        var element = null;
        var locSequences = this._sequences;
        for (var i = 0, len = locSequences.length; i < len; i++) {
            element = locSequences[i];
            if (element && element.getSequenceId() === sequenceId)
                return element;
        }
        return null;
    },

    /**
     * Use cc.RotateTo instead of cc.BuilderRotateTo.
     * Duplicate JavaScript of cc.BuilderRotateTo.
     * Cocos2d-js v2 did not respond to cc.BuilderRotateTo.
     * Cocos2d-x v2.2.2. Try rotation.  No rotation and log "[Action update]. override me"
     * Still says this with cc.BuilderRotateTo10.
     */
    _getAction:function (keyframe0, keyframe1, propName, node) {
        var duration = keyframe1.getTime() - (keyframe0 ? keyframe0.getTime() : 0);
        var getArr,type,getValueArr, x, y;

        if (propName === "rotation") {
            return cc.RotateTo.create(duration, keyframe1.getValue());
                //- cc.BuilderRotateTo10.create(duration, keyframe1.getValue());
        } else if (propName === "rotationX") {
            return cc.BuilderRotateXTo.create(duration, keyframe1.getValue());
        } else if (propName === "rotationY") {
            return cc.BuilderRotateYTo.create(duration, keyframe1.getValue());
        } else if (propName === "opacity") {
            return cc.FadeTo.create(duration, keyframe1.getValue());
        } else if (propName === "color") {
            var selColor = keyframe1.getValue().getColor();
            return cc.TintTo.create(duration, selColor.r, selColor.g, selColor.b);
        } else if (propName === "visible") {
            var isVisible = keyframe1.getValue();
            if (isVisible) {
                return cc.Sequence.create(cc.DelayTime.create(duration), cc.Show.create());
            } else {
                return cc.Sequence.create(cc.DelayTime.create(duration), cc.Hide.create());
            }
        } else if (propName === "displayFrame") {
            return cc.Sequence.create(cc.DelayTime.create(duration), cc.BuilderSetSpriteFrame.create(keyframe1.getValue()));
        } else if(propName === "position"){
            getArr = this._getBaseValue(node,propName);
            type = getArr[2];

            //get relative position
            getValueArr = keyframe1.getValue();
            x = getValueArr[0];
            y = getValueArr[1];

            var containerSize = this.getContainerSize(node.getParent());

            var absPos = cc._getAbsolutePosition(x,y, type,containerSize,propName);

            return cc.MoveTo.create(duration,absPos);
        } else if( propName === "scale"){
            getArr = this._getBaseValue(node,propName);
            type = getArr[2];

            //get relative position
            getValueArr = keyframe1.getValue();
            x = getValueArr[0];
            y = getValueArr[1];

            if(type === CCB_SCALETYPE_MULTIPLY_RESOLUTION){
                //TODO need to test
                var resolutionScale = cc.BuilderReader.getResolutionScale();
                x *= resolutionScale;
                y *= resolutionScale;
            }

            return cc.ScaleTo.create(duration,x,y);
        } else if( propName === "skew") {
            //get relative position
            getValueArr = keyframe1.getValue();
            x = getValueArr[0];
            y = getValueArr[1];
            return cc.SkewTo.create(duration,x,y);
        } else {
            cc.log("BuilderReader: Failed to create animation for property: " + propName);
        }
        return null;
    },

    _setAnimatedProperty:function (propName, node, value, tweenDuration) {
        if(tweenDuration > 0){
            // Create a fake keyframe to generate the action from
            var kf1 = new cc.BuilderKeyframe();
            kf1.setValue(value);
            kf1.setTime(tweenDuration);
            kf1.setEasingType(CCB_KEYFRAME_EASING_LINEAR);

            // Animate
            var tweenAction = this._getAction(null, kf1, propName, node);
            node.runAction(tweenAction);
        } else {
            // Just set the value
            var getArr, nType, x,y;
            if(propName === "position"){
                getArr = this._getBaseValue(node,propName);
                nType = getArr[2];

                x = value[0];
                y = value[1];
                node.setPosition(cc._getAbsolutePosition(x,y,nType, this.getContainerSize(node.getParent()),propName));
            }else if(propName === "scale"){
                getArr = this._getBaseValue(node,propName);
                nType = getArr[2];

                x = value[0];
                y = value[1];

                cc.setRelativeScale(node,x,y,nType,propName);
            } else if( propName === "skew") {
                x = value[0];
                y = value[1];
                node.setSkewX(x);
                node.setSkewY(y);
            }else {
                // [node setValue:value forKey:name];
                // TODO only handle rotation, opacity, displayFrame, color
                if(propName === "rotation"){
                    node.setRotation(value);
                } else if(propName === "opacity"){
                    node.setOpacity(value);
                } else if(propName === "displayFrame"){
                    node.setDisplayFrame(value);
                } else if(propName === "color"){
                    var ccColor3B = value.getColor();
                    if(ccColor3B.r !== 255 || ccColor3B.g !== 255 || ccColor3B.b !== 255){
                        node.setColor(ccColor3B);
                    }
                } else if( propName === "visible"){
                    value = value || false;
                    node.setVisible(value);
                } else {
                    cc.log("unsupported property name is "+ propName);
                }
            }
        }
    },

    _setFirstFrame:function (node, seqProp, tweenDuration) {
        var keyframes = seqProp.getKeyframes();

        if (keyframes.length === 0) {
            // Use base value (no animation)
            var baseValue = this._getBaseValue(node, seqProp.getName());
            if(!baseValue)
                cc.log("cc.BuilderAnimationManager._setFirstFrame(): No baseValue found for property");
            this._setAnimatedProperty(seqProp.getName(), node, baseValue, tweenDuration);
        } else {
            // Use first keyframe
            var keyframe = keyframes[0];
            this._setAnimatedProperty(seqProp.getName(), node, keyframe.getValue(), tweenDuration);
        }
    },

    _getEaseAction:function (action, easingType, easingOpt) {
        if (easingType === CCB_KEYFRAME_EASING_LINEAR || easingType === CCB_KEYFRAME_EASING_INSTANT ) {
            return action;
        } else if (easingType === CCB_KEYFRAME_EASING_CUBIC_IN) {
            return cc.EaseIn.create(action, easingOpt);
        } else if (easingType === CCB_KEYFRAME_EASING_CUBIC_OUT) {
            return cc.EaseOut.create(action, easingOpt);
        } else if (easingType === CCB_KEYFRAME_EASING_CUBIC_INOUT) {
            return cc.EaseInOut.create(action, easingOpt);
        } else if (easingType === CCB_KEYFRAME_EASING_BACK_IN) {
            return cc.EaseBackIn.create(action);
        } else if (easingType === CCB_KEYFRAME_EASING_BACK_OUT) {
            return cc.EaseBackOut.create(action);
        } else if (easingType === CCB_KEYFRAME_EASING_BACK_INOUT) {
            return cc.EaseBackInOut.create(action);
        } else if (easingType === CCB_KEYFRAME_EASING_BOUNCE_IN) {
            return cc.EaseBounceIn.create(action);
        } else if (easingType === CCB_KEYFRAME_EASING_BOUNCE_OUT) {
            return cc.EaseBounceOut.create(action);
        } else if (easingType === CCB_KEYFRAME_EASING_BOUNCE_INOUT) {
            return cc.EaseBounceInOut.create(action);
        } else if (easingType === CCB_KEYFRAME_EASING_ELASTIC_IN) {
            return cc.EaseElasticIn.create(action, easingOpt);
        } else if (easingType === CCB_KEYFRAME_EASING_ELASTIC_OUT) {
            return cc.EaseElasticOut.create(action, easingOpt);
        } else if (easingType === CCB_KEYFRAME_EASING_ELASTIC_INOUT) {
            return cc.EaseElasticInOut.create(action, easingOpt);
        } else {
            cc.log("BuilderReader: Unkown easing type " + easingType);
            return action;
        }
    },

    _runAction:function (node, seqProp, tweenDuration) {
        var keyframes = seqProp.getKeyframes();
        var numKeyframes = keyframes.length;

        if (numKeyframes > 1) {
            // Make an animation!
            var actions = [];

            var keyframeFirst = keyframes[0];
            var timeFirst = keyframeFirst.getTime() + tweenDuration;

            if (timeFirst > 0) {
                actions.push(cc.DelayTime.create(timeFirst));
            }

            for (var i = 0; i < numKeyframes - 1; ++i) {
                var kf0 = keyframes[i];
                var kf1 = keyframes[(i+1)];

                var action = this._getAction(kf0, kf1, seqProp.getName(), node);
                if (action) {
                    // Apply easing
                    action = this._getEaseAction(action, kf0.getEasingType(), kf0.getEasingOpt());
                    actions.push(action);
                }
            }

            var seq = cc.Sequence.create.apply(this, actions);
            node.runAction(seq);
        }
    },

    _sequenceCompleted:function () {
        var locRunningSequence = this._runningSequence;

        var locRunningName = locRunningSequence.getName();

        if(this._lastCompletedSequenceName != locRunningSequence.getName()){
            this._lastCompletedSequenceName = locRunningSequence.getName();
        }

        var nextSeqId = locRunningSequence.getChainedSequenceId();
        this._runningSequence = null;

        if (nextSeqId != -1)
            this.runAnimations(nextSeqId, 0);

        if (this._delegate)
            this._delegate.completedAnimationSequenceNamed(locRunningName);

        if(this._target && this._animationCompleteCallbackFunc){
            this._animationCompleteCallbackFunc.call(this._target);
        }
    },

    /**
     * An extension to transform keyframe values.
     */
    adjustScale: function(targetNode, factor) {
        var allKeys = this._nodeSequences.allKeys();
        for(var i  = 0,len = allKeys.length  ; i< len;i++){
            var node = allKeys[i];
            if (targetNode != node) {
                continue;
            }
            var seqs = this._nodeSequences.objectForKey(node);
            for (var nSeqId = 0; nSeqId < this._sequences.length; nSeqId++) {
                var seqNodeProps = seqs.objectForKey(nSeqId);
                var j;
                if(seqNodeProps){
                    var propKeys = seqNodeProps.allKeys();
                    for(j = 0; j < propKeys.length; j++){
                        var propName = propKeys[j];
                        if (PROPERTY_SCALE != propName) {
                            continue;
                        }
                        var seqProp = seqNodeProps.objectForKey(propName);
                        var keyframes = seqProp.getKeyframes();
                        for (var k = 0; k < keyframes.length; k++) {
                            var value = keyframes[k].getValue();
                            value[0] *= factor;
                            value[1] *= factor;
                            // cc.log("cc.BuilderAnimator10.adjustScale: " + value);
                        }
                    }
                }
            }
        }
    }
});

/**
 * gotoAndPlay sequence name if not already at that currentState.
 * @return if did go.
 */
cc.BuilderAnimationManager10.setState = function(rootNode, sequenceName)
{
    var isChanging = false;
    if (sequenceName != rootNode.currentState) {
        rootNode.currentState = sequenceName;
        var isRunning = rootNode.animationManager 
            && sequenceName == rootNode.animationManager.getRunningSequenceName();
        if (!isRunning) {
            isChanging = cc.BuilderAnimationManager10.gotoAndPlay(rootNode, sequenceName);
        }
    }
    return isChanging;
}

/**
 * All descendents of root simultaneously play the named sequence label.
 * The name "gotoAndPlay" follows Flash MovieClip gotoAndPlay.
 * @return  If any descendent started playing anything now.
 */
cc.BuilderAnimationManager10.gotoAndPlay = function(rootNode, sequenceName)
{
    var isStarting = false;
    var animationManager = rootNode.animationManager;
    if (animationManager && 0 <= animationManager._getSequenceId(sequenceName)) {
        animationManager.runAnimations(sequenceName);
        isStarting = true;
    }
    var children = rootNode.getChildren();
    for (var c = 0; c < children.length; c++) {
        var child = children[c];
        var isChildStarting = cc.BuilderAnimationManager10.gotoAndPlay(child, sequenceName);
        isStarting = isChildStarting || isStarting;
    }
    return isStarting;
}

/**
 * @return Deepest child node with name by "getName".
 */
cc.BuilderAnimationManager10.getDescendentByName = function(root, name)
{
    var children = root.getChildren();
    var found;
    for (var c = 0; c < children.length; c++) {
        var child = children[c];
        if (child.getName && child.getName() == name) {
            found = child;
        }
        var foundChild = cc.BuilderAnimationManager10.getDescendentByName(child, name);
        if (foundChild) {
            found = foundChild;
        }
        if (found) {
            return found;
        }
    }
}

/**
 * @return Depth first animation manager in tree.
 */
cc.BuilderAnimationManager10.getManager = function(rootNode)
{
    var animationManager = rootNode.animationManager;
    if (animationManager) {
        return animationManager;
    }
    var children = rootNode.getChildren();
    for (var c = 0; c < children.length; c++) {
        var child = children[c];
        animationManager = cc.BuilderAnimationManager10.getManager(child);
        if (animationManager) {
            return animationManager;
        }
    }
}

cc.BuilderReader10.fontSubstitutions = cc.BuilderReader10.fontSubstitutions || {};

/**
 * SpriteBuilder does not show all the fonts.
 */
cc.BuilderReader10.substituteFont = function(fontTTF)
{
    var subs = cc.BuilderReader10.fontSubstitutions;
    if (fontTTF in subs) {
        fontTTF = subs[fontTTF];
    }
    return fontTTF;
}
