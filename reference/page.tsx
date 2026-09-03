'use client'

import {
  ArrowRight,
  CalendarDays,
  ChevronRight,
  Clock3,
  Download,
  FileText,
  Mail,
  MapPin,
  Menu,
  Phone,
  Search,
  Send,
  Users,
  X,
} from 'lucide-react'
import { useState } from 'react'

const news = [
  {
    date: '25 août 2026',
    category: 'Vie Municipale',
    title: 'La rentrée scolaire se prépare à Saint-Savin',
    text: 'Retrouvez toutes les informations pratiques pour une rentrée sereine des petits Savinois.',
    image: '/saint-savin-abbey.png',
  },
  {
    date: '18 août 2026',
    category: 'Vie Associative',
    title: 'Le Forum des associations revient en septembre',
    text: 'Une journée pour découvrir les activités, rencontrer les bénévoles et s’inscrire.',
    image: '/saint-savin-abbey.png',
  },
  {
    date: '08 août 2026',
    category: 'Arrêté Municipal',
    title: 'Circulation : travaux de voirie rue de l’Église',
    text: 'La circulation sera adaptée du 31 août au 11 septembre inclus.',
    image: '/saint-savin-abbey.png',
  },
  {
    date: '30 juillet 2026',
    category: 'Cadre de vie',
    title: 'Le marché de producteurs fête son retour',
    text: 'Chaque samedi matin, retrouvez les producteurs locaux sous la halle du village.',
    image: '/saint-savin-abbey.png',
  },
]

