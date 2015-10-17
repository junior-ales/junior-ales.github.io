"use strict";

var pubdate = function pubdate(dateString) {
  var date = new Date(dateString);
  date.setTime(date.getTime() + date.getTimezoneOffset()*60*1000);
  return date;
}

module.exports = [
  {
    "id": 0,
    "name": "o-almoco-e-a-baia",
    "title": "O Almoço e a baía",
    "dir": "posts/2015/05/22/",
    "htmlContent": "<p>Não é difícil ver alguém que bate no peito e diz com maior orgulho Bitters health goth cardigan, vinyl listicle street art letterpress gastropub meggings Vice sartorial cred. Fap Shoreditch lumbersexual semiotics deep v mlkshk. Ethical sartorial pour-over artisan, chia typewriter cronut messenger bag single-origin coffee mlkshk Brooklyn. Raw denim cold-pressed McSweeney\"s cardigan, blog put a bird on it meditation forage freegan bitters High Life dreamcatcher whatever. Swag asymmetrical cronut keffiyeh. Umami Odd Future Bushwick, pop-up artisan mustache paleo migas irony organic tote bag sartorial slow-carb. Direct trade retro chillwave sustainable street art, Vice sartorial.</p>",
    "location": "São Francisco, EUA",
    "pubdate": pubdate("2015-05-22"),
    "viewsRanking": 1
  },

  {
    "id": 1,
    "name": "origami-party",
    "title": "Origami Party",
    "dir": "posts/2015/04/13/",
    "htmlContent": "<p>Bitters health goth cardigan,</p> <p>vinyl listicle street art letterpress gastropub meggings Vice sartorial cred. Fap Shoreditch lumbersexual semiotics deep v mlkshk. Ethical sartorial pour-over artisan, chia typewriter cronut messenger bag single-origin coffee mlkshk Brooklyn. Raw denim cold-pressed McSweeney\"s cardigan, blog put a </p><p>bird on it meditation forage freegan bitters High Life dreamcatcher whatever. Swag asymmetrical cronut keffiyeh. Umami Odd Future Bushwick, pop-up artisan mustache paleo migas irony organic tote bag sartorial slow-carb. Direct trade retro chillwave sustainable street art, Vice sartorial.</p>",
    "location": "Pune, India",
    "pubdate": pubdate("2015-04-13"),
    "viewsRanking": 3
  },

  {
    "id": 2,
    "name": "flores-flutuantes",
    "title": "Flores Flutuantes",
    "dir": "posts/2015/10/17/",
    "htmlContent": "<p> \
      Em frente um dos cartões postais mais famosos do mundo, um espelho d'água. \
      Flores parecem brotar dele, parecem estar soltas, dançando ao ritmo do vento na coluna d'água. \
      Centenas de pessoas tirando e posando para fotos nesse mesmo lugar que eu estava, porém, \
      a direção de suas câmeras era diferente da direção da minha.\
      </p><p> \
      O que chamava a atenção de tanta gente para o lado oposto era o letreiro gigante com os dizeres \
      <a class='post-content__link' href='https://www.google.com/search?q=iamsterdam&es_sm=119&source=lnms&tbm=isch&sa=X&biw=1280&bih=702' target='_blank'> \
      'I AMSTERDAM'</a> bem em frente ao <i>Rijksmuseum</i>. \
      Não que o letreiro não me encantasse, é bem bonito realmente, mas as cores vivas e quentes das flores \
      nesse espelho d'água quase que gritavam por um pouco de atenção naquele dia frio e de vento cortante. \
      Não pude resistir ao chamado delas e o que acabou acontecendo foi que não tenho nenhuma foto na frente do tal letreiro. \
      </p><p> \
      Fui embora dali, fiquei mais uns dias na cidade, mas fotografar as belas paisagens de Amsterdã \
      ficou um pouco mais difícil depois dessa foto. Nada conseguia trazer de novo esse sentimento de 'belo ignorado' \
      que essas flores me fizeram sentir. \
      </p>",
    "location": "Amsterdã, Holanda",
    "pubdate": pubdate("2015-10-17"),
    "viewsRanking": 2
  }
];
