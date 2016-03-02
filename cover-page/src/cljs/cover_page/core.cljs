(ns cover-page.core
  (:require [reagent.core :as r]))

(enable-console-print!)

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

(def link-props
  [{:key 1 :target "_blank" :href "http://www.juniorales.com/photo" :icon-class "fa-camera"}
   {:key 2 :target "_blank" :href "https://twitter.com/junior_ales" :icon-class "fa-twitter"}
   {:key 3 :target "_blank" :href "https://medium.com/@junior_ales" :icon-class "fa-medium"}
   {:key 4 :target "_blank" :href "https://github.com/junior-ales" :icon-class "fa-github-alt"}
   {:key 5 :target "_top" :href "#" :icon-class "fa-envelope"}])

(defn contact-link [props]
  (let [default-classes "fa fa-stack-1x contacticon "]
    [:a.fa-stack.contactlink props
     [:i.fa.fa-square.fa-stack-2x]
     [:i {:class (apply str default-classes (:icon-class props))}]]))

(defn contact-links []
  [:section.contact-links
   (map contact-link link-props)
   [:p
    [:button.toggle-lang
     {:on-click toggle-lang}
     (label :lang-button)]]])

(defn cover-title []
  [:section.title-section
   [:h1.title "junior ales"]
   [:p.description (label :title-description)]])

(defn details-button []
  [:div.expand-wrapper
   [:button.button (label :details-button)]])

(defn page []
  [:section
   [contact-links]
   [cover-title]
   [details-button]])

(defn ^:export init []
  (when (and js/document
             (aget js/document "getElementById"))
    (r/render-component [page]
                        (js/document.querySelector "#app"))))

;; TODO
;; - [DONE] bring all static html from the existing page
;; - [DONE] creates the header dinamically
;; - [DONE] bind the event to the 'view more' button
;; - [DONE] make the 'view more' button visible
;; - [DONE] use SASS rather than CSS
;; - [DONE] creates content in two languages using reagent atom
;; - creates the sections of content dinamically
;; - use the prod version of cljs build
