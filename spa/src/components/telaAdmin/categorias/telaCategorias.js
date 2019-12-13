import React, { Component } from 'react'
import SearchBar from '../searchBar/searchBar'

class TelaCategorias extends Component {
    render() {
        return (
            <div className="container">
                <br />
                <br />
                <div className="row">
                    <div className="col s3"><h5>Categorias</h5></div>
                    <div className="col s9">
                        <SearchBar/>
                    </div>
                </div>
                <br />
                <br />
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Item Name</th>
                            <th>Item Price</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Alvin</td>
                            <td>Eclair</td>
                            <td>$0.87</td>
                        </tr>
                        <tr>
                            <td>Alan</td>
                            <td>Jellybean</td>
                            <td>$3.76</td>
                        </tr>
                        <tr>
                            <td>Jonathan</td>
                            <td>Lollipop</td>
                            <td>$7.00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TelaCategorias