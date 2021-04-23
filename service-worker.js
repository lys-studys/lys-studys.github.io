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

var precacheConfig = [["404.html","98104912c70e621fb1de835503cec264"],["archives/2020/09/index.html","c250cf3944bfe22d9565773b646e7448"],["archives/2020/10/index.html","2d6a954a647b71589769e7a655a46394"],["archives/2020/10/page/2/index.html","7fb80460ee5802a348693f0891336d36"],["archives/2020/10/page/3/index.html","0e251d028635949dce83ca5203b62fd4"],["archives/2020/11/index.html","b2c8cb62b76c42e5603d7e7f5fc6fcb1"],["archives/2020/11/page/2/index.html","8e99d4ce9ee9736bef481eb2b68cc7be"],["archives/2020/12/index.html","c77f574780c04710e97fe27c1482bc6c"],["archives/2020/12/page/2/index.html","6b0e0219c06a73e91d745b29c0b52535"],["archives/2020/index.html","203cf7794290a7ead1b32d7f01655336"],["archives/2020/page/2/index.html","98817ea2373d004d515d4dbc1d852f7d"],["archives/2020/page/3/index.html","aff59fd2a998723094c2a50ac70c0666"],["archives/2020/page/4/index.html","2553b86b2f9b752a0c56d3bb2c2b57f3"],["archives/2020/page/5/index.html","68a33dadff7c7bcc59e2f1e3bd37e12a"],["archives/2020/page/6/index.html","39d0e91e030712b17cbf0fd9601a2e75"],["archives/2021/03/index.html","15559b07ec386ddf8b2d33a64ff11b71"],["archives/2021/04/index.html","60de043f969ef5cea36e3842ede01b21"],["archives/2021/index.html","a39c0c3514b17e6ef68656b373e59bb9"],["archives/index.html","8a4b51cc52c0287d304a08d999f47533"],["archives/page/2/index.html","4b8b161327afcd5a42c5591c84a797af"],["archives/page/3/index.html","114ee292fff020d4486e2c15dc54ea0e"],["archives/page/4/index.html","53415862a16c745a6c828eb960ee89f0"],["archives/page/5/index.html","abd82a35e76390b8cd4d67dc1b4e183d"],["archives/page/6/index.html","ff060b970bb003df7b4e88c879b284cd"],["archives/page/7/index.html","d312daea5eb38052c66aa0373026840f"],["assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["categories/STL库/index.html","7faf53adf9e8f406c33e2e86030e1f98"],["categories/c-关键字/index.html","2e40a587c10200e7d73b7814a1014f12"],["categories/c-基础实战/index.html","3256961b938eb1f84098416a5ff518b9"],["categories/c/index.html","2fe65581d13b7897a3b9745ac313a2bf"],["categories/index-1.html","72c9bd137e59458efe56077961498b1b"],["categories/index.html","ea5581b1b83d588a74e5730628cd41dc"],["categories/leedcode-链表/index.html","07579d422a00d3b63e0d8be56ed3521f"],["categories/leedcode/index.html","d83c4675d89502872d16df4d74002756"],["categories/linux/index.html","9ed58c001278c440eed0c828c300fd02"],["categories/python环境问题/index.html","ee3488e17ee73f1ece7717c143b14aa9"],["categories/tree联系/index.html","8118197fa7d0d3113e0008095df5f590"],["categories/优化/index.html","f0b69cd56b36e32ceb85eaad99a6968e"],["categories/动态规划/index.html","ac8f52d617293a88e916304bea438ce4"],["categories/大数据/index.html","339b783c9d901c1872566d09d2f564ab"],["categories/操作系统/index.html","d1b49c2c60e380c4017582e8fd7206b4"],["categories/操作系统开发/index.html","fc14ee31c2e6039512a81c0b22f77efa"],["categories/数据库/index.html","fdd52781c0a05d96aaf02fbeb16c077f"],["categories/数据结构/index.html","b95f1c0850faedde55861fb0e138ea5a"],["categories/爬虫实战应用/index.html","848d8c87b288db13a949d7af9da93459"],["categories/算法/index.html","bc3292f8f96a72afe0adbe827d0f867c"],["categories/练习/index.html","a9dd83f7b4dd07301c4e2e40de463079"],["categories/编程语言开发/index.html","91df37e21715a0ffe3e8628b603888ed"],["categories/网络实战总结/index.html","8753ba30c761067a2f0788982dfd3e8f"],["categories/补漏/index.html","2a9ba2e20976005a76aa2b16b36d0be4"],["categories/计算机网络/index.html","1b1f3a27110453469c6a2545650b872e"],["categories/随机数/index.html","ce58e935e43c234d98b5804a31b7d1c5"],["categories/面试/index.html","965d3f5381cf0739576e3999a8ab59f8"],["css/background.css","5bb9900d1bad9cb1e3fce454bc255d7f"],["css/index.css","6820a24dae33f2f98a11a1038eb0b48f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","50bc90520c686ea8500981de89985d49"],["img/bei1.jpg","60bfcaea92765d01bb04672083dac266"],["img/bei2.jpg","926a9ca3033eb9a0ed6aaf54ee66d4b3"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/qiao.jpg","e919f8fea62f9a9786ec9cf2ea72d1de"],["img/star.jpg","b0733874fc43bb9e495440990e0dfd27"],["index.html","31a7c234403177b96b54b9bb4ad0748f"],["js/main.js","4898030387012f8af71563ef8353433a"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","6bebed368a1bbcb630dd146cefb103b7"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","64d1e1837ad1a585888f5d1e16c71f77"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["js/utils.js","f91ea1a86a5c45e344a24fb437642f36"],["live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["messageboard/index.html","2294444f2d4c7c56038a84e4d7adb234"],["page/2/index.html","953972aa50c0b195365db84e054d6488"],["page/3/index.html","0dfb186bd815934a7b6a350006edf875"],["page/4/index.html","1097f6a47d66c4985e475cabbc1e2ff4"],["page/5/index.html","1ed8b1b1772e4d796c757eb1dd6365a1"],["page/6/index.html","14fd3cb8280e093f3945e2c48555c330"],["page/7/index.html","d90645f00af11782b7cc67224e96f6df"],["posts/1/index.html","e284124d8037ec9d8f1d325f9b6ac814"],["posts/10547/index.html","790fbfe7b2dabc398d7cda886dd7c272"],["posts/14192/index.html","19773493f0307b359de0b7b794431d2d"],["posts/14686/index.html","588071fcdaa9757d2c98bb61e882b762"],["posts/15411/index.html","02aa01c021f48ed9e5ac43662428ef8a"],["posts/15731/index.html","ae2124bb5c645b9e76224f0d60458b6f"],["posts/16097/index.html","aac6da14c628c85d112ccd600d91dd8a"],["posts/16107/index.html","be6778136f6ed1e5082f1ee7018e3129"],["posts/16108/index.html","e24e727e4bdd83d7f8918d884a2ddcb4"],["posts/17385/index.html","fc4dbd6803b65685132f2622db9727ed"],["posts/19586/index.html","ba007a7eebb122dcd10ba483cbf70be9"],["posts/19628/index.html","ba494fdf6728ef88e01e57545c6ef8c3"],["posts/21322/index.html","ccac1f1cf5cc3e3a5b5136e9fb17064d"],["posts/21795/index.html","349b26a166f17772f285e95c42b8c1a2"],["posts/21911/index.html","667632120642f83a5f9b6a1c92519388"],["posts/23469/index.html","947defe611188f28dfc4b2e79b4ac05e"],["posts/23956/index.html","6d1fd3866b8013ff090afb08b806971e"],["posts/24148/index.html","1b42301f0cc5b34d6d5b8a248aef63e1"],["posts/24340/index.html","0202a2d95d83ffa05ab1b4262d1741d7"],["posts/24504/index.html","89438c08574fc43d7553cc3e09ee8643"],["posts/24772/index.html","3c62e89b6df871251e038f49abba7c64"],["posts/25345/index.html","033f42c296604f5de0616a5141bfbb47"],["posts/26821/index.html","f5ab822f6dd9c27a26ba5b51d0ecbf5d"],["posts/28273/index.html","d56df5fda3fa9f9247e297ddf5ffd0a1"],["posts/31131/index.html","0303fcca4aa405e61597d056492aa531"],["posts/32473/index.html","b92714f03048f87e8e19fdd50b42220f"],["posts/33531/index.html","ffec61967f428067e32915a7eb13c9d6"],["posts/33723/index.html","44c6251a5e3490acb55fc5352d163f85"],["posts/34955/index.html","2568c48e716db21df220e45155acb2bd"],["posts/35949/index.html","0d61abd04f80b6f1c7ae883114537189"],["posts/36817/index.html","94d2ec80f35be45d15e42568da155448"],["posts/37274/index.html","e8e17a7e8124aa967ab3d557da0a7c51"],["posts/37850/index.html","4c6768be34244d13dcaaa8e7f78d537c"],["posts/39404/index.html","8b86c7ff3e15f52a94cb70e0960990ff"],["posts/39788/index.html","3de960994337057fa3c16129c80d9d47"],["posts/40133/index.html","ec6a323a46254db1bdb7b96869daa87e"],["posts/40290/index.html","01fc55092e0499eced5a80aed2e482b8"],["posts/40325/index.html","edc1ba5be722ae70b92890be36469fe0"],["posts/40917/index.html","2a085f410986d2958bee94c0394c2ae9"],["posts/42182/index.html","d480622aa49c9d94f637fa3385cd70f2"],["posts/43760/index.html","0e7bb4e0055fc21513a5125dd1910c7e"],["posts/43952/index.html","a5ea5f4e25f6e88721d7a4e1f4b7bd44"],["posts/44296/index.html","5205d1905baa1e367f7b83513e76aa70"],["posts/4515/index.html","759293d84120e2c279d44a550f02abcd"],["posts/4524/index.html","8f894d7fa2053269b7e14fa4653451c9"],["posts/46373/index.html","b9ff57444ba45a714615b73040ae34ce"],["posts/47607/index.html","aa6282f52834e9d191c221ac3e312fc2"],["posts/48539/index.html","d2aa87a3f275ee31a5dca15a1974819b"],["posts/49861/index.html","e202aac2637dc46a72dd1102789c4096"],["posts/49877/index.html","a13036d85ea1f4f6b6f6d15bc4d1787e"],["posts/50097/index.html","9cbffaa8ae885600ef3452622295f1e9"],["posts/53699/index.html","3c71b24181731f408e9663bc75aed5f6"],["posts/53868/index.html","5a518a6e33941de27c6cd20e19867de7"],["posts/54839/index.html","1af57d170041d16e87cab1cd51afb2c7"],["posts/55244/index.html","fdeae3a7bd32125c34c3dfbf6f17a333"],["posts/56260/index.html","43c6f67b91e180f6e3d2c572d83f91bd"],["posts/598/index.html","4f19c8f250ab8ec1d71501e2d2bcd37c"],["posts/59942/index.html","2b07c114c1052d51056b1d089c0d62bd"],["posts/60133/index.html","c8f7fadde0b8d11fa8e923feb59f4231"],["posts/60234/index.html","62a8febb8c736543e38be3d226f42c26"],["posts/62607/index.html","1b0f2ade31bc24b7558e3b203f0058e2"],["posts/63295/index.html","84e0b4b117b92946539c55d4782448f6"],["posts/63613/index.html","92890701b18b5678f5a5fb084abf74de"],["posts/65250/index.html","465ef57de90dcbb48d5be95e6dbaa95f"],["posts/7734/index.html","47cfe5b03442a94c7cf321d441346ac5"],["posts/8091/index.html","65b1b802606822cd278aad5816e75c4b"],["tags/C/index.html","c517b3588eaa8cfcc41cad6eb64f0403"],["tags/Data-Sturctures/index.html","c410cd9a42a6403edbf91733199c28df"],["tags/STL库/index.html","365f7a0df5416c6940657cece1221e1e"],["tags/acm专项练习/index.html","e5e785c27ee1368c22fd2de45121a22c"],["tags/apotheosis/index.html","993c742244d93f3e809332ee6828337a"],["tags/c-基础实战/index.html","52d342adfdb726ff782279dadc5aca92"],["tags/c/index.html","287dfe95bf6202b5aa1e795c8775b194"],["tags/index-1.html","80f97cba0b5b77bf3548965ec69d02a3"],["tags/index.html","e78800b77a26618d0d8302dd4cb2e7d2"],["tags/leedcode/index.html","b0c02468aaba37c1211262106af0fe89"],["tags/linux/index.html","a51bc2887c2ad095099b5232b85d2f6e"],["tags/linxu/index.html","5c438719a03875be2c33a6d3a49562cb"],["tags/python/index.html","f5767e41d749af4be9d81a8e61b39f90"],["tags/though/index.html","5481012a73974b664dcb3db98d78fa0e"],["tags/tree练习/index.html","fab2a44205e050bf40399b588069b2a1"],["tags/动态规划/index.html","ff95aa9e2a43f6f869f38f6f093365bb"],["tags/大数据/index.html","3e0132d4f0e8b408afdeccb3d38f7c0f"],["tags/字符串序列/index.html","ad76587d33d6a43c4c2d6437796e4464"],["tags/字符串系列-匹配算法合集/index.html","bbbc823430397654d5b53430e295c654"],["tags/字符串系列/index.html","f5181a9ce95050d7079ed868093007af"],["tags/操作系统/index.html","f30ab7327333c63e1ae7b2f3b6a54d0d"],["tags/操作系统开发/index.html","9c9ede3ae21a1ace9a06822ee0f3ee69"],["tags/数据库/index.html","3d3bece126f2e57703209744c54f5327"],["tags/数据库高级/index.html","565ef0be4be0dcf3f7755f7f41885cb7"],["tags/数据结构/index.html","17874c51ad4fe432f8740ea45e4e596c"],["tags/算法/index.html","9ac95c321a236d6e7990faab08c19355"],["tags/练习/index.html","b8689673fa829d3fe7879880ddb49f77"],["tags/编程语言开发/index.html","15de2a4831f4a2832aff0041bbe45b80"],["tags/补漏/index.html","6f217cb1fa476f645e635a8da8b1e2b8"],["tags/计算机网络/index.html","c7bd79f39ae5e043ebaac34eac250bd7"],["tags/随机数/index.html","fdab780ba19eb2ad57269efddd52da39"],["tags/面试/index.html","72292a550b22c83bd2716022b06ca119"]];
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







