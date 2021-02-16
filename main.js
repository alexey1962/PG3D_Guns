var tabs = [
    {
        name: "Primary",
        component: {
            template: ' "<div><img src="./img/weapons/image (5).PNG" alt="">"  "<img src="./img/weapons/image (12).PNG" alt="">" </div> '
        }
    },
    {
        name: "Backup",
        component: {
            template: ' "<div><img src="./img/weapons/image (11).PNG" alt="">" "<img src="./img/weapons/image (14).PNG" alt="">" </div> '
        }
    },
    {
        name: "Melee",
        component: {
            template: ' <div><img src="./img/weapons/image (7).PNG" alt="">" "<img src="./img/weapons/image (9).PNG" alt="">" </div> ' 
        },
    },
    {   
        name: "Special",
        component: {
            template: ' <div><img src="./img/weapons/image (13).PNG" alt="">" "<img src="./img/weapons/image (30).PNG" alt="">" </div> '
        }
    },
    {
        name: "Sniper",
        component: {
            template: ' <div><img src="./img/weapons/image (2).PNG" alt="">" "<img src="./img/weapons/image (27).PNG" alt="">" </div> '
        }
    },
    {
        name: "Premium",
        component: {
            template: ' <div><img src="./img/weapons/image (3).PNG" alt="">" "<img src="./img/weapons/image (8).PNG" alt="">" </div> '
        },
    }
];

window.onload = function () {
    new Vue({
        el: "#dynamic-component-demo",
        data: {
            tabs: tabs,
            currentTab: tabs[0],
            info: "Связи: ",
             link: "http://pixelgun.wikia.com/wiki/Pixel_Gun_Wiki",
             play: "https://play.google.com/store/apps/details?id=com.pixel.gun3d&hl=ru&gl=US",
             community: "https://vk.com/pixelgunfancom"
        }
    });
}
// window.onload = function () {
//     var bottom = new Vue({
//         el: '#bottom',
//         data: {
//             info: "Связи: ",
//             link: "http://pixelgun.wikia.com/wiki/Pixel_Gun_Wiki",
//             play: "https://play.google.com/store/apps/details?id=com.pixel.gun3d&hl=ru&gl=US",
//             community: "https://vk.com/pixelgunfancom"
//         }
//     });
// }
