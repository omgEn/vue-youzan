// import Mock from 'mockjs';
let Mock = require('mockjs');
let Random = Mock.Random;

console.log('---', Mock);

var data = Mock.mock('http://localhost:8080/user', {
  'name:': '@name',
  id: '@id',
});

module.exports = () => {
  return data;
};
