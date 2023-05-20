import { ApiRepository } from "../data/api.repository";
import { Pokemon } from "../models/pokemon";
import { Component } from "../components/component";

export class Card extends Component {
  pokemon!: Pokemon[]; //usamos "!" para que sólo nos devuelva el array, ni null ni undefined
  repository!: ApiRepository; //lo mismo

  constructor(selector: string) {
    super(selector);
    this.pokemon = [];
    this.repository = new ApiRepository();
    this.handleload();
  }

  async handleload() {
    this.pokemon = await this.repository.getAll();
    console.log(this.pokemon);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    const list = this.pokemon.results //tiene que llevar ".result" porque sino .map no se puede usar en un objeto
      .map(
        (item: any) =>
          `<li class="pokemon">
          <span>${item.name}</span>
          <img src=""</span>
          </li>`
      )
      .join(``);
    return `<ul class="pokemon-list">${list}</ul>`;
  }
}
