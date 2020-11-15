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

var precacheConfig = [["404.html","10c06c7d261bfd4dc7d4a0c02fa85b3f"],["archives/2020/09/index.html","bda723378786aeb513258a96cdd3650d"],["archives/2020/10/index.html","ddf45e526f3e832b0becd508d72e9d45"],["archives/2020/10/page/2/index.html","f50913a01150ed97cec8699dec691490"],["archives/2020/10/page/3/index.html","8504b943e84b03a85d85e05f1728ac34"],["archives/2020/11/index.html","8614007886d6c280fba1b06aad87f7fc"],["archives/2020/11/page/2/index.html","eb89c29f6415f0de45e89cdc4653f7a3"],["archives/2020/index.html","ba51480cfd3ee02b510bee9b94585823"],["archives/2020/page/2/index.html","61eaa7042ecf2d38bdabea9ddb29fea2"],["archives/2020/page/3/index.html","fedc0c1fc09bb86c1f5e432c4101bd1a"],["archives/2020/page/4/index.html","ba1de28d7993f185c3753555ed096fa8"],["archives/index.html","fee1a97d8d197b57e675bfa61b8e5638"],["archives/page/2/index.html","e7d9abfacd4377eaae87250d2b5faa17"],["archives/page/3/index.html","f3e0e12268da2cab949a17eb6b26f0c7"],["archives/page/4/index.html","e6d04cf054663faa61f7c314a154e529"],["assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["categories/c-关键字/index.html","c30959a98e7215085b3ba2fd2e02792a"],["categories/c-基础实战/index.html","3f70b663ad380cf58da6e75dcddc539e"],["categories/index-1.html","95251f4d820ed68c9eabeeda4e0a764b"],["categories/index.html","e9b210a997aeaeb93120729adf0b2694"],["categories/leedcode-链表/index.html","eb075736ace4fcf8528960d0a38505ba"],["categories/linux/index.html","61ee5de6de3041d8ffa39a056c943b12"],["categories/python环境问题/index.html","e253e6bb36d5b4494d813f3d5b7cea67"],["categories/优化/index.html","5462baff534be44582871871d1fb5a0e"],["categories/操作系统/index.html","73c111fe709dfd2d56540dd3fd9b63eb"],["categories/操作系统开发/index.html","aecf148ca5a062ea2163157673c5ee26"],["categories/数据库/index.html","88df2ee0106bc6f9c74decafef74efcb"],["categories/数据结构/index.html","d241db101ba44768e11b0a44c6ed62b9"],["categories/爬虫实战应用/index.html","ab3a6672f03e681c4353d28e7c1bfc90"],["categories/编程语言开发/index.html","4b50f7635edc991685eb7967a65158d9"],["categories/网络实战总结/index.html","eb99331adadef1c50d5d7e4033c49eb1"],["categories/计算机网络/index.html","c4e39b5e739b15502899a23e4dbff294"],["categories/面试/index.html","3524e2636bb2940d31e249ff14ef4cc3"],["css/background.css","5bb9900d1bad9cb1e3fce454bc255d7f"],["css/index.css","6820a24dae33f2f98a11a1038eb0b48f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","50bc90520c686ea8500981de89985d49"],["img/bei1.jpg","60bfcaea92765d01bb04672083dac266"],["img/bei2.jpg","926a9ca3033eb9a0ed6aaf54ee66d4b3"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/qiao.jpg","e919f8fea62f9a9786ec9cf2ea72d1de"],["img/star.jpg","b0733874fc43bb9e495440990e0dfd27"],["index.html","890125d0004f707cde1b61864cb3423e"],["js/main.js","4898030387012f8af71563ef8353433a"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","6bebed368a1bbcb630dd146cefb103b7"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","64d1e1837ad1a585888f5d1e16c71f77"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["js/utils.js","f91ea1a86a5c45e344a24fb437642f36"],["live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["messageboard/index.html","8ff1c50d017648353b3854678f34affd"],["page/2/index.html","5eb1a32f8a90e2d68aa710ed467e319a"],["page/3/index.html","6950090b66a69cb4b1a84d1a58f8c20b"],["page/4/index.html","a040b1349a2653c05c60da5d49d8f43f"],["posts/1/index.html","742d5e94e6d899955032ab73aa9ea9df"],["posts/14192/index.html","c837c66606e98035470842385a6b467e"],["posts/14686/index.html","3cfe5e8517397166882fd23534c849fc"],["posts/15411/index.html","9b48e8e76beaed6753cd82048db1b326"],["posts/15731/index.html","f7d58a6755f5fd8f1fb160099a3f19f6"],["posts/16097/index.html","a75292e399793b87f82fee67eb410257"],["posts/16107/index.html","1d82f01136ac14a953a02f91f788aa14"],["posts/16108/index.html","921d33f69420b4b1199fd898a8d58290"],["posts/19586/index.html","76db13117f9cb0b0404d6d388cb05335"],["posts/19628/index.html","efe476d1738c9f10b832598c04b2c368"],["posts/21911/index.html","7745b96f4331a092f8aeafbbbbb246d7"],["posts/23469/index.html","68cb9097ee2c36c7843e5bbd654d276b"],["posts/23956/index.html","e1444c53db7cf52bb8c7d021ca1d52fc"],["posts/24148/index.html","1d7db94ace26f1ea5dff4ee5acb53421"],["posts/24340/index.html","461c1b2aa4df6fba623eb3688a5ea446"],["posts/24504/index.html","52024086c1d86df87375537f34ee8780"],["posts/25345/index.html","b39ce07667e28cb98637816ed12c8445"],["posts/26821/index.html","bc40ea0e137427ca61b8b9933027fdc2"],["posts/32473/index.html","f9bda4c8f504f51e9a3767ddd9bcb500"],["posts/33723/index.html","5573f47c1ceb1dba828121140cf2982d"],["posts/34955/index.html","81d6356a8574c1df5d98758d64580a82"],["posts/35949/index.html","8eb9d1335409285f6dac3ad6648b0f3b"],["posts/39404/index.html","8fde8c5f4bf891eb730524bff0c90a8d"],["posts/39788/index.html","f7e8a1f39778ac62955dc078ed6851af"],["posts/40133/index.html","3e452886f823c63959433cf8d4302e2a"],["posts/40325/index.html","bcda380c8100bb14ca2a16353ebac9a5"],["posts/40917/index.html","850f774faa1c101c13e4dba577a5a2b3"],["posts/42182/index.html","4cfd7deefaec60500a62d86c8087c090"],["posts/43952/index.html","0ea397fd86bea85657968cc7cfa717d5"],["posts/47607/index.html","39e1c34d23801edec117b6e0b4a9f996"],["posts/48539/index.html","dd2042f03144ed5f6b3fc5723f6680dc"],["posts/50097/index.html","e5134fc79a089c915bb6f36ac873a8a7"],["posts/53868/index.html","e206107e0c4ca757eab060fb39aadb96"],["posts/54839/index.html","51f9fdb9c87d86766a0e8ab201aa6ab9"],["posts/59942/index.html","2f309916bfc3bf9751fdd5fb64efc25e"],["posts/60133/index.html","886a30688821fae9640abfe4ca389928"],["posts/62607/index.html","87941fc50bcde66d6392b7f80d4c38ea"],["posts/63295/index.html","0297aedcd8fe6e5bea72bfdb3ae7806d"],["posts/63613/index.html","418977a57f858ca4bbaeb56d7f186aee"],["posts/7734/index.html","81f89f637c328c90e84b79e52b450dc6"],["tags/Data-Sturctures/index.html","baf41121bb3c19679b2d70b817a88d0e"],["tags/acm专项练习/index.html","c4386ca8e0521175d154208ef0c33e8d"],["tags/apotheosis/index.html","ff12650883fceeeb3f0ba25658b61440"],["tags/c-基础实战/index.html","f2fdfa0954837a9815264a1882732b63"],["tags/c/index.html","295bc25d3f52072866256e95e63ac8ed"],["tags/index-1.html","df552a7f0bc7f8002dc926599aa89b0b"],["tags/index.html","cd937388f92de8c69a443f6bfa1af384"],["tags/leedcode/index.html","a21a66ba09dcd3a9b5afe7e5c4a65df9"],["tags/linux/index.html","e78a658776bc13f9330214c282fabc82"],["tags/linxu/index.html","43ea9aab6dd4b7d02607f54ef85e9d7c"],["tags/python/index.html","73024d062797259a8904e050db90b755"],["tags/though/index.html","e8d0dc37ad38d4ed472a368cb5c20475"],["tags/字符串序列/index.html","55667828d6322c92be31ac1166f88d45"],["tags/字符串系列-匹配算法合集/index.html","44d7754a62420b0f25f4274594c2712a"],["tags/字符串系列/index.html","74e2ca8a3ec1d87c1009a2456cb05435"],["tags/操作系统/index.html","eb09ea5f7fba81227fc89a2ffa9f9cfb"],["tags/操作系统开发/index.html","089cdcdeca725590e44590258ba7bf89"],["tags/数据库/index.html","6b7e713e585d55e6f1e91f3a210db702"],["tags/数据库高级/index.html","e3438056e31028ad4c7a63272bc63e4e"],["tags/数据结构/index.html","aac0c8b36defaaf42cc1d2447f94fd08"],["tags/编程语言开发/index.html","5431194cb699494c67486fd27cf7c822"],["tags/计算机网络/index.html","e0fb1687ba65fad910e8532b7668b5e8"],["tags/面试/index.html","216aa11eb33070c933e14cd59906e76b"]];
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







