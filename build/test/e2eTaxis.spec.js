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
describe('GET de listTaxis, primer endpoint', () => {
    it('Probando búsqueda inicial con valores de paginación por defecto', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).get('/taxis');
        expect(response.status).toBe(200);
        expect(response.body.length).toBeGreaterThan(0);
        expect(Array.isArray(response.body)).toBeTruthy();
        expect(response.body[0]).toHaveProperty('id');
        expect(typeof response.body[0].id).toBe('number');
        expect(response.body[0]).toHaveProperty('plate');
        expect(typeof response.body[0].plate).toBe('string');
    }));
    it('Probando la paginación con valores válidos', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).get('/taxis?page=1&take=10');
        expect(response.status).toBe(200);
        expect(response.body.length).toBeGreaterThan(0);
        expect(response.body[0]).toHaveProperty('id');
        expect(response.body[0]).toHaveProperty('plate');
    }));
    it('Probando la paginación con valores inválidos', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).get('/taxis?page=/[a-zA-Z]/&take=/[a-zA-Z]/');
        expect(response.status).toBe(500);
    }));
    it('Probando cantidad de taxis esperados según take', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).get('/taxis').query({ take: 15 });
        expect(response.body).toHaveLength(15);
    }));
    it('Probando que la función opera con take y skip por defecto', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).get(`/taxis`);
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBeTruthy();
        expect(response.body.length).toBeGreaterThan(0);
    }));
});
