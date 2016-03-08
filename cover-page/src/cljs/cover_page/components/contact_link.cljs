(ns cover-page.components.contact-link)

(defn contact-link [props]
  (let [default-classes "fa fa-stack-1x icon "]
    [:a.fa-stack.contact-link props
     [:i.fa.fa-square.fa-stack-2x]
     [:i {:class (apply str default-classes (:icon-class props))}]]))
