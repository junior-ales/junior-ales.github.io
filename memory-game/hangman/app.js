!function(){"use strict";var e="undefined"==typeof window?global:window;if("function"!=typeof e.require){var t={},r={},n={},o={}.hasOwnProperty,a=/^\.\.?(\/|$)/,i=function(e,t){for(var r,n=[],o=(a.test(t)?e+"/"+t:t).split("/"),i=0,s=o.length;i<s;i++)r=o[i],".."===r?n.pop():"."!==r&&""!==r&&n.push(r);return n.join("/")},s=function(e){return e.split("/").slice(0,-1).join("/")},u=function(t){return function(r){var n=i(s(t),r);return e.require(n,t)}},l=function(e,t){var n=null;n=m&&m.createHot(e);var o={id:e,exports:{},hot:n};return r[e]=o,t(o.exports,u(e),o),o.exports},c=function(e){return n[e]?c(n[e]):e},f=function(e,t){return c(i(s(e),t))},p=function(e,n){null==n&&(n="/");var a=c(e);if(o.call(r,a))return r[a].exports;if(o.call(t,a))return l(a,t[a]);throw new Error("Cannot find module '"+e+"' from '"+n+"'")};p.alias=function(e,t){n[t]=e};var d=/\.[^.\/]+$/,h=/\/index(\.[^\/]+)?$/,y=function(e){if(d.test(e)){var t=e.replace(d,"");o.call(n,t)&&n[t].replace(d,"")!==t+"/index"||(n[t]=e)}if(h.test(e)){var r=e.replace(h,"");o.call(n,r)||(n[r]=e)}};p.register=p.define=function(e,n){if("object"==typeof e)for(var a in e)o.call(e,a)&&p.register(a,e[a]);else t[e]=n,delete r[e],y(e)},p.list=function(){var e=[];for(var r in t)o.call(t,r)&&e.push(r);return e};var m=e._hmr&&new e._hmr(f,p,t,r);p._cache=r,p.hmr=m&&m.wrap,p.brunch=!0,e.require=p}}(),function(){var e;window;require.register("components/App.jsx",function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=t("react"),l=n(u),c=t("lodash/fp"),f=t("./Game"),p=n(f),d=t("./ScoreBoard"),h=n(d),y=(0,c.add)(1),m=function(e){function t(e){o(this,t);var r=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={dataReady:!1,wordsMap:{},alphabet:[],gameId:1,totalScore:0,gameLevel:{rows:6,columns:6,wordSize:4,wrongLettersQuantity:12}},r}return i(t,e),s(t,[{key:"componentWillMount",value:function(){var e=this;fetch("dictionary.json").then(function(e){return e.json()}).then(function(t){e.setState({dataReady:!0,wordsMap:t.wordsMap,alphabet:t.alphabet})})["catch"](function(e){console.log("error fetching data: "+e)})}},{key:"playAgain",value:function(e){var t=this.state.gameLevel;"won"===e&&(t.wordSize=y(t.wordSize),t.wrongLettersQuantity=y(t.wrongLettersQuantity)),this.setState({gameId:y(this.state.gameId),gameLevel:t})}},{key:"updateScore",value:function(e){this.setState({totalScore:this.state.totalScore+e})}},{key:"render",value:function(){return l["default"].createElement("div",{id:"content"},this.state.dataReady?l["default"].createElement("section",null,l["default"].createElement(h["default"],{score:this.state.totalScore}),l["default"].createElement(p["default"],{key:this.state.gameId,gameLevel:this.state.gameLevel,wordsMap:this.state.wordsMap,alphabet:this.state.alphabet,updateScore:this.updateScore.bind(this),playAgain:this.playAgain.bind(this)})):l["default"].createElement("p",null,"Inicializando o jogo..."))}}]),t}(l["default"].Component);e["default"]=m}),require.register("components/Cell.jsx",function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=t("react"),l=n(u),c=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),s(t,[{key:"handleClick",value:function(){var e="recall"===this.props.gameState,t=void 0===this.guessState();e&&t&&this.props.recordGuess({cellId:this.props.id,userGuessIsCorrect:this.active()})}},{key:"active",value:function(){return this.props.correctLetterCells.indexOf(this.props.id)>-1}},{key:"guessState",value:function(){var e=this.props.correctGuesses.indexOf(this.props.id)>-1,t=this.props.wrongGuesses.indexOf(this.props.id)>-1;return!!e||!t&&void 0}},{key:"render",value:function(){var e="cell";return this.props.showAnswer&&this.active()&&(e+=" active"),this.props.enabled&&(e+=" enabled"),e+=" guess-"+this.guessState(),l["default"].createElement("div",{className:e,onClick:this.handleClick.bind(this)},l["default"].createElement("em",{className:"guess-letter"}," ",this.props.letter))}}]),t}(l["default"].Component);e["default"]=c}),require.register("components/Footer.jsx",function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=t("react"),l=n(u),c=t("lodash"),f=function(e){function t(e){o(this,t);var r=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.word=(0,c.replace)(r.props.word,(0,c.sample)(r.props.word),"_"),r}return i(t,e),s(t,[{key:"playAgain",value:function(){var e=l["default"].createElement("div",null,l["default"].createElement("button",{onClick:this.props.playAgain.bind(this,this.props.gameState)},"Play Again"),l["default"].createElement("p",null,this.props.word));if(["won","lost"].indexOf(this.props.gameState)>-1)return e}},{key:"render",value:function(){var e="hint "+this.props.gameState;return l["default"].createElement("div",{className:"footer"},l["default"].createElement("div",{className:"word-box"},"Adivinhe a palavra: ",l["default"].createElement("em",{className:"word"},this.word)),l["default"].createElement("div",{className:e},this.props.hints[this.props.gameState]),this.playAgain())}}]),t}(l["default"].Component);f.defaultProps={hints:{ready:"Prepare-se",recall:"Valendo!",won:"Parabéns!",lost:"Game Over"}},e["default"]=f}),require.register("components/Game.jsx",function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=t("react"),l=n(u),c=t("lodash"),f=t("./Cell"),p=n(f),d=t("./Row"),h=n(d),y=t("./Footer"),m=n(y),b=function(e){function t(e){o(this,t);var r=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),n=e.wordsMap,i=e.alphabet,s=e.gameLevel,u=s.rows,l=s.columns,f=s.wordSize,p=s.wrongLettersQuantity;r.matrix=(0,c.range)(u).map(function(e){return(0,c.range)(l).map(function(t){return""+e+t})}),r.word=(0,c.sample)(n[f]);var d=(0,c.sampleSize)((0,c.flatten)(r.matrix),f+p),h=(0,c.drop)(d,f);r.correctLetterCells=(0,c.take)(d,f);var y=(0,c.take)((0,c.difference)((0,c.shuffle)(i),(0,c.toArray)(r.word)),p);return r.lettersMap=(0,c.assign)({},(0,c.zipObject)(r.correctLetterCells,r.word),(0,c.zipObject)(h,y.join(""))),r.state={gameState:"ready",correctGuesses:[],wrongGuesses:[]},r}return i(t,e),s(t,[{key:"componentDidMount",value:function(){this.recallTimerId=setTimeout(this.startRecallMode.bind(this),3e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.recallTimerId),this.finishGame()}},{key:"startRecallMode",value:function(){var e=this;this.setState({gameState:"recall"},function(){e.secondsRemaining=e.props.timeoutSeconds,e.playTimerId=setInterval(function(){0===--e.secondsRemaining&&e.setState({gameState:e.finishGame("lost")})},1e3)})}},{key:"finishGame",value:function(e){return clearInterval(this.playTimerId),e}},{key:"calculateScore",value:function(e){var t=void 0;t=0===e?3:1===e?2:1;var r=this.props.timeoutSeconds/2;return this.secondsRemaining>=r&&(t*=2),t}},{key:"recordGuess",value:function(e){var t=e.cellId,r=e.userGuessIsCorrect,n=this.state,o=n.correctGuesses,a=n.wrongGuesses,i=n.gameState;r?o.push(t):a.push(t),o.length===this.word.length&&(i=this.finishGame("won"),this.props.updateScore(this.calculateScore(a.length))),a.length>this.props.allowedWrongAttempts&&(i=this.finishGame("lost")),this.setState({correctGuesses:o,wrongGuesses:a,gameState:i})}},{key:"render",value:function(){var e=this;return l["default"].createElement("div",{className:"grid"},this.matrix.map(function(t,r){return l["default"].createElement(h["default"],{key:r},t.map(function(t){return l["default"].createElement(p["default"],{key:t,id:t,letter:e.lettersMap[t],correctLetterCells:e.correctLetterCells,showAnswer:"lost"===e.state.gameState,enabled:"recall"===e.state.gameState,recordGuess:e.recordGuess.bind(e),correctGuesses:e.state.correctGuesses,wrongGuesses:e.state.wrongGuesses,gameState:e.state.gameState})}))}),l["default"].createElement(m["default"],{gameState:this.state.gameState,word:this.word,playAgain:this.props.playAgain,correctGuesses:this.state.correctGuesses,activeCellsCount:this.word.length}))}}]),t}(l["default"].Component);b.defaultProps={allowedWrongAttempts:2,timeoutSeconds:10},e["default"]=b}),require.register("components/Row.jsx",function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=t("react"),l=n(u),c=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),s(t,[{key:"render",value:function(){return l["default"].createElement("div",{className:"row"},this.props.children)}}]),t}(l["default"].Component);e["default"]=c}),require.register("components/ScoreBoard.jsx",function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=t("react"),l=n(u),c=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),s(t,[{key:"render",value:function(){return l["default"].createElement("div",{className:"score-board"},"Points: ",this.props.score)}}]),t}(l["default"].Component);e["default"]=c}),require.register("initialize.js",function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}t("whatwg-fetch");var o=t("react"),a=n(o),i=t("react-dom"),s=n(i),u=t("components/App"),l=n(u);document.addEventListener("DOMContentLoaded",function(){s["default"].render(a["default"].createElement(l["default"],null),document.querySelector("#app"))})}),require.alias("buffer/index.js","buffer"),require.alias("process/browser.js","process"),e=require("process"),require.register("___globals___",function(e,t,r){})}(),require("___globals___");