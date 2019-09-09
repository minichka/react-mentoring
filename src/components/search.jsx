import React from "react";
import { connect } from "react-redux";
import { searchFoto, changeSearchType } from "./js/actions/index";
//import { searchStyle } from "./../styles/style";
import backGroudImage from "../image/netflix.png";

const Search = props => {
  return (
    <div
      style={{
        background:
          "linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.45) )," +
          `url(${backGroudImage})`
      }}
      align="center"
    >
      <h3 align="left" style={{ color: "#DC225A" }}>
        netflixroulette
      </h3>
      <h5>Find your foto</h5>
      <form>
        <i className="fas fa-search" aria-hidden="true" />
        <input
          className="form-control form-control-sm ml-3 w-75"
          type="text"
          placeholder="Search"
          aria-label="Search"
          onChange={e => props.onSearchChange(e.currentTarget.value)}
        />
      </form>
      <p>Search by:</p>
      <ul className="list-group" display="inline" style={{ width: "50%" }}>
        {props.params.map(param => (
          <li
            key={param}
            onClick={e => props.onSearchTypeChange(param)}
            className={
              props.searchType === param.toLowerCase()
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {param}
          </li>
        ))}
      </ul>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    params: state.searchParams,
    searchType: state.searchType
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onSearchChange: query => dispatch(searchFoto(query)),
    onSearchTypeChange: param =>
      dispatch(changeSearchType(param.toString().toLowerCase()))
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
