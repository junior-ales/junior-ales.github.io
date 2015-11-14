'use strict';

function Tracker(agent) {
  var track = function(eventName) {
    agent.track(eventName);
  };

  var trackElem = function(nodeElement) {
    var self = this;
    return {
      as: function(eventName) {
        nodeElement.onclick = function() { self.track(eventName); };
      }
    };
  };

  return {
    track: track,
    trackElem: trackElem,
    trackElems: function(nodeElements) {
      var self = this;
      return {
        as: function(eventName) {
          Array.prototype.map.call(nodeElements, function(elem) {
            self.trackElem(elem).as(eventName);
          });

          return {
            andIds: function() {
              Array.prototype.map.call(nodeElements, function(elem) {
                self.trackElem(elem).as(eventName + elem.dataset.trackIdentifier);
              });
            }
          };
        }
      };
    }
  };
}

module.exports = Tracker;
