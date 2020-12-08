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

var precacheConfig = [["404.html","7c80b09b8cb3e64bda1123086613537c"],["archives/2020/09/index.html","a8b6fd7ddfd3b2660d6f39bc8ff71a42"],["archives/2020/10/index.html","001169f225268e8291bc1bd072b06093"],["archives/2020/10/page/2/index.html","14acbac4d3dcaad23105102eb37022d9"],["archives/2020/10/page/3/index.html","d2ba9a60f2df717843dd909cb3609755"],["archives/2020/11/index.html","cae23b411aeee959c823ff880b6dd545"],["archives/2020/11/page/2/index.html","396c54490e7614ddf1ef824629e5ef6e"],["archives/2020/12/index.html","a015da2a3e7617cf44045c18c4f378eb"],["archives/2020/index.html","611ee0f35680e94903be057bec217c17"],["archives/2020/page/2/index.html","4f5b837d664268486c6297890c369e67"],["archives/2020/page/3/index.html","c8a546010a41e7dfa7b1d15cc6673661"],["archives/2020/page/4/index.html","947fbd9ba0ed6f79eb4935cb485ce55c"],["archives/2020/page/5/index.html","8f3023afd2eb312f66264b96342644c9"],["archives/index.html","4b701ccca953ab282a5991e66fcb4c24"],["archives/page/2/index.html","41cfbbd7a847a8dbf95a29cd3bfaacad"],["archives/page/3/index.html","1c9c8868bd0695237fe5634c614ead0f"],["archives/page/4/index.html","518f90ce1fc08c9b1455a916938fe009"],["archives/page/5/index.html","722a09839ad9c94b91c7eaf8f4207a44"],["assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["categories/c-关键字/index.html","8360d69d0d97704f1cb88df76fed9a54"],["categories/c-基础实战/index.html","8dce38e1e5badabb8903b5bec07f2f2c"],["categories/index-1.html","7d2f9dd584aab817c7ecb132184d75f5"],["categories/index.html","80a06859487d072d245ab8a5c19cf924"],["categories/leedcode-链表/index.html","79ab31896ef041323a4c5212bc64e83d"],["categories/leedcode/index.html","28dc2699f512d55439b9601695bd6194"],["categories/linux/index.html","cd0c36c6733ab31390c24c313d7e4b11"],["categories/python环境问题/index.html","8cc54309849bdbe5863c340edb742aa6"],["categories/tree联系/index.html","7813eda04242ab2d5fb89ed4534a34ff"],["categories/优化/index.html","a0dd816187a2bde1b60ed930f2990fdd"],["categories/操作系统/index.html","a67af94a314d00e0590d5e7f77647a11"],["categories/操作系统开发/index.html","a0a24d12bf521de03180c1feb0e7f7d0"],["categories/数据库/index.html","19c3b50f867d5506acb8080816ca0cdd"],["categories/数据结构/index.html","d306d88eb52a3e58eebf890ff8e6c317"],["categories/爬虫实战应用/index.html","62469f063325aca029b360c32b786bd9"],["categories/编程语言开发/index.html","b7599aadfe2ef0a03ae5facc9c18e711"],["categories/网络实战总结/index.html","dfd10aa3465fc8000f25b71ca445272b"],["categories/补漏/index.html","9aff7708c26a791d6e01a2e169e6a5dc"],["categories/计算机网络/index.html","7e1a3a22d3eb13b63485d324adc2ef88"],["categories/面试/index.html","baca3e68e17d89e6040329b3c151c55c"],["css/background.css","5bb9900d1bad9cb1e3fce454bc255d7f"],["css/index.css","6820a24dae33f2f98a11a1038eb0b48f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","50bc90520c686ea8500981de89985d49"],["img/bei1.jpg","60bfcaea92765d01bb04672083dac266"],["img/bei2.jpg","926a9ca3033eb9a0ed6aaf54ee66d4b3"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/qiao.jpg","e919f8fea62f9a9786ec9cf2ea72d1de"],["img/star.jpg","b0733874fc43bb9e495440990e0dfd27"],["index.html","70280404df314cc07d8a6554369ddc56"],["js/main.js","4898030387012f8af71563ef8353433a"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","6bebed368a1bbcb630dd146cefb103b7"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","64d1e1837ad1a585888f5d1e16c71f77"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["js/utils.js","f91ea1a86a5c45e344a24fb437642f36"],["live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["messageboard/index.html","de7527ec4577bb24adddde378e9f8b09"],["page/2/index.html","82ba569651e7b8ada715881018acf7a2"],["page/3/index.html","4826fd37b0b9f557604b44cfceea9dac"],["page/4/index.html","69a607b77cc039009b505911c7ad2a5f"],["page/5/index.html","47d10c48ebace93a35c923af73188d9a"],["posts/1/index.html","3769a5fc1a1818e0de689305a65ada2e"],["posts/14192/index.html","0db906786d988699d39caf2301c103ac"],["posts/14686/index.html","e510cbe547ab1b1402cfe807005e2901"],["posts/15411/index.html","6260c2e3cffca84517be8527f9345eb8"],["posts/15731/index.html","487d80c3461433651a7fcbccbd380919"],["posts/16097/index.html","604eb32ba75612edacf8564c34829d13"],["posts/16107/index.html","d6be3b351f023d94919349705cd439b6"],["posts/16108/index.html","fb3718ccac61ff110a457c49f2259bf5"],["posts/19586/index.html","52586b836bf5c8c170e2ff15750f1762"],["posts/19628/index.html","2812858e95ab9aaa4ad71952ce8b5ffe"],["posts/21322/index.html","59ea1d3d3c350ebfba9f850208250843"],["posts/21911/index.html","3e6304dfa9a18dd613c904ff7134a06e"],["posts/23469/index.html","848216e10a4fa0247e0f0b1c000d3270"],["posts/23956/index.html","b01b3707bc14b440710af771f3b23810"],["posts/24148/index.html","39f7fcfb75a1e3e2cfcd30ffc2e118ef"],["posts/24340/index.html","2d59f14d3e29f76e34536a7ddbfe9618"],["posts/24504/index.html","f6615ec1bba7022d26396422e5f1db7b"],["posts/25345/index.html","1be06f2c2a27a4ed95c3ef33a4e32731"],["posts/26821/index.html","f8cb7cc6fdee69212a29d68ec02a02a5"],["posts/31131/index.html","6c2dc6abdc5ea17c7382988ed564f780"],["posts/32473/index.html","d58dd1e516157055816e8b3a94b0577d"],["posts/33531/index.html","013866ac583c379c4bca43beb610252f"],["posts/33723/index.html","4a81e348d520a67d39c0eb1bef513852"],["posts/34955/index.html","e79a9275ab4226fc74872714d0b8cc94"],["posts/35949/index.html","e37903062a3e153d18af92223522cbf1"],["posts/39404/index.html","2974cc03db09982bceb57c97aa1e25d3"],["posts/39788/index.html","3caac302dd34e68a5ead0fdc742c3d2d"],["posts/40133/index.html","5ad6ed0f48901712d555c381c6b74b23"],["posts/40325/index.html","c20488057e3d43ad097b73b40ef2b583"],["posts/40917/index.html","29aab099273011f36fdacc124b42ae65"],["posts/42182/index.html","0d0407875ab8a3151e74d5146923d85a"],["posts/43760/index.html","7e89c69e49cbaeba539c727e0c80cb89"],["posts/43952/index.html","065982b4bb65c411535c99d082e6e16a"],["posts/47607/index.html","0dec160ea34cde8beeb38337a5f4bb7c"],["posts/48539/index.html","045c55726f5f234ac99a8b2d303de409"],["posts/50097/index.html","2074fe2b1e2451f1f02dd9a3a4aa8d71"],["posts/53868/index.html","e2b136e81492ca5ffd6230ce91516165"],["posts/54839/index.html","f0376224792652f8b92320b3d4168302"],["posts/59942/index.html","1c2a7b354ae2bf98916507d2dcc6b6b4"],["posts/60133/index.html","b416e151f8453953e7c7ddd8048341b1"],["posts/62607/index.html","b109a4022673c563a3f78038ad3cace0"],["posts/63295/index.html","70d3928be8a4ccf91de4d9f0da1b1a6a"],["posts/63613/index.html","62d1486baea3bae38decda0242a6ac68"],["posts/7734/index.html","2eb804bd90c1ed2322b37f92dd3aa868"],["tags/Data-Sturctures/index.html","60cd0021231e5e8c416142c087bb0255"],["tags/acm专项练习/index.html","e85d37500aa60e047e7d89b75dd9ecd2"],["tags/apotheosis/index.html","683cbb4d465f9de5f1ff5ca55db11a7b"],["tags/c-基础实战/index.html","46b7c633b1b627243777ace1df2d0014"],["tags/c/index.html","ed645ae2c0ce0c74ff5a76cfaadff403"],["tags/index-1.html","6fe34e1312c4371eb926535e81c8d148"],["tags/index.html","67dc9cf0b92a29e08d83cdb84a36b3df"],["tags/leedcode/index.html","b27d0e664c6a98f4927b530eb20902b7"],["tags/linux/index.html","23c0808490784579da66ad052c829c88"],["tags/linxu/index.html","71603b06e0561de6c2cdb9ec1ee357cf"],["tags/python/index.html","e6005f698b02af4c21b11d9312e620c9"],["tags/though/index.html","1c0bec0fe3244a41dcae077fdb7026ec"],["tags/tree练习/index.html","6c0e1e4943419355d76a2c27a242a82f"],["tags/字符串序列/index.html","9665df5dea949baf21327894d6c674f7"],["tags/字符串系列-匹配算法合集/index.html","4dd41b248f1b14732354726991831975"],["tags/字符串系列/index.html","0f228e4dc8a4c1c2026000421dbeec4b"],["tags/操作系统/index.html","42f96a8604de472d3a356a33178a480c"],["tags/操作系统开发/index.html","fe58b60d3b7bda9b802eb7a4312c8697"],["tags/数据库/index.html","00504128f543bda6d3fad02138c34f5c"],["tags/数据库高级/index.html","39ec4246582edd1bf0d1fb97fdd2864d"],["tags/数据结构/index.html","32a175ed2d6fbdad57563fde5f5e6625"],["tags/编程语言开发/index.html","b775a14e7ead86ef580e6e94d69aefd8"],["tags/补漏/index.html","1137456a8032c2208c96b8450aa74ae3"],["tags/计算机网络/index.html","073e65ad1b41cdfa2627f786cbe46eba"],["tags/面试/index.html","d04161014d635dea0b3c110ce9988773"]];
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







