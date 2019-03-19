import React, { Fragment } from 'react';
import { connect } from "react-redux";

// Деструктируеться можно было б props.error
const ErrorMessage = ({ error }) => (
    <Fragment>{error.message && <div className='error'>{error.message}</div>}</Fragment>
);

export default connect( store => ({error: store.error}))(ErrorMessage);