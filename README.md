SpriteBuilder-Reader-js
=======================

Upgrade JavaScript CCBI reader from version 5 to version 10, SpriteBuilder format only compatible with Cocos2d-js 2.2.2.

Ethan Kennerly


Usage
-----

In terminal:
Go to directory that will contain cocos2d-html and SpriteBuilder-Reader-js
Example:

    cd ../SpriteBuilder-Reader-js/..

Clone cocos2d-html5 v2.2.2.

    git clone https://github.com/cocos2d/cocos2d-html5.git 
    cd cocos2d-html5
    git checkout 5fd806ab9f72865618205195b59e7281eedffbad

Start a local web server.

    cd ..
    python -m SimpleHTTPServer

Open Chrome or another web browser.  
Open JavaScript console.
Load URL:

    localhost:8000/SpriteBuilder-Reader-js

In a text editor, open:

    src/TestCCBReader10.js

Uncomment the tests you want to see.  
Reload.


Credits
-------

SpriteBuilder CCBI and images from MakeGamesWithUs tutorial assets:
<https://github.com/MakeGamesWithUs/PeevedPenguins-Spritebuilder/tree/master/PeevedPenguins.spritebuilder/Source/Resources/Published-iOS>

Plist of Bear:
<https://github.com/MakeGamesWithUs/PeevedPenguins-Spritebuilder/blob/master/PeevedPenguins.spritebuilder/SpriteBuilder%20Resources/Bear.ccb>

CocosBuilder example MainScene.ccbi from store example by Soomla:
<https://github.com/soomla/cocos2dx-js-store-example/blob/master/Resources/ccb>

CCBReader.js was forked from Cocos2d 2.2.1
<https://github.com/cocos2d/cocos2d-html5>
commit f8b8f4c

Cocos2D-Swift implements reader version 10:
<https://github.com/cocos2d/cocos2d-swift/blob/398daf201e5188bc288a644e162f44d1a3ab8304/cocos2d-ui/CCBReader/CCBReader.m>

SpriteBuilder implements corresponding writer:
<https://github.com/spritebuilder/SpriteBuilder/blob/master/SpriteBuilder/Cocos2D%20iPhone/CCBXCocos2diPhoneWriter.m>


Features
--------

 * Layout by absolute position.

 * Node position properties:  Corner, x unit, y unit.
 
 * Adapt position type and and size type.

 * Scale content to percent of parent size.

 * Wire node animations of properties: position, rotation, opacity.

 * Read keyframe RGBA (alpha) instead of RGB.  (Color4).  Whenever property type color3 (RGB) [0..255] is encountered, it is parsed as RGBA float [0.0 .. 1.0]
  
 * Read integer from variable length byte array.
  
 * ControlSprite Button:
       Constructed:  Does not zoom on touch down by default.
       Load Sprite instead of Scale9Sprite.
 
 * Sprite sheet framing comes from sprite frame class.
   If sprite frame image not found, load image file.
  
 * Reads visibility.
 
 * Try to set name.
  
 * Background sprite frame names updated from number to a name:
   'backgroundSpriteFrame|Normal'
   'backgroundSpriteFrame|Highlighted' 
 
 * Removed reading JS controlled animation callbacks.

 * Button 'userInteractionEnabled' interpreted as 'enabled'.

 * Fixes "preferedSize" to be "preferredSize".

 * Ignore physics and joints.  
 
 * Expects joints are the last part of the file and are not read.
 

Extra Features
--------------

 * Set parent variable to child names, like Flash instance names.


Not supported
-------------

 * Timeline callback or sound effect.

 * Animation of any node properties not tested above, such as: scale, skew.

 * Flipped X or Y.  Supported in cocos2d-html5, but not in cocos2d-js v.2.2.2.  Can scale -1 instead.

 * Animation of sprite frames.
 
 * Button properties:
 *     'title' --> 'title|Normal'
 *     'title|1' --> 'title|Normal'
 *     Background 
 *     Skipping selector 'play' since no CCBSelectorResolver is present.
 *     Unexpected property: 'block'!
 *     Unexpected property: 'maxSize'!
 *     Unexpected property: 'labelColor|Highlighted'!
 *     Unexpected property: 'opacity'!
 *     Unexpected property: 'fontName'!
 *     Unexpected property: 'fontSize'!
 *     Unexpected property: 'horizontalPadding'!
 *     Unexpected property: 'verticalPadding'!
 *     Unexpected property: 'opacity'!
 *     Unexpected property: 'outlineColor'!
 *     Unexpected property: 'opacity'!
 *     Unexpected property: 'outlineWidth'!
 *     Unexpected property: 'shadowColor'!
 *     Unexpected property: 'opacity'!
 *     Unexpected property: 'shadowBlurRadius'!
 *     Unexpected property: 'shadowOffset'! 
 *     backgroundOpacity|Normal
 *     backgroundOpacity|Highlighted
 *     backgroundOpacity|Disabled
 *     backgroundOpacity|Selected
 *     labelOpacity|Normal
 *     labelOpacity|Highlighted
 *     labelOpacity|Disabled
 *     labelOpacity|Selected

 * Node property:  BlockCCControl.

 * Nodes with physics.

 * Internet Explorer 9: For version 5 and version 10, FileUtils calls TypedArray (bytearray), which is not supported in IE9.
 <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays>

 * Only sets position property, not shadowOffset position.  Does not support shadowOffset.
 
 * configCocos2d.plist 
 
 * Control button Scale9Sprite.
 
 * Strings.ccblang
 
 * Node reference.  UUID.  Wired.  But no use case.
 
 * Float scale.
 
 * Effects.
 
 * Normal map.
 
 * fileLookup.plist
 
 * SpriteKit sprite frame reader override.

 * fontColor: SpriteBuilder appears to save font color and shadow color as byte instead of float.
<https://github.com/spritebuilder/SpriteBuilder/blob/master/SpriteBuilder/CCLabelTTF/CCBPProperties.plist#L178>
