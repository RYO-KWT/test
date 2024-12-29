'use strict';
{
  document.addEventListener('DOMContentLoaded', () => {
    // audio
    const audioButton = document.querySelector('.js-audio__button');
    const audioText = document.querySelector('.js-audio__text');
    const audio = document.querySelector('.js-audio');

    audioButton.addEventListener('click', () => {
      if (audio.paused) {
        audio.play();
        audioText.textContent = 'sound on';
      } else {
        audio.pause();
        audioText.textContent = 'sound off';
      }
    });
  });
}
