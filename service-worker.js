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

var precacheConfig = [["404.html","c2ef0cd11d2696b9157ee92e2e912e04"],["archives/2020/09/index.html","e53f8f3036810e49621b79c1b172d9ad"],["archives/2020/10/index.html","0cc158dc2ad900349f8c6de5204cbf51"],["archives/2020/10/page/2/index.html","3996d58270910d7052333f60b679b09c"],["archives/2020/10/page/3/index.html","2aec4e5802e3f3f589637e8878881153"],["archives/2020/11/index.html","bc15a0650beb116522c3bf8197aeab74"],["archives/2020/11/page/2/index.html","a09854fe58bbfb6b9b3ec7393564b867"],["archives/2020/12/index.html","f92333112c22c5e5a099481b9eaaef5f"],["archives/2020/12/page/2/index.html","ce9e793002e49e1f3dfe619c122489d3"],["archives/2020/index.html","155d69d21eb9a6fa2714e368072581fb"],["archives/2020/page/2/index.html","fbe3185c62f15cd31b4af64d4f5f4d6c"],["archives/2020/page/3/index.html","b96293c027703420a283477166f8b9c6"],["archives/2020/page/4/index.html","2b29d1d5d8b9627d23a84b1a5c1562f7"],["archives/2020/page/5/index.html","eeda852a4babbe131dfe7166487d0eef"],["archives/2020/page/6/index.html","20b9891258d9cc38abf3b3262c7532c9"],["archives/2021/03/index.html","03a06053e16fd60d2fa424b0c29f8ded"],["archives/2021/index.html","529a7e3f6f057fe5c57cbb23b6cd4eae"],["archives/index.html","04503e9493ccfed2001f9a3dab55a6e5"],["archives/page/2/index.html","f46700a1155b7a5f3496f09a50bef30e"],["archives/page/3/index.html","8ecd2ddb758909b4a62b6ee4bf6c449a"],["archives/page/4/index.html","7b5f3f228e958439a24df564d3e2ddaa"],["archives/page/5/index.html","769ba80f343f39698f3814275f5ea20b"],["archives/page/6/index.html","94d695e5d3f4a0db4fe04f80250427c7"],["archives/page/7/index.html","d65f9d11050e5c616013811c662e00f4"],["assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["categories/STL库/index.html","204d34b7cd1217ec45ffd2c1e76edd6d"],["categories/c-关键字/index.html","5a2cb12a7d5728f6a2e27b883171f90c"],["categories/c-基础实战/index.html","3f893098d38d835d9f318c5c2702b0ce"],["categories/c/index.html","f304991e5f272f3c99fb7c5cb553ec44"],["categories/index-1.html","c8743258e8c270c954ff1e19d7604c19"],["categories/index.html","53cd319c7aaa2c1cc3eae26558e43325"],["categories/leedcode-链表/index.html","bb07ac892431941b65ae56c23abca25b"],["categories/leedcode/index.html","5d86167573191a2776f7a0fbdc0cc320"],["categories/linux/index.html","7bed743b240166f557e5b960d1a20bd8"],["categories/python环境问题/index.html","b996af900f3541fe60e36fe02974c7a1"],["categories/tree联系/index.html","7a2654d3dc00899f1edcd0c9ca98a741"],["categories/优化/index.html","ba683d3d0cb896a64a9d2de48d04eb5e"],["categories/大数据/index.html","18c386eaaaa1a2132d3085180a75dd0d"],["categories/操作系统/index.html","dac134c165474e1deeea50c6d6121af2"],["categories/操作系统开发/index.html","f6cfde71e4ebbc2aefbeb94859019d86"],["categories/数据库/index.html","3a69da953bbd366263c8ea49d8c9dc3b"],["categories/数据结构/index.html","334c1fbada1aac4c0c38d312f75031b0"],["categories/爬虫实战应用/index.html","5acda06409a65271498cd2ea4b6715a9"],["categories/算法/index.html","ae106baa9be1777470a011d3e1e115e4"],["categories/练习/index.html","a726f32075bcbd61bf98ce0b74c1c9f5"],["categories/编程语言开发/index.html","71d8e5516fe56301113d80f17783f9c9"],["categories/网络实战总结/index.html","dc23e94a2844e4cc0874e25ad02d7741"],["categories/补漏/index.html","8bf41ec0cb7da8e37b863d5d92a18894"],["categories/计算机网络/index.html","1a4d0eebc288bbfcbf31acb7feabd611"],["categories/面试/index.html","a7243a6bc380e1dad502338443b1a6eb"],["css/background.css","5bb9900d1bad9cb1e3fce454bc255d7f"],["css/index.css","6820a24dae33f2f98a11a1038eb0b48f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","50bc90520c686ea8500981de89985d49"],["img/bei1.jpg","60bfcaea92765d01bb04672083dac266"],["img/bei2.jpg","926a9ca3033eb9a0ed6aaf54ee66d4b3"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/qiao.jpg","e919f8fea62f9a9786ec9cf2ea72d1de"],["img/star.jpg","b0733874fc43bb9e495440990e0dfd27"],["index.html","ad77ea7ead93510f6a17ab97d4331857"],["js/main.js","4898030387012f8af71563ef8353433a"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","6bebed368a1bbcb630dd146cefb103b7"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","64d1e1837ad1a585888f5d1e16c71f77"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["js/utils.js","f91ea1a86a5c45e344a24fb437642f36"],["live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["messageboard/index.html","6d3e4ed64b21f6d461ef8a63d9cc8b7b"],["page/2/index.html","cc93d3e6f276aec84c65c25a75ac9d6b"],["page/3/index.html","2f3aba828f69f121ecb6734c6929c9b7"],["page/4/index.html","03e995cd38efb74f4095496fc9c85209"],["page/5/index.html","0550379916c559c09f08f696ad0b30cd"],["page/6/index.html","351c2dcaad5996c9c901ebec899f5773"],["page/7/index.html","224a3d4e466dd75a0da2566c41ecf836"],["posts/1/index.html","c9e20bf519719e0343a6cd0a678ba8e2"],["posts/14192/index.html","25d5d56ab3989cefe50ab7f08b1d0b79"],["posts/14686/index.html","69b19b4d9b20c7fb22d41d9884f7f5d4"],["posts/15411/index.html","0248e42a9f136011366f0ac54fe8df96"],["posts/15731/index.html","0b45b890f84b5b2ae5f139bb263ccad9"],["posts/16097/index.html","8d5daafc203ce1c1bad9e8b10af7492f"],["posts/16107/index.html","95b0832a9f3ae0e27f9ebd8542646107"],["posts/16108/index.html","94f877b9dc08414a7c53eed59c9002dd"],["posts/17385/index.html","d420ffde6ef13834d01bab0c6cf177b3"],["posts/19586/index.html","1f3e24407db1dd08a9d9f0521c042317"],["posts/19628/index.html","3bdc8b7d7870de00b20f65295599c35d"],["posts/21322/index.html","2034c81409d853949e2ad1f9e219628f"],["posts/21795/index.html","93454911cf1f89f1aaeeab19d3fbb408"],["posts/21911/index.html","5100c380c59c8088885e90afbbbc64fb"],["posts/23469/index.html","383bc6dfcffa6df206d3c73ca3a70e05"],["posts/23956/index.html","bfe40b79c54b1253b90cc370f911a3cd"],["posts/24148/index.html","c57e0b4b86e8d75b13c371b3a7ba068d"],["posts/24340/index.html","53d325f147906d16d50350f49658ab0a"],["posts/24504/index.html","b66ede9f8d681eed8624d71360924e0e"],["posts/24772/index.html","e08efa2929184c10d3df8875cc94952b"],["posts/25345/index.html","6abd4ffd45264b0448f0df503d57f7c9"],["posts/26821/index.html","0219b0f8a49446b0f162eeaddb63e59c"],["posts/28273/index.html","434edbbc21027bf1ec400c3135752763"],["posts/31131/index.html","0868fdae431e4b4ede12aeeeb9941d1f"],["posts/32473/index.html","c8de371d8480037af37ef1622646570d"],["posts/33531/index.html","6e47540fdf702398f022a782c9f47e74"],["posts/33723/index.html","af0c688345723db50bc5abee49957452"],["posts/34955/index.html","45035b44cd0c0d70e9bde797e3be3e38"],["posts/35949/index.html","e8fb1344d01a94666fdb54eabc6ea61e"],["posts/37850/index.html","4a796ff283bf4605221606d3b701e011"],["posts/39404/index.html","226fd9886f1d0182db050acc78ac7d44"],["posts/39788/index.html","0cb3c2a97c87924b179495b6bb1354b6"],["posts/40133/index.html","2e1804363bd650816d3c3e7b294769d6"],["posts/40290/index.html","a43dbb43672ec4ab0f60ba1e9f6d189e"],["posts/40325/index.html","bae99883b32720e15659141a6f9d69bb"],["posts/40917/index.html","4ffdf5cc4fe85086cb00d9f38ec9356d"],["posts/42182/index.html","592dc84aa5277b94b5dfa1a303088315"],["posts/43760/index.html","18a1ec699b772ffda273ce8076ca5da5"],["posts/43952/index.html","5101db02a2c41b19e1a582bb6074c47d"],["posts/44296/index.html","f05e4e85ed129ddb510e0dad67a3d52f"],["posts/4515/index.html","d9583fcc2a35729d16b782b9eb618fb8"],["posts/4524/index.html","8eaeff3c3c29d3c7f89805f9ac91504c"],["posts/47607/index.html","639bb8481123e7dcbc4894ad85540e1b"],["posts/48539/index.html","8e841f33edecd7f1befb26132a4bcc21"],["posts/49861/index.html","a03bfd1e447be9d04a9eece41bba8c95"],["posts/49877/index.html","be22920bed397d51e506d5a5f80ed9ec"],["posts/50097/index.html","556e7c98d59e1192be91a653112447c4"],["posts/53699/index.html","1d9c2bf762a0c6979d8ab19855d2c5e1"],["posts/53868/index.html","85a6bc7cd4387da30ef18b3dee6f8717"],["posts/54839/index.html","ce0c3f32e16eba98eaf69688f8db7ffe"],["posts/55244/index.html","e340ed6316eccfd5168b0e9ceed8eab8"],["posts/598/index.html","95ea9a739c656a9832a50644bae82111"],["posts/59942/index.html","0ecb5466e6e131e70fa2f346be109d4f"],["posts/60133/index.html","f17b12feb84425e9fc7efd968317adb7"],["posts/60234/index.html","6ca61b70e5519877e799c84095b3e004"],["posts/62607/index.html","c91e0f96b92878d34d845567b298d32e"],["posts/63295/index.html","99b3b9e27b8098f01db78f2705077c1a"],["posts/63613/index.html","431031a8eb714c22ad1f2a52fd4b3a14"],["posts/65250/index.html","2d8a51db614dec4953cf6676b6b35ce5"],["posts/7734/index.html","a582f05ec57b737bd41c96a890026839"],["tags/Data-Sturctures/index.html","6b604224c9f3f36f158ad4a141320645"],["tags/STL库/index.html","194294a07bd5fab79be2d0479a0a9666"],["tags/acm专项练习/index.html","20b42f2c8f65ce407997ec469a32f62c"],["tags/apotheosis/index.html","38e9b6b8e15414f0a4ed3b2bb0fdcf0b"],["tags/c-基础实战/index.html","14aeecb3c215ffa772631fd835a09568"],["tags/c/index.html","d628fba2414f28ec30e5a6ca41db355b"],["tags/index-1.html","8c639ef7400009e91d72d58dda12450c"],["tags/index.html","f1f075bd5184ca982e967997baaa8dc6"],["tags/leedcode/index.html","173ec97c274c86516ac23465606ea549"],["tags/linux/index.html","990f6701ead51bb94e0ce07d6b43ebda"],["tags/linxu/index.html","7dd3c871880c2f1a03118214aa7bd535"],["tags/python/index.html","0ccf8cec5c0d89c6a584b208f1688e4e"],["tags/though/index.html","2ba4819e0f972827036d9fd566c8fdae"],["tags/tree练习/index.html","42ea68ea9673b6941b7dc4c007ea5b63"],["tags/大数据/index.html","1cbb4e2826b31de19daa03cef9f36edd"],["tags/字符串序列/index.html","cd3645412096d7682eb38647e5c4d743"],["tags/字符串系列-匹配算法合集/index.html","5dd1bfa649777f287e178b56dbf008ba"],["tags/字符串系列/index.html","3714caba8c150cdd57413b5848ab5b09"],["tags/操作系统/index.html","d8c502e4564ff1df33ce9d6bde93ec2c"],["tags/操作系统开发/index.html","0858a75e3c9028248ac3567c458f34a5"],["tags/数据库/index.html","ef0bf3b9c02759f4d609fde108775491"],["tags/数据库高级/index.html","9ffc4c350a38af0b38d815b1006bfc75"],["tags/数据结构/index.html","f12f53e243ff5628c7eded6ea0036a37"],["tags/算法/index.html","c34dc2abbac5d34b37f8491b1a33e642"],["tags/练习/index.html","984c4541e3e941804a87212b16a48226"],["tags/编程语言开发/index.html","856386cd4fde8e0129d6679209034821"],["tags/补漏/index.html","563f579e725f6c9f11ef656be483f434"],["tags/计算机网络/index.html","166034de3e2b1cfaa94aafdb3c34d287"],["tags/面试/index.html","71dec5c01a44a0fab3d58f2f55b4964f"]];
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







