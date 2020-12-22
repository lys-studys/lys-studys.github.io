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

var precacheConfig = [["404.html","700cb9c1bf59f95a223f9c7009080ca8"],["archives/2020/09/index.html","a7703ad9109dea5d6a9046dfaabb1b30"],["archives/2020/10/index.html","294d7a970fc9859507a1f9a00ce5ed72"],["archives/2020/10/page/2/index.html","428550f2753daa48781d493db470dda2"],["archives/2020/10/page/3/index.html","d736bf0d9d8375002ca69e5c7735ae70"],["archives/2020/11/index.html","431ab303e81bb27b0ebd9274f97fcf86"],["archives/2020/11/page/2/index.html","bb4dc8a5bc046a0d1992e1534ed0c151"],["archives/2020/12/index.html","099e4bbabadfbbb2523c2590beb91439"],["archives/2020/12/page/2/index.html","c4f4981bded4b3e7881fd4fe7af9ffcb"],["archives/2020/index.html","8e4c6038b44d5abf7d78e8f7ff9cf1d0"],["archives/2020/page/2/index.html","8cca35b89b5107262a5f17f8b1e198e2"],["archives/2020/page/3/index.html","37f84f324228321f8da1fe156be2c777"],["archives/2020/page/4/index.html","bdf73885a46d8c6857dd984fd03bdcd5"],["archives/2020/page/5/index.html","fcc8417cd264baac3e54e77c7a17865e"],["archives/2020/page/6/index.html","5715a5ca8cd4e0e0236ae6633f8b355a"],["archives/index.html","ef312cd376ed06ff4df8d548c62c8bdc"],["archives/page/2/index.html","67d330cb01523fc31ab663b22413ff0c"],["archives/page/3/index.html","d94819152efacfdb3c119cdc1ff97060"],["archives/page/4/index.html","3bd4fdff44f5e855f7ae359e4e579989"],["archives/page/5/index.html","b15658c95ac88a1cabbde9cc8dd0ab7b"],["archives/page/6/index.html","c0045616dbc91f7f74b3d13a317dd97e"],["assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["categories/c-关键字/index.html","344c9dc12ffcc3d9c19f0f5650e92615"],["categories/c-基础实战/index.html","8ba4230974f624e527e982f95681b86d"],["categories/c/index.html","cbec5f6229191f0ca713d6d247612625"],["categories/index-1.html","bb1987e565ae072b72ca1ef3ecf4e9ba"],["categories/index.html","20dc836f2a695725979a12046adc583b"],["categories/leedcode-链表/index.html","534d23b28176947d31517d3b4cbacfaf"],["categories/leedcode/index.html","a6bc25ef0bab9023ff9e8d1228798fc3"],["categories/linux/index.html","a976c720550c5aec54a124ee5fe9a557"],["categories/python环境问题/index.html","7cbfec2e8cc0a832d04514b1a6f95f85"],["categories/tree联系/index.html","2c23a5ffdbf1c6eaf914b973dec8ab6e"],["categories/优化/index.html","d590dada918bfbffca0d0bfff413d20f"],["categories/操作系统/index.html","5f8d5f2491c91dc6ad8dcf9c8db51be9"],["categories/操作系统开发/index.html","7b68855322ae82ab5db320422c522aaf"],["categories/数据库/index.html","68a7a1d9c07688cf4136da684213c803"],["categories/数据结构/index.html","57d153b2aaa4b2c62fb4841a2f1edfe2"],["categories/爬虫实战应用/index.html","859022e5cb14bde22c7e89f37f3767d4"],["categories/算法/index.html","b725e7b2a254c8e1cf0992cbe0452494"],["categories/练习/index.html","f0f95f527d48cbbc063812f79bc8af20"],["categories/编程语言开发/index.html","1a5f6d36f8e54a8305dd0752eb0ca930"],["categories/网络实战总结/index.html","4a6e510a7c1f0317869b65b145ce407a"],["categories/补漏/index.html","f010bebda4bbcc11bf84abc800ae6e4f"],["categories/计算机网络/index.html","59d3ec500bac0544d4510621ffc9c440"],["categories/面试/index.html","7baba8ae13ddcef40d3f1d4f477e6d7c"],["css/background.css","5bb9900d1bad9cb1e3fce454bc255d7f"],["css/index.css","6820a24dae33f2f98a11a1038eb0b48f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","50bc90520c686ea8500981de89985d49"],["img/bei1.jpg","60bfcaea92765d01bb04672083dac266"],["img/bei2.jpg","926a9ca3033eb9a0ed6aaf54ee66d4b3"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/qiao.jpg","e919f8fea62f9a9786ec9cf2ea72d1de"],["img/star.jpg","b0733874fc43bb9e495440990e0dfd27"],["index.html","8db0d26282d4b65ffe18aeb3195e5f44"],["js/main.js","4898030387012f8af71563ef8353433a"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","6bebed368a1bbcb630dd146cefb103b7"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","64d1e1837ad1a585888f5d1e16c71f77"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["js/utils.js","f91ea1a86a5c45e344a24fb437642f36"],["live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["messageboard/index.html","c36611dd5ed500efd2543d2d75ed38a5"],["page/2/index.html","375470c6875162bf9dd66cbc9a7e1c2d"],["page/3/index.html","f9ee52a8f1e505619a0953e415ff0e9c"],["page/4/index.html","2c82bec540be733808337d17488e21bc"],["page/5/index.html","3dac8409e71071e481139f340db32188"],["page/6/index.html","c10b629d9e4902133c350e6097eacfff"],["posts/1/index.html","7bcdecb5271083d19372199d4f1faba6"],["posts/14192/index.html","02be0e62fe98224de3c69febf19fc776"],["posts/14686/index.html","69c373c12674af7496bf78a096127227"],["posts/15411/index.html","25be7c8fe990ce304d1557f630b5ea3d"],["posts/15731/index.html","14eda8abc3031804b12e8d7aaa92da56"],["posts/16097/index.html","18c518c9224d4b39af7f1ef4dfe98bc1"],["posts/16107/index.html","236a811336216580c32325eae798cc40"],["posts/16108/index.html","12498104a9dffbb18734ddf439f49f40"],["posts/19586/index.html","ba5335eb3403fa276732f063fce43324"],["posts/19628/index.html","48009e4a262d2a4433f487e0eda7c251"],["posts/21322/index.html","4d3feed5774a2a9d819493404dd05b67"],["posts/21795/index.html","c318b44029bd4f8c477c129886aa98cc"],["posts/21911/index.html","25a7d5cd265314f536a104707e6ae3f9"],["posts/23469/index.html","c91a08506e54faca07ee15565c22631d"],["posts/23956/index.html","4083ccd18ad71b98fb56b5825935d54f"],["posts/24148/index.html","17916171e57f439a29908e1e2855f6f6"],["posts/24340/index.html","6391a3844bc507dbccbcbb363eaddd87"],["posts/24504/index.html","d01ee1a205e1b2629e21b866afbcbb62"],["posts/25345/index.html","aceeab193db8b98872fb4a778e2556cf"],["posts/26821/index.html","18c57c6b64857cc64759b7d825946ecd"],["posts/28273/index.html","5ffc5ddf5debc8183a848c6c6da20c8a"],["posts/31131/index.html","eb1067a505bc24cc748daaad3499c086"],["posts/32473/index.html","b8af07900042cd7656840a54faaac106"],["posts/33531/index.html","2931dfdee22c63615966fadd9cf83c61"],["posts/33723/index.html","03c434120728f1a06e47b7565003fff3"],["posts/34955/index.html","6569f193d0a8b6a81a06b88cf90ec299"],["posts/35949/index.html","24624f63854b3ccf17c6f58f12e0113e"],["posts/39404/index.html","f898c015ab2ed0a83de2dac3f7149112"],["posts/39788/index.html","15ab8792b99897394f24bd25e0726f03"],["posts/40133/index.html","26f946edc95429011958f77e5d405643"],["posts/40290/index.html","bff36a7767cdbebda842a91792dfe221"],["posts/40325/index.html","68fba476456f45a4a2b1a8112ec26534"],["posts/40917/index.html","5fe8bd1a5f06e3c0ab5cbedbc6daaec2"],["posts/42182/index.html","b9cd42d881d7d21c41fe1c564ee50619"],["posts/43760/index.html","0a2239488cbf71a576cde3a1dfef10fe"],["posts/43952/index.html","5f7f16e3234639d19998081a9a0c400f"],["posts/44296/index.html","5eac78d771b5a5ef787703a4900eb060"],["posts/47607/index.html","df00974203c53f9c5fbafabf1252439e"],["posts/48539/index.html","ba7c2b597b4133ba7e2789b29b77b309"],["posts/49861/index.html","11ae719ff0883facef4a161f23c5bbb8"],["posts/49877/index.html","2811e9b54f06926c7bb7fb70bd69da8a"],["posts/50097/index.html","bc93f84eef3fa35c1daf909f634da2e3"],["posts/53868/index.html","a735720807199402b96ab1ed3dac8f08"],["posts/54839/index.html","b8ef8a4bacc7713da9830fe1898e907e"],["posts/598/index.html","187c3ba733c8a99b62a56446b6582bac"],["posts/59942/index.html","562d536c790323948c2af03a5874cbb5"],["posts/60133/index.html","7d4699f08535c0a5551e781c0ad1ac2b"],["posts/62607/index.html","740d4cd220d5b50f1c14c5b800e24ee7"],["posts/63295/index.html","91f01b10329b96acb15f5d2dbef6dbd5"],["posts/63613/index.html","012b9ef697f88cd9f5fbd775a2180884"],["posts/7734/index.html","1c9a8285dd8014eb830c359da3071a61"],["tags/Data-Sturctures/index.html","830132e5ee943d09b3611d7de3027e70"],["tags/acm专项练习/index.html","9c113b41b6067165a4cf65c5ba04feb7"],["tags/apotheosis/index.html","e2968fab14c3e6dfec764cc02d2c0f15"],["tags/c-基础实战/index.html","7eb5563e823f4ae25c3a7ee44fc144ef"],["tags/c/index.html","cdada065c5983c741d7f95a7b3f7dd0c"],["tags/index-1.html","1eb58df3fd6b73d7e94fed89337d7e99"],["tags/index.html","7b1d56fced88ac863ff0ba1799699320"],["tags/leedcode/index.html","9a3a990bf65e062cca402cec4b9e2650"],["tags/linux/index.html","525b0ca4a33e0fdefc61df5add167bc7"],["tags/linxu/index.html","fa50f0d4537037fec40c84eaf6e56727"],["tags/python/index.html","6f6f8b09f5da124d6f7f0e6b0554c473"],["tags/though/index.html","830661728643c224e2cc34081501d39b"],["tags/tree练习/index.html","5fb886017194a27278f6dc93a1c09e77"],["tags/字符串序列/index.html","924e0f7f051d6dc16a31cb573e64b34e"],["tags/字符串系列-匹配算法合集/index.html","7ca8652f4849cb0cac9d80c800fa9fd2"],["tags/字符串系列/index.html","8765de5c7f8e567862669279f6e07ecb"],["tags/操作系统/index.html","2dfea246061ce3c97607a86bfe8a08e6"],["tags/操作系统开发/index.html","fc57aac6471162316b0e27ffc151bab0"],["tags/数据库/index.html","faac01f6e1fa52ea511a55cc7975e770"],["tags/数据库高级/index.html","1e75c4e1d2b4b27139efe24a0aef2f3f"],["tags/数据结构/index.html","9444549a021dc229f273902dacf11f4d"],["tags/算法/index.html","2ad60a395fffc647574f68fa681218a9"],["tags/练习/index.html","8e306d87249d9f87a266b6ca56552057"],["tags/编程语言开发/index.html","a619615c02ca538e2268475cda2ce8de"],["tags/补漏/index.html","5b5706ee1e62dcee38495e01f7f2f45a"],["tags/计算机网络/index.html","fd1dd2f996768335f8cd8357357aa81b"],["tags/面试/index.html","436d9d48a8a366c4c565b9cc5541b7db"]];
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







