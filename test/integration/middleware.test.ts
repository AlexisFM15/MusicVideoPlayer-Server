import supertest from 'supertest'
import app from '../../src/app'

const api = supertest(app)

describe('middleware', () => {
  test('middleware reject correctly with no token ', async () => {
    const response = await api.get('/api/music').expect(401)
    expect(response.text).toContain('Invalid token, Access denied')
  })
})
