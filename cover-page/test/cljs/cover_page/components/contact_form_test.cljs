(ns cover-page.components.contact-form-test
  (:require [cover-page.components.contact-form :as f]
            [cover-page.utils.content :refer [label]]
            [cljs.test :refer-macros [deftest testing is]]))

(deftest send-message-test
  (let [fake-label #(% {:email-form-error-empty-message "no message"
                        :email-form-error-empty-address "no email"
                        :email-form-error-wrong-address "wrong email format"})]
    (testing "Input Validator"
      (binding [label fake-label]
        (is (= ["no message"] (f/validate-input "user@email.com" nil)))
        (is (= ["no message"] (f/validate-input "user@email.com" "")))
        (is (= nil            (f/validate-input "user@email.com" "a message")))))))
