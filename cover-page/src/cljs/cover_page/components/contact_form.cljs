(ns cover-page.components.contact-form
  (:require [reagent.core :as r]
            [cover-page.utils.content :refer [label]]
            [valip.core :refer [validate]]
            [valip.predicates :refer [present? email-address?]]))

(defn alert-success []
  (js/console.log "success"))

(defn alert-failure [error]
  (js/console.log "failure" error))

(defn validate-input [email message]
  (first (vals
           (validate {:email email :message message}
                     [:email present? (label :email-form-error-empty-address)]
                     [:email email-address? (label :email-form-error-wrong-address)]
                     [:message present? (label :email-form-error-empty-message)]))))

(defn send-message [email message]
  (alert-success)
  (reset! email nil)
  (reset! message nil))

(defn process-message [email message]
  (if-let [errors (validate-input @email @message)]
    (alert-failure (first errors))
    (send-message email message)))

(defn contact-form []
  (let [email (r/atom nil)
        message (r/atom nil)]
    (fn []
      [:form.contact-form
       [:input {:id "sender-email"
                :type "email"
                :name "_replyto"
                :value @email
                :on-change #(reset! email (-> % .-target .-value))
                :placeholder (label :email-form-address)}]
       [:textarea.message {:id "sender-message"
                           :name "message"
                           :value @message
                           :on-change #(reset! message (-> % .-target .-value))
                           :placeholder (label :email-form-message)}]
       [:input#sender-gotcha.hidden
        {:type "text" :name "_gotcha"}]
       [:input
        {:type "hidden" :name "_subject" :value "New message from juniorales.com"}]
       [:button#send-email-button.submit
        {:type "button" :on-click #(process-message email message)}
        (label :email-form-button)]])))
