import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CategoryCard.css';

class CategoryCard extends Component {
  static propTypes = {
    category: PropTypes.object,
    color: PropTypes.string,
  };

  state = {
    isHover: false,
  };


  render() {
    const {
      category,
      color,
    } = this.props;

    const {
      isHover,
    } = this.state;

    const theme = color === 'blue' ? color : 'red';

    return (
      <div
        className={`CategoryCard is-${theme}`}
        onMouseOver={() => {this.setState({isHover: true})}}
        onMouseLeave={() => {this.setState({isHover: false})}}
      >
        <div className="CategoryCardImageWrapper">
          <span className={`icon icon-category-${category.id} is-${theme} ${isHover ? 'is-active' : ''}`}></span>
        </div>
        <p className={`CategoryCardTitle ${isHover ? 'IsActive' : ''}`}>{category.name}</p>
      </div>
    );
  }
}

export default CategoryCard;