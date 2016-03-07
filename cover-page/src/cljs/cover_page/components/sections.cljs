(ns cover-page.components.sections
  (:require [cover-page.utils.content :refer [label]]))

(defn key-for [context key-name]
  (keyword (str "sections-" context "-" key-name)))

(defn link-avatar[props]
  [:a.avatar-link {:target "_blank" :href (:href props)}
   [:img.avatar {:src (:src props) :alt (:alt props)}]
   [:span.text (subs (:href props) 11)]])

(defn avatar[props]
  (let [-key-for (partial key-for (:name props))
        avatar-path (str "images/" (:name props) "-icon.jpg")
        avatar-props {:src avatar-path
                      :href (:href props)
                      :alt (label (-key-for "avatar-alt"))}]
    [:p.avatar-wrapper
     (if (:href props)
       [link-avatar avatar-props]
       [:img.avatar avatar-props])]))

(defn section-commons [props & -avatar]
  (let [-key-for (partial key-for (:name props))]
    [:article {:key (:key props) :class (str (:name props) "-section")}
     [:header.section-header
      [:h1.title (label (-key-for "title"))]
      [:p.subtitle (label (-key-for "subtitle"))]]
     [:section.section-description
      [:p.description (label (-key-for "desc"))]
      -avatar]]))

(defn section-default [props]
  (section-commons props [avatar props]))

(defn contact-me []
  (section-commons {:key 14 :name "contact-me"}))

(def section-props
  [{:key 10 :name "summary"}
   {:key 11 :name "photoblog" :href "http://www.juniorales.com/photo"}
   {:key 12 :name "twitter" :href "http://www.twitter.com/junior_ales"}
   {:key 13 :name "medium" :href "http://www.medium.com/@junior_ales"}])

(defn sections []
  [:section.sections-container.hidden
   {:data-appear-order 2}
   (doall (map section-default section-props))
   [contact-me]])

