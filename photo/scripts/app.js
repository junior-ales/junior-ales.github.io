!function(){"use strict";var e="undefined"==typeof window?global:window;if("function"!=typeof e.require){var t={},a={},o={}.hasOwnProperty,s={},r=function(e,t){var a=0;t&&(t.indexOf(!1)&&(a="components/".length),t.indexOf("/",a)>0&&(t=t.substring(a,t.indexOf("/",a))));var o=s[e+"/index.js"]||s[t+"/deps/"+e+"/index.js"];return o?"components/"+o.substring(0,o.length-".js".length):e},n=function(){var e=/^\.\.?(\/|$)/;return function(t,a){var o,s,r=[];o=(e.test(a)?t+"/"+a:a).split("/");for(var n=0,i=o.length;i>n;n++)s=o[n],".."===s?r.pop():"."!==s&&""!==s&&r.push(s);return r.join("/")}}(),i=function(e){return e.split("/").slice(0,-1).join("/")},c=function(t){return function(a){var o=n(i(t),a);return e.require(o,t)}},l=function(e,t){var o={id:e,exports:{}};return a[e]=o,t(o.exports,c(e),o),o.exports},m=function(e,s){var i=n(e,".");if(null==s&&(s="/"),i=r(e,s),o.call(a,i))return a[i].exports;if(o.call(t,i))return l(i,t[i]);var c=n(i,"./index");if(o.call(a,c))return a[c].exports;if(o.call(t,c))return l(c,t[c]);throw new Error('Cannot find module "'+e+'" from "'+s+'"')};m.alias=function(e,t){s[t]=e},m.register=m.define=function(e,a){if("object"==typeof e)for(var s in e)o.call(e,s)&&(t[s]=e[s]);else t[e]=a},m.list=function(){var e=[];for(var a in t)o.call(t,a)&&e.push(a);return e},m.brunch=!0,e.require=m}}(),require.register("model/post",function(e,t,a){"use strict";var o=t("./posts"),s=function(e,t){return t.slice().sort(function(t,a){return t[e]>a[e]?1:t[e]<a[e]?-1:0})},r=function(e){return{"most-viewed":s("viewsRanking",e),latest:s("pubdate",e).reverse()}};a.exports={current:function(e){return{sortBy:function(t){return r(e)[t]}}},getAllSortedBy:function(e){return r(o)[e]},getByName:function(e){return o.filter(function(t){return t.name===e})[0]}}}),require.register("model/posts",function(e,t,a){"use strict";var o=function(e){var t=new Date(e);return t.setTime(t.getTime()+60*t.getTimezoneOffset()*1e3),t};a.exports=[{id:0,name:"o-almoco-e-a-baia",title:"O Almoço e a baía",dir:"posts/2015/10/07/",htmlContent:"<p>      São Francisco é uma cidade realmente impressionante. É uma amostra do que o trabalho humano       <span class='post-content__text--strike'>e a exploração do mesmo muitas vezes</span> pode fazer em vários aspectos.       A quantidade e a beleza de prédios, pontes e estradas dão uma ideia do que nós somos capazes de construir.       </p><p>       Talvez o cartão postal mais famoso da cidade seja a ponte       <a class='post-content__link' target='_blank' href='https://pt.wikipedia.org/wiki/Ponte_Golden_Gate'><i>Golden Gate</i></a>.       Muitas pessoas a conhece, seja ao vivo, por fotos ou por tê-la visto em algum filme americano. Mas o que muitas       pessoas não sabem é que a <i>Golden Gate</i> tem uma ponte irmã, a       <a class='post-content__link' target='_blank' href='https://pt.wikipedia.org/wiki/Ponte_S%C3%A3o_Francisco%E2%80%93Oakland_Bay'><i>Bay Bridge</i></a>.       Comparando as duas pontes, a <i>Bay Bridge</i> é um pouco mais velha, foi inaugurada cerca de 6 meses antes da irmã. Ela além de       mais velha também é maior, mais do que o dobro da extensão da outra e pode ser vista como plano de fundo da foto dessa postagem.      </p><p>       Mas não são só de concreto e aço as maiores construções dessa cidade. São Francisco é a referência do desenvolvimento       de software estadounidense, quiçá do mundo e exatamente por isso essa foto foi possível.       </p><p>       Como consultor de desenvolvimento de software, fui até São Francisco começar um projeto com um cliente de longa       data da empresa para qual trabalho. Por conta desse relacionamento longo, muitos outros colegas de trabalho       também visitaram a cidade e por isso não era raro ver pessoas do escritório publicando fotos nas redes sociais       com a <i>Bay Bridge</i> como plano de fundo. Na verdade era como uma tradição para todos que visitavam a cidade:       vá a São Francisco, espere um dia de sol e faça pose para uma foto com a <i>Bay Bridge</i> ao fundo.      </p><p>       Obviamente eu também segui essa tradição e tenho minha foto com a ponte. Porém, a construção é tão imponente,       tão desafiadora, que eu senti quase que a necessidade de retratá-la de uma forma diferente e foram nos intervalos de       trabalho para o almoço que eu encontrei o que queria.       </p><p>       Para quem, assim como eu, visita São Francisco, a vista que essa varanda tem da ponte é hipnotizante.       É quase impossível não parar por um momento para admirá-la. Porém, percebi que pessoas que conviviam com       essa vista todos os dias, deixavam-la passar desapercebida. Toda a magia e imponência       da construção se reduzia a nada e ter aquela obra gigantesca como plano de fundo dos almoços se tornava algo normal.      </p><p>       Nessa fotografia tentei registrar esse sentimento. Parecia que para quem se acostumou com a ponte, ter aquela vista todos       os dias ou não era indiferente, o que para mim deixou uma lição muito grande a respeito da rotina e como lidar com ela.      </p><p>       Independentemente de quão grandioso, de quanto suor, sangue e lágrimas se gaste para realizar algo,       o tempo e a rotina vão tornar esse feito normal. Invariavelmente ele irá se tornar corriqueiro, de valor reduzido.       Todavia, fica a nosso critério como vamos reagir a isso. Acredito que os engenheiros, arquitetos e       todos os trabalhadores que investiram muito tempo de vida construindo a <i>Bay Bridge</i> ficariam       aborrecidos com a indiferença que muitas pessoas tratam essa grande obra, mas quero acreditar que eles de alguma forma       já esperassem por isso e que tenham partido para uma próxima grande obra logo em seguida.       </p><p>       Querer desafiar o poder da rotina não me parece algo que valha o esforço, por isso se manter sempre à       procura da nossa próxima grande obra me parece a melhor maneira de lidar com os efeitos do tempo.    </p>",location:"São Francisco, EUA",pubdate:o("2015-10-07"),viewsRanking:2},{id:1,name:"uma-cor-que-grita",title:"Uma Cor que Grita",dir:"posts/2015/10/19/",htmlContent:"<p>      O vermelho é uma cor que não se esconde. Não há como expressar neutralidade ou indecisão com essa cor;       definitivamente a expressão 'em cima do muro' não cabe a ela e nem a nada que ela descreve. Mesmo assim       eu a escolhi para um projeto fotográfico. O desafio era conseguir cinco fotos que tivessem a cor escolhida       como personagem principal.       </p><p>      Vermelho. Logo de cara achei que seria fácil. Luz de freio, placa de pare, batom, catchup, sangue, esmalte... era       só escolher. No final de uma semana consegui entregar apenas duas fotos, sendo a foto dessa postagem uma delas.       A outra tinha um projeto muito bacana, mas a execução e o resultado não ficaram nem perto do que eu esperava.       Tirei um tempo pra tentar entender porque não consegui completar a tarefa. Cinco fotos e uma cor primária, o que       poderia dar errado?       </p><p>      Acontece que tudo que gira em torno do vermelho é, por natureza, complexo.       Vermelho é a cor do 'proibido', 'pare', 'não entre' e também do 'eu te amo'.       A cor da nobreza e a cor da luta popular. Da paixão que queima e da rosa que acalenta. Ela grita, não       sussurra. Ela não <i>dá a entender</i>, ela se <i>faz entender</i>. Ela é direta, faz questão de ser clara.       </p><p>      O projeto passou, o resultado não foi bom, mas me fez olhar para essa cor e o que ela caracteriza de uma outra       maneira. Hoje eu penso o vermelho como a cor da sinceridade, da verdade e me vejo querendo ser       <i>mais vermelho</i> na vida. Por isso, só agradeço quem me pôs a fazer o projeto que falhei em concluir.       Não vi a nota que recebi, mas provalemente ela foi vermelha.    </p>",location:"Porto Alegre, Brasil",pubdate:o("2015-10-19"),viewsRanking:3},{id:2,name:"flores-flutuantes",title:"Flores Flutuantes",dir:"posts/2015/10/17/",htmlContent:"<p>       Em frente um dos cartões postais mais famosos do mundo, um espelho d'água.       Flores parecem brotar dele, parecem estar soltas, dançando ao ritmo do vento na coluna d'água.       Centenas de pessoas tirando e posando para fotos nesse mesmo lugar que eu estava, porém,       a direção de suas câmeras era diferente da direção da minha.      </p><p>       O que chamava a atenção de tanta gente para o lado oposto era o letreiro gigante com os dizeres       <a class='post-content__link' href='https://www.google.com/search?q=iamsterdam&es_sm=119&source=lnms&tbm=isch&sa=X&biw=1280&bih=702' target='_blank'>       'I AMSTERDAM'</a> bem em frente ao <i>Rijksmuseum</i>.       Não que o letreiro não me encantasse, é bem bonito realmente, mas as cores vivas e quentes das flores       nesse espelho d'água quase que gritavam por um pouco de atenção naquele dia frio e de vento cortante.       Não pude resistir ao chamado delas e o que acabou acontecendo foi que não tenho nenhuma foto na frente do tal letreiro.       </p><p>       Fui embora dali, fiquei mais uns dias na cidade, mas fotografar as belas paisagens de Amsterdã       ficou um pouco mais difícil depois dessa foto. Nada conseguia trazer de novo esse sentimento de 'belo ignorado'       que essas flores me fizeram sentir.       </p>",location:"Amsterdã, Holanda",pubdate:o("2015-10-17"),viewsRanking:1}]}),require.register("model/tracker",function(e,t,a){"use strict";function o(e){var t=function(t){e.track(t)},a=function(e){var t=this;return{as:function(a){e.onclick=function(){t.track(a)}}}};return{track:t,trackElem:a,trackElems:function(e){var t=this;return{as:function(a){return Array.prototype.map.call(e,function(e){t.trackElem(e).as(a)}),{andIds:function(){Array.prototype.map.call(e,function(e){t.trackElem(e).as(a+e.dataset.trackIdentifier)})}}}}}}}a.exports=o}),require.register("views/components/postComponent",function(e,t,a){"use strict";var o=React.createClass({displayName:"Post",detailedLayout:function(e){var t=moment(e.pubdate.toString());return React.createElement("a",{className:"post-wrapper--cropped",href:e.dir+e.name+".html"},React.createElement("div",{className:"small-column"},React.createElement("img",{className:"post__cover--cropped",src:e.dir+e.name+"--cropped.jpg",alt:e.title+" foto"})),React.createElement("div",{className:"large-column"},React.createElement("h2",{className:"post__title--cropped"},e.title),React.createElement("time",{dateTime:t.format()},t.format("DD/MMM/YYYY")),React.createElement("p",null,e.location)))},defaultLayout:function(e){var t=moment(e.pubdate.toString());return React.createElement("a",{className:"post-wrapper",href:e.dir+e.name+".html"},React.createElement("img",{className:"post__cover",srcSet:e.dir+e.name+"--large.jpg 1920w, "+e.dir+e.name+"--medium.jpg 1280w, "+e.dir+e.name+"--small.jpg 640w",sizes:"(max-width: 1075px) 490px, 930px",src:e.dir+e.name+"--medium.jpg",alt:e.title+" foto"}),React.createElement("p",{className:"post__location"},e.location),React.createElement("p",{className:"post__pubdate"},React.createElement("time",{className:"post_pubdate__time",dateTime:t.format()},React.createElement("span",{className:"post__pubdate__month"},t.format("MMM")),React.createElement("br",null),React.createElement("span",{className:"post__pubdate__day"},t.format("DD")))),React.createElement("h1",{className:"post__title"},e.title))},getDefaultProps:function(){return{layout:"default"}},render:function(){moment.locale("pt-BR");var e=this.props.post;return this.props.pathNormalizer&&(e.dir="../../../../".concat(e.dir)),React.createElement("article",{className:"post"},"detailed"===this.props.layout?this.detailedLayout(e):this.defaultLayout(e))}});a.exports=o}),require.register("views/components/postList",function(e,t,a){"use strict";var o=t("./postComponent"),s=React.createClass({displayName:"PostList",getInitialState:function(){return{posts:this.props.posts}},render:function(){var e=this,t=function(t){return React.createElement(o,{post:t,key:t.title+"-"+t.id,pathNormalizer:e.props.pathNormalizer,layout:e.props.postLayout})};return React.createElement("section",{className:"post-list-wrapper"},React.createElement("h2",{className:"sub-header"},React.createElement("span",null,this.props.listTitle)),this.props.posts.map(t))}});a.exports=s}),require.register("views/indexView",function(e,t,a){"use strict";var o=t("model/post"),s=t("./components/postList"),r=t("model/tracker"),n=3,i=React.createClass({displayName:"SortingOptions",handleClick:function(e){this.props.onSortingChange(e.target.dataset.sortingOption)},render:function(){var e="post-list__sorting",t="post-list__sorting";return"latest"===this.props.sortBy?e="post-list__sorting--active":t="post-list__sorting--active",React.createElement("ul",{className:"post-list"},React.createElement("li",{className:t},React.createElement("button",{onClick:this.handleClick,className:"post-list__button","data-track-identifier":"sort:most-viewed","data-sorting-option":"most-viewed"},"mais vistas")),React.createElement("li",{className:"post-list__sorting--separator"},"|"),React.createElement("li",{className:e},React.createElement("button",{onClick:this.handleClick,className:"post-list__button","data-track-identifier":"sort:latest","data-sorting-option":"latest"},"últimas")))}}),c=React.createClass({displayName:"LoadMorePosts",handleClick:function(){},render:function(){return React.createElement("div",{className:"load-more-posts disabled"},React.createElement("button",{title:"Não há mais posts para carregar",className:"load-more-posts__button disabled",onClick:this.handleClick,"data-track-identifier":"load-more"},"carregar mais fotos"))}}),l=React.createClass({displayName:"PostsContainer",getInitialState:function(){var e=o.getAllSortedBy("latest"),t=e.length<n?e.length:n;return{sortBy:"latest",postsLoaded:t,allPostsLoaded:!1,posts:e.slice(0,t)}},handleSortingChange:function(e){this.setState({sortBy:e,posts:o.getAllSortedBy(e).slice(0,this.state.postsLoaded)})},handleLoadMorePosts:function(){if(!this.state.allPostsLoaded){var e,t,a=o.getAllSortedBy(this.state.sortBy);a.length>=this.state.postsLoaded+n?(e=this.state.postsLoaded+n,t=!1):(e=a.length,t=!0),this.setState({postsLoaded:e,posts:o.getAllSortedBy(this.state.sortBy).slice(0,e),allPostsLoaded:t})}},render:function(){var e=this.state.allPostsLoaded?null:React.createElement(c,{onLoadMoreClick:this.handleLoadMorePosts});return React.createElement("section",{className:"posts-container"},React.createElement(i,{sortBy:this.state.sortBy,onSortingChange:this.handleSortingChange}),React.createElement(s,{listTitle:"últimas fotos",posts:this.state.posts}),e)}}),m=React.createClass({displayName:"MostViewedPosts",shouldLoadMostViewedPosts:function(){return window.innerWidth>1075},getInitialState:function(){return{visible:this.shouldLoadMostViewedPosts()}},handleResize:function(e){this.setState({visible:this.shouldLoadMostViewedPosts()})},componentDidMount:function(){window.addEventListener("resize",this.handleResize)},componentWillUnmount:function(){window.removeEventListener("resize",this.handleResize)},render:function(){return this.state.visible?React.createElement(s,{listTitle:"fotos mais vistas",postLayout:"detailed",posts:o.getAllSortedBy("most-viewed").slice(0,3)}):null}}),d={trackEvents:function(e){e.track("photoblog:home:visit"),function(){var t=document.querySelectorAll("*[data-track-identifier]");e.trackElems(t).as("photoblog:home:").andIds()}(),function(){var t=document.querySelectorAll("#home-page-posts .post-wrapper");e.trackElems(t).as("photoblog:home:main-list:post")}(),function(){var t=document.querySelectorAll("#most-viewed-posts .post-wrapper");e.trackElems(t).as("photoblog:home:aside-list:most-viewed:post")}()},init:function(){React.render(React.createElement(l,null),document.getElementById("home-page-posts")),React.render(React.createElement(m,null),document.getElementById("most-viewed-posts")),this.trackEvents(new r(window.mixpanel))}};a.exports=d}),require.register("views/postView",function(e,t,a){"use strict";var o=t("model/post"),s=t("./components/postList"),r=t("model/tracker"),n=function(){var e=location.pathname,t=e.lastIndexOf("/")+1;return e.substring(t).split(".")[0]}(),i=React.createClass({displayName:"PostContent",getDateFormat:function(){return window.innerWidth>650?"LL":"DD/MMM/YYYY"},getInitialState:function(){return{dateFormat:this.getDateFormat()}},handleResize:function(e){this.setState({dateFormat:this.getDateFormat()})},componentDidMount:function(){window.addEventListener("resize",this.handleResize)},componentWillUnmount:function(){window.removeEventListener("resize",this.handleResize)},render:function(){var e=this.props.post;moment.locale("pt-BR");var t=function(){return{__html:e.htmlContent}};return React.createElement("div",{className:"post-content"},React.createElement("header",{className:"post-content__header"},React.createElement("h2",null,e.title),React.createElement("span",{className:"post-content__detail"},e.location,React.createElement("time",{dateTime:e.pubdate.toString()},moment(e.pubdate.toString()).format(this.state.dateFormat)))),React.createElement("img",{className:"post-content__image",srcSet:e.name+"--large.jpg 1920w, "+e.name+"--medium.jpg 1280w, "+e.name+"--small.jpg 640w",src:e.name+"--medium.jpg",alt:e.title+" photo"}),React.createElement("p",{className:"post-content__copyright"},'"',React.createElement("a",{href:e.name+"--medium.jpg"},e.title),'" por ',React.createElement("a",{href:"http://www.juniorales.com"},"Junior Ales")," /",React.createElement("a",{href:"http://creativecommons.org/licenses/by-sa/4.0/deed.pt_BR"}," CC BY-SA 4.0")),React.createElement("section",{className:"post-content__text",dangerouslySetInnerHTML:t()}))}}),c=React.createClass({displayName:"MorePosts",loadedPostsState:function(){var e=function(e){return e.name!==n};return{posts:o.getAllSortedBy("most-viewed").slice(0,3).filter(e),listTitle:"fotos mais vistas"}},getInitialState:function(){return this.props.autoLoad?this.loadedPostsState():{posts:[],listTitle:""}},handleClick:function(){this.setState(this.loadedPostsState())},render:function(){var e=0!==this.state.posts.length,t=React.createElement("button",{className:"more-photos__button","data-track-identifier":"load-more",onClick:this.handleClick},"mais fotos"),a=React.createElement(s,{pathNormalizer:!0,listTitle:this.state.listTitle,posts:this.state.posts});return React.createElement("div",{className:"more-photos"},e?null:t,e?a:null)}}),l=React.createClass({displayName:"PostView",render:function(){var e=window.innerWidth>1075;return React.createElement("div",null,React.createElement(i,{post:o.getByName(n)}),React.createElement(c,{autoLoad:e}))}});a.exports={trackEvents:function(e){e.track("photoblog:post:visit"),function(){var t=document.querySelectorAll("*[data-track-identifier]");e.trackElems(t).as("photoblog:post:").andIds()}(),function(){var t=document.querySelectorAll(".more-photos .post-wrapper");e.trackElems(t).as("photoblog:post:most-viewed:post")}()},init:function(){React.render(React.createElement(l,null),document.getElementById("post-container")),this.trackEvents(new r(window.mixpanel))}}});