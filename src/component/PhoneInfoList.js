import React, { Component } from 'react'
import PhoneInfo from './PhoneInfo'

class PhoneInfoList extends Component {
    static defaultProps = {
        data: [],
    }
    render() {
        const { data, onRemove, onUpdate } = this.props;

        console.log('rendering list')
        const list = data.map(
            info => (
                <PhoneInfo
                    onUpdate = {onUpdate}
                onRemove = {onRemove}
                info = {info}
                key = {info.id}
                />
            )
        );
        return (
            <div>
                {list}
            </div>
        )
    }
}

export default PhoneInfoList;