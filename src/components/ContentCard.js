import React from 'react';

class ContentCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }
    render() {
        return (
            <div className={this.props.fullWidth ? "col-lg-12 mb-4" : "col-lg-6 mb-4"}>
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">{this.props.title}</h6>
                    </div>
                    <div className="card-body">{this.props.children}</div>
                </div>
            </div>
        );
    }
}

export default ContentCard;