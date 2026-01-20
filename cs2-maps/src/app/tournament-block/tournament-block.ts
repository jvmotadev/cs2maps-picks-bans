import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tournament-block',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tournament-block.html',
  styleUrls: ['./tournament-block.css']
})
export class TournamentBlockComponent {
  @Input() title: string = '';
  @Input() imageUrl: string = '';
  @Input() status: string = 'active'; // 'active', 'pick', or 'ban'
}