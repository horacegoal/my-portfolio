import Person from './scripts/Person';
import ExampleReactComponent from './scripts/ExampleReactComponent';
import React from 'react';
import ReactDOM from 'react-dom';
import gsap from 'gsap';
import SplitType from 'split-type';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const person1 = new Person('Brad');
if (document.querySelector('#render-react-example-here')) {
  ReactDOM.render(
    <ExampleReactComponent />,
    document.querySelector('#render-react-example-here')
  );
}

// JavaScript

// wait until DOM is ready
document.addEventListener('DOMContentLoaded', function (event) {
  console.log('DOM loaded');

  //wait until images, links, fonts, stylesheets, and js is loaded
  window.addEventListener(
    'load',
    function (e) {
      const textReveal1 = new SplitType('.hero-section-text-1', {
        //set class of each char to text1
        types: 'chars',
        charClass: 'text1',
      });

      //add visibility: visible to hero section text 1
      document.querySelector('.hero-section-text-1').style.visibility =
        'visible';
      document.querySelector('.hero-section-text-2').style.visibility =
        'visible';
      document.querySelector('.hero-section-text-3').style.visibility =
        'visible';

      const text2 = document.querySelector('.hero-section-text-2').innerHTML;
      document.querySelector('.hero-section-text-2').innerHTML = '';
      const text2SplitStrs = text2.split(/\r?\n/);
      text2SplitStrs.forEach((str) => {
        const div = document.createElement('div');
        div.innerHTML = str;
        div.classList.add('text2');
        document.querySelector('.hero-section-text-2').appendChild(div);
      });

      const text3 = document.querySelector('.hero-section-text-3').innerHTML;
      document.querySelector('.hero-section-text-3').innerHTML = '';
      const text3SplitStrs = text3.split(/\r?\n/);
      text3SplitStrs.forEach((str) => {
        const div = document.createElement('div');
        div.innerHTML = str;
        div.classList.add('text3');
        document.querySelector('.hero-section-text-3').appendChild(div);
      });

      gsap.to('.text1', {
        y: 0,
        stagger: 0.02,
        delay: 0.2,
        duration: 0.1,
        onComplete: () => {
          gsap.to('.text2', {
            y: 0,
            stagger: 0.05,
            delay: 0.2,
            duration: 0.1,
            onComplete: () => {
              gsap.to('.text3', {
                y: 0,
                stagger: 0.05,
                delay: 0.2,
                duration: 0.1,
              });
              gsap.to('.hero-section-image-2', {
                opacity: 1,
                delay: 0.2,
                duration: 2,
              });
            },
          });
        },
      });
    },
    false
  );
});

document.addEventListener('DOMContentLoaded', function (event) {
  console.log('DOM loaded');

  //wait until images, links, fonts, stylesheets, and js is loaded
  window.addEventListener(
    'load',
    function (e) {
      //about text 1
      const textGp1 = new SplitType(
        '.about-content .wp-block-columns:first-of-type p',
        {
          types: 'chars',
          charClass: 'about1-text',
        }
      );
      const textGp2 = new SplitType(
        '.about-content .wp-block-columns:first-of-type li',
        {
          //set class of each char to text1
          types: 'chars',
          charClass: 'about1-text',
        }
      );
      ///////////
      //about text 2
      const textGp3 = new SplitType(
        '.about-content .wp-block-columns:nth-of-type(2) p',
        {
          types: 'chars',
          charClass: 'about2-text',
        }
      );

      const row1 = document.querySelector(
        '.about-content .wp-block-columns:first-of-type'
      );
      gsap.to('.about1-text', {
        scrollTrigger: {
          trigger: row1,
          start: 'top 95%',
        },
        stagger: 0.004,
        opacity: 1,
        duration: 0.5,
      });

      gsap.fromTo(
        '.about-content .wp-block-columns:first-of-type .wp-block-image',
        {
          y: 100,
        },
        {
          scrollTrigger: {
            trigger: row1,
            start: 'top 95%',
          },
          y: 0,
          duration: 0.5,
        }
      );

      const row2 = document.querySelector(
        '.about-content .wp-block-columns:nth-of-type(2)'
      );
      gsap.to('.about2-text', {
        scrollTrigger: {
          trigger: row2,
          start: 'top 95%',
        },
        stagger: 0.015,
        opacity: 1,
        duration: 0.5,
      });
      gsap.fromTo(
        '.about-content .wp-block-columns:nth-of-type(2) .wp-block-image',
        {
          y: 100,
        },
        {
          scrollTrigger: {
            trigger: row2,
            start: 'top 95%',
          },
          y: 0,
          duration: 0.5,
        }
      );
    },
    false
  );
});

document.addEventListener('DOMContentLoaded', function (event) {
  console.log('DOM loaded');

  //wait until images, links, fonts, stylesheets, and js is loaded
  window.addEventListener('load', function (e) {
    gsap.fromTo(
      '.work-container',
      {
        y: 100,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: document.querySelector('.works-content'),
          start: 'top 95%',
        },
        y: 0,
        stagger: 0.2,
        opacity: 1,
        duration: 0.5,
      }
    );
  });
});

document.addEventListener('DOMContentLoaded', function (event) {
  console.log('DOM loaded');

  //wait until images, links, fonts, stylesheets, and js is loaded
  window.addEventListener('load', function (e) {
    const textGp = new SplitType('.contact-text p', {
      types: 'chars',
      charClass: 'contact-char',
    });

    gsap.fromTo(
      '.contact-char',
      {
        opacity: 0.1,
      },
      {
        scrollTrigger: {
          trigger: document.querySelector('.contact-text'),
          start: 'top 95%',
        },
        stagger: 0.005,
        opacity: 1,
        duration: 0.5,
      }
    );

    gsap.fromTo(
      '.contact-form',
      {
        y: 100,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: document.querySelector('.contact-text'),
          start: 'top 95%',
        },
        y: 0,
        opacity: 1,
        delay: 0.1,
        duration: 0.5,
      }
    );

    gsap.to('.contact-text i', {
      scrollTrigger: {
        trigger: document.querySelector('.contact-text'),
        start: 'top 95%',
      },
      y: 0,
      opacity: 1,
      delay: 1,
      duration: 0.5,
    });
  });
});
