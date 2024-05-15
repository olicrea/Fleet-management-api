"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../app"));
/*describe('Nombre de tu conjunto de pruebas', () => {
  test('Nombre de tu prueba', () => {
    // Aquí escribe tu prueba
    const resultado = tuFuncion(); // Llama a la función que estás probando
    expect(resultado).toEqual(valorEsperado); // Asegúrate de que el resultado sea el esperado
  });
});*/
describe('Pruebas get para primer endpoint', () => {
    // Test para la búsqueda inicial:
    // Test que simule el escenario de una base de datos vacía.
    // Verifica que la función devuelva un código de estado 404 y un mensaje indicando que no hay taxis.
    // Test para la paginación:
    // Test que simule la búsqueda de taxis a partir de un ID persistente específico.
    let lastPersistentId; // Definir un ID persistente válido
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        lastPersistentId = 15;
    }));
    it('Test para búsqueda a partir de ID persistente', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).get(`/taxis?cursor=${lastPersistentId}`);
        expect(response.status).toBe(200);
        //expect(response.body.taxis).toBeInstanceOf(Array);
        //expect(response.body.taxis.length).toBeGreaterThan(0);
    }));
    // Verifica que la función devuelva un código de estado 200 y un array con la cantidad esperada de taxis.
    it('Probando status al listar taxis', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).get('/taxis'); // Llama a la función que estás probando
        expect(response.status).toBe(200); // Asegúrate de que el resultado sea el esperado
        //expect(response.body.taxis.length).toBeGreaterThan(0);
        const taxis = JSON.parse(response.text);
        expect(taxis.length).toBe(10);
        expect(taxis[0].id).toBe(515);
    }));
});
// Comprueba que el lastPersistentId se actualiza correctamente al último ID del array de taxis devuelto.
// Test para errores:
// Test que simule un escenario de error al consultar la base de datos.
// Verifica que la función devuelva un código de estado 500 y un mensaje de error adecuado.
