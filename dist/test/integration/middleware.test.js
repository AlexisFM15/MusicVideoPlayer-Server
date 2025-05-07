"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../src/app"));
const api = (0, supertest_1.default)(app_1.default);
describe('middleware', () => {
    test('middleware reject correctly with no token ', async () => {
        const response = await api.get('/api/music').expect(401);
        expect(response.text).toContain('Invalid token, Access denied');
    });
});
