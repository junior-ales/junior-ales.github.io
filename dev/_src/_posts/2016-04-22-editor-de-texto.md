---
layout: post
title:  "Editor de Texto"
subtitle:  "O seu canivete suíço"
date:   2016-04-22 12:04:43
---

> Essa postagem é parte de uma série chamada ["6 Coisas Que Todo Mundo Que Trabalha Com Software Precisa Saber"](/dev/2016/04/18/6-coisas-todos-devem-saber.html) que aborda pontos cruciais da nossa carreira e ramo de atividade.

Esse é um tema que aflora as emoções das pessoas. Você facilmente acha discussões intermináveis na internet comparando VIM, Emacs, Sublime, Atom, Notepad++ e outros.

Porém, há algo nessas discussões que deve ser dita a quem está lendo. Não importa muito o que as pessoas ao seu redor falam sobre qual é o melhor editor de texto **para elas**. O fato é que na hora de escrever código, estarão seu computador e você frente a frente e se você não souber como usar seu editor, as opiniões de [Drew Neil](https://twitter.com/nelstrom) e [Tim Pope](https://twitter.com/tpope) sobre as maravilhas do VIM não vão ajudar muito.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">How do you spot a Vim user?<br><br>Oh, don’t worry, they’ll let you know.</p>&mdash; Harry Roberts (@csswizardry) <a href="https://twitter.com/csswizardry/status/481468881400528896">June 24, 2014</a></blockquote><br />
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Pessoalmente utilizo o VIM para tudo (inclusive para escrever esse texto) só o deixo de lado quando tenho que trabalhar com código Java. Mas e o que isso quer dizer? Quer dizer que o VIM supre as _minhas_ necessidades e entendo que com essa ferramenta alcanço um nível de produtividade muito bom de escrita, edição e busca de código. Só isso. Agora, a melhor pessoa para descobrir quais ferramentas irão suprir as suas necessidades é você.

Manipular código é a questão primária da nossa profissão e acredito que qualquer profissional de desenvolvimento de software deva ter uma ferramenta que esteja pronta para ser usada a qualquer momento. Quando estamos desenvolvendo um produto, nosso foco principal deve ser sobre regras de negócio cobertas, a qualidade do código e a forma de distribuição do produto, por exemplo. Mas se a entrega de software está sendo afetada porque não sabemos utilizar as ferramentas para escrevê-lo, temos um problema gigantesco em mãos.

Meu ponto principal com esse texto é o seguinte: domine pelo menos um editor de texto e uma IDE se sua linguagem de programação prover uma boa (Java e C# por exemplo). Dominar nesse contexto significa conhecer comandos básicos de edição, navegar com rapidez entre arquivos, fazer buscas facilmente, compilar e empacotar (se for o caso da sua linguagem) seu código, tudo na velocidade de um comando, sem ter que buscar numa lista de atalhos ou clicar com o mouse. Dominar o seu editor de texto é usar seus comandos da mesma maneira que você já usa comandos como o `Ctrl-C` para copiar. Você já tem decorado isso, nem pensa mais ao executar esse comando, ele simplesmente acontece.

Para isso, você terá que memorizar tais comandos e ter uma boa [digitação](/dev/2016/04/20/digitacao.html) é imprescindível. Se para cada comando de desfazer (`Ctrl+Z`) você precisar olhar para o seu teclado, um `Alt+F7` para fazer busca de ocorrências no IntelliJ será desastroso todas as vezes.

Force-se a usar os comandos no seu dia-a-dia, mesmo que no começo pareça contra intuitivo já que o mouse está bem ao seu lado. O que te fará ter sucesso nessa tarefa é exatamente o fato de usar a ferramenta, criando assim memória muscular. Por esse mesmo fato eu não recomendo o uso de sites como [_shortcutFoo_](https://www.shortcutfoo.com) e nenhum outro que te faça treinar uma ferramenta _fora da própria ferramenta_. Por exemplo, treinar comandos do VIM fora do VIM faz com que você tenha na ponta da língua a resposta para _"Como faço para apagar toda linha que começa com 'function Bla(foo)'?"_, mas entre saber a resposta e executar com velocidade no dia a dia há uma diferença extremamente grande.

Há muito material na internet sobre VIM, Emacs, Atom e Sublime e por isso essas são as minhas indicações de editores de texto para você aprender, mas especialmente indico os editores que também são encontrados em servidores unix. Se seu interesse é em aprender VIM não tenho muitas indicações em português, mas elas seriam o livro [_Practical VIM_](https://pragprog.com/book/dnvim/practical-vim) do [Drew Neil](https://twitter.com/nelstrom) e as séries de vídeos [_Vimcasts_](http://vimcasts.org) e [_Vim Tutorials_](http://derekwyatt.org/vim/tutorials/index.html), de autoria do mesmo Drew Neil e do [Derek Wyatt](https://twitter.com/derekwyatt) respectivamente. Sempre há também o bom e velho _vimtutor_ que já está instalado junto com seu VIM, só bastando executar `vimtutor` na sua linha de comando e pronto, você já estará aprendendo a usar o editor.

Dominar uma ferramenta leva tempo, paciência e esforço. Por isso o que eu disse na [introdução dessa série](/dev/2016/04/18/6-coisas-todos-devem-saber.html) se aplica muito nesse caso: para quem está começando é importante ter determinação e para quem já passou por isso, é importante ter empatia e dar o suporte necessário às pessoas que estão começando a trilhar esse caminho.

Na próxima postagem dessa série falarei sobre ter uma postura de [aprendizagem constante](#) na nossa carreira e tomar atitudes nessa linha como um padrão profissional.
