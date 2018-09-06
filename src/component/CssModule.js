import React, { Component } from 'react';
import classNames from 'classnames/bind'
import styles from './CssModule.scss'

const cx = classNames.bind(styles)

class CssModule extends Component {
    render() {
        const isBlue = true;

        return (
            <div className = {cx('box', {
                'blue' : isBlue
            })}>
                <div className = {cx('box-inside')} />
            </div>
        );
    }
}

export default CssModule;