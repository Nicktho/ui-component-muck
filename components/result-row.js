var React = require('react');

var ResultRow = React.createClass({
  handleClick: function() {
    this.props.onResultClick(
      this.props.result.name
    )
  },

  render: function() {
    var selectedStyle = {
      color: this.props.result.selected ? 'blue' : 'black'
    };

    var name = <span style={selectedStyle}> { this.props.result.name } </span>;

    var action = this.props.result.selected ? '-' : '+'

    return (
      <tr>
        <td>{name}</td>
        <td>
          <button onClick={this.handleClick}>{action}</button>
        </td>
      </tr>
    )
  }
});

module.exports = ResultRow;
