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

/* STYLES insert start */
// height40;x

const REPO_DIR = 'https://flopsi69.github.io/crs/crello/tips';

let stylesList = `
  .lav-tooltip {
    color: #FFFFFF;
    position: relative;
    width: 366px;
    padding: 24px;
    background: linear-gradient(259.7deg,#ff5e64,#9e4cc0);
    border-radius: 12px;
    position: fixed;
    z-index: 999!important;
    left: 72px;
    top: 555px;
  }
  .lav-tooltip__head {
    display: flex;
    align-items: flex-start;
  }
  .lav-tooltip__close {
    cursor: pointer;
    transition: 0.35s;
  }
  .lav-tooltip__close svg {
    width: 15px;
    height: 15px;
    padding: 2px;
  }
  .lav-tooltip__close:hover {
    opacity: 0.6;
  }
  .lav-tooltip__title {
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.025em;
    flex-grow: 1;
  }
  .lav-tooltip__time {
    font-size: 12px;
    line-height: 14px;
    padding: 3px 5px;
    background: rgba(245, 238, 231, 0.2);
    border-radius: 5px;
    margin: 14px 0;
  }
  .lav-tooltip__placeholder img {
    width: 100%;
  }
  .lav-tooltip__arrow {
    fill: #a24dbd;
    bottom: 31px;
    left: -17px;
    transform: rotate(-90deg);
  }
  .lav-trigger {
    background: #2053C9;
    border-radius: 8px;
    padding: 15px;
    width: 200px;
    position: fixed;
    right: 15px;
    bottom: 65px;
    transition: 0.3s;
    opacity: 0;
    pointer-events: none;
  }
  .lav-trigger_open {
    opacity: 1;
    pointer-events: auto;
  }
  .lav-trigger__head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 14px;
  }
  .lav-trigger__label {
    background: #F5EEE7;
    border-radius: 5px;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    color: #2053C9;
    padding: 2px 8px;
    margin-right: 9px;
    font-family: ProximaBold;
  }
  .lav-trigger__placeholder {
    margin-bottom: 14px;
    transition: 0.35s;
    cursor: pointer;
  }
  .lav-trigger__placeholder:hover {
    opacity: .8;
  }
  .lav-trigger__placeholder img {
    width: 100%;
  }
  .lav-trigger__caption {
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: #FFFFFF;
    font-family: ProximaSemiBold;
  }
  .lav-trigger__close {
    cursor: pointer;
    transition: 0.35s;
  }
  .lav-trigger__close svg {
    width: 15px;
    height: 15px;
    padding: 2px;
  }
  .lav-trigger__close:hover {
    opacity: 0.6;
  }
  .lav-tip {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #2053C9;
    border-radius: 8px;
    padding: 8px 15px;
    padding-right: 3px;
    color: #fff;
    margin-bottom: 12px;
    margin-right: 8px;
    transition: .4s;
    cursor: pointer;
  }
  .lav-tip:hover {
    background-color: rgb(15, 60, 180);
  }
  .lav-tip__info {
    flex-grow: 1;
  }
  .lav-tip__label {
    background: #F5EEE7;
    border-radius: 5px;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    color: #2053C9;
    padding: 2px 8px;
    margin-right: 9px;
    font-family: ProximaBold;
  }
  .lav-tip__title {
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: #FFFFFF;
    font-family: ProximaSemiBold;
    white-space: nowrap;
    margin-bottom: 1px;
  }
  .lav-tip__play {
    line-height: 0;
  }
  .lav-tip__caption {
    font-size: 10px;
    line-height: 12px;
    color: #FFFFFF;
  }

  .modal {
    position: fixed;
    display: flex;
    padding: 15px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1050;
    outline: 0;
    overflow: hidden;
    overflow-x: hidden;
    overflow-y: auto;
    background: rgba(0,0,0, .6);
    transition: 0.35s;
    pointer-events: none;
    opacity: 0;
  }
  
  .modal_active {
    opacity: 1;
    pointer-events: auto;
  }
  
  .modal__body {
    position: relative;
    margin: auto;
    max-width: 850px;
    width: 100%;
    box-shadow: 0 5px 15px rgba(0,0,0,.5);
    background-color: #f5f7fa;
    border-radius: 8px;
    padding: 18px 35px;
  }

  .modal__body iframe {
    width: 100%;
  }
  
  .modal__close {
    position: absolute;
    top: 20px;
    right: 20px;
    border: 0;
    outline: none;
    line-height: 0;
    cursor: pointer;
    transition: 0.35s;
  }

  .modal__title {
    margin-bottom: 15px;
    font-ewight: bold;
    font-family: ProximaBold;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
  }
  
  .modal__close-icon img {
    width: 16px;
    height: 16px;
  }
`;

