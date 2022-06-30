'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "434ea130392bbe8298b5608a5a895c29",
".git/config": "6ef4cd0f46b1aa721ffa0a522ccfd790",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "b9200c4bb13d228e5bbfa499d04de4d0",
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
".git/index": "b96ae37661f3c55aa578ee117978a536",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7a377d1b8b82893e8c2799291f1525c5",
".git/logs/refs/heads/main": "7a377d1b8b82893e8c2799291f1525c5",
".git/logs/refs/remotes/origin/HEAD": "729601abbbc0c90149c68a5bf1581eab",
".git/logs/refs/remotes/origin/main": "4e5e806f7dee14151e015302e0b2cc84",
".git/objects/0d/a3db46ab6bb59b6f55a2c1d18e3ca9991cf5dd": "1310e256ccd8029ba967c577bb8ef0e3",
".git/objects/22/fdb7e8cc859f21f53b6c576e6f5057665d82bd": "9b2e24ebf7e7c29290a23d3e0f7a0077",
".git/objects/2a/c7794f7268eeb5d8b3445c5bc252fb45aaaf12": "e671b5a051a4519f4e50aa11dbc9d58d",
".git/objects/30/92c1fb9b90497467b365ab66bed4f6901fbed4": "c6cc8fc0a8dbb40c6edef9d25b8d630a",
".git/objects/38/cd3edae087388b83c24b990f49978417e5e4a8": "05c078a15bb267e492e34e9eecd629b0",
".git/objects/5c/ff6f9be1b691a5b0145511600081d105dd8ed9": "f42d71e75aadd02e113ddeb05a2c858c",
".git/objects/68/e091d79ac2ec540f8323c18b74e03866b4e1c5": "5b3f44567fd1a093e5253c2a54644569",
".git/objects/70/5418c542086c75e4c67b604f4a632e2852a3ad": "9c2366fe09f1321f2356daa76a954b17",
".git/objects/81/f1e34f26111ec8ad13ff1d66ae97bc4dccb34b": "75694c87e1b763b9a7238a3d86379458",
".git/objects/a7/4556bb12b4dd1db89587cc7babb1c97595c787": "3fde786d1b50da1a79d8618abbe89b25",
".git/objects/b8/21088038494f179062fe6b7957422292f644cb": "7bc31d9380c3df9dba1020a937aaf181",
".git/objects/d3/eb3c19c88873654bb7cd4e745363b815b9f3cc": "fbbc3dd42c585e5b0e289b2a920b4d4a",
".git/objects/eb/eb9206eb12a47e408929e70ad7e29009c697bc": "ae6a584b43769d75e0a1411830532d5b",
".git/objects/ed/b91a6679e6a27a2c82ef43fe51b2887a0ba585": "ff0334d8e7c4edb5a5a5ff0088e747c3",
".git/objects/ef/afb658e66f96e0ecf189349ab446ea6fa2481f": "3b7232aafb6d73b5f701a93d05c9ce76",
".git/objects/pack/pack-3c789b25e7b3bd6d7828b2767d8ee9aa7026ded7.idx": "46aaab3681cb9b062af635e2249b5b6a",
".git/objects/pack/pack-3c789b25e7b3bd6d7828b2767d8ee9aa7026ded7.pack": "17fda6c8a7b9d888371d19de2547e154",
".git/packed-refs": "433bc49448c9ab3746ec32c388bcc68c",
".git/refs/heads/main": "31209053520e561336cdb205f002c5bb",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "31209053520e561336cdb205f002c5bb",
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
"index.html": "4c9df86fc1ba66a1044a72ac2915d8c6",
"/": "4c9df86fc1ba66a1044a72ac2915d8c6",
"main.dart.js": "4527d910651ad5dc371bc629872691e6",
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
