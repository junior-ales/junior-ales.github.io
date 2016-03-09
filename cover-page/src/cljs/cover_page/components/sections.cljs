(ns cover-page.components.sections
  (:require [cover-page.utils.content :refer [label]]
            [cover-page.components.contact-link :refer [contact-link]]
            [cover-page.components.contact-form :refer [contact-form]]))

(defn key-for [context key-name]
  (keyword (str "sections-" context "-" key-name)))

(defn link-avatar[props]
  [:a.avatar-link {:target "_blank" :href (:href props)}
   [:img.avatar {:src (:src props) :alt (:alt props)}]
   [:br]
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

(defn section-commons [props & extra-component]
  (let [-key-for (partial key-for (:name props))]
    [:article {:key (:key props) :class (str (:name props) "-section")}
     [:header.section-header
      [:h1.title (label (-key-for "title"))]
      [:p.subtitle (label (-key-for "subtitle"))]]
     [:section.section-description
      [:p.description (label (-key-for "desc"))]
      extra-component]]))

(defn section-default [props]
  (section-commons props [avatar props]))

(def link-props
  [{:key 1 :href "https://br.linkedin.com/in/juniorales" :icon-class "fa-linkedin"}
   {:key 2 :href "https://github.com/junior-ales" :icon-class "fa-github-alt"}
   {:key 3 :href "https://instagram.com/junior_ales" :icon-class "fa-instagram"}
   {:key 4 :href "https://facebook.com/juniorales" :icon-class "fa-facebook"}])

(defn contact-with-form []
  (section-commons {:name "contact"}
    [contact-form {:key 14}]
    [:footer.contact-footer {:key 15}
     (map contact-link link-props)
     [:ul.site-info
      [:li.name "junior ales"]
      [:li.separator "•"]
      [:li (label :sections-contact-code-hosted)
       [:a.link {:target "_blank"
                 :href "https://github.com/junior-ales/junior-ales.github.io/"}
        "github"]]]]))

;; TODO remove this once contact-with-form is implemented
(defn contact []
  [:section.contact-section
    [:footer.contact-footer {:key 15}
     (map contact-link link-props)
     [:ul.site-info
      [:li.name "junior ales"]
      [:li.separator "•"]
      [:li (label :sections-contact-code-hosted)
       [:a.link {:target "_blank"
                 :href "https://github.com/junior-ales/junior-ales.github.io/"}
        "github"]]]]])

(def section-props
  [{:key 10 :name "summary"}
   {:key 11 :name "photoblog" :href "http://www.juniorales.com/photo"}
   {:key 12 :name "twitter" :href "http://www.twitter.com/junior_ales"}
   {:key 13 :name "medium" :href "http://www.medium.com/@junior_ales"}])

(defn sections []
  [:section.sections-container.hidden-once
   {:data-appear-order 2}
   (doall (map section-default section-props))
   [contact]])

