(ns cover-page.utils.content
  (:require [reagent.core :as r]))

(defonce lang (r/atom :en-us))

(def content
  {:pt-br {:title-description "consultor de desenvolvimento"
           :lang-button "English?"

           :sections-summary-title "Apresentação"
           :sections-summary-subtitle "uma pequena descrição sobre mim"
           :sections-summary-desc "Um consultor de desenvolvimento de software resolvendo problemas de pessoas com código e ideias. Encontre aqui todo o conteúdo que produzo na web e as maneiras de me contactar. Você gosta de tecnologia, desenvolvimento de software, jiu jitsu brasileiro ou fotografia? Vamos conversar."
           :sections-summary-avatar-alt "Retrato de Junior Ales"

           :sections-photoblog-title "Blog de Fotos"
           :sections-photoblog-subtitle "fotografia, blog, inspiração"
           :sections-photoblog-desc "Gosto de pensar a fotografia além de equipamentos, técnicas e cores. O que mais me intriga é a história por trás das lentes. Acredito que fotografar seja sobre a maneira única que as pessoas veem e sentem o mundo em sua volta naquele instante. Esse blog é a maneira que encontrei de contar minhas histórias."
           :sections-photoblog-avatar-alt "Ícone do meu blog de fotos"

           :sections-twitter-title "Twitter"
           :sections-twitter-subtitle "desenvolvimento de software, TI, assuntos variados"
           :sections-twitter-desc "Meu twitter é com certeza o jeito mais fácil de me contactar. É aonde eu compartilho na maioria das vezes conteúdo sobre tecnologia e desenvolvimento de software, focando em coisas que me impressionaram e que eu acredito que possam ajudar outras pessoas de alguma maneira. Como ele é um microblog, algumas vezes eu compartilho conteúdo não relacionado a tecnologia, mas sim sobre coisas de interesse pessoal como esportes e política."
           :sections-twitter-avatar-alt "Ícone do twitter"

           :sections-medium-title "Blog Pessoal"
           :sections-medium-subtitle "política, sociedade, Brasil"
           :sections-medium-desc "Nesse blog eu geralmente escrevo sobre minha visão sobre o mundo e a sociedade brasileira. Política é um assunto o qual eu me interesso muito e escrever sobre isso faz com que eu entenda melhor o que acredito, buscando incentivar o diálogo com pessoas de opiniões diferentes e assim me fazendo aprender mais e mais. Devido a natureza do conteúdo, todos os posts são em português."
           :sections-medium-avatar-alt "Ícone do medium"

           :back "voltar"
           :view-more "ver mais"}

   :en-us {:title-description "consultant developer"
           :lang-button "Português?"

           :sections-summary-title "Summary"
           :sections-summary-subtitle "brief description about me"
           :sections-summary-desc "A consultant of software development solving people's problems with code and ideas. Find here all the content I produce in the web and the ways to contact me. Do you like technology, software development, brazilian jiu jitsu or photography? Let's talk."
           :sections-summary-avatar-alt "Junior Ales' portrait"

           :sections-photoblog-title "Photo Blog"
           :sections-photoblog-subtitle "photography, blog, inspiration"
           :sections-photoblog-desc "I like to think of photography beyond techniques, colors, focus, depth and patterns. I'm fascinated about the story behind the lens. It's all about the unique way people see and feel the world around them in that given moment. This blog is a way of telling my stories to everyone. The content of the blog is (for now) only in portuguese, but I believe non portuguese speakers will be able to understand my ideas through my photos."
           :sections-photoblog-avatar-alt "Icon of my photo blog"

           :sections-twitter-title "Twitter"
           :sections-twitter-subtitle "software dev, IT, random stuff"
           :sections-twitter-desc "My twitter account is for sure the easiest way to contact me. It's the place where I share mostly technology and software development content, focusing on things that impressed me and I think can help other people in some way. As it's a personal microblog sometimes I share content not related to technology at all, instead things of personal interest like sports and politics."
           :sections-twitter-avatar-alt "Icon of twitter"

           :sections-medium-title "Personal Blog"
           :sections-medium-subtitle "politics, society, Brazil"
           :sections-medium-desc "In this blog I usually write about my view of the world and the Brazilian society. Politics is a subject I really like and writing about it makes me understand better my beliefs, trying to foster the dialogue with people with different views and thus making me learn more and more. Due the nature of the content, all the posts are in portuguese."
           :sections-medium-avatar-alt "Icon of medium"

           :back "back"
           :view-more "view more"}})

(defn label [id]
  (id (@lang content)))

(defn toggle-lang []
  (if (= @lang :en-us)
    (reset! lang :pt-br)
    (reset! lang :en-us)))
