import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NasaService } from "../services/nasa-service";

@Component({
  selector: 'app-pagina2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagina2.html',
  styleUrls: ['./pagina2.css'],
})
export class Pagina2 implements OnInit {
  data: any;
  constructor(private nasa: NasaService) {}
  ngOnInit() {
    this.nasa.getApod().subscribe((risposta: any) => {
      this.data = risposta;
    });
  }
}