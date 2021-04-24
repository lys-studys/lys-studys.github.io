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

var precacheConfig = [["404.html","c132de73e29bb17154d1b1008b4669d8"],["archives/2020/09/index.html","e66df16e5ae904cbe9f3bac7bdafd588"],["archives/2020/10/index.html","952ddbdc37965f39d6dd6ed17e12d250"],["archives/2020/10/page/2/index.html","64600d356945f6fd69fa2830d5ce27d2"],["archives/2020/10/page/3/index.html","1f8446e308f32d722eb61441edbf7364"],["archives/2020/11/index.html","1729d635c9fecec133bf4100993c8fd9"],["archives/2020/11/page/2/index.html","d400c981db57c384e2d70a8114fce005"],["archives/2020/12/index.html","1feec576aa34930a42c4e94d0ebc1984"],["archives/2020/12/page/2/index.html","b99be49115481fccc3a548b07c6dbddd"],["archives/2020/index.html","27527974ce6a240b9f06e7bf1553858e"],["archives/2020/page/2/index.html","3a7bd240b09ccfcc084c1191db2d45a2"],["archives/2020/page/3/index.html","d6d0bb6fd3ca66b3e7575e09540f4bd7"],["archives/2020/page/4/index.html","b4469fe055e823976ce611970de314b5"],["archives/2020/page/5/index.html","ab30095cc3799eff834d85bd8ccf0454"],["archives/2020/page/6/index.html","bb0093d16b9548ebd0fb03a063cf3390"],["archives/2021/03/index.html","539e617e9998a10dbcfedc635eb9c310"],["archives/2021/04/index.html","3098f1ca98d2e5bd1a3e5cdf6871004e"],["archives/2021/index.html","762f19d46b6584635ae2bc89ce6d73a1"],["archives/index.html","86d921146844a21dea6ff05c4265d3c5"],["archives/page/2/index.html","85392769b8615d8709f3ccadc5ab995a"],["archives/page/3/index.html","08fcee0599c042a66f4dea8b55bbb4d6"],["archives/page/4/index.html","71e1cbc77c85823d0dae919ea1936355"],["archives/page/5/index.html","5cc9b7d0893ffc0ab0ef374e16196d45"],["archives/page/6/index.html","f979b7bf1e068010d61999634d3d4489"],["archives/page/7/index.html","931f6576f88e521bcb92d2309d8c1b77"],["assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["categories/STL库/index.html","4dca83dbe5195fd0948e97727a6e5435"],["categories/c-c/index.html","b99203d6f00635e42ed2fe6af571c723"],["categories/c-关键字/index.html","6823e6408609a56d81fd37d996fe81db"],["categories/c-基础实战/index.html","4c48ed89639d9e4a8b8ba31b134cc90b"],["categories/c/index.html","cb1b6a47e777dcfb48b95ec9ad30bc3c"],["categories/index-1.html","2054c5d196ac4fc2612edd53aa42afce"],["categories/index.html","5544554238935c68df8bf0a3d06fb17a"],["categories/leedcode-链表/index.html","db519e2a121b5f2a6c6ee1e7e704e27b"],["categories/leedcode/index.html","6d8ba7d4811621674c74607a10fad889"],["categories/linux/index.html","763e4ade3fdf8f110dce499a4450379b"],["categories/python环境问题/index.html","1b15f1354fe80a8f9848feaa5a6577f4"],["categories/tree联系/index.html","b020d59ad6722080b453d8eeb7cf6daf"],["categories/优化/index.html","a7e95cc7a76e100164722a8371b96215"],["categories/动态规划/index.html","0bae358dfb661bc1d8f9092caa95af75"],["categories/大数据/index.html","596a5f7817648ab63e2b758b3ba9ff78"],["categories/操作系统/index.html","baf019260e8d58f14d914975d38ebd16"],["categories/操作系统开发/index.html","38f4664aee0c4fde2375fadc7161be25"],["categories/数据库/index.html","625d83d711bb393c781fdcb23ed7a825"],["categories/数据结构/index.html","dd15f844923739f4b38785016a2c8e77"],["categories/爬虫实战应用/index.html","3a692b0a430cc9e52580cbbf85ae6634"],["categories/算法/index.html","12142f5eabb4dcd285a30613f3c919ad"],["categories/练习/index.html","96ddaa8463f5a51daf81c4501f390f0f"],["categories/编程语言开发/index.html","f5df7b0bf1ad96cdd542a66ea90f5e06"],["categories/网络实战总结/index.html","c7ccb15f11c209e17ae0bdf597eae152"],["categories/补漏/index.html","772266b7d8540234a366268ba0e7b2ad"],["categories/计算机网络/index.html","1787925319f8f0bb439648fd1a7f80ba"],["categories/随机数/index.html","9851531943b74410c0a62f3657e382e6"],["categories/面试/index.html","30744a7e03e8960e10008566eadade52"],["css/background.css","5bb9900d1bad9cb1e3fce454bc255d7f"],["css/index.css","6820a24dae33f2f98a11a1038eb0b48f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","50bc90520c686ea8500981de89985d49"],["img/bei1.jpg","60bfcaea92765d01bb04672083dac266"],["img/bei2.jpg","926a9ca3033eb9a0ed6aaf54ee66d4b3"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/qiao.jpg","e919f8fea62f9a9786ec9cf2ea72d1de"],["img/star.jpg","b0733874fc43bb9e495440990e0dfd27"],["index.html","fdfdfdb1ed9d3eb0191064653f58d4ae"],["js/main.js","4898030387012f8af71563ef8353433a"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","6bebed368a1bbcb630dd146cefb103b7"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","64d1e1837ad1a585888f5d1e16c71f77"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["js/utils.js","f91ea1a86a5c45e344a24fb437642f36"],["live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["messageboard/index.html","195bb3bf914d801c682ec5b8aa622433"],["page/2/index.html","c615932d68ada4b18c1f23c12d8da028"],["page/3/index.html","fe5d4436be48e5be69a4b9a9d96be004"],["page/4/index.html","d2579254e5948e1a6b0575c13c34930a"],["page/5/index.html","a8ea9f116739461c8801d03277947f85"],["page/6/index.html","112b263bca530fca1702aadc9e492cd3"],["page/7/index.html","1a3a50b987edffcee1df57654fda2217"],["posts/1/index.html","78627d928274575d4b6302614b7b1d29"],["posts/10547/index.html","cab07323ae1164b8c9b20eea321851b1"],["posts/14192/index.html","7da8613ee18f5f9e98b971a2d421d09e"],["posts/14686/index.html","e6ae0a1574fecd6d330481a3d55737c4"],["posts/15411/index.html","83b3978548f4f53547865af3d7102b8b"],["posts/15731/index.html","d330d855a2edb7878a5f6617ccd373a0"],["posts/16097/index.html","5927c7db9abf06264005e59ef30e8da6"],["posts/16107/index.html","e5e52475c0a6eae9b961b47503751264"],["posts/16108/index.html","849920d73fd72bf449fc7eebd983fed6"],["posts/17385/index.html","621f5b347f674c86c0aeba0a21377504"],["posts/19586/index.html","d1c52a0470280fd18c4d7fcde33aa093"],["posts/19628/index.html","a31aefc8a67971214e378501ef4deea9"],["posts/21322/index.html","8c85998f2f189e908d99cd36e5481349"],["posts/21795/index.html","1579b541b8d7fc73dd1dfaf2f06cfcc7"],["posts/21911/index.html","f48f2fbfd0cbf85451723d95cb59debc"],["posts/23469/index.html","1de17c4f63daad406d2e9f7b101dc60d"],["posts/23956/index.html","a26caac6021ff31b3c4f4677a3045ffa"],["posts/24148/index.html","2ad7914c96db4785605ff8d238f88b9f"],["posts/24340/index.html","60459a1de03951549f76c31d411ee45e"],["posts/24504/index.html","8443bd8ab17e37a8b6db437514d9f3b4"],["posts/24772/index.html","c38de60d40001ac3e3bbfd22fe66c8bd"],["posts/25345/index.html","4dda2f48570902d33ecf0f7f75dc7336"],["posts/26821/index.html","6ef0cedb094daf21ec2492d87e17b946"],["posts/28273/index.html","ee18e2e9d3b0ed7e44e0dd24db65b2e9"],["posts/31131/index.html","d87e4da893ac906c6f8314a73af56b4d"],["posts/32473/index.html","d98b29be27aebe96c8d13a872c894c0e"],["posts/33531/index.html","7cbbfe2ba0d0dae3478f4093261cd823"],["posts/33723/index.html","33b6220a12cfa3f00b11523d34f7b85b"],["posts/34955/index.html","f48db55c0349e0367121c00cd1bb79a0"],["posts/35949/index.html","dc8a1fd91b8b4943dec502bfa5614830"],["posts/36817/index.html","173c3b40564fed95619461244ca54865"],["posts/37274/index.html","04ae5638384222f45541cb359bd7602e"],["posts/37850/index.html","22fe7df9d61790982cac96f1f1a99c06"],["posts/39404/index.html","bfd9939fe416eea7c2b67d24ab6c4387"],["posts/39788/index.html","e1c3239822b12051225715b5fa1d433f"],["posts/40133/index.html","7633c172845dd734008e81150773a4be"],["posts/40290/index.html","531771e208bd2eb66669b9b0d652869f"],["posts/40325/index.html","8f04ca3808c19e2eafba9531453f419a"],["posts/40917/index.html","a16bdb2b62b020fc93543661f78763f8"],["posts/42182/index.html","04ef6774bab6e115f0e9979cbd5ff214"],["posts/43760/index.html","27b782001642831d15b2963a8bbc66c4"],["posts/43952/index.html","9e9890c100333a69b90505d5611bcd99"],["posts/44296/index.html","884d3d238d782850eb6750b264451c99"],["posts/4515/index.html","d71a594a177c2d7b74daf0ecdbfe4be7"],["posts/4524/index.html","5d1c0bb15de39fe664c3f322167158c9"],["posts/46373/index.html","b451de1c9528a0bdb6c8b8d148d95926"],["posts/47384/index.html","1d289d31f2585bbc9dee905cf095d796"],["posts/47607/index.html","09c25dd1666fb0ed1408b9a7ec953e4f"],["posts/48539/index.html","63e112f5584b33f04642adb77ede2bdf"],["posts/49861/index.html","fb64ffdafc77f9cc2d2263168a44bb96"],["posts/49877/index.html","546684f6c56321c5cfdcc50aad2a6d0c"],["posts/50097/index.html","b57f11cf0a1a74be93b24f8e6e123789"],["posts/53699/index.html","3c8cdedf2c67d2a5f552f1f786cb6fe9"],["posts/53868/index.html","25881ca2478db833dc40e61ccb91fb60"],["posts/54839/index.html","09aa26e402a0dc7d1004768d6dc21f86"],["posts/55244/index.html","e69a5e10d13e8b8c3ec8937c707e0d89"],["posts/56260/index.html","72fd1338cf7bc9bf0a415958447f3513"],["posts/598/index.html","2053cadf084a2081d3f948c671f44a13"],["posts/59942/index.html","c4ffa30633e8cc654b5ae1e81c0a6960"],["posts/60133/index.html","6d6e79a41e8226d261becaf5ee17feaf"],["posts/60234/index.html","16915c5c3740efb412a035a67b1007a7"],["posts/62607/index.html","dbc04e8dcd540dfc04505a1fc05950f4"],["posts/63295/index.html","d3aa010fafe02fe0d72e1949cec07b34"],["posts/63613/index.html","1d6703bf275b58b624c8d2e9f366e37b"],["posts/65250/index.html","367d23a33f742c69cd8119c5edae571b"],["posts/6688/index.html","1fc4a5a9059c7338d6884880c017130d"],["posts/7734/index.html","516df68e72cea42d7cc8789e724582fc"],["posts/8091/index.html","bec72645561ca3a00e1a5a3c14321384"],["tags/C/index.html","5cc4899ede316162ce208c666166f5c9"],["tags/Data-Sturctures/index.html","3eaf7a6e40ba55b1c5d1678ba62cd92b"],["tags/STL库/index.html","72ad491f37db4e98d33d80163dc48778"],["tags/acm专项练习/index.html","afee10f96c9ed5999b88edb05a6c42e1"],["tags/apotheosis/index.html","d94faec7233c2740fbdfd594f6c91a10"],["tags/c-c/index.html","838dbd0f6edc11b5d2131ee9f844f4cf"],["tags/c-基础实战/index.html","cd2988123641ec49a1e6e6fbe93649db"],["tags/c/index.html","ef297b34b4623fe525b7fbd461276aff"],["tags/index-1.html","5ccd0274028259a9a601c7cf915e7a56"],["tags/index.html","0940542a35765864c38994b0d435829b"],["tags/leedcode/index.html","396fd6ca2dac3d4c8fab8cfeec065431"],["tags/linux/index.html","473b49e324afe645ab8de90374932d11"],["tags/linxu/index.html","880c971ff97d8f8179a7fd73ffa05154"],["tags/python/index.html","bfd56b91990bddc063b6c9ce883df931"],["tags/though/index.html","626db753b7e25f2df0bc1732dbb2ff3c"],["tags/tree练习/index.html","6549eb2639e5bca330673082d091ab9c"],["tags/动态规划/index.html","bbdb84a69fff8465be09efa970dab8bf"],["tags/大数据/index.html","68b0f9cf94f4fa915a20a796fda06638"],["tags/字符串序列/index.html","895a61414fd2eefc67b7c3aa9fa45d28"],["tags/字符串系列-匹配算法合集/index.html","949ae2cf4215c69a50872c8b64d8846e"],["tags/字符串系列/index.html","5f0febecc2a1246cfd95d5fceef42c32"],["tags/操作系统/index.html","4c527016eb3eaf1cfa15d684539c2e24"],["tags/操作系统开发/index.html","78a2e22c3059c44424453d59931af54b"],["tags/数据库/index.html","c565fb129ab114abc432134478c90abf"],["tags/数据库高级/index.html","61ab466847c6b7bdbb36acb8a57b3625"],["tags/数据结构/index.html","bfee979c6c4b08fb61ddf0a73ce58fb7"],["tags/算法/index.html","6c18abcf3159f949cf21aa34513d32fb"],["tags/练习/index.html","471962627dff731a394ba26e9a3b2e2c"],["tags/编程语言开发/index.html","0a882e551cb8e5c9f1a78b2ae289fc1d"],["tags/补漏/index.html","b52716d60aaa5c3cb686531abca4e479"],["tags/计算机网络/index.html","220c964f807d770c02600ac7193fdb73"],["tags/随机数/index.html","b00588311a95fd48444051de8c858059"],["tags/面试/index.html","a84c577ba49a728f9fa250b287f48513"]];
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







