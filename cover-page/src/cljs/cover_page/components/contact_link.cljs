(ns cover-page.components.contact-link)

(defn contact-link [props]
  (let [default-classes "fa fa-stack-1x icon "
        target (or (:target props) "_blank")]
    [:a.fa-stack.contact-link (assoc props :target target)
     [:i.fa.fa-square.fa-stack-2x]
     [:i {:class (apply str default-classes (:icon-class props))}]]))
