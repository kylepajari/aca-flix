import React, { Component } from "react";
import PropTypes from "prop-types";
import "./App.css";
import Logo from "./Logo.js";
import TitleList from "./components/TitleList";
import Hero from "./components/Hero";
import SearchBox from "./components/SearchBox";
import Navigation from "./components/Navigation";
import UserProfile from "./components/UserProfile";
import { connect } from "react-redux";
import { loadMyMovieList } from "./actions/index";
/* eslint-disable no-console */

class App extends Component {
  componentDidMount() {
    this.props.loadMyMovieList();
  }

  render() {
    console.log("app props:", this.props);
    return (
      <div>
        <header className="Header">
          <Logo />

          <Navigation />

          <SearchBox />

          <UserProfile />
        </header>
        <Hero />
        <TitleList title="Search Results" movies={this.props.searchResults} />
        <TitleList title="My Movies" movies={this.props.myMovieList} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("app mapstatetoprops state:", state);

  return {
    myMovieList: state.myMovieList,
    searchResults: state.searchResults
  };
};

App.propTypes = {
  searchResults: PropTypes.array,
  myMovieList: PropTypes.array,
  loadMyMovieList: PropTypes.func
};

export default connect(
  mapStateToProps,
  { loadMyMovieList }
)(App);
