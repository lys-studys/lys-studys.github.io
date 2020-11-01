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

var precacheConfig = [["404.html","4a3f08cb0b3c3dddcb5a4f744892bd2e"],["archives/2020/09/index.html","a946be335bd716e411cf49f24e756986"],["archives/2020/10/index.html","e7e69b56d1db8ba6789ff319953ce7db"],["archives/2020/10/page/2/index.html","7f8ef07f5c29ccee470bc7ccc3d60aa9"],["archives/2020/10/page/3/index.html","2ff405c70611f6ad3776e849ee1b606c"],["archives/2020/index.html","0a9215c81e1a3781b7d0c95a4d90eae8"],["archives/2020/page/2/index.html","52a7edbc9976f539b664965b78c41962"],["archives/2020/page/3/index.html","f29d8534f0cbc51b8657f9b51c9c1692"],["archives/index.html","d36fd0d8d86cca1f783be546cf42c724"],["archives/page/2/index.html","451c19468551f9c3578abbec2551cbcf"],["archives/page/3/index.html","0a954a6a9d0dd25ccd8cd0c0a0dd2df7"],["assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["categories/c-关键字/index.html","3545e0203db91d8466b625cfd534e208"],["categories/index-1.html","3f45108955218c5b26ca38a2eb4086ca"],["categories/index.html","c42d2962fd17e07b09ab4370a8af6d88"],["categories/python环境问题/index.html","21c78b5809867689edbc424852c81ed4"],["categories/云服务/index.html","c6de2f92ff684e1f4f8b9a6151c1e9d4"],["categories/优化/index.html","efd1bf2bfe41f06c33c69a4af9d97575"],["categories/数据库/index.html","cd1260d0d6429e6ea30b47458d5dfa88"],["categories/数据结构/index.html","3d9f26d0fb345932a41a37d05c8cf88d"],["categories/爬虫实战应用/index.html","5193ad4b6bb770f6a9a44b9af8dc4b14"],["categories/计算机网络/index.html","c20c303e84a85164f9118b2e3e57e52e"],["css/background.css","5bb9900d1bad9cb1e3fce454bc255d7f"],["css/index.css","6820a24dae33f2f98a11a1038eb0b48f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","50bc90520c686ea8500981de89985d49"],["img/bei1.jpg","60bfcaea92765d01bb04672083dac266"],["img/bei2.jpg","926a9ca3033eb9a0ed6aaf54ee66d4b3"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/qiao.jpg","e919f8fea62f9a9786ec9cf2ea72d1de"],["img/star.jpg","b0733874fc43bb9e495440990e0dfd27"],["index.html","e0cc02aca17ebff5ead5b9021b4223e2"],["js/main.js","4898030387012f8af71563ef8353433a"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","6bebed368a1bbcb630dd146cefb103b7"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","64d1e1837ad1a585888f5d1e16c71f77"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["js/utils.js","f91ea1a86a5c45e344a24fb437642f36"],["live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["messageboard/index.html","c7575be5e14dec371febec97eec4d83b"],["page/2/index.html","8a87184c1f8ef428dad5b99d65d8446c"],["page/3/index.html","6aac8a48aa7500c401b50cb7157b4216"],["posts/14192/index.html","eed6e13bfba0f8dd48217bbe4523b894"],["posts/15411/index.html","32ed486280fbe873e1360fa562aca915"],["posts/15731/index.html","b47cb8efa5c3b792a8e405628b2b193e"],["posts/16097/index.html","f184c62334cd28f66da13ab2bdc83f9b"],["posts/16107/index.html","13519d4e94835f2ccd1a7008b4aa38dd"],["posts/16108/index.html","7d94f6d8f6dc35786b9cfcbc29910fe9"],["posts/19586/index.html","3f4a0bb6c2e5273fc8a954fe403a4501"],["posts/226/index.html","dbb481a70b7e3160c27420684242ee62"],["posts/23469/index.html","9899f6994f6381e4fc51d6cfd7d957e3"],["posts/23956/index.html","813288f87492268327e5fb3e88acd6d9"],["posts/24148/index.html","f7badc787d320575a60b984773767cdd"],["posts/24340/index.html","7f2d233c879e45849ee929e4e996ebb7"],["posts/24504/index.html","cf328eb8e4faac15bcae463fa056ab42"],["posts/25345/index.html","ae1732d450f775fbd6b0b870b58fc540"],["posts/26821/index.html","33c600d88a48265df11b841b1e6fa93a"],["posts/33723/index.html","aa82a732d248734df4a8489c422a75ba"],["posts/35949/index.html","c4435570532260eded238876edb924f6"],["posts/39404/index.html","825294b57e939072338cbb25aadb128a"],["posts/39788/index.html","28d85f28cd5f5fdb3d22388bac963438"],["posts/40133/index.html","ce05e6798e5e2b3c0fecbb6d8b22489c"],["posts/40325/index.html","a98757a9afc120565a0e4ffc68c26e38"],["posts/40917/index.html","9e4ca0567bdf355577258e051410e87a"],["posts/42182/index.html","77780bff563c96936309fead372054dc"],["posts/50097/index.html","2168b34c4dd79678b2faee15d70d61b0"],["posts/53868/index.html","fb1dadd125b484ec6e14a439acb0f60d"],["posts/60133/index.html","a71cade13c6db192475f8468df47a037"],["posts/63295/index.html","27f3c285317ad25fb926ff98f2450947"],["posts/7734/index.html","e075e286dafc511d80ce888899999f09"],["tags/Data-Sturctures/index.html","f9122b706f3bd437a71e68193e3da539"],["tags/acm专项练习/index.html","1f29879d1483b614fea714de5f249fbe"],["tags/apotheosis/index.html","646aa3d0ec3d747fb506644a7a33da40"],["tags/c/index.html","0f8d6e5d6d5a6938926923fb814ebc5e"],["tags/index-1.html","94984295cabe92c48a2fad17b5b4fcbc"],["tags/index.html","3a67b48038f8897ffe8c0c8af9d8a1f0"],["tags/linux/index.html","5ac33cc4cb6bce34611f44f7a072926a"],["tags/python/index.html","040406b3a30be86b0945e1f2268ae3bb"],["tags/though/index.html","440ce5bacf13d659116330ea16745f5b"],["tags/云服务/index.html","ac712150619c67467a771fc40e6aee33"],["tags/字符串序列/index.html","89d9f63e050e1855126292b7c0f9a88a"],["tags/字符串系列-匹配算法合集/index.html","ea76abc7d76e5b016d5977c8a3798fcb"],["tags/字符串系列/index.html","f148de8fdee1464ff7253680c530e9cf"],["tags/数据库/index.html","d62fd7c6171e77432a32f7c9c6acebd6"],["tags/数据库高级/index.html","557eb20013da2974e40f1595fb2cceb9"],["tags/计算机网络/index.html","9d64779c6b4ce2a9244618997da9fc7a"]];
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







