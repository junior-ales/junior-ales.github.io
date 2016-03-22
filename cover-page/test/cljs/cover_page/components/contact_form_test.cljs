(ns cover-page.components.contact-form-test
  (:require [cover-page.components.contact-form :as f]
            [cover-page.utils.content :refer [label]]
            [cljs.test :refer-macros [deftest testing is]]))

(deftest send-message-test
  (let [message-found #(boolean (some #{%1} %2))
        fake-label #(% {:email-form-error-empty-address "no email"
                        :email-form-error-empty-message "no message"
                        :email-form-error-wrong-address "wrong email format"})]
    (testing "Input Validator"
      (binding [label fake-label]
        (is (message-found "no message"         (f/validate-input "user@email.com" "")))
        (is (message-found "no message"         (f/validate-input "user@email.com" nil)))
        (is (message-found "no email"           (f/validate-input ""               "a message")))
        (is (message-found "no email"           (f/validate-input nil              "a message")))
        (is (message-found "wrong email format" (f/validate-input "user"           "a message")))
        (is (message-found "wrong email format" (f/validate-input "user@email"     "a message")))
        (is (message-found "wrong email format" (f/validate-input "@email.com"     "a message")))
        (is (message-found "wrong email format" (f/validate-input "useremail.com"  "a message")))
        (is (empty?                             (f/validate-input "user@email.com" "a message")))))))
