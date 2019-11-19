import React, { Component } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'

class ModalLogin extends Component {
    constructor(props) {
        super(props)
        this.elem = null
        this.instance = null


    }

    componentDidMount() {
        // document.addEventListener('DOMContentLoaded', () => {
            this.elem = document.querySelector('.modal')
            this.instance = M.Modal.init(this.elem, {})
        // })
        setTimeout(() => { this.abrirModal() }, 3000)
    }

    abrirModal = () => {
        this.instance.open()
    }

    render() {
        return (
            <div id="modal1" className="modal">
                <div className="modal-content">
                    <h4>Modal Header</h4>
                    <p>A bunch of text</p>
                </div>
                <div className="modal-footer">
                    <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
                </div>
            </div>
        )
    }
}

export default ModalLogin