import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  nameProject = 'Pontos de Interesse';
  ariaLabel = 'new-aria-label';

  // @Input() indica que o valor da propriedade vai vir do componente pai.
  // (!) quer dizer que vai ser inicializado ainda (pelo componente pai - app).
  @Input() name!: string;

  // @Output() incica que o componente filho vai enviar infos para o componente pai.
  // tem que ter um evento para chamar isso, dai passa o valor para o pai.
  @Output() emitValueCharacter = new EventEmitter<string>();
}
