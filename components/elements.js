import Theme from '../styles/theme';
import React, { useState } from 'react';
import {isMobile} from 'react-device-detect';

export const Span = ({padding, children, background}) => {

    return (
        <div className='span'>
            {children}
            <style jsx>{`
                .span {
                    float: left;
                    width: 100%;
                    padding: ${padding}px 0px;
                    background: ${background};
                }
            `}</style>
        </div>
    )
}

export class Row extends React.Component {
    render () {
        const colcount = React.Children.count(this.props.children)
        const newchildren = React.Children.map(this.props.children, child => {
            return React.cloneElement(child, {width: (100 / colcount), height: this.props.height})
        })
        return (
            <div className='row'>
                {newchildren}
                <style jsx>{`
                    .row {
                        float: left;
                        width: ${this.props.padding ? 100 - (this.props.padding * 2): 100}%;
                        padding: 0 ${this.props.padding}%;
                        margin: ${this.props.margin};
                        background: ${this.props.background};
                        min-height: 200px;
                        height: ${this.props.height};
                    }
                `}</style>
            </div>
        )        
    }
}

export const Col = ({padding, children, background, margin, width, height}) => {
    return (
        <div className='col'>
            {children}
            <style jsx>{`
                .col {
                    float: left;
                    position: relative;
                    width: ${width}%;
                    padding: ${padding};
                    margin: ${margin};
                    background: ${background};
                    min-height: 200px;
                    height: ${height};
                }
                @media only screen and (max-width: 600px) {
                    .col {
                        width: 100%;
                    }
                }
            `}</style>
        </div>
    )
}
