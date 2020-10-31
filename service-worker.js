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

var precacheConfig = [["404.html","b07673541fa02f5996554e60a8f25b09"],["archives/2020/09/index.html","1c1f3d2f70a29481368801d7daa2bbd4"],["archives/2020/10/index.html","0c807e532133813e1fe0d52f362e52fd"],["archives/2020/10/page/2/index.html","c3c3477d6e29176fdf63990b8da46019"],["archives/2020/10/page/3/index.html","5ac22a9a1ffb3273cdf2773c362e5155"],["archives/2020/index.html","39c59e29bd759c83a0d512bf8fd773e5"],["archives/2020/page/2/index.html","6448b23df80527a95d1d01b3b6c1d629"],["archives/2020/page/3/index.html","ae4a08e59c76f1a77be728eea546f6b5"],["archives/index.html","79b2865138ce297102cb3066cf2dbddc"],["archives/page/2/index.html","65642868e346a19b31aea3998c383048"],["archives/page/3/index.html","260b5bb9b1c7bf59dce3f9d50e0e3088"],["assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["categories/c-关键字/index.html","eec71e89d04816038b680cbdb535d866"],["categories/index-1.html","dbdf0687e2a3bd45a4f445a58e1d4b08"],["categories/index.html","63d436298c709faacd5fc89e249033c5"],["categories/python环境问题/index.html","c7cdba1d6e3bd505fe2d18c4425e3b9e"],["categories/云服务/index.html","dce81b6fb5c4881412fd4ae1fc509af5"],["categories/数据库/index.html","90a0219b20dadd937e14b97eeb4d4df6"],["categories/数据结构/index.html","0777bd93141f471fc54decfae3a36bbb"],["categories/爬虫实战应用/index.html","ab1572ccddeeccb336d6acb3ddf07dc7"],["categories/经典题/index.html","c5675bde001f9c0bef463a294c821b68"],["categories/计算机网络/index.html","0c92b0acf816e951f4c0a9e0a5638186"],["css/background.css","5bb9900d1bad9cb1e3fce454bc255d7f"],["css/index.css","6820a24dae33f2f98a11a1038eb0b48f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","50bc90520c686ea8500981de89985d49"],["img/bei1.jpg","60bfcaea92765d01bb04672083dac266"],["img/bei2.jpg","926a9ca3033eb9a0ed6aaf54ee66d4b3"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/qiao.jpg","e919f8fea62f9a9786ec9cf2ea72d1de"],["img/star.jpg","b0733874fc43bb9e495440990e0dfd27"],["index.html","ac80218e785d4f1552f1165a398fd728"],["js/main.js","4898030387012f8af71563ef8353433a"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","6bebed368a1bbcb630dd146cefb103b7"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","64d1e1837ad1a585888f5d1e16c71f77"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["js/utils.js","f91ea1a86a5c45e344a24fb437642f36"],["live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["messageboard/index.html","b03a6b1054d6700841a0f78dddda98e8"],["page/2/index.html","6796c122816e6f09d4d6f7d456a57fc7"],["page/3/index.html","d734db7fb0cc432e6c55f8cd5eac74d9"],["posts/14192/index.html","f16205410d80ccbd1fc4c6303e2aefbe"],["posts/15411/index.html","7fbeff2466da2f27650dfd706591089a"],["posts/16097/index.html","da35d41b73a62941f71c588e8f24fd8b"],["posts/16107/index.html","437df1a72d4dadddf0e0e4eeafa0121f"],["posts/16108/index.html","a192221f5f0adec2c8d0b4c63c2feb97"],["posts/19586/index.html","342ab6721604d54af5fc7e2065036b97"],["posts/226/index.html","d1e3401ed17d9e02440d4723eac30ad0"],["posts/23469/index.html","6ecad5a91e9f019518224c504e5d6612"],["posts/23956/index.html","8bdf761483f6dc517818cb59c4d20e22"],["posts/24148/index.html","053e03049a368eb41e61e7a95c5ebd5d"],["posts/24340/index.html","a29250104892bdb5d3251ed0f45d18c8"],["posts/24504/index.html","90f84af2bb154c9451aed32fe09943d6"],["posts/25345/index.html","0e44700a02b2b9022cef365e5b27bc66"],["posts/26821/index.html","53555e70766530e3a2edb22950a691cf"],["posts/33723/index.html","ab396171256b986bf5fb9c793c64a5fa"],["posts/35949/index.html","be7495228319394d367c977e1de91515"],["posts/39404/index.html","b400bc9b8d88cc5c02ec58d688d6467f"],["posts/39788/index.html","35272048a9284f10184d1439ec6c7240"],["posts/40133/index.html","2cc71f35556617b8d7692238ee8f93ee"],["posts/40325/index.html","f463785f6f470b62e3769fbbaf4d6e79"],["posts/40917/index.html","3ca98b92a61e3006b364cad6402a4219"],["posts/42182/index.html","df50efd7d580a4c9c5a66e0653309349"],["posts/50097/index.html","9cb7967b0f98916387cae6985c51a434"],["posts/53868/index.html","1aaabeac1fa704d2ce39454ef43cb7f6"],["posts/60133/index.html","fc8d94dc75e7f1812eaa1a711abe3864"],["posts/63295/index.html","b00e913504e994664dbd0cd018a920c9"],["posts/7734/index.html","3e90333a620dd33859cfab58ad721b4e"],["tags/Data-Sturctures/index.html","f7fa0e0c77a288f16c09d3be147fe819"],["tags/acm专项练习/index.html","7fbdb177f4d6c9db681ee5d67cad8cb4"],["tags/apotheosis/index.html","d622f3bccf78635bbe3ffb48ae53f447"],["tags/c/index.html","7e98e5d78ba324ca652e3d14d7152ced"],["tags/index-1.html","c203e252c8939394aa6ab6070b72cfb0"],["tags/index.html","0afa72830bce2b00c669d781506773a2"],["tags/linux/index.html","c8d7df7073b1eec58f8fbfca65fd95eb"],["tags/python/index.html","1a4e468decd7efa950d0955e52211e63"],["tags/though/index.html","fc4dd90b94362f3ff5f84dea4dbc8859"],["tags/云服务/index.html","a44849fe25dbeb35f65e3523bd4b8ef1"],["tags/字符串序列/index.html","164ea02110aa9f58a315f601c85ce349"],["tags/字符串系列-匹配算法合集/index.html","1aeb3aff15dfed77c3baeb6ce1a73bb1"],["tags/字符串系列/index.html","46c0df8c1de64b5acf973376bfcfb6f1"],["tags/数据库/index.html","6c798cd5804f1b65fc597ea21dbdf7ea"],["tags/计算机网络/index.html","de2d14fd8f05b6e618cc593606a03e6d"]];
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