const documents = [
  ['Compte-rendu du Conseil Municipal - Juillet 2026', '12.08.2026', '842 Ko'],
  ['Bulletin Municipal n°42 - Été 2026', '28.07.2026', '3,2 Mo'],
  ['Arrêté municipal n°2026-18', '21.07.2026', '156 Ko'],
  ['Procès-verbal du Conseil Municipal - Juin 2026', '04.07.2026', '918 Ko'],
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="bg-primary px-4 py-2 text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col gap-1 text-xs font-medium tracking-wide sm:flex-row sm:items-center sm:justify-between">
          <a href="tel:+33500000000" className="flex items-center gap-2 hover:underline"><Phone className="size-3.5" /> Urgence / astreinte : 05 00 00 00 00</a>
          <span className="flex items-center gap-2 text-primary-foreground/80"><Clock3 className="size-3.5" /> Mairie ouverte aujourd’hui de 9h à 12h</span>
        </div>
      </div>

      <header className="border-b border-border bg-background">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-5 lg:px-8">
          <a href="#accueil" className="flex items-center gap-3" aria-label="Mairie de Saint-Savin, accueil">
            <span className="flex size-11 items-center justify-center rounded-full border-2 border-primary text-primary"><span className="font-serif text-xl">S</span></span>
            <span><span className="block font-serif text-xl font-semibold leading-none text-primary">Mairie de Saint-Savin</span><span className="mt-1 block text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">Patrimoine &amp; Cadre de vie</span></span>
          </a>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigation principale">
            {['Accueil', 'Actualités', 'Démarches & Infos', 'Documents', 'Patrimoine'].map((item, index) => <a key={item} href={index === 0 ? '#accueil' : `#${item.toLowerCase().replaceAll(' ', '-')}`} className={`text-sm font-medium transition-colors hover:text-primary ${index === 0 ? 'text-primary' : 'text-muted-foreground'}`}>{item}</a>)}
          </nav>
          <div className="flex items-center gap-2">
            <button className="flex size-10 items-center justify-center rounded-full border border-border text-primary transition hover:bg-secondary" aria-label="Rechercher"><Search className="size-4" /></button>
            <button className="flex size-10 items-center justify-center rounded-full border border-border text-primary lg:hidden" aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}</button>
          </div>
        </div>
        {menuOpen && <nav className="flex flex-col gap-4 border-t border-border px-4 py-5 lg:hidden" aria-label="Navigation mobile">{['Accueil', 'Actualités', 'Démarches & Infos', 'Documents', 'Patrimoine'].map(item => <a key={item} href="#accueil" onClick={() => setMenuOpen(false)} className="font-medium text-primary">{item}</a>)}</nav>}
      </header>

      <main id="accueil">
        <section className="mx-auto max-w-7xl px-4 pb-12 pt-8 lg:px-8 lg:pb-16 lg:pt-12">
          <div className="grid overflow-hidden rounded-2xl bg-accent md:grid-cols-[1.05fr_0.95fr]">
            <div className="flex flex-col justify-center px-6 py-10 sm:px-10 lg:px-16 lg:py-16">
              <span className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-primary"><span className="h-px w-8 bg-secondary" /> Projet patrimoine</span>
              <h1 className="max-w-xl font-serif text-4xl leading-[1.08] text-primary sm:text-5xl lg:text-[3.65rem]">Soutenez la rénovation de l’Abbaye de Saint-Savin</h1>
              <p className="mt-6 max-w-lg text-base leading-7 text-primary/75">Un joyau de notre village à préserver ensemble. Découvrez le projet de restauration et participez à la campagne de financement.</p>
              <a href="#patrimoine" className="mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90">Découvrir le projet &amp; faire un don <ArrowRight className="size-4" /></a>
            </div>
            <div className="relative min-h-72 overflow-hidden md:min-h-full"><img src="/saint-savin-abbey.png" alt="Abbaye historique de Saint-Savin au matin" className="absolute inset-0 size-full object-cover" /><div className="absolute inset-0 bg-primary/10" /></div>
          </div>
        </section>

        <section className="border-y border-border bg-card" aria-labelledby="infos-pratiques">
          <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8"><div className="mb-5 flex items-center gap-3"><span className="h-px w-8 bg-secondary" /><h2 id="infos-pratiques" className="font-serif text-2xl text-primary">Infos pratiques</h2></div><div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
            {[['Horaires Mairie', Clock3], ['Démarches en ligne', FileText], ['Signalement', Send], ['Réservation Salle des Fêtes', CalendarDays]].map(([label, Icon]) => <a href="#contact" key={label as string} className="group flex min-h-24 flex-col justify-between rounded-xl border border-border bg-background p-4 transition hover:-translate-y-0.5 hover:border-primary sm:min-h-28 sm:p-5"><Icon className="size-5 text-secondary" /><span className="flex items-end justify-between gap-2 text-sm font-semibold text-primary">{label as string}<ChevronRight className="size-4 transition group-hover:translate-x-1" /></span></a>)}
          </div></div>
        </section>

        <section id="actualités" className="mx-auto max-w-7xl px-4 py-14 lg:px-8 lg:py-20" aria-labelledby="actualites-title">
          <div className="mb-8 flex items-end justify-between gap-4"><div><p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-secondary">La vie du village</p><h2 id="actualites-title" className="font-serif text-3xl text-primary sm:text-4xl">Actualités de la commune</h2></div><a href="#actualités" className="hidden items-center gap-2 text-sm font-semibold text-primary sm:flex">Toutes les actualités <ArrowRight className="size-4" /></a></div>
          <div className="grid gap-5 sm:grid-cols-2">{news.map(item => <article key={item.title} className="group overflow-hidden rounded-xl border border-border bg-card"><div className="aspect-[1.8] overflow-hidden"><img src={item.image} alt="" className="size-full object-cover grayscale-[20%] transition duration-500 group-hover:scale-105" /></div><div className="p-5"><div className="flex items-center justify-between gap-3"><time className="text-xs text-muted-foreground">{item.date}</time><span className="rounded-full bg-secondary px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-secondary-foreground">{item.category}</span></div><h3 className="mt-4 font-serif text-xl leading-tight text-primary">{item.title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{item.text}</p><a href="#actualités" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">Lire la suite <ArrowRight className="size-3.5" /></a></div></article>)}</div>
        </section>

        <section id="documents" className="bg-primary px-4 py-14 text-primary-foreground lg:px-8 lg:py-20" aria-labelledby="documents-title"><div className="mx-auto max-w-7xl"><div className="mb-8 flex items-end justify-between gap-4"><div><p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-accent">Transparence municipale</p><h2 id="documents-title" className="font-serif text-3xl sm:text-4xl">Dernières délibérations<br className="hidden sm:block" /> &amp; bulletins municipaux</h2></div><FileText className="hidden size-10 text-accent/70 sm:block" /></div><div className="divide-y divide-primary-foreground/15 rounded-xl border border-primary-foreground/15">{documents.map(([title, date, size]) => <div key={title} className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5"><div className="flex items-start gap-4"><span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent text-primary"><FileText className="size-5" /></span><div><h3 className="text-sm font-semibold sm:text-base">{title}</h3><p className="mt-1 text-xs text-primary-foreground/60">Publié le {date} · {size}</p></div></div><a href="#documents" className="inline-flex items-center gap-2 pl-14 text-xs font-bold uppercase tracking-wide text-accent hover:underline sm:pl-0">Télécharger (PDF) <Download className="size-4" /></a></div>)}</div><a href="#documents" className="mt-7 inline-flex items-center gap-2 rounded-full border border-accent/50 px-5 py-3 text-sm font-semibold text-accent transition hover:bg-accent hover:text-primary">Accéder à l’archivage complet des documents <ArrowRight className="size-4" /></a></div></section>
      </main>

      <footer id="contact" className="bg-background px-4 py-12 lg:px-8"><div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.4fr_1fr_1fr] md:gap-16"><div><div className="flex items-center gap-3"><span className="flex size-10 items-center justify-center rounded-full border-2 border-primary text-primary"><span className="font-serif text-lg">S</span></span><span className="font-serif text-xl font-semibold text-primary">Mairie de Saint-Savin</span></div><p className="mt-5 max-w-xs text-sm leading-6 text-muted-foreground">Une commune vivante, accueillante et engagée pour préserver son patrimoine.</p><div className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-xs font-semibold text-primary"><Users className="size-4" /> Retrouvez-nous sur PanneauPocket</div></div><div><h2 className="font-serif text-lg text-primary">Nous contacter</h2><div className="mt-4 space-y-3 text-sm text-muted-foreground"><p className="flex gap-3"><MapPin className="size-4 shrink-0 text-secondary" /> 1, place de la Mairie<br />86310 Saint-Savin</p><p className="flex items-center gap-3"><Phone className="size-4 shrink-0 text-secondary" /> 05 00 00 00 00</p><p className="flex items-center gap-3"><Mail className="size-4 shrink-0 text-secondary" /> mairie@saint-savin.fr</p></div></div><div><h2 className="font-serif text-lg text-primary">Horaires d’accueil</h2><p className="mt-4 text-sm leading-6 text-muted-foreground">Lundi, mercredi, vendredi<br /><strong className="font-semibold text-primary">9h00 – 12h00</strong><br /><br />Mardi et jeudi<br /><strong className="font-semibold text-primary">9h00 – 12h00 · 14h00 – 17h00</strong></p></div></div><div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between"><span>© 2026 Mairie de Saint-Savin</span><div className="flex gap-5"><a href="#contact" className="hover:text-primary">Mentions légales</a><a href="#contact" className="hover:text-primary">RGPD</a><a href="#contact" className="hover:text-primary">Accessibilité</a></div></div></footer>
    </div>
  )
}
