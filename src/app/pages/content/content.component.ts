import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  photoCover:string =''
  contentTitle:string =''
  contentSubtitle:string =''
  contentAuthor:string =''
  contentDescription:string = ''
  private id:string | null = '0'

  constructor (
    private route:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id == id)[0]

    this.photoCover = result.photo
    this.contentTitle = result.title
    this.contentAuthor = "Por " + result.author
    this.contentSubtitle = result.subtitle
    this.contentDescription = result.description
    /* this.contentDescription = result.description.replace('\n', '<br />') */
  }
}
