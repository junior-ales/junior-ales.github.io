(ns cover-page.core
  (:require [reagent.core :as r]
            [cover-page.components.core :as c]
            [cover-page.components.sections :refer [sections]]
            [cover-page.components.contact-links :refer [contact-links]]
            [cover-page.utils.content :refer [label]]))

(defn page []
  [:section
   [contact-links]
   [c/cover-title]
   [c/details-button]
   [sections]])

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
