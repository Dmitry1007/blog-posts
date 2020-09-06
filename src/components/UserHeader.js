import React from 'react';
import { connect } from 'react-redux'
import { fetchUser } from '../actions';

class UserHeader extends React.Component {
    componentDidMount() {
        this.props.fetchUser(this.props.Id);
    }

    render() {
        console.log(this.props.user.name)
        return <p>{this.props.user.name}</p>;
    };
}

const mapStateToProps = state => {
    return { user: state.users }
}

export default connect(mapStateToProps, { fetchUser })(UserHeader);