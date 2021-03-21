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

var precacheConfig = [["404.html","7af16684d16069bd0c9e6fad6ca02837"],["archives/2020/09/index.html","9c4b2ab64f383c43a9eb941e9fba010e"],["archives/2020/10/index.html","b3a00bec93595ac7f8da0c007f874d4c"],["archives/2020/10/page/2/index.html","814c020542dbcaf09685262925cd12e4"],["archives/2020/10/page/3/index.html","ba8ee6ace7cfdeb997874e9e07dc6ade"],["archives/2020/11/index.html","0c85885ec4b816a82e26e4c1295bdbbc"],["archives/2020/11/page/2/index.html","eab6e1389172da5ff3e574100ae7adfc"],["archives/2020/12/index.html","d08d874039d4b01de07eb95cd1c39418"],["archives/2020/12/page/2/index.html","2042b154e8e001cc5dcb1999c8622284"],["archives/2020/index.html","460d618a4855872bb0659c490c0fa44b"],["archives/2020/page/2/index.html","3ade26f5e21d98341f4438443448a4fa"],["archives/2020/page/3/index.html","bdf4146afe80d963b20cd7ca4389ff57"],["archives/2020/page/4/index.html","b35dedf08619e3af66831648ec6dc320"],["archives/2020/page/5/index.html","d42576fc1ec4a02a3edecb4ac1804a82"],["archives/2020/page/6/index.html","bfd656a17bb0979f552a12dc93404791"],["archives/2021/03/index.html","60a0c6eb8bacf8bbc88272917bad7c05"],["archives/2021/index.html","3bb144e436cb0af1dd71ec980712f174"],["archives/index.html","8c0e6c7616e15d9df2173ee373b0bdde"],["archives/page/2/index.html","2b554c490b1941f11fcfa075625c6d5b"],["archives/page/3/index.html","3923aaa4a2288d238064a97fff3904f1"],["archives/page/4/index.html","2dffa5063d8ffb6d70d3f5cf52127fb1"],["archives/page/5/index.html","6df01bbe42a314dd8a4ee6bf2f13e87d"],["archives/page/6/index.html","6b3f95ab2455680a8bc2cdf630b5e191"],["assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["categories/STL库/index.html","d552f1d95fac8ede3f39a2e4c811340c"],["categories/c-关键字/index.html","11acd2cc9f1096cfb99f7f483db9787a"],["categories/c-基础实战/index.html","80e61bcf4f3389614c7e2ab2ccc838e2"],["categories/c/index.html","62ff7ef5cb742bbb8f92a2c701de93a1"],["categories/index-1.html","d414631a28cad8490145b0f1a398c73f"],["categories/index.html","4afedded4bf24d6038b808f9708b94f4"],["categories/leedcode-链表/index.html","4dcb5b3c01a9391bc022428008826914"],["categories/leedcode/index.html","21cb635866ab67baa704d392d005b716"],["categories/linux/index.html","f939f1353c73410b30476162da7b0f38"],["categories/python环境问题/index.html","48a9ac334fc9614276ebefa9c6d6626d"],["categories/tree联系/index.html","01210ff1695574e5172afc8dc2485e76"],["categories/优化/index.html","13f9d83260a8c1a69696cf100e4ce44a"],["categories/大数据/index.html","61383d638bceeadabb2885f23675a6f6"],["categories/操作系统/index.html","3cf1b4fcb1f81edfb8eb9eb8aeae030e"],["categories/操作系统开发/index.html","d2e5a5ee3eafc3386fb214f6a072f15c"],["categories/数据库/index.html","ee39a69505817e784c21983ab65c151e"],["categories/数据结构/index.html","23c04b7cc47e75bce16ca3207b6ced94"],["categories/爬虫实战应用/index.html","1a75ffddfbbc4855066ca2e2e6280de8"],["categories/算法/index.html","65242a2a7f5848f67501873ccb158d41"],["categories/练习/index.html","70649d6fa706d7da7becf71b3e4b8e98"],["categories/编程语言开发/index.html","3d0c26895770381447046f3a3de88587"],["categories/网络实战总结/index.html","41c583f63c3b2f0723b1e8b617fe2abd"],["categories/补漏/index.html","ecfb46c193236b8c268986e424cef89f"],["categories/计算机网络/index.html","8cef41ab7603fa6a45f9ae81aedb211d"],["categories/面试/index.html","bf3c0de7accb0c5b9dc53ab925a30890"],["css/background.css","5bb9900d1bad9cb1e3fce454bc255d7f"],["css/index.css","6820a24dae33f2f98a11a1038eb0b48f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","50bc90520c686ea8500981de89985d49"],["img/bei1.jpg","60bfcaea92765d01bb04672083dac266"],["img/bei2.jpg","926a9ca3033eb9a0ed6aaf54ee66d4b3"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/qiao.jpg","e919f8fea62f9a9786ec9cf2ea72d1de"],["img/star.jpg","b0733874fc43bb9e495440990e0dfd27"],["index.html","ed1290c09b89798dee07384e31b9e1cd"],["js/main.js","4898030387012f8af71563ef8353433a"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","6bebed368a1bbcb630dd146cefb103b7"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","64d1e1837ad1a585888f5d1e16c71f77"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["js/utils.js","f91ea1a86a5c45e344a24fb437642f36"],["live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["messageboard/index.html","2e4c3879884100635763e2b889d1137c"],["page/2/index.html","1c7c7d86fb4eac835cceee43d9103f7f"],["page/3/index.html","648fccf908dfc66f5d8588e7a8e31de8"],["page/4/index.html","e35d7d57e5d3172fb1ccf80cc4cb5a2f"],["page/5/index.html","3553bc35f8d458d99658f6a46f7bbb30"],["page/6/index.html","6b90fd50315c97f36b1bbbf3595df987"],["posts/1/index.html","3b83ee42463eff45fadd629066b90b8a"],["posts/14192/index.html","3fecf3c559d0603ea5a2993019e783c0"],["posts/14686/index.html","0b3e821c02c0c8ad783206f44c5a3ba8"],["posts/15411/index.html","374149debe10fffec15032741df5c473"],["posts/15731/index.html","10cd7092eda7a0850a3f30cc74bdd6f3"],["posts/16097/index.html","6a4f16e20d54f8f835908b978e40a8bd"],["posts/16107/index.html","0655f3cdb006397a7c687658d011242f"],["posts/16108/index.html","214b827b6ed87f2a481b6a2166bc11d5"],["posts/17385/index.html","4a92ae60565396d12027831f5b2fb481"],["posts/19586/index.html","a6a4e690b30445c3b7ef1ae3cc8b4ba1"],["posts/19628/index.html","2d91c7e5b815bc9fa35ec92835485090"],["posts/21322/index.html","be349f05e7241e8ff387c1d41213357f"],["posts/21795/index.html","003f192015199e1f6e487669841d860f"],["posts/21911/index.html","7dfa76d6f05532f75bbf125d5fff40e4"],["posts/23469/index.html","6e94e2166032e953f011d9cf39e258b3"],["posts/23956/index.html","9722e0a7b7545d342759503479cb61f7"],["posts/24148/index.html","6cc3c235d6964d523cae6114ffe5ddbe"],["posts/24340/index.html","3be47ee4ad2ef530a465f7e78231aab2"],["posts/24504/index.html","cad1b2516bb2565729d65d1f3edfdbbc"],["posts/24772/index.html","bf3cf9fe6a309e3f8f5bc56f18a93a56"],["posts/25345/index.html","45f6cde9bf9ef2ea7994abad6d9a075e"],["posts/26821/index.html","9b802b4c0497421befdba377390c0b4f"],["posts/28273/index.html","09eb78221c1fb4663a1f680529fb4a4a"],["posts/31131/index.html","d42dd29e964f68df068eab739e4e72cb"],["posts/32473/index.html","98f151053a99f8842bc629d483161a71"],["posts/33531/index.html","a942a79a11a680bded7ce9c4a30e359f"],["posts/33723/index.html","898fc5f59f060fc332c2b4f26424e202"],["posts/34955/index.html","c3f7d2a3bdb887d02ac517b128f52ec4"],["posts/35949/index.html","163540e635196b44a42eccde47edab06"],["posts/37850/index.html","47039949e9635a2859c5556b18973995"],["posts/39404/index.html","9430b60767b5480876c56b354f024dd5"],["posts/39788/index.html","4e43f4c5eff0a7914327f761cc68b6ff"],["posts/40133/index.html","2f335153f6162fd53a2d8d57e1a23d98"],["posts/40290/index.html","b726e6816b60d89aec5341b6dad9166d"],["posts/40325/index.html","e5eeacf603886eee53598c28d2dad948"],["posts/40917/index.html","1b6680de1c973a7825fd203cfacaaca7"],["posts/42182/index.html","aaac4612e8df40958ebae4d329e89c81"],["posts/43760/index.html","328dc35168a2382415646c802d6e8b67"],["posts/43952/index.html","d96221eac9eb79aecc2dabecfd85464b"],["posts/44296/index.html","515e334423b6844b292a2edb457b099a"],["posts/4515/index.html","3a8e287d175bcf0c35cc65860bddf768"],["posts/4524/index.html","c7df9e70e0c301ee7c1f7a9c684fb1eb"],["posts/47607/index.html","15ae0e8b2b28468eaf88dbdb519476be"],["posts/48539/index.html","ecb35f2b9947b1bb55041eab20776297"],["posts/49861/index.html","9fcd824f07023853ab160aafff6b4bb6"],["posts/49877/index.html","41db6d7f07a0cd6956e48e181cd74fa3"],["posts/50097/index.html","19fa25719772b401076910ab6a4138ea"],["posts/53868/index.html","877e23c28db7f277b49d4f131ddaf6e5"],["posts/54839/index.html","209950f39e34212239ef612c4250e798"],["posts/55244/index.html","8c3653e00085a30f22f775930c72d9c4"],["posts/598/index.html","1254443bff9d2db2788722859035226d"],["posts/59942/index.html","0634a5b6bff6a217d6c693cad31cbb03"],["posts/60133/index.html","6742e5b0aa35c9bc24a0eb6ea1a454a6"],["posts/60234/index.html","04fc03fef52a70e00ec479106a29cb5e"],["posts/62607/index.html","1d7f9104be62f498a9fc62a85052b495"],["posts/63295/index.html","d571ffe2d2c7a77a6c8b101341081a4f"],["posts/63613/index.html","9d000facd6ce206da5554effc06b393a"],["posts/65250/index.html","ac5725e67bf6c04757a093301f67c61a"],["posts/7734/index.html","a57e1b22be74ed486dadbfcd09a28048"],["tags/Data-Sturctures/index.html","4b7480035cad893e0201ddffa8c691e6"],["tags/STL库/index.html","d7f0955caf9a75de923e69a9e1145f42"],["tags/acm专项练习/index.html","d32d246d9511bb0d4b3c78a27a388e73"],["tags/apotheosis/index.html","5fe9cb9daaf49d8fe9eaa85a2fe33410"],["tags/c-基础实战/index.html","c35ab7dc8342aa03ffa7e9075d92ccf0"],["tags/c/index.html","1e99973ed8200fe06682630d3198bf95"],["tags/index-1.html","c7b4660b5800ea8d26a9e6695c4626e6"],["tags/index.html","60628263ecc95e3c0dda32a5be022d48"],["tags/leedcode/index.html","8e81b414ec2c23befd1f483f56963cc2"],["tags/linux/index.html","023d437fac6cf4c2d58c2a1fcc7c6b8f"],["tags/linxu/index.html","9b8a514afbbdad6d18c94bb2c6e45808"],["tags/python/index.html","6d71d0841bf978c757e2866335ea335e"],["tags/though/index.html","33d1def382fb10ae50957acc4827561b"],["tags/tree练习/index.html","49e9810798fbd087ef12367ea9f313df"],["tags/大数据/index.html","c1dcb6ea22a7afc0940c04240bb49f3d"],["tags/字符串序列/index.html","3c7b79232a792c4fedc3c3ee35ad1f78"],["tags/字符串系列-匹配算法合集/index.html","ab8af4edd63948c4ee49ea1583394871"],["tags/字符串系列/index.html","b0fe3879330a69d31b5fa9a62145d1b3"],["tags/操作系统/index.html","161935bd8302a076cfabcea2c1958bcd"],["tags/操作系统开发/index.html","82e1a3cc0d81f5a562a47b447827c241"],["tags/数据库/index.html","39ee6f4563b1e65cffec652c8b5c8c93"],["tags/数据库高级/index.html","4ce2a2f099e4754ee13012a50af3e1bf"],["tags/数据结构/index.html","526daa5eebdc4cb16154b576236c20b7"],["tags/算法/index.html","b20e217f67f07f97ad3a400b380a89fa"],["tags/练习/index.html","e6a9422e5c23b63bebc36954a3d60132"],["tags/编程语言开发/index.html","cc07b3087ab8a2aa8fc1b69cf3dce2b3"],["tags/补漏/index.html","ca8c44d4538873c121c58abe416c2ea2"],["tags/计算机网络/index.html","1f9178e01184eda6a1dfdded67b87834"],["tags/面试/index.html","6ba687d406e6a947b88e7bf3b7889dff"]];
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







