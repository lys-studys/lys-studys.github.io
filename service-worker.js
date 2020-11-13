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

var precacheConfig = [["404.html","6e22e33fadb78a136bc5d879bf4d12f7"],["archives/2020/09/index.html","fd016427872ae0f6d4870c8827edcba3"],["archives/2020/10/index.html","ba2f7a58c1f06d23b5561b81cbde222f"],["archives/2020/10/page/2/index.html","9a6207436ff18df621af94cfaebf0bd7"],["archives/2020/10/page/3/index.html","d895e6fadc26601ff844e2b9725efa33"],["archives/2020/11/index.html","376faa86995c843ecf3defea71280834"],["archives/2020/11/page/2/index.html","9c512e4f26002d4ab5bf4a44f421b5c5"],["archives/2020/index.html","4333a24e01399ba6dd4545443a23deac"],["archives/2020/page/2/index.html","4a8d3c0b1cd75a637ff18cd271c7a47d"],["archives/2020/page/3/index.html","98e06aa5be87eb79e7971a2a5e70a4b8"],["archives/2020/page/4/index.html","5f60d538d0368df1eb4729ecc1619d7a"],["archives/index.html","104dfd3debc824a53ce565b38127209e"],["archives/page/2/index.html","7fdc76dabddc32e8ed02df2373245d38"],["archives/page/3/index.html","148d2cd139e7e641273c495b4a914f77"],["archives/page/4/index.html","04673f1a26670a3d7e8ec172c8736152"],["assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["categories/c-关键字/index.html","ad9f7ea2b90d84062d4d8f59aee670c4"],["categories/index-1.html","da8cb311e61b798b055aca8c7f72d4b9"],["categories/index.html","2c6affaca4f18ef6e743bdd2880be03b"],["categories/leedcode/index.html","6567df4a748682f4b575c55af9b0c7ef"],["categories/linux/index.html","1fd66ca30dcd534496aa63e3934af2f4"],["categories/python环境问题/index.html","635b9637a8ed8f8b688ee15e7ee2e142"],["categories/优化/index.html","d2d09260d52f3be51d9b0a8ecdf3b1d8"],["categories/操作系统/index.html","2575f1ca32c1912742dd838c3bfa3a74"],["categories/操作系统开发/index.html","088ea3370ba5d0e2f613ff987c2fa42a"],["categories/数据库/index.html","78ac6c7268361b45024cb15ab9ed15b3"],["categories/数据结构/index.html","b3807b1db1e3f1e760e5f31a88fef9a7"],["categories/爬虫实战应用/index.html","96c8605177aba5aeb7f373675888f06a"],["categories/编程语言开发/index.html","c118b2db57880e725b1d654131cd6e0a"],["categories/计算机网络/index.html","5a5f1e1e89ea706cba0ec6f8fb9dfae8"],["categories/面试/index.html","e78ca1391ab7793a228ac8d09e95a4c5"],["css/background.css","5bb9900d1bad9cb1e3fce454bc255d7f"],["css/index.css","6820a24dae33f2f98a11a1038eb0b48f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","50bc90520c686ea8500981de89985d49"],["img/bei1.jpg","60bfcaea92765d01bb04672083dac266"],["img/bei2.jpg","926a9ca3033eb9a0ed6aaf54ee66d4b3"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/qiao.jpg","e919f8fea62f9a9786ec9cf2ea72d1de"],["img/star.jpg","b0733874fc43bb9e495440990e0dfd27"],["index.html","348ec5610409ad3a365ef47e90ba0cb6"],["js/main.js","4898030387012f8af71563ef8353433a"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","6bebed368a1bbcb630dd146cefb103b7"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","64d1e1837ad1a585888f5d1e16c71f77"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["js/utils.js","f91ea1a86a5c45e344a24fb437642f36"],["live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["messageboard/index.html","20f73df70b5d78318473c633154c3798"],["page/2/index.html","a22348606cef8006d532d21aab2d514c"],["page/3/index.html","e5e0803e98571d7cc94189b0f457758f"],["page/4/index.html","0c3f7b017442d00c8f968eca57758aa9"],["posts/0/index.html","606dbf2f9753ad80c2bc05611b85c5c6"],["posts/14192/index.html","4eafb9519d0e9597ee91ee3f29c78dbe"],["posts/14686/index.html","f2aa8bf0120ffbd8982aecb89c4f5780"],["posts/15411/index.html","c966bd2cca7dfcaa4fb29208a94ecde8"],["posts/15731/index.html","f43fbdcb2c394ec6b21b3c6a5a7b1ab6"],["posts/16097/index.html","8b21da8b2f4c16fad0b9aa9e101782a0"],["posts/16107/index.html","1df594890aaecf593509cffe0176a78c"],["posts/16108/index.html","b6b5a820ab13a2ed584c9051bc078b79"],["posts/19586/index.html","0d7166cf8aaa45e703bbe578c504a0a7"],["posts/21911/index.html","53550f11bc30d89748dd95d9bb49e483"],["posts/23469/index.html","ea06406fa1c56b1d81f90a73af3e88ac"],["posts/23956/index.html","91f51303b8d73b42d68c798bd61de251"],["posts/24148/index.html","246f2205e302ea620fdab4ec08412d77"],["posts/24340/index.html","e8b75c4103b875c46db305f850c1e841"],["posts/24504/index.html","3a7da5d3778311342ed03a36a0575ffe"],["posts/25345/index.html","a7c4cff0ac62092755b5f9e86f6c51e5"],["posts/26821/index.html","8a0bb9f244eb43ab6295c4a596acf611"],["posts/32473/index.html","4fb56cf3ebce0a578f0f7136cfd3944b"],["posts/33723/index.html","cb798b4b881a1d0980c2b8a13a3576b1"],["posts/34955/index.html","a6020c0bcf0c0e5a2bb5b21ff6fa3787"],["posts/35949/index.html","d502e0958ee87c3ee411c61f49731e59"],["posts/39404/index.html","470e60c97a15803000e7f69edf71abfe"],["posts/39788/index.html","93f21a0ed2c4c4433b29a4d60e7119b3"],["posts/40133/index.html","feeacd3f3173d175b9d9da63d3ec9715"],["posts/40325/index.html","ed88bec0183b1de4572e00a9eeefb63c"],["posts/40917/index.html","8b7833febbfb62bc7ba14308e4b77e09"],["posts/42182/index.html","815e6f2c375382e5b7eeef52a60801bb"],["posts/47607/index.html","74d53d99a79bd98288baa52b0f44592d"],["posts/48539/index.html","3b4390e4ff2ba40ebbc7605ccf7e9dec"],["posts/50097/index.html","ba292a2603d3351cde5ceca6cc29442f"],["posts/53868/index.html","d7b5fb41fc8a40463b820017eddb24a1"],["posts/54839/index.html","812940008b4d3b0f32de10ccc79a2ec8"],["posts/59942/index.html","cde66a03d1429be26b3552027ecded4a"],["posts/60133/index.html","753c43bab7d20cd8b8b8afbf95216c89"],["posts/62607/index.html","0374f0ab180dfcb8a0eee91de215eb42"],["posts/63295/index.html","e069692cfe35b617ba210df86b8034e7"],["posts/63613/index.html","5ae43a001eb56931fb5b15c2fcf7c5b9"],["posts/7734/index.html","b1b90dfd88af1fd611ffe9376fe31d1a"],["tags/Data-Sturctures/index.html","1a4e2eb39657c2c89d135dc3ae652781"],["tags/acm专项练习/index.html","2db2365009629a1853ae55ff05d810e4"],["tags/apotheosis/index.html","722e2a530a6f23194798ab785b1a8dc3"],["tags/c/index.html","fefb3851c8e7c76a11b086956a11f99f"],["tags/index-1.html","c2d0001015d5348849f620a3ed434eff"],["tags/index.html","ec0d6b1f8deff3b52838ee231585ab95"],["tags/leedcode/index.html","273b62d63c315de3614d53938376012e"],["tags/linux/index.html","9c035733afde69ab6521fe141624daa1"],["tags/linxu/index.html","9fdbcebc1afb0d9fe1117dfe50b25f9a"],["tags/python/index.html","73cfea18263b649b8bed28021da89ebe"],["tags/though/index.html","66750eb713ce29a71c0d4f5e4f9e0438"],["tags/字符串序列/index.html","26dc82d10017c645fd5be8c2c970cf6f"],["tags/字符串系列-匹配算法合集/index.html","c3a7ad1ad08953a07b6527bbff3bf2fd"],["tags/字符串系列/index.html","353a58c3ccea90c9ecd758354d302930"],["tags/操作系统/index.html","738d9adf302d3b8ed53c602a22000950"],["tags/操作系统开发/index.html","0e26d9d2426c42726c0d65b4993dcc29"],["tags/数据库/index.html","ca4fb1dab6af2b75a477f405b974185c"],["tags/数据库高级/index.html","f95fb6b5d5bb16fde261c60b2fc5a36d"],["tags/数据结构/index.html","d185b9ba359084c195e586523183a236"],["tags/编程语言开发/index.html","6bcaa17347a7e560946d7d1221470835"],["tags/计算机网络/index.html","1fbd4eb5dd3010f0c5d2ceebc792ae36"],["tags/面试/index.html","754a664a4b2bb7f55faaf80def0f3bd9"]];
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







