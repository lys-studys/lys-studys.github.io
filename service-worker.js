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

var precacheConfig = [["404.html","964a439d0cf061b3ae1c8590ca6415a4"],["archives/2020/09/index.html","4067946e48541e2c3216dafdb8a770b9"],["archives/2020/10/index.html","cfc56d1a7a2c0a351bf9c9d68c3d1e2e"],["archives/2020/10/page/2/index.html","e503ed69a6f14a56a9387aaa94662e3a"],["archives/2020/10/page/3/index.html","fcfa9aa4ec2af7a2d216efcc307132c5"],["archives/2020/11/index.html","d3ae37ac9f5d18ca2a73942f4a06f60d"],["archives/2020/11/page/2/index.html","fa2a9e1d373c641adc885f1ac56c3ed4"],["archives/2020/12/index.html","ae4e16b717f257bbb1f28df5f8747114"],["archives/2020/12/page/2/index.html","a783bc0c7f341e87fe659e9b351c6e90"],["archives/2020/index.html","d26e99f53e7b86f7ab33d2d8c350ea5b"],["archives/2020/page/2/index.html","299624177e35f95051d7fcf3d0bb3cf1"],["archives/2020/page/3/index.html","d626ad9675edcb64e2c4a440c9e76fd3"],["archives/2020/page/4/index.html","262038d7b52b45b5982cfb57dcd13006"],["archives/2020/page/5/index.html","667b91abbdd8c71271f24465425fe70b"],["archives/2020/page/6/index.html","e7fc09d613416af3c6449d0044c1f61d"],["archives/2021/03/index.html","6235a289ee7ada5f95dd96d4cb8eb360"],["archives/2021/04/index.html","0fd883dbbaeb20696e16b0cb4cee5a74"],["archives/2021/index.html","69edaad090e735c59eb6054202606a72"],["archives/index.html","597f9a5f589adcb82e65a87621d17a88"],["archives/page/2/index.html","ead0b651a0a0576385ada78b6edaa36f"],["archives/page/3/index.html","033498efbb32fdd204db201c52419157"],["archives/page/4/index.html","50c80a3162cf327f92f058aecf9eeb53"],["archives/page/5/index.html","610df74c1b2a1dd0c49035255e9fb3f6"],["archives/page/6/index.html","01d17539d379861baaedaf03036fa4d0"],["archives/page/7/index.html","2ce525eeee5798a9b1e37667a8aa5466"],["assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["categories/STL库/index.html","78208a3132c2b1f146039760c3140885"],["categories/c-关键字/index.html","fdac4563ff0e651f36f1d71d0fd0b9dd"],["categories/c-基础实战/index.html","32d3fc9fc4439d3195c509d3b45b3014"],["categories/c/index.html","160f9b6b70df2bd21ab89b57723bd847"],["categories/index-1.html","e5d7fc9b8671f92f777375756ab2edb4"],["categories/index.html","20c9a382c3d444ace82ba4a74b276d77"],["categories/leedcode-链表/index.html","1e645a54466d4e30e74362220fb2b39d"],["categories/leedcode/index.html","284e06e36bfd991957aa9c7c36c69125"],["categories/linux/index.html","f1bb9c07386e46622122af64d200a773"],["categories/python环境问题/index.html","5b4ad529f7587ba4cd9ad3b5b07448a9"],["categories/tree联系/index.html","e01ceb43355d0c70b5363b3da68e7d98"],["categories/优化/index.html","8b48dab687efcc1be76029b78e1152fb"],["categories/动态规划/index.html","1968e852efd1df782966474580e76b38"],["categories/大数据/index.html","2e80765a6ef0c089bc61f2a9e4aa895f"],["categories/操作系统/index.html","bcb9951b15be9103afcc734057cb5330"],["categories/操作系统开发/index.html","35cc2ac10fa60f7de350fcd25798c6c2"],["categories/数据库/index.html","f11d54067a8737c82e27adc289dd9626"],["categories/数据结构/index.html","3121f7fa1923f87f052afcf9aa678e85"],["categories/爬虫实战应用/index.html","c3610cde9ffc2706d1a6215076f69bf6"],["categories/算法/index.html","7f55d5f7d2f896a5f3b309d125246951"],["categories/练习/index.html","98ce2c77975a8c39434b28c3048491aa"],["categories/编程语言开发/index.html","60456627c280c6f9623e4ca963f57f50"],["categories/网络实战总结/index.html","394ced58182cd58dd2007c99984a9073"],["categories/补漏/index.html","275792661f3dbb82645f9381942f28aa"],["categories/计算机网络/index.html","07cfeccb5f091dd457fbedff10b82365"],["categories/面试/index.html","b046e5f9d259cd4884877a3cb9a0c3e3"],["css/background.css","5bb9900d1bad9cb1e3fce454bc255d7f"],["css/index.css","6820a24dae33f2f98a11a1038eb0b48f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","50bc90520c686ea8500981de89985d49"],["img/bei1.jpg","60bfcaea92765d01bb04672083dac266"],["img/bei2.jpg","926a9ca3033eb9a0ed6aaf54ee66d4b3"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/qiao.jpg","e919f8fea62f9a9786ec9cf2ea72d1de"],["img/star.jpg","b0733874fc43bb9e495440990e0dfd27"],["index.html","857bd19054a6026f23eea3f27e42294b"],["js/main.js","4898030387012f8af71563ef8353433a"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","6bebed368a1bbcb630dd146cefb103b7"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","64d1e1837ad1a585888f5d1e16c71f77"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["js/utils.js","f91ea1a86a5c45e344a24fb437642f36"],["live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["messageboard/index.html","76e1784e17e1fb48143e8159645851b7"],["page/2/index.html","3649e666d2c47251aee2fbbed484fc06"],["page/3/index.html","64c4f0f42da323f9744d7c7abc12f7eb"],["page/4/index.html","0a92804a83724e59e44589161a445e95"],["page/5/index.html","423aa0ec916362d8ddb12803d0a29b58"],["page/6/index.html","8389962b9725a37384585aa663f6ef44"],["page/7/index.html","e39b9c68e90c2a390e7ca942baa5926f"],["posts/1/index.html","5bc72bf21391df1be7e74fd1d192c238"],["posts/10547/index.html","a4448dce115ebc8205658f80b8ac03d7"],["posts/14192/index.html","0c0cdc7695b9c321eeb727b8af0c5e00"],["posts/14686/index.html","3563d4f965564d98c6bbab493bcf0651"],["posts/15411/index.html","01b9ba7698d9d886f850f875c53522b5"],["posts/15731/index.html","e386a4b7aed7da6658666b163d10d7eb"],["posts/16097/index.html","5b820f74f17dbdabac7192bccf6f3b3e"],["posts/16107/index.html","39583e00b731d1eec8208f62768341bf"],["posts/16108/index.html","74e920fa31913b5365ed8c3297a286d2"],["posts/17385/index.html","02b9acdc0df868719c0cfbeaf73c2d0d"],["posts/19586/index.html","f54d1122f26b6b2a6c97a19cc543c631"],["posts/19628/index.html","6dc2f8843793b50e5f3b719dc82f38cb"],["posts/21322/index.html","f2d4c17da5ace634bee79b2122886aaa"],["posts/21795/index.html","07f95b5cb64e948629a41045dc9638c2"],["posts/21911/index.html","9e657e1d59f917125bc87113ff16f43e"],["posts/23469/index.html","34f45afa4f9b9208f87781bccddb5994"],["posts/23956/index.html","75bba2cf3a02190f30a6f80e226f1ca8"],["posts/24148/index.html","7dfa38638fac065d08670521fdaf53ae"],["posts/24340/index.html","bd490ba088df10d74bd90775204085ef"],["posts/24504/index.html","6ba1d2888123938c68699f48f6bd7fcd"],["posts/24772/index.html","e0c01e4b9c9fca5f3ede1c80b934bef0"],["posts/25345/index.html","eb201df4712a780bea8eec578bfe3a93"],["posts/26821/index.html","56b2dd196cd64eeddf923117b5a93cea"],["posts/28273/index.html","a276e6d37547ca2445d16c223692a7c5"],["posts/31131/index.html","f2ac30fef7df99500e6fcdb7b579a526"],["posts/32473/index.html","7861e5c5264a27b92f4e9f5bd6fdb888"],["posts/33531/index.html","c695c04905b5d16d21d63191acd4b810"],["posts/33723/index.html","700a6b6b64c3576335dcdfbe2693aedd"],["posts/34955/index.html","309c0ffd890471cfe182b611e8566564"],["posts/35949/index.html","0bdb83b06aedf59951ec96d22d163b7d"],["posts/36817/index.html","82ff9784954f999857ca523df5872f38"],["posts/37850/index.html","b5e2fcf13e3bbb29d0868087eef0e343"],["posts/39404/index.html","082397839350c4e819f42fdb28fdad0e"],["posts/39788/index.html","ea06d184495c6d8a99c2d251eb07858f"],["posts/40133/index.html","c5ff85735b68b4579111e4428dab5393"],["posts/40290/index.html","a8809a540f645ee63b1a6416e4411d5b"],["posts/40325/index.html","8c2d040a0fa2e164a19b4ee8f3afb733"],["posts/40917/index.html","d5c58bf14e05f74e96427cac9ed20ba7"],["posts/42182/index.html","9ece4afe12744265fd1cbca0116b1762"],["posts/43760/index.html","1aee21247900856b10a105d9598d590d"],["posts/43952/index.html","9d9168cc65b9e2da8dad477e29ba6995"],["posts/44296/index.html","580db2bcc6bc1fe9aa26cd1e4870a44f"],["posts/4515/index.html","82ac99170c6396e28c3345d92d19d836"],["posts/4524/index.html","dcd46b27503846dffb79a7ff0dc23a1d"],["posts/46373/index.html","5a0b97a353e0d3a0d2f4047396d2bad7"],["posts/47607/index.html","ab13bbd10e564ede0e199b51b6cbb686"],["posts/48539/index.html","3e1e8f3e7474c431b7eda4e091eece99"],["posts/49861/index.html","80f31ace7057ac7083d96cb3161fabd5"],["posts/49877/index.html","b295e89b034e69c71a13afa588faf9ae"],["posts/50097/index.html","eea656bd96c506c4fe29f470e6940738"],["posts/53699/index.html","57792f9dfb481da6c0e9ee8b16dfbe11"],["posts/53868/index.html","8642bd8f710334317fed0f0baf764432"],["posts/54839/index.html","2d53962a2137a249cd16d2cda3ac3dab"],["posts/55244/index.html","8336b2ce57366e078ede559bd972ffad"],["posts/56260/index.html","9aedffe9bbd282cdf876f06c1abbba51"],["posts/598/index.html","71d380544dc2af92de2e63b9891996d0"],["posts/59942/index.html","3d29535ad48781ffb1fb61ceab6ccbbf"],["posts/60133/index.html","440cc5ac1a9e105aa25388cbe7b29e81"],["posts/60234/index.html","43c64b36fa955e11e3b0fb13f88024f6"],["posts/62607/index.html","e0142c4e209362b74e7ebfb647c5b1f5"],["posts/63295/index.html","9123e13974222045a7bc7d371a7bbab0"],["posts/63613/index.html","7d82cc3007b3479946223de5e28f2b8b"],["posts/65250/index.html","d49842fa99ddb2607e3667d6f712d78d"],["posts/7734/index.html","9c90c8cb6f466321772c6f615062ea5d"],["posts/8091/index.html","9ef2abd1e31f402aff86abc1bcf1cc3b"],["tags/C/index.html","b6ac060083bf6ad58c4e95d7dca2b424"],["tags/Data-Sturctures/index.html","2339a736c5dfa2aea31978df786ee2b9"],["tags/STL库/index.html","ecadb621ce68907a9ef2db56f5d5009f"],["tags/acm专项练习/index.html","ff86a2408cafd3cf393f9e26b1d06a66"],["tags/apotheosis/index.html","394d7afd06501ecf5df41e4ab3a12e5c"],["tags/c-基础实战/index.html","ce1f30c7cab78bb94025e3e7784619a7"],["tags/c/index.html","ddff49f9fcdf5630a7144ccba6c7d955"],["tags/index-1.html","9c14bca752479f47f05531176e0f0d68"],["tags/index.html","1e3a43d437d11239319b5edb2fda8016"],["tags/leedcode/index.html","71a885aa8dc631c44edc312ba41c9588"],["tags/linux/index.html","f9144e4e717467b5d494d512ac9e71c4"],["tags/linxu/index.html","18318e1cfcdab877011adacb96ccf03a"],["tags/python/index.html","151f951bf376f1ee4cf0604abdd65812"],["tags/though/index.html","dd4fef139def5c70c294a2dc4110c11f"],["tags/tree练习/index.html","d623bd39b9930b48eb6be15547426b96"],["tags/动态规划/index.html","e21e94d012a3ffb2be8030417a745152"],["tags/大数据/index.html","bd29b798302bf9322a1d4285d32c3894"],["tags/字符串序列/index.html","e205c10b5b97a91d85a0de2a694167c5"],["tags/字符串系列-匹配算法合集/index.html","157ea5633ff719bc0cf087ad363ef3f3"],["tags/字符串系列/index.html","c605dfca1764149f48bfaf1b9d3bd87a"],["tags/操作系统/index.html","660d7462fba1a2752b3d54ba3b122806"],["tags/操作系统开发/index.html","efe52551e5a9d2a0d4b1f0430c169fd8"],["tags/数据库/index.html","46299dacad8b419f5d11c38b370adf3d"],["tags/数据库高级/index.html","49d868eb1ca4b57ab215928395fa3254"],["tags/数据结构/index.html","866bd239e64ae369f24f32ee22a318a0"],["tags/算法/index.html","c8b29fa710f456d9231fd318d0d35c1f"],["tags/练习/index.html","a3f7ae21a198ec12dc3c36e0b432bb2c"],["tags/编程语言开发/index.html","17dae986b366a90d8b9eba3823e74e3c"],["tags/补漏/index.html","888afc6bb06d800e9c3824459020db4b"],["tags/计算机网络/index.html","9e7e6732da8206d714c0efcf24ded748"],["tags/面试/index.html","404ef3614a37ef561ea184fb1a52c6c7"]];
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







