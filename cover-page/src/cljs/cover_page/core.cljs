(ns cover-page.core
  (:require [reagent.core :as r]))

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
  [:section.contact-links (map contact-link link-props)])

(defn cover-title []
  [:section.title-section
   [:h1.title "junior ales"]
   [:p.description "consultant developer"]])

(defn details-button []
  [:div.expand-wrapper
   [:button.button "view more"]])

(defn page []
  [:section [contact-links] [cover-title] [details-button]])

(defn ^:export init []
  (when (and js/document
             (aget js/document "getElementById"))
    (r/render-component [page]
                        (js/document.querySelector "#app"))))

;; TODO
;; - [DONE] bring all static html from the existing page
;; - [DONE] creates the header dinamically
;; - creates the sections of content dinamically
;; - [DONE] bind the event to the 'view more' button
;; - [DONE] make the 'view more' button visible
;; - use the prod version of cljs build
