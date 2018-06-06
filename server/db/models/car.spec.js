/* global describe beforeEach it */

const { expect } = require('chai');
const db = require('../index');
const Car = db.model('car');

describe('Car model', () => {
  beforeEach(() => {
    return db.sync({ force: true });
  });

  describe('creates vehicle information and saves into database', () => {
    describe('car model', () => {
      let car;

      beforeEach(() => {
        return Car.create({
          name: 'Corvette',
          model: 'ZF1',
          year: 2018,
          color: 'Ghost white',
          description: 'Brand New',
          specification: 'V20 engine',
          price: 100000,
          imageUrl:
            'http://www.stingrayforums.com/forum/attachments/purchasing/13098d1411290857-finally-got-my-2015-c7-arctic-white-great-site-great-people-zf1.1.jpg',
          country: 'USA'
        }).then(vehicle => {
          car = vehicle;
        });
      });

      it('name, model, color, desc, spec, img, country to be a string', () => {
        expect(typeof car.name).to.be.equal('string');
        expect(typeof car.model).to.be.equal('string');
        expect(typeof car.color).to.be.equal('string');
        expect(typeof car.description).to.be.equal('string');
        expect(typeof car.specification).to.be.equal('string');
        expect(typeof car.imageUrl).to.be.equal('string');
        expect(typeof car.country).to.be.equal('string');
      });

      it('year and price to be a number', () => {
        expect(typeof car.year).to.deep.equal('number');
        expect(typeof car.price).to.deep.equal('number');
      });
    }); // end describe('correctPassword')
  }); // end describe('instanceMethods')
}); // end describe('User model')
