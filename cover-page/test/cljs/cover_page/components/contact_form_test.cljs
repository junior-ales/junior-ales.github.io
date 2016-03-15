(ns cover-page.components.contact-form-test
  (:require [cover-page.components.contact-form :as f]
            [cljs.test :refer-macros [deftest is]]))

(deftest send-message-validation
  (is (= nil (f/validate-input nil nil))))
