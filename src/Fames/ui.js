import React, { PureComponent, Fragment } from 'react'
import { getListWithAuthorization, getAsGuest } from './logic'
import { NavLink } from 'react-router-dom'

class FameUi extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            page: 1,
            total: 0,
            perPage: 4,
            paginationItems: []
        }
    }
    componentDidMount() {
        this.loadUsers(this.state.page);
    }

    loadUsers = (page) => {
        const tempList = [];
        getAsGuest(`http://localhost:3000/fames?guest=true`)
        .then(
            (result) => {console.log(result)
                result.forEach(element => {
                    tempList.push(element);
                });
                this.setState({
                    list: tempList,
                    // page: page,
                    // total: result.data.total,
                    // perPage: result.data.per_page,
                    // paginationItems: Array.from(Array(result.data.total / result.data.per_page).keys())
                })
            }
        )
    }
    pageClick = (page) => {
        if (page === 'next') {
            this.setState({
                page: ++page
            });
            this.loadUsers(this.state.page)
        } else {
            this.loadUsers(page)
        }
    }
    render() {
        return (
            <div className="container ">
                <div className="row">
                    <div className="card mx-auto mt-5 p-5 bg-secondary">
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
                                                    <img className="img-fluid mr-5" src={r.image} />
                                                    <div>
                                                        <p>{r.name} {r.dob}</p>
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
                        <nav >
                            <ul className="pagination ml-5">
                                {
                                    this.state.paginationItems.map((p, index) =>
                                        <li key={index} className="page-item"><input type="button" value={index + 1} onClick={() => this.pageClick(index + 1)} className="page-link" href="#"></input></li>
                                    )
                                }
                            </ul>
                        </nav>
                    </div>
                </div>
            </div >
        )
    }
}

export default FameUi 
