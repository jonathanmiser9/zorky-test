import { Game } from './game.js';
import { locations } from './locations.js';
import { items } from './items.js';

const game = new Game(locations, items);
const outputElement = document.getElementById('game-output');
const inputElement = document.getElementById('game-input');

function updateOutput(text) {
  outputElement.textContent += text + '\n';
  outputElement.scrollTop = outputElement.scrollHeight;
}

inputElement.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const command = inputElement.value.trim().toLowerCase();
    inputElement.value = '';
    
    updateOutput(`> ${command}`);
    const response = game.processCommand(command);
    updateOutput(response);
  }
});
