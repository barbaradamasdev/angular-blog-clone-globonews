import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-journals',
  templateUrl: './card-journals.component.html',
  styleUrls: ['../cards.component.css']
})
export class CardJournalsComponent {
  @Input()
  id:string= '0'
  @Input()
  boxTitle:string = ''

  @Input()
  miniCardTitle1:string = ''
  @Input()
  miniCardPhoto1:string = ''
  @Input()
  miniCardTitle2:string = ''
  @Input()
  miniCardPhoto2:string = ''
  @Input()
  miniCardTitle3:string = ''
  @Input()
  miniCardPhoto3:string = ''
  @Input()
  miniCardTitle4:string = ''
  @Input()
  miniCardPhoto4:string = ''
  @Input()
  miniCardTitle5:string = ''
  @Input()
  miniCardPhoto5:string = ''
  @Input()
  miniCardTitle6:string = ''
  @Input()
  miniCardPhoto6:string = ''
  @Input()
  miniCardTitle7:string = ''
  @Input()
  miniCardPhoto7:string = ''
}
