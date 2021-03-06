(ns cover-page.core
  (:require [reagent.core :refer [render-component]]
            [cover-page.utils.tracker :refer [track]]
            [cover-page.components.core :as c]
            [cover-page.components.sections :refer [sections]]
            [cover-page.components.contact-links :refer [contact-links]]))

(defn page []
  [:section
   [contact-links]
   [c/cover-title]
   [c/show-sections-button]
   [c/hide-sections-button]
   [sections]])

(defn ^:export init []
  (when (and js/document
             (aget js/document "getElementById"))
    (track "coverpage:visit")
    (render-component [page]
                      (js/document.querySelector "#app"))))

;; TODO
;; - [DONE] bring all static html from the existing page
;; - [DONE] creates the header dinamically
;; - [DONE] bind the event to the 'view more' button
;; - [DONE] make the 'view more' button visible
;; - [DONE] use SASS rather than CSS
;; - [DONE] creates content in two languages using reagent atom
;; - [DONE] creates the sections of content dinamically
;; - [DONE] add all static files (keybase.txt, robots.txt...)
;; - [DONE] tracking with analytics
;; - [DONE] tracking with mixpanel
;; - [DONE] use the prod version of cljs build
;; - enable contact-me
;; - alert when sending email
;; - fix 404
