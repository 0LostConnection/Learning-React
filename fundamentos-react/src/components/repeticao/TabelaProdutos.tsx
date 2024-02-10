import './TabelaProdutos.css'
import React from "react"
import productsData from "../../data/products"

const productsList = productsData.map((product, i) => {
    return (
        <tr key={product.id} className={i % 2 === 0 ? 'Par' : 'Impar'}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>R${String(Number(product.price).toFixed(2)).replace('.', ',')}</td>
        </tr>
    )
})

export default function TabelaProdutos(props) {
    return (
        <div className='Tabela'>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Produto</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {productsList}
                </tbody>
            </table>
        </div>
    )
}