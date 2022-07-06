'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "5b4ad29fc363578daaaa06d465baecec",
".git/config": "6ef4cd0f46b1aa721ffa0a522ccfd790",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "a4bb46aec60c3b83fddc8339681ade5c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "53f16e4f0916672bdf046bc6db5214fd",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "488ac27bd4f386451b07d0ffe412d694",
".git/logs/refs/heads/main": "488ac27bd4f386451b07d0ffe412d694",
".git/logs/refs/remotes/origin/HEAD": "729601abbbc0c90149c68a5bf1581eab",
".git/logs/refs/remotes/origin/main": "93238382557f95e52ca634707c88890e",
".git/objects/07/20b0bba55bee874c9b0f1c3845d7bd39300be2": "0363e314914b6270d6740cf194efddad",
".git/objects/0d/a3db46ab6bb59b6f55a2c1d18e3ca9991cf5dd": "1310e256ccd8029ba967c577bb8ef0e3",
".git/objects/10/2cb02304fb2af04928e3e7448ed91b866f4592": "c0d018282dbe570270c453b2705c5182",
".git/objects/22/fdb7e8cc859f21f53b6c576e6f5057665d82bd": "9b2e24ebf7e7c29290a23d3e0f7a0077",
".git/objects/2a/c7794f7268eeb5d8b3445c5bc252fb45aaaf12": "e671b5a051a4519f4e50aa11dbc9d58d",
".git/objects/2c/8ccac49f44d4f74ccbdcf1a7739d87fb70dd84": "2aecf80c17fbde8b0ebeb879c752bf99",
".git/objects/2d/047306574e15aa735e378ee63b5e97dfb58d52": "c5d885f656a1903a7fe4b9b9e5ae45a5",
".git/objects/2d/e4c839a1c6b089e5f53d9d46a24918b0d41776": "37e4157d8ef328e916d13c79e673350b",
".git/objects/30/92c1fb9b90497467b365ab66bed4f6901fbed4": "c6cc8fc0a8dbb40c6edef9d25b8d630a",
".git/objects/38/cd3edae087388b83c24b990f49978417e5e4a8": "05c078a15bb267e492e34e9eecd629b0",
".git/objects/3f/d850f60a82b71ceaeb66ed838747b089f00c28": "71ab2e58aca8162ccae57d58a32b9f72",
".git/objects/48/56e3a80d5c6f011a7c8a25056ab3e317cca5de": "deab83f7fcb0f07e74f7ad5703ddb330",
".git/objects/49/919b1ae0bcfc202e8c4783d1a17058ca40df6c": "a2952e924953fa20dd3c5ea8c977409d",
".git/objects/58/ba46e4cedf17e45c87d218b787fcff049bb6c3": "8ef6dab725ec545343cd146d46833712",
".git/objects/5a/1532265c7e645d73a2f6d0fec3001e681fd9dc": "a25f4bf686bad30eaf64b0a9852482b7",
".git/objects/5c/ff6f9be1b691a5b0145511600081d105dd8ed9": "f42d71e75aadd02e113ddeb05a2c858c",
".git/objects/60/01cdacff1a037e0be8bbcd8a8b330368a4a6c0": "df99134d6dae5b393d982103f265d159",
".git/objects/68/e091d79ac2ec540f8323c18b74e03866b4e1c5": "5b3f44567fd1a093e5253c2a54644569",
".git/objects/70/5418c542086c75e4c67b604f4a632e2852a3ad": "9c2366fe09f1321f2356daa76a954b17",
".git/objects/72/e6d0b65f350529d4cdf9472e2e38d31c2e4598": "b6fb4367e6f3d227e5243a3a3d6e20b4",
".git/objects/7a/9ce2ba7a5e645e2f445f0690634afb67707264": "fd877f41cc807a7bbc96134f0c770a80",
".git/objects/81/f1e34f26111ec8ad13ff1d66ae97bc4dccb34b": "75694c87e1b763b9a7238a3d86379458",
".git/objects/83/5581cfe9611e41599e7690037cb95e505a1446": "73f6c9e2448106e7bcd56fe8e5dbd525",
".git/objects/86/18f2bdb4d3a4e29e383eb2f7770d1e24a0f749": "b6081b7e8145076a30f725df2f9ed878",
".git/objects/8c/7c68b91049dbeb1da5d42cb13f584dbf3883e5": "553c4cc50ba2c985efdcbe9d9e96f353",
".git/objects/8f/f4642e6ff1538dc033a7a11845bda5f5c46f05": "32c5190c812ac12abb0d2cddd234152e",
".git/objects/96/32db2a6dd05f0699ab91ce36179dd69f6b4452": "5bae44be3b0b8519b481d3aa61c77ca2",
".git/objects/98/78c780ddf4ad2c3d3381c3ac3b6d7fbe3c32bc": "e34de82abaa82466553db452fd2b63df",
".git/objects/9a/1b066ae2aea1a0d4e1cf18dca370c3d10470a4": "9e83afb963db0a70240d6720fbf078ed",
".git/objects/9d/dcbe5bbb7291d92f279564998f4cf8026d302f": "b4f473674ff68bd9c85eb3cbc191211c",
".git/objects/9f/9d8e1e81ff0046b4b66dff27c456da002d1b45": "79030f166982201276e0db8967d5281b",
".git/objects/a0/9c691374799b2861ece93242abab28c323269a": "ee32f5fb3e001c7b158156be0a4504bd",
".git/objects/a1/010480f6736c57a954b69f0af979268fdcb094": "b205ad5c76590cd16b28e1f8d4e0ba3a",
".git/objects/a7/4556bb12b4dd1db89587cc7babb1c97595c787": "3fde786d1b50da1a79d8618abbe89b25",
".git/objects/a8/7748ec182f23534f0b46fbbe1087cccb427a49": "81a091ae442d4bcd4a165f04e5fb5775",
".git/objects/ab/9648968c4deb8a8db4b25c552a3fdb580fa6bc": "0dd001c81712b3141270f52e9c36817c",
".git/objects/b5/fbaea8a6a8a5c416aad49d1db8e70c4ab1de89": "a329d73cd5bca320c35f3f91d18be787",
".git/objects/b8/21088038494f179062fe6b7957422292f644cb": "7bc31d9380c3df9dba1020a937aaf181",
".git/objects/b9/882d8f2134dd8f28c7331609c9fde55b36cee7": "7464befce4f67319cdfaf4913f699f2e",
".git/objects/bb/3eb7101a1298ed4bc004c2b07d18d7e728eddb": "38ff2cc4176a3971a39eb4bbee1ebabc",
".git/objects/c0/e4d7a5652364223f126d41f31b689314ee69a8": "96a1348df730999fbc64b108210422ff",
".git/objects/c3/210f769ec869d789c734f0897567086f3b08a6": "400e6a26f326e3e3d24798ee66c39368",
".git/objects/c3/408aef75a66d191dbe107931b0cee490d0bd92": "c0142bf3920220e101ee9dd0c57b9d68",
".git/objects/cc/11e22c62df554eb438a44875026ec0afaad979": "1b58b318d9013d5c26133a42961cb51d",
".git/objects/cd/35b564745096801f1f6cee75a5660f060658ad": "0c583e1f1b455c8a37179dea52f2a1c7",
".git/objects/d3/eb3c19c88873654bb7cd4e745363b815b9f3cc": "fbbc3dd42c585e5b0e289b2a920b4d4a",
".git/objects/eb/eb9206eb12a47e408929e70ad7e29009c697bc": "ae6a584b43769d75e0a1411830532d5b",
".git/objects/ed/b91a6679e6a27a2c82ef43fe51b2887a0ba585": "ff0334d8e7c4edb5a5a5ff0088e747c3",
".git/objects/ef/afb658e66f96e0ecf189349ab446ea6fa2481f": "3b7232aafb6d73b5f701a93d05c9ce76",
".git/objects/f9/73f58bf76e5a7e0bffbd8e55c24567151ec847": "61a6f76ce8c1c0d87c95a209d3339d4c",
".git/objects/pack/pack-3c789b25e7b3bd6d7828b2767d8ee9aa7026ded7.idx": "46aaab3681cb9b062af635e2249b5b6a",
".git/objects/pack/pack-3c789b25e7b3bd6d7828b2767d8ee9aa7026ded7.pack": "17fda6c8a7b9d888371d19de2547e154",
".git/packed-refs": "433bc49448c9ab3746ec32c388bcc68c",
".git/refs/heads/main": "5d8cde7dbe9e89b7eebc5cc0b830b673",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "5d8cde7dbe9e89b7eebc5cc0b830b673",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "2d7236aca695ba4cd213a3478e55d740",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "cde21830bb1ca05768876b6bd45f927c",
"/": "cde21830bb1ca05768876b6bd45f927c",
"main.dart.js": "a602034847f7117cae32e05de33b20fe",
"manifest.json": "4f4054b334eb2dc5ca4c4b32ca7ce4cd",
"version.json": "671cc9f4dd13c344ce8d3f3d6a18b835"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
