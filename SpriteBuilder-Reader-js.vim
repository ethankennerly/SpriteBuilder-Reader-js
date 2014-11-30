let SessionLoad = 1
if &cp | set nocp | endif
let s:cpo_save=&cpo
set cpo&vim
cnoremap <C-F4> c
inoremap <C-F4> c
cnoremap <C-Tab> w
inoremap <C-Tab> w
cmap <S-Insert> +
imap <F5> :r !date /T:r !time /To
imap <S-Insert> 
xnoremap  ggVG
snoremap  gggHG
onoremap  gggHG
nnoremap  gggHG
vnoremap  "+y
noremap  
nnoremap  :update
vnoremap  :update
onoremap  :update
nmap  "+gP
omap  "+gP
vnoremap  "+x
noremap  
noremap  u
cnoremap   :simalt ~
inoremap   :simalt ~
map <silent> \t :call MakeGreen()
nmap gx <Plug>NetrwBrowseX
nmap <S-Insert> "+gP
nnoremap <C-Tab> w
nnoremap <C-F4> c
nnoremap <silent> <Plug>NetrwBrowseX :call netrw#NetrwBrowseX(expand("<cWORD>"),0)
onoremap <C-F4> c
vnoremap <C-F4> c
onoremap <C-Tab> w
vnoremap <C-Tab> w
vmap <S-Insert> 
vnoremap <BS> d
map <F5> :r !date /T:r !time /To
vmap <C-Del> "*d
vnoremap <S-Del> "+x
vnoremap <C-Insert> "+y
omap <S-Insert> "+gP
cnoremap  gggHG
inoremap  gggHG
inoremap  :update
cmap  +
inoremap  
inoremap  u
noremap   :simalt ~
let &cpo=s:cpo_save
unlet s:cpo_save
set autoindent
set backspace=indent,eol,start
set display=uhex
set encoding=utf-8
set expandtab
set fileencodings=ucs-bom,utf-8,default,latin1
set guifont=SimHei:h10:cANSI
set helplang=En
set hlsearch
set ignorecase
set keymodel=startsel,stopsel
set ruler
set scrollopt=ver,jump,hor
set selection=exclusive
set selectmode=mouse,key
set shiftwidth=4
set smartindent
set softtabstop=4
set noswapfile
set tabstop=4
set whichwrap=b,s,<,>,[,]
set window=47
set nowritebackup
let s:so_save = &so | let s:siso_save = &siso | set so=0 siso=0
let v:this_session=expand("<sfile>:p")
silent only
cd C:\archive\SpriteBuilder-Reader-js
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
badd +1 SpriteBuilder-Reader-js.vim
badd +21 README.md
badd +1 src\TestCCBReader10.js
badd +178 src\CCBReader10.js
badd +348 src\CCBReader10.m
badd +1 src\CCBReader.js
badd +50 \archive\cocos2d-html5\extensions\CCBReader\CCBReader.js
badd +1 notes.txt
badd +1 src\CCBReader.m
badd +1 \archive\cocos2d-html5\extensions\CCBReader\CCBReaderUtil.js
badd +47 \archive\cocos2d-html5\extensions\CCBReader\CCNodeLoader.js
badd +263 \archive\cocos2d-html5\cocos2d\CCConfiguration.js
badd +250 \archive\cocos2d-html5\cocos2d\platform\CCFileUtils.js
badd +1 \Users\Ethan\vimfiles\ftplugin\javascript.vim
badd +51 \archive\cocos2d-html5\cocos2d\base_nodes\CCNode.js
badd +567 \archive\cocos2d-html5\cocos2d\CCDirector.js
badd +169 \archive\cocos2d-html5\cocos2d\platform\jsloader.js
badd +90 \archive\cocos2d-html5\extensions\CCBReader\CCNodeLoaderLibrary.js
badd +1 src\CCBReader_private.h
badd +29 \archive\cocos2d-html5\extensions\CCBReader\CCBRelativePositioning.js
badd +613 \archive\cocos2d-html5\extensions\CCBReader\CCBAnimationManager.js
badd +83 \archive\cocos2d-html5\extensions\CCBReader\CCBValue.js
badd +480 \archive\cocos2d-html5\cocos2d\CCDrawingPrimitives.js
badd +82 \archive\cocos2d-html5\cocos2d\layers_scenes_transitions_nodes\CCLayer.js
badd +1286 \archive\cocos2d-html5\cocos2d\layers_scenes_transitions_nodes\CCTransition.js
badd +329 \archive\cocos2d-html5\cocos2d\menu_nodes\CCMenuItem.js
badd +270 \archive\cocos2d-html5\cocos2d\platform\CCTypes.js
badd +400 \archive\cocos2d-html5\cocos2d\CCLoader.js
badd +1988 \archive\cocos2d-html5\cocos2d\actions\CCActionInterval.js
badd +413 \archive\cocos2d-html5\cocos2d\sprite_nodes\CCSpriteFrame.js
badd +128 \archive\cocos2d-html5\cocos2d\sprite_nodes\CCSpriteFrameCache.js
badd +4 res\Normal\main.plist
badd +1 res\ccb\Normal\MainScene.ccbi
badd +918 \archive\PeevedPenguins-Spritebuilder\PeevedPenguins.spritebuilder\Source\libs\cocos2d-iphone\cocos2d-ui\CCBReader\CCBReader.m
badd +1 \archive\PeevedPenguins-Spritebuilder\PeevedPenguins.spritebuilder\Source\libs\cocos2d-iphone\cocos2d-ui\CCBReader\CCBReader_Private.h
badd +293 \archive\cocos2d-html5\extensions\CCBReader\CCControlLoader.js
badd +213 \archive\cocos2d-html5\extensions\CCBReader\CCSpriteLoader.js
badd +506 \archive\PeevedPenguins-Spritebuilder\PeevedPenguins.spritebuilder\Source\libs\cocos2d-iphone\UnitTests\CCNodeTests.m
badd +99 \archive\PeevedPenguins-Spritebuilder\PeevedPenguins.spritebuilder\Source\libs\cocos2d-iphone\cocos2d\CCNode.h
badd +1837 \archive\PeevedPenguins-Spritebuilder\PeevedPenguins.spritebuilder\Source\libs\cocos2d-iphone\cocos2d\CCNode.m
badd +163 \archive\PeevedPenguins-Spritebuilder\PeevedPenguins.spritebuilder\Source\libs\cocos2d-iphone\cocos2d\ccTypes.h
badd +59 \archive\PeevedPenguins-Spritebuilder\PeevedPenguins.spritebuilder\Source\libs\cocos2d-iphone\cocos2d\CCActionTween.m
badd +539 \archive\PeevedPenguins-Spritebuilder\PeevedPenguins.spritebuilder\Source\libs\cocos2d-iphone\cocos2d\Platforms\Mac\CCDirectorMac.m
badd +470 \archive\PeevedPenguins-Spritebuilder\PeevedPenguins.spritebuilder\Source\libs\cocos2d-iphone\cocos2d-ui\CCButton.m
badd +54 \archive\PeevedPenguins-Spritebuilder\PeevedPenguins.spritebuilder\Source\libs\cocos2d-iphone\cocos2d-ui\CCControlSubclass.h
badd +3 res\ccb\Normal\Bear.ccbi
badd +50 src\myApp.js
badd +7 src\resource.js
badd +57 main.js
badd +10 index.html
badd +277 res\ccb\Normal\Bear.ccb
badd +149 \archive\cocos2d-html5\cocos2d\menu_nodes\CCMenu.js
badd +144 \archive\PeevedPenguins-Spritebuilder\PeevedPenguins.spritebuilder\Source\libs\cocos2d-iphone\cocos2d-ui\CCButton.h
badd +1 res\ccb\Normal\MainScene_5.ccbi
badd +1 res\ccb\Normal\Seal.ccbi
badd +4 res\ccb\Normal\MainScreen.ccbi
badd +1 res\ccb\Normal\WaitingPenguin.ccbi
badd +1 res\ccb\Normal\Penguin.ccbi
badd +51 \archive\cocos2d-html5\cocos2d\layers_scenes_transitions_nodes\CCScene.js
badd +373 \archive\cocos2d-html5\cocos2d\layers_scenes_transitions_nodes\CCTransitionProgress.js
badd +1 \archive\PeevedPenguins-Spritebuilder\PeevedPenguins.spritebuilder\SpriteBuilder\ Resources\MainScene.ccb
badd +250 \archive\cocos2d-html5\extensions\GUI\CCControlExtension\CCControlButton.js
badd +33 \archive\cocos2d-html5\extensions\GUI\CCControlExtension\CCControl.js
badd +1 res\Normal\Machine.ccbi
badd +153 \archive\cocos2d-html5\cocos2d\jsloader.js
badd +510 \archive\cocos2d-html5\extensions\GUI\CCControlExtension\CCScale9Sprite.js
badd +468 \archive\cocos2d-html5\cocos2d\actions\CCAction.js
badd +379 \archive\cocos2d-html5\cocos2d\core\cocoa\CCGeometry.js
badd +2248 \archive\cocos2d-html5\cocos2d\core\sprite_nodes\CCSprite.js
badd +1 res\ccb\Normal\MainScene_10.ccbi
badd +551 \archive\cocos2d-html5\extensions\CCEditBox\CCEditBox.js
badd +52 \archive\cocos2d-html5\extensions\CCBReader\CCBKeyframe.js
badd +193 \archive\cocos2d-html5\cocos2d\actions\CCActionEase.js
badd +48 \archive\cocos2d-html5\extensions\GUI\CCControlExtension\CCControlColourPicker.js
badd +160 \archive\cocos2d-html5\extensions\GUI\CCControlExtension\CCControlHuePicker.js
badd +234 \archive\cocos2d-html5\extensions\GUI\CCControlExtension\CCControlPotentiometer.js
badd +175 \archive\cocos2d-html5\extensions\GUI\CCControlExtension\CCControlSaturationBrightnessPicker.js
badd +203 \archive\cocos2d-html5\extensions\GUI\CCControlExtension\CCControlSlider.js
badd +53 \archive\cocos2d-html5\extensions\GUI\CCControlExtension\CCControlStepper.js
badd +155 \archive\cocos2d-html5\extensions\GUI\CCControlExtension\CCControlSwitch.js
args README.md
edit README.md
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
wincmd _ | wincmd |
split
1wincmd k
wincmd w
set nosplitbelow
set nosplitright
wincmd t
set winheight=1 winwidth=1
exe 'vert 1resize ' . ((&columns * 98 + 95) / 190)
exe '2resize ' . ((&lines * 23 + 24) / 48)
exe 'vert 2resize ' . ((&columns * 91 + 95) / 190)
exe '3resize ' . ((&lines * 22 + 24) / 48)
exe 'vert 3resize ' . ((&columns * 91 + 95) / 190)
argglobal
setlocal keymap=
setlocal noarabic
setlocal noautoindent
setlocal balloonexpr=
setlocal nobinary
setlocal bufhidden=
setlocal buflisted
setlocal buftype=
setlocal nocindent
setlocal cinkeys=0{,0},0),:,0#,!^F,o,O,e
setlocal cinoptions=
setlocal cinwords=if,else,while,do,for,switch
setlocal colorcolumn=
setlocal comments=s1:/*,mb:*,ex:*/,://,b:#,:%,:XCOMM,n:>,fb:-
setlocal commentstring=/*%s*/
setlocal complete=.,w,b,u,t,i
setlocal concealcursor=
setlocal conceallevel=0
setlocal completefunc=
setlocal nocopyindent
setlocal cryptmethod=
setlocal nocursorbind
setlocal nocursorcolumn
setlocal nocursorline
setlocal define=
setlocal dictionary=
setlocal nodiff
setlocal equalprg=
setlocal errorformat=
setlocal noexpandtab
if &filetype != 'markdown'
setlocal filetype=markdown
endif
setlocal foldcolumn=0
setlocal foldenable
setlocal foldexpr=0
setlocal foldignore=#
setlocal foldlevel=0
setlocal foldmarker={{{,}}}
setlocal foldmethod=manual
setlocal foldminlines=1
setlocal foldnestmax=20
setlocal foldtext=foldtext()
setlocal formatexpr=
setlocal formatoptions=tcq
setlocal formatlistpat=^\\s*\\d\\+[\\]:.)}\\t\ ]\\s*
setlocal grepprg=
setlocal iminsert=2
setlocal imsearch=2
setlocal include=
setlocal includeexpr=
setlocal indentexpr=
setlocal indentkeys=0{,0},:,0#,!^F,o,O,e
setlocal noinfercase
setlocal iskeyword=@,48-57,_,192-255
setlocal keywordprg=
setlocal nolinebreak
setlocal nolisp
setlocal nolist
setlocal makeprg=
setlocal matchpairs=(:),{:},[:]
setlocal modeline
setlocal modifiable
setlocal nrformats=octal,hex
setlocal nonumber
setlocal numberwidth=4
setlocal omnifunc=
setlocal path=
setlocal nopreserveindent
setlocal nopreviewwindow
setlocal quoteescape=\\
setlocal noreadonly
setlocal norelativenumber
setlocal norightleft
setlocal rightleftcmd=search
setlocal noscrollbind
setlocal shiftwidth=8
setlocal noshortname
setlocal nosmartindent
setlocal softtabstop=0
setlocal nospell
setlocal spellcapcheck=[.?!]\\_[\\])'\"\	\ ]\\+
setlocal spellfile=
setlocal spelllang=en
setlocal statusline=
setlocal suffixesadd=
setlocal noswapfile
setlocal synmaxcol=3000
if &syntax != 'markdown'
setlocal syntax=markdown
endif
setlocal tabstop=8
setlocal tags=
setlocal textwidth=0
setlocal thesaurus=
setlocal noundofile
setlocal nowinfixheight
setlocal nowinfixwidth
setlocal wrap
setlocal wrapmargin=0
silent! normal! zE
let s:l = 16 - ((14 * winheight(0) + 23) / 46)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
16
normal! 035l
wincmd w
argglobal
edit notes.txt
setlocal keymap=
setlocal noarabic
setlocal noautoindent
setlocal balloonexpr=
setlocal nobinary
setlocal bufhidden=
setlocal buflisted
setlocal buftype=
setlocal nocindent
setlocal cinkeys=0{,0},0),:,0#,!^F,o,O,e
setlocal cinoptions=
setlocal cinwords=if,else,while,do,for,switch
setlocal colorcolumn=
setlocal comments=s1:/*,mb:*,ex:*/,://,b:#,:%,:XCOMM,n:>,fb:-
setlocal commentstring=/*%s*/
setlocal complete=.,w,b,u,t,i
setlocal concealcursor=
setlocal conceallevel=0
setlocal completefunc=
setlocal nocopyindent
setlocal cryptmethod=
setlocal nocursorbind
setlocal nocursorcolumn
setlocal nocursorline
setlocal define=
setlocal dictionary=
setlocal nodiff
setlocal equalprg=
setlocal errorformat=
setlocal noexpandtab
if &filetype != ''
setlocal filetype=
endif
setlocal foldcolumn=0
setlocal foldenable
setlocal foldexpr=0
setlocal foldignore=#
setlocal foldlevel=0
setlocal foldmarker={{{,}}}
setlocal foldmethod=manual
setlocal foldminlines=1
setlocal foldnestmax=20
setlocal foldtext=foldtext()
setlocal formatexpr=
setlocal formatoptions=tcq
setlocal formatlistpat=^\\s*\\d\\+[\\]:.)}\\t\ ]\\s*
setlocal grepprg=
setlocal iminsert=2
setlocal imsearch=2
setlocal include=
setlocal includeexpr=
setlocal indentexpr=
setlocal indentkeys=0{,0},:,0#,!^F,o,O,e
setlocal noinfercase
setlocal iskeyword=@,48-57,_,192-255
setlocal keywordprg=
setlocal nolinebreak
setlocal nolisp
setlocal nolist
setlocal makeprg=
setlocal matchpairs=(:),{:},[:]
setlocal modeline
setlocal modifiable
setlocal nrformats=octal,hex
setlocal nonumber
setlocal numberwidth=4
setlocal omnifunc=
setlocal path=
setlocal nopreserveindent
setlocal nopreviewwindow
setlocal quoteescape=\\
setlocal noreadonly
setlocal norelativenumber
setlocal norightleft
setlocal rightleftcmd=search
setlocal noscrollbind
setlocal shiftwidth=8
setlocal noshortname
setlocal nosmartindent
setlocal softtabstop=0
setlocal nospell
setlocal spellcapcheck=[.?!]\\_[\\])'\"\	\ ]\\+
setlocal spellfile=
setlocal spelllang=en
setlocal statusline=
setlocal suffixesadd=
setlocal noswapfile
setlocal synmaxcol=3000
if &syntax != ''
setlocal syntax=
endif
setlocal tabstop=8
setlocal tags=
setlocal textwidth=0
setlocal thesaurus=
setlocal noundofile
setlocal nowinfixheight
setlocal nowinfixwidth
setlocal wrap
setlocal wrapmargin=0
silent! normal! zE
let s:l = 64 - ((13 * winheight(0) + 11) / 23)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
64
normal! 033l
wincmd w
argglobal
edit notes.txt
setlocal keymap=
setlocal noarabic
setlocal noautoindent
setlocal balloonexpr=
setlocal nobinary
setlocal bufhidden=
setlocal buflisted
setlocal buftype=
setlocal nocindent
setlocal cinkeys=0{,0},0),:,0#,!^F,o,O,e
setlocal cinoptions=
setlocal cinwords=if,else,while,do,for,switch
setlocal colorcolumn=
setlocal comments=s1:/*,mb:*,ex:*/,://,b:#,:%,:XCOMM,n:>,fb:-
setlocal commentstring=/*%s*/
setlocal complete=.,w,b,u,t,i
setlocal concealcursor=
setlocal conceallevel=0
setlocal completefunc=
setlocal nocopyindent
setlocal cryptmethod=
setlocal nocursorbind
setlocal nocursorcolumn
setlocal nocursorline
setlocal define=
setlocal dictionary=
setlocal nodiff
setlocal equalprg=
setlocal errorformat=
setlocal noexpandtab
if &filetype != ''
setlocal filetype=
endif
setlocal foldcolumn=0
setlocal foldenable
setlocal foldexpr=0
setlocal foldignore=#
setlocal foldlevel=0
setlocal foldmarker={{{,}}}
setlocal foldmethod=manual
setlocal foldminlines=1
setlocal foldnestmax=20
setlocal foldtext=foldtext()
setlocal formatexpr=
setlocal formatoptions=tcq
setlocal formatlistpat=^\\s*\\d\\+[\\]:.)}\\t\ ]\\s*
setlocal grepprg=
setlocal iminsert=2
setlocal imsearch=2
setlocal include=
setlocal includeexpr=
setlocal indentexpr=
setlocal indentkeys=0{,0},:,0#,!^F,o,O,e
setlocal noinfercase
setlocal iskeyword=@,48-57,_,192-255
setlocal keywordprg=
setlocal nolinebreak
setlocal nolisp
setlocal nolist
setlocal makeprg=
setlocal matchpairs=(:),{:},[:]
setlocal modeline
setlocal modifiable
setlocal nrformats=octal,hex
setlocal nonumber
setlocal numberwidth=4
setlocal omnifunc=
setlocal path=
setlocal nopreserveindent
setlocal nopreviewwindow
setlocal quoteescape=\\
setlocal noreadonly
setlocal norelativenumber
setlocal norightleft
setlocal rightleftcmd=search
setlocal noscrollbind
setlocal shiftwidth=8
setlocal noshortname
setlocal nosmartindent
setlocal softtabstop=0
setlocal nospell
setlocal spellcapcheck=[.?!]\\_[\\])'\"\	\ ]\\+
setlocal spellfile=
setlocal spelllang=en
setlocal statusline=
setlocal suffixesadd=
setlocal noswapfile
setlocal synmaxcol=3000
if &syntax != ''
setlocal syntax=
endif
setlocal tabstop=8
setlocal tags=
setlocal textwidth=0
setlocal thesaurus=
setlocal noundofile
setlocal nowinfixheight
setlocal nowinfixwidth
setlocal wrap
setlocal wrapmargin=0
silent! normal! zE
let s:l = 191 - ((18 * winheight(0) + 11) / 22)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
191
normal! 02l
wincmd w
exe 'vert 1resize ' . ((&columns * 98 + 95) / 190)
exe '2resize ' . ((&lines * 23 + 24) / 48)
exe 'vert 2resize ' . ((&columns * 91 + 95) / 190)
exe '3resize ' . ((&lines * 22 + 24) / 48)
exe 'vert 3resize ' . ((&columns * 91 + 95) / 190)
tabedit src\TestCCBReader10.js
set splitbelow splitright
set nosplitbelow
set nosplitright
wincmd t
set winheight=1 winwidth=1
argglobal
setlocal keymap=
setlocal noarabic
setlocal autoindent
setlocal balloonexpr=
setlocal nobinary
setlocal bufhidden=
setlocal buflisted
setlocal buftype=
setlocal nocindent
setlocal cinkeys=0{,0},0),:,0#,!^F,o,O,e
setlocal cinoptions=
setlocal cinwords=if,else,while,do,for,switch
setlocal colorcolumn=
setlocal comments=s1:/*,mb:*,ex:*/,://,b:#,:%,:XCOMM,n:>,fb:-
setlocal commentstring=/*%s*/
setlocal complete=.,w,b,u,t,i
setlocal concealcursor=
setlocal conceallevel=0
setlocal completefunc=
setlocal nocopyindent
setlocal cryptmethod=
setlocal nocursorbind
setlocal nocursorcolumn
setlocal nocursorline
setlocal define=
setlocal dictionary=
setlocal nodiff
setlocal equalprg=
setlocal errorformat=
setlocal expandtab
if &filetype != 'javascript'
setlocal filetype=javascript
endif
setlocal foldcolumn=0
setlocal foldenable
setlocal foldexpr=0
setlocal foldignore=#
setlocal foldlevel=0
setlocal foldmarker={{{,}}}
setlocal foldmethod=manual
setlocal foldminlines=1
setlocal foldnestmax=20
setlocal foldtext=foldtext()
setlocal formatexpr=
setlocal formatoptions=tcq
setlocal formatlistpat=^\\s*\\d\\+[\\]:.)}\\t\ ]\\s*
setlocal grepprg=
setlocal iminsert=2
setlocal imsearch=2
setlocal include=
setlocal includeexpr=
setlocal indentexpr=
setlocal indentkeys=0{,0},:,0#,!^F,o,O,e
setlocal noinfercase
setlocal iskeyword=@,48-57,_,192-255
setlocal keywordprg=
setlocal nolinebreak
setlocal nolisp
setlocal nolist
setlocal makeprg=
setlocal matchpairs=(:),{:},[:]
setlocal modeline
setlocal modifiable
setlocal nrformats=octal,hex
setlocal nonumber
setlocal numberwidth=4
setlocal omnifunc=
setlocal path=
setlocal nopreserveindent
setlocal nopreviewwindow
setlocal quoteescape=\\
setlocal noreadonly
setlocal norelativenumber
setlocal norightleft
setlocal rightleftcmd=search
setlocal noscrollbind
setlocal shiftwidth=4
setlocal noshortname
setlocal smartindent
setlocal softtabstop=4
setlocal nospell
setlocal spellcapcheck=[.?!]\\_[\\])'\"\	\ ]\\+
setlocal spellfile=
setlocal spelllang=en
setlocal statusline=
setlocal suffixesadd=
setlocal noswapfile
setlocal synmaxcol=3000
if &syntax != 'javascript'
setlocal syntax=javascript
endif
setlocal tabstop=4
setlocal tags=
setlocal textwidth=0
setlocal thesaurus=
setlocal noundofile
setlocal nowinfixheight
setlocal nowinfixwidth
setlocal wrap
setlocal wrapmargin=0
silent! normal! zE
let s:l = 223 - ((46 * winheight(0) + 23) / 47)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
223
normal! 04l
tabedit src\CCBReader10.js
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd _ | wincmd |
split
1wincmd k
wincmd w
wincmd w
wincmd _ | wincmd |
split
1wincmd k
wincmd w
set nosplitbelow
set nosplitright
wincmd t
set winheight=1 winwidth=1
exe '1resize ' . ((&lines * 44 + 24) / 48)
exe 'vert 1resize ' . ((&columns * 116 + 95) / 190)
exe '2resize ' . ((&lines * 1 + 24) / 48)
exe 'vert 2resize ' . ((&columns * 116 + 95) / 190)
exe '3resize ' . ((&lines * 35 + 24) / 48)
exe 'vert 3resize ' . ((&columns * 73 + 95) / 190)
exe '4resize ' . ((&lines * 10 + 24) / 48)
exe 'vert 4resize ' . ((&columns * 73 + 95) / 190)
argglobal
setlocal keymap=
setlocal noarabic
setlocal autoindent
setlocal balloonexpr=
setlocal nobinary
setlocal bufhidden=
setlocal buflisted
setlocal buftype=
setlocal nocindent
setlocal cinkeys=0{,0},0),:,0#,!^F,o,O,e
setlocal cinoptions=
setlocal cinwords=if,else,while,do,for,switch
setlocal colorcolumn=
setlocal comments=s1:/*,mb:*,ex:*/,://,b:#,:%,:XCOMM,n:>,fb:-
setlocal commentstring=/*%s*/
setlocal complete=.,w,b,u,t,i
setlocal concealcursor=
setlocal conceallevel=0
setlocal completefunc=
setlocal nocopyindent
setlocal cryptmethod=
setlocal nocursorbind
setlocal nocursorcolumn
setlocal nocursorline
setlocal define=
setlocal dictionary=
setlocal nodiff
setlocal equalprg=
setlocal errorformat=
setlocal expandtab
if &filetype != 'javascript'
setlocal filetype=javascript
endif
setlocal foldcolumn=0
setlocal foldenable
setlocal foldexpr=0
setlocal foldignore=#
setlocal foldlevel=0
setlocal foldmarker={{{,}}}
set foldmethod=indent
setlocal foldmethod=indent
setlocal foldminlines=1
setlocal foldnestmax=20
setlocal foldtext=foldtext()
setlocal formatexpr=
setlocal formatoptions=tcq
setlocal formatlistpat=^\\s*\\d\\+[\\]:.)}\\t\ ]\\s*
setlocal grepprg=
setlocal iminsert=2
setlocal imsearch=2
setlocal include=
setlocal includeexpr=
setlocal indentexpr=
setlocal indentkeys=0{,0},:,0#,!^F,o,O,e
setlocal noinfercase
setlocal iskeyword=@,48-57,_,192-255
setlocal keywordprg=
setlocal nolinebreak
setlocal nolisp
setlocal nolist
setlocal makeprg=
setlocal matchpairs=(:),{:},[:]
setlocal modeline
setlocal modifiable
setlocal nrformats=octal,hex
setlocal nonumber
setlocal numberwidth=4
setlocal omnifunc=
setlocal path=
setlocal nopreserveindent
setlocal nopreviewwindow
setlocal quoteescape=\\
setlocal noreadonly
setlocal norelativenumber
setlocal norightleft
setlocal rightleftcmd=search
setlocal noscrollbind
setlocal shiftwidth=4
setlocal noshortname
setlocal smartindent
setlocal softtabstop=4
setlocal nospell
setlocal spellcapcheck=[.?!]\\_[\\])'\"\	\ ]\\+
setlocal spellfile=
setlocal spelllang=en
setlocal statusline=
setlocal suffixesadd=
setlocal noswapfile
setlocal synmaxcol=3000
if &syntax != 'javascript'
setlocal syntax=javascript
endif
setlocal tabstop=4
setlocal tags=
setlocal textwidth=0
setlocal thesaurus=
setlocal noundofile
setlocal nowinfixheight
setlocal nowinfixwidth
setlocal wrap
setlocal wrapmargin=0
148
normal zo
179
normal zo
189
normal zo
190
normal zo
206
normal zo
189
normal zo
179
normal zo
224
normal zo
243
normal zo
247
normal zo
243
normal zo
258
normal zo
285
normal zo
285
normal zo
303
normal zo
310
normal zo
314
normal zo
338
normal zo
345
normal zo
345
normal zo
338
normal zo
373
normal zo
376
normal zo
376
normal zo
373
normal zo
394
normal zo
405
normal zo
407
normal zo
405
normal zo
394
normal zo
429
normal zo
432
normal zo
432
normal zo
429
normal zo
456
normal zo
459
normal zo
456
normal zo
473
normal zo
473
normal zo
505
normal zo
505
normal zo
564
normal zo
604
normal zo
621
normal zo
621
normal zo
653
normal zo
677
normal zo
723
normal zo
677
normal zo
653
normal zo
814
normal zo
815
normal zo
814
normal zo
834
normal zo
842
normal zo
834
normal zo
862
normal zo
870
normal zo
862
normal zo
894
normal zo
903
normal zo
903
normal zo
894
normal zo
929
normal zo
936
normal zo
953
normal zo
956
normal zo
965
normal zo
968
normal zo
969
normal zo
968
normal zo
929
normal zo
982
normal zo
994
normal zo
1007
normal zo
1010
normal zo
994
normal zo
1017
normal zo
1033
normal zo
1033
normal zo
1067
normal zo
1079
normal zo
1081
normal zo
1082
normal zo
1081
normal zo
1085
normal zo
1086
normal zo
1085
normal zo
1079
normal zo
1098
normal zo
1107
normal zo
1123
normal zo
1107
normal zo
1152
normal zo
1152
normal zo
1179
normal zo
1217
normal zo
1223
normal zo
1232
normal zo
1223
normal zo
1217
normal zo
1249
normal zo
1250
normal zo
1249
normal zo
1266
normal zo
1272
normal zo
1266
normal zo
1289
normal zo
1296
normal zo
1296
normal zo
1289
normal zo
1310
normal zo
1313
normal zo
1316
normal zo
1316
normal zo
1313
normal zo
1310
normal zo
1334
normal zo
1335
normal zo
1334
normal zo
1179
normal zo
1462
normal zo
1462
normal zo
1496
normal zo
1501
normal zo
1509
normal zo
1510
normal zo
1509
normal zo
1516
normal zo
1516
normal zo
1525
normal zo
1527
normal zo
1548
normal zo
1550
normal zo
1555
normal zo
1550
normal zo
1548
normal zo
1577
normal zo
1579
normal zo
1577
normal zo
1601
normal zo
1601
normal zo
1673
normal zo
1675
normal zo
1673
normal zo
1690
normal zo
1690
normal zo
1723
normal zo
1727
normal zo
1723
normal zo
1757
normal zo
1759
normal zo
1757
normal zo
1779
normal zo
1782
normal zo
1789
normal zo
1779
normal zo
1525
normal zo
1501
normal zo
1496
normal zo
1823
normal zo
1854
normal zo
1855
normal zo
1854
normal zo
1867
normal zo
1867
normal zo
1879
normal zo
1879
normal zo
1898
normal zo
1901
normal zo
1901
normal zo
1898
normal zo
1921
normal zo
1927
normal zo
1945
normal zo
1927
normal zo
1921
normal zo
1961
normal zo
1963
normal zo
1961
normal zo
1973
normal zo
1981
normal zo
1981
normal zo
1973
normal zo
148
normal zo
2004
normal zo
2011
normal zo
2020
normal zo
2021
normal zo
2020
normal zo
2029
normal zo
2040
normal zo
2044
normal zo
2047
normal zo
2049
normal zo
2044
normal zo
2056
normal zo
2040
normal zo
2068
normal zo
2097
normal zo
2097
normal zo
2068
normal zo
2029
normal zo
2158
normal zo
2161
normal zo
2162
normal zo
2165
normal zo
2166
normal zo
2165
normal zo
2161
normal zo
2170
normal zo
2171
normal zo
2170
normal zo
2158
normal zo
2180
normal zo
2182
normal zo
2184
normal zo
2182
normal zo
2180
normal zo
2193
normal zo
2201
normal zo
2201
normal zo
2193
normal zo
2232
normal zo
2232
normal zo
2244
normal zo
2244
normal zo
2259
normal zo
2269
normal zo
2259
normal zo
2282
normal zo
2283
normal zo
2283
normal zo
2282
normal zo
2293
normal zo
2424
normal zo
2436
normal zo
2440
normal zo
2440
normal zo
2467
normal zo
2436
normal zo
2475
normal zo
2476
normal zo
2478
normal zo
2476
normal zo
2489
normal zo
2490
normal zo
2489
normal zo
2475
normal zo
2519
normal zo
2520
normal zo
2519
normal zo
2424
normal zo
let s:l = 27 - ((26 * winheight(0) + 22) / 44)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
27
normal! 01l
lcd C:\archive\SpriteBuilder-Reader-js
wincmd w
argglobal
edit C:\archive\SpriteBuilder-Reader-js\src\CCBReader10.js
setlocal keymap=
setlocal noarabic
setlocal autoindent
setlocal balloonexpr=
setlocal nobinary
setlocal bufhidden=
setlocal buflisted
setlocal buftype=
setlocal nocindent
setlocal cinkeys=0{,0},0),:,0#,!^F,o,O,e
setlocal cinoptions=
setlocal cinwords=if,else,while,do,for,switch
setlocal colorcolumn=
setlocal comments=s1:/*,mb:*,ex:*/,://,b:#,:%,:XCOMM,n:>,fb:-
setlocal commentstring=/*%s*/
setlocal complete=.,w,b,u,t,i
setlocal concealcursor=
setlocal conceallevel=0
setlocal completefunc=
setlocal nocopyindent
setlocal cryptmethod=
setlocal nocursorbind
setlocal nocursorcolumn
setlocal nocursorline
setlocal define=
setlocal dictionary=
setlocal nodiff
setlocal equalprg=
setlocal errorformat=
setlocal expandtab
if &filetype != 'javascript'
setlocal filetype=javascript
endif
setlocal foldcolumn=0
setlocal foldenable
setlocal foldexpr=0
setlocal foldignore=#
setlocal foldlevel=0
setlocal foldmarker={{{,}}}
set foldmethod=indent
setlocal foldmethod=indent
setlocal foldminlines=1
setlocal foldnestmax=20
setlocal foldtext=foldtext()
setlocal formatexpr=
setlocal formatoptions=tcq
setlocal formatlistpat=^\\s*\\d\\+[\\]:.)}\\t\ ]\\s*
setlocal grepprg=
setlocal iminsert=2
setlocal imsearch=2
setlocal include=
setlocal includeexpr=
setlocal indentexpr=
setlocal indentkeys=0{,0},:,0#,!^F,o,O,e
setlocal noinfercase
setlocal iskeyword=@,48-57,_,192-255
setlocal keywordprg=
setlocal nolinebreak
setlocal nolisp
setlocal nolist
setlocal makeprg=
setlocal matchpairs=(:),{:},[:]
setlocal modeline
setlocal modifiable
setlocal nrformats=octal,hex
setlocal nonumber
setlocal numberwidth=4
setlocal omnifunc=
setlocal path=
setlocal nopreserveindent
setlocal nopreviewwindow
setlocal quoteescape=\\
setlocal noreadonly
setlocal norelativenumber
setlocal norightleft
setlocal rightleftcmd=search
setlocal noscrollbind
setlocal shiftwidth=4
setlocal noshortname
setlocal smartindent
setlocal softtabstop=4
setlocal nospell
setlocal spellcapcheck=[.?!]\\_[\\])'\"\	\ ]\\+
setlocal spellfile=
setlocal spelllang=en
setlocal statusline=
setlocal suffixesadd=
setlocal noswapfile
setlocal synmaxcol=3000
if &syntax != 'javascript'
setlocal syntax=javascript
endif
setlocal tabstop=4
setlocal tags=
setlocal textwidth=0
setlocal thesaurus=
setlocal noundofile
setlocal nowinfixheight
setlocal nowinfixwidth
setlocal wrap
setlocal wrapmargin=0
148
normal zo
179
normal zo
189
normal zo
190
normal zo
206
normal zo
189
normal zo
179
normal zo
224
normal zo
243
normal zo
247
normal zo
243
normal zo
258
normal zo
285
normal zo
285
normal zo
303
normal zo
310
normal zo
314
normal zo
338
normal zo
345
normal zo
345
normal zo
338
normal zo
373
normal zo
376
normal zo
376
normal zo
373
normal zo
394
normal zo
405
normal zo
407
normal zo
405
normal zo
394
normal zo
429
normal zo
432
normal zo
432
normal zo
429
normal zo
456
normal zo
459
normal zo
456
normal zo
473
normal zo
473
normal zo
505
normal zo
505
normal zo
564
normal zo
604
normal zo
621
normal zo
621
normal zo
653
normal zo
677
normal zo
723
normal zo
677
normal zo
653
normal zo
814
normal zo
815
normal zo
814
normal zo
834
normal zo
842
normal zo
834
normal zo
862
normal zo
870
normal zo
862
normal zo
894
normal zo
903
normal zo
903
normal zo
894
normal zo
929
normal zo
936
normal zo
953
normal zo
956
normal zo
965
normal zo
968
normal zo
969
normal zo
968
normal zo
929
normal zo
982
normal zo
994
normal zo
1007
normal zo
1010
normal zo
994
normal zo
1017
normal zo
1033
normal zo
1033
normal zo
1067
normal zo
1079
normal zo
1081
normal zo
1082
normal zo
1081
normal zo
1085
normal zo
1086
normal zo
1085
normal zo
1079
normal zo
1098
normal zo
1107
normal zo
1123
normal zo
1107
normal zo
1152
normal zo
1152
normal zo
1179
normal zo
1217
normal zo
1223
normal zo
1232
normal zo
1223
normal zo
1217
normal zo
1249
normal zo
1250
normal zo
1249
normal zo
1266
normal zo
1272
normal zo
1266
normal zo
1289
normal zo
1296
normal zo
1296
normal zo
1289
normal zo
1310
normal zo
1313
normal zo
1316
normal zo
1316
normal zo
1313
normal zo
1310
normal zo
1334
normal zo
1335
normal zo
1334
normal zo
1179
normal zo
1462
normal zo
1462
normal zo
1496
normal zo
1501
normal zo
1509
normal zo
1510
normal zo
1509
normal zo
1516
normal zo
1516
normal zo
1525
normal zo
1527
normal zo
1548
normal zo
1550
normal zo
1551
normal zo
1555
normal zo
1550
normal zo
1548
normal zo
1577
normal zo
1579
normal zo
1577
normal zo
1601
normal zo
1601
normal zo
1673
normal zo
1675
normal zo
1673
normal zo
1690
normal zo
1690
normal zo
1723
normal zo
1727
normal zo
1723
normal zo
1757
normal zo
1759
normal zo
1757
normal zo
1779
normal zo
1782
normal zo
1789
normal zo
1779
normal zo
1525
normal zo
1501
normal zo
1496
normal zo
1823
normal zo
1854
normal zo
1855
normal zo
1854
normal zo
1867
normal zo
1867
normal zo
1879
normal zo
1879
normal zo
1898
normal zo
1901
normal zo
1901
normal zo
1898
normal zo
1921
normal zo
1927
normal zo
1945
normal zo
1927
normal zo
1921
normal zo
1961
normal zo
1963
normal zo
1961
normal zo
1973
normal zo
1981
normal zo
1981
normal zo
1973
normal zo
148
normal zo
2004
normal zo
2011
normal zo
2020
normal zo
2021
normal zo
2020
normal zo
2029
normal zo
2040
normal zo
2044
normal zo
2047
normal zo
2049
normal zo
2044
normal zo
2056
normal zo
2040
normal zo
2068
normal zo
2097
normal zo
2097
normal zo
2068
normal zo
2029
normal zo
2158
normal zo
2161
normal zo
2162
normal zo
2165
normal zo
2166
normal zo
2165
normal zo
2161
normal zo
2170
normal zo
2171
normal zo
2170
normal zo
2158
normal zo
2180
normal zo
2182
normal zo
2184
normal zo
2182
normal zo
2180
normal zo
2193
normal zo
2201
normal zo
2201
normal zo
2193
normal zo
2232
normal zo
2232
normal zo
2244
normal zo
2244
normal zo
2259
normal zo
2269
normal zo
2259
normal zo
2282
normal zo
2283
normal zo
2283
normal zo
2282
normal zo
2293
normal zo
2424
normal zo
2436
normal zo
2440
normal zo
2440
normal zo
2455
normal zo
2458
normal zo
2455
normal zo
2467
normal zo
2436
normal zo
2475
normal zo
2476
normal zo
2478
normal zo
2476
normal zo
2489
normal zo
2490
normal zo
2489
normal zo
2475
normal zo
2519
normal zo
2520
normal zo
2519
normal zo
2424
normal zo
let s:l = 2483 - ((0 * winheight(0) + 0) / 1)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
2483
normal! 09l
lcd C:\archive\SpriteBuilder-Reader-js
wincmd w
argglobal
edit C:\archive\cocos2d-html5\extensions\GUI\CCControlExtension\CCScale9Sprite.js
setlocal keymap=
setlocal noarabic
setlocal autoindent
setlocal balloonexpr=
setlocal nobinary
setlocal bufhidden=
setlocal buflisted
setlocal buftype=
setlocal nocindent
setlocal cinkeys=0{,0},0),:,0#,!^F,o,O,e
setlocal cinoptions=
setlocal cinwords=if,else,while,do,for,switch
setlocal colorcolumn=
setlocal comments=s1:/*,mb:*,ex:*/,://,b:#,:%,:XCOMM,n:>,fb:-
setlocal commentstring=/*%s*/
setlocal complete=.,w,b,u,t,i
setlocal concealcursor=
setlocal conceallevel=0
setlocal completefunc=
setlocal nocopyindent
setlocal cryptmethod=
setlocal nocursorbind
setlocal nocursorcolumn
setlocal nocursorline
setlocal define=
setlocal dictionary=
setlocal nodiff
setlocal equalprg=
setlocal errorformat=
setlocal expandtab
if &filetype != 'javascript'
setlocal filetype=javascript
endif
setlocal foldcolumn=0
setlocal foldenable
setlocal foldexpr=0
setlocal foldignore=#
setlocal foldlevel=0
setlocal foldmarker={{{,}}}
set foldmethod=indent
setlocal foldmethod=indent
setlocal foldminlines=1
setlocal foldnestmax=20
setlocal foldtext=foldtext()
setlocal formatexpr=
setlocal formatoptions=tcq
setlocal formatlistpat=^\\s*\\d\\+[\\]:.)}\\t\ ]\\s*
setlocal grepprg=
setlocal iminsert=2
setlocal imsearch=2
setlocal include=
setlocal includeexpr=
setlocal indentexpr=
setlocal indentkeys=0{,0},:,0#,!^F,o,O,e
setlocal noinfercase
setlocal iskeyword=@,48-57,_,192-255
setlocal keywordprg=
setlocal nolinebreak
setlocal nolisp
setlocal nolist
setlocal makeprg=
setlocal matchpairs=(:),{:},[:]
setlocal modeline
setlocal modifiable
setlocal nrformats=octal,hex
setlocal nonumber
setlocal numberwidth=4
setlocal omnifunc=
setlocal path=
setlocal nopreserveindent
setlocal nopreviewwindow
setlocal quoteescape=\\
setlocal noreadonly
setlocal norelativenumber
setlocal norightleft
setlocal rightleftcmd=search
setlocal noscrollbind
setlocal shiftwidth=4
setlocal noshortname
setlocal smartindent
setlocal softtabstop=4
setlocal nospell
setlocal spellcapcheck=[.?!]\\_[\\])'\"\	\ ]\\+
setlocal spellfile=
setlocal spelllang=en
setlocal statusline=
setlocal suffixesadd=
setlocal noswapfile
setlocal synmaxcol=3000
if &syntax != 'javascript'
setlocal syntax=javascript
endif
setlocal tabstop=4
setlocal tags=
setlocal textwidth=0
setlocal thesaurus=
setlocal noundofile
setlocal nowinfixheight
setlocal nowinfixwidth
setlocal wrap
setlocal wrapmargin=0
51
normal zo
225
normal zo
51
normal zo
let s:l = 223 - ((94 * winheight(0) + 17) / 35)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
223
normal! 04l
lcd C:\archive\SpriteBuilder-Reader-js
wincmd w
argglobal
enew
setlocal keymap=
setlocal noarabic
setlocal autoindent
setlocal balloonexpr=
setlocal nobinary
setlocal bufhidden=wipe
setlocal buflisted
setlocal buftype=quickfix
setlocal nocindent
setlocal cinkeys=0{,0},0),:,0#,!^F,o,O,e
setlocal cinoptions=
setlocal cinwords=if,else,while,do,for,switch
setlocal colorcolumn=
setlocal comments=s1:/*,mb:*,ex:*/,://,b:#,:%,:XCOMM,n:>,fb:-
setlocal commentstring=/*%s*/
setlocal complete=.,w,b,u,t,i
setlocal concealcursor=
setlocal conceallevel=0
setlocal completefunc=
setlocal nocopyindent
setlocal cryptmethod=
setlocal nocursorbind
setlocal nocursorcolumn
setlocal nocursorline
setlocal define=
setlocal dictionary=
setlocal nodiff
setlocal equalprg=
setlocal errorformat=
setlocal expandtab
if &filetype != 'qf'
setlocal filetype=qf
endif
setlocal foldcolumn=0
setlocal foldenable
setlocal foldexpr=0
setlocal foldignore=#
setlocal foldlevel=0
setlocal foldmarker={{{,}}}
set foldmethod=indent
setlocal foldmethod=manual
setlocal foldminlines=1
setlocal foldnestmax=20
setlocal foldtext=foldtext()
setlocal formatexpr=
setlocal formatoptions=tcq
setlocal formatlistpat=^\\s*\\d\\+[\\]:.)}\\t\ ]\\s*
setlocal grepprg=
setlocal iminsert=2
setlocal imsearch=2
setlocal include=
setlocal includeexpr=
setlocal indentexpr=
setlocal indentkeys=0{,0},:,0#,!^F,o,O,e
setlocal noinfercase
setlocal iskeyword=@,48-57,_,192-255
setlocal keywordprg=
setlocal nolinebreak
setlocal nolisp
setlocal nolist
setlocal makeprg=
setlocal matchpairs=(:),{:},[:]
setlocal modeline
setlocal nomodifiable
setlocal nrformats=octal,hex
setlocal nonumber
setlocal numberwidth=4
setlocal omnifunc=
setlocal path=
setlocal nopreserveindent
setlocal nopreviewwindow
setlocal quoteescape=\\
setlocal noreadonly
setlocal norelativenumber
setlocal norightleft
setlocal rightleftcmd=search
setlocal noscrollbind
setlocal shiftwidth=4
setlocal noshortname
setlocal smartindent
setlocal softtabstop=4
setlocal nospell
setlocal spellcapcheck=[.?!]\\_[\\])'\"\	\ ]\\+
setlocal spellfile=
setlocal spelllang=en
setlocal statusline=
setlocal suffixesadd=
setlocal noswapfile
setlocal synmaxcol=3000
if &syntax != 'qf'
setlocal syntax=qf
endif
setlocal tabstop=4
setlocal tags=
setlocal textwidth=0
setlocal thesaurus=
setlocal noundofile
setlocal winfixheight
setlocal nowinfixwidth
setlocal wrap
setlocal wrapmargin=0
lcd C:\archive\SpriteBuilder-Reader-js
wincmd w
exe '1resize ' . ((&lines * 44 + 24) / 48)
exe 'vert 1resize ' . ((&columns * 116 + 95) / 190)
exe '2resize ' . ((&lines * 1 + 24) / 48)
exe 'vert 2resize ' . ((&columns * 116 + 95) / 190)
exe '3resize ' . ((&lines * 35 + 24) / 48)
exe 'vert 3resize ' . ((&columns * 73 + 95) / 190)
exe '4resize ' . ((&lines * 10 + 24) / 48)
exe 'vert 4resize ' . ((&columns * 73 + 95) / 190)
tabedit C:\archive\SpriteBuilder-Reader-js\src\CCBReader.m
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
set nosplitbelow
set nosplitright
wincmd t
set winheight=1 winwidth=1
exe 'vert 1resize ' . ((&columns * 58 + 95) / 190)
exe 'vert 2resize ' . ((&columns * 131 + 95) / 190)
argglobal
setlocal keymap=
setlocal noarabic
setlocal noautoindent
setlocal balloonexpr=
setlocal nobinary
setlocal bufhidden=
setlocal buflisted
setlocal buftype=
setlocal nocindent
setlocal cinkeys=0{,0},0),:,0#,!^F,o,O,e
setlocal cinoptions=
setlocal cinwords=if,else,while,do,for,switch
setlocal colorcolumn=
setlocal comments=s1:/*,mb:*,ex:*/,://,b:#,:%,:XCOMM,n:>,fb:-
setlocal commentstring=/*%s*/
setlocal complete=.,w,b,u,t,i
setlocal concealcursor=
setlocal conceallevel=0
setlocal completefunc=
setlocal nocopyindent
setlocal cryptmethod=
setlocal cursorbind
setlocal nocursorcolumn
setlocal nocursorline
setlocal define=
setlocal dictionary=
setlocal diff
setlocal equalprg=
setlocal errorformat=
setlocal noexpandtab
if &filetype != 'objc'
setlocal filetype=objc
endif
setlocal foldcolumn=2
setlocal foldenable
setlocal foldexpr=0
setlocal foldignore=#
setlocal foldlevel=0
setlocal foldmarker={{{,}}}
set foldmethod=indent
setlocal foldmethod=diff
setlocal foldminlines=1
setlocal foldnestmax=20
setlocal foldtext=foldtext()
setlocal formatexpr=
setlocal formatoptions=tcq
setlocal formatlistpat=^\\s*\\d\\+[\\]:.)}\\t\ ]\\s*
setlocal grepprg=
setlocal iminsert=2
setlocal imsearch=2
setlocal include=
setlocal includeexpr=
setlocal indentexpr=
setlocal indentkeys=0{,0},:,0#,!^F,o,O,e
setlocal noinfercase
setlocal iskeyword=@,48-57,_,192-255
setlocal keywordprg=
setlocal nolinebreak
setlocal nolisp
setlocal nolist
setlocal makeprg=
setlocal matchpairs=(:),{:},[:]
setlocal modeline
setlocal modifiable
setlocal nrformats=octal,hex
setlocal nonumber
setlocal numberwidth=4
setlocal omnifunc=
setlocal path=
setlocal nopreserveindent
setlocal nopreviewwindow
setlocal quoteescape=\\
setlocal noreadonly
setlocal norelativenumber
setlocal norightleft
setlocal rightleftcmd=search
setlocal scrollbind
setlocal shiftwidth=8
setlocal noshortname
setlocal nosmartindent
setlocal softtabstop=0
setlocal nospell
setlocal spellcapcheck=[.?!]\\_[\\])'\"\	\ ]\\+
setlocal spellfile=
setlocal spelllang=en
setlocal statusline=
setlocal suffixesadd=
setlocal noswapfile
setlocal synmaxcol=3000
if &syntax != 'objc'
setlocal syntax=objc
endif
setlocal tabstop=8
setlocal tags=
setlocal textwidth=0
setlocal thesaurus=
setlocal noundofile
setlocal nowinfixheight
setlocal nowinfixwidth
setlocal nowrap
setlocal wrapmargin=0
920
normal zo
let s:l = 535 - ((0 * winheight(0) + 23) / 46)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
535
normal! 021l
lcd C:\archive\SpriteBuilder-Reader-js
wincmd w
argglobal
edit C:\archive\SpriteBuilder-Reader-js\src\CCBReader10.m
setlocal keymap=
setlocal noarabic
setlocal noautoindent
setlocal balloonexpr=
setlocal nobinary
setlocal bufhidden=
setlocal buflisted
setlocal buftype=
setlocal nocindent
setlocal cinkeys=0{,0},0),:,0#,!^F,o,O,e
setlocal cinoptions=
setlocal cinwords=if,else,while,do,for,switch
setlocal colorcolumn=
setlocal comments=s1:/*,mb:*,ex:*/,://,b:#,:%,:XCOMM,n:>,fb:-
setlocal commentstring=/*%s*/
setlocal complete=.,w,b,u,t,i
setlocal concealcursor=
setlocal conceallevel=0
setlocal completefunc=
setlocal nocopyindent
setlocal cryptmethod=
setlocal nocursorbind
setlocal nocursorcolumn
setlocal nocursorline
setlocal define=
setlocal dictionary=
setlocal diff
setlocal equalprg=
setlocal errorformat=
setlocal noexpandtab
if &filetype != 'objc'
setlocal filetype=objc
endif
setlocal foldcolumn=2
setlocal foldenable
setlocal foldexpr=0
setlocal foldignore=#
setlocal foldlevel=0
setlocal foldmarker={{{,}}}
set foldmethod=indent
setlocal foldmethod=diff
setlocal foldminlines=1
setlocal foldnestmax=20
setlocal foldtext=foldtext()
setlocal formatexpr=
setlocal formatoptions=tcq
setlocal formatlistpat=^\\s*\\d\\+[\\]:.)}\\t\ ]\\s*
setlocal grepprg=
setlocal iminsert=2
setlocal imsearch=2
setlocal include=
setlocal includeexpr=
setlocal indentexpr=
setlocal indentkeys=0{,0},:,0#,!^F,o,O,e
setlocal noinfercase
setlocal iskeyword=@,48-57,_,192-255
setlocal keywordprg=
setlocal nolinebreak
setlocal nolisp
setlocal nolist
setlocal makeprg=
setlocal matchpairs=(:),{:},[:]
setlocal modeline
setlocal modifiable
setlocal nrformats=octal,hex
setlocal nonumber
setlocal numberwidth=4
setlocal omnifunc=
setlocal path=
setlocal nopreserveindent
setlocal nopreviewwindow
setlocal quoteescape=\\
setlocal noreadonly
setlocal norelativenumber
setlocal norightleft
setlocal rightleftcmd=search
setlocal scrollbind
setlocal shiftwidth=8
setlocal noshortname
setlocal nosmartindent
setlocal softtabstop=0
setlocal nospell
setlocal spellcapcheck=[.?!]\\_[\\])'\"\	\ ]\\+
setlocal spellfile=
setlocal spelllang=en
setlocal statusline=
setlocal suffixesadd=
setlocal noswapfile
setlocal synmaxcol=3000
if &syntax != 'objc'
setlocal syntax=objc
endif
setlocal tabstop=8
setlocal tags=
setlocal textwidth=0
setlocal thesaurus=
setlocal noundofile
setlocal nowinfixheight
setlocal nowinfixwidth
setlocal nowrap
setlocal wrapmargin=0
1334
normal zo
1334
normal zo
let s:l = 752 - ((45 * winheight(0) + 23) / 46)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
752
normal! 0
lcd C:\archive\SpriteBuilder-Reader-js
wincmd w
exe 'vert 1resize ' . ((&columns * 58 + 95) / 190)
exe 'vert 2resize ' . ((&columns * 131 + 95) / 190)
tabedit C:\archive\SpriteBuilder-Reader-js\res\ccb\Normal\MainScene_10.ccbi
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
set nosplitbelow
set nosplitright
wincmd t
set winheight=1 winwidth=1
exe 'vert 1resize ' . ((&columns * 84 + 95) / 190)
exe 'vert 2resize ' . ((&columns * 105 + 95) / 190)
argglobal
setlocal keymap=
setlocal noarabic
setlocal autoindent
setlocal balloonexpr=
setlocal nobinary
setlocal bufhidden=
setlocal buflisted
setlocal buftype=
setlocal nocindent
setlocal cinkeys=0{,0},0),:,0#,!^F,o,O,e
setlocal cinoptions=
setlocal cinwords=if,else,while,do,for,switch
setlocal colorcolumn=
setlocal comments=s1:/*,mb:*,ex:*/,://,b:#,:%,:XCOMM,n:>,fb:-
setlocal commentstring=/*%s*/
setlocal complete=.,w,b,u,t,i
setlocal concealcursor=
setlocal conceallevel=0
setlocal completefunc=
setlocal nocopyindent
setlocal cryptmethod=
setlocal nocursorbind
setlocal nocursorcolumn
setlocal nocursorline
setlocal define=
setlocal dictionary=
setlocal nodiff
setlocal equalprg=
setlocal errorformat=
setlocal expandtab
if &filetype != ''
setlocal filetype=
endif
setlocal foldcolumn=0
setlocal foldenable
setlocal foldexpr=0
setlocal foldignore=#
setlocal foldlevel=0
setlocal foldmarker={{{,}}}
set foldmethod=indent
setlocal foldmethod=indent
setlocal foldminlines=1
setlocal foldnestmax=20
setlocal foldtext=foldtext()
setlocal formatexpr=
setlocal formatoptions=tcq
setlocal formatlistpat=^\\s*\\d\\+[\\]:.)}\\t\ ]\\s*
setlocal grepprg=
setlocal iminsert=2
setlocal imsearch=2
setlocal include=
setlocal includeexpr=
setlocal indentexpr=
setlocal indentkeys=0{,0},:,0#,!^F,o,O,e
setlocal noinfercase
setlocal iskeyword=@,48-57,_,192-255
setlocal keywordprg=
setlocal nolinebreak
setlocal nolisp
setlocal nolist
setlocal makeprg=
setlocal matchpairs=(:),{:},[:]
setlocal modeline
setlocal modifiable
setlocal nrformats=octal,hex
setlocal nonumber
setlocal numberwidth=4
setlocal omnifunc=
setlocal path=
setlocal nopreserveindent
setlocal nopreviewwindow
setlocal quoteescape=\\
setlocal noreadonly
setlocal norelativenumber
setlocal norightleft
setlocal rightleftcmd=search
setlocal noscrollbind
setlocal shiftwidth=4
setlocal noshortname
setlocal smartindent
setlocal softtabstop=4
setlocal nospell
setlocal spellcapcheck=[.?!]\\_[\\])'\"\	\ ]\\+
setlocal spellfile=
setlocal spelllang=en
setlocal statusline=
setlocal suffixesadd=
setlocal noswapfile
setlocal synmaxcol=3000
if &syntax != ''
setlocal syntax=
endif
setlocal tabstop=4
setlocal tags=
setlocal textwidth=0
setlocal thesaurus=
setlocal noundofile
setlocal nowinfixheight
setlocal nowinfixwidth
setlocal wrap
setlocal wrapmargin=0
let s:l = 1 - ((0 * winheight(0) + 23) / 46)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
1
normal! 0
lcd C:\archive\SpriteBuilder-Reader-js
wincmd w
argglobal
edit C:\archive\PeevedPenguins-Spritebuilder\PeevedPenguins.spritebuilder\SpriteBuilder\ Resources\MainScene.ccb
setlocal keymap=
setlocal noarabic
setlocal autoindent
setlocal balloonexpr=
setlocal nobinary
setlocal bufhidden=
setlocal buflisted
setlocal buftype=
setlocal nocindent
setlocal cinkeys=0{,0},0),:,0#,!^F,o,O,e
setlocal cinoptions=
setlocal cinwords=if,else,while,do,for,switch
setlocal colorcolumn=
setlocal comments=s1:/*,mb:*,ex:*/,://,b:#,:%,:XCOMM,n:>,fb:-
setlocal commentstring=/*%s*/
setlocal complete=.,w,b,u,t,i
setlocal concealcursor=
setlocal conceallevel=0
setlocal completefunc=
setlocal nocopyindent
setlocal cryptmethod=
setlocal nocursorbind
setlocal nocursorcolumn
setlocal nocursorline
setlocal define=
setlocal dictionary=
setlocal nodiff
setlocal equalprg=
setlocal errorformat=
setlocal expandtab
if &filetype != 'xml'
setlocal filetype=xml
endif
setlocal foldcolumn=0
setlocal foldenable
setlocal foldexpr=0
setlocal foldignore=#
setlocal foldlevel=0
setlocal foldmarker={{{,}}}
set foldmethod=indent
setlocal foldmethod=indent
setlocal foldminlines=1
setlocal foldnestmax=20
setlocal foldtext=foldtext()
setlocal formatexpr=
setlocal formatoptions=tcq
setlocal formatlistpat=^\\s*\\d\\+[\\]:.)}\\t\ ]\\s*
setlocal grepprg=
setlocal iminsert=2
setlocal imsearch=2
setlocal include=
setlocal includeexpr=
setlocal indentexpr=
setlocal indentkeys=0{,0},:,0#,!^F,o,O,e
setlocal noinfercase
setlocal iskeyword=@,48-57,_,192-255
setlocal keywordprg=
setlocal nolinebreak
setlocal nolisp
setlocal nolist
setlocal makeprg=
setlocal matchpairs=(:),{:},[:]
setlocal modeline
setlocal modifiable
setlocal nrformats=octal,hex
setlocal nonumber
setlocal numberwidth=4
setlocal omnifunc=
setlocal path=
setlocal nopreserveindent
setlocal nopreviewwindow
setlocal quoteescape=\\
setlocal noreadonly
setlocal norelativenumber
setlocal norightleft
setlocal rightleftcmd=search
setlocal noscrollbind
setlocal shiftwidth=4
setlocal noshortname
setlocal smartindent
setlocal softtabstop=4
setlocal nospell
setlocal spellcapcheck=[.?!]\\_[\\])'\"\	\ ]\\+
setlocal spellfile=
setlocal spelllang=en
setlocal statusline=
setlocal suffixesadd=
setlocal noswapfile
setlocal synmaxcol=3000
if &syntax != 'xml'
setlocal syntax=xml
endif
setlocal tabstop=4
setlocal tags=
setlocal textwidth=0
setlocal thesaurus=
setlocal noundofile
setlocal nowinfixheight
setlocal nowinfixwidth
setlocal wrap
setlocal wrapmargin=0
5
normal zo
23
normal zo
27
normal zo
28
normal zo
42
normal zo
43
normal zo
51
normal zo
57
normal zo
51
normal zo
65
normal zo
71
normal zo
65
normal zo
76
normal zo
82
normal zo
76
normal zo
89
normal zo
95
normal zo
89
normal zo
100
normal zo
106
normal zo
100
normal zo
42
normal zo
28
normal zo
115
normal zo
129
normal zo
130
normal zo
138
normal zo
144
normal zo
138
normal zo
152
normal zo
158
normal zo
152
normal zo
163
normal zo
169
normal zo
163
normal zo
176
normal zo
182
normal zo
176
normal zo
187
normal zo
193
normal zo
187
normal zo
200
normal zo
206
normal zo
200
normal zo
213
normal zo
221
normal zo
227
normal zo
221
normal zo
232
normal zo
238
normal zo
232
normal zo
243
normal zo
249
normal zo
243
normal zo
254
normal zo
260
normal zo
254
normal zo
267
normal zo
273
normal zo
267
normal zo
278
normal zo
286
normal zo
294
normal zo
300
normal zo
294
normal zo
305
normal zo
313
normal zo
321
normal zo
329
normal zo
335
normal zo
329
normal zo
340
normal zo
346
normal zo
340
normal zo
351
normal zo
357
normal zo
351
normal zo
362
normal zo
368
normal zo
362
normal zo
375
normal zo
381
normal zo
375
normal zo
388
normal zo
394
normal zo
388
normal zo
399
normal zo
405
normal zo
399
normal zo
412
normal zo
418
normal zo
412
normal zo
423
normal zo
429
normal zo
423
normal zo
129
normal zo
115
normal zo
27
normal zo
449
normal zo
450
normal zo
458
normal zo
464
normal zo
458
normal zo
472
normal zo
478
normal zo
472
normal zo
485
normal zo
491
normal zo
485
normal zo
496
normal zo
502
normal zo
496
normal zo
449
normal zo
23
normal zo
514
normal zo
515
normal zo
529
normal zo
543
normal zo
514
normal zo
559
normal zo
560
normal zo
564
normal zo
587
normal zo
560
normal zo
559
normal zo
5
normal zo
let s:l = 45 - ((3 * winheight(0) + 23) / 46)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
45
normal! 010l
lcd C:\archive\SpriteBuilder-Reader-js
wincmd w
exe 'vert 1resize ' . ((&columns * 84 + 95) / 190)
exe 'vert 2resize ' . ((&columns * 105 + 95) / 190)
tabedit C:\archive\SpriteBuilder-Reader-js\src\CCBReader_private.h
set splitbelow splitright
wincmd _ | wincmd |
split
1wincmd k
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
wincmd w
set nosplitbelow
set nosplitright
wincmd t
set winheight=1 winwidth=1
exe '1resize ' . ((&lines * 44 + 24) / 48)
exe 'vert 1resize ' . ((&columns * 67 + 95) / 190)
exe '2resize ' . ((&lines * 44 + 24) / 48)
exe 'vert 2resize ' . ((&columns * 122 + 95) / 190)
exe '3resize ' . ((&lines * 1 + 24) / 48)
argglobal
setlocal keymap=
setlocal noarabic
setlocal autoindent
setlocal balloonexpr=
setlocal nobinary
setlocal bufhidden=
setlocal buflisted
setlocal buftype=
setlocal nocindent
setlocal cinkeys=0{,0},0),:,0#,!^F,o,O,e
setlocal cinoptions=
setlocal cinwords=if,else,while,do,for,switch
setlocal colorcolumn=
setlocal comments=s1:/*,mb:*,ex:*/,://,b:#,:%,:XCOMM,n:>,fb:-
setlocal commentstring=/*%s*/
setlocal complete=.,w,b,u,t,i
setlocal concealcursor=
setlocal conceallevel=0
setlocal completefunc=
setlocal nocopyindent
setlocal cryptmethod=
setlocal nocursorbind
setlocal nocursorcolumn
setlocal nocursorline
setlocal define=
setlocal dictionary=
setlocal nodiff
setlocal equalprg=
setlocal errorformat=
setlocal expandtab
if &filetype != 'objc'
setlocal filetype=objc
endif
setlocal foldcolumn=0
setlocal foldenable
setlocal foldexpr=0
setlocal foldignore=#
setlocal foldlevel=0
setlocal foldmarker={{{,}}}
set foldmethod=indent
setlocal foldmethod=manual
setlocal foldminlines=1
setlocal foldnestmax=20
setlocal foldtext=foldtext()
setlocal formatexpr=
setlocal formatoptions=tcq
setlocal formatlistpat=^\\s*\\d\\+[\\]:.)}\\t\ ]\\s*
setlocal grepprg=
setlocal iminsert=2
setlocal imsearch=2
setlocal include=
setlocal includeexpr=
setlocal indentexpr=
setlocal indentkeys=0{,0},:,0#,!^F,o,O,e
setlocal noinfercase
setlocal iskeyword=@,48-57,_,192-255
setlocal keywordprg=
setlocal nolinebreak
setlocal nolisp
setlocal nolist
setlocal makeprg=
setlocal matchpairs=(:),{:},[:]
setlocal modeline
setlocal modifiable
setlocal nrformats=octal,hex
setlocal nonumber
setlocal numberwidth=4
setlocal omnifunc=
setlocal path=
setlocal nopreserveindent
setlocal nopreviewwindow
setlocal quoteescape=\\
setlocal noreadonly
setlocal norelativenumber
setlocal norightleft
setlocal rightleftcmd=search
setlocal noscrollbind
setlocal shiftwidth=4
setlocal noshortname
setlocal smartindent
setlocal softtabstop=4
setlocal nospell
setlocal spellcapcheck=[.?!]\\_[\\])'\"\	\ ]\\+
setlocal spellfile=
setlocal spelllang=en
setlocal statusline=
setlocal suffixesadd=
setlocal noswapfile
setlocal synmaxcol=3000
if &syntax != 'objc'
setlocal syntax=objc
endif
setlocal tabstop=4
setlocal tags=
setlocal textwidth=0
setlocal thesaurus=
setlocal noundofile
setlocal nowinfixheight
setlocal nowinfixwidth
setlocal wrap
setlocal wrapmargin=0
silent! normal! zE
let s:l = 22 - ((17 * winheight(0) + 22) / 44)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
22
normal! 04l
lcd C:\archive\SpriteBuilder-Reader-js
wincmd w
argglobal
edit C:\archive\PeevedPenguins-Spritebuilder\PeevedPenguins.spritebuilder\Source\libs\cocos2d-iphone\cocos2d\ccTypes.h
setlocal keymap=
setlocal noarabic
setlocal autoindent
setlocal balloonexpr=
setlocal nobinary
setlocal bufhidden=
setlocal buflisted
setlocal buftype=
setlocal nocindent
setlocal cinkeys=0{,0},0),:,0#,!^F,o,O,e
setlocal cinoptions=
setlocal cinwords=if,else,while,do,for,switch
setlocal colorcolumn=
setlocal comments=s1:/*,mb:*,ex:*/,://,b:#,:%,:XCOMM,n:>,fb:-
setlocal commentstring=/*%s*/
setlocal complete=.,w,b,u,t,i
setlocal concealcursor=
setlocal conceallevel=0
setlocal completefunc=
setlocal nocopyindent
setlocal cryptmethod=
setlocal nocursorbind
setlocal nocursorcolumn
setlocal nocursorline
setlocal define=
setlocal dictionary=
setlocal nodiff
setlocal equalprg=
setlocal errorformat=
setlocal expandtab
if &filetype != 'cpp'
setlocal filetype=cpp
endif
setlocal foldcolumn=0
setlocal foldenable
setlocal foldexpr=0
setlocal foldignore=#
setlocal foldlevel=0
setlocal foldmarker={{{,}}}
set foldmethod=indent
setlocal foldmethod=manual
setlocal foldminlines=1
setlocal foldnestmax=20
setlocal foldtext=foldtext()
setlocal formatexpr=
setlocal formatoptions=tcq
setlocal formatlistpat=^\\s*\\d\\+[\\]:.)}\\t\ ]\\s*
setlocal grepprg=
setlocal iminsert=2
setlocal imsearch=2
setlocal include=
setlocal includeexpr=
setlocal indentexpr=
setlocal indentkeys=0{,0},:,0#,!^F,o,O,e
setlocal noinfercase
setlocal iskeyword=@,48-57,_,192-255
setlocal keywordprg=
setlocal nolinebreak
setlocal nolisp
setlocal nolist
setlocal makeprg=
setlocal matchpairs=(:),{:},[:]
setlocal modeline
setlocal modifiable
setlocal nrformats=octal,hex
setlocal nonumber
setlocal numberwidth=4
setlocal omnifunc=
setlocal path=
setlocal nopreserveindent
setlocal nopreviewwindow
setlocal quoteescape=\\
setlocal noreadonly
setlocal norelativenumber
setlocal norightleft
setlocal rightleftcmd=search
setlocal noscrollbind
setlocal shiftwidth=4
setlocal noshortname
setlocal smartindent
setlocal softtabstop=4
setlocal nospell
setlocal spellcapcheck=[.?!]\\_[\\])'\"\	\ ]\\+
setlocal spellfile=
setlocal spelllang=en
setlocal statusline=
setlocal suffixesadd=
setlocal noswapfile
setlocal synmaxcol=3000
if &syntax != 'cpp'
setlocal syntax=cpp
endif
setlocal tabstop=4
setlocal tags=
setlocal textwidth=0
setlocal thesaurus=
setlocal noundofile
setlocal nowinfixheight
setlocal nowinfixwidth
setlocal wrap
setlocal wrapmargin=0
silent! normal! zE
let s:l = 163 - ((15 * winheight(0) + 22) / 44)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
163
normal! 01l
lcd C:\archive\SpriteBuilder-Reader-js
wincmd w
argglobal
enew
setlocal keymap=
setlocal noarabic
setlocal autoindent
setlocal balloonexpr=
setlocal nobinary
setlocal bufhidden=wipe
setlocal buflisted
setlocal buftype=quickfix
setlocal nocindent
setlocal cinkeys=0{,0},0),:,0#,!^F,o,O,e
setlocal cinoptions=
setlocal cinwords=if,else,while,do,for,switch
setlocal colorcolumn=
setlocal comments=s1:/*,mb:*,ex:*/,://,b:#,:%,:XCOMM,n:>,fb:-
setlocal commentstring=/*%s*/
setlocal complete=.,w,b,u,t,i
setlocal concealcursor=
setlocal conceallevel=0
setlocal completefunc=
setlocal nocopyindent
setlocal cryptmethod=
setlocal nocursorbind
setlocal nocursorcolumn
setlocal nocursorline
setlocal define=
setlocal dictionary=
setlocal nodiff
setlocal equalprg=
setlocal errorformat=
setlocal expandtab
if &filetype != 'qf'
setlocal filetype=qf
endif
setlocal foldcolumn=0
setlocal foldenable
setlocal foldexpr=0
setlocal foldignore=#
setlocal foldlevel=0
setlocal foldmarker={{{,}}}
set foldmethod=indent
setlocal foldmethod=manual
setlocal foldminlines=1
setlocal foldnestmax=20
setlocal foldtext=foldtext()
setlocal formatexpr=
setlocal formatoptions=tcq
setlocal formatlistpat=^\\s*\\d\\+[\\]:.)}\\t\ ]\\s*
setlocal grepprg=
setlocal iminsert=2
setlocal imsearch=2
setlocal include=
setlocal includeexpr=
setlocal indentexpr=
setlocal indentkeys=0{,0},:,0#,!^F,o,O,e
setlocal noinfercase
setlocal iskeyword=@,48-57,_,192-255
setlocal keywordprg=
setlocal nolinebreak
setlocal nolisp
setlocal nolist
setlocal makeprg=
setlocal matchpairs=(:),{:},[:]
setlocal modeline
setlocal nomodifiable
setlocal nrformats=octal,hex
setlocal nonumber
setlocal numberwidth=4
setlocal omnifunc=
setlocal path=
setlocal nopreserveindent
setlocal nopreviewwindow
setlocal quoteescape=\\
setlocal noreadonly
setlocal norelativenumber
setlocal norightleft
setlocal rightleftcmd=search
setlocal noscrollbind
setlocal shiftwidth=4
setlocal noshortname
setlocal smartindent
setlocal softtabstop=4
setlocal nospell
setlocal spellcapcheck=[.?!]\\_[\\])'\"\	\ ]\\+
setlocal spellfile=
setlocal spelllang=en
setlocal statusline=
setlocal suffixesadd=
setlocal noswapfile
setlocal synmaxcol=3000
if &syntax != 'qf'
setlocal syntax=qf
endif
setlocal tabstop=4
setlocal tags=
setlocal textwidth=0
setlocal thesaurus=
setlocal noundofile
setlocal winfixheight
setlocal nowinfixwidth
setlocal wrap
setlocal wrapmargin=0
lcd C:\archive\SpriteBuilder-Reader-js
wincmd w
exe '1resize ' . ((&lines * 44 + 24) / 48)
exe 'vert 1resize ' . ((&columns * 67 + 95) / 190)
exe '2resize ' . ((&lines * 44 + 24) / 48)
exe 'vert 2resize ' . ((&columns * 122 + 95) / 190)
exe '3resize ' . ((&lines * 1 + 24) / 48)
tabnext 1
if exists('s:wipebuf')
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20 shortmess=filnxtToO
let s:sx = expand("<sfile>:p:r")."x.vim"
if file_readable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &so = s:so_save | let &siso = s:siso_save
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
