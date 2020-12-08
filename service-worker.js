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

var precacheConfig = [["404.html","c05f05ae313ce643419a907a42909cca"],["archives/2020/09/index.html","0165f2fa767fe7823bc0dd7c8cdcb627"],["archives/2020/10/index.html","c2867f6ced0eb2bd77a37d9f7784f8a1"],["archives/2020/10/page/2/index.html","627a02e9d02c61c34deca220ac324711"],["archives/2020/10/page/3/index.html","a71f99b8b41df8352f67b29ba611cbaf"],["archives/2020/11/index.html","fc700e2a11070742c68b1b3e17cd0355"],["archives/2020/11/page/2/index.html","55e235787cb7b6e9e63584205192d713"],["archives/2020/12/index.html","9b123c5f5cc52cddd6efef583a131c90"],["archives/2020/index.html","dc457a70d66e08dd6c596960f1c8460a"],["archives/2020/page/2/index.html","f44afedb62cc136d017a09a77c3eead1"],["archives/2020/page/3/index.html","48a7d530e5cae9d0a4469b2b40c89265"],["archives/2020/page/4/index.html","81b8abd89ae62b666c7aa7d87dc307c5"],["archives/2020/page/5/index.html","76581e61fe4b8ce1e2d980b7844ba5fa"],["archives/index.html","5e3b56a66d3d92b2cca03d6b1f9a80b5"],["archives/page/2/index.html","ab35ef0c08ae9c72e6b63d83eace33cc"],["archives/page/3/index.html","b53fa9079a885aa8e1f198efc28ee187"],["archives/page/4/index.html","d2376a4896bf1ba34c7389c80ca61690"],["archives/page/5/index.html","fe7dcb1ec6b763abcf1e6ee63909eba7"],["assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["categories/c-关键字/index.html","70031b45ad3bc895e2875b5894230dc0"],["categories/c-基础实战/index.html","64266fa72d1057fdcbb3fb5b8aa40c49"],["categories/index-1.html","cb718e6620d4672456bb03473d9eb17e"],["categories/index.html","6a76e256cdc1cc62fe5c96b41000a308"],["categories/leedcode-链表/index.html","dd711efd1362e8a381750b8883e1e785"],["categories/leedcode/index.html","3be548fdeb2d68a13571ac6fe773b44b"],["categories/linux/index.html","f5393757eb0b6bd2f8f2f55329115e2b"],["categories/python环境问题/index.html","c2df2a0b7b9fc63fa4d9235f36410329"],["categories/tree联系/index.html","9827eb5eae90ebcffe805c2bcfe998fd"],["categories/优化/index.html","3253faf4d0b13880e4182a702adfe11d"],["categories/操作系统/index.html","d7c2ac9f319cc0a045eca1ca00949f92"],["categories/操作系统开发/index.html","70b5529f79165572b743c8696ae08175"],["categories/数据库/index.html","fea6612466841938fa0e68aa17525ce6"],["categories/数据结构/index.html","b8bbf96bfee565ee589ee5913ab7dc45"],["categories/爬虫实战应用/index.html","488995e0fa965ed7d6dfe07ebabd26ec"],["categories/编程语言开发/index.html","21388d7f2b2e06075e95374345f5122c"],["categories/网络实战总结/index.html","6aed9ba3ec4947d4c77d08e5b6775ba1"],["categories/计算机网络/index.html","12aad1500bd20d911b48d2708d444eb6"],["categories/面试/index.html","9bae1ab31c9a32f4e96479285495913f"],["css/background.css","5bb9900d1bad9cb1e3fce454bc255d7f"],["css/index.css","6820a24dae33f2f98a11a1038eb0b48f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","50bc90520c686ea8500981de89985d49"],["img/bei1.jpg","60bfcaea92765d01bb04672083dac266"],["img/bei2.jpg","926a9ca3033eb9a0ed6aaf54ee66d4b3"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/qiao.jpg","e919f8fea62f9a9786ec9cf2ea72d1de"],["img/star.jpg","b0733874fc43bb9e495440990e0dfd27"],["index.html","b222f65ce0a57833bd6911ec0fad8e1f"],["js/main.js","4898030387012f8af71563ef8353433a"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","6bebed368a1bbcb630dd146cefb103b7"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","64d1e1837ad1a585888f5d1e16c71f77"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["js/utils.js","f91ea1a86a5c45e344a24fb437642f36"],["live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["messageboard/index.html","4778371661cb51c213c89ea1a6fef021"],["page/2/index.html","64b5224bac8e85571156e1aab7ca68c3"],["page/3/index.html","c3180b178c59e20324ffc6904ca0c26e"],["page/4/index.html","1e452bda41de2d6fc4cbc628e122a55e"],["page/5/index.html","1032854e934ed7712db2ab28a7b24fe6"],["posts/0/index.html","e6b08e5e94c4102c8c841948d2be55a6"],["posts/1/index.html","13f033f4dfe8219cb5c09e781f95d007"],["posts/14192/index.html","c6a0ae997ea4b63db176b785b1f77a66"],["posts/14686/index.html","3f10f97ded62167f2140f6adf66b3c38"],["posts/15411/index.html","a280138351461045272e9fe817c4b237"],["posts/15731/index.html","7ed68a63c64fd18ab43c9ae2494dd76e"],["posts/16097/index.html","8000f857c087f53e832351b034199f4c"],["posts/16107/index.html","c66f0d700edb4fdb973739c9698f9c89"],["posts/16108/index.html","598912482f780c6b53f8c0528903d248"],["posts/19586/index.html","b3cb1d4cdbbfb6e61b59de3fd3af46e0"],["posts/19628/index.html","24195ca19b447f47415ba7ef123d92e7"],["posts/21322/index.html","1b2d4e00e48d50581e3aef1b5a547c14"],["posts/21911/index.html","3b5f4d8c16163ee1434c11fedb51f7cb"],["posts/23469/index.html","612f44ac0c32e8530291390507d94d99"],["posts/23956/index.html","8364eaa983a682a3aed8db1769ae898e"],["posts/24148/index.html","5ae416931c4c0f6a1ac521a60935466b"],["posts/24340/index.html","b7656c855166fb86aa9d95a9f0491d38"],["posts/24504/index.html","fe6d365e42c6ed9721fee4ce2bc5fec2"],["posts/25345/index.html","fdacdb14da6d3b3d0804db9cb4241e82"],["posts/26821/index.html","43432b19aa3f73de4a6111291e566f68"],["posts/31131/index.html","0ef395c94777e8151aa4803a11c02f55"],["posts/32473/index.html","6bba62296e49c456ac128be18ce3422d"],["posts/33531/index.html","97ceb0a85b6f5ee0c06ccda42b2917bc"],["posts/33723/index.html","0bad913aad848f8470a7f16a6b8c03d0"],["posts/34955/index.html","1bbfe7db8ccee36cec246acec8260116"],["posts/35949/index.html","e95a3e0137dddda01519da88b94ea997"],["posts/39404/index.html","d2080156b263ad4c93fc884edf150dfc"],["posts/39788/index.html","c47946e278e2decfff3b574f7b2bfb48"],["posts/40133/index.html","2f2c7e3a2de9652812719cacae6a389b"],["posts/40325/index.html","37cb9f281929d14ada9d582d7f2f8724"],["posts/40917/index.html","8791605ebcc21d8e3dfaab546a281946"],["posts/42182/index.html","b07a58e635ec668f44b809c2b6612c74"],["posts/43760/index.html","44ec0d8e615707ccac800ae8e32476db"],["posts/43952/index.html","1f65abca1d666671905b2794dc492346"],["posts/47607/index.html","65aa7ce9c67e2c7565d11b08f989ac4a"],["posts/48539/index.html","5b63efc1727b99c03d32322500ec146d"],["posts/50097/index.html","931450367cf916f2f4dce9668002c1ca"],["posts/53868/index.html","a38491d005465a86846c04cfdce36a16"],["posts/54839/index.html","a0991d452d29711a6d7d4b7c39a69a3b"],["posts/59942/index.html","ed1bc7b38fd25e853e1078d764a2c2a9"],["posts/60133/index.html","0239e2b237f47dd4dbaa6e0e5d0c374f"],["posts/62607/index.html","6609dbcb33bd836e0e4c8e3c9defc6cd"],["posts/63295/index.html","e64e0ff25b42d809519dace132e29345"],["posts/63613/index.html","0c4f9de9e649061610fa6656f957e6e8"],["posts/7734/index.html","b3cef80222a85a909bcde009aaf27adf"],["tags/Data-Sturctures/index.html","d90c636bb2042d43c26bf1a1c687917c"],["tags/acm专项练习/index.html","5cee8be7699e60d8f654c410fac9d5b3"],["tags/apotheosis/index.html","0bcd10b619ff5e249089afaee4cfe5bd"],["tags/c-基础实战/index.html","716c927dc078fa85da2f1d896f4d597e"],["tags/c/index.html","4d7bb45d1e3b67df3245dbec7d462294"],["tags/index-1.html","35d15576ec43d1ef0af14ab60fc4e5c6"],["tags/index.html","eaa0027be32158368ac7891eae37b347"],["tags/leedcode/index.html","29af5ec5cdb804b492474ddd41c58395"],["tags/linux/index.html","4c280cb034fe950e3e574c5c11db258a"],["tags/linxu/index.html","5d3f492952e83c401c81f80fe62d709d"],["tags/python/index.html","b1e3d746e72b7b8a5c29c58575668c82"],["tags/though/index.html","d76a86d3e8326451c011d5157a54a94e"],["tags/tree练习/index.html","915b04afe38d1744b04ed217db44d35b"],["tags/字符串序列/index.html","f21a141fceb347f17d27df7e8e428378"],["tags/字符串系列-匹配算法合集/index.html","a490f960f5db79597917383082eaed13"],["tags/字符串系列/index.html","f287089f7a1b98e45929040d83e4ab2e"],["tags/操作系统/index.html","6352db0806944acfe67af46357086504"],["tags/操作系统开发/index.html","71bf645b656c23f6598a0d664d107834"],["tags/数据库/index.html","6a917591986e8ec1afc9d111134abfa1"],["tags/数据库高级/index.html","81a91b039c3800892d265b6b4e4e3ae4"],["tags/数据结构/index.html","1547eb6a8d0a098d18b4e797622559dd"],["tags/编程语言开发/index.html","fbf35829aa7b4a54ab47546f287a63c3"],["tags/计算机网络/index.html","687755bc759e0adeb380bcd6c744bf03"],["tags/面试/index.html","b5622f1c5a3de36b49f9a3c1fd54170d"]];
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







