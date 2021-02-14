import './Seller.css';
import React, { Component } from 'react';

class Seller extends Component {
    constructor(props) {
        super(props);
        this.details = this.props.details;
    }

    getRatings() {
        const li = [];
        for (let i = 1; i <= parseInt(this.details.ratings); i++) {
            li.push(<span className="star filled" key={i}>★</span>);
        }
        if (parseInt(this.details.ratings) !== this.details.ratings) {
            li.push(<span className="half-star" key={'x'}>
                <span className="star filled">★</span>
                <span className="star">★</span>
            </span>);
        }
        while (li.length < 5) {
            li.push(<span className="star" key={'y' + li.length}>★</span>);
        }
        return li;
    }

    render() {
        return (
            <div className="details">
                <h2>{this.details.sellerName}</h2>
                <div className="ratings">
                    {this.getRatings()}
                </div>
                <div className="row">
                    <div className="description">
                        {this.details.description}
                    </div>
                    <div className="address">
                        <pre>{this.details.address}</pre>
                        <p><strong>P.no :</strong>{this.details.phone}</p>
                    </div>
                </div>
                <p className="feedback-head">Feedback</p>
                <div className="feedbacks">
                    {this.details.feedbacks.map((feed, i) => {
                        return (<div className="feedback" key={i}>
                            <p className="feedback-stm">"{feed.feedback}"</p>
                            <div className="feedback-btm">
                                <span>By: <b>{feed.by}</b> </span>
                                <span>on <b>{feed.on}</b></span>
                            </div>
                        </div>);
                    })}
                </div>
            </div>
        );
    }
}
export default Seller;
