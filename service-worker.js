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

var precacheConfig = [["404.html","61e2ff8ac490335ed3745525ab9e000e"],["archives/2020/09/index.html","2a53ceb5ccc573813e912592f859a047"],["archives/2020/10/index.html","ceeb597bb79402d13ef444fcf8193907"],["archives/2020/10/page/2/index.html","dccfcc108f2304dc71865e4dc0d66f9c"],["archives/2020/10/page/3/index.html","d0796306de15d718e9ae07fc41ca155f"],["archives/2020/11/index.html","8344af62c6ce608f8de4892b36f6945a"],["archives/2020/11/page/2/index.html","cd31d031a59e3559215309244f89d2c4"],["archives/2020/12/index.html","aa0e919ba076f82b8c668365f6a1e2fa"],["archives/2020/12/page/2/index.html","1c8c523177226846ca2d32830cebe135"],["archives/2020/index.html","56e842c2fecf73a65f3d19312ec20ca9"],["archives/2020/page/2/index.html","cdc404b59cc7a5f742ba3d46963b64eb"],["archives/2020/page/3/index.html","93dcd9f3144dfca6327569c1260096c0"],["archives/2020/page/4/index.html","dba19c066671a9bca230b61af5f41f11"],["archives/2020/page/5/index.html","d82a00efdff5afcafb5f2e80eae20aa1"],["archives/2020/page/6/index.html","98f45eab01b15d3e3d559ea51de5d172"],["archives/index.html","a83706fd020c2306be32192287847c1d"],["archives/page/2/index.html","4e9a7f4a8248531e6125bab3762d8b4c"],["archives/page/3/index.html","e5c03d6a4fcbd74846dddbd646b8474a"],["archives/page/4/index.html","900e1c29e55790660e8e3ddf344fdce6"],["archives/page/5/index.html","fc5c94de7c6a0f277b21888f495229ea"],["archives/page/6/index.html","db54ebead53082b9367f7cbecd67319e"],["assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["categories/c-关键字/index.html","553d1f99ce9ba360cce874a348ff17ee"],["categories/c-基础实战/index.html","169ed9ab5022abfabda809d8cc766049"],["categories/c/index.html","c2a961a70bb684adfc7b131b81d0c9c2"],["categories/index-1.html","9093812fba2119dfc7bb5d7071a274d2"],["categories/index.html","796e4a88b56ee08bb35dce5564c45c49"],["categories/leedcode-链表/index.html","78486d4c8c12da50af82d2c0375626b8"],["categories/leedcode/index.html","5aab505509c627d2a2d962dadd4d6351"],["categories/linux/index.html","be5946548c6fcebb978cab19cb8e3dca"],["categories/python环境问题/index.html","d30675098834881213d1b9426413344e"],["categories/tree联系/index.html","aa36d2eeeeda0b0feef0a8bc3db94725"],["categories/优化/index.html","df0a5189b7373113fe3999025076221b"],["categories/操作系统/index.html","b6c22838b1e0cec7460eca2db40644c9"],["categories/操作系统开发/index.html","62d6b8bcc9bb5d91c535e63f0433e257"],["categories/数据库/index.html","9ad2c07e489c025be62b5d2578d523ef"],["categories/数据结构/index.html","71a3d86ab1706b9a9c914fc30feeaddd"],["categories/爬虫实战应用/index.html","2df9cbc0fd84240c771fef9018523cb1"],["categories/算法/index.html","46c17971656b4472faf36a59fc1fdcee"],["categories/练习/index.html","888901d36d8778b5e5e6b7709de598fc"],["categories/编程语言开发/index.html","8592264e447e117aa5ae0d26cac5b61d"],["categories/网络实战总结/index.html","8afb2d265c94f122a6929ff30e5a3e4b"],["categories/补漏/index.html","13506debee75b1b4265bb6f7c98f1968"],["categories/计算机网络/index.html","ff1b70eecebb7117d7aeafe36cec53e1"],["categories/面试/index.html","55d7648b03b2dbfcb433c1e319dabc43"],["css/background.css","5bb9900d1bad9cb1e3fce454bc255d7f"],["css/index.css","6820a24dae33f2f98a11a1038eb0b48f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","50bc90520c686ea8500981de89985d49"],["img/bei1.jpg","60bfcaea92765d01bb04672083dac266"],["img/bei2.jpg","926a9ca3033eb9a0ed6aaf54ee66d4b3"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/qiao.jpg","e919f8fea62f9a9786ec9cf2ea72d1de"],["img/star.jpg","b0733874fc43bb9e495440990e0dfd27"],["index.html","756e6b65e2c70c71c95833e4f5311511"],["js/main.js","4898030387012f8af71563ef8353433a"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","6bebed368a1bbcb630dd146cefb103b7"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","64d1e1837ad1a585888f5d1e16c71f77"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["js/utils.js","f91ea1a86a5c45e344a24fb437642f36"],["live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["messageboard/index.html","78f46372ea9b3fb07b6e86b4a51fd610"],["page/2/index.html","4c6195efc60bf76c58e707ab34c9cc5a"],["page/3/index.html","ef132794c508a39be9b68a2ce0374540"],["page/4/index.html","7cedd23cf2f20af4411df28bf76bf741"],["page/5/index.html","a082671e6cbfada731a2011e7a9bf591"],["page/6/index.html","37153a1f90f673727a1da241df27a393"],["posts/1/index.html","b4370695edae9ffac5444a9124c6f90f"],["posts/14192/index.html","471766c976476426b2b68cf558978d56"],["posts/14686/index.html","2ec278db3bd4e623b848fe7161d00199"],["posts/15411/index.html","aaf5ee70e978d8354fbb4ef51b69a239"],["posts/15731/index.html","f450eb2e760ee81785b9cb42f5e20418"],["posts/16097/index.html","f6ff4d243beaf8d10dce012b7a9bf6d2"],["posts/16107/index.html","c755a4a3818f908fe71b0dc0c619123c"],["posts/16108/index.html","c52bc91444c5c1d12206425bb3dd8f27"],["posts/19586/index.html","485cb6abcd439966b1af39c8f8d590d3"],["posts/19628/index.html","27e8dc1f06853a315268fde55d794dfe"],["posts/21322/index.html","21637d08a3041fdbeb79ff537c93bc4e"],["posts/21795/index.html","12e6fd927cc5dae48323d7ac9096c4d0"],["posts/21911/index.html","7ebf74fe35bdf3dddf868bf4e85fea87"],["posts/23469/index.html","ff557b466829b44e453bee9ede8f0cdc"],["posts/23956/index.html","920e2580eb8e3c6398f36174a6814fc0"],["posts/24148/index.html","ecca9c337bb1e6b6294de2f50bb1d098"],["posts/24340/index.html","0f1dce69513974089cd324da616be09c"],["posts/24504/index.html","6670dfc9c2c4171ce74cffa27c0bd57a"],["posts/24772/index.html","9742a617fee7fe410469a9c53a945ff7"],["posts/25345/index.html","fa1755a796b20c92975cafdabf0e92f3"],["posts/26821/index.html","daeadc13ba7d7dfc8452e08fa2934bcc"],["posts/28273/index.html","e194ef741da052260e910d9c206ae1b6"],["posts/31131/index.html","3f2238b91a17a9a72a0e11b4a398c861"],["posts/32473/index.html","61b0493a7608028a35dbe919a6e121aa"],["posts/33531/index.html","05b0c8a2058a4c3e3310429b5016ffc6"],["posts/33723/index.html","6effedcee7173adca5db90edaa7c7aae"],["posts/34955/index.html","1d5b6cfaf1a0fe04b216980130f5a25f"],["posts/35949/index.html","37497bbe6378f8fe6236d6cf4363cc6d"],["posts/37850/index.html","79fff4b5cbff57f48622ca161457325f"],["posts/39404/index.html","0bb4ed8bf7d048ae6d527a81f9359893"],["posts/39788/index.html","25cbb5c02c4a7c342acde9f22e7d316c"],["posts/40133/index.html","566ce166263728b7f8d3164fe93cc033"],["posts/40290/index.html","ca765b18a1d3ad78dbf9729f8aa6fc88"],["posts/40325/index.html","b347e5aa7a6fc05856919b395f6a1dff"],["posts/40917/index.html","ff8281eb397930bce02fd4c7b1c717a3"],["posts/42182/index.html","3e452724c74b8c0da25e6d30f7644916"],["posts/43760/index.html","8c989a7556ac50703cf77484db7fd3b7"],["posts/43952/index.html","cdb08a5c7bd202a13e1a68c8165abccb"],["posts/44296/index.html","247576fbd40de482d9111c97a0048ea4"],["posts/47607/index.html","0f20e81a84c7ed08c4ec1a5a8911b7ec"],["posts/48539/index.html","210461fa345f27eae5a9bc620fcc60fc"],["posts/49861/index.html","c12a2a2a6e37e412c507c38a5cc947eb"],["posts/49877/index.html","30b3b7663d4ec6b8d243bf34724bc06e"],["posts/50097/index.html","5f56bbecb1b8fdecc27b8fac716c2b2f"],["posts/53868/index.html","6b9c6248285c75b7038bf0bcc97baef6"],["posts/54839/index.html","bd83233ce7ae044848cd42012b3e05d0"],["posts/55244/index.html","8c780de0063fcf44e9cb62a800689515"],["posts/598/index.html","504ec3b58b5c3909696f559fcdd39d5f"],["posts/59942/index.html","460ea2f452c3225869dce7d1f8075b54"],["posts/60133/index.html","60d3318d514bbdf18ddb87dc98ecd34e"],["posts/62607/index.html","b2af1bd7463339aa58e10536c498e20d"],["posts/63295/index.html","c497e9c869dca170cb741f2ce76663aa"],["posts/63613/index.html","a9550b89ea6dfcc0699615343b807ede"],["posts/7734/index.html","10fa17b8bd04a0bbdc22e6ec9cb136fd"],["tags/Data-Sturctures/index.html","448fd5d3af6894591cf28d4aadd3526c"],["tags/acm专项练习/index.html","c03fd4d0374573be58053dc0e0298f17"],["tags/apotheosis/index.html","6a7e203ecff35b3a3f1626fe75326cb5"],["tags/c-基础实战/index.html","8d76940071e87643addb89701570486d"],["tags/c/index.html","3c64067441f95775f4a128c62cfd1812"],["tags/index-1.html","82b4511eb091fa59ec212401816bdf8d"],["tags/index.html","c098f00f915d40d50bb69fe3126df298"],["tags/leedcode/index.html","a90558adb8f01c8999c8accea1f565e5"],["tags/linux/index.html","0dfea161c7309234c1ab2a990e124b39"],["tags/linxu/index.html","656042013de232a219e4ba20ee425071"],["tags/python/index.html","41b7403835017f50aed333f8b825c71c"],["tags/though/index.html","968773d34b53a12458a2502e587b90c9"],["tags/tree练习/index.html","e2d699ba66b334e6da4ddf2d7a80cc84"],["tags/字符串序列/index.html","bac22e0ed9d9b081c21f599e84c42f7c"],["tags/字符串系列-匹配算法合集/index.html","e90aacffc254bcef74cd4d8ab1fdee41"],["tags/字符串系列/index.html","5b367fa9044f5d533e1b267f403830f9"],["tags/操作系统/index.html","a28db5d6f14cc5ec9e11a77900dac9b2"],["tags/操作系统开发/index.html","7df91a2f62b747c2ef2e0f26f3bd7ae2"],["tags/数据库/index.html","15aed66ebe4d2df0adc2bc5b6678b877"],["tags/数据库高级/index.html","540a52e5478293cd5ed4f95a068d2673"],["tags/数据结构/index.html","e63d0945ebdf8df788ded128522b9b5f"],["tags/算法/index.html","62ff3853549ba89584176ca303e9508e"],["tags/练习/index.html","034f3ef32e694d19aba936ec1def7b57"],["tags/编程语言开发/index.html","2b207dae814ebcda2416cdad45900f0e"],["tags/补漏/index.html","21ae7565c4bf2090c15f6a52b5be6a00"],["tags/计算机网络/index.html","f897006b7507e844e4628680acf12cf3"],["tags/面试/index.html","1645515d0723f5c8dc599e1c5084cacb"]];
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







