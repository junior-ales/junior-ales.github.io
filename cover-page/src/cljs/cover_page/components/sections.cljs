(ns cover-page.components.sections
  (:require [cover-page.utils.content :refer [label]]
            [cover-page.utils.tracker :refer [track]]
            [cover-page.components.contact-link :refer [contact-link]]
            [cover-page.components.contact-form :refer [contact-form]]))

(defn key-for [context key-name]
  (keyword (str "sections-" context "-" key-name)))

(defn link-avatar[{:keys [href key alt src]}]
  [:a.avatar-link {:target "_blank"
                   :href href
                   :on-click #(track (str "coverpage:" key))}
   [:img.avatar {:src src :alt alt}]
   [:br]
   [:span.text (subs href 11)]])

(defn avatar[{:keys [name href key]}]
  (let [-key-for (partial key-for name)
        avatar-path (str "images/" name "-icon.jpg")
        avatar-props {:src avatar-path
                      :href href
                      :key key
                      :alt (label (-key-for "avatar-alt"))}]
    [:p.avatar-wrapper
     (if href
       [link-avatar avatar-props]
       [:img.avatar avatar-props])]))

(defn section-commons [{:keys [name key]} & extra-component]
  (let [-key-for (partial key-for name)]
    [:article {:key key :class (str name "-section")}
     [:header.section-header
      [:h1.title (label (-key-for "title"))]
      [:p.subtitle (label (-key-for "subtitle"))]]
     [:section.section-description
      [:p.description (label (-key-for "desc"))]
      extra-component]]))

(defn section-default [props]
  (section-commons props [avatar props]))

(def link-props
  [{:key "details:footer:linkedin" :href "https://br.linkedin.com/in/juniorales" :icon-class "fa-linkedin"}
   {:key "details:footer:github" :href "https://github.com/junior-ales" :icon-class "fa-github-alt"}
   {:key "details:footer:instagram" :href "https://instagram.com/junior_ales" :icon-class "fa-instagram"}
   {:key "details:footer:facebook" :href "https://facebook.com/juniorales" :icon-class "fa-facebook"}])

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
                 :on-click #(track "coverpage:details:footer:github-repo")
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
                 :on-click #(track "coverpage:details:footer:github-repo")
                 :href "https://github.com/junior-ales/junior-ales.github.io/"}
        "github"]]]]])

(def section-props
  [{:key "details:summary" :name "summary"}
   {:key "details:photoblog" :name "photoblog" :href "http://www.juniorales.com/photo"}
   {:key "details:twitter" :name "twitter" :href "http://www.twitter.com/junior_ales"}
   {:key "details:medium" :name "medium" :href "http://www.medium.com/@junior_ales"}])

(defn sections []
  [:section.sections-container.hidden-once
   {:data-appear-order 2}
   (doall (map section-default section-props))
   [contact]])

