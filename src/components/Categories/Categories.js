import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CategoryCard from '../CategoryCard/CategoryCard';
import logoImage from '../../assets/logo.png';
import activeMaskImage from '../../assets/icon-active.svg';
import './Categories.css';

class Categories extends Component {
  static propTypes = {
    goToHomePage: PropTypes.func,
    goToCategoriesPage: PropTypes.func,
  };

  state = {
    categories: [],
  };

  componentDidMount() {
    // fetch('http://a8878aed.ngrok.io/api/v1/categories/')
    // .then(response => (response.json()))
    // .then(categories => {
      const categories = [
    {id: 7, name: 'Tema Tratado'},
    {id: 6, name: 'Emociones'},
    {id: 5, name: 'Tipo de Violencia'},
    {id: 4, name: 'Género'},
    {id: 3, name: 'Grado o Sección'},
    {id: 2, name: 'Ubicación'},
    {id: 1, name: '¿A quién se lo contó?'},
    ];
      this.setState({ categories: categories });
    // });
  };

  render() {
    const {
      goToHomePage,
      goToCategoriesPage,
    } = this.props;

    const {
      categories,
      selectedCategory,
      keywordValue,
    } = this.state;

    return (
      <div className="Categories">
        <div className="CategoriesSection IsRed">
          <div className="CategoriesHeader">
            <a onClick={goToHomePage}>
              <div className="CategoriesLogoWrapper">
                <img src={logoImage} alt="Logo SF" className="CategoriesLogo"/>
              </div>
            </a>
            <div className="CategoriesHeaderLinks">
              <a onClick={goToHomePage} className="CategoriesHeaderLink">
                <div>HOME</div>
              </a>
              <a onClick={goToCategoriesPage} className="CategoriesHeaderLink">
                <div>CATEGORÍAS</div>
              </a>
            </div>
          </div>
        </div>
        <div className="CategoriesSection">
          <div className="CategoriesContent">
            <h1 className="CategoriesTitle">
              Categorías
            </h1>
            <div className="CategoriesCategoryCards">
              {
                categories.map(category => (
                  <CategoryCard key={category.id} category={category} color={'blue'}></CategoryCard>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Categories;
