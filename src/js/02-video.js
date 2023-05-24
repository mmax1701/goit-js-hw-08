import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const player = new Player('vimeo-player');

const currentTime = function (data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
}
    
player.on('timeupdate', throttle(currentTime, 1000));

const saveTime = localStorage.getItem('videoplayer-current-time');
player.setCurrentTime(saveTime);