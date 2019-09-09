import React, { Component } from "react";
import { connect } from "react-redux";
import Foto from "./foto";
import Search from "./search";
import { fetchFotos } from "./js/actions/listActions";

class FotoList extends Component {
  componentDidMount() {
    this.props.dispatch(fetchFotos());
  }
  handleLoadMore = () => {
    this.setState(prev => {
      return { visible: prev.visible + 3 };
    });
  };
  handleCollapse = () => {
    this.setState({ visible: 3 });
  };
  render() {
    const { fotos, queryString, searchType, error, loading } = this.props;
    console.log(fotos);
    const filteredFotos = queryString
      ? fotos.filter(foto =>
          foto[searchType].toLowerCase().startsWith(queryString)
        )
      : fotos;
    console.log(filteredFotos);
    console.log(filteredFotos.length);
    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }
    return (
      <React.Fragment>
        <Search />
        {filteredFotos.length ? (
          <div className="album py-5">
            <div className="container">
              <div className="row">
                {filteredFotos.map(foto => (
                  <Foto key={foto.id} foto={foto} />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <p>No fotos found</p>
        )}
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    fotos: state.fotos,
    queryString: state.queryString,
    searchType: state.searchType,
    loading: state.loading,
    error: state.error
  };
}
export default connect(mapStateToProps)(FotoList);
