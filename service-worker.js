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

var precacheConfig = [["404.html","e5056723a0a42300cf62f6fcf3e43616"],["archives/2020/09/index.html","6372694eb214005fa1e1e99fa88a2710"],["archives/2020/10/index.html","cc07f68d2ae9ae49ec36b7315d640c94"],["archives/2020/10/page/2/index.html","52a316f465806001a182c12048e98d98"],["archives/2020/10/page/3/index.html","2f07337d48e583546d1805a39217d83d"],["archives/2020/11/index.html","e84fa0f6c621d800a2f10e8b23eb8958"],["archives/2020/11/page/2/index.html","2a19e8b79ee06610082ed8e89472151f"],["archives/2020/12/index.html","513d44eca4621e9bd5aea5050cb893f1"],["archives/2020/12/page/2/index.html","d5a6a73de39ffdc7b9a6c31af52131ed"],["archives/2020/index.html","3017c046d05b3f6eb00bc3220da2ef6e"],["archives/2020/page/2/index.html","574b61c4a3b56e4b3e85f7376cb605ae"],["archives/2020/page/3/index.html","881a1f6e35899816d99bfc9519851f88"],["archives/2020/page/4/index.html","3fc1a0354f098a19b15802d053c6f97e"],["archives/2020/page/5/index.html","567f41af3a6f20999c758e5b9e4d622c"],["archives/2020/page/6/index.html","e08702ee9f8a393cddee23cccd9c98a1"],["archives/2021/03/index.html","39b1aba3a2addfb726f98acc1ad31c13"],["archives/2021/04/index.html","b96d54457e11840992fbc1ce94d0e7d2"],["archives/2021/index.html","314ec8dff0446743cc4076cba79510b4"],["archives/index.html","1cf0fc9e11b132ee8dfafe2d9c77224e"],["archives/page/2/index.html","db4c08f1c5b42e3746a60435995ffc3f"],["archives/page/3/index.html","60ab335f350db33dde2468213ef7382c"],["archives/page/4/index.html","a1e6a1d9495d807a429ee05655e1bf38"],["archives/page/5/index.html","77235f358e2060ca8b7232c5a32d48cb"],["archives/page/6/index.html","10b966d1ae0f999a96db311c63b49f3e"],["archives/page/7/index.html","a727efb5662b7f2161df7eb1ac1dc240"],["assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["categories/STL库/index.html","cdff8e6d675350ac460ed1332a5dec8f"],["categories/c-关键字/index.html","bc454223b438d6219fc405bfb62bda4b"],["categories/c-基础实战/index.html","8bf6e308612a1cc2f49d447235178882"],["categories/c/index.html","4b915260df85bbbf91f5199ed83bc963"],["categories/index-1.html","5371090dbd7516af92ff0b98de711d67"],["categories/index.html","5a1576bdc19137c1ba6b689fe9119275"],["categories/leedcode-链表/index.html","4a0a1a2ca3e74beb5bd6dcd6fb6011a5"],["categories/leedcode/index.html","04167fdd5f8483b25ff24a3d07329eaf"],["categories/linux/index.html","e97a9cc89dcca2afed38748079c8c49d"],["categories/python环境问题/index.html","f9e7da01020909cd430b9c59d5243b02"],["categories/tree联系/index.html","134dd21081e7484683e1b5c7d848a7d0"],["categories/优化/index.html","77706d33f82c93c3c93295bc1a93f346"],["categories/动态规划/index.html","2dc39348e848693f4c346a72e7e90e71"],["categories/大数据/index.html","db0b0bbd17ac452989e14d1bd2a779af"],["categories/操作系统/index.html","fcb153e59d973307a7855cdd70c107ae"],["categories/操作系统开发/index.html","fdbdd91c26cc541c992889278a0f4f13"],["categories/数据库/index.html","4f90db3ece1968f32262a1c32810eec8"],["categories/数据结构/index.html","54dc9141c1d0fee35d4ea5ee63560681"],["categories/爬虫实战应用/index.html","51df71c205f8b86191ae6369cfccb5d0"],["categories/算法/index.html","f34fec61d29caa2a0a752fb38e232eb4"],["categories/练习/index.html","69814c3b307cac6e8ec066ceb1917a31"],["categories/编程语言开发/index.html","5f13af7f7a1960f3c6a8b14253f5134f"],["categories/网络实战总结/index.html","3b14c95fd8be62ec4985595899f6ee4d"],["categories/补漏/index.html","851a8bc994c200014083043a113a536c"],["categories/计算机网络/index.html","adf3b4384dc16f1b4059a5b0525f150d"],["categories/面试/index.html","a90d905726e62774190dfa5d1fc4861f"],["css/background.css","5bb9900d1bad9cb1e3fce454bc255d7f"],["css/index.css","6820a24dae33f2f98a11a1038eb0b48f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","50bc90520c686ea8500981de89985d49"],["img/bei1.jpg","60bfcaea92765d01bb04672083dac266"],["img/bei2.jpg","926a9ca3033eb9a0ed6aaf54ee66d4b3"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/qiao.jpg","e919f8fea62f9a9786ec9cf2ea72d1de"],["img/star.jpg","b0733874fc43bb9e495440990e0dfd27"],["index.html","7b9cc48dca509f61314b74bdbc972e06"],["js/main.js","4898030387012f8af71563ef8353433a"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","6bebed368a1bbcb630dd146cefb103b7"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","64d1e1837ad1a585888f5d1e16c71f77"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["js/utils.js","f91ea1a86a5c45e344a24fb437642f36"],["live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["messageboard/index.html","6e6a65307e8fa8f1daea810a6602c1bb"],["page/2/index.html","4c05eab21af7fbda471e2e8a26b44934"],["page/3/index.html","6bda3c3cf250866a4b17399f72df0b76"],["page/4/index.html","da42aff4cc43fe274c1a723ed174357c"],["page/5/index.html","abf630031c0c68fcf416af30f01358ce"],["page/6/index.html","08184d77531c939697c2eca888791bf4"],["page/7/index.html","f09bdceb60e1a68ac2894b64209fd8f2"],["posts/1/index.html","4e8710fd2afb4f443db7baf1e91718a0"],["posts/10547/index.html","a99b9911e5e35216475487613d4e9e2e"],["posts/14192/index.html","29d690bc1f4b7b10bacc805b17e918f9"],["posts/14686/index.html","de55640e70aa7bd97f9a360cd757d0c2"],["posts/15411/index.html","46ade1b38dd383e00c0436db67e49f14"],["posts/15731/index.html","9ac8824ad25d21791af03bf5e60cc56c"],["posts/16097/index.html","1e96765d4797f5e6d0464943aa4a8856"],["posts/16107/index.html","043285db93861e0d24651fa639eb2858"],["posts/16108/index.html","fa9469f402afaa0032483d5041965bfc"],["posts/17385/index.html","da7beb12e666dbc2cc559fda992b68e7"],["posts/19586/index.html","d66fbdd6ce9a7e2dfe27b6f77b5e5343"],["posts/19628/index.html","51f35eeef3555522d7e3db0fe517246a"],["posts/21322/index.html","e2dc5dc21fe38adccce6583a1c314f2f"],["posts/21795/index.html","8b833befce59312aa5d4e2c7f3c5f1a8"],["posts/21911/index.html","2ed2d97d925fd0b1dc55fed5af9e5ed0"],["posts/23469/index.html","ae87be434454d8e951c46e67d6360896"],["posts/23956/index.html","656ede3597f6f26692ce0159064c27fe"],["posts/24148/index.html","35218359a1b69346bece1418e9145e94"],["posts/24340/index.html","efb7338534869b2b5d07778330fc009b"],["posts/24504/index.html","82571248a488de352074d5f803eb4ff5"],["posts/24772/index.html","fd827f94d20f701ee95379d84fe60a7f"],["posts/25345/index.html","5199d208bddd16a3380ec65ef40f2b38"],["posts/26821/index.html","dda3e4129a98424ccd7b7b66d7915369"],["posts/28273/index.html","ad44969c4d87663937f38e1d93a229a1"],["posts/31131/index.html","4a3983e0a58333af293772fb1d5c636f"],["posts/32473/index.html","1d894ac41eca60244032d448c7f1d68a"],["posts/33531/index.html","46dbe91360873161fe5e38591e691346"],["posts/33723/index.html","a9d892cd547b59adefe77cab90eb1f43"],["posts/34955/index.html","b70a7a04a536390e75c5668dc3072578"],["posts/35949/index.html","ec319f739b3b054f99137b2097b88917"],["posts/36817/index.html","f150dcf7deaff2fdc0854ece52d36cbd"],["posts/37850/index.html","7d280fa4fe1393627d96cbda84aebf4f"],["posts/39404/index.html","938a41faec1eb7a3f9787455ddf63ff1"],["posts/39788/index.html","eeff120cd9cf582961fb42a9c11e5021"],["posts/40133/index.html","d16fe56eb0c36144ccd3d73543608a41"],["posts/40290/index.html","a7df5e56e85485986c41af8953a2ffbc"],["posts/40325/index.html","c9b5cb3c75eb1e0d7b98362ef0780bd9"],["posts/40917/index.html","1bb385f9caa631a88a8cd9ee1b734703"],["posts/42182/index.html","55ff3f69a98af99cb2a80eb2865e72b7"],["posts/43760/index.html","09ab72a37a6fee0646aca4d790ac4719"],["posts/43952/index.html","2b1a695a3142659f156dec15f0dfb55e"],["posts/44296/index.html","23935971a5699f26ea1614b00149681d"],["posts/4515/index.html","d732a1b0087ffe542e9490835aa96e40"],["posts/4524/index.html","24d68780b5fb2768c818c8352d31ae72"],["posts/47607/index.html","b1ad2b27e148b632a0f5135417c5713e"],["posts/48539/index.html","0eb9b7d2590467f571e2234bce9b1610"],["posts/49861/index.html","daf83de98694f989720c0eabeb3c3bcd"],["posts/49877/index.html","8d6a1c0490bcc57e50a7f5c9ebcce4a1"],["posts/50097/index.html","1902fd0e83865ae4ba427b8c74386b76"],["posts/53699/index.html","5adf3aa38d9b3855f7494f2dc51c7583"],["posts/53868/index.html","c9dc6d42881a980ce7193f2e6b5a616d"],["posts/54839/index.html","3ab424cc5b4a23b5631bd002c1f80081"],["posts/55244/index.html","8595bec729abe58bec1c621aefaab3b4"],["posts/56260/index.html","879ff576d7412d466fcbb9b6ba9c963b"],["posts/598/index.html","29d430be687021a25278c04f61433a6f"],["posts/59942/index.html","d3011592cfb9355f338a35bd4a5de1ec"],["posts/60133/index.html","233df69a5e22c7974717634fbf3d8a1f"],["posts/60234/index.html","395b23a92b19b571ab267ff0992656ae"],["posts/62607/index.html","1b240afab2433f0b06f1f21500576a7c"],["posts/63295/index.html","868aabedb86546621f6d521b9a6de623"],["posts/63613/index.html","6d99609c0a5954235d8e30c00cb006fe"],["posts/65250/index.html","f25820fe13bcc0a6b759667261083406"],["posts/7734/index.html","679182e898aadd2d1f4f4bc0b67f0235"],["posts/8091/index.html","2802be1fe4915820186c7561bfe92d0d"],["tags/Data-Sturctures/index.html","fcbb01d5b3f79c58bedbe4672084a95a"],["tags/STL库/index.html","f3661c29201bd6846af4895f83a5e175"],["tags/acm专项练习/index.html","e2f9b22fd44726fec9b176ef7fd55a99"],["tags/apotheosis/index.html","f33e77a9fb4a44e787b7cbc10f055217"],["tags/c-基础实战/index.html","9991626a4b9fb59d2988d11ffc1f6a50"],["tags/c/index.html","ada177e5eb355c87dd228331b255f3fe"],["tags/index-1.html","29339f143a4dd761d8ca760ec88cfed5"],["tags/index.html","c848094d260f539f735f2a12fd32f87e"],["tags/leedcode/index.html","015a5707660fe66543cecb29be1c93f9"],["tags/linux/index.html","f22a3426385fe84bc2e818486284fecd"],["tags/linxu/index.html","06024155b6a0d5676be01c1fe47f8563"],["tags/python/index.html","2b98114af9acb136efc928789f46ee96"],["tags/though/index.html","3d7e52d9c82a6472f3e62f427cf2e4d3"],["tags/tree练习/index.html","a1cb60c26eb119e631f83bcd78341e05"],["tags/动态规划/index.html","fe21c113c1a5ba18cfd5829660c66636"],["tags/大数据/index.html","f3d2719aff769815ac73f566657fc61b"],["tags/字符串序列/index.html","c41437fda7d8fc8374081fd3361d734e"],["tags/字符串系列-匹配算法合集/index.html","7e68fadd290b326798be2c5d0caf1f65"],["tags/字符串系列/index.html","dcb1c834b700388cb0b914f41e13c4a8"],["tags/操作系统/index.html","e6ce1bd2a7edbbe53f18f173fc78dc9b"],["tags/操作系统开发/index.html","37e088c974f4992daa983a0a8e8a362a"],["tags/数据库/index.html","4e03107d18ffb9735f207837c737fa02"],["tags/数据库高级/index.html","465bec4d53df6fbfeac84ff0454cdf52"],["tags/数据结构/index.html","cd747b7ba1133b066f7acd525445eabf"],["tags/算法/index.html","627b7c561b006bc80ac1d1ee697eba10"],["tags/练习/index.html","8c80558840733cd84d308e460988cfc1"],["tags/编程语言开发/index.html","c70809b52eb84365f4660ae36742cca1"],["tags/补漏/index.html","cd3660252c2161f1797ca9d07169d1f8"],["tags/计算机网络/index.html","b93fb386380e6ea81558d031a1fb4e60"],["tags/面试/index.html","bb5bc4d51427d90a6ce07f579d98a3c5"]];
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







