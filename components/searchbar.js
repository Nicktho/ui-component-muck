var React = require('react');

var SearchBar = React.createClass({
  handleChange: function() {
    this.props.onUserInput(this.refs.filterTextInput.getDOMNode().value)
  },

  render: function() {
    return(
      <input type="text" placeholder="Search" ref="filterTextInput" value={this.props.filterText} onChange={this.handleChange}/>
    );
  }
});

module.exports = SearchBar;
