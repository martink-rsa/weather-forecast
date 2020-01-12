/* eslint-disable arrow-parens */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '0 4px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.8)',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    paddingLeft: '20px',
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

// Component to search for a City
export default function SearchBar(props) {
  const classes = useStyles();
  const { handleSearchInput, handleSubmit } = props;

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <Paper className={classes.root}>
        {/*         <IconButton className={classes.iconButton} aria-label="menu">
          <MenuIcon />
        </IconButton> */}
        <InputBase
          className={classes.input}
          placeholder="City, Country Code"
          inputProps={{ 'aria-label': 'search for city and country' }}
          onChange={e => handleSearchInput(e.target.value)}
          autoFocus
        />
        <Divider className={classes.divider} orientation="vertical" />
        <FormControl margin="normal">
          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </FormControl>
      </Paper>
    </form>
  );
}

SearchBar.propTypes = {
  handleSearchInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
