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

var precacheConfig = [["404.html","6f0698179473be15d7bd19ef3da3f139"],["archives/2020/09/index.html","e84f786b8f3dfd0b281e0c7351e40bdd"],["archives/2020/10/index.html","ae99d5936e2ccaf4ea42d0ff5c50fab7"],["archives/2020/10/page/2/index.html","18c0df8f54910e64f808f90ecf49fd0f"],["archives/2020/10/page/3/index.html","2870d1463664db1e6a8b9e93ece5df56"],["archives/2020/11/index.html","400a56b134c332014b75fb6f856e32bf"],["archives/2020/11/page/2/index.html","e12f047f013247835a4c74cfec87050f"],["archives/2020/index.html","1be7139237a49ed71f948ceb9996d7fd"],["archives/2020/page/2/index.html","daadaa56c7742365a2711b041ad4088b"],["archives/2020/page/3/index.html","1ff58fc3f244ca848a82d76480025c0b"],["archives/2020/page/4/index.html","c4c693797ea22bc949ed96fe2e58cd74"],["archives/2020/page/5/index.html","b517dea18062331274398012f03ae811"],["archives/index.html","51fc533d13d0f102b15cad7a27ec8b06"],["archives/page/2/index.html","dcaf06cc26c3aad7b1e689f27a5db379"],["archives/page/3/index.html","f7e78f1bcf33ec33a523d2098c8b2e08"],["archives/page/4/index.html","b7e29f8c10f6fbf42ccb2b70764d9a27"],["archives/page/5/index.html","d4d0327121978f5e9a86478f8d79cf9c"],["assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["categories/c-关键字/index.html","b3228d959a715503b239e6035bc2c1e1"],["categories/c-基础实战/index.html","edb0420575ef3cbea194932501490ec1"],["categories/index-1.html","5544c589a4358d30811c55a88f919a55"],["categories/index.html","487ac4e84a4209bd5adc24d812648cad"],["categories/leedcode-链表/index.html","de81fa09ad92e103380fb7cb5b19b88b"],["categories/linux/index.html","a910b7329e82ef8a8f482049878d5154"],["categories/python环境问题/index.html","56d5539cf65f5ebb7ff4e30f492da0f5"],["categories/tree联系/index.html","c97b5fa695111b6a1a201c37664aa48f"],["categories/优化/index.html","0b106865e223f085a8f8ff4b14cd4ab3"],["categories/操作系统/index.html","fcc7d30830f09f38eb7b629a1da7afa2"],["categories/操作系统开发/index.html","3e2ae91fac9753fec5a82c3f340c18b9"],["categories/数据库/index.html","c32615d3d9ff2c95d455d1d47bac2931"],["categories/数据结构/index.html","cab41d65129312aaed6920fbc8edc5f0"],["categories/爬虫实战应用/index.html","a873fe227881c723f15dc2605d0193b8"],["categories/编程语言开发/index.html","67566ecfe2fab72d97ce26b0f9faa71e"],["categories/网络实战总结/index.html","2cf9515ff49316dc314c3eeef1490982"],["categories/计算机网络/index.html","1823604cd6a642a3c524f1da27295f84"],["categories/面试/index.html","5b38656e3f7b9a0713d32745445f2075"],["css/background.css","5bb9900d1bad9cb1e3fce454bc255d7f"],["css/index.css","6820a24dae33f2f98a11a1038eb0b48f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","50bc90520c686ea8500981de89985d49"],["img/bei1.jpg","60bfcaea92765d01bb04672083dac266"],["img/bei2.jpg","926a9ca3033eb9a0ed6aaf54ee66d4b3"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/qiao.jpg","e919f8fea62f9a9786ec9cf2ea72d1de"],["img/star.jpg","b0733874fc43bb9e495440990e0dfd27"],["index.html","0676b7a029ae2d630fdaa8be77159bc9"],["js/main.js","4898030387012f8af71563ef8353433a"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","6bebed368a1bbcb630dd146cefb103b7"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","64d1e1837ad1a585888f5d1e16c71f77"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["js/utils.js","f91ea1a86a5c45e344a24fb437642f36"],["live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["messageboard/index.html","580aaae22a972c393fcbc9d419a20f69"],["page/2/index.html","f223c40318e37a36733235ccbdd3eb3f"],["page/3/index.html","75b4307b3ba5106291e9e41e11d3bb67"],["page/4/index.html","0d0f237907ca64eb79606ad4e5df442e"],["page/5/index.html","519754ba712333483524b7b464f75be5"],["posts/1/index.html","b1c75cc6d5f5537fe79ee8fbb2435b2f"],["posts/14192/index.html","510f3b9db8ba7bfdadccf4ed81b3c3da"],["posts/14686/index.html","2f9a08e22bb7273a8a2e6c0d925f3f99"],["posts/15411/index.html","da7e1419a83a5d2d03ab2f9d0e5452f6"],["posts/15731/index.html","5706bf35603c59c937647e08b43e5c8f"],["posts/16097/index.html","fae8accd9b248c3935107890d86df420"],["posts/16107/index.html","03771962ac3ef58f3882d2b311b5480d"],["posts/16108/index.html","e10a3af7ad0e9513e398460746ee57c7"],["posts/19586/index.html","585bcba9138c4e7c6f21bcfeead7686e"],["posts/19628/index.html","cc813c04a3777b5d811d85c3d41b9eb6"],["posts/21911/index.html","7a04a0d643e785b4f93b68396acc89cb"],["posts/23469/index.html","248840f19b06a9539377aa8c724e31cc"],["posts/23956/index.html","649649a5442dd7f857227164d0b3c347"],["posts/24148/index.html","1994faa7964c67f1e964c4997df0cfde"],["posts/24340/index.html","8475a453f25637933a73ac63bc59ddde"],["posts/24504/index.html","2b572051556429a927dcf92a379533d8"],["posts/25345/index.html","72a80f10ce057d91543ded94386153ab"],["posts/26821/index.html","7b22a52c691da732fbe4036ef97ddde5"],["posts/31131/index.html","35676d4a480574f6818c05283596fc3c"],["posts/32473/index.html","8b0b9eb70aa4b4be8a588db75ec3fea1"],["posts/33723/index.html","fe7bc3c567a07fa0157d88908eff0c85"],["posts/34955/index.html","e9557800d9e61b138c31cb2413cf5b68"],["posts/35949/index.html","1e3a3109c8812bfbe3d1bb7a85be77c9"],["posts/39404/index.html","7c84e57cd771164477b50331a25e7550"],["posts/39788/index.html","2677e569522a216b15b485d3158fb922"],["posts/40133/index.html","ae63c1d2f22244da08235858190a24cc"],["posts/40325/index.html","0de883221ad2ff5d95e96106542ecbc3"],["posts/40917/index.html","e2cd7bb150f313621825807a6ae5c189"],["posts/42182/index.html","7e3bbc9d0a1703b4a4186ef68d0edd85"],["posts/43952/index.html","e05b6cde0b8870426fd026c44f36cef0"],["posts/47607/index.html","41af397d2b7b2af4884c1789ef909401"],["posts/48539/index.html","a665280e776c4178b9295c3801dbcb48"],["posts/50097/index.html","f125a600791d08758809c6733ad53a9f"],["posts/53868/index.html","d6bff48a1b7396b1f9b9624e29a48376"],["posts/54839/index.html","9962edfab5aef8ecc95b4ec09eac5c7f"],["posts/59942/index.html","f6ce6403f59602d8ce0a8b627a0d22c2"],["posts/60133/index.html","beda19b4383144fd5f6b7f267bab528e"],["posts/62607/index.html","2166e675f6d360727658a20b9b576966"],["posts/63295/index.html","0cda552e08d6ae3a04aa8fadd563dd57"],["posts/63613/index.html","a1ede94e92a7c1948f35385c13b1702c"],["posts/7734/index.html","d85fa4e869628e1713eed8e837047355"],["tags/Data-Sturctures/index.html","18f74e70cb7a355e30629ecc3114714a"],["tags/acm专项练习/index.html","7ea4bcf43eb6db75bd5be750bdd8ad4a"],["tags/apotheosis/index.html","78912da41ac4701080c1eb8d1d05bcf7"],["tags/c-基础实战/index.html","277d7f5fed75955b97645ca8036a8ab5"],["tags/c/index.html","a604a14ad23f3822d3cdb1a60a942bfd"],["tags/index-1.html","645fba4eac30f65123f092bf198bbdd3"],["tags/index.html","02001be0c198398f0b0481b4dcfea341"],["tags/leedcode/index.html","adb68c5da839d5e8dee86ea7a8d4b591"],["tags/linux/index.html","d8eafbf54d27f4e9b947bc5705e58c47"],["tags/linxu/index.html","204dd21516444c94c03caadb0df1f308"],["tags/python/index.html","058b437960c9f11952c196acf9e7a8c3"],["tags/though/index.html","67d1cc5acc825053f84b22c95693732c"],["tags/tree练习/index.html","742889da9f88427c4816632583f70b2b"],["tags/字符串序列/index.html","eeccfb9c54826c6ffdcc3ba7aed15c13"],["tags/字符串系列-匹配算法合集/index.html","6eebedf988eb3a63307c561b2bee5b7f"],["tags/字符串系列/index.html","cb7ed4b04235b650d49ed01a57485ff9"],["tags/操作系统/index.html","38c13a0b0c882a4f801131b0c940f5d2"],["tags/操作系统开发/index.html","3e229630e7c2a7e68062e596c5483088"],["tags/数据库/index.html","218b1af9b48a24062e740c1d8b940888"],["tags/数据库高级/index.html","7cac9b73af6eb771c7cd8332965b2447"],["tags/数据结构/index.html","635fb5f721fea3957ccf92c5f3e1c4f6"],["tags/编程语言开发/index.html","276ffeac46cab5334a5461feb2c1445e"],["tags/计算机网络/index.html","08e1fa161802a4754aa674b2010af8d6"],["tags/面试/index.html","8960b3c0448a26a527d4ddfb0ae20950"]];
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







