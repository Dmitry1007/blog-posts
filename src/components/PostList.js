import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    findUserById(id) {
        const user = this.props.users.find(e => e.id === id)
        if (user !== undefined) {
            return user.name
        }
    }

    renderList() {
        return this.props.posts.map(post => {
            return (
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                            <h3>{this.findUserById(post.userId)}</h3>
                        </div>
                    </div>
                </div>
            );
        });
    }

    render() {
        return <div className="ui relaxed divided list">{this.renderList()}</div>;
    };
};

const mapStateToProps = state => {
    return { posts: state.posts, users: state.users };
}

export default connect(mapStateToProps, { fetchPosts })(PostList);