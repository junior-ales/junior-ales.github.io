(ns cover-page.utils.tracker)

(defonce mixpanel js/mixpanel)

(defn track [event-name]
  (.track mixpanel event-name))
