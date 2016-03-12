(ns cover-page.components.contact-link
  (:require [cover-page.utils.tracker :refer [track]]))

(defn contact-link [props]
  (let [default-classes "fa fa-stack-1x icon "
        target (or (:target props) "_blank")
        event-handler #(track (str "coverpage:" (:key props)))]
    [:a.fa-stack.contact-link (assoc props
                                     :target target
                                     :on-click event-handler)
     [:i.fa.fa-square.fa-stack-2x]
     [:i {:class (apply str default-classes (:icon-class props))}]]))
