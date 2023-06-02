console.log('initExp');

/********* Settings **********/
const settings = {
  dir: 'https://flopsi69.github.io/crs/depositPhotos/mayAlsoLike',
  debug: true,
  observe: false,
  clarity: {
    enable: true,
    params: ['set', 'improve_upgrade_popup_v2', 'variant_1'],
  },
};

//Clarity
if (!settings.debug && settings.clarity.enable) {
  waitFor(typeof clarity == 'function', () => {
    clarity('set', '', 'variant_1');
  });
}

// Observe
if (settings.observe) {
  initObserver((el) => {
    console.log(el);
  });
}

/*** STYLES / Start ***/
const styles = `
  
`;

const stylesEl = document.createElement('style');
stylesEl.innerHTML = styles;
waitFor(
  document.head,
  () => {
    document.head.appendChild(stylesEl);
  },
  100
);
/*** STYLES / End ***/

/********* Custom Code **********/
init();
function init() {
  console.log('init');
}

// *** Utils *** //

// Waiting for loading by condition
function waitFor(condition, cb, ms = 1000) {
  if (condition) {
    if (typeof cb == 'function') cb();
    return;
  }

  let interval = setInterval(function () {
    if (condition) {
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
    if (!settings.debug) {
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
    console.dir('eventFire', objData);
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
    document.body,
    () => {
      observer.observe(document.body, { childList: true, subtree: true });
    },
    100
  );
}
