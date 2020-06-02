import React from "react";
import {Link} from "react-router-dom";

import api from "../api";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import BadgeDetails from "./BadgeDetails";

class BadgeDetailsContainer extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
    modalIsOpen: false,
  };

  componentDidMount() {
    this.fecthData();
  }
  handleOpenModal = (e) => {
    this.setState({
      modalIsOpen: true,
    });
  };
  handleCloseModal = (e) => {
    this.setState({
      modalIsOpen: false,
    });
  };
  handleDeleteBadge = async () => {
    this.setState({
      loading: false,
      error: null,
    });
    try {
      await api.badges.remove(this.props.match.params.badgeId);
      this.props.history.push("/badges");
      this.setState({
        loading: true,
      });
    } catch (error) {
      this.setState({
        loading: true,
        error,
      });
    }
  };
  async fecthData() {
    this.setState({loading: true, error: null});

    try {
      let data = await api.badges.read(this.props.match.params.badgeId);
      this.setState({
        loading: false,
        data,
      });
    } catch (error) {
      this.setState({
        loading: false,
        error,
      });
    }
  }
  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }
    if (this.state.error) {
      return <PageError />;
    }
    return (
      <BadgeDetails
        onCloseModal={this.handleCloseModal}
        onOpenModal={this.handleOpenModal}
        onDeleteBadge={this.handleDeleteBadge}
        modalIsOpen={this.state.modalIsOpen}
        badge={this.state.data}
      />
    );
  }
}
export default BadgeDetailsContainer;
