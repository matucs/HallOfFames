import React, { PureComponent, Fragment } from 'react'
import { logOut, getAsGuest } from './logic'
import { NavLink } from 'react-router-dom'
import './style.css'

class FameUi extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }
    componentDidMount() {
            this.loadUsers();
    }

    loadUsers = () => {
        getAsGuest(`http://localhost:3000/fames?guest=true`)
            .then(
                (result) => {
                    this.setState({
                        list: result,
                    })
                }
            )
    }
    logOut = () => {
        logOut();
        this.props.history.push('/')
    }
    render() {
        return (
            <div className="container ">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="navbar-nav">
                        <span className="mr-5"><b>{this.props.match.params.username}</b><smal> you are login </smal> </span>
                        <a onClick={this.logOut.bind(this)} className="btn btn-outline-primary" href="#">Log Out <span class="sr-only">(current)</span></a>
                    </div>
                </nav>
                <div className="row">
                    <div className="card mx-auto mt-5 p-1 bg-secondary">
                        <ul className="list-group">
                            {
                                this.state.list.map((r) =>
                                    <Fragment key={r.id}  >
                                        <NavLink to={{
                                            pathname: '/detail',
                                            state: {
                                                name: r.name,
                                                dob: r.dob,
                                                image: r.image
                                            }
                                        }}>
                                            <li className="list-group-item mb-2">{
                                                <div className="row" >
                                                    <img className="fameImg img-thumbnail rounded mr-4" src={r.image} />
                                                    <div>
                                                        <p>{r.name} </p>
                                                        <p>{r.dob} </p>
                                                    </div>
                                                </div>
                                            }
                                            </li>
                                        </NavLink>
                                    </Fragment>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div >
        )
    }
}

export default FameUi 
