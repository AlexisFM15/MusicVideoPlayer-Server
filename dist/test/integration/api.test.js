"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../src/app"));
const mongoose_1 = __importDefault(require("mongoose"));
const User_model_1 = __importDefault(require("../../src/models/User.model"));
const User_model_2 = __importDefault(require("../../src/models/User.model"));
const api = (0, supertest_1.default)(app_1.default);
const newUsertest = {
    user: 'laura',
    password: '$2b$10$8doETYmZl8h.TbqjinN8EOuDr5gMw4yLcvVKF4leSRZ6c8fGPvdnC',
};
beforeAll(async () => {
    await mongoose_1.default.connect('mongodb+srv://malexfuture:malex1524@cluster0.m2yho7v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    await User_model_2.default.deleteMany();
    const user = new User_model_1.default(newUsertest);
    user.save();
});
afterAll(async () => {
    await mongoose_1.default.connection.close();
});
describe('user routes routes', () => {
    test('get user test ', async () => {
        await api
            .get('/api/user')
            .expect(200)
            .expect('content-type', /application\/json/);
        const response = await api.get('/api/user');
        const content = response.body.user.map((user) => user.user);
        expect(content).toContain('laura');
    });
    test('post users', async () => {
        const usertest = {
            user: 'malex',
            password: '12345',
        };
        await api
            .post('/api/user')
            .send(usertest)
            .expect(200)
            .expect('content-type', /application\/json/);
    });
    test('delete user', async () => {
        const users = await api.get('/api/user');
        const userID = users.body.user.find((user) => user.user === 'malex');
        await api
            .delete(`/api/user/${userID._id}`)
            .expect(200)
            .expect('content-type', /application\/json/);
    });
});
