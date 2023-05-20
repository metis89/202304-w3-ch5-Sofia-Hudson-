import { Component } from "./component";

export class Header extends Component {
  constructor(public selector: string, public title: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `<header class="main-header">
              <h1 class="main-title">${this.title}</h1>
              <img class="title" src="/pokemon-logo.svg" alt="Pokemon logo" width=250 height=250>
            </header>`;
  }
}
