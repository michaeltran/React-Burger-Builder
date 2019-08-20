import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal.js';
import Aux from '../Auxiliary/Auxiliary.js';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        constructor(props) {
            super(props);

            this.requestInterceptor = axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            });

            this.responseIntereptor = axios.interceptors.response.use(res => res, error => {
                this.setState({error: error});
            });
        }

        state = {
            error: null
        };

        componentWillUnmount() {
            console.log('unmt')
            // console.log('Will Unmount', this.requestInterceptor, this.responseIntereptor);
            axios.interceptors.request.eject(this.requestInterceptor);
            axios.interceptors.response.eject(this.responseIntereptor);
        };

        errorConfirmedHandler = () => {
            this.setState({error: null});
        };

        render() {
            return (
                <Aux>
                    <Modal 
                        show={this.state.error}
                        modalClosed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            );
        }
    };
};

export default withErrorHandler;