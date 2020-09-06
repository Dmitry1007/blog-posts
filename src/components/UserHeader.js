import React from 'react';
import { connect } from 'react-redux'
import { fetchUser } from '../actions';

class UserHeader extends React.Component {
    componentDidMount() {
        this.props.fetchUser(this.props.userId);
    }

    renderUser() {
        const user = this.props.users.find(e => e.id === this.props.userId);
        if (!user) {
            return null;
        }
        return user.name
    }

    render() {
        return <p>{this.renderUser()}</p>;
    };
}

const mapStateToProps = state => {
    return { users: state.users }
}

export default connect(mapStateToProps, { fetchUser })(UserHeader);