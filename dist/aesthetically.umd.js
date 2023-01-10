!function(g,f){"object"==typeof exports&&"undefined"!=typeof module?module.exports=f():"function"==typeof define&&define.amd?define(f):(g="undefined"!=typeof globalThis?globalThis:g||self).Aesthetically=f()}(this,(function(){"use strict";function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||_unsupportedIterableToArray(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||_unsupportedIterableToArray(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _createForOfIteratorHelper(o,allowArrayLike){var it="undefined"!=typeof Symbol&&o[Symbol.iterator]||o["@@iterator"];if(!it){if(Array.isArray(o)||(it=_unsupportedIterableToArray(o))||allowArrayLike&&o&&"number"==typeof o.length){it&&(o=it);var i=0,F=function(){};return{s:F,n:function(){return i>=o.length?{done:!0}:{done:!1,value:o[i++]}},e:function(e){throw e},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var err,normalCompletion=!0,didErr=!1;return{s:function(){it=it.call(o)},n:function(){var step=it.next();return normalCompletion=step.done,step},e:function(e){didErr=!0,err=e},f:function(){try{normalCompletion||null==it.return||it.return()}finally{if(didErr)throw err}}}}var id=0;function _classPrivateFieldLooseKey(name){return"__private_"+id+++"_"+name}function _classPrivateFieldLooseBase(receiver,privateKey){if(!Object.prototype.hasOwnProperty.call(receiver,privateKey))throw new TypeError("attempted to use private field on non-instance");return receiver}var _characters=_classPrivateFieldLooseKey("characters"),_styleDict=_classPrivateFieldLooseKey("styleDict"),_styleReverseMap=_classPrivateFieldLooseKey("styleReverseMap"),Aesthetically=function(){function Aesthetically(){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Aesthetically)}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Aesthetically,null,[{key:"format",value:function format(text,style){return style in _classPrivateFieldLooseBase(Aesthetically,_styleDict)[_styleDict]||(_classPrivateFieldLooseBase(Aesthetically,_styleDict)[_styleDict][style]=Aesthetically._generateMap(Aesthetically.styles[style])),convertText(text,_classPrivateFieldLooseBase(Aesthetically,_styleDict)[_styleDict][style]);function convertText(text,styleMap){var _step,styledText="",_iterator=_createForOfIteratorHelper(text);try{for(_iterator.s();!(_step=_iterator.n()).done;){var _char=_step.value;styledText+=styleMap.get(_char)||_char}}catch(err){_iterator.e(err)}finally{_iterator.f()}return styledText}}},{key:"_generateMap",value:function _generateMap(styleInfo){var exceptions,map=new Map,hasExceptions=styleInfo.hasOwnProperty("exceptions");if(hasExceptions)for(var chars in exceptions=[],Object.keys(styleInfo.exceptions).forEach((function(key){exceptions=[].concat(_toConsumableArray(exceptions),_toConsumableArray(key))})),styleInfo.exceptions){var _step2,offset=styleInfo.exceptions[chars],i=0,_iterator2=_createForOfIteratorHelper(chars);try{for(_iterator2.s();!(_step2=_iterator2.n()).done;){var _char2=_step2.value,styledChar=String.fromCodePoint(i+offset);map.set(_char2,styledChar),i++}}catch(err){_iterator2.e(err)}finally{_iterator2.f()}}for(var charSet in!styleInfo.hasOwnProperty("upper")&&styleInfo.hasOwnProperty("lower")?styleInfo.upper=styleInfo.lower:!styleInfo.hasOwnProperty("lower")&&styleInfo.hasOwnProperty("upper")&&(styleInfo.lower=styleInfo.upper),_classPrivateFieldLooseBase(Aesthetically,_characters)[_characters])if("number"==typeof styleInfo[charSet]){var _step3,_iterator3=_createForOfIteratorHelper(_classPrivateFieldLooseBase(Aesthetically,_characters)[_characters][charSet].chars);try{for(_iterator3.s();!(_step3=_iterator3.n()).done;){var _char3=_step3.value;if(!hasExceptions||!exceptions.includes(_char3)){var code=_char3.codePointAt(0),_styledChar=String.fromCodePoint(code+styleInfo[charSet]-_classPrivateFieldLooseBase(Aesthetically,_characters)[_characters][charSet]["lower-bound"]);map.set(_char3,_styledChar)}}}catch(err){_iterator3.e(err)}finally{_iterator3.f()}}return map}},{key:"unformat",value:function unformat(text){void 0===_classPrivateFieldLooseBase(Aesthetically,_styleReverseMap)[_styleReverseMap]&&Aesthetically._generateReverseMap();var _step4,unformatted="",_iterator4=_createForOfIteratorHelper(text);try{for(_iterator4.s();!(_step4=_iterator4.n()).done;){var _char4=_step4.value;unformatted+=_classPrivateFieldLooseBase(Aesthetically,_styleReverseMap)[_styleReverseMap].get(_char4)||_char4}}catch(err){_iterator4.e(err)}finally{_iterator4.f()}return unformatted}},{key:"_generateReverseMap",value:function _generateReverseMap(){for(var styles={},_len=arguments.length,styleList=new Array(_len),_key=0;_key<_len;_key++)styleList[_key]=arguments[_key];if(0===styleList.length)for(var normalSet in styles=Aesthetically.styles,_classPrivateFieldLooseBase(Aesthetically,_characters)[_characters]){var offset=_classPrivateFieldLooseBase(Aesthetically,_characters)[_characters][normalSet]["lower-bound"];styles.normal=offset}else styleList.forEach((function(s){styles.push(Aesthetically.styles[s])}));for(var style in _classPrivateFieldLooseBase(Aesthetically,_styleReverseMap)[_styleReverseMap]=new Map,styles){var _step5,_iterator5=_createForOfIteratorHelper(style in _classPrivateFieldLooseBase(Aesthetically,_styleDict)[_styleDict]?_classPrivateFieldLooseBase(Aesthetically,_styleDict)[_styleDict][style]:Aesthetically._generateMap(styles[style]));try{for(_iterator5.s();!(_step5=_iterator5.n()).done;){var _step5$value=_slicedToArray(_step5.value,2),key=_step5$value[0],value=_step5$value[1];_classPrivateFieldLooseBase(Aesthetically,_styleReverseMap)[_styleReverseMap].set(value,key)}}catch(err){_iterator5.e(err)}finally{_iterator5.f()}}}}]),Aesthetically}();return Aesthetically.styles={"serf-bold":{upper:119808,lower:119834,digits:120783,zero:120782},"serf-italic":{upper:119860,lower:119886,exceptions:{h:8462}},"serf-bold-italic":{upper:119912,lower:119938},"sans-serf":{upper:120224,lower:120250,digits:120803,zero:120802},"sans-serf-bold":{upper:120276,lower:120302,digits:120813,zero:120812},"sans-serf-italic":{upper:120328,lower:120354},"sans-serf-bold-italic":{upper:120380,lower:120406},script:{upper:119964,lower:119990,exceptions:{B:8492,EF:8496,H:8459,I:8464,L:8466,M:8499,R:8475,e:8495,g:8458,o:8500}},"script-bold":{upper:120016,lower:120042},fraktur:{upper:120068,lower:120094,exceptions:{C:8493,H:8460,I:8465,R:8476,Z:8488}},"fraktur-bold":{upper:120172,lower:120198},monospace:{upper:120432,lower:120458,digits:120823,zero:120822},"double-struck":{upper:120120,lower:120146,digits:120793,zero:120792,exceptions:{C:8450,H:8461,N:8469,P:8473,Q:8474,R:8477,Z:8484}},circled:{upper:9398,lower:9424,digits:9312,zero:127243},"negative-circled":{upper:127312,zero:9471},"parenthesized-small":{lower:9372,digits:9332},"parenthesized-large":{upper:127248},squared:{upper:127280},"negative-squared":{upper:127344}},Object.defineProperty(Aesthetically,_characters,{writable:!0,value:{lower:{chars:"abcdefghijklmnopqrstuvwxyz","lower-bound":97},upper:{chars:"ABCDEFGHIJKLMNOPQRSTUVWXYZ","lower-bound":65},digits:{chars:"123456789","lower-bound":49},zero:{chars:"0","lower-bound":48}}}),Object.defineProperty(Aesthetically,_styleDict,{writable:!0,value:{}}),Object.defineProperty(Aesthetically,_styleReverseMap,{writable:!0,value:void 0}),Aesthetically}));