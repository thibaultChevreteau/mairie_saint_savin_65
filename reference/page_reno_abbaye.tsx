'use client'

import {
  ArrowDown,
  ArrowRight,
  Building2,
  Check,
  Clock3,
  Download,
  ExternalLink,
  FileText,
  HeartHandshake,
  Landmark,
  Menu,
  Newspaper,
  Phone,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from 'lucide-react'
import { useState } from 'react'

const donationUrl = 'https://www.fondation-patrimoine.org/'

const highlights = [
  { title: 'Un chef-d’œuvre du XIIe siècle', text: 'Une architecture romane remarquable, classée Monument Historique dès 1840.', image: '/roman-abbey-detail.png', icon: Landmark },
  { title: 'Un orgue d’exception (1557)', text: 'L’un des plus anciens orgues jouables de France, au cœur des concerts de la commune.', image: '/saint-savin-organ.png', icon: Sparkles },
  { title: 'Un haut lieu de culture & pèlerinage', text: 'Concerts, Journées Européennes du Patrimoine et étape sur les chemins près de Lourdes.', image: '/abbey-cultural-life.png', icon: HeartHandshake },
]

const phases = [
  { number: '01', title: 'SÉCURISATION & MAÇONNERIE', text: 'Mise hors d’eau d’urgence, maçonnerie de la tour-lanterne et couverture de l’absidiole nord.', status: 'En cours', icon: ShieldCheck },
  { number: '02', title: 'COUVERTURES & VITRAUX', text: 'Restauration de l’oculus de la façade ouest, des vitraux de l’absidiole sud et des toitures de la nef.', status: 'À venir', icon: Building2 },
  { number: '03', title: 'MOBILIER & PEINTURES', text: 'Restauration des peintures de la vie de saint Savin, des statues et des trésors liturgiques intérieurs.', status: 'À venir', icon: Sparkles },
]

export default function AbbatialePage() {
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
          <a href="/" className="flex items-center gap-3" aria-label="Mairie de Saint-Savin, accueil"><span className="flex size-11 items-center justify-center rounded-full border-2 border-primary text-primary"><span className="font-serif text-xl">S</span></span><span><span className="block font-serif text-xl font-semibold leading-none text-primary">Mairie de Saint-Savin</span><span className="mt-1 block text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">Patrimoine &amp; Cadre de vie</span></span></a>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigation principale"><a href="/" className="text-sm font-medium text-muted-foreground hover:text-primary">Accueil</a><a href="#projet" className="text-sm font-medium text-primary">Patrimoine</a><a href="#travaux" className="text-sm font-medium text-muted-foreground hover:text-primary">Les travaux</a><a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-primary">Contact</a><span className="rounded-full bg-accent px-3 py-1.5 text-xs font-bold text-primary">Projet Abbaye</span></nav>
          <button className="flex size-10 items-center justify-center rounded-full border border-border text-primary lg:hidden" aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}</button>
        </div>
        {menuOpen && <nav className="flex flex-col gap-4 border-t border-border px-4 py-5 lg:hidden" aria-label="Navigation mobile"><a href="/" className="font-medium text-primary">Accueil</a><a href="#projet" onClick={() => setMenuOpen(false)} className="font-medium text-primary">Patrimoine</a><a href="#travaux" onClick={() => setMenuOpen(false)} className="font-medium text-primary">Les travaux</a><a href="#contact" onClick={() => setMenuOpen(false)} className="font-medium text-primary">Contact</a></nav>}
      </header>

      <main>
        <section className="border-b border-border bg-accent/45 px-4 py-8 lg:px-8 lg:py-12"><div className="mx-auto max-w-7xl"><nav aria-label="Fil d’Ariane" className="flex items-center gap-2 text-xs font-semibold text-primary/60"><a href="/" className="hover:text-primary">Accueil</a><span>/</span><a href="#projet" className="hover:text-primary">Patrimoine</a><span>/</span><span className="text-primary">Rénovation de l’Abbatiale</span></nav><div className="mt-10 grid items-end gap-8 lg:grid-cols-[1.1fr_0.9fr]"><div><p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-secondary"><span className="h-px w-8 bg-secondary" /> Projet de sauvegarde</p><h1 className="max-w-3xl font-serif text-4xl leading-[1.04] text-primary sm:text-5xl lg:text-6xl">Restauration &amp; Sauvegarde de l’Abbatiale de Saint-Savin</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-primary/75">Soutenez la préservation d’un joyau roman du XIIe siècle au cœur des Hautes-Pyrénées.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href={donationUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90">Je donne <span className="hidden sm:inline">(Fondation du Patrimoine)</span><ExternalLink className="size-4" /></a><a href="#projet" className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 px-5 py-3.5 text-sm font-semibold text-primary transition hover:bg-primary/10">Découvrir le projet &amp; les travaux <ArrowDown className="size-4" /></a></div></div><div className="relative aspect-[1.4] overflow-hidden rounded-2xl border border-primary/10 shadow-sm"><img src="/saint-savin-abbey.png" alt="Abbatiale de Saint-Savin dans son village" className="size-full object-cover" /><div className="absolute inset-x-0 bottom-0 bg-primary/85 p-4 text-sm font-semibold text-primary-foreground">Un patrimoine vivant, transmis depuis près de 900 ans</div></div></div></div></section>

        <section id="projet" className="mx-auto max-w-7xl scroll-mt-6 px-4 py-14 lg:px-8 lg:py-20"><div className="rounded-2xl bg-accent p-6 sm:p-8 lg:p-10"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start"><div><p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-primary/65">Campagne de mécénat &amp; appel aux dons</p><h2 className="font-serif text-3xl text-primary sm:text-4xl">Chaque don compte pour l’Abbatiale</h2></div><span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-background/50 px-3 py-2 text-xs font-bold text-primary"><Sparkles className="size-4 text-secondary" /> Mission Bern · Loto du Patrimoine</span></div><div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]"><div><div className="flex items-end justify-between gap-4"><span className="text-sm font-semibold text-primary">147 980 € collectés</span><span className="font-serif text-2xl text-primary">82<span className="text-base">%</span></span></div><div className="mt-3 h-3 overflow-hidden rounded-full bg-primary/15"><div className="h-full w-[82%] rounded-full bg-secondary" /></div><div className="mt-6 grid grid-cols-3 gap-4 border-t border-primary/15 pt-5"><div><p className="text-xs text-primary/60">Objectif</p><p className="mt-1 font-semibold text-primary">180 000 €</p></div><div><p className="text-xs text-primary/60">Donateurs</p><p className="mt-1 font-semibold text-primary">352</p></div><div><p className="text-xs text-primary/60">Budget global</p><p className="mt-1 font-semibold text-primary">~1 M€</p></div></div></div><div className="rounded-xl bg-background/65 p-5"><p className="text-xs font-bold uppercase tracking-wide text-secondary">Votre avantage fiscal</p><p className="mt-2 font-serif text-xl leading-tight text-primary">Vos dons sont défiscalisés à hauteur de 66% pour les particuliers et 60% pour les entreprises.</p><a href={donationUrl} target="_blank" rel="noreferrer" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90">Faire un don en ligne <ArrowRight className="size-4" /></a></div></div></div></section>

        <section className="border-y border-border bg-card px-4 py-14 lg:px-8 lg:py-20"><div className="mx-auto max-w-7xl"><div className="mb-8 max-w-2xl"><p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-secondary">Un héritage à protéger</p><h2 className="font-serif text-3xl text-primary sm:text-4xl">L’Abbatiale, bien plus qu’un monument</h2></div><div className="grid gap-5 md:grid-cols-3">{highlights.map(item => <article key={item.title} className="overflow-hidden rounded-xl border border-border bg-background"><div className="aspect-[1.7] overflow-hidden"><img src={item.image} alt="" className="size-full object-cover transition duration-500 hover:scale-105" /></div><div className="p-5"><item.icon className="size-5 text-secondary" /><h3 className="mt-4 font-serif text-xl leading-tight text-primary">{item.title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{item.text}</p></div></article>)}</div></div></section>

        <section id="travaux" className="scroll-mt-6 px-4 py-14 lg:px-8 lg:py-20"><div className="mx-auto max-w-7xl"><div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-secondary">Le journal des travaux</p><h2 className="font-serif text-3xl text-primary sm:text-4xl">Trois phases pour une renaissance</h2></div><span className="text-sm text-muted-foreground">Un chantier pensé dans le temps</span></div><div className="grid gap-5 lg:grid-cols-3">{phases.map((phase, index) => <article key={phase.number} className="relative rounded-xl border border-border bg-card p-6"><div className="flex items-start justify-between"><span className="font-serif text-4xl text-accent-foreground/20">{phase.number}</span><phase.icon className="size-6 text-secondary" /></div><div className="mt-8 h-px bg-border"><div className={`h-px bg-secondary ${index === 0 ? 'w-full' : 'w-0'}`} /></div><p className="mt-6 text-xs font-bold tracking-[0.12em] text-secondary">{phase.title}</p><h3 className="mt-3 font-serif text-2xl text-primary">Phase {index + 1}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{phase.text}</p><span className={`mt-6 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-bold ${index === 0 ? 'bg-secondary text-secondary-foreground' : 'bg-muted text-muted-foreground'}`}>{index === 0 && <Check className="size-3.5" />}{phase.status}</span></article>)}</div></div></section>

        <section className="bg-primary px-4 py-14 text-primary-foreground lg:px-8 lg:py-16"><div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto] lg:items-center"><div><p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-accent">Fonds de dotation</p><h2 className="font-serif text-3xl sm:text-4xl">Mobilisons-nous pour notre patrimoine</h2><p className="mt-4 max-w-2xl text-sm leading-7 text-primary-foreground/75">La commune, avec le soutien de la Fondation du Patrimoine, ouvre un fonds de dotation pour fédérer habitants, entreprises et amoureux de Saint-Savin autour de ce projet essentiel.</p></div><div className="flex flex-col gap-3 sm:flex-row lg:flex-col"><a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-primary"><Download className="size-4" /> Formulaire de don (PDF)</a><a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-accent/50 px-5 py-3 text-sm font-semibold text-accent"><Users className="size-4" /> Devenir partenaire</a></div></div></section>
      </main>

      <footer id="contact" className="bg-background px-4 py-12 lg:px-8"><div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.4fr_1fr_1fr] md:gap-16"><div><div className="flex items-center gap-3"><span className="flex size-10 items-center justify-center rounded-full border-2 border-primary text-primary"><span className="font-serif text-lg">S</span></span><span className="font-serif text-xl font-semibold text-primary">Mairie de Saint-Savin</span></div><p className="mt-5 max-w-xs text-sm leading-6 text-muted-foreground">Une commune vivante, accueillante et engagée pour préserver son patrimoine.</p></div><div><h2 className="font-serif text-lg text-primary">Contact projet</h2><div className="mt-4 space-y-3 text-sm text-muted-foreground"><p className="flex gap-3"><Phone className="size-4 shrink-0 text-secondary" /> 05 00 00 00 00</p><p className="flex gap-3"><Newspaper className="size-4 shrink-0 text-secondary" /> patrimoine@saint-savin.fr</p></div></div><div><h2 className="font-serif text-lg text-primary">Mairie de Saint-Savin</h2><p className="mt-4 text-sm leading-6 text-muted-foreground">1, place de la Mairie<br />86310 Saint-Savin<br /><br />Lundi, mercredi, vendredi<br /><strong className="font-semibold text-primary">9h00 – 12h00</strong></p></div></div><div className="mx-auto mt-10 flex max-w-7xl border-t border-border pt-6 text-xs text-muted-foreground"><span>© 2026 Mairie de Saint-Savin · Projet de restauration de l’Abbatiale</span></div></footer>
    </div>
  )
}
