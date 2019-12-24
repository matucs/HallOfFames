import React, { PureComponent } from 'react'

class DetailUi extends PureComponent {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="card mx-auto mt-5 p-5">
                        <img className="img-thumbnail mr-5" src={this.props.location.state.image} />
                        <div>
                            <p>{this.props.location.state.name}</p>
                            <p>{this.props.location.state.dob}</p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default DetailUi
