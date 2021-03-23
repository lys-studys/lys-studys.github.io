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

var precacheConfig = [["404.html","5ad6dea4e5c2ecc975809f062e5e6435"],["archives/2020/09/index.html","2c4468b2aa8fda86bd7dd384d8bc83d9"],["archives/2020/10/index.html","45544d5393072a03f5ef9f68a824a63d"],["archives/2020/10/page/2/index.html","c186083198af8a9e48441d3a06d1e023"],["archives/2020/10/page/3/index.html","10d210cccfa8fcbde17509e788cbcee2"],["archives/2020/11/index.html","dbb79b63f71ead1e8b0fbe031d54196d"],["archives/2020/11/page/2/index.html","6a1e1453c813c8879767a0636a0eaac9"],["archives/2020/12/index.html","48f088ea14a2a595d166d5226ef8d789"],["archives/2020/12/page/2/index.html","90245ce2d78cf8fc3c5018689d0907af"],["archives/2020/index.html","16d1d5279e9b17e7bc08d0d2595d511f"],["archives/2020/page/2/index.html","c5409056f148887bea9c72be51399ec6"],["archives/2020/page/3/index.html","8e9f365bd474e24e0f69d5b176b11f4b"],["archives/2020/page/4/index.html","3d33deccb756092710cc5a4750547718"],["archives/2020/page/5/index.html","8269c76229112e4b4fb9fc6e63af2e9f"],["archives/2020/page/6/index.html","b8ef60a2b490ec114dfbbbf748d9f133"],["archives/2021/03/index.html","9470f403aee24fec985012e85dd03833"],["archives/2021/index.html","5533f73045b364a77cabf4ca4a3d9e41"],["archives/index.html","76892f0e307ff96a63a2c60343c82793"],["archives/page/2/index.html","6fd64e3dd2c9d434faf8111f02ac25cf"],["archives/page/3/index.html","74bc569cc160371e6a1927b362343d02"],["archives/page/4/index.html","09e3b8eb1ed29946050abbb46a5cb652"],["archives/page/5/index.html","022cb964106a70ec6191e2c7c13bd0cb"],["archives/page/6/index.html","632a8ecd7063161a7791437b557b7b60"],["archives/page/7/index.html","5aa58559696739f2121a36c153426776"],["assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["categories/STL库/index.html","169a10978a7a4714b0207532e76ee7ab"],["categories/c-关键字/index.html","3115d944c03e34474f5a300faebbe8d4"],["categories/c-基础实战/index.html","62f1b9e4bab931cdcf337f429a234df4"],["categories/c/index.html","75fdcf1fec662ed61e5ad8cc33656b6b"],["categories/index-1.html","45f491678aaed6e9c8d5292e31e0a5af"],["categories/index.html","45acfa97f3f7ae928643c4305692ee88"],["categories/leedcode-链表/index.html","47e1b12fb24c5edb810c1b95623fc03d"],["categories/leedcode/index.html","50bcbc9ad9ebf6e85973de3357d5a700"],["categories/linux/index.html","b1c1013bd458d6d05f51b37fbdf71ca7"],["categories/python环境问题/index.html","9c612db52e5d4ee68385d7052f64e466"],["categories/tree联系/index.html","056a2e025f941b7c52e3896effd7f356"],["categories/优化/index.html","a1db71b23178c2bc5fadd10ef96a5c30"],["categories/大数据/index.html","688caf5d2871272a518206b312945905"],["categories/操作系统/index.html","269d3c8fba43ba522009fc621fac2d4d"],["categories/操作系统开发/index.html","0e748f830d6866dd0e0ff8c144f69115"],["categories/数据库/index.html","1da5998fd424b612d7c5347251030700"],["categories/数据结构/index.html","fd4fa0fe49d9f1641c327b3d94fa04e5"],["categories/爬虫实战应用/index.html","0a66c71007c5aa872d8a239f3b37d4a6"],["categories/算法/index.html","c7425005d5555c3b81037ca5cd98ab74"],["categories/练习/index.html","addf478aa257f446b78f26cc0c30b794"],["categories/编程语言开发/index.html","b16c455cda7b7d549e11351a1c42926d"],["categories/网络实战总结/index.html","05b85de9b1e658db6d595206d2ead270"],["categories/补漏/index.html","0db10a6ba7b5618fff555163e7897256"],["categories/计算机网络/index.html","bb61664b5eb2ebed179556493ce956e7"],["categories/面试/index.html","a82ddf13e66476fbb62c63585974cd88"],["css/background.css","5bb9900d1bad9cb1e3fce454bc255d7f"],["css/index.css","6820a24dae33f2f98a11a1038eb0b48f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","50bc90520c686ea8500981de89985d49"],["img/bei1.jpg","60bfcaea92765d01bb04672083dac266"],["img/bei2.jpg","926a9ca3033eb9a0ed6aaf54ee66d4b3"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/qiao.jpg","e919f8fea62f9a9786ec9cf2ea72d1de"],["img/star.jpg","b0733874fc43bb9e495440990e0dfd27"],["index.html","f2a5aecc50a281224413f0ebaab612bc"],["js/main.js","4898030387012f8af71563ef8353433a"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","6bebed368a1bbcb630dd146cefb103b7"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","64d1e1837ad1a585888f5d1e16c71f77"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["js/utils.js","f91ea1a86a5c45e344a24fb437642f36"],["live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["messageboard/index.html","de76d5b22320c2dfe87bf972da5f2556"],["page/2/index.html","79040a43f5f7deb84a882a6ca3c37b40"],["page/3/index.html","4fc646d26705b297f02b52496ea55c4e"],["page/4/index.html","0f66ea441e7c6560840c54ea48ceb309"],["page/5/index.html","c66847bfbf87737c3975edf697d3cb59"],["page/6/index.html","75883baf9651faee77366e27386512a3"],["page/7/index.html","253b30ad1816b4c9d948f3f2c02efc0c"],["posts/1/index.html","c9e20bf519719e0343a6cd0a678ba8e2"],["posts/14192/index.html","25d5d56ab3989cefe50ab7f08b1d0b79"],["posts/14686/index.html","69b19b4d9b20c7fb22d41d9884f7f5d4"],["posts/15411/index.html","0248e42a9f136011366f0ac54fe8df96"],["posts/15731/index.html","0b45b890f84b5b2ae5f139bb263ccad9"],["posts/16097/index.html","8d5daafc203ce1c1bad9e8b10af7492f"],["posts/16107/index.html","95b0832a9f3ae0e27f9ebd8542646107"],["posts/16108/index.html","94f877b9dc08414a7c53eed59c9002dd"],["posts/17385/index.html","d420ffde6ef13834d01bab0c6cf177b3"],["posts/19586/index.html","1f3e24407db1dd08a9d9f0521c042317"],["posts/19628/index.html","3bdc8b7d7870de00b20f65295599c35d"],["posts/21322/index.html","2034c81409d853949e2ad1f9e219628f"],["posts/21795/index.html","93454911cf1f89f1aaeeab19d3fbb408"],["posts/21911/index.html","5100c380c59c8088885e90afbbbc64fb"],["posts/23469/index.html","383bc6dfcffa6df206d3c73ca3a70e05"],["posts/23956/index.html","bfe40b79c54b1253b90cc370f911a3cd"],["posts/24148/index.html","c57e0b4b86e8d75b13c371b3a7ba068d"],["posts/24340/index.html","53d325f147906d16d50350f49658ab0a"],["posts/24504/index.html","b66ede9f8d681eed8624d71360924e0e"],["posts/24772/index.html","e08efa2929184c10d3df8875cc94952b"],["posts/25345/index.html","6abd4ffd45264b0448f0df503d57f7c9"],["posts/26821/index.html","0219b0f8a49446b0f162eeaddb63e59c"],["posts/28273/index.html","434edbbc21027bf1ec400c3135752763"],["posts/31131/index.html","0868fdae431e4b4ede12aeeeb9941d1f"],["posts/32473/index.html","c8de371d8480037af37ef1622646570d"],["posts/33531/index.html","6e47540fdf702398f022a782c9f47e74"],["posts/33723/index.html","af0c688345723db50bc5abee49957452"],["posts/34955/index.html","45035b44cd0c0d70e9bde797e3be3e38"],["posts/35949/index.html","e8fb1344d01a94666fdb54eabc6ea61e"],["posts/37850/index.html","4a796ff283bf4605221606d3b701e011"],["posts/39404/index.html","226fd9886f1d0182db050acc78ac7d44"],["posts/39788/index.html","0cb3c2a97c87924b179495b6bb1354b6"],["posts/40133/index.html","2e1804363bd650816d3c3e7b294769d6"],["posts/40290/index.html","a43dbb43672ec4ab0f60ba1e9f6d189e"],["posts/40325/index.html","bae99883b32720e15659141a6f9d69bb"],["posts/40917/index.html","4ffdf5cc4fe85086cb00d9f38ec9356d"],["posts/42182/index.html","592dc84aa5277b94b5dfa1a303088315"],["posts/43760/index.html","18a1ec699b772ffda273ce8076ca5da5"],["posts/43952/index.html","5101db02a2c41b19e1a582bb6074c47d"],["posts/44296/index.html","f05e4e85ed129ddb510e0dad67a3d52f"],["posts/4515/index.html","d9583fcc2a35729d16b782b9eb618fb8"],["posts/4524/index.html","8eaeff3c3c29d3c7f89805f9ac91504c"],["posts/47607/index.html","639bb8481123e7dcbc4894ad85540e1b"],["posts/48539/index.html","8e841f33edecd7f1befb26132a4bcc21"],["posts/49861/index.html","a03bfd1e447be9d04a9eece41bba8c95"],["posts/49877/index.html","be22920bed397d51e506d5a5f80ed9ec"],["posts/50097/index.html","556e7c98d59e1192be91a653112447c4"],["posts/53699/index.html","1d9c2bf762a0c6979d8ab19855d2c5e1"],["posts/53868/index.html","85a6bc7cd4387da30ef18b3dee6f8717"],["posts/54839/index.html","ce0c3f32e16eba98eaf69688f8db7ffe"],["posts/55244/index.html","e340ed6316eccfd5168b0e9ceed8eab8"],["posts/598/index.html","95ea9a739c656a9832a50644bae82111"],["posts/59942/index.html","0ecb5466e6e131e70fa2f346be109d4f"],["posts/60133/index.html","f17b12feb84425e9fc7efd968317adb7"],["posts/60234/index.html","6ca61b70e5519877e799c84095b3e004"],["posts/62607/index.html","c91e0f96b92878d34d845567b298d32e"],["posts/63295/index.html","99b3b9e27b8098f01db78f2705077c1a"],["posts/63613/index.html","431031a8eb714c22ad1f2a52fd4b3a14"],["posts/65250/index.html","2d8a51db614dec4953cf6676b6b35ce5"],["posts/7734/index.html","a582f05ec57b737bd41c96a890026839"],["tags/Data-Sturctures/index.html","5ea6711e0650b0196a00b0e76362ebee"],["tags/STL库/index.html","47ebfb285938792a5f2d27b9994f7ec5"],["tags/acm专项练习/index.html","48405e14d67517abbe348023d141a4e8"],["tags/apotheosis/index.html","8dac0110c2701d15a48483fb4e110899"],["tags/c-基础实战/index.html","9c4b5d68953e79f35f0ea0c7c7e6d80c"],["tags/c/index.html","47087c63eab89564c0e08ed018d3757a"],["tags/index-1.html","6e997520649cf5f6fb1880cc5a8cb050"],["tags/index.html","8942ceb7cc996f4ac45a25679e6e8708"],["tags/leedcode/index.html","632be37acc6f63d033472ebd1c62634d"],["tags/linux/index.html","b5878424f9a4c644138091b432ef3cde"],["tags/linxu/index.html","bb248e42c5c81af7f7c9ce459e8304ea"],["tags/python/index.html","266392347b18af5a2447c62325953ac0"],["tags/though/index.html","7fc791fdf65eb9f2a22ee0dd62e4cab4"],["tags/tree练习/index.html","ee41702faed9c87993a7d8f985f0bb48"],["tags/大数据/index.html","842b833ccd9730024b66aaddd16591d4"],["tags/字符串序列/index.html","2c887dfe6b0d992353b3a5bf63fb7478"],["tags/字符串系列-匹配算法合集/index.html","a15e2c5aed168a3d2df5eaf89202635e"],["tags/字符串系列/index.html","44bcfc015fba8e3765bcdb3c1698edb6"],["tags/操作系统/index.html","320cec3afc33ae493021eeff367735ac"],["tags/操作系统开发/index.html","a7f48a3290b10c28e585872c8c872dcd"],["tags/数据库/index.html","c7236618a2dc4d51247b0d24a9cc695e"],["tags/数据库高级/index.html","4389c80041a017f6a69740df74fce493"],["tags/数据结构/index.html","5e3e8a5cc77efcd2a738920d98ce66c1"],["tags/算法/index.html","b8f5a21fbfe22fe9cd50375eed58b479"],["tags/练习/index.html","db335ecf9582446345ad77120c6f4993"],["tags/编程语言开发/index.html","efa8d280de356cbca60d273e08cca801"],["tags/补漏/index.html","06c2b4aa88977c503a74b712b28fab0a"],["tags/计算机网络/index.html","f91f56d3c8b7608b553d517e527ae517"],["tags/面试/index.html","623466efa52f28ceee939edddf920f5a"]];
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







