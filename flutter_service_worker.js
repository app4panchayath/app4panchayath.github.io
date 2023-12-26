'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "aa1066d729fce2bb8798336cc1007bae",
".git/config": "174ed6a37b20075558d1784ec06d032f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f540c1d7efbc31c8c18a1c866321f668",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0a930dbc8f89b3a3cf5072204f45347a",
".git/logs/refs/heads/main": "222d7191993f1adb2efb06bba36c128b",
".git/logs/refs/remotes/origin/main": "c372e5b3e08ea5dcf89758ca4fc94b89",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/06/7949a3451a04d2cd7d0ce7218b5ad85b5c6ef6": "4ce0bdbf152579ca66c4760e14991c5f",
".git/objects/08/4a2cb6740df7214b6e96997820bf642bf7aaac": "277c966b80fbf6fbe3ea417902110414",
".git/objects/0d/6b8832ebd83c52fe47bda656421f18494ce539": "183bf30b37f1c442ee45f2dc982b4881",
".git/objects/22/d3abea3a51b3b01f99c47c4e386449915e20b1": "faf3a893ac5e7db6333e95e90549c90e",
".git/objects/23/c2e3aaa31e160505bc427651b25807cc69262f": "5e1796795627a27a7b17de737c271ab3",
".git/objects/27/8cece5e425cf775224ce1f5bada288b3f0b0a1": "cbd152075a095dc77bfd64abf4e8d562",
".git/objects/30/6dac5ed8d40c1a67b51105b2c459a386061bc3": "0a17491a92c8dee602194b7eabdb73a1",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/3b/4f9ed23892b5bd5949ade626d7abab41473fd7": "6e111960d56ca118aa9cc748712e7692",
".git/objects/3c/7ca527756bd781c2e477451932ddb28f426fc5": "d26b154912495b6168180bc44eef0621",
".git/objects/44/60b390c512c28bb9d3d5ae4014a0ab2ccb3457": "eba5f0daf57fc0f9dc94409092ead841",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/aecb603a69dfc4f6eb5da215408c68c0392bbe": "0f96e7e499f4d6dcdedb832bac7df4f7",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/4e/61b890e160a5b242ad8ecaf8bc98294d6e880f": "b2a497f2e1edf50ce734fd1e7f860ee2",
".git/objects/50/3d9217c85b0ea7b57a2c3911465b1d860ab2ef": "7fac1224be908f876fed8111fabcfa4b",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/65/099a8ed6ab7ed19638746d8a50ce55fc0b4b37": "3234e319667ad352299a5d6374c6a99b",
".git/objects/81/ea756ccc4f3d26dff5f5db83d4f7df401cf96b": "54508fc96783fc406f1ab77b8009e97b",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/84/e1deb36d880896cea4f45f14422ad5be1ad882": "75bae7b7839a96091cfbc2b807ed9911",
".git/objects/88/2f175356f63c1c46e39dd80099f256e08f8dee": "5f0ed6ada215eb3278d861cb5eda81de",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/8e/dc7b966018b310684099c2f75d48abb66c5e72": "fc3985aac830490ea397ca16194ea7be",
".git/objects/96/5f268e91b7f468ea4ded85a8f2abcddfe1f5a9": "6cde620475753acf951a3fbb6b42aca1",
".git/objects/a8/06bd6297a302b747ed81ca6a7a523dec578cf4": "83d007f7494c1a02f9fc3e7805793cd8",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/b1/6de74aba8cea6178b1597f12ce5873517258d4": "9066f63686b860da5ae45a3cbd2ef8fe",
".git/objects/b4/77b9463d28de8dcfc99ba36e8ef358b53b76e6": "e1113ff59311431dfe101b03d1ef6556",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d8/f23ea998e1043247b5b9514377c5afa1fe83a6": "55bce3f2c3f200aca06acd1aceb95e6b",
".git/objects/d9/f32df105b80ae4511c7ec6079dc523ebd5a99c": "3deba620ac2af7fb6bac2ab263445850",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e6/8c832a6ed934bacf46006058ff065b65d1acdb": "edd650c5ef131df7449ba0079aeee7e0",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/21720cfa8b48f16e9c3c2b05b558e3063e63a9": "d95fff85db647e4d51632a4591494f43",
".git/objects/f5/a3eadc91e5bfcccdc41a8585c4b2318ac4fe9c": "2cd9bc29d814e8421d66563c216dfd86",
".git/objects/fa/3264d0d147ed4cca4ef5400e4215b2bfb2d70f": "a6ee036ea1d47ae24b7fd804722993a0",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fe/74770784b5431ccd660337f2d9be7899bdc05d": "d2dd6db5bb0429fe6162d377fcae3115",
".git/objects/fe/924d298c1884e761dfc82ea5831faa940a174c": "fbfed430d1d40c52f9055fcfbe80981a",
".git/refs/heads/main": "1622f356552adca72cef0079d6010a40",
".git/refs/remotes/origin/main": "1622f356552adca72cef0079d6010a40",
"assets/AssetManifest.bin": "b693accc5bc4b6fed55a7e41484838b2",
"assets/AssetManifest.json": "9ded0af50db40d65e76acd4da3cbde6a",
"assets/assets/images/cloud.png": "e1dc4c8dad893ad929be548d8b34a61d",
"assets/assets/images/cloud1.png": "980188cc5d6095d674e50d1013167dfe",
"assets/assets/images/cloud3.png": "8c2aa211d66274457db5f324919077c1",
"assets/assets/images/cloud4.png": "ece56c1e5a72cb1fe84aefb37083192a",
"assets/assets/images/counter.png": "cb81c32281810721e6141eb86ac843d2",
"assets/assets/images/keralagirl.png": "9fffeff66d1a5f82ff0cbe021b8cec9c",
"assets/assets/images/keralaphone.png": "5b968e1e406b037b13bb88e26cf2028e",
"assets/assets/images/logo.png": "4e6f70377f40da4fad6a2b3b2afbc4f7",
"assets/assets/images/logo1.png": "80281ea0315c8d4c1c445d0eab5f5f8d",
"assets/assets/images/robo.png": "f2dc828b802a9bbd7a9e7e5c9cecec52",
"assets/assets/images/roboscreen2.png": "a403325a9b00ebba08514821ca015a7a",
"assets/assets/images/roboscreen4.png": "642d58bc5640cddf7d57d24af73318cb",
"assets/assets/sounds/1.mp3": "5b7b4904efa952839888475e50b11e8a",
"assets/assets/sounds/2.mp3": "44420d1c66bcadbf40cb34733e43f910",
"assets/assets/sounds/3.mp3": "0fc5529281804c8e8007a3ec72ea4571",
"assets/assets/sounds/sample-3s.mp3": "4f774d08f0c3e66594704d6be4a2d052",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "e970f4d42136f05d524fff7248aca17d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "417f37aefb70c387a4b20c0830f457b6",
"/": "417f37aefb70c387a4b20c0830f457b6",
"main.dart.js": "b5b9d8393233d40bcf14f472ec8ae3ee",
"manifest.json": "4611710c58d0e68455ed79abf630564c",
"version.json": "20fff80e282b4028791ec89731ad4d1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
