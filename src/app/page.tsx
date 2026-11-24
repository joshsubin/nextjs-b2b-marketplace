const vendors = [
  { name: "Northstar Marine Supplies", category: "Marine equipment", location: "Singapore", description: "Deck and engine consumables for commercial vessels." },
  { name: "Bluewake Technical Services", category: "Vessel services", location: "Rotterdam", description: "Technical inspection and maintenance coordination." },
  { name: "Oceanlink Crew Solutions", category: "Crew services", location: "Manila", description: "Crew sourcing and training coordination." }
];
export default function Home() {
  return <main className="shell">
    <nav><strong>⚓ HarborMarket</strong><span>Independent portfolio demonstration</span></nav>
    <section className="hero"><p className="eyebrow">MARITIME B2B NETWORK</p><h1>Find the right maritime business partner.</h1><p>Explore fictional vendors and service providers in this independently built marketplace demo.</p><a className="cta" href="#vendors">Explore vendors</a></section>
    <section id="vendors"><div className="sectionHead"><div><p className="eyebrow">DIRECTORY</p><h2>Featured providers</h2></div><span>{vendors.length} demo listings</span></div>
      <div className="grid">{vendors.map(v => <article className="card" key={v.name}><div className="icon">⚓</div><p className="category">{v.category}</p><h3>{v.name}</h3><p>{v.description}</p><small>⌖ {v.location}</small><button type="button" onClick={() => alert("Demo only: connect this button to an authenticated inquiry workflow.")}>Contact provider</button></article>)}</div>
    </section>
    <footer>Portfolio demonstration only · Fictional companies and sample data · Not affiliated with any shipping company.</footer>
  </main>;
}
