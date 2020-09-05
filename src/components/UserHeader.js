import React from 'react';
import { connect } from 'react-redux'
import { fetchUsers } from '../actions';

class UserHeader extends React.Component {
    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {
        return null;
    };
}

export default connect(null, { fetchUsers })(UserHeader);