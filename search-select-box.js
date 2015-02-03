var React = require('react');

var SearchBar = require('./components/searchbar');
var ResultTable = require('./components/result-table');

var SearchSelectBox = React.createClass({
  getInitialState: function() {
    return {
      filterText: '',
      results: this.props.results
    };
  },

  handleUserInput: function(filterText) {
    this.setState({
      filterText: filterText
    });
  },

  handleClick: function(name) {
    this.setState({
      results: this.state.results.map(function(result) {
        if (result.name === name)
          result.selected = !result.selected;

        return result;
      })
    });
  },

  handleAdd: function() {
    this.props.onAdd(this.state.results);
  },

  render: function() {
    return (
      <div>
        <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput} />
        <button onClick={this.handleAdd}> Add </button>
        <ResultTable results={this.state.results} filterText={this.state.filterText} onResultClick={this.handleClick} />
      </div>
    );
  }
});

module.exports = SearchSelectBox;
