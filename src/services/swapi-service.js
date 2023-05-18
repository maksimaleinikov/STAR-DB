import { Component } from "react";

export default class SwapiService extends Component {
  _apiBase = "https://swapi.dev/api"; //приватная часть класса
  async getResourse(url) {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`could not fetch ${url}, recieved ${res.status}`);
    }
    return await res.json();
  }
  async getAllPeople() {
    const res = await this.getResourse(`/people/`);
    return res.results.map(this._transformPerson);
  }
  async getPerson(id) {
    const person = await this.getResourse(`/people/${id}/`);
    return this._transformPerson(person);
  }
  async getAllPlanets() {
    const res = await this.getResourse(`/planets/`);
    return res.results.map(this._transformPlanet);
  }
  async getPlanet(id) {
    const planet = await this.getResourse(`/planets/${id}/`);
    return this._transformPlanet(planet);
  }
  async getAllStarships() {
    const res = await this.getResourse(`/starships/`);
    return res.results.map(this._transformStarship);
  }
  async getStarship(id) {
    const starship = await this.getResourse(`/starships/${id}/`);
    return this._transformStarship(starship);
  }
  _extractID(item) {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  }
  _transformPlanet(planet) {
    return {
      id: this._extractID(planet),
      name: planet.name,
      population: planet.population,
      diameter: planet.diameter,
      rotationPeriod: planet.rotation_period,
    };
  }
  _transformStarship(starship) {
    return {
      id: this._extractID(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.costInCredits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargoCapacity,
    };
  }
  _transformPerson(person) {
    return {
      id: this._extractID(person),
      name: person.name,
      gender: person.gender,
      birthYesar: person.birthYesar,
      eyeColor: person.eyeColor,
    };
  }
}
