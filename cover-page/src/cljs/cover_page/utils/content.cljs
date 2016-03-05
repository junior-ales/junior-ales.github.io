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
           :back "back"
           :view-more "view more"}})

(defn label [id]
  (id (@lang content)))

(defn toggle-lang []
  (if (= @lang :en-us)
    (reset! lang :pt-br)
    (reset! lang :en-us)))
