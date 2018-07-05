import React, { Component } from 'react';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import Categories from './components/Categories/Categories';

const pages = {
  landing: 0,
  home: 1,
  categories: 2,
};

class App extends Component {
  state = {
    selectedPage: pages.landing,
  };

  goToHomePage = () => {
    this.setState({ selectedPage: pages.home });
  };

  goToCategoriesPage = () => {
    this.setState({ selectedPage: pages.categories });
  };

  render() {
    const {
      selectedPage,
    } = this.state;

    return (
      <div className="App">
        <div className={selectedPage === pages.landing ? '' : 'isHidden'}>
          <Landing goToHomePage={this.goToHomePage}/>
        </div>
        <div className={selectedPage === pages.home ? '' : 'isHidden'}>
          <Home goToHomePage={this.goToHomePage} goToCategoriesPage={this.goToCategoriesPage}/>
        </div>
        <div className={selectedPage === pages.categories ? '' : 'isHidden'}>
          <Categories goToHomePage={this.goToHomePage} goToCategoriesPage={this.goToCategoriesPage}/>
        </div>
      </div>
    );
  }
}

export default App;
