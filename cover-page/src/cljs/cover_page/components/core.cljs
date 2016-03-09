(ns cover-page.components.core
  (:require [domina.css :refer [sel]]
            [domina.core :refer [add-class! remove-class!]]
            [cover-page.utils.content :refer [label]]))

(defn cover-title []
  [:section.title-section {:data-appear-order 1}
   [:h1.title "junior ales"]
   [:p.description (label :title-description)]])

(defn show-sections []
  (add-class! (sel "[data-appear-order=1]") "hidden")
  (remove-class! (sel "[data-appear-order=2]") "hidden")
  (remove-class! (sel ".hidden-once") "hidden-once"))

(defn show-sections-button []
  [:div.expand-wrapper {:data-appear-order 1}
   [:button.button
    {:on-click show-sections}
    (label :view-more)]])

(defn hide-sections []
  (add-class! (sel "[data-appear-order=2]") "hidden")
  (remove-class! (sel "[data-appear-order=1]") "hidden"))

(defn hide-sections-button []
  [:button.hide-sections-button.hidden
   {:data-appear-order 2
    :on-click hide-sections}
    (label :back)])
