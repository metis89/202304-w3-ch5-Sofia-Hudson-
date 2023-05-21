import { ApiRepository } from "../data/api.repository";
import { Pokemon } from "../models/pokemon";
import { Component } from "../components/component";

export class Card extends Component {
  pokemon!: Pokemon[]; // Usamos "!" para que sólo nos devuelva el array, ni null ni undefined
  repository!: ApiRepository; // Lo mismo

  constructor(selector: string) {
    super(selector);
    this.pokemon = [];
    this.repository = new ApiRepository();
    this.handleLoad();
  }

  render(): void {
    super.cleanHtml();
    this.template = this.createTemplate();
    super.render();
    this.element
      .querySelectorAll("span")
      .forEach((item) =>
        item.addEventListener("click", this.handleGetOne.bind(this))
      );
  }

  async handleLoad() {
    this.pokemon = await this.repository.getAll();
    this.render();
  }

  async handleGetOne(event: Event) {
    const element = event.target;
    const url = element!.dataset.id as string;
    this.repository.getPokemon(url);
  }

  createTemplate() {
    console.log(this.pokemon);
    const balls = this.pokemon.results
      .map(
        (item) => `
    <li>
      <p>${item.name}</p>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${
        item.url.split("/")[6]
      }.gif" heigh=100 width=100>
      <span data-id="${item.url}"></span>
    </li>`
      )
      .join("");

    return `
    <h2>Pokedex</h2>
    <section class="pokemon-list"><ul>${balls}</ul></section>`;
  }
}
