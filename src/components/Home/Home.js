import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CategoryCard from '../CategoryCard/CategoryCard';
import BarChart from '../BarChart/BarChart';
import logoImage from '../../assets/logo.png';
import loadingImage from '../../assets/loading.gif';
import activeMaskImage from '../../assets/icon-active.svg';
import './Home.css';

class Home extends Component {
  static propTypes = {
    goToHomePage: PropTypes.func,
    goToCategoriesPage: PropTypes.func,
  };

  state = {
    categories: [],
    selectedFirstCategory: '',
    selectedSecondCategory: '',
    isLoadingOpened: false,
    firstReportInformation: null,
    secondReportInformation: null,
    showMessageError: false,
    colors: ['#aaaaaa', '#e12021' ,'#4443cd'],
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
      this.setState({
        categories: categories,
        selectedFirstCategory: categories[0].id,
        selectedSecondCategory: categories[1].id,
      });
    // });
  };

  onChangeFirstCategory = (e) => {
    this.setState({ selectedFirstCategory: e.target.value });
  };

  onChangeSecondCategory = (e) => {
    this.setState({ selectedSecondCategory: e.target.value });
  };

  onClickSearch = () => {
    const {
      selectedFirstCategory,
      selectedSecondCategory,
      colors,
    } = this.state;

    this.setState({
      isLoadingOpened: true,
      firstReportInformation: null,
      secondReportInformation: null,
      showMessageError: false,
    }, () => {
      setTimeout(() => {
        if ((selectedFirstCategory === '4' && selectedSecondCategory === '5')
          || (selectedFirstCategory === '5' && selectedSecondCategory === '4'))
        {
          // fetch('http://a8878aed.ngrok.io/api/v1/messages/type_genre/')
          // .then(response => (response.json()))
          // .then(report => {
            const violenceType = [{
              name: 'Fisica',
              color: colors[0],
            }, {
              name: 'Sexual',
              color: colors[1],
            }, {
              name: 'Emocional',
              color: colors[2],
            }];

            let chartContent = [];

            const femaleEntry = {
              name: 'Femenino',
              Fisica: 30, // report.entries.Femenino.fisica,
              Sexual: 50, // report.entries.Femenino.sexual,
              Emocional: 89, // report.entries.Femenino.emocional,
              ant: 1000,
            };

            const masculineEntry = {
              name: 'Masculino',
              Fisica: 102, // report.entries.Masculino.fisica,
              Sexual: 12, // report.entries.Masculino.sexual,
              Emocional: 87, // report.entries.Masculino.emocional,
              ant: 2000,
            };

            const chartContentKeys = violenceType.map(item => ({
              name: item.name,
              color: item.color,
            }));

            chartContent.push(femaleEntry);
            chartContent.push(masculineEntry);

            this.setState({
              isLoadingOpened: false,
              firstReportInformation: {
                violenceType: violenceType,
                chartContent: chartContent,
                chartContentKeys: chartContentKeys,
              },
              secondReportInformation: null,
            });
          // });
        } else if ((selectedFirstCategory === '3' && selectedSecondCategory === '6')
          || (selectedFirstCategory === '6' && selectedSecondCategory === '3'))
        {
          fetch('http://a8878aed.ngrok.io/api/v1/messages/section_emotion/')
          .then(response => (response.json()))
          .then(report => {
            const feelingType = report.classrooms.map((type, key) => ({
              name: type === 'negative' ? 'Negativo' : (type === 'positive' ? 'Positivo' : (type === 'neutral' ? 'Neutral' : '')),
              color: colors[key],
            }));

            let chartContent = [];

            const firstC = {
              name: '1ero. Sec. C',
              Negativo: report.entries['1ero-C'].negative,
              Positivo: report.entries['1ero-C'].positive,
              Neutral: report.entries['1ero-C'].neutral,
              ant: 1000,
            };

            const chartContentKeys = feelingType.map(item => ({
              name: item.name.replace(/\b\w/g, function(l){ return l.toUpperCase() }),
              color: item.color,
            }));

            chartContent.push(firstC);

            this.setState({
              isLoadingOpened: false,
              secondReportInformation: {
                feelingType: feelingType,
                chartContent: chartContent,
                chartContentKeys: chartContentKeys,
              },
              firstReportInformation: null,
            });
          });
        } else {
          this.setState({showMessageError: true});
        }

        this.setState({
          isLoadingOpened: false,
        });
      }, 2000);
    });

  };

