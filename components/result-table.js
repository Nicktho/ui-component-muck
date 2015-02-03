var React = require('react');

var ResultRow = require('./result-row');

var ResultTable = React.createClass({
  render: function() {
    var rows = [];
    this.props.results.forEach(function(result) {
      if (result.name.indexOf(this.props.filterText) === -1)
        return;

      rows.push(
        <ResultRow result={result} key={result.name} onResultClick={this.props.onResultClick}/>
      );
    }.bind(this));
    return(
      <table>
        <tbody>{rows}</tbody>
      </table>
    );
  }
});

module.exports = ResultTable;
