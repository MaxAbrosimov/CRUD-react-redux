import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

export default class ListExampleNested extends React.Component {

  state = {
    open: false,
  };

  handleToggle = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  handleNestedListToggle = (item) => {
    console.log(item);
  };

  renderListWithSubLists = (genre, selected) => {
    const {onGenreClick} = this.props;
    return (
      <ListItem
        key={genre.id}
        onClick={() => onGenreClick(genre.id)}
        primaryText={genre.name}
        style={{backgroundColor: selected === genre.id ? '#f1eded': ''}}
        nestedItems={genre.children ? genre.children.map(c => this.renderListWithSubLists(c, selected)) : []}
      />
    );
  };


  render() {
    const {genres, selectedGenre} = this.props;
    return (
        <List style={{height: 600, overflow: 'auto', direction: 'ltr'}}>
          <Subheader>Genres</Subheader>
          {(genres || []).map(g => this.renderListWithSubLists(g, selectedGenre))}
        </List>
    );
  }
}