(set-env!
  :source-paths #{"sass" "src/cljs"}
  :resource-paths #{"html"}

  :dependencies '[[adzerk/boot-cljs             "1.7.228-1" :scope "test"]
                  [adzerk/boot-cljs-repl        "0.3.0"     :scope "test"]
                  [adzerk/boot-reload           "0.4.5"     :scope "test"]
                  [pandeiro/boot-http           "0.7.3"     :scope "test"]
                  [com.cemerick/piggieback      "0.2.1"     :scope "test"]
                  [weasel                       "0.7.0"     :scope "test"]
                  [org.clojure/tools.nrepl      "0.2.12"    :scope "test"]
                  [mathias/boot-sassc           "0.1.5"     :scope "test"]
                  [crisptrutski/boot-cljs-test  "0.2.1"     :scope "test"]
                  [org.clojure/clojurescript    "1.7.228"]
                  [reagent                      "0.6.0-alpha"]
                  [org.clojars.magomimmo/valip  "0.4.0-SNAPSHOT"]
                  [org.clojars.magomimmo/domina "2.0.0-SNAPSHOT"]])

(require '[adzerk.boot-cljs            :refer [cljs]]
         '[pandeiro.boot-http          :refer [serve]]
         '[adzerk.boot-reload          :refer [reload]]
         '[mathias.boot-sassc          :refer [sass]]
         '[adzerk.boot-cljs-repl       :refer [cljs-repl start-repl]]
         '[crisptrutski.boot-cljs-test :refer [test-cljs]])

(deftask build []
  (comp (cljs)
        (sass :output-dir "styles")
        (target :dir #{"target"})))

(deftask run []
  (comp (serve :dir "target")
        (watch)
        (reload)
        (cljs-repl)
        (build)))

(deftask production []
  (task-options! cljs {:optimizations :advanced}
                 sass {:output-style "compressed"})
  identity)

(deftask development []
  (task-options! cljs   {:optimizations :none :source-map true}
                 reload {:on-jsload 'cover-page.core/init}
                 sass   {:line-numbers true
                         :source-maps  true})
  identity)

(deftask dev
  "Launch Immediate Feedback Development Environment"
  []
  (comp (development)
        (run)))

(deftask prod
  "Build the application with production settings"
  []
  (comp (production)
        (build)))

(deftask run-script
  "Run deploy script"
  []
  (println "Running deploy script...")
  (clojure.java.shell/sh "./deploy.sh")
  (println "DONE!")
  identity)

(deftask testing []
  (set-env! :source-paths #(conj % "test/cljs"))
  identity)

(ns-unmap 'boot.user 'test) ;; This prevents a name collision WARNING between the test task and clojure.core/test

(deftask test []
  (comp (testing)
        (test-cljs :update-fs? true
                   :js-env :phantom
                   :exit?  true)))

(deftask auto-test []
  (comp (testing)
        (watch)
        (test-cljs :js-env :phantom)))
