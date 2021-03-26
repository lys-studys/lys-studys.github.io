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

var precacheConfig = [["404.html","3f502a1b4514c4e04c2b03e9e0b2c1c6"],["archives/2020/09/index.html","570a86451168ec14d8f8ae5c22750908"],["archives/2020/10/index.html","fde4cb26edaaa5e5b8114a51fa51a6e7"],["archives/2020/10/page/2/index.html","d7c3b75a7310c975d4caff58ad819560"],["archives/2020/10/page/3/index.html","2331bad7b0ed5cad02e58153cb34239e"],["archives/2020/11/index.html","5940991986d8e9f68244012289183f5e"],["archives/2020/11/page/2/index.html","c990c20d03ef38ac019290943580be60"],["archives/2020/12/index.html","5207cf5e38b46e1e03e8220ac6cd2064"],["archives/2020/12/page/2/index.html","84667a2e41369199a9726c447f2b28fa"],["archives/2020/index.html","807192a82d8e8d3d3f15d2f6296ad9f0"],["archives/2020/page/2/index.html","8e526fe4a2db437bf933b312d7838346"],["archives/2020/page/3/index.html","b3b2c57f2c7ba65f8f23671f2d033892"],["archives/2020/page/4/index.html","6c5469d80729cd9fb189aaa704687c5f"],["archives/2020/page/5/index.html","12e70ff66bf790faeedb83dab84ab6ea"],["archives/2020/page/6/index.html","800c9181f42592a4fd81b3ff81c52c3b"],["archives/2021/03/index.html","6b8ec5cd2d4c04f266dd9b0ea5b9d698"],["archives/2021/index.html","a3a29c45046ca07dba1af093f87ffa00"],["archives/index.html","938021105175f9556cbace76a7ff3ab1"],["archives/page/2/index.html","cd7d82445bfa1409fd51e49077f127f6"],["archives/page/3/index.html","d38cd75f74f8d21b1aa492fa2798754b"],["archives/page/4/index.html","df028c020475a41c73eed975496cebb4"],["archives/page/5/index.html","85dd1c31bf281a702d17cc60df537b8b"],["archives/page/6/index.html","f88de5bc6d3cc8f0e4d30a2343efaada"],["archives/page/7/index.html","b438ba35db5638896cb51e2078adfd26"],["assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["categories/STL库/index.html","6b538a2c514e9762d907d199b3d7a043"],["categories/c-关键字/index.html","92f4bdf6fb80d85cf19e9dddc7110546"],["categories/c-基础实战/index.html","643e02030cff1e69c222695aabf20bd5"],["categories/c/index.html","a0e69cf5cf1107a7e5a6e14afc4b433b"],["categories/index-1.html","84d03317c68104fb12ddd50d71748e4f"],["categories/index.html","82b0230a91710ef99b325235cb34cf3d"],["categories/leedcode-链表/index.html","61d58b335dde8b89a296411bcf856566"],["categories/leedcode/index.html","adacf24ae4f7d36affe769c6950f513d"],["categories/linux/index.html","1cd86ab67becb46faa5889c0e330ed07"],["categories/python环境问题/index.html","d4717d885dbe4abc1a6891955b7e61e4"],["categories/tree联系/index.html","7fabd7eae93bed8628a37a4143ee8b0c"],["categories/优化/index.html","5f93292224425b0032e22615ea9b52e8"],["categories/大数据/index.html","a89ee2bf6da42dc55af9598f768009d8"],["categories/操作系统/index.html","c9315e8db189a2540770e30bc80309b2"],["categories/操作系统开发/index.html","3d0472334c82c6e2287a3199239ae320"],["categories/数据库/index.html","8af501ed830d7cee4441ccb108b2d766"],["categories/数据结构/index.html","7a359c767c536812892660416c09a671"],["categories/爬虫实战应用/index.html","03e32e2fb88dd39c686f8599da02d8d6"],["categories/算法/index.html","0e6a779cd018e1ab77044bf2dcc4e2e6"],["categories/练习/index.html","5a92a017dbe25ffad5ed5ed045b43504"],["categories/编程语言开发/index.html","2330b1f0e7adc2c7dcbfe1328b3cb75f"],["categories/网络实战总结/index.html","2c6da1eac00ec8951d8fc76efb71246f"],["categories/补漏/index.html","e5b3f1617956f8d352733e3c899fa1f3"],["categories/计算机网络/index.html","bf5243e1fea0d0493441e89e59bd6e11"],["categories/面试/index.html","1c0a7e2eaf83be98a80d1de245c27d2e"],["css/background.css","5bb9900d1bad9cb1e3fce454bc255d7f"],["css/index.css","6820a24dae33f2f98a11a1038eb0b48f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","50bc90520c686ea8500981de89985d49"],["img/bei1.jpg","60bfcaea92765d01bb04672083dac266"],["img/bei2.jpg","926a9ca3033eb9a0ed6aaf54ee66d4b3"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/qiao.jpg","e919f8fea62f9a9786ec9cf2ea72d1de"],["img/star.jpg","b0733874fc43bb9e495440990e0dfd27"],["index.html","0ef06e7ffdb774e6e15ec481537b48df"],["js/main.js","4898030387012f8af71563ef8353433a"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","6bebed368a1bbcb630dd146cefb103b7"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","64d1e1837ad1a585888f5d1e16c71f77"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["js/utils.js","f91ea1a86a5c45e344a24fb437642f36"],["live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["messageboard/index.html","42dde6c5b03353edc7fbfb792de1e70c"],["page/2/index.html","a30538936b64b3828b203b2877a35828"],["page/3/index.html","8a83cab0a2f7369a54d204959e8c8876"],["page/4/index.html","0defdfb8ddb4c072f23bbedbb94c99fc"],["page/5/index.html","8d67c6d82336cf96fb53ce91dc3caffe"],["page/6/index.html","19387a88bf6c579d199943032a9d89f7"],["page/7/index.html","6ecc4fd5db4e8815fc40a5a36693307f"],["posts/1/index.html","6731af230a3d140804dac964de931b98"],["posts/14192/index.html","1ea8b30e6aa54a963126ffa2be43e310"],["posts/14686/index.html","ce379071327e5347033c7f4461737a2b"],["posts/15411/index.html","ef7872cf8050475cf962e4d833ae575f"],["posts/15731/index.html","d1366a5f458fec13dc958cf3d3bd2458"],["posts/16097/index.html","807d4ed5ddaaf4bde0618ca8fa527c3c"],["posts/16107/index.html","1b380d82b6e7c86812810488e6588fca"],["posts/16108/index.html","c4ed130de654271943c196fb80895eac"],["posts/17385/index.html","f02362f585ebe3a08e86f2a970142858"],["posts/19586/index.html","1490c1ace69a0beede34eb8f6b808091"],["posts/19628/index.html","abe0cf9a0013a8611eff571046749cf8"],["posts/21322/index.html","d5775df35104a96030a0f51937f3035b"],["posts/21795/index.html","887d0b2ddb5e07fee1fe01a42e407643"],["posts/21911/index.html","23322cfccbbaa881ba9f4490e18b7d5b"],["posts/23469/index.html","cfe8c425f626168c44371a579c34865f"],["posts/23956/index.html","d9a423350ee2b82c2bef55efe24205e9"],["posts/24148/index.html","e2a7c666749816a9bcfb6b64c5aeed43"],["posts/24340/index.html","e566105d453caff584e7b655621db597"],["posts/24504/index.html","91e881c5da7effa3d874a175f8eaf9e2"],["posts/24772/index.html","55cc6eff9e60a223380ff0a4c224b9c4"],["posts/25345/index.html","ec11ec2687c7c3d70a298f13b421351f"],["posts/26821/index.html","359793d7c0c6b77e4b12333fe94a3a95"],["posts/28273/index.html","941652afd4f6bf5e200e1325961aef03"],["posts/31131/index.html","2e83f9fae2771cb7576b84e4d682d917"],["posts/32473/index.html","d6e9d2c35574580ca1d65a69aa2978e4"],["posts/33531/index.html","8aff6a8cc300669f9bd3f6dc94cc5f94"],["posts/33723/index.html","e21a17398576bc3929faea67bc717935"],["posts/34955/index.html","51ef834d07526d2ffec184263f66c5dd"],["posts/35949/index.html","2c7f9b24a29d98fda5fb8755862bff87"],["posts/36817/index.html","8db3c8c40d3c45b8ea077626140d32ce"],["posts/37850/index.html","3c56b72a1d67cf53e81800f339b47257"],["posts/39404/index.html","0b931d88bda1786afff75c2ec1566929"],["posts/39788/index.html","469ecc29204abf9593d0aeb7d6347cb2"],["posts/40133/index.html","30999c8acd2b2e20bd1366591e48b918"],["posts/40290/index.html","2963fc7a65926e2202b77547407b6a8e"],["posts/40325/index.html","68ebce1b11a7eb3e4ef924ba7374aecb"],["posts/40917/index.html","0e01be5ead448a84e1dd6b61ea6c1325"],["posts/42182/index.html","164571b90940e1495e2e083cb91fa0ce"],["posts/43760/index.html","52f76a7a1701a70cc3437a9561f3c770"],["posts/43952/index.html","4b268dc54af1ca4dc24494088b46e8c0"],["posts/44296/index.html","9decbfe26659fe61cd3a9c02b0333f75"],["posts/4515/index.html","7834852218c135a684a2765096feb829"],["posts/4524/index.html","bfe10ebb86397a09b653ac4c9db7fc29"],["posts/47607/index.html","94c0e0d45721cddbd7efe523ed365aba"],["posts/48539/index.html","14b0144582077d729c25d8795d392abc"],["posts/49861/index.html","f7c07ddd51aeb9a6804ad6258facf6e3"],["posts/49877/index.html","d83c27b9f689cd22f64a0b2d830c47cb"],["posts/50097/index.html","47a16960b270bfbe1380cd2bc38be0dd"],["posts/53699/index.html","09b740435daba1db084e79af239ff6b3"],["posts/53868/index.html","cc730b8a536870bc659f9e9df4c49565"],["posts/54839/index.html","365b716bd087dcd93a582a32058aef8c"],["posts/55244/index.html","4170f4c7b62c6a90ff56c956e5ea5ab1"],["posts/56260/index.html","5781e03daa5b356e13feaa8501b46b97"],["posts/598/index.html","e03414bb089cf75b2f00296874d5e63d"],["posts/59942/index.html","f4622a65496406a142a474f1bb9b655a"],["posts/60133/index.html","f4fd1ecc15a866ad85289117794090ef"],["posts/60234/index.html","7e829113e899b1c6cc1e9de220260ed1"],["posts/62607/index.html","3d8dc962d5f707cf9c8c74958d6ec73a"],["posts/63295/index.html","64138a43e89a073043f0476e4a3cf983"],["posts/63613/index.html","a7dbfa2157b6895f5ce50fbd4895aca8"],["posts/65250/index.html","ca254b3faea6ed8d4025f00f8defcebc"],["posts/7734/index.html","bfdeb2642138cf6dd0a72d9c90462b58"],["tags/Data-Sturctures/index.html","a330b1889d73831b7c5a8900515b9e67"],["tags/STL库/index.html","ed7f95aa80b4e0bac372a679303b090a"],["tags/acm专项练习/index.html","9fcfb3fda677f97dc30c84a6833edb56"],["tags/apotheosis/index.html","07daf77160aeb0e8465dd07d4815efe1"],["tags/c-基础实战/index.html","f711c64b2fb6bc319636e1416001be08"],["tags/c/index.html","e65af64d13fbdfb104f74371ab5bd6c8"],["tags/index-1.html","80d3ebaacaf11b8f85842b9be247ec43"],["tags/index.html","cf092841c1e4f55ca8be69ec8f337c75"],["tags/leedcode/index.html","b70bf8f1f04fe0a41b406d3fca3dcfea"],["tags/linux/index.html","291db8fabc6f98270b76a117813559c9"],["tags/linxu/index.html","eefc91313b92ae014ba823a9078c5664"],["tags/python/index.html","55eba9dfcae9ee640e1bc10b53f0474a"],["tags/though/index.html","2d3465fbcfa658aac4563889814ec5b5"],["tags/tree练习/index.html","39cd8ad9c91bd660ba036d92306131f2"],["tags/大数据/index.html","f253965c4f001f75df7fecaae0a60bb0"],["tags/字符串序列/index.html","24eff8b65789c730915bb153cd8a10c6"],["tags/字符串系列-匹配算法合集/index.html","7749a1b0683a4bb7094941aa02e93ef4"],["tags/字符串系列/index.html","04a6965ec175d8d19812c363fd19b9b3"],["tags/操作系统/index.html","82df4e1c7101c71cbec18b56226fa273"],["tags/操作系统开发/index.html","3dd497584d5de7e1861315d7ff7937bf"],["tags/数据库/index.html","931b27738babeee2e0bedeaa29d5d74e"],["tags/数据库高级/index.html","a8609ffbbcd831ae3bfd4a3815fcdaad"],["tags/数据结构/index.html","c18742e361b6583031823c364562e036"],["tags/算法/index.html","76425575a5a487f8ee60483723e6b1f2"],["tags/练习/index.html","55098480fc9a5e522a0f7d9ca686d738"],["tags/编程语言开发/index.html","6dc4edbf64911e30f931bad23d060734"],["tags/补漏/index.html","29b2be4a0ec003360a11b6fd727544ba"],["tags/计算机网络/index.html","ce9d19155f7091df74279c57e856dd6e"],["tags/面试/index.html","9236f933caeeb75173b2c74bb3024098"]];
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







