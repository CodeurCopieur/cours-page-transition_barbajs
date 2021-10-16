import barba from '@barba/core';
import barbaCss from '@barba/css';

// tell Barba to use the css plugin
barba.use(barbaCss);

const body = document.querySelector('body')

barba.hooks.before( (data) => {
  const bck = data.current.container.dataset.background

  body.style.setProperty('--page-background', bck)
})

// init Barba
barba.init({
  transitions: [
    {
      name: 'home',
      beforeOnce(){
        console.log('beforeOnce');
      },
      once(){},
      afterOnce() {
        console.log('afterOnce');
      }
    },
    {
      name: 'fade',
      to: {
        namespace: ['fade']
      },
      leave(){},
      enter(){}
    },
    {
      name: 'clip',
      to: {
        namespace: ['clip']
      },
      sync: true, // permet d'avoir le container actuel et suivant
      leave(){},
      enter(){},
      beforeEnter() {
        console.log('beforeEnter');
      }
    },
    {
      name: 'with-cover',
      to: {
        namespace: ['with-cover']
      },
      leave(){},
      enter(){}
    }
  ]
});