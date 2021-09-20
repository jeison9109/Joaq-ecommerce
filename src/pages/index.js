import React from "react"
import { graphql } from "gatsby"
import { Jumbo, SEO, Products } from "../components"

//import styled from "styled-components"

export const query = graphql`
  query GET_DATA {
    allSite {
      edges {
        node {
          siteMetadata {
            description
          }
        }
      }
    }

    allStripePrice {
      edges {
        node {
          id
          unit_amount
          product {
            name
            metadata {
              img
              description
            }
          }
        }
      }
    }
  }
`

/*const Button = styled.button`
  width: 8rem;
  background-color: #98ca3f;
  border: none;
  border-radius: 10px;
  color: ${props => props.color};
  &:hover {
    transform: scale(1.4);
  }
`*/

const IndexPage = ({ data }) => {
  console.log(data)

  return (
    <>
      <SEO title="Home" />
      <Jumbo
        description={data.allSite.edges[0].node.siteMetadata.description}
      />
      {/*  <Button color="gray">Comprar</Button>*/}
      <Products products={data.allStripePrice.edges} />
    </>
  )
}

export default IndexPage
