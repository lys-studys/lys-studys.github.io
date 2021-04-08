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

var precacheConfig = [["404.html","4397ccb216b6fe1af4801b8521c35c3f"],["archives/2020/09/index.html","fbbf3af8b22e4a8e1f085a43a1239df7"],["archives/2020/10/index.html","fffa08dbea4c037802b65d8c650d2670"],["archives/2020/10/page/2/index.html","62c49a4297e42636ebbb70fb74be4f79"],["archives/2020/10/page/3/index.html","3647cb7d917883aeaafa9d50fb33afd6"],["archives/2020/11/index.html","251391740b23384d00f5b1f5380a0ee2"],["archives/2020/11/page/2/index.html","ed2c7243bb6f7d05335497e42f124848"],["archives/2020/12/index.html","3ce2201d0fd85e90e8e6cd883b46f58b"],["archives/2020/12/page/2/index.html","8d73ed29d35cee90b872397af797732e"],["archives/2020/index.html","6b6f4879485315df20671046aba565f7"],["archives/2020/page/2/index.html","ad2243dfbb6a58a52ebb96bebcb4addd"],["archives/2020/page/3/index.html","8acf9686aa33453031587fa8e2f2fca4"],["archives/2020/page/4/index.html","e0abb936d2da2fd6896fbb65de429555"],["archives/2020/page/5/index.html","dcb7c6e2b3205b5531be135efcaba3b8"],["archives/2020/page/6/index.html","6f3f314d2191bbc6211df2611f92da70"],["archives/2021/03/index.html","05e600af364a53066ffc3f792f17b401"],["archives/2021/04/index.html","0cc34518bbd6b2ac4043a92782d9e893"],["archives/2021/index.html","49f953a07a144bb50d97a4a85ac5994a"],["archives/index.html","57b349bd400781ba41c1e07a0a3b75db"],["archives/page/2/index.html","a52cd21c888c180b1118d6817774ba49"],["archives/page/3/index.html","17a375c65946e65b7480d407418c4b0b"],["archives/page/4/index.html","7d3b1f6ffc2468f680822c220cc9088c"],["archives/page/5/index.html","9d526fc6e946e7bff86ed21cd17d3085"],["archives/page/6/index.html","637b72895bcc6b0dbc4c089df94cef76"],["archives/page/7/index.html","691061b0787667f00a11ebdee67048ce"],["assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["categories/STL库/index.html","db9afe9490490e235da88c12b1d685f3"],["categories/c-关键字/index.html","297502d5f54f091892f8e95d4f0e75ff"],["categories/c-基础实战/index.html","b18a8bfb842bee00bdeb3e0c06464eba"],["categories/c/index.html","7f213d4fae476585e82585a925c65bb8"],["categories/index-1.html","e85c11752691fc18e5b46e045c14fcaa"],["categories/index.html","d4547de6aa820c75d5922dd89bbcbce3"],["categories/leedcode-链表/index.html","d48e15a1875e192e94be533b8d59cba9"],["categories/leedcode/index.html","71bd1de77ce06c49b4ced63077f992d1"],["categories/linux/index.html","fcd25f86dc8ce0b2582c7dd90ea9ca6b"],["categories/python环境问题/index.html","c7774f1374b1933307425a9dd613f982"],["categories/tree联系/index.html","ad9dee67848f15863dce433cb0afad47"],["categories/优化/index.html","b93a1e0043241a3b3f7003cf082b9d7f"],["categories/动态规划/index.html","e7c5d22cd214bef9ab7b2e5790386ff7"],["categories/大数据/index.html","9624a6ef048ddd1d4d42a367aee1a93c"],["categories/操作系统/index.html","a99eebc6f1726ec6667e496ebffb3d29"],["categories/操作系统开发/index.html","34dc603745f8699c3a96075afa6fe607"],["categories/数据库/index.html","fb637a6df7619c24d1c3cae69d9820fa"],["categories/数据结构/index.html","f0edcdba83b0d3d404096550b662f162"],["categories/爬虫实战应用/index.html","693f4c0127dd5b52679bd7faacc3adde"],["categories/算法/index.html","a3746ca4beb1dde469080a451766e8dd"],["categories/练习/index.html","cdc40200004d01a636bf48aa42a42569"],["categories/编程语言开发/index.html","631f4cef5a85c333351a0a19653d3493"],["categories/网络实战总结/index.html","0adf23a086d81919586401c4d64f50a8"],["categories/补漏/index.html","882ccd890d5b49f75fbc783a34f495a4"],["categories/计算机网络/index.html","9c571ec2d3ca9217b71964c30f652376"],["categories/面试/index.html","fe9f1a2f1fe57f37b81c8f07356b244d"],["css/background.css","5bb9900d1bad9cb1e3fce454bc255d7f"],["css/index.css","6820a24dae33f2f98a11a1038eb0b48f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","50bc90520c686ea8500981de89985d49"],["img/bei1.jpg","60bfcaea92765d01bb04672083dac266"],["img/bei2.jpg","926a9ca3033eb9a0ed6aaf54ee66d4b3"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/qiao.jpg","e919f8fea62f9a9786ec9cf2ea72d1de"],["img/star.jpg","b0733874fc43bb9e495440990e0dfd27"],["index.html","312ce64fea6f18776fc5b268cf176993"],["js/main.js","4898030387012f8af71563ef8353433a"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","6bebed368a1bbcb630dd146cefb103b7"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","64d1e1837ad1a585888f5d1e16c71f77"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["js/utils.js","f91ea1a86a5c45e344a24fb437642f36"],["live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["messageboard/index.html","d4f4ac3437ac4a7801bb1a2b912b3618"],["page/2/index.html","71431aa5bfd08b7101bcd69f08b95b8e"],["page/3/index.html","0243e6d38ce9a7c999c7e7f4912645b0"],["page/4/index.html","d5cd2e25ded523e53c4beed098d058f3"],["page/5/index.html","3430059f93afae2ed7e20c20f99e3aab"],["page/6/index.html","5240b72d53ce67a84e01fb8300d6015c"],["page/7/index.html","33f9d037e36176109321ce538b7c21b9"],["posts/1/index.html","4e8710fd2afb4f443db7baf1e91718a0"],["posts/10547/index.html","479b32ce2430e6e8aa94202fbc603226"],["posts/14192/index.html","29d690bc1f4b7b10bacc805b17e918f9"],["posts/14686/index.html","de55640e70aa7bd97f9a360cd757d0c2"],["posts/15411/index.html","46ade1b38dd383e00c0436db67e49f14"],["posts/15731/index.html","9ac8824ad25d21791af03bf5e60cc56c"],["posts/16097/index.html","1e96765d4797f5e6d0464943aa4a8856"],["posts/16107/index.html","043285db93861e0d24651fa639eb2858"],["posts/16108/index.html","fa9469f402afaa0032483d5041965bfc"],["posts/17385/index.html","da7beb12e666dbc2cc559fda992b68e7"],["posts/19586/index.html","d66fbdd6ce9a7e2dfe27b6f77b5e5343"],["posts/19628/index.html","51f35eeef3555522d7e3db0fe517246a"],["posts/21322/index.html","e2dc5dc21fe38adccce6583a1c314f2f"],["posts/21795/index.html","8b833befce59312aa5d4e2c7f3c5f1a8"],["posts/21911/index.html","2ed2d97d925fd0b1dc55fed5af9e5ed0"],["posts/23469/index.html","ae87be434454d8e951c46e67d6360896"],["posts/23956/index.html","656ede3597f6f26692ce0159064c27fe"],["posts/24148/index.html","35218359a1b69346bece1418e9145e94"],["posts/24340/index.html","efb7338534869b2b5d07778330fc009b"],["posts/24504/index.html","82571248a488de352074d5f803eb4ff5"],["posts/24772/index.html","fd827f94d20f701ee95379d84fe60a7f"],["posts/25345/index.html","5199d208bddd16a3380ec65ef40f2b38"],["posts/26821/index.html","dda3e4129a98424ccd7b7b66d7915369"],["posts/28273/index.html","ad44969c4d87663937f38e1d93a229a1"],["posts/31131/index.html","4a3983e0a58333af293772fb1d5c636f"],["posts/32473/index.html","1d894ac41eca60244032d448c7f1d68a"],["posts/33531/index.html","46dbe91360873161fe5e38591e691346"],["posts/33723/index.html","a9d892cd547b59adefe77cab90eb1f43"],["posts/34955/index.html","b70a7a04a536390e75c5668dc3072578"],["posts/35949/index.html","ec319f739b3b054f99137b2097b88917"],["posts/36817/index.html","f150dcf7deaff2fdc0854ece52d36cbd"],["posts/37850/index.html","7d280fa4fe1393627d96cbda84aebf4f"],["posts/39404/index.html","938a41faec1eb7a3f9787455ddf63ff1"],["posts/39788/index.html","eeff120cd9cf582961fb42a9c11e5021"],["posts/40133/index.html","d16fe56eb0c36144ccd3d73543608a41"],["posts/40290/index.html","a7df5e56e85485986c41af8953a2ffbc"],["posts/40325/index.html","c9b5cb3c75eb1e0d7b98362ef0780bd9"],["posts/40917/index.html","1bb385f9caa631a88a8cd9ee1b734703"],["posts/42182/index.html","55ff3f69a98af99cb2a80eb2865e72b7"],["posts/43760/index.html","09ab72a37a6fee0646aca4d790ac4719"],["posts/43952/index.html","2b1a695a3142659f156dec15f0dfb55e"],["posts/44296/index.html","23935971a5699f26ea1614b00149681d"],["posts/4515/index.html","d732a1b0087ffe542e9490835aa96e40"],["posts/4524/index.html","24d68780b5fb2768c818c8352d31ae72"],["posts/47607/index.html","b1ad2b27e148b632a0f5135417c5713e"],["posts/48539/index.html","0eb9b7d2590467f571e2234bce9b1610"],["posts/49861/index.html","daf83de98694f989720c0eabeb3c3bcd"],["posts/49877/index.html","8d6a1c0490bcc57e50a7f5c9ebcce4a1"],["posts/50097/index.html","1902fd0e83865ae4ba427b8c74386b76"],["posts/53699/index.html","5adf3aa38d9b3855f7494f2dc51c7583"],["posts/53868/index.html","c9dc6d42881a980ce7193f2e6b5a616d"],["posts/54839/index.html","3ab424cc5b4a23b5631bd002c1f80081"],["posts/55244/index.html","8595bec729abe58bec1c621aefaab3b4"],["posts/56260/index.html","879ff576d7412d466fcbb9b6ba9c963b"],["posts/598/index.html","29d430be687021a25278c04f61433a6f"],["posts/59942/index.html","d3011592cfb9355f338a35bd4a5de1ec"],["posts/60133/index.html","233df69a5e22c7974717634fbf3d8a1f"],["posts/60234/index.html","395b23a92b19b571ab267ff0992656ae"],["posts/62607/index.html","1b240afab2433f0b06f1f21500576a7c"],["posts/63295/index.html","868aabedb86546621f6d521b9a6de623"],["posts/63613/index.html","6d99609c0a5954235d8e30c00cb006fe"],["posts/65250/index.html","f25820fe13bcc0a6b759667261083406"],["posts/7734/index.html","679182e898aadd2d1f4f4bc0b67f0235"],["posts/8091/index.html","a3536fa70e7e08484fbd6676f7b4651a"],["tags/Data-Sturctures/index.html","dbd63872bd561dee3e0cac2e11443461"],["tags/STL库/index.html","f914e925d96d9f0bf234c74e4a0bd6f7"],["tags/acm专项练习/index.html","c5d6c4cbd3932b0422208dc78284ea21"],["tags/apotheosis/index.html","2d51eb881705e60986edac0b6cbfcf53"],["tags/c-基础实战/index.html","f74a6ed619652ad73e32efe4d0280761"],["tags/c/index.html","d6f2f11013298b37345165530b871d4d"],["tags/index-1.html","492419dbb9845b7bd2c24d4a49022bb3"],["tags/index.html","0e2d1e631291a5026c774d69a7c4ab48"],["tags/leedcode/index.html","1ae3f7d70f5c988def3a9fee4261e95d"],["tags/linux/index.html","8f99eb9de951a8ecd4bab90bf675bb16"],["tags/linxu/index.html","67f0e4668ab3a249699340040b995059"],["tags/python/index.html","0d3cdfeabc59d8a4e20501f371aa40aa"],["tags/though/index.html","5b1c26b63458ea291b3743e796252638"],["tags/tree练习/index.html","5dedbb5eb3addcd886b1b37cf55d1bb9"],["tags/动态规划/index.html","d04ebe602074bf508b52168a3f96aa15"],["tags/大数据/index.html","81a9d2921f94307b6fdd85472c403a47"],["tags/字符串序列/index.html","78d99dc8a72092026ed4a7560cdb3ff6"],["tags/字符串系列-匹配算法合集/index.html","68c3dadc0be48c98f15d974d0c0f590f"],["tags/字符串系列/index.html","308096b9b38da86a1b63f357cab8c8dd"],["tags/操作系统/index.html","0c2168ec2b93cd1187a6f58e476daf7b"],["tags/操作系统开发/index.html","81f2711b8bc7b0f161fe3b8c7c5d6b2f"],["tags/数据库/index.html","2a81e6705a0b840f1dab52e647da30fd"],["tags/数据库高级/index.html","9c57a31fc4285194dcdecae9249434f3"],["tags/数据结构/index.html","f7b59ee76ea73a81d1311dc924b2aa06"],["tags/算法/index.html","dd97d9a8ee5cf755b9b9d4043da3bf22"],["tags/练习/index.html","6b714b41e41fd40cc7f733731646447f"],["tags/编程语言开发/index.html","e1b87244c96a5ecb963aaddd0c42069a"],["tags/补漏/index.html","e592c6330f5e3c01cf1968043cb7a808"],["tags/计算机网络/index.html","cd0d565d96f337851e037a59ba5348ae"],["tags/面试/index.html","93f82770c2add7c5952766724f2bda77"]];
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







