/* global describe beforeEach it */

const { expect } = require('chai');
const request = require('supertest');
const db = require('../db');
const app = require('../index');
const Car = db.model('car');

describe('Car routes', () => {
  beforeEach(() => {
    return db.sync({ force: true });
  });

  describe('GET /api/cars/', () => {
    it('fetches all Cars', async () => {
      const cars = [
        Car.create({
          name: 'Ferrari',
          model: 'F430',
          year: 2018,
          color: 'Metallic Red',
          description: 'Brand New',
          specification: 'V20 engine',
          price: 200000,
          rating: [5],
          imageUrl:
            'http://www.exoticcarhacks.com/wp-content/uploads/2016/08/f430.jpg',
          country: 'Italy'
        }),
        Car.create({
          name: 'Lamborghini',
          model: 'LP720-4',
          year: 2018,
          color: 'Midnight Blue',
          description: 'Brand New',
          specification: 'V100 engine',
          price: 1000000,
          rating: [5],
          imageUrl:
            'http://www.exoticcarhacks.com/wp-content/uploads/2016/08/f430.jpg',
          country: 'Italy'
        })
      ];
      await Promise.all(cars);
      await request(app)
        .get('/api/cars')
        .expect(200)
        .then(res => {
          expect(res.body).to.have.lengthOf(cars.length);
        });
    });
  }); // end describe('/api/users')
}); // end describe('User routes')
