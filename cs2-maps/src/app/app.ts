import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TournamentBlockComponent } from "./tournament-block/tournament-block";
import { disabled } from '@angular/forms/signals';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TournamentBlockComponent, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // Add a mode state
  currentMode: 'pick' | 'ban' = 'ban'; 

  tournamentBlocks = [
    { title: 'Mirage', img: 'mirage.jpg', status: 'active' }, // status can be 'active', 'pick', or 'ban'
    { title: 'Dust II', img: 'dust2.jpg', status: 'active' },
    { title: 'Inferno', img: 'inferno.jpg', status: 'active' },
    { title: 'Nuke', img: 'nuke.jpg', status: 'active' },
    { title: 'Overpass', img: 'overpass.jpg', status: 'active' },
    { title: 'Anubis', img: 'anubis.jpg', status: 'active' },
    { title: 'Train', img: 'train.jpg', status: 'active' }
  ];

  toggleMode(mode: 'pick' | 'ban') {
    this.currentMode = mode;
  }

  handleBlockClick(block: any) {
    if (block.status !== 'active') return; // Prevent changing once set
    block.status = this.currentMode; // Set to 'pick' or 'ban'
  }

  resetBlocks() {
    this.tournamentBlocks.forEach(block => block.status = 'active');
  }
}
