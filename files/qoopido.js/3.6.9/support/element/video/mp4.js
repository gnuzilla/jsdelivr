/*! Qoopido.js library 3.6.9, 2015-07-10 | https://github.com/dlueth/qoopido.js | (c) 2015 Dirk Lueth */
!function(e){window.qoopido.register("support/element/video/mp4",e,["../../../support","../video"])}(function(e,o,t,i,n,p,r){"use strict";var d=e.support;return d.addTest("/element/video/mp4",function(o){e["support/element/video"]().then(function(){var e=d.pool?d.pool.obtain("video"):p.createElement("video");e.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"')?o.resolve():o.reject(),e.dispose&&e.dispose()},function(){o.reject()})})});