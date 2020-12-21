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

var precacheConfig = [["404.html","3bdc5f52463554219f89b40338edd7f1"],["archives/2020/09/index.html","4e2d256a0f7e30cd51954c22a09b1a78"],["archives/2020/10/index.html","7c4b7c302f46f319f097e0c44f37d910"],["archives/2020/10/page/2/index.html","c703f4bf1a64fc6aa1ffac584aa984af"],["archives/2020/10/page/3/index.html","3dcc805044199c4364f8371fe779e383"],["archives/2020/11/index.html","7082cbedbd4e5446c398dceb3314eddb"],["archives/2020/11/page/2/index.html","ce102ed9bd08297c08e3e366458573ab"],["archives/2020/12/index.html","9cfb4e7233e162243a2a6d08291da950"],["archives/2020/index.html","f7809738f7e37431579b8f16c0e09844"],["archives/2020/page/2/index.html","93e78ea4075f25a179555b8a4a5845ab"],["archives/2020/page/3/index.html","d470342a5d02f6b750dd9298e14ce65d"],["archives/2020/page/4/index.html","e306c2c1894a52ae160b14ea886514e4"],["archives/2020/page/5/index.html","458c7ad4ab730c67b0353e2bd6a957d9"],["archives/2020/page/6/index.html","372b079c4f684fb92c0dca8873998641"],["archives/index.html","1407f51a5c2b991777ee2fbe3479ee12"],["archives/page/2/index.html","d4d4c730ec859fcf87886c3de314018e"],["archives/page/3/index.html","3401b110fddf22113e622483b7484a18"],["archives/page/4/index.html","15bebf44781cde4567f9fde95a5a6a93"],["archives/page/5/index.html","24d26a5b22522c153f9fef34d869bec6"],["archives/page/6/index.html","ae6ca7d99d09255a2556936434872af6"],["assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["categories/c-关键字/index.html","44dd842cb1d22db4b7f41b956a6e56dd"],["categories/c-基础实战/index.html","6d9acb18f4bfd6eb6dc793af0da7d067"],["categories/c/index.html","fae3e858c4e15405627daaa77f12c58a"],["categories/index-1.html","0e090f8c94e46731171d1ff9b548995a"],["categories/index.html","a97a45f6fb6e15c23638f0ecde02d0ab"],["categories/leedcode-链表/index.html","231055d56dc2716e18319a76c5635053"],["categories/leedcode/index.html","004e159883050ce4347946b9799177d0"],["categories/linux/index.html","211206f47bd386563e8f4135f343bf51"],["categories/python环境问题/index.html","03cfb92c7e79af002553399d93cc246c"],["categories/tree联系/index.html","911752291f44ca0abe99abbb5ef7b200"],["categories/优化/index.html","9c44483ff999e000dfddbea1d0cbd222"],["categories/操作系统/index.html","6795a3db6ddea51ce5ab3540a7d989b4"],["categories/操作系统开发/index.html","df4fdc0e180824f52391092be3a5eea2"],["categories/数据库/index.html","d0468a8e74db1f5db92b814eb9fbffdb"],["categories/数据结构/index.html","31b2e66cbf441b42d52118103c4746e8"],["categories/爬虫实战应用/index.html","e5f70b870b004a3f0a85fdcbbe472215"],["categories/算法/index.html","46b6d255d236ed2a81fc7436a2f18d5b"],["categories/练习/index.html","fb84c8ece20f0c660eaf1fc44943974e"],["categories/编程语言开发/index.html","615fa42b1012d17d038b6900f234ef06"],["categories/网络实战总结/index.html","f860401ddfaaef7efc04d3d0739cdbf5"],["categories/补漏/index.html","d0fc211d197306a792188a214d535681"],["categories/计算机网络/index.html","e69dae01d042876a8a053bb48093beea"],["categories/面试/index.html","af373d9430bc6e84ff4bff996d1da484"],["css/background.css","5bb9900d1bad9cb1e3fce454bc255d7f"],["css/index.css","6820a24dae33f2f98a11a1038eb0b48f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","50bc90520c686ea8500981de89985d49"],["img/bei1.jpg","60bfcaea92765d01bb04672083dac266"],["img/bei2.jpg","926a9ca3033eb9a0ed6aaf54ee66d4b3"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/qiao.jpg","e919f8fea62f9a9786ec9cf2ea72d1de"],["img/star.jpg","b0733874fc43bb9e495440990e0dfd27"],["index.html","51cd5d8578ba0b567a2ea5760901c7c0"],["js/main.js","4898030387012f8af71563ef8353433a"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","6bebed368a1bbcb630dd146cefb103b7"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","64d1e1837ad1a585888f5d1e16c71f77"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["js/utils.js","f91ea1a86a5c45e344a24fb437642f36"],["live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["messageboard/index.html","ab98df4404af16019d43c215cbb13776"],["page/2/index.html","bc3ffad6c3307ddafa6b23a2500a2604"],["page/3/index.html","efd417f3cfd33e58626845b8a7abc43a"],["page/4/index.html","f91b713e2103261c673fdbdeed1c1ee0"],["page/5/index.html","f85259b7d5536e1934edc6d6feea0513"],["page/6/index.html","189042c8962565955057859925217bee"],["posts/1/index.html","6965003f36c1c63c210e10ffd0486007"],["posts/14192/index.html","c6b43c7f659fe15096f21a9b1c498c33"],["posts/14686/index.html","8946ac511cceeb167cee6e42c4f814e2"],["posts/15411/index.html","fa5c2676658f534a90fb992be16f5ba4"],["posts/15731/index.html","e4de6750c2cc94d6eed165dd3751f906"],["posts/16097/index.html","0397e792f42d755f02c93398a6a190f2"],["posts/16107/index.html","3c46c64284f419584681db527b7e1468"],["posts/16108/index.html","382c29673467a3057a3430fc9af8d625"],["posts/19586/index.html","4a812a6a816f471315a2839ba0444a7f"],["posts/19628/index.html","f789dcd0744911ffc35e46da9e132c2f"],["posts/21322/index.html","8e3e26373a0f9e014c0b64496c45fe72"],["posts/21795/index.html","5fc44f365003ac59a4b4076cb8a846a2"],["posts/21911/index.html","bb0b9e16587038bc0c9879f69f7db2d7"],["posts/23469/index.html","875bfb753e4abe7d82da517fba1f3bf0"],["posts/23956/index.html","0100ccf324844a804c7dc4ceec0e1556"],["posts/24148/index.html","2c724c3f455f14f365a212074f7e5873"],["posts/24340/index.html","34b4b87445dbf7850e7f380b05b7c4c7"],["posts/24504/index.html","49de6e5721cfeb0d68d63ece3e514c9a"],["posts/25345/index.html","9c026c18b903539652aa6c565a8e8d6d"],["posts/26821/index.html","84dfa9b582a7f74e73c42d9ae7d3eaa7"],["posts/28273/index.html","5081d79ad1b80b6866b12dfec6654544"],["posts/31131/index.html","646e9e63f31ba775e4bee815467af125"],["posts/32473/index.html","e5d0dfa2d9a4cbbd667b6a17aa14e0f2"],["posts/33531/index.html","bab07de126383457c588b657e39b8afe"],["posts/33723/index.html","c0803bf50c26c5050a0f773a84c616f9"],["posts/34955/index.html","20f08c9314f895a6b5c43f677df9fd23"],["posts/35949/index.html","766bf4da793aedd57bfced5fd5469ca3"],["posts/39404/index.html","7c675c20055e54c99fb53e6eaa3cf795"],["posts/39788/index.html","3f97a815780b112cd4f0496f8188b20f"],["posts/40133/index.html","a54244d4c4035dd462da585185544342"],["posts/40290/index.html","43e4ea36eb863fe032bd99c0db4ab63c"],["posts/40325/index.html","cb8f4ead4d2406b72ef562853afc598f"],["posts/40917/index.html","e8e25eb2667bb3542ab3ff874b4ac2ec"],["posts/42182/index.html","acb2720839aad43e3925fdd665e49217"],["posts/43760/index.html","5127be85ace087cd9c1d874b31df6685"],["posts/43952/index.html","d15bef01a6c5169364a068c173ffa2e3"],["posts/47607/index.html","067d0571833237b22b3c3e4eadce613b"],["posts/48539/index.html","d0fa3f65a7f1738fc06962c86e4e669f"],["posts/49861/index.html","4635dc17f0a45d551087da840f4fbaaa"],["posts/49877/index.html","b869fe484d541e65f0e7acaf1311510b"],["posts/50097/index.html","2ba14e47124f571a91b1d374d50a8705"],["posts/53868/index.html","3764442f9dd7bf8274848655edb66665"],["posts/54839/index.html","8321da1b6817eda63023e9f303baef60"],["posts/598/index.html","f2a84f331eaa76db5b687423c83c1a97"],["posts/59942/index.html","ab20236f7b888deea8b4c20de316c962"],["posts/60133/index.html","a588db029debd6dc7fb4ec628b5078d1"],["posts/62607/index.html","294b35d11b515870da4d7ea408d1b673"],["posts/63295/index.html","9254a7380c7d8ffc81da0770cbf470d9"],["posts/63613/index.html","9c19d4aa2eea5455ac2bba1f0e987303"],["posts/7734/index.html","4077ccf2ddaa3ffd094f4291f13fb14f"],["tags/Data-Sturctures/index.html","ad8ddff38d171d83b9f1d3bfa349fb23"],["tags/acm专项练习/index.html","3e542face079f0c7f512d4571355e02a"],["tags/apotheosis/index.html","0ba7c58943b929e6e9c98696fc9d58d2"],["tags/c-基础实战/index.html","f787933b9525c01bac26819ec7295276"],["tags/c/index.html","7842612a5f48b4fa5bbc98510d597f7a"],["tags/index-1.html","fe389c8f71f9875bcf4f38efeb9fcacc"],["tags/index.html","37e175f93bf1b30146f91638d222f72c"],["tags/leedcode/index.html","e78c4c5e7b61caa3f4e0a40d5528577d"],["tags/linux/index.html","294c169a2add7f740194b2aa035d10c6"],["tags/linxu/index.html","bb95eb407b5bca3688e17eee49b3321a"],["tags/python/index.html","bbe6abecefa8e1ee225d9c6be70bae88"],["tags/though/index.html","b8125a5d763ff8b7f8e127b151008df0"],["tags/tree练习/index.html","62e7d952f5d96d95b7521d23bc134644"],["tags/字符串序列/index.html","cd9002fa90df8306717816abf38ce311"],["tags/字符串系列-匹配算法合集/index.html","a5ac89caa56b25db7951375b0d51c798"],["tags/字符串系列/index.html","83cbe69f0b6dbfe6fae4b7cc09d2cba2"],["tags/操作系统/index.html","5e42dae4d3e4297eb29d3638381914bd"],["tags/操作系统开发/index.html","a06c2e548a91738b609dfff190746100"],["tags/数据库/index.html","44ef7e946ff29c1e666fc01a2750ae36"],["tags/数据库高级/index.html","cb3b026a1a54ed03694568021d34c12e"],["tags/数据结构/index.html","ccbd06528031b84d23a50d6150070116"],["tags/算法/index.html","c6b4bb93ae219225684a90e2886abe6a"],["tags/练习/index.html","77529e12015f96fb807771258b00f8e6"],["tags/编程语言开发/index.html","a4f3f557b9074456814752900748bf67"],["tags/补漏/index.html","886c17e7836f6661e7a23cf692fa27c0"],["tags/计算机网络/index.html","80b33f93a1694d0e7a32404377d192f0"],["tags/面试/index.html","b4a9b865e6aa472dc2358ecbf73c9fe4"]];
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







