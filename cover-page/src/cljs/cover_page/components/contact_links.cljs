(ns cover-page.components.contact-links
  (:require [cover-page.components.contact-link :refer [contact-link]]
            [cover-page.utils.tracker :refer [track]]
            [cover-page.utils.content :refer [label toggle-lang]]))

(def link-props
  [{:key "header:photoblog" :href "http://www.juniorales.com/photo" :icon-class "fa-camera"}
   {:key "header:twitter" :href "https://twitter.com/junior_ales" :icon-class "fa-twitter"}
   {:key "header:medium" :href "https://medium.com/@junior_ales" :icon-class "fa-medium"}
   {:key "header:github" :href "https://github.com/junior-ales" :icon-class "fa-github-alt"}
   {:key "header:email" :href "#" :icon-class "fa-envelope" :target "_top" :class "hidden"}])


(defn toogle-lang-button []
  [:p
   [:button.toggle-lang
    {:on-click #(do
                  (track "coverpage:toggle-lang")
                  (toggle-lang))}
    (label :lang-button)]])

(defn contact-links []
  [:section.contact-links {:data-appear-order 1}
   (map contact-link link-props)
   [toogle-lang-button]])

