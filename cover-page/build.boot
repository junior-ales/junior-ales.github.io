(set-env!
  :source-paths #{"sass" "src/cljs"}
  :resource-paths #{"html"}

  :dependencies '[
                  [adzerk/boot-cljs          "1.7.228-1" :scope "test"]
                  [adzerk/boot-cljs-repl     "0.3.0"     :scope "test"]
                  [adzerk/boot-reload        "0.4.5"     :scope "test"]
                  [pandeiro/boot-http        "0.7.3"     :scope "test"]
                  [com.cemerick/piggieback   "0.2.1"     :scope "test"]
                  [weasel                    "0.7.0"     :scope "test"]
                  [org.clojure/tools.nrepl   "0.2.12"    :scope "test"]
                  [mathias/boot-sassc        "0.1.5"     :scope "test"]
                  [org.clojure/clojurescript "1.7.228"]
                  [reagent                   "0.6.0-alpha"]
                  [org.clojars.magomimmo/domina "2.0.0-SNAPSHOT"]
                  ])

(require '[adzerk.boot-cljs :refer [cljs]]
         '[pandeiro.boot-http :refer [serve]]
         '[adzerk.boot-reload :refer [reload]]
         '[mathias.boot-sassc :refer [sass]]
         '[adzerk.boot-cljs-repl :refer [cljs-repl start-repl]])

(deftask dev
  "Launch Immediate Feedback Development Environment"
  []
  (comp
    (serve :dir "target")
    (watch)
    (reload)
    (cljs-repl)
    (cljs)
    (sass :source-maps true :output-dir "styles")
    (target :dir #{"target"})))
