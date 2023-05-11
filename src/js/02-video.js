import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const localKey = 'videoplayer-current-time';
const showCurrentTime = localStorage.getItem(localKey) || 0;

const onPlay = function (data) {
  const currentVideoTime = data.seconds;
  localStorage.setItem(localKey, currentVideoTime);
};

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(showCurrentTime).catch(function (error) {
  switch (error.name) {
    case 'RangeError':
      break;
    default:
      break;
  }
});
