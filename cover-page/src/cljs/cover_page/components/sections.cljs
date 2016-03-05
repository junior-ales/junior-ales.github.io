(ns cover-page.components.sections
  (:require [cover-page.utils.content :refer [label]]))

(defn summary []
   [:article.summary-section
    [:header.section-header
     [:h1.title (label :sections-summary-title)]
     [:p.subtitle (label :sections-summary-subtitle)]]
    [:section.section-description
     [:p.description (label :sections-summary-desc)]
     [:p.avatar-wrapper
      [:img.avatar {:src "images/avatar.jpg"
                    :alt (label :sections-summary-avatar-alt)}]]]])

(defn photoblog-section []
  [:article.photoblog-section
   [:header.section-header
    [:h1.title (label :sections-photoblog-title)]
    [:p.subtitle (label :sections-photoblog-subtitle)]]
   [:section.section-description
    [:p.description (label :sections-photoblog-desc)]
    [:p.avatar-wrapper
     [:a.avatar-link {:target "_blank"
                      :href "http://www.juniorales.com/photo"}
      [:img.avatar {:src "images/photo-blog-icon.jpg"
                    :alt (label :sections-photoblog-avatar-alt)}]
      [:span "juniorales.com/photo"]]]]])

(defn sections []
  [:section.sections-container.hidden
   {:data-appear-order 2}
   [summary]
   [photoblog-section]])

