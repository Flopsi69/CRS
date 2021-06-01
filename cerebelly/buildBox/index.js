function gaEvent(action, label = '') {
  window.dataLayer = window.dataLayer || [];
  try {
    let eventObj = {
      event: 'ga_event',
      eventCategory: 'Exp — PDP: add phone number',
      eventAction: action
    };
    if (label) {
      eventObj['eventLabel'] = label;
    }
    dataLayer.push(eventObj);
  } catch (e) {}
}

const REPO_DIR = 'https://flopsi69.github.io/crs/cerebelly/buildBox';

/* STYLES insert start */
let stylesList = `
  .css-tbsmoq .boxmenuContainer {
    display: none;
  }
  .mainContainer .pageContainer {
    display: flex;
    padding-right: 35px;
    align-items: flex-start;
  }
  .lav-build {
    // position: sticky;
    top: 80px;
    text-align: center;
    width: 400px;
    background-color: #EBEEF6;
    border-radius: 15px;
    padding: 40px 45px 45px;
    margin-top: 100px;
  }
  .lav-build__title {
    font-weight: 600;
    font-size: 32px;
    line-height: 43px;
    letter-spacing: 0.006em;
    color: #15206B;
    margin-bottom: 5px;
  }
  .lav-build__caption {
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
    letter-spacing: 0.007em;
    color: #3856A7;
  }
  .lav-build__caption-sub {
    color: #15226A;
  }
  .lav-build__caption span {
    font-weight: 900;
  }
  .lav-build__discounts {
    background: #F4F8FC;
    border-radius: 5px;
    padding: 15px 12px;
    margin-top: 30px;
    margin-bottom: 40px;
  }
  .lav-build__discount {
    font-size: 15px;
    line-height: 23px;
    letter-spacing: 0.003em;
    color: #3856A5;
    display: flex;
    text-align: left;
  }
  .lav-build__discount-value {
    font-weight: 900;
  }
  .lav-build__discount-caption {
    font-weight: 600;
    margin-left: 3px;
  }
  .lav-build__discount + .lav-build__discount {
    margin-top: 5px;
  }
  .lav-build__list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 12px;
    margin-bottom: 25px;
  }
  .lav-build__item {
    position: relative;
    background: #FFFFFF;
    border-radius: 3px;
    width: 51px;
    height: 51px;
    transition: 0.2s;
    line-height: 0;
  }
  .lav-build__item-count {
    position: absolute;
    left: -5px;
    top: -5px;
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    background: #FC4D38;
    color: #fff;
    font-weight: bold;
    font-size: 10px;
    border-radius: 50%;
  }
  .lav-build__item>img {
    object-fit: cover;
    width: 51px;
    height: 51px;
    border-radius: 3px;
  }
  .lav-build__item:hover {
    filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.25));
    transform: scale(1.1);
  }
  .lav-build__checkout {
    padding-top: 12px!important;
    padding-bottom: 12px!important;
    letter-spacing: 0.09em!important;
  }
  .lav-build__checkout_disabled {
    background-color: #B9C4E0!important;
    border-color: #B9C4E0!important;
    pointer-events: none;
  }
  .lav-build__control {
    opacity: 0;
    position: absolute;
    bottom: 5px;
    left: 5px;
    right: 5px;
    display: flex;
    background: #FC4E38;
    border-radius: 12px;
    padding: 1px;
    transition: 0.2s
  }
  .lav-build__item:hover .lav-build__control {
    opacity: 1;
  }
  .lav-build__control-btn {
    display: flex;
    align-items: center;
    background: none;
    border: none;
    outline: none;
    color: #fff;
    cursor: pointer;
    transition: .2s;
    padding: 2px 4px;
  }
  .lav-build__control-btn img + img {
    display: none;
  }
  .lav-build__control-btn:hover {
    transform: scale(1.5);
  }
  .lav-build__control-input {
    background: none;
    outline: none;
    color: #fff;
    text-align: center;
    width: 10px;
    border: none;
    font-size: 10px;
    line-height: 1;
    flex: 1;
    font-weight: 900;
    padding: 0;
    margin-top: -2px;
    pointer-events: none;
  }
  
`;

// connect to DOM
setTimeout(() => {
  let styles = document.createElement('style');
  styles.id = 'go-phone-styles';
  styles.innerHTML = stylesList;
  document.body.appendChild(styles);
}, 300);

/* STYLES insert end */

// CODE START ***
// var intervalInit = setInterval(() => {
//   if (typeof advertId !== 'undefined') {
//     console.log('success..');
//     clearInterval(intervalInit);
//     init();
//   } else {
//     console.log('try one more..');
//   }
// }, 500);

