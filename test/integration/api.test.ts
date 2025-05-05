import supertest from 'supertest'
import app from '../../src/app'
import mongoose from 'mongoose'
import User from '../../src/models/User.model'
import UserModel from '../../src/models/User.model'

const api = supertest(app)
const newUsertest = {
  user: 'laura',
  password: '$2b$10$8doETYmZl8h.TbqjinN8EOuDr5gMw4yLcvVKF4leSRZ6c8fGPvdnC',
}

beforeAll(async () => {
  await mongoose.connect(
    'mongodb+srv://malexfuture:malex1524@cluster0.m2yho7v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
  )
  await UserModel.deleteMany()
  const user = new User(newUsertest)
  user.save()
})
afterAll(async () => {
  await mongoose.connection.close()
})
describe('user routes routes', () => {
  test('get user test ', async () => {
    await api
      .get('/api/user')
      .expect(200)
      .expect('content-type', /application\/json/)
    const response = await api.get('/api/user')
    const content = response.body.user.map(
      (user: { user: string }) => user.user
    )
    expect(content).toContain('laura')
  })
  test('post users', async () => {
    const usertest = {
      user: 'malex',
      password: '12345',
    }
    await api
      .post('/api/user')
      .send(usertest)
      .expect(200)
      .expect('content-type', /application\/json/)
  })
  test('delete user', async () => {
    const users = await api.get('/api/user')
    const userID = users.body.user.find(
      (user: { user: string }) => user.user === 'malex'
    )
    console.log()
    await api
      .delete(`/api/user/${userID._id}`)
      .expect(200)
      .expect('content-type', /application\/json/)
  })
})
