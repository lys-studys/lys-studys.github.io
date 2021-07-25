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

var precacheConfig = [["404.html","36abacc44dde2c8593732a292ef8f426"],["archives/2020/09/index.html","968c543a40a2a95a8927797d770360d8"],["archives/2020/10/index.html","980c73b39986444e64d5be7e89b871e6"],["archives/2020/10/page/2/index.html","4c0e63ccf9436a8566317bd4fb1295a9"],["archives/2020/10/page/3/index.html","caabc433e597774a3004021d2dde1712"],["archives/2020/11/index.html","6bf1dae06ab649117846a7894b3fa1cf"],["archives/2020/11/page/2/index.html","9769a2ae661bd6bc434217471e34d857"],["archives/2020/12/index.html","092570b27d31db8bd39e3e286b01e7bb"],["archives/2020/12/page/2/index.html","3d0de3a69e220772691f296a89d86889"],["archives/2020/index.html","96f145bfe63d4445c058b327715d8c09"],["archives/2020/page/2/index.html","7cad67fb145930467d61a2f1d67650b1"],["archives/2020/page/3/index.html","595cfcc5914c734fc919b99ec596bd68"],["archives/2020/page/4/index.html","d411fb9b6ead952e2c9d2bfc53f2f612"],["archives/2020/page/5/index.html","d640aab77362bbe4eaf979bc8637d615"],["archives/2020/page/6/index.html","0dfdc902d7e39de23968354bf6ab2c98"],["archives/2021/03/index.html","0b670ec965aab71f6609026987a7dec0"],["archives/2021/04/index.html","12db759fde5c3192d65b1cf26ae34f43"],["archives/2021/05/index.html","336bb6a09431340714b95d0e8a5bc79f"],["archives/2021/07/index.html","a79badba32463a465488b784796fbbc2"],["archives/2021/index.html","b3f89877c7e560ee268f3040e205bc0d"],["archives/2021/page/2/index.html","6a63dd78b74a8749130c1e15b3615949"],["archives/index.html","f9d8ec1d9693ad061f3512451ad9f9fb"],["archives/page/2/index.html","160d1f0eb85bb0fca4b3156bfe817843"],["archives/page/3/index.html","c0670d53d48cca3bd9dd1b1eec3ac7dd"],["archives/page/4/index.html","65b1a7fa34cd3efccbc9ec143165b4a3"],["archives/page/5/index.html","cc6f3e2e84df387ff83283600c3940e5"],["archives/page/6/index.html","7884a638d9f1c66e149dccc255b3fe4e"],["archives/page/7/index.html","5a0564aef64eb70b3b445d877fdbe31f"],["archives/page/8/index.html","bc43b2bca1170d2a2ca834a0bd855253"],["assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["categories/STL库/index.html","f821a7992bdfc4ff2c5a14bb1654f62d"],["categories/c-c/index.html","458ef11bf9795b7c2b8d0bb1437eefee"],["categories/c-关键字/index.html","768d1572d8ce62fe610163df11b3df82"],["categories/c-基础实战/index.html","bbee373236c830b6d2a368629c7839a5"],["categories/c/index.html","f38d71b1885109fa14b5a6d464fd9b80"],["categories/index-1.html","eda0be0faefc636a688456ec3d443ae9"],["categories/index.html","6cd86e4e3a8061999c5266f5deb5dfd5"],["categories/leedcode-链表/index.html","9fc9f019016a94b8642c4f1110a65b73"],["categories/leedcode/index.html","e3ae417e36825943fb5ee19fedd4028b"],["categories/linux/index.html","ce212363072c7b6e05a27d26a9895712"],["categories/python环境问题/index.html","a1bc7e3c81d69ebde352e2fb93327ada"],["categories/tree联系/index.html","1815901cd8f3e727a31de0624b0df24c"],["categories/优化/index.html","7b70054c11d0c2715523392709fe5cde"],["categories/动态规划/index.html","eeaee164fa9e3e3687c6c8479f13f43f"],["categories/大数据/index.html","a17346c60c24f64b647d4f17bff933be"],["categories/操作系统/index.html","528cc4eb137b202a26db248d7efa01fe"],["categories/操作系统开发/index.html","84f6eceef44a1383a2cfd434c8a29dc1"],["categories/数据库/index.html","785a03ded2a1b854fd07e12eb7a94fae"],["categories/数据结构/index.html","4d53078f17de5673125e897df322d733"],["categories/爬虫实战应用/index.html","5dab5623e2c676f4c3d9fe28996f2dac"],["categories/算法/index.html","50f3d24c6ee888480717e8125b2c87fc"],["categories/练习/index.html","199d59f1d600c9a1c1e16d5b3f40b9a6"],["categories/编程语言开发/index.html","e621b674a2a8168cc13ad5f0e2b39043"],["categories/网络实战总结/index.html","96cba6ce08433f3d2db69dce4f701199"],["categories/补漏/index.html","cd9a666c54fa92900fc01aab69c6693c"],["categories/计算机网络/index.html","fb025544017e50f03c03b69fed662f41"],["categories/随机数/index.html","8307a6baeaf602ff8558961fc8a9a509"],["categories/面试/index.html","2cbcdb4b16353440c9850632a3900c80"],["css/background.css","5bb9900d1bad9cb1e3fce454bc255d7f"],["css/index.css","6820a24dae33f2f98a11a1038eb0b48f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","50bc90520c686ea8500981de89985d49"],["img/bei1.jpg","60bfcaea92765d01bb04672083dac266"],["img/bei2.jpg","926a9ca3033eb9a0ed6aaf54ee66d4b3"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/qiao.jpg","e919f8fea62f9a9786ec9cf2ea72d1de"],["img/star.jpg","b0733874fc43bb9e495440990e0dfd27"],["index.html","802744c205888958f32528c5fdd08048"],["js/main.js","4898030387012f8af71563ef8353433a"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","6bebed368a1bbcb630dd146cefb103b7"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","64d1e1837ad1a585888f5d1e16c71f77"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["js/utils.js","f91ea1a86a5c45e344a24fb437642f36"],["live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["messageboard/index.html","a02359db36419b19fb9adebc8989661f"],["page/2/index.html","b8a8e9aad2c8fdd3d50bf6b7d8d6a1b1"],["page/3/index.html","0a97180c9b78269568b7cd70db8adb5e"],["page/4/index.html","852f80364256c21cbf7f48bc384dab19"],["page/5/index.html","5c3c89ce8c2275b03c757a88353630ec"],["page/6/index.html","9c707c86a8574c476d606905a2bab077"],["page/7/index.html","a01df452e09a4cdaffb5b93120ed2343"],["page/8/index.html","5384babc3dbd35c1af0c86d885fb1e03"],["posts/1/index.html","e724a9a0d6fc0ee4725776e8a41b4549"],["posts/10218/index.html","6937946eba4c9ea9260be514846bf8c9"],["posts/10547/index.html","0b792a9c03355d64f2c2b4f7937d993a"],["posts/14192/index.html","2020590e689d622053a6749749226bb5"],["posts/14686/index.html","8589fbb8f46974951adbf2c3c2909c1f"],["posts/15411/index.html","78c398f887c0ac09e7826437d39da67a"],["posts/15731/index.html","22e946e37a2ed5402b64d09142fc436b"],["posts/16097/index.html","9cfdb5e29a981cd9e945443697abf2c4"],["posts/16107/index.html","7dbe044a6917db9ed2af2c958ce67a7d"],["posts/16108/index.html","0573078666d730d5d032df4c444afa6f"],["posts/17385/index.html","6821db3f60d1e4923da90b800dbd1e31"],["posts/19586/index.html","8840614b708e5878df6f14540a66570a"],["posts/19628/index.html","b30922fb7e6d1bb304ccb76f0045866a"],["posts/21322/index.html","79a24a0527a46ba486903160f45ffcee"],["posts/21795/index.html","a690f220c224ee67820151aa3bd0a051"],["posts/21911/index.html","60f8bad09a594af7bca01d49367855e8"],["posts/23469/index.html","db3cae551b8074f2b214df47030faf36"],["posts/23956/index.html","98ecf833900031113cb61ca88be52d8c"],["posts/24148/index.html","2df7e78475c6c1d4e0fcee9c79f3a7d4"],["posts/24340/index.html","7890d98b9c144d1e24349b9894337f52"],["posts/24504/index.html","7fe6bb549c9b7896b6d52e7542612ed0"],["posts/24772/index.html","36748f861e080e10dd3f81195a5dd9ab"],["posts/25345/index.html","f7d8e7ee5157c0544b282f1cba178a2f"],["posts/26821/index.html","c1db9d279831a4d3851f1d1f1207c671"],["posts/28273/index.html","6aad6255ef1d34b53889c426e43e58d8"],["posts/31131/index.html","1b38258b3f6bda9c3212cba3f2f4c53c"],["posts/32473/index.html","3bf49bab5f35c634c83e3c712f2c7030"],["posts/33531/index.html","d0e82f71e411c3990f3067e338d00483"],["posts/33723/index.html","ce6e8f4becaaa5b2f43272dfdb2d4613"],["posts/34955/index.html","b2b5d56d11f7581f949dbba0867e0e47"],["posts/35949/index.html","99c13989477d9fd1c31f75220486c3e7"],["posts/36817/index.html","47613c6c7126e67fe8f790f9e8f5a2f1"],["posts/37274/index.html","bb7754dac75ed4788809edf94a394da0"],["posts/37850/index.html","d8787e357e912a598349e05f5dffb21f"],["posts/39404/index.html","b97874e77b9e05eddcd71f12e2f0f718"],["posts/39788/index.html","c08de2bebe4f6a8929d009ced6cc5329"],["posts/40133/index.html","e0ef58498249744624ff6c3cbe0993e4"],["posts/40290/index.html","5cf2a28f9433182421dddaae615e136c"],["posts/40325/index.html","9fb22e954b8393f680471c89677b9017"],["posts/40917/index.html","319350cd9ecc4e361391ae8f8987d811"],["posts/42182/index.html","a7aa377e7700bb9aa5f944803d9806ba"],["posts/43760/index.html","39633119a87d5dd9529d124527dcbfe5"],["posts/43952/index.html","dec4c02f50ca85fe265d25dff0fd61e2"],["posts/44296/index.html","267d87465d311af60df691755bc42131"],["posts/4515/index.html","e45727af1b585d25eeb46bd11b1fe049"],["posts/4524/index.html","b0238a630902fc49c0e6c46ff500a54b"],["posts/46373/index.html","cf416d70881bcb14b0ae8301a0238f57"],["posts/46413/index.html","c59a4f99fa051f1e58403ea476cd6db5"],["posts/47217/index.html","29aed96322777a54ecf6a0b8d46caf1f"],["posts/47384/index.html","b4ab16a41ab8131709ba4e9e9270b604"],["posts/47607/index.html","4dcec528fbf619d5159e33dd91bb9907"],["posts/48539/index.html","56957f3a8c22dd38d7fdd2a7795b5f33"],["posts/49176/index.html","8c2fc90285d28e62e00033a5bc2e664e"],["posts/49861/index.html","53c131516c3ffc72ae85dd310ff353f5"],["posts/49877/index.html","56d689a70988b81f493eb99472d72f62"],["posts/50097/index.html","f47f79a040129dc49dcb981dda02de38"],["posts/53699/index.html","e1e470ba959dc62331def18adda66dd8"],["posts/53868/index.html","a840b636a6eb65a856ddb091d2931624"],["posts/54838/index.html","ad929f8686ce76af8c644cbcfd1479a1"],["posts/54839/index.html","0efc5e3ffc08c7b5988e3edd36fc2167"],["posts/55244/index.html","9170a80724343518788f4c8287b8ec4d"],["posts/56260/index.html","520d931af4ce2bee96607f27797f3c2c"],["posts/56673/index.html","93e283edef2b5a472f43eabb7028592c"],["posts/598/index.html","78328f36765f161a2331e532244d85e4"],["posts/59942/index.html","66681a194d47cc7d55e7835a41b9b4ff"],["posts/60133/index.html","cecb3868254a8a0be22d4123aa614976"],["posts/60234/index.html","321b17550b35445baef0f02a29433afe"],["posts/62516/index.html","4e657601f0369da7bbf34eaf85971f50"],["posts/62607/index.html","1547ab1ff11dc17a442b9438a3d49740"],["posts/63295/index.html","d0f93df6190ef6ca1fa4c655b5fd6fbd"],["posts/63613/index.html","dd79be8ae704b004c10de7494459e85a"],["posts/65250/index.html","12a937a2c913e7a4d8a32025c65af46e"],["posts/6688/index.html","e6537d55a32e691ac398c58b243010e7"],["posts/7734/index.html","4f5ee331821f3a340038a5655f8d6f6f"],["posts/8091/index.html","ad573bc93d86d38d539b7ffb077458f8"],["tags/C/index.html","5a4f016a8824e59ce9998e109b3f4bde"],["tags/Data-Sturctures/index.html","89d47b0262e88711c1434e631543ba1a"],["tags/STL库/index.html","e3bb0fc02fcbbbb5cc8608651ecb3270"],["tags/acm专项练习/index.html","b2c5957dd5d43adea5db1dd2ca9b3ae9"],["tags/apotheosis/index.html","83a98a3c4c19beb3e7671555682843fa"],["tags/c-c/index.html","2c2ff46a409524de6d008ab047e51325"],["tags/c-基础实战/index.html","f5289b08a65910be3e39b341e923fa09"],["tags/c/index.html","7b4d4a35daaf834bd951cb3ff53ecb73"],["tags/index-1.html","45e11815eb4cd946e699e34a62677037"],["tags/index.html","27e537d7e62bdfedb2b68e30437a7ee2"],["tags/leedcode/index.html","0a815b0e760a11543816e06b170566a8"],["tags/linux/index.html","1214f57015722697e8c5c4f42e3bad23"],["tags/linxu/index.html","196dedfe2a9b773f3f91ef2adf0aff1f"],["tags/python/index.html","6501c77551960b3ed95b30fe178668ce"],["tags/though/index.html","4a95e5c16f644e63a4f4bb892d748c77"],["tags/tree练习/index.html","3870c25da9d5749b720cc7853524a02f"],["tags/动态规划/index.html","8ffcc5300f6bae4b1a323bbe7e1c9a01"],["tags/大数据/index.html","a86bc83fe385d2dcea63009ee4860bd2"],["tags/字符串序列/index.html","4f476f7189a9e6a65088a03477b1a85e"],["tags/字符串系列-匹配算法合集/index.html","51902d73ee1dbaf7d26f935509c52ac5"],["tags/字符串系列/index.html","254d2afbe26bdba12a003519611edb74"],["tags/操作系统/index.html","52b5aac293aaeaa2ac72a2c6dc83619a"],["tags/操作系统开发/index.html","39a9b2f81fab5ef5e7f777795c4ac7d4"],["tags/数据库/index.html","2121873c2c542c4921246b6e7d87ae5e"],["tags/数据库高级/index.html","d83c104aedbac14d2d891d60e9ad68ca"],["tags/数据结构/index.html","e488a7b5dea912d41c7043779e9738bd"],["tags/算法/index.html","e9ce94f43d14cc6954939be2ef3dfe2a"],["tags/练习/index.html","0c6269a3f2c2451991037712e54d9325"],["tags/编程语言开发/index.html","21d5d5b6fbce03cbd038531fed0a8d3f"],["tags/补漏/index.html","a3d5812e6b9335f05b9cad3889d4e293"],["tags/计算机网络/index.html","b97d9e6248c9631486490056551d3b57"],["tags/随机数/index.html","701fadcb24cbf525589573c19a8d54fb"],["tags/面试/index.html","f2f7a809c31eae2b17d58c989fc48704"]];
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







