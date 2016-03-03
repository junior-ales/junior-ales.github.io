(ns cover-page.utils.content
  (:require [reagent.core :as r]))

(defonce lang (r/atom :en-us))

(def content
  {:pt-br {:title-description "consultor de desenvolvimento"
           :lang-button "English?"
           :details-button "ver mais"}
   :en-us {:title-description "consultant developer"
           :lang-button "Português?"
           :details-button "view more"}})

(defn label [id]
  (id (@lang content)))

(defn toggle-lang []
  (if (= @lang :en-us)
    (reset! lang :pt-br)
    (reset! lang :en-us)))
