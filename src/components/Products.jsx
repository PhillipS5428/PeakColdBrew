const products = [
  {
    name: 'Original Cold Brew',
    description:
      'Medium roast. Smooth and bold.',
  },
  {
    name: 'Nitro Cold Brew',
    description:
      'Cascading, creamy texture from nitrogen infusion — no cream required.',
  },
]

function Products() {
  return (
    <section id="flavors" className="products">
      <div className="container">
        <h2>Our Cold Brew Flavors</h2>
        <div className="product-grid">
          {products.map((product) => (
            <div className="product-card" key={product.name}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
