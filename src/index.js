import './index.css'
import ReactDOM from 'react-dom'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'

ReactDOM.render(
    <div>
        <Primeiro />
        <ComParametro titulo="Segundo Componente!" subtitulo="Muito Legal!" />
    </div>,
    document.getElementById('root')
)