/* eslint-disable arrow-parens */
import React from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import SearchInputControl from '../SearchInputControl/SearchInputControl';

// Component to search for a City
class SearchBar extends React.Component {
  constructor(props) {
    super();
    this.state = {
      searchInput: '',
    };
  }

  handleChange = event => {
    // Update the search bar
    this.setState({
      searchInput: event.target.value,
    });
  };

  handleSubmit = event => {
    const { searchInput } = this.state;
    const { submitSearch } = this.props;
    event.preventDefault();
    console.log('Handle submit');
    submitSearch(searchInput);
  };

  render() {
    const { searchInput } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <FormControl margin="normal" fullWidth>
          <SearchInputControl
            searchInput={searchInput}
            handleChange={this.handleChange}
          />
        </FormControl>
      </form>
    );
  }
}

SearchBar.propTypes = {
  submitSearch: PropTypes.func.isRequired,
};

export default SearchBar;
