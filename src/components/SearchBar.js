import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  RevBase() {
    const array1 = [2, 4, 6, 8, 10];
    const array2 = [1, 3, 5, 6, 77];
    array1.forEach((num) => {
      if (array2.indexOf(num) > -1) {
        return num;
      }
    });
  }

  render() {
    return (
      <div className='ui segment'>
        <form onSubmit={this.onFormSubmit} className='ui form'>
          <div className='field'>
            <label>Image Search</label>
            <input
              type='text'
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
        <div>{this.RevBase()}</div>
      </div>
    );
  }
}

export default SearchBar;
