import methods from "methods";

export default class App {
  private chache = {};
  private engines = {};
  private settings = {};

  private _router = undefined;

  constructor() {
    console.log("App.constructor");
  }

  init() {
    console.log("App.init");
  }

}

const app = new App();

methods.forEach(method => {
  app[method] = (path) => {
      this.lazyrouter()

      const route = this._router.route(path)
      route[method].apply(route, slice.call(arguments, 1))
      return this 
    }
  });

  lazyrouter() = lazyrouter() {
    if(!this._router) {
      this._router = new Router();
    }
  }