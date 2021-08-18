import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
/*
import jQuery from 'jquery';
 */
import * as jQuery from 'jquery';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements AfterViewInit {
  constructor(private authService: AuthService, private router: Router) {}

  usuarioLogado: string;
  myDate: number = Date.now();

  ngAfterViewInit() {

    this.usuarioLogado = this.authService.getUsuarioAutenticado();

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

  }
}
