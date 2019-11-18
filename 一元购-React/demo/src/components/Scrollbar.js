import React, { Component } from 'react'

export default class Scrollbar extends Component {
    render() {
        let { banner } = this.props;
        return (
            <>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {
                            banner && banner.map((item, index) => {
                                return (<div key={index} className="swiper-slide"><img src={item.url} alt="" /></div>)
                            })
                        }
                    </div>
                </div>
            </>
        )
    }
}
