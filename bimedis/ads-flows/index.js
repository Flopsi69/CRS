// function gaEvent(action, label = '') {
//   window.dataLayer = window.dataLayer || [];

//   try {
//     let eventObj = {
//       event: 'ga_event',
//       eventCategory: 'Exp — PDP: add phone number',
//       eventAction: action
//     };

//     if (label) {
//       eventObj['eventLabel'] = label;
//     }

//     dataLayer.push(eventObj);
//   } catch (e) {}
// }

// (function (h, o, t, j, a, r) {
//   h.hj =
//     h.hj ||
//     function () {
//       (h.hj.q = h.hj.q || []).push(arguments);
//     };
//   h._hjSettings = { hjid: 2174050, hjsv: 6 };
//   a = o.getElementsByTagName('head')[0];
//   r = o.createElement('script');
//   r.async = 1;
//   r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
//   a.appendChild(r);
// })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
// window.hj =
//   window.hj ||
//   function () {
//     (hj.q = hj.q || []).push(arguments);
//   };

// if (window.innerWidth < 992) {
//   hj('trigger', 'pdp__add_phone_number_mob');
// } else {
//   hj('trigger', 'pdp__add_phone_number_des');
// }

// gaEvent('loaded');

let stylesList = `
  .sjs-place-ad-toggle-mode {
    display: none;
  }
`;

let styles = document.createElement('style');
styles.id = 'go-flow-styles';
styles.innerHTML = stylesList;
document.body.appendChild(styles);

if (
  location.href.includes('place-ad/sell') &&
  document.querySelector('.sjs-place-ad-toggle-mode span')
) {
  document.querySelector('.sjs-place-ad-toggle-mode span').click();
}
