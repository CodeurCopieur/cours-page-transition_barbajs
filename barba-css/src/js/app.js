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
    }
  ]
});