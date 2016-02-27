(ns cover-page.core
  (:require [domina.core :refer [append! add-class! by-id by-class]]
            [domina.events :refer [listen!]]))

(enable-console-print!)

(defn expand-content []
  (println "bla"))

(defn bind-listeners []
  (listen! (by-id "expand-content") :click expand-content))

(defn show-elems []
  (add-class! (by-class "expand-wrapper") "visible"))

(defn ^:export init []
  (when (and js/document
             (aget js/document "getElementById"))
    (bind-listeners) (show-elems)))

;; TODO
;; - [DONE] bring all static html from the existing page
;; - creates the header dinamically
;; - creates the sections of content dinamically
;; - [DONE] bind the event to the 'view more' button
;; - [DONE] make the 'view more' button visible
;; - use the prod version of cljs build
