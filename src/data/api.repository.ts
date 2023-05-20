import { Pokemon } from "../models/pokemon";

export class ApiRepository {
  url: string;
  constructor() {
    this.url = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0/";
  }

  async getAll() {
    const response = await fetch(this.url);
    return response.json();
  }

  //   async get(id: Task["id"]) {
  //     const response = await fetch(this.url + id);
  //     return response.json();
  //   }

  //   async create(task: Partial<Task>) {
  //     const response = await fetch(this.url, {
  //       method: "POST",
  //       body: JSON.stringify(task),
  //       headers: { "Content-Type": "application/json" },
  //     });
  //     return response.json();
  //   }

  //   async update(id: Task["id"], task: Partial<Task>) {
  //     const response = await fetch(this.url + id, {
  //       method: "PATCH",
  //       body: JSON.stringify(task),
  //       headers: { "Content-Type": "application/json" },
  //     });
  //     return response.json();
  //   }

  //   async delete(id: Task["id"]) {
  //     const response = await fetch(this.url + id, {
  //       method: "DELETE",
  //     });
  //     return response.ok;
  //   }
}
