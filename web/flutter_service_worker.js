'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "568b4671a9db81e565b1eb44664ef356",
".git/config": "ed424f1ab716050ea2fb433e3204af84",
".git/description": "a326aeeb18df758dfcc4dcf2669a0778",
".git/FETCH_HEAD": "abfd839a8e4119d3a47858706f29cf65",
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
".git/index": "cae3b019ebb096e590e4d866aff43b0a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d1fe9b25f75af8afe09f67439ca23b69",
".git/logs/refs/heads/main": "d1fe9b25f75af8afe09f67439ca23b69",
".git/logs/refs/remotes/origin/main": "4fe7dfc910aeb3b64c737dfb60e51e26",
".git/objects/01/0cb6005024f43fcb77b5e79645299120dad1d3": "499fb8e00466c41ffd06e88b34f49ce1",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/05/810786130bd42f5a7204a21e6fd7fa315f99ad": "5c2696a2fa27ebfc07312a9002a99a66",
".git/objects/06/952be745f9fa6fa75196e830d9578eb2ee631d": "cb6848767aab99a89a4ec04efbc00625",
".git/objects/07/aca848e863f91661c7efd7447a4019582a92e5": "9476783053aabad4bf6cc3bb92cf3a47",
".git/objects/08/10d300d448a3dd1c9792de55c01c3239eabfeb": "4a3eeb6fae5b7ad7a9191f527d332771",
".git/objects/09/d4391482be68e9e4a07fab769b5de337d16eb1": "a603712ac5534497bc4fd35ebd46b0b7",
".git/objects/0b/edcf2fd46788ae3a01a423467513ff59b5c120": "23a6b285e31cde5ab29a2fc1ebfdb935",
".git/objects/0c/bc596171b7ceecda17be81f51031b29280923d": "a21c154e26d5b4e60635a91d59df98a0",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/13/91da31dadadb05829e830c4b775c9a978a385d": "df96eaeeed43b5622a67dc84fcd5079c",
".git/objects/14/387af7b570df1aecdbf5f4369fa784939031b1": "2f8de34888d9e8ea4a36486e6c19e4e2",
".git/objects/14/8da3098986ea6c098d5a7b1f8e9cbf6b427b56": "9bfb32c54891d8b9226a37dddd010698",
".git/objects/14/951c6aa46b1e09e42c9199ea51b43a57550305": "eab079c83c3e10a1d6b3c11123f6ca3c",
".git/objects/16/0ad81a3c80361bdca6b0babb3c2a486be08c10": "c263afbb0bf01a253ca174a3202c99fc",
".git/objects/17/987b79bb8a35cc66c3c1fd44f5a5526c1b78be": "f47de426b1d6c272d2659c734c9de80f",
".git/objects/17/ba431125b4b5e7df0c768da15f4aded702e6b9": "69fd2fef6bd1c5ceb6767eee7600792a",
".git/objects/17/e9516a74074fad22bac3e52e39131886697622": "2cccf0b2cd7b787a1f969f9552b76de3",
".git/objects/18/d981003d68d0546c4804ac2ff47dd97c6e7921": "318597cf2655c5770342bae4ab7b90a3",
".git/objects/18/e551fbf896e57a80cd75dbffe514f4895e23e6": "7233723af0b7cd724c74325a39a8a550",
".git/objects/1b/b61573bc73a435b4b25249c436ddf8f15773ce": "dbba0dad1fac5f67269b0f48be2e359c",
".git/objects/1b/e37cf55c8aae95f158149f50110668ef2e80e9": "6a036e40227f3b2751e6b3786650c03f",
".git/objects/1d/526a16ed0f1cd0c2409d848bf489b93fefa3b2": "12bcdfd9683b55567627456d0773a4e5",
".git/objects/1e/13114e37196e76406b0cccf3c809d1b5100d4b": "41a48286ba9ee2ff837e146be22d1cd5",
".git/objects/20/fedee96960b98496430e4c9048df27f940ec9e": "fa1c04678d14892dc383ca7c2078597f",
".git/objects/21/38363de8ba18dc8acde92b839af2e3ccc780cb": "005abed8b44d2574be3ca19023845e50",
".git/objects/21/46ca09af4afc2079916c27561f18e2bac95c96": "a4307f33108d5ff0f25f61a292728848",
".git/objects/23/248418d819304baca0a96179b45a6d9cf2bfeb": "3446f37b0273d353b5eb62b9c06128f7",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/27/22837ec9181c3c1b2f1c1298870185c03ba354": "55274092f8c707defc529cc6940e63ee",
".git/objects/27/456655be7e58ce8b8241a478afd5c21973c8d5": "afbc1388468c8118ad0df81253878c67",
".git/objects/28/c6bf03016f6c994b70f38d1b7346e5831b531f": "859e347621927457ff896dba865a18fd",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/29/437b9c20d13d2a291b09c5d3f7120197207f78": "5061b898131c0b0d9732c57662c5bf62",
".git/objects/29/4c80320e5bc2e1ae60262ce80737ff707ef15f": "f0e502a16d6e5798fc552abb0caaffe8",
".git/objects/2c/92cca8e9357233cb46edee109214476537137b": "8c532a6149fc34204f1c42863faf3418",
".git/objects/2c/cbfd967d9697cd4b83225558af2911e9571c9b": "79f574379587d27e91d5ebf05ea6e777",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2e/1de87a7eb61e17463f7406106f6c413533cecf": "f4970286a19c04f87217910d26430ddf",
".git/objects/30/4732f8842013497e14bd02f67a55f2614fb8f7": "76eb293b5c9304707852ee681a90e8fc",
".git/objects/30/8a2a560b42f17aaf3c36e4e9c8cd07182fbb7e": "bc183808cfc617fa9474743616eb4aee",
".git/objects/31/532105cc7db22acf5d0da8f4ca637223ff6a2d": "472a18a75d66302702fdd923a62a6db0",
".git/objects/32/b27741eb06ac803a4f0be364d465ba05a14438": "42531077703f5dc22bc202ccf33a7147",
".git/objects/34/7139c48727d4f32a2b9bac862fb4793356cc63": "f12c4e44afc2ef65f4df0d401fdf25b5",
".git/objects/35/d7c7c12671f51740ad9cf4fa5b513efa524096": "e2f0b5656b742317a65a73aed422dc13",
".git/objects/36/b0fd9464f45b33f482e64bea579787e142affa": "9d308f3efbc512e2b01277fb7565acef",
".git/objects/36/cbce676bcfbddfa689b9d0abf23ac40fd2e60b": "8c963983d40f36e775abdac45c7810e0",
".git/objects/38/5b3c6daa33cbb607b67758966074124fa58a1e": "16b06fe31e68835fc5bf8989b9c6cd4d",
".git/objects/38/79d54755798567f0f318d63340508d5668eb96": "cfe50cd405acbf1c250baa58cfe6b9ed",
".git/objects/38/f1cde04ed1a10f8101bfc8d8cdb4958c744bf7": "5b5f6d497df74e63b37480ebbd51759d",
".git/objects/3a/f93b882364ddc13fefa4826038d2c851bf5ea1": "e87d124937e3bd3d761e6be5e6312868",
".git/objects/3b/750804e8f3b71d41f7a77c8d5d63e87c6232d3": "f34958df54e7b9187fdd2309fab2c784",
".git/objects/3c/4935a7ca84f0976aca34b7f2895d65fb94d1ea": "01324322ad01b89aeafe468a8c74ef47",
".git/objects/3d/70e7525c7f5291b99f3bbe2d13d0354c817c6e": "61ec1d22d87ac472cd555da924a0417d",
".git/objects/3d/f3d1a91dec9f419bbf32c7dbd7ffe3049577b7": "2da7aed2720fec500109845fe6130ee3",
".git/objects/42/bcbf4780b187e80025b7917058bcb882012aa1": "d13c60a94845ee93e5124ec90980bb48",
".git/objects/44/e62bcf06ae649ea809590f8a861059886502e8": "2e42f843c31c0484de7ce7a7c79cd856",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/b726bd53d47e61ba941eb355b9c8633ebbaa20": "480b1cf7af4c452e5722818c06aca052",
".git/objects/47/89daa6a443eefa7f3f729164a18351e06e9800": "3c2dcd6a17cdfc0957293d41ef712d24",
".git/objects/48/1c0b046cf1ebce88e97d8c478ec6565f8c8a61": "e3c8a427910960b43c9be2b6f330cd31",
".git/objects/48/3be61389733f2e5331c08db8ca245268610ccb": "3c60e0b33a453cfe5a9fd75c2a8881f0",
".git/objects/48/c6a02023f084b66c3a905a46b9c09c8a4e0aad": "25dfeeacfdfa6cfecdb2a2fb4f3599e1",
".git/objects/4a/d9e1d977062ec02565cab15ea59ff692749fa6": "567dd5e20c22f1f59a8a4c1be6692e11",
".git/objects/4b/df38b37a23e9e44aadaefbcd8be9c17a9e1635": "01bb7ad06cd746b02c225f755c1d6507",
".git/objects/4c/de12118dda48d71e01fcb589a74d069c5d7cb5": "28e8a446706511f1a67da714824896ea",
".git/objects/4d/6372eebdb28e45604e46eeda8dd24651419bc0": "1a6a714da9180a4b75ff188c6eb0514f",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/52/47f87c602e4d72c60fd15632d1fad8d75b56d6": "b106c8acc6433ffce007db8c6af8701d",
".git/objects/55/c2813d8a093d2e34eecdfdecf2deaccb6765a7": "4ffaa5dcae8f384ef261ed1def831610",
".git/objects/57/dd3357df87993165db68f4f3c7b9482ade0b79": "da9a0083b7e6881efba952b8d7af419b",
".git/objects/59/2ceee85b89bd111b779db6116b130509ab6d4b": "348329ef452b809389b6496387db6913",
".git/objects/5a/88276a7b36980d2efa2689a410aebb67aa65b8": "3f57df6a0c0d74a105194c1575657bd0",
".git/objects/60/32929433024e46fb71a6fa1622e39f1abd8f99": "f84268c29c45e209cd385ec515f97184",
".git/objects/61/b6c4de17c96863d24279f06b85e01b6ebbdb34": "5486bd6a506a32f8c081890c2befb8eb",
".git/objects/66/a65d1e4a79f230031ec0e0959a721039e7282f": "2a87e723b46c44522c16c0968efa0152",
".git/objects/67/b7cc4492917ec85be83d1f1e322751feb04ba1": "4efa0ce871ed9a33aa04dfa0c3bf309a",
".git/objects/69/0dbba97f29a0d912cb5f24e1591c2883d489da": "efe79b3600ee5ddf8649e80f229a4f5a",
".git/objects/6a/84f41e14e27f4b11f16f9ee39279ac98f8d5ac": "a913aaf750cc736879f14f53488f5c42",
".git/objects/6c/8e736c9131cbed40246aad6c478f4be38fbd3f": "f2b1e79be5b3a72ec8b64640a7d3e089",
".git/objects/6d/a0652f05f28fc6950cec20ebdfbae89b665479": "fccd5f0f0fbfe5ead1a5622148fb8d74",
".git/objects/6e/ae1fad87431bf24daca1696c136809085edca9": "89c8e2a2fce7ab727ffee03bb704ed0c",
".git/objects/6f/568019d3c69d4966bb5a0f759980a1472afc1e": "11711ec452167a523e427fab835abd15",
".git/objects/6f/9509c88bed7080d496fc5e1d87a9315e30549d": "c02716d7aaed30ce1c5697a2fb40d317",
".git/objects/70/693e4a8c128fc4350b157416374ca599ac8c7b": "6942d9ddf2906a8e847e7ef6889a4221",
".git/objects/70/b5da685f1f9f3c95ed5dfcd25f9203be6fa824": "741d2ff1d803d6e8c84f52e40e117f60",
".git/objects/72/271d5e41701cfbffad74d38640bf9cc7c1f7be": "e07153a480d4e159b70f80851f6a553d",
".git/objects/72/aaa963bebbcfc1b5f2c28e16903a9b40af3203": "ea14e66980590824714f2b1c87173342",
".git/objects/72/fd0d977e34a4a64719830f229b46355e126ee0": "4b94972b86ebd728f2e6bf2a05858a84",
".git/objects/73/26026560c256c61c1bee5257fdb19c3faa635c": "7fcad1ee8819f611d8da9b6775c1a8ce",
".git/objects/74/6adbb6b9e14b7e685c91e280a4d37a672afbd8": "eba295c22165b01ec06a735e4dbb3a44",
".git/objects/75/b2d164a5a98e212cca15ea7bf2ab5de5108680": "d453ef5dc75a6b2e158c081f7a51acac",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/76/e1789b06850f063df87b763f25be27996e1488": "c89d99a85cd4a01ccd99d8ccd5d82e85",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/7f9873ad7dceb4dc17087fb06c800fa0191376": "91f6523d91623d19d122fea7b32a3db9",
".git/objects/7e/794845a0daea20f7af128ff6e9fb8168bcbe6a": "82c7b7fcb52ed5d1999e7f54345ba7d3",
".git/objects/80/dd6848309958801f535eb1fdd3069e37929959": "273e930701b67a4e962d9880203f0801",
".git/objects/80/e867a4e06b4dc26d0a2b327cbd54041addc50a": "a256672b7db051545b2b39eb821c1510",
".git/objects/83/1f6ed0dc15a183cfeff5952e5af9ae8a84d16b": "0acef6fe93ccdd8ee4caca2c7d572bd4",
".git/objects/83/ae220041c7e6dd896a3640a823a200214e07ba": "eeafe1bc209a9fd19e1cbcb038f1e1bc",
".git/objects/84/d08f7b151f10507b1d8c24043ab1d088f4c0aa": "a6fbdf88da12c6ac558a3a6de7fc2c33",
".git/objects/85/2fa1a4728ae4789e3bca55dd07caef3b41f2a5": "97bf964ac33d3f622d940921761e740c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/3935a7ca622724ef165b75f1e7ed7f97340f51": "63d79820d57a305696b9ecb8f0ff4ce2",
".git/objects/89/c2725b70f1882be97f5214fafe22d27a0ec01e": "99b17ebd650decc04c5de3b0893b27f7",
".git/objects/8a/31fe2dd3f91d79cab6e0390356bb3c1a355f94": "1e8980b15fef5fff779c016d693b676f",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/f96a2c8ade099adb3fca57791d512ff901fc4a": "d25ee2521973bcf7a4fc7ba6e7142677",
".git/objects/8b/6d4680af388f28db8742ef7fb8246e2bb1fffb": "4e20d4660135ff8d41852fa5b986bfb5",
".git/objects/8b/d06bdf095c809f80d639847440b06b0199a88c": "58d6dcf8e95c016f9f2dd6468f1fcdf1",
".git/objects/8d/4492f977adc7dd7a836405d4916e5c9c014536": "17812516aa18e24296a565b4fbad60b5",
".git/objects/8e/6eba6f7bc4d571cade82cf8676bd70f624cff8": "65ea465b1d7cc19c4747a98af9c6fa60",
".git/objects/91/9434a6254f0e9651f402737811be6634a03e9c": "6da5342c04a33ac2131fdae2e4a84892",
".git/objects/93/0d2071a324ee6050cccd87a14495557b63416f": "27184823c9e5055a30e98ccf70968672",
".git/objects/94/adc3a3f97aa8ae37ba567d080f94f95ee8f9b7": "daee15d8fbbf348420b6eaf3d86cbf40",
".git/objects/97/467fe852272a4146f76f9088a77feecd1140ab": "799d6b3817e911cfbcc6bc61d56d01ec",
".git/objects/97/4f79653e8fd76b68b3a9fb5c62d18585ac464b": "e2fb271b95476eee2e1f1417028ff0e5",
".git/objects/9b/893b15fa46653c49db2b38fb535430c23324cf": "dce1db2fe46cf4d2eacc5613c91a5b47",
".git/objects/9b/bb12e9812aa3daf3e0671bf16a1ac6e4389510": "ae36b5e8dac3ca8ea76d39228985fd11",
".git/objects/9c/0a652864769b250ed58097f2f6270b393f751f": "ebdd05c5efb75057c0fd760fedc46e97",
".git/objects/9d/a19eacad3b03bb08bbddbbf4ac48dd78b3d838": "1176aaa6ff7a19c56cf9a6ea692a2c03",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/ec33f19f110ebff51a23342d7bc29ec9a1aaa6": "48569d95657b1f4b8fad6b6e730d4334",
".git/objects/a3/7e46d9bf758841e547031aa0d8c35af65fb963": "927c54ffab2f741d0a5402d57a0bf425",
".git/objects/a4/aa70759bbbfdac9dcf451d0bc71ea23ebab577": "c2fd2918a30e11e76b91b34702aa8e44",
".git/objects/a5/74fb9e3907608e950927d928b60aed4a83795a": "7523ce0bb7bc23ef4659f02814cc43df",
".git/objects/a6/19843f55e60c2fc168fe9f0afc867c44799a04": "62cce156a87ced41bad31aa355bf32df",
".git/objects/a6/368af0ee7628fa194ef8fe3bbe4523113d6e05": "bafb07bb0e67f8a015ad7c670f7072fd",
".git/objects/a6/d6b8609df07bf62e5100a53a01510388bd2b22": "821831c6c42de47994c16f6a1db3ea7e",
".git/objects/a8/77d3d67fac199a8c8bbda551f4b2a6235bd397": "704ccb3df0fdfdb5c357d68eb08575e5",
".git/objects/a8/e64fdfeb26c1371bc1169043e31175cea36ef3": "ee36831733b04277c6a77d9ebfa7d16c",
".git/objects/a8/e938c083971baaa22638db9180d260f9deb325": "41bb8dcc3dde30fddc5799c17f97a0d0",
".git/objects/a9/d13370549e77b84b641e0c9704fa7dda1f9c89": "6bb845f5831bc466308e3705f7682140",
".git/objects/aa/c20b6f091d97dc349bc2ba8a323614c57e58ca": "08a6aaf69fbf8ed1918a58d9a90dacd7",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/6cf4c7362699a9a70e58474cc4e6c791904a50": "d9b47a452c5d39db963317f19a0294b0",
".git/objects/ae/f61819910334c460cba55cf5c1f9cfdcd324fe": "dd81a55ab6a1d657975be602e9ae3824",
".git/objects/b3/606f9e3705a95b25d6800527856ccb9496870a": "661c850f16b69d62ab6a22c98597496e",
".git/objects/b4/3b9095ea3aad8608fdf224e29a9c79e212176a": "04c1371eb0c64c024da4c476015d21a6",
".git/objects/b4/44a06c64117efeb0f5f843869fcd08e49ac58f": "d12a3eca76381ceaa6e66eb7bd2edd69",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3c4c30c16703f640bc38523e56204ade09399e": "d81d171c0590dfeb78e8d6c404330bb1",
".git/objects/b9/e550fba8e174f0d4834672b03f15d4e6bfefeb": "6f38e28ae02b6dbb5f2deaf83022e7a2",
".git/objects/ba/a7124c199ebeab3077eb9ab852f4c8826c93e6": "96d071ed180bc03164c6b7b97776ab10",
".git/objects/ba/f3d77f76706dbc82162dd6bc9a1365ac5be830": "3fdbb77ecc95ce55cfcedebbe781f150",
".git/objects/bc/4ea27106d33809b0b6a455645b486c3877f977": "58736a1043864aa63bba512968235813",
".git/objects/bc/bf36df2f2aaaa0a63c7dabc94e600184229d0d": "931b433e7f07a4ec995eac1c79790f4f",
".git/objects/bc/cf233bf54f41b4c5897c120e904fe6d81674dc": "e03992c7e839433123eb7c0fb3ac37cb",
".git/objects/be/48241f776ce1d128b37d901597b54e8aadb1d6": "7b3ffd33587181c0635f3aec7e1c1d64",
".git/objects/c0/4e20caf6370ebb9253ad831cc31de4a9c965f6": "5e216dece9f226a4ac045363fbbe142a",
".git/objects/c1/0f08dc7da60c948c794965285a3fc9a649c9f2": "6fd72351b652066c9b746391906d9bfe",
".git/objects/c2/e87c65b791428ae6568057f4b99b8eb8ede433": "03341a9a4d47010ac1994446e2825cb7",
".git/objects/c2/efd0b608ba84712fb3e1d01122468a50c7fba1": "5841aa09610800cbb88a643fdc9ede63",
".git/objects/c3/f25f0c82946c7009834ee910f2e6251b654b61": "33dd72842ee52f8cf6ebd2826015adbb",
".git/objects/c4/3cc9b8ba4e4ae5c6df5ed5e3f199668b7fead0": "e70044978ca80324fbe375a7e1547ad3",
".git/objects/c4/df70d39da7941ef3f6dcb7f06a192d8dcb308d": "d394f8200d968d57839b22cbe657146e",
".git/objects/c6/8e5142830ef2037c65e6355fd369e9ca3a3bfc": "554790acf139d564ce0e1081067193c0",
".git/objects/c7/94c6350f07e831004b4db8f7a414051d401024": "a65359ed4ad3bc31e37502fc0ad0d224",
".git/objects/c7/cff5727ab8741303f14f277703de1fc479238c": "50cd7bd4f7ed83fd04e0dabdf3b598ad",
".git/objects/c8/7d15a335208541da7c11961b0f6d5f6035512e": "a6105aabe7a3384131da4bf043c5878b",
".git/objects/c8/f9ed8f5cee1c98386d13b17e89f719e83555b2": "0fc2e076b543f37f90a9e7159555320c",
".git/objects/c9/4205a8859c32b090f9d02ca41fa07a4796a68e": "37068b4141cc3b7c1734ded36cd2d9db",
".git/objects/c9/77c4a42589b03a022ea58b0a45322dd9d9a72c": "78598d7c268a9d2cc7cbed8179e7b88e",
".git/objects/cb/1ef88056edd1caf99a935e434e7ff6943a0ef6": "06da19129aec844c2a975f2175eb659b",
".git/objects/cc/5527d781a7b51cdc31190ed24c645cc8f3af52": "58041b2e321e98526d7ffa980f4da722",
".git/objects/cc/b76ea0f4bf328c5cfb9745914b22a40a75d606": "eb15b91911cda3db1cdcbc50ab77dc0e",
".git/objects/cc/cf817a52206e8a8eef501faed292993ff21a31": "1b4dd6ab7f4ca9073eac414dd6794fd6",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d0/e1f58536026aebc4f1f70e481f6993c9ff088d": "18109e32e7fc3bf04e529c14b8723746",
".git/objects/d0/ef06e7edb86cdfe0d15b4b0d98334a86163658": "4d865184682ad08c3405e3934cd91fa9",
".git/objects/d2/13b24ffd605481d7d34d65ed76ff9e1477c5bf": "4e16be3c1270e89d253258b5db763048",
".git/objects/d3/6b1fab2d9dea668a4f83df94d525897d9e68dd": "f19c13a91df6187b27767a0c81787173",
".git/objects/d3/896c98444fbe7288d434169a28c532258a4466": "65bd2275cf87203cd8cbaa19e4cce2fc",
".git/objects/d3/b9e0aafa70e7b518de6d7f36503def555e3867": "c4acea7ad0add3f7670f8bff8463c738",
".git/objects/d4/92d0d98c8fdc9f93ad2543bb4f531803e9df72": "e3677ae8914304b8340d8db27e7db71a",
".git/objects/d5/3ef6437726b9d1558eda97582804175c0010a2": "764cc945f02614c5bb082a403a0c55e0",
".git/objects/d5/bd01648a96d50136b2a97c8bb9aa5b711f6c39": "b52bbb3aa77140bdf2d47814158cba7d",
".git/objects/d5/c7dc3c5ff53da570616b8c286ecfe9bf678bde": "06ee865f303b3741e309aa12fedfc10e",
".git/objects/d5/f1c8d34e7a88e3f88bea192c3a370d44689c3c": "2e5a4148dc9ebc15b186574d9fb60432",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/61c53178cc135119f252e047fb2f6e08512ed0": "54c64d1a96d272170806761ec67134b6",
".git/objects/d7/673b882589f7e39d779a371b424d99969f6362": "0d0928b6bf1af2869b496834eb4ef053",
".git/objects/db/77bb4b7b0906d62b1847e87f15cdcacf6a4f29": "a2e10fc9c4f60ac00e2b9b1ed3a0b5ac",
".git/objects/db/a8be371d872d434cf7b7821e96e2bb9f7bd927": "a1f9839d480a0e02b4dd87986e57bc7f",
".git/objects/dc/139d85a93101cc0f6e9db03a3e1a9f68e8dd7e": "c815b8cd55031858470b95979194ad21",
".git/objects/dc/402d21cbb34e9e45f6d127f14296c099f96b86": "12886a0f6b81b845b94ffe8e5b1e82c5",
".git/objects/dc/6d9cd259a7507cc40c56d5c979eadaabfdbdab": "94cac281a5f480d69230c8cf2132cdbd",
".git/objects/dc/9ada4725e9b0ddb1deab583e5b5102493aa332": "e8022082c258e4c83e27519f77484618",
".git/objects/dc/dc2306c28505ebc0b6c3a359c4d252bf626b9f": "e712bf13b0d526e57c6ee1c8acc412d4",
".git/objects/dd/db8a30c851e7ef5b16a9108934bd1217b6b43f": "e943b985c0fbc94ad354f2ada89b854d",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
".git/objects/df/f4f49561c816f70eaea557d889d31cf63447ac": "fccf1f0ce075ef8d3a1ae932cbc31552",
".git/objects/e0/d16fe56d6f12c217719dc2cd75545f44bfc973": "a45752aa781f95b86fe59cbf6f08ee9c",
".git/objects/e0/f0a47bc08f30b550b47b01de4c9206b6824dd9": "5ef61d56b6220833037adc3dc3871ecb",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/1a16d23d05881b554326e645083799ab9bfc5e": "35049fca5b8153e0c0cd520b5503c269",
".git/objects/e7/1a726136a47ed24125c7efc79d68a4a01961b4": "80db442fabe042294a3d9008f975ed57",
".git/objects/e7/c5c54370372a4cdde7288a32733998d87bd767": "37c17914ddc243c1c81881069106b916",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/029b1f8f62351d6aacee7b9e5eb7436dbb00d6": "47b729453805508c54942e19aef26fe1",
".git/objects/ed/4cc16421680a50164ba74381b4b35ceaa0ccfc": "b7f7792c774e61d26ddb280afd881e92",
".git/objects/f0/91b6b0bca859a3f474b03065bef75ba58a9e4c": "1aef8d0dea7cfdb7ffb51559c81d2fdf",
".git/objects/f2/e259c7c9390ff69a6bbe1e0907e6dc366848e7": "094726a4a1cc307c0a019e65a323f850",
".git/objects/f2/ef6d99824e2da59c70e9751f3672a2369fd3f3": "44a2d86ec27a6ee8dd0b283d895d98f0",
".git/objects/f3/46021e5e353f2f827b3a136a02d0f53631c785": "95dac5423c0c75a27b351527c71190cf",
".git/objects/f3/c28516fb38e64d88cfcf5fb1791175df078f2f": "bccf9d20d0adcc345fe8e5f4a745c4ae",
".git/objects/f5/4d768393dcf628fc7bf59d281a3be6b4882a8f": "c58a6a3fa11954543bf1cd1d77331d7d",
".git/objects/f5/8bb76100e82ec653e9b32a02d18d9232922d51": "e732ad2f094017daf1f16b50afd7c1d0",
".git/objects/f5/bf9fa0f536c285b8c0c2ef39b9714c66fae243": "828ed007bfe4ad61a0b9a49206f1148f",
".git/objects/f7/4085f3f6a2b995f8ad1f9ff7b2c46dc118a9e0": "c04177ec14f012cb2c99851a5e1ca941",
".git/objects/f7/d5a9bc96e0ef8ae0cf9e3cd64507711f588066": "c39bf49c0be76684f21ef83a0195b3bd",
".git/objects/f9/b0d7c5ea15f194be85eb6ee8e6721a87ff4644": "db1ee38473c66e5ffa9d28f6dfe66938",
".git/objects/fd/03c5686ff8a9bc4f9e83ef7f92c89cee52647b": "e44d9faee3336c7834f9d4c72da64d9c",
".git/refs/heads/main": "376009e08622a1f1da954bd27cf85114",
".git/refs/remotes/origin/main": "376009e08622a1f1da954bd27cf85114",
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
"index.html": "aa279268070420c4efe48653ed1aab6d",
"/": "aa279268070420c4efe48653ed1aab6d",
"main.dart.js": "9bbc07adf1bc245455662755a3f7fc86",
"manifest.json": "a74698029ff171b80279657459d14b15",
"version.json": "ba8f288ac11955e60c73d5721a6defd2"
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
