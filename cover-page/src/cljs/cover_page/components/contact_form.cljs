(ns cover-page.components.contact-form
  (:require [reagent.core :as r]
            [cover-page.utils.content :refer [label]]
            [valip.core :refer [validate]]
            [valip.predicates :refer [present? email-address?]]))

(defn alert-success []
  (js/console.log "success"))

(defn alert-failure [error]
  (js/console.log "failure" error))

(defn validate-input [email message] nil)

(defn validate-input-done [email message]
  (first (vals
           (validate {:email email :message message}
                     [:email present? "falta email"]
                     [:email email-address? "nao eh email"]
                     [:message present? "falta message"]))))

(defn send-message [email message]
  (if-let [errors (validate-input @email @message)]
    (alert-failure (first errors))
    (do
      (alert-success)
      (reset! email nil)
      (reset! message nil))))

(defn contact-form []
  (let [email (r/atom nil)
        message (r/atom nil)]
    (fn []
      [:form.contact-form
       [:input#sender-email {:type "email"
                             :name "_replyto"
                             :value @email
                             :on-change #(reset! email (-> % .-target .-value))
                             :placeholder (label :email-form-address)}]
       [:textarea#sender-message.message {:name "message"
                                          :value @message
                                          :on-change #(reset! message (-> % .-target .-value))
                                          :placeholder (label :email-form-message)}]
       [:input#sender-gotcha.hidden
        {:type "text" :name "_gotcha"}]
       [:input
        {:type "hidden" :name "_subject" :value "New message from juniorales.com"}]
       [:button#send-email-button.submit
        {:type "button" :on-click #(send-message email message)}
        (label :email-form-button)]])))
