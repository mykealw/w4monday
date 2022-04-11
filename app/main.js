import { ValuesController } from "./Controllers/ValuesController.js";
import { TriviasController } from "./Controllers/TriviasController.js";
import { MultiplesController } from "./Controllers/MultiplesController.js";

class App {
  // valuesController = new ValuesController();
  triviasController = new TriviasController(); 
  multiplesController = new MultiplesController();
}

window["app"] = new App();
