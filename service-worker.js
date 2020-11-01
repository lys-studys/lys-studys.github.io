/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["404.html","eac455965edcea41cd6252fd81389d84"],["archives/2020/09/index.html","a727feac4e9170c4f2f46552566a165a"],["archives/2020/10/index.html","91b34e70d90f5142862b13c122b57835"],["archives/2020/10/page/2/index.html","dc22013a9eb351bbe598538ca6502965"],["archives/2020/10/page/3/index.html","ba8092b4b037dfe9dba4cc2ea89ef725"],["archives/2020/index.html","58ff7eba497163e2f4c50824e18e5d0b"],["archives/2020/page/2/index.html","e02e794bc2683efd1a48791ae41e8b04"],["archives/2020/page/3/index.html","1279b6f9716ed5902f02ffc7886e4d86"],["archives/index.html","df13ae1d85e7b1d7c2f2ef0ead0a053b"],["archives/page/2/index.html","a6a5ac52cbe3d94406254b80441fee59"],["archives/page/3/index.html","c0f631267ebe295410381b89b26a3c80"],["assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["categories/c-关键字/index.html","e3309c8be57b75fb1967866bb8ab9a2a"],["categories/index-1.html","8f1c14db411820e7ee8269f1e8ee971e"],["categories/index.html","3212100868f32b0f47945cc684edac65"],["categories/python环境问题/index.html","45b7fd42d443317d8bc0622cc144adf4"],["categories/优化/index.html","aa0e66f3706bd490b1c4ffcfe58bdf92"],["categories/数据库/index.html","6696fc4c09e9914265591c01e3729a9a"],["categories/数据结构/index.html","a2776b2821b29c2550a21975d1969fbd"],["categories/爬虫实战应用/index.html","d7555853ed31ee724e0f0b249c781770"],["categories/计算机网络/index.html","be937421c91627a00307cfd8e42d671f"],["css/background.css","5bb9900d1bad9cb1e3fce454bc255d7f"],["css/index.css","6820a24dae33f2f98a11a1038eb0b48f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","50bc90520c686ea8500981de89985d49"],["img/bei1.jpg","60bfcaea92765d01bb04672083dac266"],["img/bei2.jpg","926a9ca3033eb9a0ed6aaf54ee66d4b3"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/qiao.jpg","e919f8fea62f9a9786ec9cf2ea72d1de"],["img/star.jpg","b0733874fc43bb9e495440990e0dfd27"],["index.html","bcd81e0eec6d11256e8fcd3c5a192480"],["js/main.js","4898030387012f8af71563ef8353433a"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","6bebed368a1bbcb630dd146cefb103b7"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","64d1e1837ad1a585888f5d1e16c71f77"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["js/utils.js","f91ea1a86a5c45e344a24fb437642f36"],["live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["messageboard/index.html","61794dd23adacc93c416d65af6879572"],["page/2/index.html","574f2011bb712e0957be61f1dd5d2462"],["page/3/index.html","d9c596d803d1e1e21cdd0679d1944a8b"],["posts/14192/index.html","45d24ca925f66a1e3c6bf27c07af5dfb"],["posts/15411/index.html","97a8f364398921ca62ba836f87b06f28"],["posts/15731/index.html","d3b6582e5898dce67ecf0f7d7e847d44"],["posts/16097/index.html","b2fb0376b5335acdffc316e25cb17e66"],["posts/16107/index.html","70904a834f8418ada9e43e999df9972d"],["posts/16108/index.html","f7e9f6455e133f53e1de6720930c42cc"],["posts/19586/index.html","b5ee5d033be030baa5753cad4adffb67"],["posts/23469/index.html","42d928e6d4ac75948d7a7e7b34e1910e"],["posts/23956/index.html","fcb036b98685fb87385f1e20c62fce65"],["posts/24148/index.html","ddc34df5999530f87792a3633b3ff8f7"],["posts/24340/index.html","b15c6807b0b21ca5b6d747cecd0ae035"],["posts/24504/index.html","145a0f4e01a4aab1458eb2a706319607"],["posts/25345/index.html","a6736d90965e6e393acb8a8ef62c0a1e"],["posts/26821/index.html","b70b4ce34c94db0909147575055988e8"],["posts/33723/index.html","56067296516114d6cc141b4b5a66a8db"],["posts/35949/index.html","63e94220b9e082d93d63ad26a85d2be8"],["posts/39404/index.html","d48db828f27778d2160720d50cf6996f"],["posts/39788/index.html","b1fa0b8c66ce2cc9e9d86281de98ad42"],["posts/40133/index.html","a4141a2431c7ca8c14f938db5b29bc87"],["posts/40325/index.html","aa833b31477e5bf68d15cffa73f1d706"],["posts/40917/index.html","6d3455f39537a4576a5d98aedc3d3f34"],["posts/42182/index.html","70f0a65c1ca679411075031d8fcad324"],["posts/50097/index.html","f75b65b107f65f5b57b1113971f03d1b"],["posts/53868/index.html","118d080e557afe45fc583b8477473690"],["posts/60133/index.html","0b19c515f03011917abecf988d43b7ec"],["posts/63295/index.html","96f557e83ead4d3e770e71e52c4380bb"],["posts/7734/index.html","fa2a52a4e456a10279c3a4ac94d042a9"],["tags/Data-Sturctures/index.html","c7802d84e53215e74d490fa6deea953d"],["tags/acm专项练习/index.html","36fe9519109defc03f97306d8ec8c63f"],["tags/apotheosis/index.html","88868a7f9ad49e9262249d926a1abb99"],["tags/c/index.html","c5864941304aeb030a2cf07712f57166"],["tags/index-1.html","6d872a35a414cf42f06fd671cebcf972"],["tags/index.html","45a0a2070f551d5c9078d847a2a04cca"],["tags/linux/index.html","5cc42e348a0f07fef16c9018e0109f8d"],["tags/python/index.html","5fbacb352664ef3547bcddd275fe1f6a"],["tags/though/index.html","56c0ef268e630ef67bfa7121c09747b7"],["tags/字符串序列/index.html","f21bcb0620c9fc5b5456510310695d47"],["tags/字符串系列-匹配算法合集/index.html","d406aff0c23e16ea3c1518ca1e952b55"],["tags/字符串系列/index.html","5c31b24850f9d4e57dcc729849c10471"],["tags/数据库/index.html","d1eb30b4f57adc76a340c07c0acbb39e"],["tags/数据库高级/index.html","843c40522ddc3089399fca7b9276f339"],["tags/计算机网络/index.html","0f77a61ee898f161a10ef8c58e836517"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







