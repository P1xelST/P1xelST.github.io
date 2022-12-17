import modal from './modules/modal';
import forms from'./modules/forms';
import { openModal } from './modules/modal';
window.addEventListener('DOMContentLoaded', function() {
    const modalTimer = setTimeout(() => openModal('.modal', modalTimer), 50000);
    const tabs = require('./modules/tabs'),
          timer = require('./modules/timer'),
          cards = require('./modules/cards'),
          calc = require('./modules/calc'),
          slider = require('./modules/slider');
    tabs();
    modal('[data-modal]', '.modal', modalTimer);
    timer();
    cards();
    calc();
    forms("form", modalTimer);
    slider();
});