import { useRef } from "react"
import React from "react"
import { useNavigate } from "react-router-dom"
import styled from 'styled-components'
import Overlay from "./overlay"
import { ButtonContrast } from "./button"
import InputText from "./input-text"
import ReactDOM from "react-dom"

// class Modal extends React.Component {

//     state = { a: 1, b: 3}

//     componentDidMount(){
//         setTimeout(() => {
//             this.setState({ a: 2, b: 4 })
//         }, 3000)
//     }

//     componentDidUpdate(){
//         console.log('Se ha actualizado el componente')
//     }
// }

const modalRoot = document.getElementById('portal')

// Inicio: Componente basado en clase
class ModalPortal extends React.Component {

    constructor(props){
        super(props)
        this.el = document.createElement('div')
    }

    componentDidMount(){
        modalRoot.appendChild(this.el)
    }

    componentWillUnmount(){
        modalRoot.removeChild(this.el)
    }

    //     componentDidUpdate(){
    //         console.log('Se ha actualizado el componente')
    //     }

    render(){
        return ReactDOM.createPortal(this.props.children, this.el)
    }
}

export default function Modal({ isActive, setModal }){
    if (isActive) {
        return (
            <ModalPortal>
                <ModalContent setModal={setModal} />
            </ModalPortal>
        )
    }
    return null
}

// Fin: Componente basado en clase


const ModalContentStyled = styled.form`
    background-color: var(--bg);
    color: var(--white);
    padding: 1.5rem;
    border-radius: .5rem;
    position: fixed;
    inset-block-start: 50%;
    inset-inline-start: 50%;
    transform: translateY(-50%) translateX(-50%);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    min-inline-size: 24rem;

    .title {
        font: var(--headline2-semi-bold);
        margin: 0;
    }
`

function ModalContent({setModal}) {
    const form = useRef(null)
    const navigator = useNavigate()

    function handleSubmit(event){
        event.preventDefault()
        const formData = new FormData(form.current)
        navigator(`/${formData.get('username')}`)
        setModal(false)
    }

    return(
        <Overlay>
            <ModalContentStyled ref={form} action="" onSubmit={handleSubmit}>
                <h2 className="title">Busca a tu usuario favorito</h2>
                <InputText type="text" autoComplete="off" name="username" placeholder="Username" />
                <ButtonContrast text="Buscar"/>
            </ModalContentStyled>
        </Overlay>
    )
}

// export default ModalContent
