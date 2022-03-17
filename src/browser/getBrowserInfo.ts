/**
 * 获取浏览器型号和版本
 */
// function getBrowserInfo() {
//   const t = navigator.userAgent.toLowerCase();
//   return t.indexOf('msie') >= 0
//     ? {
//         // ie < 11
//         type: 'IE',
//         version: Number((t.match(/msie ([\d]+)/) as any)[1]),
//       }
//     : t.match(/trident\/.+?rv:(([\d.]+))/)
//     ? {
//         // ie 11
//         type: 'IE',
//         version: 11,
//       }
//     : t.indexOf('edge') >= 0
//     ? {
//         type: 'Edge',
//         version: Number(t.match(/edge\/([\d]+)/)[1]),
//       }
//     : t.indexOf('firefox') >= 0
//     ? {
//         type: 'Firefox',
//         version: Number(t.match(/firefox\/([\d]+)/)[1]),
//       }
//     : t.indexOf('chrome') >= 0
//     ? {
//         type: 'Chrome',
//         version: Number(t.match(/chrome\/([\d]+)/)[1]),
//       }
//     : t.indexOf('opera') >= 0
//     ? {
//         type: 'Opera',
//         version: Number(t.match(/opera.([\d]+)/)[1]),
//       }
//     : t.indexOf('Safari') >= 0
//     ? {
//         type: 'Safari',
//         version: Number(t.match(/version\/([\d]+)/)[1]),
//       }
//     : {
//         type: t,
//         version: -1,
//       };
// }
//
// export default getBrowserInfo;
