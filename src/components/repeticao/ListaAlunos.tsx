import React from 'react'
import alunos from '../../data/students'

export default function ListaAlunos(props) {
    const lis = alunos.map(aluno => {
        return <li key={aluno.id}>({aluno.id}) {aluno.name} ➝ {aluno.grades}</li>
    })

    return (
        <div>
            <ul style={{ listStyle: 'none' }}>
                {lis}
            </ul>
        </div>
    )
}