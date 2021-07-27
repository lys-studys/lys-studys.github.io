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

var precacheConfig = [["404.html","36678c255c10baa6dfe588762e43a6fb"],["archives/2020/09/index.html","724e32f1314536717490e882c937380e"],["archives/2020/10/index.html","61f5dcb7140a04fec6864cf218602497"],["archives/2020/10/page/2/index.html","13bbadfa6b66f9cf911e64df8a8c33e8"],["archives/2020/10/page/3/index.html","4935efffcfc14904e2556da7d5e3bccc"],["archives/2020/11/index.html","6e22bc0f2a10d4378ee40b1a91818694"],["archives/2020/11/page/2/index.html","9463d819383d76220b84055fc03898a8"],["archives/2020/12/index.html","045a6d122f483d1796700a073280331a"],["archives/2020/12/page/2/index.html","bba665e9ee6ddbaf1a500ed9eb9149df"],["archives/2020/index.html","5d18ab52e1485de7dc53c42cc5029dd1"],["archives/2020/page/2/index.html","6005c80de93be360a64a3dd538fbd62d"],["archives/2020/page/3/index.html","367c0f6bf3dc1479bb26379622ff7bf6"],["archives/2020/page/4/index.html","0f00e9be8c06173852a52b90ba8229c9"],["archives/2020/page/5/index.html","37dfd0f2c23d3c1cdceb2994eb98fcab"],["archives/2020/page/6/index.html","35d3630bc4df3bfb8280274ba8cbda6e"],["archives/2021/03/index.html","fab7c0629d44e09bb15413c5ab02f00b"],["archives/2021/04/index.html","2079626eeea5c12aecb8f99b24229980"],["archives/2021/05/index.html","b12dbdefcd3774f21084217df85cbb36"],["archives/2021/07/index.html","c5dd4455c66e2192e2544ad4fa094f78"],["archives/2021/index.html","b50f4d2677db35b6c43cd854c4e70b1f"],["archives/2021/page/2/index.html","2619f7e22a983f07694303676d50f33b"],["archives/index.html","e2ec61ece268fca4581121912d83446f"],["archives/page/2/index.html","dff80d7313eff2f0b2a01a1663acbf72"],["archives/page/3/index.html","262e98424ef15296361155109a1fe013"],["archives/page/4/index.html","3af4e6e870989434a265c90321870b95"],["archives/page/5/index.html","fa631f0c14ee4976991e67111602cee2"],["archives/page/6/index.html","51850d66ab5c987af8bd33b8397f915a"],["archives/page/7/index.html","4e156b93b4abf8c820fc95e730e6570e"],["archives/page/8/index.html","2996071ac4816090f70d1f5cb6c004b1"],["assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["categories/STL库/index.html","dc56575aad8d45251ba5066278651c5e"],["categories/c-c/index.html","dbc6b4e00b9d039cfed52b18cd2a41c3"],["categories/c-关键字/index.html","867277bad4769a8f791c4be8293eca32"],["categories/c-基础实战/index.html","c2f261938bf0626e06f98242c26935cb"],["categories/c/index.html","35dedc159eca605fb91ff17ac712190d"],["categories/index-1.html","b70822723ed92c3b47b9c15abec54518"],["categories/index.html","6dfe151238f43c7166d5df1c3bc30219"],["categories/leedcode-链表/index.html","2a434e407bac6530509cf1f4ec32deb7"],["categories/leedcode/index.html","1c23f813460fe9aadbf463913092fec6"],["categories/linux/index.html","7935c9e994c54146f0b46b2cb1c4e236"],["categories/python环境问题/index.html","ed7189e5f3b6d623012a6298959b4833"],["categories/tree联系/index.html","baff1cd993ad9ea3d3720ecd6c111344"],["categories/优化/index.html","853d2d3ef2f3e1ef98d8242fdd296ac1"],["categories/动态规划/index.html","e22090da3e2a676b84662e0aae5e34ea"],["categories/大数据/index.html","310315d60376822ccc4529f5a11ce9ac"],["categories/操作系统/index.html","ae55a1b429d14a868fa55f20fa23b0be"],["categories/操作系统开发/index.html","90a2f4db943b1f524acf007e3b348d4e"],["categories/数据库/index.html","dc7514c90c5d52418eb57ac963c5e464"],["categories/数据结构/index.html","527783442b9a84fcd25c4334626dd63a"],["categories/爬虫实战应用/index.html","884dd8482c38e553633ce69607b865a2"],["categories/算法/index.html","e88c39dc533430abbaaa961867afb034"],["categories/练习/index.html","f0dfd7b82235a907030b42ab54c2aa94"],["categories/编程语言开发/index.html","5635e009306ab2533b37ccd4450f7b89"],["categories/网络实战总结/index.html","997ef17331cb456caa4a29ea1c896ed6"],["categories/补漏/index.html","af419f4f40e95c6f4fe0ff1671804da4"],["categories/计算机网络/index.html","c92db5f33798d629ebd351ebfe8c4133"],["categories/随机数/index.html","a54e4bcd832f196fb6a29d9f95cd49da"],["categories/面试/index.html","719012d879534959379d32e798cad6ae"],["css/background.css","5bb9900d1bad9cb1e3fce454bc255d7f"],["css/index.css","6820a24dae33f2f98a11a1038eb0b48f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","50bc90520c686ea8500981de89985d49"],["img/bei1.jpg","60bfcaea92765d01bb04672083dac266"],["img/bei2.jpg","926a9ca3033eb9a0ed6aaf54ee66d4b3"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/qiao.jpg","e919f8fea62f9a9786ec9cf2ea72d1de"],["img/star.jpg","b0733874fc43bb9e495440990e0dfd27"],["index.html","d6cb10794fef6ec0319696ac3c36afa3"],["js/main.js","4898030387012f8af71563ef8353433a"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","6bebed368a1bbcb630dd146cefb103b7"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","64d1e1837ad1a585888f5d1e16c71f77"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["js/utils.js","f91ea1a86a5c45e344a24fb437642f36"],["live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["messageboard/index.html","08b85fc435f93fea840cf63a3d139250"],["page/2/index.html","38e75e651a467d5887b70ce4ed3fec91"],["page/3/index.html","b9d16ae25da95e4a7ee7d30bcbff6334"],["page/4/index.html","192268cb20efe4a86974ae1d3ff634e9"],["page/5/index.html","bc9c84de35f8a3c5bb95b8575e4a7c33"],["page/6/index.html","9eb7eeea96e0d5e4ca4c8bb1d8155ccb"],["page/7/index.html","30837c9702dccff7c54f001467d8c4fc"],["page/8/index.html","5260024c0bf5e3279b36ee31813a4fd9"],["posts/1/index.html","084db5dfe3510d445bc534775e2f7882"],["posts/10218/index.html","1429540c02204edc6e8460724d1ecb46"],["posts/10547/index.html","6a24de224ed145e021e5d33da107fb51"],["posts/14192/index.html","8df79d4ec7716bcd8d16fcb639805d55"],["posts/14686/index.html","67a42ad31afecca515e3764328ece05e"],["posts/15411/index.html","f787c4be9eb289e53199c2d001e081af"],["posts/15731/index.html","b1c92bebea925659f5368a5011ebb921"],["posts/16097/index.html","72df87723c78756b76433ee6fe3e15a9"],["posts/16107/index.html","018177169e14779eaa293188bfdbf6f6"],["posts/16108/index.html","3fead12c3e2268c4ae4dda769bf0017d"],["posts/17385/index.html","d0650122f65913b03904d9c52067273c"],["posts/19586/index.html","1f609cb92efdb9bed98dbb757e88424b"],["posts/19628/index.html","99ca95ee860745b7c0fe25e3c9d8e037"],["posts/21322/index.html","3aed6308152625f162aca06e3afec634"],["posts/21795/index.html","18d47dfabf98eb4ae574d9fc84a8a815"],["posts/21911/index.html","eb43914d028c4f13e46abcecb38b0dd9"],["posts/23469/index.html","8826ad0cc41f4fd02ef394d64f28cd0b"],["posts/23956/index.html","d725ed04a6daf0a25102bd0204d7a51e"],["posts/24148/index.html","7d6b445121e5bca5ad53911d8259c8d5"],["posts/24340/index.html","80515da5809d5487714d8ad8854c148e"],["posts/24504/index.html","25f2db7faacc964ed83a50a4a77173d9"],["posts/24772/index.html","9d5c1c7218416d38611f5cc5d9f402c1"],["posts/25345/index.html","46da54f2c769eb5320d93ddd730b66aa"],["posts/26821/index.html","e20efc94a26eab99f185648510f4e5b2"],["posts/28273/index.html","7adc8a153fe17fa13c9581de6e46d531"],["posts/31131/index.html","a75324eaad12ca7af5e6313a2e19cee0"],["posts/32473/index.html","2afd09d5fa0a7b26859be485a0eddbfe"],["posts/33531/index.html","ff8d8861179dfd1d9e4189f4989aebe2"],["posts/33723/index.html","79edbd3f9d2d29a0200492cc043c9ff2"],["posts/34955/index.html","ffe1dd912929f22f997659772d85384e"],["posts/35949/index.html","0f27065e54073acab977ac28c3de450e"],["posts/36817/index.html","b3ddb4daeda2595eb51c53b45aaf0e44"],["posts/37274/index.html","563acd0fd7dc847740d89e14da331d8b"],["posts/37850/index.html","66e740affa01cf957e536b775e2bfe0f"],["posts/39404/index.html","e5f141aa4a24dcda813bf8669cfcc79b"],["posts/39788/index.html","82c128f34354fb5edc1f16cf9e16c9a8"],["posts/40133/index.html","7604620dbcab72decbc0b82667c241ca"],["posts/40290/index.html","82b2dbb039a0cb0eb294c80b5fe1ce28"],["posts/40325/index.html","37036e406ba3cede68cee1bb8b09dea3"],["posts/40472/index.html","702d1e71bf94d2ed2bd3e59037b1d527"],["posts/40917/index.html","7ee0432d4c2656137b2767d06f100f91"],["posts/42182/index.html","2323a3f2e2f2eafe51baeb1df5b85150"],["posts/43760/index.html","4b88968b9fc1ecb407d72bf166026032"],["posts/43952/index.html","1c8ee271ed89e85b412c44eea5a49eb7"],["posts/44296/index.html","c7557458171a1aa29a5708ead9bc18bc"],["posts/4515/index.html","919cb3697de9c8c833d04080c9482620"],["posts/4524/index.html","9c34a1db3ac1def6963ff7d0fffb25c3"],["posts/46373/index.html","2b4193a78c9389bc538a3dfb3c287d18"],["posts/46413/index.html","41840f93665497ed73811d33e50f708f"],["posts/47217/index.html","91563f2c28afe0e682f3d6910bfab50b"],["posts/47384/index.html","3cd60d15c029c45d315b87a6d8fd3e7e"],["posts/47607/index.html","cbca1cd64ff85d3b999085bdf0d89441"],["posts/48539/index.html","c5575490197ab12f28a6c14ebcdcd09a"],["posts/49176/index.html","af379558601c488ce521d1f5ffa2f244"],["posts/49861/index.html","9c3b5c8721d2598c4a477ccc8c008bf4"],["posts/49877/index.html","e9fe84e48f8e78a3d9aa3be11e26abb6"],["posts/50097/index.html","6a4dd94a82b2426b17bc5ad0bdbcd7a7"],["posts/53699/index.html","123a04c09db3d10b33557f99ec977236"],["posts/53868/index.html","57439d9c3b881f01a0f7c767c65146f4"],["posts/54838/index.html","dfeb8a351da6570662c7c8fdd45fc01c"],["posts/54839/index.html","8bf2a63275056fa2a256f90cc151c325"],["posts/55244/index.html","ba663ef2896b650541d1b1d0684daeb7"],["posts/56260/index.html","caa4b1a01b49bc9bfa191334ee5bcfc6"],["posts/56673/index.html","207c9c027da61a689559ed0ac57185ea"],["posts/598/index.html","fee52d04f38fe349eaf2caf5431b1c01"],["posts/59942/index.html","cd7577d004584f77408362a749dd6a24"],["posts/60133/index.html","e2788e62d7f5daf7fd85cfd4f5d3b6ba"],["posts/60234/index.html","e8902d7e499878333c24fc9bec431332"],["posts/62516/index.html","d9b3679cf080304df8f57d55498e0149"],["posts/62607/index.html","cd5420683024adae4cb41e0e5c418b06"],["posts/63295/index.html","6c6caf1f1b5c394f2ed979cb0bdc3609"],["posts/63613/index.html","4a77b8301a440d0dec5c13447d072e05"],["posts/65250/index.html","a3521fca4bfd330cf8aa634bb312055e"],["posts/6688/index.html","88f40e2095e5db45c94da974524919e7"],["posts/7734/index.html","24a1775335e8182444d1be84b6723d7d"],["posts/8091/index.html","bfb960e693dd614393372f33a4e94a5e"],["tags/C/index.html","656b31278eff2c0300815a4d52208bab"],["tags/Data-Sturctures/index.html","8597358e41efe305e9d7ba36d4649ae7"],["tags/STL库/index.html","21a62cb53f975044000c614537226fb7"],["tags/acm专项练习/index.html","dc64dbed8df22836493f52327128fc96"],["tags/apotheosis/index.html","1e1ba49d9b5bc00e7eb5a58ba6d9e171"],["tags/c-c/index.html","d6606f4fb3dc5341526c6d70ce51a8b1"],["tags/c-基础实战/index.html","f63dfda40ae4430e7e5c587b545c927e"],["tags/c/index.html","44926ec4a2b26652e3e53effcfa95321"],["tags/index-1.html","4eb33b971646f09838a631aa68bb6b61"],["tags/index.html","bd7522c22577a7889a32917f69443278"],["tags/leedcode/index.html","7e9ba9a6a4e1fb942bfcb224a3595491"],["tags/linux/index.html","9c632eb42d7d447de28eaae87e5838aa"],["tags/linxu/index.html","a84e88755bd19891c659dd23e5841adb"],["tags/python/index.html","188b2dd90c0ec6e29984d74420f3e935"],["tags/though/index.html","44a2477f2451a76cb0a32b18b2e39ac9"],["tags/tree练习/index.html","1ec8c90c74681303e547e498e077791d"],["tags/动态规划/index.html","a960ad79ecaa323bd1a8725d373d9582"],["tags/大数据/index.html","051a21edde100e533436b2417081c9ca"],["tags/字符串序列/index.html","46e32a2ac6738a891db032e68c878371"],["tags/字符串系列-匹配算法合集/index.html","e52f30169b8d241d8069138ffd12ddd4"],["tags/字符串系列/index.html","e98f0df7cb201558e6ee16c6dd4957ec"],["tags/操作系统/index.html","510da6d80a4cf10a944a26557e8b1a3b"],["tags/操作系统开发/index.html","900cc578819fab0ea22e5929ad0066f8"],["tags/数据库/index.html","e7864ebba5d6b33891678d16b2392a47"],["tags/数据库高级/index.html","dc9f5b18f04d6ab7e41c7c0ab4b786c5"],["tags/数据结构/index.html","e56c35461940060ad8dbf48f2f6825a7"],["tags/算法/index.html","db5916748ab0c536f8849e81efee4fc3"],["tags/练习/index.html","6c4f79ce21837a57d017f97eaf775d97"],["tags/编程语言开发/index.html","05cb6a3832bc4830630623dd739a0514"],["tags/补漏/index.html","5ce8a3a65d80448937ba8265bb2a1e5c"],["tags/计算机网络/index.html","b231b8aad8dcdcec327509a50c6afc47"],["tags/随机数/index.html","fc49bb20d5c615d80670a62e02236a31"],["tags/面试/index.html","ccf49c606b0c1523522842c44cb2ff0b"]];
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







