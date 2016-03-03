(ns cover-page.components.sections
  (:require [cover-page.utils.content :refer [label]]))

(defn sections []
  [:section.sections-container
   [:article.summary-section
    [:header.section-header
     [:h1.title (label :sections-summary-title)]
     [:p.subtitle (label :sections-summary-subtitle)]]
    [:section.section-description
     [:p.description (label :sections-summary-desc)]
     [:p.avatar-wrapper
      [:img.avatar {:src "images/avatar.jpg" :alt "Junior Ales' avatar"}]]]]])

