const products = [
  {
    name: 'Original Cold Brew',
    description:
      'Smooth and bold, steeped for 18 hours for a naturally sweet, low-acid finish.',
  },
  {
    name: 'Nitro Cold Brew',
    description:
      'Cascading, creamy texture from nitrogen infusion — no cream required.',
  },
  {
    name: 'Decaf Cold Brew',
    description:
      'Smooth and rich, perfect for those who want the cold brew experience without the caffeine.',
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
