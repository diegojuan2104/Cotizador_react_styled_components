import React from 'react'
import styled from '@emotion/styled'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const Mensaje = styled.p`
    background-color: rgb (127,224,237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`

const Resultado = ({ cotizacion }) => {

    if (cotizacion == 0) { return null }
    return (<div>
        {cotizacion == 0 ? <Mensaje>Elige marca año y seguro</Mensaje> :

            <TransitionGroup
                component="p"
                className="Resultado"
            >
                <CSSTransition
                    className="Resultado"
                    key={cotizacion}
                    timeout={{enter: 500, exit:500}}
                >
                    <Mensaje>
                        La cotizacion es de :{cotizacion} $
                    </Mensaje>
                </CSSTransition>
            </TransitionGroup>
        }

    </div>);
}

export default Resultado;