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

var precacheConfig = [["404.html","172797f7285161922a4805814c5db6dc"],["archives/2020/09/index.html","d6d4a746c409b90960ed7836e86766a6"],["archives/2020/10/index.html","b4a5ce1c690fed6b54b96ec9d93a6a0e"],["archives/2020/10/page/2/index.html","9bf9c656c31abe4ad5b81bc522836609"],["archives/2020/10/page/3/index.html","7964ef8dbcfd0d0fc92da9dc17bfcc0c"],["archives/2020/11/index.html","c9cc8ee56b053da6409013964f3ecac4"],["archives/2020/11/page/2/index.html","e02b32493ea90a31daea98330bfc188c"],["archives/2020/12/index.html","1aa73dca8580ffc8697f6184c2a0235d"],["archives/2020/12/page/2/index.html","e1e38282766ee6e39042bd2be8ee8c30"],["archives/2020/index.html","c2f8a708a3863e1a2f18e635997b7f19"],["archives/2020/page/2/index.html","d0078c47b936310a8a81f268f452bb10"],["archives/2020/page/3/index.html","af0305675a6ddf891606c58126e83a6e"],["archives/2020/page/4/index.html","5929164198ecc5a5d5d079b8943d76fb"],["archives/2020/page/5/index.html","2645ca1194f77a5c22704ba5214cf1c6"],["archives/2020/page/6/index.html","f6ddf63e1e521027c6dd31b2f7349f7a"],["archives/2021/03/index.html","7188c3d1062b00ec598d660ae32d1a57"],["archives/2021/04/index.html","29eb573c8bf5d55cc0ce9aa44d3f33ae"],["archives/2021/index.html","190ece68ca4903db06db4dba229549fb"],["archives/index.html","8187650fe19ff5035ad1b62112592bc0"],["archives/page/2/index.html","2e9b81c53a7c9e7d547386da98b34ffd"],["archives/page/3/index.html","91bd05ac78ef4fdfe1632a95838ad4db"],["archives/page/4/index.html","519d0134f903e1bd7e2dab4df3d7393b"],["archives/page/5/index.html","9787e8a4c0b25c7ffffcae6cceafd6af"],["archives/page/6/index.html","d2bd2c9678e2de1f6d8bdd3ad71dc331"],["archives/page/7/index.html","6e236e5da981826b10e6e1d9ea3a73f9"],["assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["categories/STL库/index.html","65c6bf2f2ef0b29bde1fb6289ce540ad"],["categories/c-c/index.html","92e2cf23ad835609a42fdfdac7f94476"],["categories/c-关键字/index.html","96161d7b1aa8fe27a06dcc80c576083a"],["categories/c-基础实战/index.html","1482620daaf89489f0c597a2ae5b397b"],["categories/c/index.html","114c5706affc5dc3389efa3f3e280af2"],["categories/index-1.html","cfbb0cdde50148f9a64c560763d2be19"],["categories/index.html","99151dc9435b12f43eb015a85b9fe4fd"],["categories/leedcode-链表/index.html","d06aa6e7d9670b138944e7661dd9e42c"],["categories/leedcode/index.html","b420cc378494bc4901a4a7e8f1ee6477"],["categories/linux/index.html","775108f78ec2fb7b63990dab38def60d"],["categories/python环境问题/index.html","22cdd78a5697165e75585c59e9391b0c"],["categories/tree联系/index.html","d74a5175481b8a2a8c98ad4973e45888"],["categories/优化/index.html","5d23df5f27fef0d4eeaf1084f96740c8"],["categories/动态规划/index.html","beca873849f302a5d5115377feb6ab7b"],["categories/大数据/index.html","00074f69c865eceffc557236d46c552d"],["categories/操作系统/index.html","d10963e78e9b94e22aa0aeacd5134cc9"],["categories/操作系统开发/index.html","b7757a4749b10288242ca4f685f61a47"],["categories/数据库/index.html","2d883c62453f21956875624c529b696b"],["categories/数据结构/index.html","b828d6a88566d28457b5b309765718cb"],["categories/爬虫实战应用/index.html","f851b1035a16a38d17ec16a78d4ba05b"],["categories/算法/index.html","3ec657345177c8f957b5566adae3602c"],["categories/练习/index.html","c1647e461c711da60e4ecc60305da0f9"],["categories/编程语言开发/index.html","301e23db665fe745434efd05947c57aa"],["categories/网络实战总结/index.html","4fb4e43e49c09e75fe056f10c52db398"],["categories/补漏/index.html","275df2884f82054a75ebddf3a22d6e66"],["categories/计算机网络/index.html","61e0e196607c531ab3d72d0885231e8b"],["categories/随机数/index.html","9204a96b84627e157fbb9fcfbf7b3738"],["categories/面试/index.html","bc9cde544cde93dcd1a968c276db87f4"],["css/background.css","5bb9900d1bad9cb1e3fce454bc255d7f"],["css/index.css","6820a24dae33f2f98a11a1038eb0b48f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","50bc90520c686ea8500981de89985d49"],["img/bei1.jpg","60bfcaea92765d01bb04672083dac266"],["img/bei2.jpg","926a9ca3033eb9a0ed6aaf54ee66d4b3"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/qiao.jpg","e919f8fea62f9a9786ec9cf2ea72d1de"],["img/star.jpg","b0733874fc43bb9e495440990e0dfd27"],["index.html","1b7b3d87b291d93103ff7cc6910566ab"],["js/main.js","4898030387012f8af71563ef8353433a"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","6bebed368a1bbcb630dd146cefb103b7"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","64d1e1837ad1a585888f5d1e16c71f77"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["js/utils.js","f91ea1a86a5c45e344a24fb437642f36"],["live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["messageboard/index.html","9adc988a130761e04f42ebc5145b2d7a"],["page/2/index.html","fa0dd1abce17eec89361dd41a0de61b1"],["page/3/index.html","0099b0d8a2bd8a30d611c8d5a91cb208"],["page/4/index.html","d5243b7ae98961356ba590e678e2b40a"],["page/5/index.html","9b8c7b2da3a5117b0c16a8cca78fb818"],["page/6/index.html","17a4797af5086dc3438aee5692f9a056"],["page/7/index.html","25a13feccd4e78300db5ac29f1cacefb"],["posts/1/index.html","1d0c0a4dd36a4710584e1b019a13e51b"],["posts/10547/index.html","80284a01774c0375e84d210349457ac8"],["posts/14192/index.html","0f765df777f89d402af03055b11d6fe8"],["posts/14686/index.html","44f9af0f7cb3fae75dad882d5c0ef182"],["posts/15411/index.html","9322566e975e7e948253c00cc50ea34e"],["posts/15731/index.html","2e0705f841592761441f584bf7befe41"],["posts/16097/index.html","63ae4d566a54fc29612ada945e515568"],["posts/16107/index.html","edff1dd2680c5e7ad06062403bfe27b8"],["posts/16108/index.html","761bf8b962888651a81b9a7a234ab626"],["posts/17385/index.html","f5e3907d057bde78902ac37f94c56875"],["posts/19586/index.html","755b1be3dbeb3123b0ba7da3c5f13b8f"],["posts/19628/index.html","4a9c2c76fc7fbd2f4e6fc6bfa47d2357"],["posts/21322/index.html","f69d743bba30719efe7553b974c1aa50"],["posts/21795/index.html","595c39bb30d15b4cf03ad40a3edcf2a6"],["posts/21911/index.html","52d44d6b703fa560b5cfa9366e1a632f"],["posts/23469/index.html","3a35ccb55486294a697d7b0302cccefd"],["posts/23956/index.html","f92de87a0127d04911783c6e7bd60af1"],["posts/24148/index.html","c913a1c6d870933c93a30f16de0daaf9"],["posts/24340/index.html","8320a3347e3ea2e51b9a63b9e2aa4664"],["posts/24504/index.html","2f7ef1e4964f899fcfd098e4810dcc76"],["posts/24772/index.html","22acf177a5679a91b47f5b4b52a2a73c"],["posts/25345/index.html","8770b5290561a449ce93147d797f205a"],["posts/26821/index.html","6475ab5ba05204c06b00581d4e562930"],["posts/28273/index.html","528ed9c6d27f6b32ef31af691953a92d"],["posts/31131/index.html","c7c01b32254ad8028eed954ddb84f0de"],["posts/32473/index.html","f5a094c4efda83fbd3e0c16bddd38dc8"],["posts/33531/index.html","af1dda042f9a98914fa64219a7177acc"],["posts/33723/index.html","314292576324a0dc0dad004f0fd5afbf"],["posts/34955/index.html","98a799de790260648874aa616b08ec06"],["posts/35949/index.html","8d1a7f7ea0fab5854758e113104406d4"],["posts/36817/index.html","06d1177d4c5758968c6fc783a0261219"],["posts/37274/index.html","b00f8ec3aef92dec1258996ff5f7819b"],["posts/37850/index.html","a0cdab6a24b337ff34caae13e4c81643"],["posts/39404/index.html","3c16ee5f5d5a74c5122caa247f5b792a"],["posts/39788/index.html","bb062b2a7caa10dfbf9d8ba29f568e5a"],["posts/40133/index.html","54fc75f0296d1ffdcaa6728cd0935b78"],["posts/40290/index.html","bf9ff94d63018bf7b2a0dd8e8f898810"],["posts/40325/index.html","10afacc0b3549532b941b9d620dfbd19"],["posts/40917/index.html","8bbb8e7f972dc01fdc308a691f856abc"],["posts/42182/index.html","e77baea8553e35bf036c5c2c85afd059"],["posts/43760/index.html","17b6af6fc7ac0ebd169ec146af2db8d5"],["posts/43952/index.html","126f1bf01aa9c574b689894ad2e5fef2"],["posts/44296/index.html","dfbd06766501ae5dda1f380ef515686a"],["posts/4515/index.html","7c86c8118980f0ccdceb0dc3f6c466de"],["posts/4524/index.html","afd9fb700a4b30646e6b98589cd50259"],["posts/46373/index.html","ae7a0a994e8e4e8fb50da91e0d8418c2"],["posts/47607/index.html","8687a83715c29469963ddb36983f23b7"],["posts/48539/index.html","c98e5d9d65c513ad8a147a1ff2c5e96a"],["posts/49861/index.html","c933dc749cc3faea98bfe03c9de7685c"],["posts/49877/index.html","c9f9e2a06c6251dd6690017ec62c3588"],["posts/50097/index.html","4b63885d40dd64e372b1fbd69faa5b39"],["posts/53699/index.html","a6c70cbc5c105bdb777124dcdb2bdf26"],["posts/53868/index.html","9093d67a5e967a76dfceed6d3cd68745"],["posts/54839/index.html","d560157c8af73334d08d1a9438b62f45"],["posts/55244/index.html","d4931bc8b25285e18a295eb631ce4603"],["posts/56260/index.html","dc7a7f3d80d1426ac0b636e543f99dd2"],["posts/598/index.html","9751ad75adb513cceae59776ca3f535c"],["posts/59942/index.html","7de75ec8c315831e3196d5bb2681c819"],["posts/60133/index.html","09426e8586916dbdbb4cc5dbff8c77f4"],["posts/60234/index.html","02a277be04e43d051baf60b1a12eabf8"],["posts/62607/index.html","672d288ba9c261e4f15f8dbcf86b8549"],["posts/63295/index.html","0ebb8022fcc1ca5f6d2fa028ec72bac6"],["posts/63613/index.html","9b28d52857f6025b2ac37d216d748bd7"],["posts/65250/index.html","d1bd992c0043f1eb3d756a397c261581"],["posts/6688/index.html","70f80546d272ebf5655b11a1a83dc704"],["posts/7734/index.html","d77f43053683cd60bb0cc5b9b2cad185"],["posts/8091/index.html","3d02f0f82bc3b7d0c9f638c040807541"],["tags/C/index.html","ee9e9845a5fc95315ad5f1bfa7e1d2c7"],["tags/Data-Sturctures/index.html","67a471026171308d761917790af25996"],["tags/STL库/index.html","1338d0c3264bd0aadd6451b23b64e01c"],["tags/acm专项练习/index.html","707501da366165c979fe7a2c48239e22"],["tags/apotheosis/index.html","7f89cab0ff62305e74cf4042877e7628"],["tags/c-c/index.html","6a739fe7b157dbcd51e2bd12c4beaf5d"],["tags/c-基础实战/index.html","b9ec017e52e2e9653065ed5233be4f18"],["tags/c/index.html","ab13abc55d4227aada48d94d27642569"],["tags/index-1.html","36d85006c79dd65ff3a3e9e4e16dea0c"],["tags/index.html","8ebf399ce5c535cf659c5968b01d1853"],["tags/leedcode/index.html","d267b07b211d1522a016b4dadd6fa37b"],["tags/linux/index.html","67e1d4d186d5f25f4df37508f91c48ac"],["tags/linxu/index.html","b9e9427551570f0fc4c4bbf2f332590c"],["tags/python/index.html","42119dedca4e0381e9ae272482f5cbe6"],["tags/though/index.html","66951bc6cbc8db24e2d147d32fed52c4"],["tags/tree练习/index.html","eb22e5308906518d6d46152df266635b"],["tags/动态规划/index.html","e0083ca2fabb9108cbc02f6fb49bc8eb"],["tags/大数据/index.html","ab61d6f238935b12842f171313bea66e"],["tags/字符串序列/index.html","ae7163367952b0d79b23f0bf71e7da81"],["tags/字符串系列-匹配算法合集/index.html","c398decbc22238e1a083826fd9098249"],["tags/字符串系列/index.html","ab17f6e811542068abb61efc72daf218"],["tags/操作系统/index.html","d91cdba904f8565772071d9ecced728a"],["tags/操作系统开发/index.html","33c3fb7a34e87c79cc66c652923b5513"],["tags/数据库/index.html","51916d2557bfd0df8a0f2ce33d92f98c"],["tags/数据库高级/index.html","cf67b716ddb3c9b7c14a89359c450aca"],["tags/数据结构/index.html","7030c65cc12e763569a23b77c2d3d311"],["tags/算法/index.html","5ddd048f7b612edb2c57377dcdeedfd5"],["tags/练习/index.html","5b6a391a773d5fa8ae95df25070bfea7"],["tags/编程语言开发/index.html","8a91327c787b0cc7e0697e28beb5115b"],["tags/补漏/index.html","95c6f662921a4a4d39ea014f5ac4e09a"],["tags/计算机网络/index.html","8866a935a1f7d47e1d11ec6fbd0c21b3"],["tags/随机数/index.html","d7c255365547987ca6e6f3d79ae8544e"],["tags/面试/index.html","4d58ce64609363f7e0f200479ba0e7e9"]];
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







