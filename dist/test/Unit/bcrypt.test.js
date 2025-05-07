"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = require("../../src/libs/bcrypt");
// import { type hash } from 'bcrypt'
describe('bcrypt', () => {
    test('return password with correct hash', () => {
        const hashed = (0, bcrypt_1.hashPassword)('12345');
        expect(typeof hashed).toBe('string');
    });
    test('decode password with correct values', () => {
        const passdecoded = (0, bcrypt_1.uncodePassword)('12345', '$2b$10$I2fopZ/HT5C3V2eJp0Pg4eKhAw1eatbgu8erY9zYe2eSx9UAvIIR6');
        expect(passdecoded).toBeTruthy();
    });
});
