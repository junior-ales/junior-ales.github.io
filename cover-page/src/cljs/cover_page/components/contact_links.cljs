(ns cover-page.components.contact-links
  (:require [cover-page.utils.content :refer [label toggle-lang]]))

(def link-props
  [{:key 1 :target "_blank" :href "http://www.juniorales.com/photo" :icon-class "fa-camera"}
   {:key 2 :target "_blank" :href "https://twitter.com/junior_ales" :icon-class "fa-twitter"}
   {:key 3 :target "_blank" :href "https://medium.com/@junior_ales" :icon-class "fa-medium"}
   {:key 4 :target "_blank" :href "https://github.com/junior-ales" :icon-class "fa-github-alt"}
   {:key 5 :target "_top" :href "#" :icon-class "fa-envelope" :class "hidden"}])

(defn contact-link [props]
  (let [default-classes "fa fa-stack-1x icon "]
    [:a.fa-stack.link props
     [:i.fa.fa-square.fa-stack-2x]
     [:i {:class (apply str default-classes (:icon-class props))}]]))

(defn toogle-lang-button []
  [:p
   [:button.toggle-lang
    {:on-click toggle-lang}
    (label :lang-button)]])

(defn contact-links []
  [:section.contact-links {:data-appear-order 1}
   (map contact-link link-props)
   [toogle-lang-button]])