  render() {
    const {
      goToHomePage,
      goToCategoriesPage,
    } = this.props;

    const {
      categories,
      selectedFirstCategory,
      selectedSecondCategory,
      isLoadingOpened,
      firstReportInformation,
      secondReportInformation,
      showMessageError,
    } = this.state;

    return (
      <div className="Home">
        <div className="HomeSection IsBlue">
          <div className="HomeHeader">
            <a onClick={goToHomePage}>
              <div className="HomeLogoWrapper">
                <img src={logoImage} alt="Logo SF" className="HomeLogo"/>
              </div>
            </a>
            <div className="HomeHeaderLinks">
              <a onClick={goToHomePage} className="HomeHeaderLink">
                <div>HOME</div>
              </a>
              <a onClick={goToCategoriesPage} className="HomeHeaderLink">
                <div>CATEGORÍAS</div>
              </a>
            </div>
          </div>
        </div>
        <div className="HomeSection">
          <div className="HomeContent">
            <h1 className="HomeTitle">
              Descubre información relevante sobre el pensamiento de los niños y adolescentes en el Perú.
            </h1>
            <div className="HomeFilters">
              <div className="HomeFilterWrapper">
                <div className="HomeFilterInputGroup">
                  <label htmlFor="" className="HomeFilterLabel">Primera Categoría</label>
                  <select
                    name="category"
                    id="category"
                    value={selectedFirstCategory}
                    className="HomeFilterInput"
                    onChange={this.onChangeFirstCategory}
                  >
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>{category.name}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="HomeFilterWrapper">
                <div className="HomeFilterInputGroup">
                  <label htmlFor="" className="HomeFilterLabel">Segunda Categoría</label>
                  <select
                    name="category"
                    id="category"
                    value={selectedSecondCategory}
                    className="HomeFilterInput"
                    onChange={this.onChangeSecondCategory}
                  >
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>{category.name}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="HomeFilterWrapper HasButton">
                <div className="HomeFilterButton" onClick={this.onClickSearch}>
                  BUSCAR
                </div>
              </div>
            </div>
          </div>
        </div>
        {
          isLoadingOpened
          ? <div className="HomeSection HasLoading">
              <div className="HomeLoading">
                <img src={loadingImage} alt="" className="HomeLoadingImage"/>
              </div>
            </div>
          : ''
        }
        {
          firstReportInformation || secondReportInformation
          ? <div className="HomeSection">
              <div className="HomeContent">
                <h2 className="HomeSecondaryTitle">
                  Resultados de Búsqueda
                </h2>
                {
                  firstReportInformation
                  ? <div className="HomeReport">
                      <h3 className="HomeSubtitle IsReport">
                        Tipos de Violencia
                      </h3>
                      <div className="HomeBar">
                        {firstReportInformation.violenceType.map(violence => (
                          <div className="HomeBarItem" key={violence.name}>
                            <div className="HomeBarItemLine" style={{backgroundColor: violence.color}}></div>
                            <span>{violence.name}</span>
                          </div>
                        ))}
                      </div>
                      <h3 className="HomeSubtitle IsReport">
                        Gráfico de barras
                      </h3>
                      <div className="HomeChart">
                        <BarChart chartContent={firstReportInformation.chartContent} chartContentKeys={firstReportInformation.chartContentKeys}/>
                        <div className="HomeChartMessage">
                          El presente gráfico muestra el número de casos reportados clasificados por <strong>Tipo de Violencia</strong> y <strong>Género</strong> del niño y adolescente.
                        </div>
                      </div>
                    </div>
                  : ''
                }
                {
                  secondReportInformation
                  ? <div className="HomeReport">
                      <h3 className="HomeSubtitle IsReport">
                        Clasificación de Emociones
                      </h3>
                      <div className="HomeBar">
                        {secondReportInformation.feelingType.map(feeling => (
                          <div className="HomeBarItem" key={feeling.name}>
                            <div className="HomeBarItemLine" style={{backgroundColor: feeling.color}}></div>
                            <span>{feeling.name}</span>
                          </div>
                        ))}
                      </div>
                      <h3 className="HomeSubtitle IsReport">
                        Gráfico de barras
                      </h3>
                      <div className="HomeChart">
                        <BarChart chartContent={secondReportInformation.chartContent} chartContentKeys={secondReportInformation.chartContentKeys}/>
                        <div className="HomeChartMessage">
                          El presente gráfico muestra el número de casos reportados clasificados por <strong>Tipo de Emoción</strong> y <strong>Grado o Sección</strong> al que pertenece el niño o adolescente.
                        </div>
                      </div>
                    </div>
                  : ''
                }
              </div>
            </div>
          : ''
        }
        {
          showMessageError
          ? <div className="HomeSection">
              <div className="HomeContent">
                <h2 className="HomeSecondaryTitle">
                  Resultados de Búsqueda
                </h2>
                <div className="HomeReport">
                  <h3 className="HomeSubtitle IsReport">
                    Lo sentimos no encontramos coincidencias con los filtros ingresados. No te desanimes prueba con otras opciones.
                  </h3>
                </div>
              </div>
            </div>
          : ''
        }
        <div className="HomeSection IsGray">
          <div className="HomeContent">
            <h3 className="HomeSubtitle">
              Nuestras Categorías
            </h3>
            <div className="HomeCategoryCards">
              {
                categories.map(category => (
                  <CategoryCard key={category.id} category={category}></CategoryCard>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
