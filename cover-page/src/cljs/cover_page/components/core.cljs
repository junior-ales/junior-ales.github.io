(ns cover-page.components.core
  (:require [cover-page.utils.content :refer [label]]))

(defn cover-title []
  [:section.title-section
   [:h1.title "junior ales"]
   [:p.description (label :title-description)]])

(defn details-button []
  [:div.expand-wrapper
   [:button.button (label :details-button)]])
