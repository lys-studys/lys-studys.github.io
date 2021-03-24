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

var precacheConfig = [["404.html","f5ff837ef84053fb30e324e5cad52a9e"],["archives/2020/09/index.html","ddae0100a0eec5da77bb6afeb15275d2"],["archives/2020/10/index.html","8f469d04c5a15df78051f9e396fc919b"],["archives/2020/10/page/2/index.html","96ce01da7b25db624f8eeea2c4d94510"],["archives/2020/10/page/3/index.html","6ffc5d4126c128c7eaca5e8ea3532125"],["archives/2020/11/index.html","1d6c48724ddf28449ee26ab6089c2133"],["archives/2020/11/page/2/index.html","e226710fd8e9a65ce72196e90811921f"],["archives/2020/12/index.html","3c57ad07e0696cc7a9f40369d37625ec"],["archives/2020/12/page/2/index.html","996798941363086c428c111d2d432cc7"],["archives/2020/index.html","8b79baafae61e5e80edbaa2a52ec7684"],["archives/2020/page/2/index.html","0a11f662a983c099a1d189aaa28ec233"],["archives/2020/page/3/index.html","3e6224a7ecf3f3a3e53a8a22a6ed27fe"],["archives/2020/page/4/index.html","b4ebb1b4e07d72f626944af67aa3256d"],["archives/2020/page/5/index.html","52fda093b2d320e548c074669b7cccb5"],["archives/2020/page/6/index.html","065feeb747e176d30713a3437824b6c8"],["archives/2021/03/index.html","17904c76866287448a6fdca000caa4cd"],["archives/2021/index.html","933d4e9a2a43df109a02532a2e3ec97e"],["archives/index.html","f5a6d6ebc7ef84fbff196c6bca51f172"],["archives/page/2/index.html","f02eb1fdc5c0909d2d2c64f108071887"],["archives/page/3/index.html","a790e015398880200a89c64dd9372337"],["archives/page/4/index.html","a21216be77832591a681b09a836239bb"],["archives/page/5/index.html","ada3ec4b9281dfaecc9240d0edca4a98"],["archives/page/6/index.html","1c124e66d28ef52f3cfbbce4b4acf47c"],["archives/page/7/index.html","316160e683be90e810f9aeaf95396136"],["assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["categories/STL库/index.html","5959d05f637d1fd12a69a9ccf0b925e4"],["categories/c-关键字/index.html","2a080bf11d18e36ad832a490806dd7b1"],["categories/c-基础实战/index.html","a3814a44a1212266ac42c1f600ba82fc"],["categories/c/index.html","f63afd9c92a1df0a88dbf6db39e19449"],["categories/index-1.html","ccff7c835d7c5d50bad685232afe42a3"],["categories/index.html","6ad7c686102f3bfa370fc07493458f34"],["categories/leedcode-链表/index.html","1e942b2c0a71a6f5eb62aeaa51db24df"],["categories/leedcode/index.html","58099051922c7d7b6b0bfd489a53857f"],["categories/linux/index.html","a539be47908a3b520267ae6dd3d7c1bc"],["categories/python环境问题/index.html","aa2cc7b99733cda2d9d8271c994a830c"],["categories/tree联系/index.html","05263ee52e80c03dac60ea3a04e562e9"],["categories/优化/index.html","71e90ee12fb1d1dd0ae0911a8cf9a2f9"],["categories/大数据/index.html","b549cd2f8462f81195552b4992ee39fb"],["categories/操作系统/index.html","b8341cf2205916eddfd53c82d71b75db"],["categories/操作系统开发/index.html","6cc0bcda75ddf44a847f6a26daf7e9e8"],["categories/数据库/index.html","3392968ff71e7e4fb61631e91acf1924"],["categories/数据结构/index.html","6620f684808792d09ddd1592aef4e386"],["categories/爬虫实战应用/index.html","d0570b09d21e05ed5d5371abc0560291"],["categories/算法/index.html","a93604c9715f5635adaf70cf66239d12"],["categories/练习/index.html","74e682420ab32700ab55f25a72c50f2c"],["categories/编程语言开发/index.html","e4c1fae980c0dbb44eb5b9f1ded4672f"],["categories/网络实战总结/index.html","aa7e245ea8f61fd8883f58d22e2f8efc"],["categories/补漏/index.html","cff30370f22afdf4ebae55bfba88d414"],["categories/计算机网络/index.html","82135d61e8cabd83deb5d98e832dd9c4"],["categories/面试/index.html","be99ec49eaa50effc482c57e269f206c"],["css/background.css","5bb9900d1bad9cb1e3fce454bc255d7f"],["css/index.css","6820a24dae33f2f98a11a1038eb0b48f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","50bc90520c686ea8500981de89985d49"],["img/bei1.jpg","60bfcaea92765d01bb04672083dac266"],["img/bei2.jpg","926a9ca3033eb9a0ed6aaf54ee66d4b3"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/qiao.jpg","e919f8fea62f9a9786ec9cf2ea72d1de"],["img/star.jpg","b0733874fc43bb9e495440990e0dfd27"],["index.html","f9e32475ce0bb23d453c3271f5359c22"],["js/main.js","4898030387012f8af71563ef8353433a"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","6bebed368a1bbcb630dd146cefb103b7"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","64d1e1837ad1a585888f5d1e16c71f77"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["js/utils.js","f91ea1a86a5c45e344a24fb437642f36"],["live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["messageboard/index.html","cc528b28929feb2699f888a07a064d98"],["page/2/index.html","8c133da22e69a52268949d3c529c914c"],["page/3/index.html","c555521a1cbe023db73bfe079f0ed8a1"],["page/4/index.html","8cd9170d742141b9ed6625abbdc3695d"],["page/5/index.html","313494d7ce7ee32f2285634b66836a18"],["page/6/index.html","394239d09c34a0156c10dbce6fac6c07"],["page/7/index.html","abf6027d1f6afdabcc74e659e94123ec"],["posts/1/index.html","43220ba519b2383f3a6c321bf0ae7574"],["posts/14192/index.html","c84b72bc275b27637c7f0a7ac1b7891d"],["posts/14686/index.html","7a6a56b8c951a8fa24a910cbc89ba736"],["posts/15411/index.html","9a8f3833839c46e86b2b0f1158404866"],["posts/15731/index.html","39a66bb37e376b24e5aeefefdd352ac8"],["posts/16097/index.html","86e35476e67575b43f691c73f2bf16d3"],["posts/16107/index.html","e373360df0fd7ceaa5fda78a5cda8bd5"],["posts/16108/index.html","72c8a904068bf95f6a0dc644d643dd45"],["posts/17385/index.html","0135fc7e27a0da14eaaf0aef9fc5523c"],["posts/19586/index.html","e5d62d2f4b0cd3ab18a9b1e26954b057"],["posts/19628/index.html","fe5b786918c0e4cd8648c9050ab787c5"],["posts/21322/index.html","6875f733f4b03f39a1b814b887d2d531"],["posts/21795/index.html","acf8f3fe87ea7a348007ef580c9d74cc"],["posts/21911/index.html","f616a7488fb3e0149e47bf36d83b36e5"],["posts/23469/index.html","620f1735abaa304766dea20bc77af3d6"],["posts/23956/index.html","aa9b52c724ece976fb9b2206ab9f99ce"],["posts/24148/index.html","2e59b57d2468962eb9621860f3adc16d"],["posts/24340/index.html","9f744ad3b0e83bc07b23473b4a8f5764"],["posts/24504/index.html","d8bd93eaf0f02a9fd97e3a40bdb9ac1d"],["posts/24772/index.html","9a309b7037b958ccc5f7e52d05625b39"],["posts/25345/index.html","7fbc0cb7f0e35be28919632793f0d506"],["posts/26821/index.html","cc696a3e830cb0423ec9ed287d3e308a"],["posts/28273/index.html","be5abba030b40ffb4a4e69780ae249dd"],["posts/31131/index.html","21a90e002a1c88dc60109ac6aa2df493"],["posts/32473/index.html","2ddd7ac0aa54b19ed205c14657f3b8f8"],["posts/33531/index.html","42c090699fe5c609197c025d1dfa720d"],["posts/33723/index.html","8aba724c2482f497b5fc617c27ab0eed"],["posts/34955/index.html","1e579dd6a36c8a9d14e4eaf13ba25be5"],["posts/35949/index.html","a7768070ec2d6be216e8875c69a2b387"],["posts/36817/index.html","719282b7a318e5e9151f44332d0e1286"],["posts/37850/index.html","967ca728883fd84b0d29fa8e1baafa45"],["posts/39404/index.html","28f33a3ec63bbefa2d46664ab7e275e3"],["posts/39788/index.html","35716ed9ea730ad96c2059cccdcdb6a4"],["posts/40133/index.html","80dc7b53eab789eed1ad1686c4cb2389"],["posts/40290/index.html","0373f7c0042d58b0d07add0ced524471"],["posts/40325/index.html","f1c2e4099fce5f93958dbfafc8bf833b"],["posts/40917/index.html","00f7482e66aa05e1acbdc8da585a1591"],["posts/42182/index.html","9a5c2a28387ed96690315d2ebc6af137"],["posts/43760/index.html","270bfb93b9210b8c28e1b3fd385567b8"],["posts/43952/index.html","c6c90b103f4176324a84b2a8fd54cee4"],["posts/44296/index.html","5e11dd658a1e775ecd81b2d85d448f24"],["posts/4515/index.html","694aa3a56b879c57614dc7bd8aae0df2"],["posts/4524/index.html","501f1ba6a57c9919048fc65825e5ba09"],["posts/47607/index.html","245f786f3ae1bd952ff16f937f8411f2"],["posts/48539/index.html","d42bca9eb7d623397289ef253956ad48"],["posts/49861/index.html","15cf5bb4caaa4752f8331634feeea142"],["posts/49877/index.html","ba7c7447e16abb0cedb62c7e280efbab"],["posts/50097/index.html","0b9fb029876a8cc51837edd5f192280a"],["posts/53699/index.html","177bacf16bc9e2346fbd192718e06fcf"],["posts/53868/index.html","18957b5ef35cb86362ae1fdca015a9b0"],["posts/54839/index.html","e739e7d8e8074d0cc9cf31ead8585303"],["posts/55244/index.html","a2874b91adfd96abe2679913fef949d8"],["posts/598/index.html","1271dbd96d35b81be98fcb433bda5190"],["posts/59942/index.html","6addfe9409243cbe383186a7f3011866"],["posts/60133/index.html","92d6fe2da509558dc59d012ecb8399f3"],["posts/60234/index.html","cc3443c761da5b2d533d55bb6bc2af60"],["posts/62607/index.html","49d8f1ff953bea4ead0cf64878a333ef"],["posts/63295/index.html","4dfa929d4a6c8e7cb92b33a9bd6b0738"],["posts/63613/index.html","e88196a3a05ca5900ee4bcd05e255295"],["posts/65250/index.html","a3a55745d8019b0de41a784c0f76cc32"],["posts/7734/index.html","86c1715252a06ee73e3c4567cc569e18"],["tags/Data-Sturctures/index.html","f80ffe493f18e8f6e3b724f89dd59c73"],["tags/STL库/index.html","cd5f35b04b5744c03fd535f198461376"],["tags/acm专项练习/index.html","a847a3cd0309266129db362c86cdacf0"],["tags/apotheosis/index.html","24b1bdd1cae36031292172b21eb2ae4b"],["tags/c-基础实战/index.html","22613571b4fdb70ead2e2c20953246cd"],["tags/c/index.html","5051d47800b4b75fe10e86a8771b75de"],["tags/index-1.html","c099d7ce862c8fe49206db2ecc51b9a7"],["tags/index.html","a459ed7bf3c54b2eda0b2d99a63d00c3"],["tags/leedcode/index.html","e5b5f217c1627ab953d9fa9a683f2f77"],["tags/linux/index.html","122352c628210c9b31a28f2333e0c0bc"],["tags/linxu/index.html","0e7d60ef7eb6cdd8f21b1868b18c7d4d"],["tags/python/index.html","369a1b9efbd4971f6c82d1b113ad6fdf"],["tags/though/index.html","dbb70506b324b968a9db2bc32addcb65"],["tags/tree练习/index.html","cb95c311fe5fe1df4679c71e9f233201"],["tags/大数据/index.html","1a591432510b0667beb2707b000f005b"],["tags/字符串序列/index.html","ab7d5db2bb690c3ec57c4c0f9324228e"],["tags/字符串系列-匹配算法合集/index.html","cfdd9dd46d6d4e11d65f07aeadb2a120"],["tags/字符串系列/index.html","ba7bbd5c6c22342721ecfc17b675bcf6"],["tags/操作系统/index.html","80f455a1f8180ad334ac6f30e58ce1da"],["tags/操作系统开发/index.html","e6c9164fbf3509ca784ba951ae523b6f"],["tags/数据库/index.html","ef73159026df86be6212be6f27dbfc34"],["tags/数据库高级/index.html","59a66cd79ce3faf349b7910f9ae47954"],["tags/数据结构/index.html","04bf75031758b8742197e4cd4502bae7"],["tags/算法/index.html","15aaaf6307dc0f9ff45869991bb7a1ae"],["tags/练习/index.html","0295c0eca1ab5538115fc41408d1cb2a"],["tags/编程语言开发/index.html","37ed89e1cf0e0bbba484456fd11253d7"],["tags/补漏/index.html","a575a7e6d850377b16557768b3cb26a4"],["tags/计算机网络/index.html","1fc3b44a86fd8376fe660e484a591b93"],["tags/面试/index.html","9524c87aa8088517a1ed49245ed26ea3"]];
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







