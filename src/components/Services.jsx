const services = [
  {
    name: 'Kegerator Supply',
    description:
      'We install and maintain a sleek kegerator right in your office or shop — no equipment to buy or store.',
  },
  {
    name: 'Fresh Cold Brew Delivery',
    description:
      'Scheduled deliveries keep your kegerator stocked with fresh cold brew, rotated before anything goes stale.',
  },
  {
    name: 'Cleaning & Maintenance',
    description:
      'Our team handles line cleaning, coffee box swaps, and equipment upkeep, so your pour is always fresh and flowing.',
  },
]

function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2>White-Glove Service</h2>
        <div className="product-grid">
          {services.map((service) => (
            <div className="product-card" key={service.name}>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