let stylesEl = document.createElement('style');
stylesEl.id = 'go-phone-styles';
stylesEl.innerHTML = stylesList;
document.body.appendChild(stylesEl);

/* STYLES insert end */

bannerInit();
function bannerInit() {
  let bannerEl = `
      <div class='lav-tip modal-trigger'>
        <div class='lav-tip__label'>Tip</div>
        <div class='lav-tip__info'>
          <div class='lav-tip__title'>How to remove backgrounds from images</div>
          <div class='lav-tip__caption'>1:22 min view</div>
        </div>
        <div class='lav-tip__play'>
          <img src='${REPO_DIR}/icon-play.svg'>
        </div>
      </div>
  `;

  document
    .querySelector('#sidebar .typography-display-s')
    .insertAdjacentHTML('afterend', bannerEl);
}

triggerInit();
function triggerInit() {
  let triggerIncrement = 0;
  let triggerEl = `
    <div class='lav-trigger'>
      <div class='lav-trigger__head'>
        <div class='lav-trigger__label'>Tip</div>
        <div class='lav-trigger__close'>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L17 17" stroke="white"/>
            <path d="M1 17L17 1" stroke="white"/>
          </svg>
        </div>
      </div>

      <div class='lav-trigger__placeholder modal-trigger'>
        <img src='${REPO_DIR}/trigger-placeholder.png'>
      </div>

      <div class='lav-trigger__caption'>Learn how to animate your text</div>
    </div>
  `;

  document
    .querySelector('.konvajs-content')
    .insertAdjacentHTML('beforeend', triggerEl);

  document
    .querySelectorAll("#sidebar button[data-categ='sidebar']")
    .forEach(function (btn) {
      btn.addEventListener('click', function () {
        triggerIncrement++;
        console.log('clicked btn:', triggerIncrement);
        if (
          triggerIncrement > 3 &&
          !document.querySelector('.lav-trigger_open')
        ) {
          triggerIncrement = 0;
          document
            .querySelector('.lav-trigger')
            .classList.add('lav-trigger_open');
        }
      });
    });

  document
    .querySelector('.lav-trigger__close')
    .addEventListener('click', function (e) {
      e.preventDefault();
      document
        .querySelector('.lav-trigger')
        .classList.remove('lav-trigger_open');
    });
}

tooltipInit();
function tooltipInit() {
  let tooltipEl = `
    <div class='lav-tooltip'>
      <div class='lav-tooltip__head'>
        <div class='lav-tooltip__title'>Learn how to create your perfect designs with Crello</div>
        <div class='lav-tooltip__close'>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L17 17" stroke="white"/>
            <path d="M1 17L17 1" stroke="white"/>
          </svg>
        </div>
      </div>
      <div class='lav-tooltip__time'>1:22 min view</div>
      <div class='lav-tooltip__placeholder'>
        <img src='${REPO_DIR}/tooltip-placeholder.png' />
      </div>
      <svg class="lav-tooltip__arrow" viewBox="0 0 24 10" width="24" height="10"><path d="M8.46445 1.53554C10.4171 -0.417086 13.5829 -0.417088 15.5355 1.53553L24 10H-1.52588e-05L8.46445 1.53554Z"></path></svg>
    </div>
  `;

  document
    .querySelector('#app-view')
    .insertAdjacentHTML('beforeend', tooltipEl);
}

initModal();
function initModal() {
  let modal = `
    <div class="modal">
      <div class="modal__body">
        <!-- Close modal -->
        <button class="modal__close">
          <img src='${REPO_DIR}/icon-close.svg'>
        </button>

        <div class='modal__title'>Learn how to remove backgrounds from images</div>

        <div class='modal__video'>
          <iframe title="Learn to use Crello in 5 easy steps" width="775" height="435" src="https://www.youtube.com/embed/mcdGHpLZbh8?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

      </div>
    </div>
  `;
  document.querySelector('body').insertAdjacentHTML('beforeend', modal);

  let modalEl = document.querySelector('.modal');

  document
    .querySelector('.modal__close')
    .addEventListener('click', function (e) {
      e.preventDefault();
      modalClose();
    });

  modalEl.addEventListener('click', function (e) {
    if (e.target.classList.contains('modal_active')) {
      modalClose();
    }
  });

  function modalClose() {
    modalEl.classList.remove('modal_active');
  }

  document.querySelectorAll('.modal-trigger').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      modalEl.classList.add('modal_active');
    });
  });
}
