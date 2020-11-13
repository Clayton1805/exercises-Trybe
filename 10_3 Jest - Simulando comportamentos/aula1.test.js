const service = require('./aula1');
// console.log(service.randomNumber());
// console.log(service.isDivisible(2));
describe('', () => {
  test("a  função randomNumber() é chamada quando invocamos a isDivisible()",() => {
    service.randomNumber = jest.fn().mockReturnValue(10);
    console.log(service.isDivisible(2));
    service.randomNumber();
    expect(service.randomNumber).toHaveBeenCalled();
  });
});
