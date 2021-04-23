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

var precacheConfig = [["404.html","702c7489c6dfbf27e5148f42696ef8b9"],["archives/2020/09/index.html","ffaebd7e61f9527eeef0d82175d99dd8"],["archives/2020/10/index.html","937994674f08d11573e793c7b799e4bb"],["archives/2020/10/page/2/index.html","8b0aa0a7685e0fd63d267be4c40f112b"],["archives/2020/10/page/3/index.html","181d30361d02c63f01ba60a3ac369f40"],["archives/2020/11/index.html","03d954cd67239bb5335c63396be600ac"],["archives/2020/11/page/2/index.html","af97f5695f8948c978b855e9306ec944"],["archives/2020/12/index.html","24e0c298cb740c21249546a4a8b98e67"],["archives/2020/12/page/2/index.html","b4f29abffbfb1a65036976957972f867"],["archives/2020/index.html","fb67e39e2e487d43eb655b4a3e0180f4"],["archives/2020/page/2/index.html","8d7ca976f93e42281515cf41bdc16d54"],["archives/2020/page/3/index.html","3d01f18d504414dee0bc1e9262febaee"],["archives/2020/page/4/index.html","9369b1a12f17ff4ddda6af4f5c00dc88"],["archives/2020/page/5/index.html","ba76214b2b75d564515b7667fb598a86"],["archives/2020/page/6/index.html","1fe0a9efc8f6fb235587231e9f1cab6f"],["archives/2021/03/index.html","f7d3cbd3e242bef88ff7be408396a0da"],["archives/2021/04/index.html","e6e0fe99ea1e3defc14cdad544008c19"],["archives/2021/index.html","57b7aff65f58737ed1546c57bb111187"],["archives/index.html","16d4989890b65c57b961993f8a6de11e"],["archives/page/2/index.html","b8d1f081d2d0f84cdc59f103f7c3515b"],["archives/page/3/index.html","becea54dfd6e5cdb28d879d501217353"],["archives/page/4/index.html","32e86d84233b257cb1837b68f3752b3e"],["archives/page/5/index.html","9b04e9fb4d08c6c2c42be9cbba82bf75"],["archives/page/6/index.html","cc0fb06b89b90caeffa2bbed86c1eaeb"],["archives/page/7/index.html","ae77d46f0d69cf4130535869cbdf86fd"],["assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["categories/STL库/index.html","66c61cf955bc20486d79bf2c5b22c44c"],["categories/c-关键字/index.html","e6e9c3356795b37b41e77cf8175cde46"],["categories/c-基础实战/index.html","506debcb06d5da0992c33d7c60a54ab1"],["categories/c/index.html","15b2abed4cbb048e2febde1049598fde"],["categories/index-1.html","05b2da9e8c60937b6db9b4c05ee48c69"],["categories/index.html","0022fdc66e8426643b2cc1c202c9b987"],["categories/leedcode-链表/index.html","1d6600df7ef265675bab2f8a52fd7e36"],["categories/leedcode/index.html","748c366c149d9d07ceab7d7f32305577"],["categories/linux/index.html","c1cd1ee1765e8ffa5f5e527f7e409bfc"],["categories/python环境问题/index.html","69e2af3df44b775c63645887463156f7"],["categories/tree联系/index.html","6d82b3c931f20c6f467684d07f9f71c8"],["categories/优化/index.html","374527d8a187c21bab49552a3389174c"],["categories/动态规划/index.html","eecb66ae8f8f82356ed2cfd48ef47d97"],["categories/大数据/index.html","d1c241c43c2509862b360384d5a1a8d8"],["categories/操作系统/index.html","f2999b9933f4afbe76899e4a88223335"],["categories/操作系统开发/index.html","af0f6b2cf87f3a08f01ec9c8a2d2ac24"],["categories/数据库/index.html","0529b8cc9971ea00606cebb1a6200144"],["categories/数据结构/index.html","698a86081a939127963577f5be0b97f8"],["categories/爬虫实战应用/index.html","3363066b69f7ed88f7c320e715f54f58"],["categories/算法/index.html","adbde4e908e2425b56b2b6f785f9bed2"],["categories/练习/index.html","854f37d4bf5f7316a99264fd774878f6"],["categories/编程语言开发/index.html","0578711d7e7bfb93e1cb1feb3dbeb577"],["categories/网络实战总结/index.html","5d54cb180258f028cb917453513cc40f"],["categories/补漏/index.html","b54e8b7d1384fb904e3b56094e404dfc"],["categories/计算机网络/index.html","44cde5c09ac60a551cc6e20727b0751d"],["categories/随机数/index.html","de4d27afbae4449e288c63b92bbc66cb"],["categories/面试/index.html","80fd20a139bdef6dd749c2ff588e0b2b"],["css/background.css","5bb9900d1bad9cb1e3fce454bc255d7f"],["css/index.css","6820a24dae33f2f98a11a1038eb0b48f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","50bc90520c686ea8500981de89985d49"],["img/bei1.jpg","60bfcaea92765d01bb04672083dac266"],["img/bei2.jpg","926a9ca3033eb9a0ed6aaf54ee66d4b3"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/qiao.jpg","e919f8fea62f9a9786ec9cf2ea72d1de"],["img/star.jpg","b0733874fc43bb9e495440990e0dfd27"],["index.html","448260e54b4c83769beea80d7536b0a6"],["js/main.js","4898030387012f8af71563ef8353433a"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","6bebed368a1bbcb630dd146cefb103b7"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","64d1e1837ad1a585888f5d1e16c71f77"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["js/utils.js","f91ea1a86a5c45e344a24fb437642f36"],["live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["messageboard/index.html","2899eba19cc6a39d862f84118677ef7f"],["page/2/index.html","f64a62e6cf149a812abe979bc71f8a8a"],["page/3/index.html","2a8e7d6400bf4344d904cb8451ac3de0"],["page/4/index.html","aece251707708cf24faeaf180e99188b"],["page/5/index.html","33abbe606c20801668c9f570deeac1c2"],["page/6/index.html","bf9017bd6fe8a4786dc42ab8d24b21df"],["page/7/index.html","44b31765462221ca55c82cb266eb2f66"],["posts/1/index.html","e284124d8037ec9d8f1d325f9b6ac814"],["posts/10547/index.html","790fbfe7b2dabc398d7cda886dd7c272"],["posts/14192/index.html","19773493f0307b359de0b7b794431d2d"],["posts/14686/index.html","588071fcdaa9757d2c98bb61e882b762"],["posts/15411/index.html","02aa01c021f48ed9e5ac43662428ef8a"],["posts/15731/index.html","ae2124bb5c645b9e76224f0d60458b6f"],["posts/16097/index.html","aac6da14c628c85d112ccd600d91dd8a"],["posts/16107/index.html","be6778136f6ed1e5082f1ee7018e3129"],["posts/16108/index.html","e24e727e4bdd83d7f8918d884a2ddcb4"],["posts/17385/index.html","fc4dbd6803b65685132f2622db9727ed"],["posts/19586/index.html","ba007a7eebb122dcd10ba483cbf70be9"],["posts/19628/index.html","ba494fdf6728ef88e01e57545c6ef8c3"],["posts/21322/index.html","ccac1f1cf5cc3e3a5b5136e9fb17064d"],["posts/21795/index.html","349b26a166f17772f285e95c42b8c1a2"],["posts/21911/index.html","667632120642f83a5f9b6a1c92519388"],["posts/23469/index.html","947defe611188f28dfc4b2e79b4ac05e"],["posts/23956/index.html","6d1fd3866b8013ff090afb08b806971e"],["posts/24148/index.html","1b42301f0cc5b34d6d5b8a248aef63e1"],["posts/24340/index.html","0202a2d95d83ffa05ab1b4262d1741d7"],["posts/24504/index.html","89438c08574fc43d7553cc3e09ee8643"],["posts/24772/index.html","3c62e89b6df871251e038f49abba7c64"],["posts/25345/index.html","033f42c296604f5de0616a5141bfbb47"],["posts/26821/index.html","f5ab822f6dd9c27a26ba5b51d0ecbf5d"],["posts/28273/index.html","d56df5fda3fa9f9247e297ddf5ffd0a1"],["posts/31131/index.html","0303fcca4aa405e61597d056492aa531"],["posts/32473/index.html","b92714f03048f87e8e19fdd50b42220f"],["posts/33531/index.html","ffec61967f428067e32915a7eb13c9d6"],["posts/33723/index.html","44c6251a5e3490acb55fc5352d163f85"],["posts/34955/index.html","2568c48e716db21df220e45155acb2bd"],["posts/35949/index.html","0d61abd04f80b6f1c7ae883114537189"],["posts/36817/index.html","94d2ec80f35be45d15e42568da155448"],["posts/37274/index.html","42fb8c060bf2e0825456675d944ec023"],["posts/37850/index.html","4c6768be34244d13dcaaa8e7f78d537c"],["posts/39404/index.html","8b86c7ff3e15f52a94cb70e0960990ff"],["posts/39788/index.html","3de960994337057fa3c16129c80d9d47"],["posts/40133/index.html","ec6a323a46254db1bdb7b96869daa87e"],["posts/40290/index.html","01fc55092e0499eced5a80aed2e482b8"],["posts/40325/index.html","edc1ba5be722ae70b92890be36469fe0"],["posts/40917/index.html","2a085f410986d2958bee94c0394c2ae9"],["posts/42182/index.html","d480622aa49c9d94f637fa3385cd70f2"],["posts/43760/index.html","0e7bb4e0055fc21513a5125dd1910c7e"],["posts/43952/index.html","a5ea5f4e25f6e88721d7a4e1f4b7bd44"],["posts/44296/index.html","5205d1905baa1e367f7b83513e76aa70"],["posts/4515/index.html","759293d84120e2c279d44a550f02abcd"],["posts/4524/index.html","8f894d7fa2053269b7e14fa4653451c9"],["posts/46373/index.html","b9ff57444ba45a714615b73040ae34ce"],["posts/47607/index.html","aa6282f52834e9d191c221ac3e312fc2"],["posts/48539/index.html","d2aa87a3f275ee31a5dca15a1974819b"],["posts/49861/index.html","e202aac2637dc46a72dd1102789c4096"],["posts/49877/index.html","a13036d85ea1f4f6b6f6d15bc4d1787e"],["posts/50097/index.html","9cbffaa8ae885600ef3452622295f1e9"],["posts/53699/index.html","3c71b24181731f408e9663bc75aed5f6"],["posts/53868/index.html","5a518a6e33941de27c6cd20e19867de7"],["posts/54839/index.html","1af57d170041d16e87cab1cd51afb2c7"],["posts/55244/index.html","fdeae3a7bd32125c34c3dfbf6f17a333"],["posts/56260/index.html","43c6f67b91e180f6e3d2c572d83f91bd"],["posts/598/index.html","4f19c8f250ab8ec1d71501e2d2bcd37c"],["posts/59942/index.html","2b07c114c1052d51056b1d089c0d62bd"],["posts/60133/index.html","c8f7fadde0b8d11fa8e923feb59f4231"],["posts/60234/index.html","62a8febb8c736543e38be3d226f42c26"],["posts/62607/index.html","1b0f2ade31bc24b7558e3b203f0058e2"],["posts/63295/index.html","84e0b4b117b92946539c55d4782448f6"],["posts/63613/index.html","92890701b18b5678f5a5fb084abf74de"],["posts/65250/index.html","465ef57de90dcbb48d5be95e6dbaa95f"],["posts/7734/index.html","47cfe5b03442a94c7cf321d441346ac5"],["posts/8091/index.html","65b1b802606822cd278aad5816e75c4b"],["tags/C/index.html","e54fd861e3890e5c287de68c82712858"],["tags/Data-Sturctures/index.html","39be9325dcafd59b01baf3735f4c3b16"],["tags/STL库/index.html","685652aa796b24a16fe72fd9ff7a6dac"],["tags/acm专项练习/index.html","93aa4bb92063b8ed559d3a4c814c3b96"],["tags/apotheosis/index.html","ae945efcac531be711778ecb665eac9e"],["tags/c-基础实战/index.html","adc482bdd5d5c8bdddcd09c9eb692d0c"],["tags/c/index.html","6f27a786fbdd8b6d783bd0dcb4a078e6"],["tags/index-1.html","dba3325e9e5966432e6b5ac812d654b0"],["tags/index.html","fd4ab35133ac6a809504eb68d6ca9a94"],["tags/leedcode/index.html","d963a960bc31bcb3b207a31c8dd76147"],["tags/linux/index.html","4d2aacd44e8d4c3263825adbf82d62b5"],["tags/linxu/index.html","8adb0cc36d451526b04b8c32e56a9deb"],["tags/python/index.html","72b134b6f04be192099341160421c7cc"],["tags/though/index.html","0e27817efa3175539e73577ba4b6a287"],["tags/tree练习/index.html","463b9a244b537e495e037ac45f6453c6"],["tags/动态规划/index.html","667af31de1533c5daddadc1e502e666c"],["tags/大数据/index.html","0fe20148e5f619e85173523769f2d268"],["tags/字符串序列/index.html","161733bf26f5fefcefd3df3e36dcafc4"],["tags/字符串系列-匹配算法合集/index.html","5bf121f340c2df69b67f3fd2ee4985fb"],["tags/字符串系列/index.html","8c3c5b735fdf527f9d5f60fa2f9823ff"],["tags/操作系统/index.html","60e4f633eb26864ff02a1565811ae146"],["tags/操作系统开发/index.html","df73ab0c2c6f372402f5cc29d668a616"],["tags/数据库/index.html","4e75d01f7fd7d75f055a18019880cfde"],["tags/数据库高级/index.html","29905c4e1d4c8f7612086f12bc6d3992"],["tags/数据结构/index.html","d5c8b00e10e9d73da4706b574755288c"],["tags/算法/index.html","a0f201112d3e2d33c841def66e0197c2"],["tags/练习/index.html","adc5a7a8826224d7964aa1babe279844"],["tags/编程语言开发/index.html","349981a448a45975cb8a3652b85d239f"],["tags/补漏/index.html","27692be686bb3a7cb5d9488e69626287"],["tags/计算机网络/index.html","79fc7ce586d8eada34c9e9a46b92081a"],["tags/随机数/index.html","8262c08a123c1c5be056a9d217c30554"],["tags/面试/index.html","d7aa7db33597f38ce99c6b593a65847b"]];
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







