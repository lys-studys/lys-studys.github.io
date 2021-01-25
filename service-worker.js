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

var precacheConfig = [["404.html","dc30ebd20b35681da84cbae8c40171ea"],["archives/2020/09/index.html","2f5ba2e61d25694357a6e88d60e86384"],["archives/2020/10/index.html","9bdcd7710057f5d776dec4edffb36435"],["archives/2020/10/page/2/index.html","a60a3fc7e9ec6004c52c7e7b51efee66"],["archives/2020/10/page/3/index.html","1294da68b16ba5f01e7b5f8bda13bb01"],["archives/2020/11/index.html","a578ec80e0a0669cd1c2657fecc4cbb3"],["archives/2020/11/page/2/index.html","62adbfe4c3958557a1da62a44d59747f"],["archives/2020/12/index.html","5d0a58d084485be53d3e9b1ac929abd2"],["archives/2020/12/page/2/index.html","410b5508679e7cd2266ab49072413e6f"],["archives/2020/index.html","d294b304d9a34b8903a3be455b2562e5"],["archives/2020/page/2/index.html","40beb40d3e66275c50c36bb094be705c"],["archives/2020/page/3/index.html","be5e03003944b02bf7b743460fa04aa0"],["archives/2020/page/4/index.html","22890bc48136c9f551fe2557bd633079"],["archives/2020/page/5/index.html","5aede42800bde82e3921e4781994a7e1"],["archives/2020/page/6/index.html","c0de4df8d898ce05bd382128c4c9256f"],["archives/index.html","fb5b94cb6a92654868daeab633f4ccb0"],["archives/page/2/index.html","f7dea6a9afb7253b6ed874d72cbc2cc8"],["archives/page/3/index.html","f39f86f1cd4b18230741b2d0d5203f4f"],["archives/page/4/index.html","f244656423a9889d6fbb0b2dcf340d2d"],["archives/page/5/index.html","8467ce5a6ecee90c77cbc7b780a51369"],["archives/page/6/index.html","93c1d06099d9b819b79194f41f606991"],["assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["categories/STL库/index.html","cde86e0bdcc592080d89c250a757aca0"],["categories/c-关键字/index.html","ddc2eceab156e0c2bd69a017f1ceb7f2"],["categories/c-基础实战/index.html","c10839330b2912e59ac0099cc13cbd06"],["categories/c/index.html","385fa32aa592ee2cf0c519edb68d681d"],["categories/index-1.html","7c764117f078726293e172b8c87dda9c"],["categories/index.html","3ecd198459021f04b4ac338f159ec2de"],["categories/leedcode-链表/index.html","de92d8482d4be2715b1e32b44b171174"],["categories/leedcode/index.html","195e671baa2681ac8f63fdd181e8b0c0"],["categories/linux/index.html","7746c86230e3460da2e06e58d8978c9f"],["categories/python环境问题/index.html","ed9198cadd01654aa1649afa7220180c"],["categories/tree联系/index.html","1443a436fc137fb928ee75fffffe984d"],["categories/优化/index.html","fd33d8577aac01b501c93ff685c16ec4"],["categories/大数据/index.html","00afe533bd2e72ed8469451b7fbd3493"],["categories/操作系统/index.html","217dbce6ed16846a68d7d0b3b5c5225d"],["categories/操作系统开发/index.html","ebc08810da6c577a92f6e8633c3cf17a"],["categories/数据库/index.html","9c76e260e794f83cc5e880a8db1dc30c"],["categories/数据结构/index.html","465e04c1d43b188cf075599eebbfd350"],["categories/爬虫实战应用/index.html","d7b27245c8d5a2d066404078266f46e1"],["categories/算法/index.html","b0b011e7c0b9a8f9e74ba33bc77aa777"],["categories/练习/index.html","23d8c2a0c881b916b7f50728ade1463b"],["categories/编程语言开发/index.html","494bd03a2138566700e96456c7de8a1f"],["categories/网络实战总结/index.html","23760938a445753392016a3d8e2bf610"],["categories/补漏/index.html","ace195aac54afdaaaddd13d6a7557479"],["categories/计算机网络/index.html","4bbba8e58f59791f2c0228e766af2399"],["categories/面试/index.html","74d97de63d4001f7bbdbfeef7945ac1d"],["css/background.css","5bb9900d1bad9cb1e3fce454bc255d7f"],["css/index.css","6820a24dae33f2f98a11a1038eb0b48f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","50bc90520c686ea8500981de89985d49"],["img/bei1.jpg","60bfcaea92765d01bb04672083dac266"],["img/bei2.jpg","926a9ca3033eb9a0ed6aaf54ee66d4b3"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/qiao.jpg","e919f8fea62f9a9786ec9cf2ea72d1de"],["img/star.jpg","b0733874fc43bb9e495440990e0dfd27"],["index.html","e7de8fa867f31606df20b588217feabe"],["js/main.js","4898030387012f8af71563ef8353433a"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","6bebed368a1bbcb630dd146cefb103b7"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","64d1e1837ad1a585888f5d1e16c71f77"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["js/utils.js","f91ea1a86a5c45e344a24fb437642f36"],["live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["messageboard/index.html","26df3c37711fc0abef0d6ef9c878426f"],["page/2/index.html","cc608f7a2f38e7291fa05bf80ba102dc"],["page/3/index.html","e6be10fb5f45630a2ac5b3c4cac92b46"],["page/4/index.html","8611063448062d1ebf42c0fe52fd9070"],["page/5/index.html","401b2e15d260471296755da7fe83dc11"],["page/6/index.html","d8d1a619697ba209d4a757e3d53975cd"],["posts/1/index.html","031e9864a6acb3bc3299de1aed1f302a"],["posts/14192/index.html","f115261a070e45b2515b1e1db2efb0f8"],["posts/14686/index.html","de88f3d69569779b1da883a4d6bdb66b"],["posts/15411/index.html","df4b48fd91f7847742e9dd3e36863961"],["posts/15731/index.html","a20e6f8b060a9e0a0daaece4ae243284"],["posts/16097/index.html","e298b82f322d035e2808b8187fb28474"],["posts/16107/index.html","04558951bffeea01b1f9ce306c5a08ac"],["posts/16108/index.html","dda7f30e32e3a8b2e78424805d7a0e52"],["posts/17385/index.html","46cf7229e8ef9b25f34e54be34515a59"],["posts/19586/index.html","5209a775139f2248c5673c404f0bac62"],["posts/19628/index.html","af1ae70b4f8e989e8e93c99e6012f88b"],["posts/21322/index.html","8cd3bc5ec5e7f537e78edfa2f585d7de"],["posts/21795/index.html","becb44f780e025606e5b4bc9774fbe31"],["posts/21911/index.html","3b7a2cf0a9378c7982e6fc8960a1764d"],["posts/23469/index.html","bcf3889fceb431f5ce01eb449795f2f2"],["posts/23956/index.html","472ff70c8875636eedf48c8fa218f485"],["posts/24148/index.html","431e1fb21c82c316592d9504b788daa8"],["posts/24340/index.html","31900993e053a07641cc0929e6f8fce0"],["posts/24504/index.html","9271b5592bd47344eada79f0109c310e"],["posts/24772/index.html","4a3430357a86b8f2448ef98059907a0a"],["posts/25345/index.html","6cf51800bce4dcb09eec08313b0f7c46"],["posts/26821/index.html","0a41b7441c97787e4349e6c747918689"],["posts/28273/index.html","a7a5a99c051796f079d085072b4e4ab7"],["posts/31131/index.html","ea97432f239eda4c0f6e24b6da84846a"],["posts/32473/index.html","6e6e81ec34bccca122c2d776bcb71144"],["posts/33531/index.html","109d1f3d487b638703c3a900f3a4a25a"],["posts/33723/index.html","2f8ee1f284fa81efa385c886bec8b957"],["posts/34955/index.html","d122ec4c96384ffebe27889700b43e96"],["posts/35949/index.html","1aa275af3f5cc06c111246e91ab98ca9"],["posts/37850/index.html","34fe8688bdd702899cc8c893e3b8f86d"],["posts/39404/index.html","df84d34346f7e908f11cb0b1ff42f7f4"],["posts/39788/index.html","5e131ed29a6e772c6b8f922b1bed303d"],["posts/40133/index.html","daa8cea80f629a52d5a2562b4fc9dba0"],["posts/40290/index.html","332fea6c4fd192627362a29f64044a77"],["posts/40325/index.html","64c08fdb1fa275650e6d71a215de90cd"],["posts/40917/index.html","bc698acd7898507958e900efdda2e039"],["posts/42182/index.html","e6dda23ca91a6a2f24f0880d406235f5"],["posts/43760/index.html","b7384414f232c928a72d3f67827b40f3"],["posts/43952/index.html","3df35fea036f50f67c7c9d06ce353d30"],["posts/44296/index.html","73d4584d00b06c57b3c98100fb611bed"],["posts/4515/index.html","ffb176d88c7beb3953400d0216cea92b"],["posts/4524/index.html","c18f8b3367dc55fadec943965c543c77"],["posts/47607/index.html","105dfb420da7d8a077ec6e5376562157"],["posts/48539/index.html","535bf145a57c7e75d10f921cf14819a0"],["posts/49861/index.html","0e2588fe1fa943f64a4b00e4ce45a6f4"],["posts/49877/index.html","d96952538d8c12ddd1900819be5cf0cd"],["posts/50097/index.html","6ac5ca55d5c7082293b28c9d4510a07c"],["posts/53868/index.html","70f80b90e3888bdbf58ce7194ae928cf"],["posts/54839/index.html","0b4b50a33b704ceb2205956f73f231af"],["posts/55244/index.html","bac92add0d4856c32f2294e868e61809"],["posts/598/index.html","a074da7a6f286c945366a379872abda6"],["posts/59942/index.html","5b5261a92df6c68eb27a6ad3081d3e75"],["posts/60133/index.html","6468daf0564445c9ee89896bbbf40f6a"],["posts/60234/index.html","aa0a0fa7e38978a810ad8bf50fb1f85f"],["posts/62607/index.html","d0cf690bb6a1551c03b611e365aa51e0"],["posts/63295/index.html","37d1521bf95cbb0b30ca03e37aebf473"],["posts/63613/index.html","2da544498987f7206c367b2555772e4d"],["posts/7734/index.html","9f89f8b706626d082829d8fbfe792ca2"],["tags/Data-Sturctures/index.html","a06be89fa1f9f8e7db6844870ceb9066"],["tags/STL库/index.html","5cb353c79c77d7cd74280786195c0dd0"],["tags/acm专项练习/index.html","46a541fd1c463796a5e8fd8d7b16d806"],["tags/apotheosis/index.html","e69ae05854657866f8b659659bbdc543"],["tags/c-基础实战/index.html","61c9f3e7868de22632c50c7c0ec0c4ec"],["tags/c/index.html","2e487ba4030ef79d83b7034a0f3f5019"],["tags/index-1.html","d667336c5fad9b7d52b3390cf44292b3"],["tags/index.html","25445271a47e722bbd26066482b0cfbd"],["tags/leedcode/index.html","df403503002a0f4169029a64393f3e4e"],["tags/linux/index.html","95ac585aaf76d05e81fe07c3117e4bb2"],["tags/linxu/index.html","437cbbbee265e42b55decba8c9394866"],["tags/python/index.html","779543c26753cd958e88eca6b5cc2597"],["tags/though/index.html","3a508eb7fbccecbcc46939b2c87cdb1b"],["tags/tree练习/index.html","74d0d818bdf90a06b1d942dc34ac6b80"],["tags/大数据/index.html","b681f37d3e0ba084def1cf328b94efac"],["tags/字符串序列/index.html","f9f40d8d152c3122b21cb7b66db6824a"],["tags/字符串系列-匹配算法合集/index.html","74379669bd3393656645a383c3e698eb"],["tags/字符串系列/index.html","ad70f12bbd95e947ea432cbcfc343937"],["tags/操作系统/index.html","4784a9c93d6982d43ee5d05013c6a566"],["tags/操作系统开发/index.html","41f35f3f7d2e5390d214becb37e08e63"],["tags/数据库/index.html","656c170b6cd7598391e1cb79d023e3b8"],["tags/数据库高级/index.html","d1ee71a5430b6761e24a0a8480803dc2"],["tags/数据结构/index.html","8c6b259a39802b1e45d343a5408de9c9"],["tags/算法/index.html","a4d7948196d6dc604c798037d01c5084"],["tags/练习/index.html","2caef30eec876a2771e50c56cf2c0798"],["tags/编程语言开发/index.html","d51418e5e6bde5eafe1b936e9910a64f"],["tags/补漏/index.html","55f74bd78331d004a32e1dba47651973"],["tags/计算机网络/index.html","c8cf3ff4db65daf8fa5f5b75ff914437"],["tags/面试/index.html","b8ce4e9a0dc8308bd0e2db59881f6ffb"]];
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







