console.log('initExp');

(function () {
  /********* exp **********/
  const exp = {
    dir: 'https://flopsi69.github.io/crs/llvws/new_pdp/',
    observer: false,
    clarity: {
      enable: true,
      params: ['set', 'improve_upgrade_popup_v2', 'variant_1'],
    },
    debug: true,
  };

  // Observer
  if (exp.observer) {
    initObserver((el) => {
      console.log(el);
    });
  }

  /*** STYLES / Start ***/
  const styles = `
  :root {
    --main-color: #333;
    --secondary-color: #000;
  }
  
  .lav-page {
    padding: 0 40px;
    // width: min(1360px, 100% - 20px);
    font-family: 'Lato', sans-serif;
    color: var(--main-color);
    margin: 32px auto 0;
  }
  
  .lav-page h2,
  .lav-page h4,
  .lav-page h5,
  .lav-page h6 {
    color: var(--secondary-color);
  }
  
  .lav-page h2 {
    font-size: 32px;
    font-weight: 700;
    line-height: 40px;
  }
  
  .lav-page h3 {
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
  }
  
  .lav-page h4 {
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
  }
  
  .lav-page h5 {
    font-size: 20px;
    font-weight: 700;
    line-height: 28px;
    margin-bottom: 16px;
  }
  
  .lav-page h6 {
    font-size: 18px;
    font-weight: 700;
    line-height: 28px;
  }
  
  .lav-page a {
    color: #0F0900;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    text-decoration-line: underline;
  }
  
  .lav-page ul {
    padding-left: 24px;
  }
  
  .lav-page li,
  .lav-page p {
    color: var(--main-color);
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }
  
  
  .lav-product {
    display: flex;
    justify-content: space-between;
  }
  
  .lav-product__left {
    max-width: 57.3%;
    width: 100%;
  }
  
  .lav-product__divider {
    height: 100%;
    width: 1px;
    background-color: #DDD;
  }
  
  .lav-product__right {
    max-width: 33%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  /* Heading */
  .lav-product__head {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  
  .lav-product__head-icons {
    display: flex;
    gap: 16px;
    list-style: none;
  }
  
  .lav-product__head-icons p,
  .lav-product__head-icons a {
    display: flex;
    align-items: center;
    text-align: center;
    font-size: 14px;
    font-weight: 700;
    line-height: 22px;
    text-decoration-line: underline;
    cursor: pointer;
  }
  
  .lav-product__head-icons .copied {
    /* display: none; */
    opacity: 0;
    align-items: center;
    position: absolute;
    top: 90%;
    border-radius: 40px;
    background: #FFF;
    padding: 5px 20px;
    white-space: nowrap;
    right: 0;
    transform: translateX(31%);
    line-height: 24px !important;
    z-index: 2;
    text-decoration-line: none !important;
    box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.10);
    transition: all 0.5s ease-in-out;
    pointer-events: none;
  }
  
  .lav-product__head-icons .copied.active {
    opacity: 1;
    top: calc(100% + 11px);
  }
  
  
  /* SWIPER SLIDER GENERAL STYLES */
  .swiper_arrow {
    width: 40px !important;
    height: 40px !important;
    border-radius: 100px;
    background: rgba(0, 0, 0, 0.40);
  }
  
  .swiper .swiper-button-next::after,
  .swiper .swiper-button-prev::after {
    content: "";
  }
  
  /* MAIN SLIDER */
  .main_slider {
    margin-top: 24px;
    margin-bottom: 4px;
    display: block;
    border-radius: 8px;
  }
  
  .main_slider .swiper-pagination {
    display: flex;
    align-items: center;
    border-radius: 40px;
    background: rgba(0, 0, 0, 0.70);
    width: fit-content;
    padding: 2px 8px;
    top: 16px;
    left: 16px;
    right: auto;
    bottom: auto;
  }
  
  .main_slider .swiper-pagination span {
    color: #FFF;
    text-align: center;
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
  }
  
  .main_slider_sync .swiper-slide img {
    border-radius: 4px;
    min-height: 120px;
    cursor: pointer;
  }
  
  .main_slider_sync .swiper-slide-thumb-active img {
    border: 2px solid #000;
  }
  
  /* 4 people are looking at this at the moment */
  .looking {
    display: flex;
    gap: 24px;
    margin: 33px 0 25px;
  }
  
  .looking>div {
    display: flex;
    align-items: center;
  }
  
  .looking p {
    text-align: center;
    font-size: 14px;
    font-weight: 700;
    line-height: 22px;
  }
  
  /* Boat types available */
  .boat_available {
    margin: 25px 0 35px;
  }
  
  .boats {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-top: 16px;
  }
  
  .boat {
    display: flex;
    width: 100%;
    padding: 12px;
    border-radius: 8px;
    border: 1px solid var(--dddddd, #DDD);
    background: #FFF;
    max-width: 382px;
    flex: 1 1 322px;
  }
  
  .boat img {
    max-width: 120px;
    max-height: 120px;
    border-radius: 4px;
    margin-right: 16px;
  }
  
  .boat p {
    color: #000;
    font-size: 17px;
  
    font-weight: 700;
    line-height: 26px;
  }
  
  .about {
    margin-bottom: 24px;
  }
  
  /* START Read more */
  
  .read_more {
    font-weight: 700;
    text-decoration-line: underline;
    cursor: pointer;
  }
  
  .full_text {
    display: none;
  }
  
  .full_text span {
    display: block;
  }
  
  /* END Read more */
  
  .includes h6 {
    margin-bottom: 16px;
  }
  
  .choice {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid var(--dddddd, #DDD);
    border-bottom: 1px solid var(--dddddd, #DDD);
    background: #FFF;
    padding: 20px 0px;
    margin-top: 32px;
  }
  
  .choice>img {
    width: 173px;
    height: 41px;
  }
  
  .choice div>img {
    width: 183px;
  }
  
  /* ACCORDION */
  .accordion_item {
    border-bottom: 1px solid #ccc;
  }
  
  .accordion_header {
    display: flex;
    justify-content: space-between;
    padding: 16px 0;
    cursor: pointer;
  }
  
  .accordion_content {
    display: none;
    padding-bottom: 16px;
  }
  
  .accordion_header.active svg {
    transform: rotate(180deg)
  }
  
  .accordion_header.active+.accordion_content {
    display: block;
  }
  
  .logos {
    margin: 24px 0 48px;
  }
  
  /* You may also like && Read inspired story */
  .similar_style {
    position: relative;
  }
  
  .similar_style .swiper {
    margin-top: 24px;
    position: relative;
  }
  
  .similar_style_after .swiper::after {
    content: '';
    position: absolute;
    right: -5px;
    top: 0;
    height: 100%;
    width: 300px;
    background: linear-gradient(270deg, #FFF 14.85%, rgba(255, 255, 255, 0.00) 100%);
    z-index: 1;
    pointer-events: none;
  }
  
  .similar_style .swiper_arrow {
    background: #000;
    top: 50%;
    transform: translateY(-50%);
  }
  
  .similar_style .swiper-slide {
    border-radius: 8px;
    border: 1px solid var(--dddddd, #DDD);
    background: #FFF;
    padding: 16px;
    /* max-width: 325px; */
  }
  
  .may_like .swiper-slide {
    height: auto;
  }
  
    /* .similar_style .swiper-slide-active {
      border: 1px solid var(--000000, #000);
    } */
  
    .may_like .swiper-slide img {
      width: 100%;
      border-radius: 6px;
    }
  
    .similar_style .swiper-slide h6 {
      margin-top: 16px;
      margin-bottom: 8px;
    }
  
    .similar_style .swiper-slide p {
      margin-bottom: 4px;
    }
  
    .similar_style .swiper-slide p:last-child {
      margin-bottom: 0;
    }
  
    .similar_style .swiper-pagination {
      position: relative !important;
      margin-top: 24px;
    }
  
    .similar_style .swiper-pagination-bullet {
      width: 24px !important;
      height: 2px !important;
      border-radius: 0 !important;
    }
  
    .similar_style .swiper-pagination-bullet-active {
      background: #000 !important;
    }
  
    /* Read inspired story from our customers */
    .stories {
      margin-top: 64px;
    }
  
    .stories h4 span:first-child {
      margin-inline: 8px;
    }
  
    .stories h4 .red_number {
      color: #E60023;
    }
  
    .stories .swiper-slide {
      padding: 24px;
      position: relative;
    }
  
    .service {
      position: absolute;
      top: 16px;
      right: 16px;
    }
  
    .stories .name {
      color: #010101;
      font-weight: 700;
    }
  
    p.verified {
      display: flex;
      align-items: center;
      color: #09B62C;
      font-size: 13px;
      font-weight: 400;
      line-height: 18px;
      margin: 7px 0 15px;
    }
  
    .stories .read_more_block p {
      font-size: 15px;
    }
  
    .stories .read_more {
      display: inline-block;
      margin-top: 8px;
    }
  
    /* Sale */
    p.sale {
      display: flex;
      align-items: center;
      margin: 16px 0 20px;
    }
  
    p.sale span {
      color: #0170B9;
      font-size: 16px;
      font-weight: 700;
      text-decoration-line: underline;
      margin-left: 8px;
      line-height: 22px;
      cursor: pointer;
    }
  
    /* POPUP */
    .popup {
      padding: 48px 53px;
      border: none;
      border-radius: 4px;
      background: #FFF;
      max-width: 450px;
    }
  
    .popup>div {
      text-align: center;
    }
  
    .popup .cross {
      position: absolute;
      top: 11px;
      right: 11px;
      cursor: pointer;
      padding: 5px;
    }
  
    .popup h4 {
      margin-top: 16px;
    }
  
    .popup h4 span {
      color: #0170B9;
    }
  
    .popup h3 {
      margin: 12px 0 32px;
    }
  
    .popup h3+p {
      color: #000;
      text-align: center;
      font-family: "Inter", "Lato", sans-serif;
      font-size: 16px;
      font-weight: 600;
      line-height: 24px;
    }
  
    .popup input {
      width: 100%;
      padding: 20px 16px;
      height: 44px;
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      border-radius: 4px;
      border: 1px solid #DDD;
      background: #FFF;
      margin: 8px 0 20px;
    }
  
    .popup input::placeholder {
      color: #A7A7A7;
    }
  
    .popup button {
      border-radius: 100px;
      background: var(--18-aae-2, #18AAE2);
      color: var(--ffffff, #FFF);
      text-align: center;
      font-size: 16px;
      font-weight: 700;
      line-height: 24px;
      text-transform: uppercase;
      padding: 12px 32px;
      border: none;
      width: 100%;
      cursor: pointer;
    }
  
    .popup::backdrop {
      background: rgba(11, 25, 51, 0.60);
    }
  `;
  /*** STYLES / End ***/

  const html = `
  <div class="lav-page">
    <div class="lav-product">
      <div class="lav-product__left">
        <div class="lav-product__head">
          <div class="lav-product__head-info">
            <h2>Electric Boat Rental 2-3h</h2>
            <h3>no Licence Needed, size Regular 9 guests or XL 12 guests </h3>
          </div>

          <div class="lav-product__head-icons">
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 3C10.1441 3.00201 8.36488 3.70629 7.05258 4.95835C5.74028 6.2104 5.00211 7.90797 5 9.67864C5 15.3934 11.3636 19.7095 11.6349 19.8901C11.7419 19.9616 11.8694 20 12 20C12.1306 20 12.2581 19.9616 12.3651 19.8901C12.6364 19.7095 19 15.3934 19 9.67864C18.9979 7.90797 18.2597 6.2104 16.9474 4.95835C15.6351 3.70629 13.8559 3.00201 12 3ZM12 7.25004C12.5034 7.25004 12.9956 7.39248 13.4142 7.65934C13.8328 7.92619 14.159 8.30549 14.3517 8.74925C14.5444 9.19302 14.5948 9.68133 14.4965 10.1524C14.3983 10.6235 14.1559 11.0563 13.7999 11.3959C13.4439 11.7356 12.9904 11.9669 12.4966 12.0606C12.0028 12.1543 11.491 12.1062 11.0259 11.9224C10.5608 11.7386 10.1632 11.4273 9.88353 11.0279C9.60383 10.6285 9.45455 10.159 9.45455 9.67864C9.45455 9.03453 9.72273 8.41681 10.2001 7.96136C10.6775 7.50591 11.3249 7.25004 12 7.25004Z"
                  fill="#333333" />
              </svg>
              <span>How to find us</span>
            </a>

            <p class="icon_share">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 15.2727V10.7727V6.27271" stroke="#333333" stroke-width="1.5" stroke-linejoin="round" />
                <path d="M15 9L12 6L9 9" stroke="#333333" stroke-width="1.5" stroke-linejoin="round" />
                <path
                  d="M6 13V17C6 17.2652 6.11493 17.5196 6.31952 17.7071C6.5241 17.8946 6.80158 18 7.09091 18H16.9091C17.1984 18 17.4759 17.8946 17.6805 17.7071C17.8851 17.5196 18 17.2652 18 17V13"
                  stroke="#333333" stroke-width="1.5" stroke-linejoin="round" />
              </svg>
              <span>Share</span>
            </p>

            <p class="copied">
              <img src="${exp.dir}/img/check_green.svg" alt=""><span>Link copied</span>
            </p>
          </div>
        </div>

        <!-- Slider main container -->
        <div class="swiper main_slider">
          <!-- Additional required wrapper -->
          <div class="swiper-wrapper">
            <!-- Slides -->
            <div class="swiper-slide">
              <img src="https://lakelasvegaswatersports.com/wp-content/uploads/2022/06/DuffyDate-5-1-1024x683.jpg">
            </div>
            <div class="swiper-slide">
              <img src="https://lakelasvegaswatersports.com/wp-content/uploads/2022/10/IMG_9222-1-2-1024x683.jpg">
            </div>
          </div>
          <!-- If we need pagination -->
          <div class="swiper-pagination"></div>

          <!-- If we need navigation buttons -->
          <div class="swiper-button-prev swiper_arrow"><img src="${exp.dir}/img/slider_arr_l.svg" alt=""></div>
          <div class="swiper-button-next swiper_arrow"><img src="${exp.dir}/img/slider_arr_r.svg" alt=""></div>
        </div>

        <div class="swiper main_slider_sync">
          <!-- Additional required wrapper -->
          <div class="swiper-wrapper">
            <!-- Slides -->
            <div class="swiper-slide">
              <img src="https://lakelasvegaswatersports.com/wp-content/uploads/2022/06/DuffyDate-5-1-1024x683.jpg">
            </div>
            <div class="swiper-slide">
              <img src="https://lakelasvegaswatersports.com/wp-content/uploads/2022/10/IMG_9222-1-2-1024x683.jpg">
            </div>
          </div>
        </div>


        <div class="looking">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M9.87143 11.982C9.87143 12.5271 10.088 13.0498 10.4734 13.4352C10.8588 13.8206 11.3815 14.0372 11.9266 14.0372C12.4717 14.0372 12.9944 13.8206 13.3798 13.4352C13.7652 13.0498 13.9818 12.5271 13.9818 11.982C13.9818 11.4369 13.7652 10.9142 13.3798 10.5288C12.9944 10.1434 12.4717 9.92683 11.9266 9.92683C11.3815 9.92683 10.8588 10.1434 10.4734 10.5288C10.088 10.9142 9.87143 11.4369 9.87143 11.982ZM19.894 11.5086C18.1545 7.84414 15.525 6 12 6C8.47319 6 5.84551 7.84414 4.10596 11.5104C4.03619 11.6582 4 11.8195 4 11.9829C4 12.1463 4.03619 12.3077 4.10596 12.4554C5.84551 16.1199 8.47502 17.964 12 17.964C15.5268 17.964 18.1545 16.1199 19.894 12.4536C20.0353 12.1563 20.0353 11.8113 19.894 11.5086ZM11.9266 15.2115C10.143 15.2115 8.69705 13.7656 8.69705 11.982C8.69705 10.1984 10.143 8.75245 11.9266 8.75245C13.7102 8.75245 15.1561 10.1984 15.1561 11.982C15.1561 13.7656 13.7102 15.2115 11.9266 15.2115Z"
                fill="#B12704" />
            </svg>
            <p><span>4</span> people are looking at this at the moment</p>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M17 6H15.5V5.5C15.5 5.36739 15.4473 5.24021 15.3536 5.14645C15.2598 5.05268 15.1326 5 15 5C14.8674 5 14.7402 5.05268 14.6464 5.14645C14.5527 5.24021 14.5 5.36739 14.5 5.5V6H9.5V5.5C9.5 5.36739 9.44732 5.24021 9.35355 5.14645C9.25979 5.05268 9.13261 5 9 5C8.86739 5 8.74021 5.05268 8.64645 5.14645C8.55268 5.24021 8.5 5.36739 8.5 5.5V6H7C6.73478 6 6.48043 6.10536 6.29289 6.29289C6.10536 6.48043 6 6.73478 6 7V17C6 17.2652 6.10536 17.5196 6.29289 17.7071C6.48043 17.8946 6.73478 18 7 18H17C17.2652 18 17.5196 17.8946 17.7071 17.7071C17.8946 17.5196 18 17.2652 18 17V7C18 6.73478 17.8946 6.48043 17.7071 6.29289C17.5196 6.10536 17.2652 6 17 6ZM7 9V7H8.5V7.5C8.5 7.63261 8.55268 7.75979 8.64645 7.85355C8.74021 7.94732 8.86739 8 9 8C9.13261 8 9.25979 7.94732 9.35355 7.85355C9.44732 7.75979 9.5 7.63261 9.5 7.5V7H14.5V7.5C14.5 7.63261 14.5527 7.75979 14.6464 7.85355C14.7402 7.94732 14.8674 8 15 8C15.1326 8 15.2598 7.94732 15.3536 7.85355C15.4473 7.75979 15.5 7.63261 15.5 7.5V7H17V9H7Z"
                fill="#B12704" />
              <path d="M11.7485 15L10 13.104L10.4371 12.6299L11.7485 14.052L14.5629 11L15 11.474L11.7485 15Z"
                fill="white" />
            </svg>
            <p>Booked <span>3</span> times today</p>
          </div>
        </div>

        <div class="boat_available">
          <h5>Boat types available</h5>
          <div class="boats">
            <div class="boat">
              <img src="https://lakelasvegaswatersports.com/wp-content/uploads/2022/06/DuffyDate-5-1-1024x683.jpg"
                alt="">
              <div class="boat_info">
                <p>Regular electric boat:</p>
                <ul>
                  <li>up to 9 guests</li>
                  <li>from $199 per boat</li>
                  <li>no license needed</li>
                </ul>
              </div>
            </div>
            <div class="boat">
              <img src="https://lakelasvegaswatersports.com/wp-content/uploads/2022/06/DuffyDate-5-1-1024x683.jpg"
                alt="">
              <div class="boat_info">
                <p>Regular electric boat:</p>
                <ul>
                  <li>up to 9 guests</li>
                  <li>from $199 per boat</li>
                  <li>no license needed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="about">
          <h5>ABOUT LAKE LAS VEGAS</h5>
          <div class="read_more_block">
            <p class="preview_text">Majestic palm trees, shimmering lake waters, and sunny skies! Beautiful outdoor
              scenery, an Italian-style village, and lakefront resorts are not typically what one thinks of when
              picturing Las Vegas. <span class="read_more">Read more ></span></p>
            <p class="full_text">Majestic palm trees, shimmering lake waters, and sunny skies! Beautiful outdoor
              scenery, an Italian-style village, and lakefront resorts are not typically what one thinks of when
              picturing Las Vegas. However, that is what is to be found only 20 miles from the famous Las Vegas Strip,
              where desert, lights, and gambling convert into a scenic, quiet retreat with Lake Mead National Park
              (Hoover Dam), Valley of Fire State Park right around the corner!</p>
          </div>
        </div>

        <div class="includes">
          <h6>2023 electric boat rental includes</h6>
          <ul>
            <li>2-hour rental</li>
            <li>Regular and XL duffys' are available</li>
            <li>Boat operation instructions included</li>
          </ul>
        </div>

        <div class="choice">
          <img src="${exp.dir}/img/choice.png" alt="a">
          <div>
            <img src="${exp.dir}/img/tripadvisor_points.png" alt="">
            <p>based on 946 reviews <span style="margin-inline: 8px;">·</span> <a href="#">See all Reviews</a></p>
          </div>
        </div>

        <div class="accordion">
          <div class="accordion_item">
            <div class="accordion_header">
              <h6>Checking in</h6>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M7 10L12 14L17 10" stroke="#333333" stroke-width="2" stroke-linejoin="round" />
              </svg>
            </div>
            <div class="accordion_content">
              <p>Content for section 1 goes here.</p>
            </div>
          </div>
          <div class="accordion_item">
            <div class="accordion_header">
              <h6>Checking in 2</h6>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M7 10L12 14L17 10" stroke="#333333" stroke-width="2" stroke-linejoin="round" />
              </svg>
            </div>
            <div class="accordion_content">
              <p>Content 2</p>
            </div>
          </div>
        </div>

        <div class="logos">
          <img src="${exp.dir}/img/logos.png" alt="">
        </div>
      </div>

      <div class="lav-product__divider"></div>

      <div class="lav-product__right">
        #iframe

        <p class="sale">
          <img src="${exp.dir}/img/24_sale.svg" alt="">
          <span>Get Your 10% Off ></span>
        </p>

        <dialog class="popup">
          <img class="cross" src="${exp.dir}/img/24_cross.svg" alt="">
          <div class="first_screen">
            <img src="${exp.dir}/img/24_sale.svg" alt="">
            <h4> Enjoy <span>10% Off</span> Water Activities!</h4>
            <h3>Exclusive Online Discount for All Water Adventures</h3>
            <p>Enter your email</p>
            <input type="text" placeholder="Email">
            <button>GET PROMO CODE</button>
          </div>
          <!-- <div class="second_screen" hidden>

          </div> -->
        </dialog>

      </div>
    </div>

    <div class="lav-additional">
      <div class="may_like similar_style similar_style_after">
        <h4>You may also like</h4>
        <!-- Slider main container -->
        <div class="swiper">
          <!-- Additional required wrapper -->
          <div class="swiper-wrapper">
            <!-- Slides -->
            <div class="swiper-slide">
              <img src="https://lakelasvegaswatersports.com/wp-content/uploads/2022/06/DuffyDate-5-1-1024x683.jpg"
                alt="">
              <h6>Paddleboard Rentals</h6>
              <p>1-Hour Rental | From: <b>$40</b></p>
              <p>2-Hour Rental | From: <b>$60</b></p>
            </div>
            <div class="swiper-slide">
              <img src="https://lakelasvegaswatersports.com/wp-content/uploads/2022/06/DuffyDate-5-1-1024x683.jpg"
                alt="">
              <h6>Paddleboard Rentals</h6>
              <p>1-Hour Rental | From: <b>$40</b></p>
            </div>
            <div class="swiper-slide">
              <img src="https://lakelasvegaswatersports.com/wp-content/uploads/2022/06/DuffyDate-5-1-1024x683.jpg"
                alt="">
              <h6>Paddleboard Rentals</h6>
              <p>1-Hour Rental | From: <b>$40</b></p>
            </div>
            <div class="swiper-slide">
              <img src="https://lakelasvegaswatersports.com/wp-content/uploads/2022/06/DuffyDate-5-1-1024x683.jpg"
                alt="">
              <h6>Paddleboard Rentals</h6>
              <p>1-Hour Rental | From: <b>$40</b></p>
            </div>
            <div class="swiper-slide">
              <img src="https://lakelasvegaswatersports.com/wp-content/uploads/2022/06/DuffyDate-5-1-1024x683.jpg"
                alt="">
              <h6>Paddleboard Rentals</h6>
              <p>1-Hour Rental | From: <b>$40</b></p>
            </div>
            <div class="swiper-slide">
              <img src="https://lakelasvegaswatersports.com/wp-content/uploads/2022/06/DuffyDate-5-1-1024x683.jpg"
                alt="">
              <h6>Paddleboard Rentals</h6>
              <p>1-Hour Rental | From: <b>$40</b></p>
            </div>
          </div>
          <div class="swiper-pagination"></div>
          <div class="swiper-button-prev swiper_arrow"><img src="${exp.dir}/img/slider_arr_l.svg" alt=""></div>
          <div class="swiper-button-next swiper_arrow"><img src="${exp.dir}/img/slider_arr_r.svg" alt=""></div>
        </div>
      </div>
      <div class="stories similar_style similar_style_after">
        <h4>Read inspired story from our customers<span>·</span><span class="red_number">1.56k</span> Reviews</h4>
        <div class="swiper">
          <!-- Additional required wrapper -->
          <div class="swiper-wrapper">
            <!-- Slides -->
            <div class="swiper-slide">
              <div class="service">
                <img src="${exp.dir}/img/tripadvisor.svg" alt="">
              </div>
              <p class="name">texan755</p>
              <p class="verified">
                <img src="${exp.dir}/img/check_green.svg" alt="">
                <span>Verified customer</span>
              </p>
              <div class="read_more_block">
                <p class="preview_text">Majestic palm trees, shimmering lake waters, and sunny skies! Beautiful
                  outdoor
                  scenery, an Italian-style village, and lakefront resorts are not typically what one thinks of when
                  picturing Las Vegas.</p>
                <p class="full_text">Majestic palm trees, shimmering lake waters, and sunny skies! Beautiful outdoor
                  scenery, an Italian-style village, and lakefront resorts are not typically what one thinks of when
                  picturing Las Vegas. However, that is what is to be found only 20 miles from the famous Las Vegas
                  Strip,
                  where desert, lights, and gambling convert into a scenic, quiet retreat with Lake Mead National Park
                  (Hoover Dam), Valley of Fire State Park right around the corner!</p>

                <span class="read_more">Read more ></span>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="service">
                <img src="${exp.dir}/img/tripadvisor.svg" alt="">
              </div>
              <p class="name">texan755</p>
              <p class="verified">
                <img src="${exp.dir}/img/check_green.svg" alt="">
                <span>Verified customer</span>
              </p>
              <div class="read_more_block">
                <p class="preview_text">Majestic palm trees, shimmering lake waters, and sunny skies! Beautiful
                  outdoor
                  scenery, an Italian-style village, and lakefront resorts are not typically what one thinks of when
                  picturing Las Vegas.</p>
                <p class="full_text">Majestic palm trees, shimmering lake waters, and sunny skies! Beautiful outdoor
                  scenery, an Italian-style village, and lakefront resorts are not typically what one thinks of when
                  picturing Las Vegas. However, that is what is to be found only 20 miles from the famous Las Vegas
                  Strip,
                  where desert, lights, and gambling convert into a scenic, quiet retreat with Lake Mead National Park
                  (Hoover Dam), Valley of Fire State Park right around the corner!</p>

                <span class="read_more">Read more ></span>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="service">
                <img src="${exp.dir}/img/tripadvisor.svg" alt="">
              </div>
              <p class="name">texan755</p>
              <p class="verified">
                <img src="${exp.dir}/img/check_green.svg" alt="">
                <span>Verified customer</span>
              </p>
              <div class="read_more_block">
                <p class="preview_text">Majestic palm trees, shimmering lake waters, and sunny skies! Beautiful
                  outdoor
                  scenery, an Italian-style village, and lakefront resorts are not typically what one thinks of when
                  picturing Las Vegas.</p>
                <p class="full_text">Majestic palm trees, shimmering lake waters, and sunny skies! Beautiful outdoor
                  scenery, an Italian-style village, and lakefront resorts are not typically what one thinks of when
                  picturing Las Vegas. However, that is what is to be found only 20 miles from the famous Las Vegas
                  Strip,
                  where desert, lights, and gambling convert into a scenic, quiet retreat with Lake Mead National Park
                  (Hoover Dam), Valley of Fire State Park right around the corner!</p>

                <span class="read_more">Read more ></span>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="service">
                <img src="${exp.dir}/img/tripadvisor.svg" alt="">
              </div>
              <p class="name">texan755</p>
              <p class="verified">
                <img src="${exp.dir}/img/check_green.svg" alt="">
                <span>Verified customer</span>
              </p>
              <div class="read_more_block">
                <p class="preview_text">Majestic palm trees, shimmering lake waters, and sunny skies! Beautiful
                  outdoor
                  scenery, an Italian-style village, and lakefront resorts are not typically what one thinks of when
                  picturing Las Vegas.</p>
                <p class="full_text">Majestic palm trees, shimmering lake waters, and sunny skies! Beautiful outdoor
                  scenery, an Italian-style village, and lakefront resorts are not typically what one thinks of when
                  picturing Las Vegas. However, that is what is to be found only 20 miles from the famous Las Vegas
                  Strip,
                  where desert, lights, and gambling convert into a scenic, quiet retreat with Lake Mead National Park
                  (Hoover Dam), Valley of Fire State Park right around the corner!</p>

                <span class="read_more">Read more ></span>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="service">
                <img src="${exp.dir}/img/tripadvisor.svg" alt="">
              </div>
              <p class="name">texan755</p>
              <p class="verified">
                <img src="${exp.dir}/img/check_green.svg" alt="">
                <span>Verified customer</span>
              </p>
              <div class="read_more_block">
                <p class="preview_text">Majestic palm trees, shimmering lake waters, and sunny skies! Beautiful
                  outdoor
                  scenery, an Italian-style village, and lakefront resorts are not typically what one thinks of when
                  picturing Las Vegas.</p>
                <p class="full_text">Majestic palm trees, shimmering lake waters, and sunny skies! Beautiful outdoor
                  scenery, an Italian-style village, and lakefront resorts are not typically what one thinks of when
                  picturing Las Vegas. However, that is what is to be found only 20 miles from the famous Las Vegas
                  Strip,
                  where desert, lights, and gambling convert into a scenic, quiet retreat with Lake Mead National Park
                  (Hoover Dam), Valley of Fire State Park right around the corner!</p>

                <span class="read_more">Read more ></span>
              </div>
            </div>
          </div>
          <div class="swiper-pagination"></div>

          <div class="swiper-button-prev swiper_arrow"><img src="${exp.dir}/img/slider_arr_l.svg" alt=""></div>
          <div class="swiper-button-next swiper_arrow"><img src="${exp.dir}/img/slider_arr_r.svg" alt=""></div>
        </div>
      </div>
    </div>
  </div>
`;

  /********* Custom Code **********/
  waitFor(
    () => document.head,
    () => {
      addStyles();
      addSwiper();
      init();
    },
    100
  );

  // *** Functions *** //
  function init() {
    console.log('init');

    $('#content').insertAdjacentHTML('beforebegin', html);

    changeHeader();
    changeFooter();

    // Handle Share
    waitFor(
      () => $('.icon_share'),
      () => {
        $('.icon_share').addEventListener('click', () => {
          const link = window.location;

          // Use the Clipboard API to copy the link to the clipboard
          navigator.clipboard
            .writeText(link)
            .then(() => {
              // Provide feedback to the user
              document.querySelector('.copied').classList.add('active');

              // alert('Link copied to clipboard!')
              setTimeout(() => {
                document.querySelector('.copied').classList.remove('active');
              }, 1200);
            })
            .catch((error) => {
              console.error('Failed to copy link:', error);
            });
        });
      }
    );

    // Init Swiper
    waitFor(
      () => typeof Swiper !== 'undefined',
      () => {
        initSwiper();
      }
    );

    // Init Accordion
    initAccordion();

    // Handle readMore
    const handleReadMoreClick = (e) => {
      if (e.target.matches('.read_more')) {
        const readMoreBlock = e.target.closest('.read_more_block');

        readMoreBlock.querySelector('.preview_text').style.display = 'none';
        readMoreBlock.querySelector('.full_text').style.display = 'block';
      }
    };

    waitFor(
      () => $('.stories'),
      () => {
        $('.stories').addEventListener('click', handleReadMoreClick);
      }
    );

    waitFor(
      () => $('.about'),
      () => {
        $('.about').addEventListener('click', handleReadMoreClick);
      }
    );

    // POPUP
    const waitForEl = setInterval(() => {
      const popup = document.querySelector('.popup');
      const openPopup = document.querySelector('.sale span');
      const closePopup = popup.querySelector('.cross');
      // const input = popup.querySelector(".input")
      // const getPromo = popup.querySelector(".first_screen button")

      if (popup && openPopup && closePopup) {
        clearInterval(waitForEl);

        openPopup.addEventListener('click', () => {
          popup.showModal();
        });

        closePopup.addEventListener('click', () => {
          popup.close();
        });

        popup.addEventListener('click', (e) => {
          const dialogDimensions = popup.getBoundingClientRect();
          if (
            e.clientX < dialogDimensions.left ||
            e.clientX > dialogDimensions.right ||
            e.clientY < dialogDimensions.top ||
            e.clientY > dialogDimensions.bottom
          ) {
            popup.close();
          }
        });
      }
    }, 100);
  }

  function changeHeader() {}

  function changeFooter() {
    const howFindHtml = `
      <style>
        .lav-find {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .lav-find__info {
          max-width: 400px;
        }
        .lav-find__descr {
          margin: 24px 0;
        }
        .lav-find__list {
          font-weight: 700;
        }
        .lav-find__item + .lav-find__item {
          margin-top: 16px;
        }
        .lav-find__item {
          display: flex;
          align-items: center;
        }

        .footer-adv-widget-4 {
          display: none;
        }
        .footer-adv-overlay {
          padding-bottom: 25px;
        }
        #footer-form input[type="submit"] {
          border-radius: 100px;
          width: 100%;
          margin-bottom: 0;
          margin-top: 4px;
        }
        .footer-adv-widget-2 {
          display: flex;
          justify-content: center;
        }
        .site-footer .widget-title {
          margin-bottom: 16px;
          font-size: 24px;
          line-height: 32px;
        }
      
        .footer-contact li img {
          top: 4px;
        }
        .footer-contact li {
          font-family: 'Lato', sans-serif;
          font-size: 16px;
          font-weight: 700;
          line-height: 24px;
        }
        .footer-adv-widget-3 .footer-contact + p {
          display: none;
        }
        .footer-adv-widget-3 ul + ul, .footer-adv-widget-3 li + li {
          margin-top: 16px;
        }
        [href="mailto:info@llvws.com"] {
          text-decoration: underline;
        }
      </style>

      <div class='lav-find'>
        <div class='lav-find__info'>
          <h4 class='lav-find__title'>How to find us</h4>
          <p class='lav-find__descr'>You can find us just 20 miles away from the renowned Las Vegas Strip. Here, the desert, lights, and gambling transform into a tranquil, picturesque getaway with Lake Mead National Park (Hoover Dam) and Valley of Fire State Park right around the corner!</p>
          <ul class='lav-find__list'>
          </ul>
        </div>

        <div class='lav-find__map'></div>
      </div>
    `;

    $('.lav-page').insertAdjacentHTML('beforeend', howFindHtml);

    $$('.footer-adv-widget-3 li').forEach((item) => {
      const cloneEl = item.cloneNode(true);
      cloneEl.classList.add('lav-find__item');
      $('.lav-find__list').insertAdjacentElement('beforeend', cloneEl);
    });

    $('.lav-find__map').insertAdjacentElement(
      'beforeend',
      $('.footer-adv-widget-4 iframe')
    );

    $$('.footer-adv-widget').forEach((item) => {
      item.classList.remove('ast-col-lg-3', 'ast-col-md-3');
      item.classList.add('ast-col-lg-4', 'ast-col-md-4');
    });

    $('.footer-adv-widget-3').insertAdjacentHTML(
      'beforeend',
      `
      <div class='lav-follow'>
        <div class='lav-follow__title'>Follow us:</div>
        <div class='lav-follow__link'>
          <a target='_blank' href='https://www.facebook.com/lakelasvegaswatersports' class='lav-follow__link'>
            <img src='${exp.dir}/img/logo-fb.svg' />
          </a>
          <a target='_blank' href='https://www.instagram.com/lakelasvegaswatersports/' class='lav-follow__link'>
            <img src='${exp.dir}/img/logo-instagram.svg' />
          </a>
          <a target='_blank' href='https://www.youtube.com/channel/UC6ak3hPg1vhQgnjHWu1cPWg' class='lav-follow__link'>
            <img src='${exp.dir}/img/logo-ut.svg' />
          </a>
        </div>
      </div>
    `
    );
  }

  function initAccordion() {
    const accordionItems = document.querySelectorAll('.accordion_item');
    accordionItems.forEach((item) => {
      const header = item.querySelector('.accordion_header');
      // const content = item.querySelector('.accordion_content')

      header.addEventListener('click', () => {
        header.classList.toggle('active');
      });
    });
  }

  function initSwiper() {
    // #1 Main slider
    const swiperMainSync = new Swiper('.main_slider_sync', {
      slidesPerView: 6,
      slideToClickedSlide: true,
      spaceBetween: 8,
    });

    const swiperMain = new Swiper('.main_slider', {
      slidesPerView: 1,

      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        renderFraction: function (currentClass, totalClass) {
          return `<img src="${exp.dir}/img/24_picture.svg" alt=""><span class="${currentClass}"></span><span>/</span><span class="${totalClass}"></span>`;
        },
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      thumbs: {
        swiper: swiperMainSync,
      },
    });

    // #2 You may also like slider
    const swiperMay = new Swiper('.may_like .swiper', {
      slidesPerView: 4,
      slideToClickedSlide: true,
      spaceBetween: 20,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      on: {
        reachEnd: function () {
          this.slidesEl
            .closest('.similar_style')
            .classList.remove('similar_style_after');
        },
      },
    });

    // #3 Read inspired story
    const swiperStories = new Swiper('.stories .swiper', {
      slidesPerView: 3.5,
      slideToClickedSlide: true,
      spaceBetween: 20,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      on: {
        reachEnd: function () {
          this.slidesEl
            .closest('.similar_style')
            .classList.remove('similar_style_after');
        },
      },
    });
  }

  function addStyles() {
    const style = document.createElement('style');
    style.innerHTML = styles;
    document.head.appendChild(style);
  }

  function addSwiper() {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js';
    script.async = false;
    document.head.appendChild(script);

    const style = document.createElement('link');
    style.href = 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css';
    style.rel = 'stylesheet';
    document.head.appendChild(style);
  }
  // *** Utils *** //

  // Waiting for loading by condition
  function waitFor(condition, cb, ms = 1000) {
    if (condition()) {
      if (typeof cb == 'function') cb();
      return;
    }

    let interval = setInterval(function () {
      if (condition()) {
        clearInterval(interval);
        if (typeof cb == 'function') cb();
      }
    }, ms);
  }

  // Alalytic 3
  function gaEvent(action, label) {
    if (!label) {
      label = '';
    }
    try {
      var objData = {
        event: 'gaEv',
        eventCategory: 'Experiment — also like',
        eventAction: action,
        eventLabel: label,
        eventValue: '',
      };
      console.log('EventFire:', objData);
      if (!exp.debug) {
        dataLayer.push(objData);
      }
    } catch (e) {
      console.log('Event Error:', e);
    }
  }

  // Alalytic 4
  function gaEvent(name = '', desc = '', type = '', loc = '') {
    try {
      var objData = {
        event: 'event-to-ga4',
        event_name: name,
        event_desc: desc,
        event_type: type,
        event_loc: loc,
      };
      console.log('eventFire', objData);
      if (!settings.debug) {
        dataLayer.push(objData);
      }
    } catch (e) {
      console.log('Event Error:', e);
    }
  }
  // Mutation Observer
  function initObserver(cb) {
    let observer = new MutationObserver((mutations) => {
      for (let mutation of mutations) {
        for (let node of mutation.addedNodes) {
          if (!(node instanceof HTMLElement)) continue;

          cb(node);
        }
      }
    });

    waitFor(
      () => document.body,
      () => {
        observer.observe(document.body, { childList: true, subtree: true });
      },
      100
    );
  }

  //Clarity
  if (!exp.debug && exp.clarity.enable) {
    waitFor(
      () => typeof clarity == 'function',
      () => {
        clarity(...exp.clarity.params);
      }
    );
  }

  function $(selector, context = document) {
    return context.querySelector(selector);
  }

  function $$(selector, context = document) {
    return context.querySelectorAll(selector);
  }
})();