initExp();
function initExp() {
  let lavBuild = `
    <div class='lav-build'>
      <div class='lav-build__title'>Your order</div>
      <div class='lav-build__caption'>Add 14 products to your box</div>
      <div class='lav-build__caption lav-build__caption-sub'>Get <span>Free Shipping + 10% OFF</span></div>

      <div class='lav-build__discounts'>
        <div class='lav-build__discount'>
          <div class='lav-build__discount-value'>14-27 items → 10% OFF</div>
          <div class='lav-build__discount-caption'>+ Free Shipping</div>
        </div>
        <div class='lav-build__discount'>
          <div class='lav-build__discount-value'>28-41 items → 15% OFF</div>
          <div class='lav-build__discount-caption'>+ Free Shipping</div>
        </div>
        <div class='lav-build__discount'>
          <div class='lav-build__discount-value'>42-55 items → 20% OFF</div>
          <div class='lav-build__discount-caption'>+ Free Shipping</div>
        </div>
        <div class='lav-build__discount'>
          <div class='lav-build__discount-value'>56 + items → 25% OFF</div>
          <div class='lav-build__discount-caption'>+ Free Shipping</div>
        </div>
      </div>

      <div class='lav-build__list'></div>

      <div class='lav-build__checkout-wrap'>
        <button class='button primary blue lav-build__checkout'>Proceed to Checkout</button>
      </div>
    </div>
  `;

  document
    .querySelector('.pageContainer')
    .insertAdjacentHTML('beforeend', lavBuild);

  document.addEventListener('click', function (e) {
    if (
      e.target.closest('.added-container') ||
      e.target.closest('.not-added-container')
    ) {
      setItems();
    }
  });

  createBuildItemsRow(3);
  setItems();
}

function setItems() {
  checkFullPack();
  setTimeout(() => {
    let addedItems = [];
    let productArr = Array.from(
      document.querySelectorAll('.products .product.with-amount')
    );
    let i = 0;

    for (let product of productArr) {
      if (
        addedItems.includes(product.querySelector('.title').innerText.trim())
      ) {
        continue;
      }
      if (!document.querySelectorAll('.lav-build__item')[i]) {
        createBuildItemsRow();
      }
      addedItems.push(product.querySelector('.title').innerText.trim());

      let targetItem = document.querySelectorAll('.lav-build__item')[i];
      targetItem.innerHTML = '';

      let productCount = product.querySelector('.added-container input').value;

      targetItem.insertAdjacentElement(
        'afterbegin',
        product.querySelector('.image img').cloneNode(true)
      );

      targetItem.insertAdjacentHTML(
        'afterbegin',
        `
          <div class='lav-build__item-count'>${productCount}</div>
          <div class='lav-build__control'>
            <button class='lav-build__control-btn lav-build__control-minus'>
              <img class='lav-build__icon-minus' src='${REPO_DIR}/icon-minus.svg'>
              <img class='lav-build__icon-basket' src='${REPO_DIR}/icon-basket.svg'>
            </button>
            <input class='lav-build__control-input' value='${productCount}' disabled>
            <button class='lav-build__control-btn lav-build__control-plus'>
              <img src='${REPO_DIR}/icon-plus.svg'>
            </button>
          </div>`
      );

      checkCountInput(targetItem, productCount);

      targetItem
        .querySelector('.lav-build__control-plus')
        .addEventListener('click', function (e) {
          e.preventDefault();
          product.querySelector('.add').click();
          setItems();
        });

      targetItem
        .querySelector('.lav-build__control-minus')
        .addEventListener('click', function (e) {
          e.preventDefault();
          product.querySelector('.remove').click();
          setItems();
        });

      i++;
    }
  }, 250);
}

function checkFullPack() {
  if (document.querySelector('.progress-text .progress-text-count')) {
    console.log('1');
    parseInt(document.querySelector('.progress-text-count').innerText);
  } else {
    document.querySelector('.progress-text .action-button').click();
    setTimeout(() => {
      let indx = Array.from(document.querySelectorAll('.plan')).findIndex(
        function (el) {
          return el.classList.contains('active');
        }
      );
      if (document.querySelectorAll('.plan')[indx + 1]) {
        document.querySelectorAll('.plan')[indx + 1].click();
        document.querySelector('.default-close').click();
      } else {
        console.log('max el');
      }
    }, 10);
    // document
    //   .querySelector('.plan.active')
    //   .parentElement.nextElementSibling.querySelector('.plan')
    //   .click();
    // document.querySelector('.default-close').click();
  }
}

function checkCountInput(item, count) {
  if (parseInt(count) == 1) {
    item.querySelector('.lav-build__item-count').style.opacity = 0;
    item.querySelector('.lav-build__icon-minus').style.display = 'none';
    item.querySelector('.lav-build__icon-basket').style.display = 'block';
  } else {
    item.querySelector('.lav-build__icon-minus').style.display = 'block';
    item.querySelector('.lav-build__icon-basket').style.display = 'none';
  }
}

function createBuildItemsRow(rows) {
  let count = 1 * 5;
  if (rows) {
    count = rows * 5;
  }

  while (count > 0) {
    count--;
    document
      .querySelector('.lav-build__list')
      .insertAdjacentHTML('beforeend', "<div class='lav-build__item'></div>");
  }
}
