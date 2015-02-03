var React = require('react');

var SearchSelectBox = require('./search-select-box.js');

var data = [
  {name: 'bob', selected: false},
  {name: 'fred', selected: false},
  {name: 'mike', selected: false},
  {name: 'billy', selected: false},
  {name: 'kevin', selected: false},
  {name: 'john', selected: false},
]

var onAdd = function(data) {
  console.log(JSON.stringify(data));
};

window.onload = function() {
  React.render(<SearchSelectBox results={data} onAdd={onAdd} />, document.body);
}
