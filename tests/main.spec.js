import { expect } from 'chai'
import { sum, sub, mult, div } from '../src/main'

describe('Calc', () => {
  // smoke tests
  describe('Smoke tests', () => {

    it('should exists the method sum', () => {
      expect(sum).to.exist
      expect(sum).to.be.a('function')
    })
    it('should exists the method sub', () => {
      expect(sub).to.exist
      expect(sub).to.be.a('function')
    })
    it('should exists the method mult', () => {
      expect(mult).to.exist
      expect(mult).to.be.a('function')
    })
    it('should exists the method div', function () {
      expect(div).to.exist
      expect(div).to.be.a('function')
    })
  })

  describe('Sum', () => {
    it('should return 4 when `sum(2,2)`', () => {
      expect(sum(2, 2)).to.be.equal(4)
    })
  })
  describe('Sub', () => {
    it('should return 4 when `sub(6,2)`', () => {
      expect(sub(6, 2)).to.be.equal(4)
    })
    it('should return -4 when `sub(6,10)`', () => {
      expect(sub(6, 10)).to.be.equal(-4)
    })
  })

  describe('Mult', () => {
    it('should return 12 when `mult(6,2)`', () => {
      expect(mult(6, 2)).to.be.equal(12)
    })
  })

  describe('Div', () => {
    it('should return 5 when `div(25,5)`', () => {
      expect(div(25, 5)).to.be.equal(5)
    })
    it('should return `Não é possivel divisao por zero` when divide by 0', () => {
      expect(div(4, 0)).to.be.equal('Não é possivel divisao por zero')
    })
  })

})
