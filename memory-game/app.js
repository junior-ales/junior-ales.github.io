!function(){"use strict";var e="undefined"==typeof window?global:window;if("function"!=typeof e.require){var t={},r={},n={},o={}.hasOwnProperty,i=/^\.\.?(\/|$)/,a=function(e,t){for(var r,n=[],o=(i.test(t)?e+"/"+t:t).split("/"),a=0,u=o.length;a<u;a++)r=o[a],".."===r?n.pop():"."!==r&&""!==r&&n.push(r);return n.join("/")},u=function(e){return e.split("/").slice(0,-1).join("/")},s=function(t){return function(r){var n=a(u(t),r);return e.require(n,t)}},c=function(e,t){var n=null;n=y&&y.createHot(e);var o={id:e,exports:{},hot:n};return r[e]=o,t(o.exports,s(e),o),o.exports},l=function(e){return n[e]?l(n[e]):e},f=function(e,t){return l(a(u(e),t))},p=function(e,n){null==n&&(n="/");var i=l(e);if(o.call(r,i))return r[i].exports;if(o.call(t,i))return c(i,t[i]);throw new Error("Cannot find module '"+e+"' from '"+n+"'")};p.alias=function(e,t){n[t]=e};var d=/\.[^.\/]+$/,h=/\/index(\.[^\/]+)?$/,m=function(e){if(d.test(e)){var t=e.replace(d,"");o.call(n,t)&&n[t].replace(d,"")!==t+"/index"||(n[t]=e)}if(h.test(e)){var r=e.replace(h,"");o.call(n,r)||(n[r]=e)}};p.register=p.define=function(e,n){if("object"==typeof e)for(var i in e)o.call(e,i)&&p.register(i,e[i]);else t[e]=n,delete r[e],m(e)},p.list=function(){var e=[];for(var r in t)o.call(t,r)&&e.push(r);return e};var y=e._hmr&&new e._hmr(f,p,t,r);p._cache=r,p.hmr=y&&y.wrap,p.brunch=!0,e.require=p}}(),function(){var e;window;require.register("components/App.jsx",function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0});var u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=t("react"),c=n(s),l=t("lodash/fp"),f=t("./Game"),p=n(f),d=t("./ScoreBoard"),h=n(d),m=(0,l.add)(1),y=function(e){function t(e){o(this,t);var r=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={gameId:1,totalScore:0,gameLevel:{rows:5,columns:5,activeCellsCount:6}},r}return a(t,e),u(t,[{key:"playAgain",value:function(e){var t=(0,l.mapValues)("won"===e?m:l.identity);this.setState({gameId:m(this.state.gameId),gameLevel:t(this.state.gameLevel)})}},{key:"updateScore",value:function(e){this.setState({totalScore:this.state.totalScore+e})}},{key:"render",value:function(){return c["default"].createElement("div",{id:"content"},c["default"].createElement(h["default"],{score:this.state.totalScore}),c["default"].createElement(p["default"],{key:this.state.gameId,gameLevel:this.state.gameLevel,updateScore:this.updateScore.bind(this),playAgain:this.playAgain.bind(this)}))}}]),t}(c["default"].Component);e["default"]=y}),require.register("components/Cell.jsx",function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0});var u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=t("react"),c=n(s),l=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),u(t,[{key:"handleClick",value:function(){var e="recall"===this.props.gameState,t=void 0===this.guessState();e&&t&&this.props.recordGuess({cellId:this.props.id,userGuessIsCorrect:this.active()})}},{key:"active",value:function(){return this.props.activeCells.indexOf(this.props.id)>-1}},{key:"guessState",value:function(){var e=this.props.correctGuesses.indexOf(this.props.id)>-1,t=this.props.wrongGuesses.indexOf(this.props.id)>-1;return!!e||!t&&void 0}},{key:"render",value:function(){var e="cell";return this.props.showActiveCells&&this.active()&&(e+=" active"),e+=" guess-"+this.guessState(),c["default"].createElement("div",{className:e,onClick:this.handleClick.bind(this)})}}]),t}(c["default"].Component);e["default"]=l}),require.register("components/Footer.jsx",function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0});var u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=t("react"),c=n(s),l=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),u(t,[{key:"remainingCount",value:function(){var e=c["default"].createElement("div",{className:"remaining-count"},this.props.activeCellsCount-this.props.correctGuesses.length);if("recall"===this.props.gameState)return e}},{key:"playAgain",value:function(){var e=c["default"].createElement("div",null,c["default"].createElement("button",{onClick:this.props.playAgain.bind(this,this.props.gameState)},"Play Again"));if(["won","lost"].indexOf(this.props.gameState)>-1)return e}},{key:"render",value:function(){return c["default"].createElement("div",{className:"footer"},c["default"].createElement("div",{className:"hint"},this.props.hints[this.props.gameState]),this.remainingCount(),this.playAgain())}}]),t}(c["default"].Component);l.defaultProps={hints:{ready:"Get Ready",memorize:"Memorize",recall:"Recall",won:"Well Played",lost:"Game Over"}},e["default"]=l}),require.register("components/Game.jsx",function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0});var u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=t("react"),c=n(s),l=t("lodash"),f=t("./Cell"),p=n(f),d=t("./Row"),h=n(d),m=t("./Footer"),y=n(m),v=function(e){function t(e){o(this,t);var r=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),n=e.gameLevel,a=n.rows,u=n.columns,s=n.activeCellsCount;return r.matrix=(0,l.range)(a).map(function(e){return(0,l.range)(u).map(function(t){return""+e+t})}),r.activeCells=(0,l.sampleSize)((0,l.flatten)(r.matrix),s),r.state={gameState:"ready",correctGuesses:[],wrongGuesses:[]},r}return a(t,e),u(t,[{key:"componentDidMount",value:function(){var e=this;this.memorizeTimerId=setTimeout(function(){e.setState({gameState:"memorize"},function(){e.recallTimerId=setTimeout(e.startRecallMode.bind(e),2e3)})},2e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.memorizeTimerId),clearTimeout(this.recallTimerId),this.finishGame()}},{key:"startRecallMode",value:function(){var e=this;this.setState({gameState:"recall"},function(){e.secondsRemaining=e.props.timeoutSeconds,e.playTimerId=setInterval(function(){0===--e.secondsRemaining&&e.setState({gameState:e.finishGame("lost")})},1e3)})}},{key:"finishGame",value:function(e){return clearInterval(this.playTimerId),e}},{key:"calculateScore",value:function(e){var t=void 0;t=0===e?3:1===e?2:1;var r=this.props.timeoutSeconds/2;return this.secondsRemaining>=r&&(t*=2),t}},{key:"recordGuess",value:function(e){var t=e.cellId,r=e.userGuessIsCorrect,n=this.state,o=n.correctGuesses,i=n.wrongGuesses,a=n.gameState;r?o.push(t):i.push(t),o.length===this.props.gameLevel.activeCellsCount&&(a=this.finishGame("won"),this.props.updateScore(this.calculateScore(i.length))),i.length>this.props.allowedWrongAttempts&&(a=this.finishGame("lost")),this.setState({correctGuesses:o,wrongGuesses:i,gameState:a})}},{key:"render",value:function(){var e=this,t=["memorize","lost"].indexOf(this.state.gameState)>-1;return c["default"].createElement("div",{className:"grid"},this.matrix.map(function(r,n){return c["default"].createElement(h["default"],{key:n},r.map(function(r){return c["default"].createElement(p["default"],{key:r,id:r,activeCells:e.activeCells,showActiveCells:t,recordGuess:e.recordGuess.bind(e),correctGuesses:e.state.correctGuesses,wrongGuesses:e.state.wrongGuesses,gameState:e.state.gameState})}))}),c["default"].createElement(y["default"],{gameState:this.state.gameState,playAgain:this.props.playAgain,correctGuesses:this.state.correctGuesses,activeCellsCount:this.props.gameLevel.activeCellsCount}))}}]),t}(c["default"].Component);v.defaultProps={allowedWrongAttempts:2,timeoutSeconds:10},e["default"]=v}),require.register("components/Row.jsx",function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0});var u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=t("react"),c=n(s),l=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),u(t,[{key:"render",value:function(){return c["default"].createElement("div",{className:"row"},this.props.children)}}]),t}(c["default"].Component);e["default"]=l}),require.register("components/ScoreBoard.jsx",function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0});var u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=t("react"),c=n(s),l=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),u(t,[{key:"render",value:function(){return c["default"].createElement("div",{className:"score-board"},"Points: ",this.props.score)}}]),t}(c["default"].Component);e["default"]=l}),require.register("initialize.js",function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var o=t("react-dom"),i=n(o),a=t("react"),u=n(a),s=t("components/App"),c=n(s);document.addEventListener("DOMContentLoaded",function(){i["default"].render(u["default"].createElement(c["default"],null),document.querySelector("#app"))})}),require.alias("buffer/index.js","buffer"),require.alias("process/browser.js","process"),e=require("process"),require.register("___globals___",function(e,t,r){})}(),require("___globals___");