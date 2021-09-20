import React from "react"
import { Link } from "gatsby"
import priceFormat from "../utils/priceFormat"
import { StyledProducts } from "../styles/components"

export default function Products({ products }) {
  return (
    <StyledProducts>
      <h2>Productos</h2>
      <section>
        {products.map(({ node }) => {
          const unit_amount = priceFormat(node.unit_amount)
          return (
            <article key={node.id}>
              <img src={node.product.metadata.img} alt={node.product.name} />
              <p>{node.product.name}</p>
              <small>{unit_amount} Pesos </small>
              <Link to={`/${node.id}`}>
                Comprar Ahora <span>👉</span>
              </Link>
            </article>
          )
        })}
      </section>
    </StyledProducts>
  )
}
