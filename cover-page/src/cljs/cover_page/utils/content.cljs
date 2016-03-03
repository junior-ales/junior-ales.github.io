(ns cover-page.utils.content
  (:require [reagent.core :as r]))

(defonce lang (r/atom :en-us))

(def content
  {:pt-br {:title-description "consultor de desenvolvimento"
           :lang-button "English?"
           :sections-summary-title "Apresentação"
           :sections-summary-subtitle "uma pequena descrição sobre mim"
           :sections-summary-desc "Um consultor de desenvolvimento de software resolvendo problemas de pessoas com código e ideias. Encontre aqui todo o conteúdo que produzo na web e as maneiras de me contactar. Você gosta de tecnologia, desenvolvimento de software, jiu jitsu brasileiro ou fotografia? Vamos conversar."
           :details-button "ver mais"}
   :en-us {:title-description "consultant developer"
           :lang-button "Português?"
           :sections-summary-title "Summary"
           :sections-summary-subtitle "brief description about me"
           :sections-summary-desc "A consultant of software development solving people's problems with code and ideas. Find here all the content I produce in the web and the ways to contact me. Do you like technology, software development, brazilian jiu jitsu or photography? Let's talk."
           :details-button "view more"}})

(defn label [id]
  (id (@lang content)))

(defn toggle-lang []
  (if (= @lang :en-us)
    (reset! lang :pt-br)
    (reset! lang :en-us)))
