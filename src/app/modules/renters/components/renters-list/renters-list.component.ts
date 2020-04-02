import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-renters-list',
  templateUrl: './renters-list.component.html',
  styleUrls: ['./renters-list.component.scss']
})
export class RentersListComponent implements OnInit {
  renters: any[];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.renters = mockUsers;
  }

}

const mockUsers = [
  { id: "493", name: "David Hume", email: "hume_1748@email.com", phone: "11 95534-0000" },
  { id: "653", name: "John Stuart Mill", email: "mill_1861@email.com", phone: "11 5674-8943" },
  { id: "93", name: "Francis Bacon", email: "bacon_1620@email.com", phone: "11 6434-8902" },
  { id: "543", name: "Immanuel Kant", email: "kant_1781@email.com", phone: "11 1244-0753" },
  { id: "19", name: "Edmund Husserl", email: "husserl_1900@email.com", phone: "11 2075-1902" },
  { id: "70", name: "René Descartes", email: "descartes_1637@email.com", phone: "11 81637-7320" },
  { id: "114", name: "Gilles Deleuze", email: "deleuze_1980@email.com", phone: "11 98734-5461" },
]
