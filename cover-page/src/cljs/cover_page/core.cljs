(ns cover-page.core
  (:require [domina.core :refer [append! by-id]]
            [hiccups.runtime])
  (:require-macros [hiccups.core :refer [html]]))

(defn titlelify []
  (append! (by-id "content")
           (html [:p.title "JUNIOR ALES"])))

(defn ^:export init []
  (when (and js/document
             (aget js/document "getElementById"))))

;; TODO
;; - [DONE] bring all static html from the existing page
;; - creates the header dinamically
;; - creates the sections of content dinamically
;; - bind the event to the 'view more' button
;; - make the 'view more' button visible
;; - use the prod version of cljs build
