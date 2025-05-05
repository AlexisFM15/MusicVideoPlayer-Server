import { hashPassword, uncodePassword } from '../../src/libs/bcrypt'
// import { type hash } from 'bcrypt'

describe('bcrypt', () => {
  test('return password with correct hash', () => {
    const hashed = hashPassword('12345')
    expect(typeof hashed).toBe('string')
  })
  test('decode password with correct values', () => {
    const passdecoded = uncodePassword(
      '12345',
      '$2b$10$I2fopZ/HT5C3V2eJp0Pg4eKhAw1eatbgu8erY9zYe2eSx9UAvIIR6'
    )
    expect(passdecoded).toBeTruthy()
  })
})
