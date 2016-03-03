(ns cover-page.components.sections
  (:require [cover-page.utils.content :refer [label]]))

(defn sections []
  [:section#content
   [:article.content-block.summary
    [:header.block-header
     [:h1 (label :sections-summary-title)]
     [:p (label :sections-summary-subtitle)]]
    [:section.block-description
     [:p.description (label :sections-summary-desc)]
     [:p.avatar
      [:img {:src "images/avatar.jpg" :alt "Junior Ales' avatar"}]]]]])

