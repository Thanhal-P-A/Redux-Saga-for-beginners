import React, { Component } from 'react';
import HomeScreen from './HomeScreen';
import { connect } from 'react-redux';
import * as postActions from '../../actions/postActions';

export class HomeScreenContainer extends Component {
    constructor(props) {
        super(props);
        
    }

    componentDidMount(){
        this.props.requestPost();
    }

    render() {
        return <HomeScreen {...this.props} />;
    }
}

function mapStateToProps(state) {
    return {
        post: state.postReducer.post
    };
}
function mapDispatchToProps(dispatch) {
    return {
        requestPost: () => dispatch(postActions.requestPost())
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeScreenContainer);
