import { ShoppingBag, Search, UserRound, ArrowRight, ShieldCheck, Truck, Headphones } from 'lucide-react';

const products = [
  { name: 'Solar Power Solutions', price: 'Contact for quotation', tag: 'Featured', icon: '☀️' },
  { name: 'LiFePO4 Battery Systems', price: 'From MMK 1,000,000', tag: 'Energy Storage', icon: '🔋' },
  { name: 'Solar Inverter Systems', price: 'From MMK 500,000', tag: 'Inverters', icon: '⚡' },
  { name: 'Electrical & Energy Products', price: 'View products', tag: 'Products', icon: '🔌' },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3"><div className="grid h-11 w-11 place-items-center rounded-xl bg-cyan-400 font-black text-slate-950">X</div><div><div className="font-bold">XFINITY</div><div className="text-xs text-slate-400">ENTERPRISE LIMITED</div></div></div>
          <nav className="hidden gap-8 text-sm text-slate-300 md:flex"><a href="#products">Products</a><a href="#services">Services</a><a href="#about">About</a><a href="#contact">Contact</a></nav>
          <div className="flex items-center gap-2"><button className="rounded-lg p-2 hover:bg-white/10"><Search size={20}/></button><button className="rounded-lg p-2 hover:bg-white/10"><UserRound size={20}/></button><button className="rounded-lg p-2 hover:bg-white/10"><ShoppingBag size={20}/></button></div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:py-32">
          <div><div className="mb-5 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">Smart Energy • Reliable Solutions</div><h1 className="text-5xl font-black leading-tight md:text-7xl">Power your future with <span className="text-cyan-300">Xfinity.</span></h1><p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">Professional solar, energy storage, electrical products and business solutions from Xfinity Enterprise Limited.</p><div className="mt-8 flex flex-wrap gap-4"><a href="#products" className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 font-bold text-slate-950">Shop products <ArrowRight size={18}/></a><a href="#contact" className="rounded-xl border border-white/15 px-6 py-3 font-semibold">Request quotation</a></div></div>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-400/20 via-slate-900 to-blue-500/10 p-8 shadow-2xl"><div className="rounded-2xl border border-white/10 bg-slate-900/70 p-8"><div className="text-7xl">☀️</div><h2 className="mt-6 text-3xl font-bold">Complete Energy Ecosystem</h2><p className="mt-3 text-slate-400">Solar generation + battery storage + intelligent power management.</p><div className="mt-8 grid grid-cols-3 gap-3 text-center text-xs"><div className="rounded-xl bg-white/5 p-4">Solar</div><div className="rounded-xl bg-white/5 p-4">Storage</div><div className="rounded-xl bg-white/5 p-4">Backup</div></div></div></div>
        </div>
      </section>

      <section id="products" className="mx-auto max-w-7xl px-6 py-20"><div className="flex items-end justify-between"><div><p className="text-sm font-bold uppercase tracking-widest text-cyan-300">E-Commerce</p><h2 className="mt-2 text-4xl font-black">Featured Products</h2></div><button className="hidden text-sm text-cyan-300 md:block">View all products →</button></div><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{products.map(p=><article key={p.name} className="group rounded-2xl border border-white/10 bg-white/[.04] p-5 transition hover:-translate-y-1 hover:border-cyan-400/40"><div className="flex h-44 items-center justify-center rounded-xl bg-slate-900 text-6xl">{p.icon}</div><div className="mt-5 text-xs text-cyan-300">{p.tag}</div><h3 className="mt-2 min-h-14 font-bold">{p.name}</h3><p className="mt-3 text-sm text-slate-400">{p.price}</p><button className="mt-5 w-full rounded-xl border border-white/10 py-3 text-sm font-semibold group-hover:bg-cyan-400 group-hover:text-slate-950">View details</button></article>)}</div></section>

      <section id="services" className="border-y border-white/10 bg-white/[.03]"><div className="mx-auto max-w-7xl px-6 py-20"><h2 className="text-4xl font-black">Why Xfinity?</h2><div className="mt-10 grid gap-5 md:grid-cols-3"><Feature icon={<ShieldCheck/>} title="Trusted solutions" text="Quality-focused products and professional project support."/><Feature icon={<Truck/>} title="Delivery & installation" text="From product supply to complete energy system deployment."/><Feature icon={<Headphones/>} title="Customer support" text="Dedicated support for customers before and after purchase."/></div></div></section>

      <footer id="contact" className="mx-auto max-w-7xl px-6 py-16"><div className="grid gap-10 md:grid-cols-3"><div><div className="text-xl font-black">XFINITY ENTERPRISE LIMITED</div><p className="mt-3 text-sm text-slate-400">Energy, technology and business solutions.</p></div><div><h3 className="font-bold">Customer</h3><p className="mt-3 text-sm text-slate-400">Customer login • Orders • Transactions</p></div><div><h3 className="font-bold">Contact</h3><p className="mt-3 text-sm text-slate-400">Gmail • Phone • Business enquiry</p></div></div><div className="mt-12 border-t border-white/10 pt-6 text-xs text-slate-500">© 2026 Xfinity Enterprise Limited. All rights reserved.</div></footer>
    </main>
  );
}

function Feature({icon,title,text}:{icon:React.ReactNode,title:string,text:string}) { return <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6"><div className="text-cyan-300">{icon}</div><h3 className="mt-5 text-xl font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{text}</p></div> }
