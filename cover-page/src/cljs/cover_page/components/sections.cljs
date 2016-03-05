(ns cover-page.components.sections
  (:require [cover-page.utils.content :refer [label]]))

(def section-props
  [{:key 12 :name "photoblog" :href "http://www.juniorales.com/photo"}
   {:key 13 :name "twitter" :href "http://www.twitter.com/junior_ales"}])

(defn avatar [])
(defn link-avatar [])

(defn section [props]
  (let [avatar-path (str "images/" (:name props) "-icon.jpg")
        key-for #(keyword (str "sections-" (:name props) "-" %))]
    [:article {:key (:key props) :class (str (:name props) "-section")}
     [:header.section-header
      [:h1.title (label (key-for "title"))]
      [:p.subtitle (label (key-for "subtitle"))]]
     [:section.section-description
      [:p.description (label (key-for "desc"))]
      [:p.avatar-wrapper
       [:a.avatar-link {:target "_blank" :href (:href props)}
        [:img.avatar {:src avatar-path
                      :alt (label (key-for "avatar-alt"))}]
        [:span.text (subs (:href props) 11)]]]]]))

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

(defn sections []
  [:section.sections-container.hidden
   {:data-appear-order 2}
   [summary]
   (doall (map section section-props))])

