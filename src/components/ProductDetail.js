import React, { useState } from "react"
import priceFormat from "../utils/priceFormat"
import {
  Tag,
  QtyButton,
  SizeSelect,
  Button,
  StyledProductDetail,
  QtySelect,
} from "../styles/components"
import { SEO } from "./"

export default function productDetail({
  unit_amount,
  sku: id,
  product: { name, metadata },
}) {
  const unit_amount = priceFormat()
  const [qty, setQty] = useState(1)
  return (
    <StyledProductDetail>
      <SEO tittle={name} />
      <img src={metadata.img} alt={name} />
      <div>
        <Tag>Popular</Tag>
        <h2>{name}</h2>
        <b>Pesos{unit_amount}</b>
        <p>Cantidad:</p>
        <QtySelect>
          <button onClick={() => (qty > 1 ? setQty(qty - 1) : null)}>-</button>
          <input type="text" disabled value={qty}></input>
          <button onClick={() => setQty(qty + 1)}>+</button>
        </QtySelect>
      </div>
    </StyledProductDetail>
  )
}
