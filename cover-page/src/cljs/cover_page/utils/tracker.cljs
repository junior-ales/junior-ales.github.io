(ns cover-page.utils.tracker)

(defn track [event-name]
  (if js/mixpanel
    (.track js/mixpanel event-name)
    (js/console.log "tracked:" event-name)))
