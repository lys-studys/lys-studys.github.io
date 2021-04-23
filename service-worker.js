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

var precacheConfig = [["404.html","0ac674aaf26d83f7fdb0d42d4d61b3fb"],["archives/2020/09/index.html","6bd9756fc2bbae2f833ca4b90f15ab22"],["archives/2020/10/index.html","bc31fc6b398b1a5943fccee721b0c301"],["archives/2020/10/page/2/index.html","febd673cf040dd4e14157b70ec7948bb"],["archives/2020/10/page/3/index.html","548864f7a6325eb16776b79a745f9420"],["archives/2020/11/index.html","dcc8c613ef0072dd3c1760a9c2826a65"],["archives/2020/11/page/2/index.html","c9aa54f7d3233014ae8302f20501f3e3"],["archives/2020/12/index.html","02df4b4b6af117e370f5fe46500e6f81"],["archives/2020/12/page/2/index.html","df06e3ed16657f3a6b7a0eb0049673c5"],["archives/2020/index.html","7f6ae8b91fbbaf45cac7a9f631f0f748"],["archives/2020/page/2/index.html","bbea0edbb9846ed89a0164321c417844"],["archives/2020/page/3/index.html","605a7bc6b453844b13df4c5618a033d9"],["archives/2020/page/4/index.html","89423955547fb33ff61bb09c64cc7b40"],["archives/2020/page/5/index.html","bd3b97ae05046bed07cd9a7ac9108da1"],["archives/2020/page/6/index.html","b7a82d4b6e1103786914186b21aa60a2"],["archives/2021/03/index.html","e3bd88503127f68fdf1bc67bfcff651d"],["archives/2021/04/index.html","e191f759f50af7f63fcbd1dd75e3532b"],["archives/2021/index.html","779ec0cc4f3ba1b8de8f72e65781ad1c"],["archives/index.html","232da41290123672587847f9d2724cd8"],["archives/page/2/index.html","5eb3ca61d580f204b1e94e147c243fa2"],["archives/page/3/index.html","9b6729c7b30ff525ead5b1e1a7d52c8f"],["archives/page/4/index.html","89c66ef7f65797d9de674a3452fbea1a"],["archives/page/5/index.html","8a0c44600be7968556d2bfe9047f9d0f"],["archives/page/6/index.html","92de63bcca74ae356f57b107e665d2b0"],["archives/page/7/index.html","522d354990209ed3f0330df80255c845"],["assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["categories/STL库/index.html","ed15bb06a7da58a5af64010d39bc2bdb"],["categories/c-关键字/index.html","f6b28300cd65d4f9d56169041275273a"],["categories/c-基础实战/index.html","7e043bc43d1bab59a74c0ea32bd48815"],["categories/c/index.html","6e2b530d325ec7cb466d3e245ac009a4"],["categories/index-1.html","a59457b57640be23b7960809451baf74"],["categories/index.html","ecb1fd86276447bba3fef46de94559ef"],["categories/leedcode-链表/index.html","19c4d6eee488ec3119556101ebddf2e9"],["categories/leedcode/index.html","12fb535d7f808929c1da1ea034561197"],["categories/linux/index.html","7279bf00280922ba35d8a9a2fc0db96f"],["categories/python环境问题/index.html","98f66eeb28fb95fd097d88b1ffa8aca1"],["categories/tree联系/index.html","a3996086ab4e493f735e913883441161"],["categories/优化/index.html","727152cc60208a221bed9a89a193832a"],["categories/动态规划/index.html","17823faa50f19c5498a4baaf97be18a4"],["categories/大数据/index.html","bbd90fe692460cd0ecaf6780fc22d25e"],["categories/操作系统/index.html","581edf9f6bf127cac14cf671133451b4"],["categories/操作系统开发/index.html","dd02bb97c55a50e7077dec02b3a1eeed"],["categories/数据库/index.html","c681401863517cca25ce17e7e2a702ce"],["categories/数据结构/index.html","349a4f60afb5c01c02eaadaa312b3679"],["categories/爬虫实战应用/index.html","a544baf83a028b49635229ed85e9bf27"],["categories/算法/index.html","5b44d3d5516e1401247ead6153f78a67"],["categories/练习/index.html","bbdfd7c04717aebfb35df0d87a00efde"],["categories/编程语言开发/index.html","e6174d40c6f84193801e99b08b6a046d"],["categories/网络实战总结/index.html","852f3dff9c1f4420b03208699bd0c95f"],["categories/补漏/index.html","995f099a266d9060ffa2ec83612d3b2d"],["categories/计算机网络/index.html","ff3501aafa7faeecc55fd11655ec0b29"],["categories/随机数/index.html","4c1d7ad991f42ae7cc1196ff2f543613"],["categories/面试/index.html","b29d9efb66f96109bf248cb4c155ad74"],["css/background.css","5bb9900d1bad9cb1e3fce454bc255d7f"],["css/index.css","6820a24dae33f2f98a11a1038eb0b48f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","50bc90520c686ea8500981de89985d49"],["img/bei1.jpg","60bfcaea92765d01bb04672083dac266"],["img/bei2.jpg","926a9ca3033eb9a0ed6aaf54ee66d4b3"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/qiao.jpg","e919f8fea62f9a9786ec9cf2ea72d1de"],["img/star.jpg","b0733874fc43bb9e495440990e0dfd27"],["index.html","cf68d9409b9e28e6198993cf66d4defe"],["js/main.js","4898030387012f8af71563ef8353433a"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","6bebed368a1bbcb630dd146cefb103b7"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","64d1e1837ad1a585888f5d1e16c71f77"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["js/utils.js","f91ea1a86a5c45e344a24fb437642f36"],["live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["messageboard/index.html","b41d4fbbeb66f7a8e30c7a073702e2db"],["page/2/index.html","1f45bd6bed51ae62bc43a51660e4db19"],["page/3/index.html","cb83ea0900c01e0ebec048ee75e1760a"],["page/4/index.html","5038e190acc20c867003aed4915c4df4"],["page/5/index.html","a138cf013f4d06afe9d07fabc1834dc4"],["page/6/index.html","072d231f80ba4e1538a281e9333a47f1"],["page/7/index.html","e03fc633455827041acbde3b6cc42c55"],["posts/1/index.html","e284124d8037ec9d8f1d325f9b6ac814"],["posts/10547/index.html","790fbfe7b2dabc398d7cda886dd7c272"],["posts/14192/index.html","19773493f0307b359de0b7b794431d2d"],["posts/14686/index.html","588071fcdaa9757d2c98bb61e882b762"],["posts/15411/index.html","02aa01c021f48ed9e5ac43662428ef8a"],["posts/15731/index.html","ae2124bb5c645b9e76224f0d60458b6f"],["posts/16097/index.html","aac6da14c628c85d112ccd600d91dd8a"],["posts/16107/index.html","be6778136f6ed1e5082f1ee7018e3129"],["posts/16108/index.html","e24e727e4bdd83d7f8918d884a2ddcb4"],["posts/17385/index.html","fc4dbd6803b65685132f2622db9727ed"],["posts/19586/index.html","ba007a7eebb122dcd10ba483cbf70be9"],["posts/19628/index.html","ba494fdf6728ef88e01e57545c6ef8c3"],["posts/21322/index.html","ccac1f1cf5cc3e3a5b5136e9fb17064d"],["posts/21795/index.html","349b26a166f17772f285e95c42b8c1a2"],["posts/21911/index.html","667632120642f83a5f9b6a1c92519388"],["posts/23469/index.html","947defe611188f28dfc4b2e79b4ac05e"],["posts/23956/index.html","6d1fd3866b8013ff090afb08b806971e"],["posts/24148/index.html","1b42301f0cc5b34d6d5b8a248aef63e1"],["posts/24340/index.html","0202a2d95d83ffa05ab1b4262d1741d7"],["posts/24504/index.html","89438c08574fc43d7553cc3e09ee8643"],["posts/24772/index.html","3c62e89b6df871251e038f49abba7c64"],["posts/25345/index.html","033f42c296604f5de0616a5141bfbb47"],["posts/26821/index.html","f5ab822f6dd9c27a26ba5b51d0ecbf5d"],["posts/28273/index.html","d56df5fda3fa9f9247e297ddf5ffd0a1"],["posts/31131/index.html","0303fcca4aa405e61597d056492aa531"],["posts/32473/index.html","b92714f03048f87e8e19fdd50b42220f"],["posts/33531/index.html","ffec61967f428067e32915a7eb13c9d6"],["posts/33723/index.html","44c6251a5e3490acb55fc5352d163f85"],["posts/34955/index.html","2568c48e716db21df220e45155acb2bd"],["posts/35949/index.html","0d61abd04f80b6f1c7ae883114537189"],["posts/36817/index.html","94d2ec80f35be45d15e42568da155448"],["posts/37274/index.html","e8e17a7e8124aa967ab3d557da0a7c51"],["posts/37850/index.html","4c6768be34244d13dcaaa8e7f78d537c"],["posts/39404/index.html","8b86c7ff3e15f52a94cb70e0960990ff"],["posts/39788/index.html","3de960994337057fa3c16129c80d9d47"],["posts/40133/index.html","ec6a323a46254db1bdb7b96869daa87e"],["posts/40290/index.html","01fc55092e0499eced5a80aed2e482b8"],["posts/40325/index.html","edc1ba5be722ae70b92890be36469fe0"],["posts/40917/index.html","2a085f410986d2958bee94c0394c2ae9"],["posts/42182/index.html","d480622aa49c9d94f637fa3385cd70f2"],["posts/43760/index.html","0e7bb4e0055fc21513a5125dd1910c7e"],["posts/43952/index.html","a5ea5f4e25f6e88721d7a4e1f4b7bd44"],["posts/44296/index.html","5205d1905baa1e367f7b83513e76aa70"],["posts/4515/index.html","759293d84120e2c279d44a550f02abcd"],["posts/4524/index.html","8f894d7fa2053269b7e14fa4653451c9"],["posts/46373/index.html","3569608059ae9ed6b249618801e13a1c"],["posts/47607/index.html","aa6282f52834e9d191c221ac3e312fc2"],["posts/48539/index.html","d2aa87a3f275ee31a5dca15a1974819b"],["posts/49861/index.html","e202aac2637dc46a72dd1102789c4096"],["posts/49877/index.html","a13036d85ea1f4f6b6f6d15bc4d1787e"],["posts/50097/index.html","9cbffaa8ae885600ef3452622295f1e9"],["posts/53699/index.html","3c71b24181731f408e9663bc75aed5f6"],["posts/53868/index.html","5a518a6e33941de27c6cd20e19867de7"],["posts/54839/index.html","1af57d170041d16e87cab1cd51afb2c7"],["posts/55244/index.html","fdeae3a7bd32125c34c3dfbf6f17a333"],["posts/56260/index.html","43c6f67b91e180f6e3d2c572d83f91bd"],["posts/598/index.html","4f19c8f250ab8ec1d71501e2d2bcd37c"],["posts/59942/index.html","2b07c114c1052d51056b1d089c0d62bd"],["posts/60133/index.html","c8f7fadde0b8d11fa8e923feb59f4231"],["posts/60234/index.html","62a8febb8c736543e38be3d226f42c26"],["posts/62607/index.html","1b0f2ade31bc24b7558e3b203f0058e2"],["posts/63295/index.html","84e0b4b117b92946539c55d4782448f6"],["posts/63613/index.html","92890701b18b5678f5a5fb084abf74de"],["posts/65250/index.html","465ef57de90dcbb48d5be95e6dbaa95f"],["posts/7734/index.html","47cfe5b03442a94c7cf321d441346ac5"],["posts/8091/index.html","65b1b802606822cd278aad5816e75c4b"],["tags/C/index.html","4a2e66b36977fe0df712b767106e1c80"],["tags/Data-Sturctures/index.html","912187b4fd8a44da34740e998de7f246"],["tags/STL库/index.html","d7eb5dbd3894db22798330b3b5bac07e"],["tags/acm专项练习/index.html","f4a63a19d0288bcf5284565f4976c133"],["tags/apotheosis/index.html","f23a0ca48d9a0297596869822c6e8e21"],["tags/c-基础实战/index.html","1b632d22be1176d5377ba51776021bee"],["tags/c/index.html","f08f108343b57ea67cf75ab2b3e4a55c"],["tags/index-1.html","f5cacfcf0de903038d228b7f4137b2e6"],["tags/index.html","e24e4f0188bb9052972b191f75a1f542"],["tags/leedcode/index.html","43cb3fabd04d3261dfcbd70c2fe632e2"],["tags/linux/index.html","5b9843f036f28f470a581b6c88ded959"],["tags/linxu/index.html","ab45212beb93435a1ce96315ae29f556"],["tags/python/index.html","3fe67fd16fcf59e85bbf744f1347d8e8"],["tags/though/index.html","b8485196c8dadf32ad70107c080d8b87"],["tags/tree练习/index.html","3aa5de0209bc72ddf39431e530328180"],["tags/动态规划/index.html","4675d023d0da67f8865ca43081ee1171"],["tags/大数据/index.html","6d8f75932e56fad5dc6cdba3adec09a1"],["tags/字符串序列/index.html","9be44ac5ac56be11b045342a1c995465"],["tags/字符串系列-匹配算法合集/index.html","72e69da7f8bc5a3ddd1373b13eba1ad3"],["tags/字符串系列/index.html","90bbd098f556324df27fb1fb40a6e97e"],["tags/操作系统/index.html","18ea8a6db3fb8a738320fbfb474afe0e"],["tags/操作系统开发/index.html","010100705a175b991b8b1e031607ce54"],["tags/数据库/index.html","938f959d34d97c05023d31994d084d19"],["tags/数据库高级/index.html","697cfe86366e5a44a627b0e4517ac7a7"],["tags/数据结构/index.html","563e1624b296d92496a3d354358efbf1"],["tags/算法/index.html","dd26af4fa04dfda0a14aa63e1d1b8890"],["tags/练习/index.html","7b4d6318e21f05a5f865a169cef5aa30"],["tags/编程语言开发/index.html","1900011683600bf5fbd4dedf58f72059"],["tags/补漏/index.html","60bf9233a409d8eb638d1a2fcb5420bc"],["tags/计算机网络/index.html","10a5d1cf24f3407bc9addaddae5c67be"],["tags/随机数/index.html","06cfa5df0105189265fa1a7fb833b41a"],["tags/面试/index.html","930a758e12d25bea85b439fb836bebd5"]];
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







