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
describe('GET de historialTaxi, segundo endpoint', () => {
    it('Probando solicitud típica', () => __awaiter(void 0, void 0, void 0, function* () {
        const id = '6598';
        const day = '2008-02-03';
        const dayModify = '2008-02-03T00:01:11.000Z';
        const response = yield (0, supertest_1.default)(app_1.default).get(`/trajectories/${id}/${day}`);
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBeTruthy();
        expect(response.body.length).toBeGreaterThan(0);
        expect(typeof response.body[0].date).toBe('string');
        expect(response.body[0].date).toEqual(dayModify);
        expect(response.body[0]).toHaveProperty('latitude');
        expect(typeof response.body[0].latitude).toBe('number');
        expect(response.body[0]).toHaveProperty('longitude');
        expect(typeof response.body[0].longitude).toBe('number');
        expect(response.body[0]).toHaveProperty('date');
        expect(typeof response.body[0].date).toBe('string');
        const date1 = Date.parse(response.body[0].date);
        const date2 = Date.parse(response.body[1].date);
        expect(date2).toBeGreaterThanOrEqual(date1);
    }));
    it('Probando con un id inválido', () => __awaiter(void 0, void 0, void 0, function* () {
        const id = /[a-zA-Z]/;
        const day = '2008-02-03';
        const response = yield (0, supertest_1.default)(app_1.default).get(`/trajectories/${id}/${day}`);
        expect(response.status).toBe(404);
    }));
    it('Probando con un day inválido', () => __awaiter(void 0, void 0, void 0, function* () {
        const id = '15';
        const day = /[a-zA-Z]/;
        const response = yield (0, supertest_1.default)(app_1.default).get(`/trajectories/${id}/${day}`);
        expect(response.status).toBe(404);
    }));
    it('Probando que no funciona sin querys', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).get(`/trajectories`);
        expect(response.status).toBe(404);
    }));
});
describe('GET de lastLocation, tercer endpoint', () => {
    test('Nombre de tu prueba', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).get('/lastLocation');
        expect(response.status).toBe(200);
        expect(response.body[0]).toHaveProperty('taxi_id');
        expect(typeof response.body[0].latitude).toBe('number');
        expect(response.body[0]).toHaveProperty('latitude');
        expect(typeof response.body[0].latitude).toBe('number');
        expect(response.body[0]).toHaveProperty('longitude');
        expect(typeof response.body[0].longitude).toBe('number');
        expect(response.body[0]).toHaveProperty('date');
        expect(typeof response.body[0].date).toBe('string');
        const date1 = Date.parse(response.body[0].date);
        const date2 = Date.parse(response.body[1].date);
        expect(date1).toBeGreaterThanOrEqual(date2);
    }));
});
