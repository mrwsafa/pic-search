import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, InputBase, IconButton, Divider } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '5px 10px',
    display: 'flex',
    alignItems: 'center',
    margin: 10,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

const SearchBar = ({ gonder }) => {
  const classes = useStyles();
  const [term, setTerm] = useState('');

  const onFormSubmit = (event) => {
    event.preventDefault();
    gonder(term);
  };

  return (
    <Paper component="form" onSubmit={onFormSubmit} className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />

      <Divider className={classes.divider} orientation="vertical" />
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;