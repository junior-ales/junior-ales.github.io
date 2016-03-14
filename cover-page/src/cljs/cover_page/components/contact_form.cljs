(ns cover-page.components.contact-form
  (:require [cover-page.utils.content :refer [label]]))

(defn contact-form []
  [:form.contact-form
   [:input#sender-email
    {:type "email" :name "_replyto" :placeholder (label :email-form-address) :required true}]
   [:textarea#sender-message.message
    {:name "message" :placeholder (label :email-form-message) :required true}]
   [:input#sender-gotcha.hidden
    {:type "text" :name "_gotcha"}]
   [:input
    {:type "hidden" :name "_subject" :value "New message from juniorales.com"}]
   [:button#send-email-button.submit
    {:type "submit"} (label :email-form-button)]])
