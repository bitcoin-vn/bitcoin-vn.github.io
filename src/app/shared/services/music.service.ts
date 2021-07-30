import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor() { }

  /**
   * Hover sound
   * @param {*} path: audio
   */
  initMouseEnterSound(container, path, volume) {
    // // sound hover
    // var $element = $(container);
    // $element.unbind("mouseenter"); // clear cache
    // $element.mouseenter(function (e) {
    //   feature.playAudioJS(path, volume);
    // });
  }
  /**
   * Click sound
   * @param {*} path: audio
   */
  initMouseDownSound(container, path, volume) {
    // // sound hover
    // var $element = $(container);
    // $element.unbind("mousedown"); // clear cache
    // $element.mousedown(function (e) {
    //   feature.playAudioHtmlRestart(path, volume);
    // });
  }
  /**
   * @param {*} path: audio
   * @param {*} volume: number
   */
  playAudioJS(path, volume) {
    const audio = new Audio();
    audio.src = path;
    audio.volume = volume;
    audio.load();
    audio.play().catch(function () {
      console.log('Exception play audio: issue');
    });
  }
  /**
   * @param {*} path: src audio
   * @param {*} volume: number
   */
  playAudioHtmlRestart(path, volume) {
    // var audio = $("#btcVnAudio")[0]; // Declare a local variable
    // audio.currentTime = 0;
    // audio.volume = volume;
    // audio.src = path;
    // audio.play().catch(function () {
    //   console.log('Exception play audio: issue');
    // });
    // return audio;
  }
  /**
   * Stop audio html
   */
  stopAudioHtml() {
    // var audio = $("#btcVnAudio")[0]; // Declare a local variable
    // audio.src = '';
    // audio.currentTime = 0;
    // return audio;
  }
}
