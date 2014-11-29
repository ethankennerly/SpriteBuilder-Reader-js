SpriteBuilder-Reader-js
=======================

TODO:  JavaScript CCBI reader of version 10, SpriteBuilder format compatible with Cocos2d 2.2.2.  


Usage
-----

Clone cocos2d-html commit 5fd806ab9f72865618205195b59e7281eedffbad

In terminal:
cd directory that contains cocos2d-html and SpriteBuilder-Reader-js
python -m SimpleHTTPServer

Open Chrome or another web browser.  
Open console.
Load URL:
localhost:8000/SpriteBuilder-Reader-js

In TestCCBReader10.js, uncomment the tests you want to see.  
Reload.

SpriteBuilder CCBI and images from MakeGamesWithUs tutorial assets:
https://github.com/MakeGamesWithUs/PeevedPenguins-Spritebuilder/tree/master/PeevedPenguins.spritebuilder/Source/Resources/Published-iOS

https://github.com/MakeGamesWithUs/PeevedPenguins-Spritebuilder/blob/master/PeevedPenguins.spritebuilder/SpriteBuilder%20Resources/Bear.ccb

CocosBuilder example MainScene.ccbi from store example by Soomla:
https://github.com/soomla/cocos2dx-js-store-example/blob/master/Resources/ccb

CCBReader.js was forked from Cocos2d 2.2.1
https://github.com/cocos2d/cocos2d-html5
commit f8b8f4c


Features
--------

 * Version 10 deprecated JS controlled animation callbacks.
 
 * Version 10 reads integer from variable length byte array.
  
 * Reading node graph parent:
  
 * Reads visibility.
 
 * Replaces tag with name in string cache.
  
 * Version 10 reads keyframe RGBA (alpha) instead of RGB.  (Color4).  Whenever property type color3 (RGB) [0..255] is encountered, it is parsed as RGBA float [0.0 .. 1.0]
  
 * Sprite sheet framing comes from sprite frame class.
   If sprite frame image not found, load image file.
  
 * Ignore physics and joints.  
 
 * Expects joints are the last part of the file and are not read.
 
 * Version 10 fixes "preferedSize" to be "preferredSize".

 * Background sprite frame names updated from number to a name:
   'backgroundSpriteFrame|Normal'
   'backgroundSpriteFrame|Highlighted' 
 
 * ControlSprite Button:
       Constructed:  Does not zoom on touch down by default.
       Load Sprite instead of Scale9Sprite.
 
 * Button 'userInteractionEnabled' interpreted as 'enabled'.

Todo
----

 * Wire Peeved Penguins play button to log message.

 * Load Peeved Penguins Gameplay, ignoring physics.

 * Load sprite sheet.
 
Not supported
-------------

 * Node properties:  corner, x unit, y unit.  How would Cocos2D version 2.2.2 interpret these?
 
 * Version 10 adds node properties:  position type, scale X, scale Y.  How would Cocos2D version 2.2.2 interpret these?
 
 * Adapt position and size type and size xUnit and yUnit, which were handled in CCNodeLoader. 

 * Position Peeved Penguins example of button with normalized and absolute position.

 * Scale content to percent of parent size.

 * Animation of sprite frames.
 
 * Node property:  BlockCCControl, Block.

 * Nodes with physics.  Opening a scene with physics causes a crash.

 * Internet Explorer 9: For version 5 and version 10, FileUtils calls TypedArray (bytearray), which is not supported in IE9.
 <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays>

 * Only sets position property, not shadowOffset position.  Does not support shadowOffset.
 
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
 *     Unexpected property: 'fontColor'!
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

 * configCocos2d.plist 
 
 * Control button Scale9Sprite not supported.
 
 * Strings.ccblang
 
 * Node reference.  UUID.  Wired.  But no use case.
 
 * Float scale.
 
 * Effects.
 
 * Button maxSize
 
 * fileLookup.plist
 
 * SpriteKit sprite frame reader override.

