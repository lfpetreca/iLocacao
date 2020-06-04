import { Component, OnInit } from '@angular/core';

import { LesseeService } from '../../../../services/lessee/lessee.service';

@Component({
  selector: 'app-lessees-list',
  templateUrl: './lessees-list.component.html',
  styleUrls: ['./lessees-list.component.scss']
})
export class LesseesListComponent implements OnInit {
  lessees: any;

  constructor(
    private lesseeService: LesseeService
  ) { }

  ngOnInit() {
    this.getLessees()
  }

  getLessees() {
    this.lesseeService.getAllLessees()
      .subscribe(res => {
        this.lessees = res
      })
  }

  deleteLessee = lessee => this.lesseeService.deleteLessee(lessee);

}

const mockUsers = [
  { id: "493", name: "Bruce Dickson", email: "dickson_ironMaiden8@email.com", phone: "11 95534-0666" },
  { id: "653", name: "Steve Harris", email: "harris_ironMaiden@email.com", phone: "11 5674-8666" },
  { id: "93", name: "Ozzy Osbourne", email: "osbourne_blackSabbath@email.com", phone: "11 6434-8666" },
  { id: "543", name: "Geezer Butler", email: "butler_blackSabbath@email.com", phone: "11 1244-0666" },
  { id: "19", name: "Roger Waters", email: "waters_pinkFloyd@email.com", phone: "11 2075-1902" },
  { id: "70", name: "Ian Anderson", email: "anderson_jethroTull@email.com", phone: "11 81637-7320" },
  { id: "114", name: "Mike Rutherford", email: "rutherford_genesis@email.com", phone: "11 98734-5461" },

]
