import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStreams } from '../../actions';

class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin = stream => {
    if (this.props.currentUserId === stream.userId) {
      return (
        <div className="right floated content">
          <Link to="/streams/delete" className="ui button red">
            Delete
          </Link>
          <Link to="/streams/edit" className="ui button orange">
            Edit
          </Link>
        </div>
      );
    }
  };

  renderList = streams => {
    if (!streams) {
      return <div>No streams found</div>;
    }
    return streams.map(stream => (
      <div className="item" key={stream.id}>
        {this.renderAdmin(stream)}
        <i className="large middle aligned icon camera" />
        <div className="content">
          <h4>{stream.title}</h4>
          <div className="description">
            <p>{stream.description}</p>
          </div>
        </div>
      </div>
    ));
  };

  renderCreate = () => {
    if (this.props.isSignedIn) {
      return (
        <Link to="/streams/new" className="ui button primary">
          Create Stream
        </Link>
      );
    }
  };

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList(this.props.streams)}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = ({ streams, auth }) => {
  return {
    streams: Object.values(streams),
    currentUserId: auth.userId,
    isSignedIn: auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { fetchStreams }
)(StreamList);
