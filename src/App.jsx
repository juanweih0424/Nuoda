import { useEffect, useState } from 'react'
import './App.css'

const pages = ['home', 'biochemicals', 'diagnostics', 'partnerships', 'about', 'contact']

const copy = {
    nav: ['Home', 'Biochemicals', 'Diagnostics', 'Global Partnerships', 'About Us', 'Contact'],
    eyebrow: 'BIOCHEMICALS · DIAGNOSTICS · GLOBAL SUPPLY', title: 'Reliable science. Thoughtful supply.',
    intro: 'Chongqing Longfor Biotechnology is the export agency and overseas marketing lead for a focused portfolio of high-purity biochemical materials and selected diagnostic products.',
    explore: 'Explore our products', contactCta: 'Contact our team',
    homeLabel: 'CHONGQING LONGFOR BIOTECHNOLOGY', aboutTitle: 'Your export and overseas marketing partner in life science.',
    aboutText: 'Founded in 2016, Longfor represents products to international markets, coordinating export, overseas marketing and commercial partnerships across pharmaceutical and biotechnology sectors.',
    stat1: 'Established', stat2: 'Production partners', stat3: 'Core categories',
    biochemEyebrow: 'BIOCHEMICAL MATERIALS', biochemTitle: 'High-purity building blocks for life science.', biochemIntro: 'A focused portfolio for pharmaceutical development, cell culture and biotech manufacturing, supported by dedicated R&D teams and production facilities.',
    product1: 'Protected Amino Acids & Side Chains', product1Desc: 'Custom synthesis from gram to 100 kg scale, with support for custom modifications.', product1Meta: 'CUSTOM SYNTHESIS · GRAM TO 100 KG',
    product2: 'Cell Culture Media Raw Materials', product2Desc: 'Materials for cell culture formulations. Low-endotoxin grades available on request.', product2Meta: 'CELL CULTURE · LOW-ENDOTOXIN OPTIONS',
    product3: 'Bioactive Substances', product3Desc: 'High-purity materials with consistent batches and dependable supply planning.', product3Meta: 'HIGH PURITY · BATCH CONSISTENCY',
    product4: 'Pharma Intermediates', product4Desc: 'Controlled impurities, with process development and scale-up support.', product4Meta: 'IMPURITY CONTROL · SCALE-UP SUPPORT',
    diagnosticsEyebrow: 'MOLECULAR DIAGNOSTICS PRODUCTS', diagnosticsTitle: 'Selected diagnostic products for global markets.', diagnosticsIntro: 'Chongqing Longfor Biotechnology manages export and overseas marketing for a partner-supplied colorectal cancer testing kit. The product is currently in clinical trials in China, with launch approaching and overseas commercialization planned to begin in parallel.',
    featureTitle: '5-Gene Stool DNA Methylation Test', featureText: 'For in vitro qualitative detection of the methylation status of SDC2, NDRG4, SFRP2, TFPI2 and BMP3 genes in exfoliated intestinal cells from human fecal samples.', featureNote: 'Supplied by NorDa Medical. Export and overseas marketing managed by Chongqing Longfor Biotechnology.', genes: ['SDC2', 'NDRG4', 'SFRP2', 'TFPI2', 'BMP3'],
    backgroundTitle: 'Colorectal cancer is a common gastrointestinal malignancy', crcBackground: 'It ranks third worldwide for incidence and second for cancer mortality.',
    intendedPopulation: 'This kit is intended as an aid to diagnosis for certain high-risk populations.',
    stageContext: 'Many patients with colorectal cancer are diagnosed at Stage II–III.', surgerySurvival: 'Five-year survival is below 50% among patients treated with surgery alone.', earlyIntervention: 'Intervention during the precancerous stage is one strategy for cancer management.',
    metastaticContext: 'Approximately 50% of patients may develop metastases. For metastatic disease, median survival is 24–30 months and five-year survival is approximately 14%.', molecularContext: 'Genomic instability, epigenetic abnormalities and dysregulated gene expression are molecular features of colorectal cancer.',
    comparisonTitle: 'Comparing screening methods', colonoscopy: 'Bowel preparation before colonoscopy may cause discomfort.', fobt: 'Results may be affected by interfering factors.', methylation: 'Non-invasive, convenient and accurate.',
    method: 'Methylation-specific quantitative PCR (qPCR)', platform: 'ABI 7500 Real-Time PCR System', assaySteps: [
      { title: 'Sample collection', text: 'Place the fecal sample in DNA preservation buffer.' },
      { title: 'Extraction', text: 'Remove interfering substances; extract and enrich human DNA, including DNA with methylated target genes.' },
      { title: 'Bisulfite treatment', text: 'Convert unmethylated cytosine (C) to uracil (U); purify converted single-stranded DNA.' },
      { title: 'qPCR', text: 'Detect multiple loci with methylation-specific primers and differently labeled probes.' },
      { title: 'Data analysis', text: 'Combine the five-gene results and use AI-assisted interpretation.' },
    ], controlNote: '',
    technicalTitle: 'Technical parameters reported in the brochure', lod: 'The brochure reports detection of methylation levels of ≥1% for the five target genes in a background of 5 ng/µL genomic DNA. Confirm the definition and validation basis for this limit of detection.',
    repeatability: 'For the same reference material tested across different kit batches, the brochure reports inter-lot and intra-lot coefficients of variation below 5%. The measured quantity is not specified in the supplied pages.',
    performanceTitle: 'Clinical performance reported in source materials', performance: [
      ['Sensitivity', '92.76%'], ['Specificity', '97.90%'], ['Accuracy', '96.56%'], ['Positive predictive value (PPV)', '94.00%'], ['Negative predictive value (NPV)', '97.44%'],
    ], studySource: 'Source note: ongoing clinical study data from 581 cases at five hospitals in different cities in China.', dataCaution: 'These figures are reproduced from the supplied brochure and annotated review. The study is described as ongoing; endpoint definitions, study report, confidence intervals and current regulatory status were not provided for independent verification.',
    marketTitle: 'Sample-to-laboratory pathway shown in the brochure', marketSteps: ['Online shop', 'Patient obtains sample-preservation tube', 'Sample is sent to the laboratory', 'Testing and report issuance'], marketCaution: 'The source brochure includes a China-market e-commerce screenshot as an illustrative reference. It is not an approved Longfor or NorDa online listing, and the sales model and collection device should be confirmed before reuse.',
    supplierRole: 'PRODUCT SUPPLIER', supplierName: 'NorDa Medical', marketingRole: 'EXPORT & OVERSEAS MARKETING', marketingName: 'Chongqing Longfor Biotechnology',
    partnerEyebrow: 'GLOBAL PARTNERSHIPS', partnerTitle: 'A practical partner for long-term supply.', partnerText: 'We work with pharmaceutical and biotech teams seeking dependable materials, custom synthesis and future diagnostic opportunities.', partnershipPoints: ['Long-term supply programs', 'Custom synthesis & scale-up', 'Distribution and market collaboration'],
    aboutEyebrow: 'ABOUT LONGFOR', aboutHeading: 'An export and overseas marketing partner for life science.', aboutLong: 'Chongqing Longfor Biotechnology Co., Ltd. was founded in 2016 as an export agency and overseas marketing entity serving global pharmaceutical and biotechnology markets. Longfor promotes its biochemical materials portfolio and selected partner-supplied diagnostic products internationally.',
    quality: 'Quality & manufacturing', qualityText: 'Longfor has invested in two production facilities and dedicated R&D teams for its biochemical materials business. Production processes follow GMP-based quality control and validation practices. Partner-supplied diagnostic products are presented as a separate part of Longfor’s international marketing portfolio.',
    contactEyebrow: 'CONTACT LONGFOR', contactTitle: 'Let’s discuss your next project.', contactText: 'Tell us what materials, custom synthesis or diagnostic collaboration you are looking for. Our team will follow up with you.',
    name: 'Name', company: 'Company', email: 'Business email', interest: 'Area of interest', message: 'How can we help?', send: 'Prepare enquiry', formNote: 'This front-end form opens your email app with the enquiry details.', formSuccess: 'Your email app should open with the enquiry ready to send.',
    footer: 'Export agency · Overseas marketing · Global collaboration', companyName: 'Chongqing Longfor Biotechnology Co., Ltd.', page: 'PAGE', previous: 'Previous', next: 'Next',
}

function Arrow({ diagonal = false }) { return <span aria-hidden="true" className="arrow">{diagonal ? '↗' : '→'}</span> }
const asset = (path) => `${import.meta.env.BASE_URL}${path}`

function Brand() { return <span className="brand"><img src={asset('longfor-mark.png')} alt="" className="longfor-mark" /><img src={asset('longfor-word.png')} alt="Longfor" className="longfor-word" /></span> }
function Visual({ type = 'molecule' }) {
  if (type === 'dna') return <div className="page-visual dna-visual"><div className="dna-strand strand-one" /><div className="dna-strand strand-two" /><div className="gene-tag tag-one">SDC2</div><div className="gene-tag tag-two">NDRG4</div><div className="gene-tag tag-three">SFRP2</div><div className="gene-tag tag-four">TFPI2</div><div className="gene-tag tag-five">BMP3</div><span className="visual-index">5-GENE PANEL</span></div>
  if (type === 'lab') return <div className="page-visual lab-visual"><div className="scan-frame"><div className="scan-screen"><span /><span /><span /><span /><span /></div><div className="scan-base" /></div><span className="visual-index">MOLECULAR / 05</span></div>
  if (type === 'supply') return <div className="page-visual supply-visual"><div className="supply-cube cube-one">AA</div><div className="supply-cube cube-two">BIO</div><div className="supply-cube cube-three">API</div><div className="supply-orbit" /><span className="visual-index">BIOCHEMICAL BUILDING BLOCKS</span></div>
  return <div className="page-visual molecule-visual"><div className="art-grid" /><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="core"><div className="core-inner">LF</div></div><span className="node node-a" /><span className="node node-b" /><span className="node node-c" /><span className="node node-d" /><span className="visual-index">SCIENCE × SUPPLY</span></div>
}

function App() {
  const [page, setPage] = useState(() => { const initial = window.location.hash.slice(1); return pages.includes(initial) ? initial : 'home' })
  const [sent, setSent] = useState(false)
  const t = copy
  const pageIndex = pages.indexOf(page)

  useEffect(() => {
    const syncPage = () => { const hash = window.location.hash.slice(1); setPage(pages.includes(hash) ? hash : 'home'); setSent(false) }
    window.addEventListener('hashchange', syncPage)
    return () => window.removeEventListener('hashchange', syncPage)
  }, [])
  useEffect(() => { document.documentElement.lang = 'en'; document.title = `Chongqing Longfor Biotechnology | ${t.nav[pageIndex]}` }, [page, pageIndex, t.nav])
  const go = (target) => { if (target !== page) window.location.hash = target }

  return <div className="site lang-en">
    <header className="header"><a className="brand-link" href="#home" aria-label="Longfor home"><Brand /></a><nav className="nav" aria-label="Main navigation">{t.nav.map((item, i) => <a key={pages[i]} href={`#${pages[i]}`} className={page === pages[i] ? 'active' : ''} aria-current={page === pages[i] ? 'page' : undefined}>{item}</a>)}</nav></header>

    <main className={`page page-${page}`} key={page}>
      {page === 'home' && <><section className="home-main page-main"><div className="page-copy"><div className="eyebrow"><span className="eyebrow-line" />{t.eyebrow}</div><h1>{t.title}</h1><p className="lead">{t.intro}</p><div className="hero-actions"><a className="button button-dark" href="#biochemicals">{t.explore}<Arrow /></a><a className="text-link" href="#contact">{t.contactCta}<Arrow diagonal /></a></div><div className="home-signature">CHONGQING <span>·</span> EST. 2016</div></div><Visual /></section><section className="home-strip"><div className="home-strip-copy"><div className="section-label"><span>01</span>{t.homeLabel}</div><h2>{t.aboutTitle}</h2></div><div className="home-strip-right"><p>{t.aboutText}</p><div className="stats"><div><strong>2016</strong><span>{t.stat1}</span></div><div><strong>02</strong><span>{t.stat2}</span></div><div><strong>04</strong><span>{t.stat3}</span></div></div><div className="strip-links"><a href="#biochemicals">{t.nav[1]}<Arrow diagonal /></a><a href="#diagnostics">{t.nav[2]}<Arrow diagonal /></a><a href="#about">{t.nav[4]}<Arrow diagonal /></a></div></div></section></>}

      {page === 'biochemicals' && <section className="catalog-page"><div className="catalog-heading"><div className="eyebrow"><span className="eyebrow-line" />{t.biochemEyebrow}</div><h1>{t.biochemTitle}</h1><p className="lead">{t.biochemIntro}</p></div><div className="catalog-grid">{[1,2,3,4].map((id) => <article className={`catalog-card catalog-card-${id}`} key={id}><span className="catalog-number">0{id}</span><div className="catalog-symbol">{['NH₂','CELL','BIO','API'][id-1]}</div><div className="catalog-card-copy"><span className="catalog-meta">{t[`product${id}Meta`]}</span><h2>{t[`product${id}`]}</h2><p>{t[`product${id}Desc`]}</p><a href="#contact">{t.contactCta}<Arrow diagonal /></a></div></article>)}</div></section>}

      {page === 'diagnostics' && <section className="diagnostics-page-main">
        <div className="page-main detail-main diagnostics-intro">
          <div className="page-copy"><div className="eyebrow"><span className="eyebrow-line" />{t.diagnosticsEyebrow}</div><h1>{t.diagnosticsTitle}</h1><p className="lead">{t.diagnosticsIntro}</p><span className="phase-badge"><i />CHINA · CURRENTLY IN CLINICAL TRIALS</span></div>
          <Visual type="dna" />
        </div>

        <section className="product-overview product-section">
          <div className="product-copy"><div className="product-kicker">PARTNER PRODUCT / 01</div><h2>{t.featureTitle}</h2><p>{t.featureText}</p><div className="gene-pills">{t.genes.map(gene => <span key={gene}>{gene}</span>)}</div><aside className="population-note"><span>INTENDED POPULATION</span><p>{t.intendedPopulation}</p></aside><div className="role-grid"><div><span>{t.supplierRole}</span><strong>{t.supplierName}</strong></div><div><span>{t.marketingRole}</span><strong>{t.marketingName}</strong></div></div></div>
          <figure className="product-figure"><img src={asset('product2/kit-packaging.png')} alt="Two views of the five-gene stool DNA methylation kit packaging shown in the partner product brochure" /><figcaption>Partner product packaging shown in the supplied Product 2 brochure.</figcaption></figure>
        </section>

        <section className="clinical-section product-section">
          <div className="section-title"><div className="eyebrow"><span className="eyebrow-line" />CLINICAL BACKGROUND</div><h2>{t.backgroundTitle}</h2></div>
          <p className="clinical-intro">{t.crcBackground}</p>
          <div className="clinical-facts"><article><strong>Stage II–III</strong><p>{t.stageContext}</p></article><article><strong>&lt;50%</strong><p>{t.surgerySurvival}</p></article><article><strong>~50%</strong><p>{t.metastaticContext}</p></article></div>
          <div className="rationale-notes"><p>{t.earlyIntervention}</p><p>{t.molecularContext}</p></div>
          <div className="comparison-block"><div className="section-title compact"><div className="eyebrow"><span className="eyebrow-line" />METHOD COMPARISON</div><h3>{t.comparisonTitle}</h3></div><figure className="comparison-figure"><img src={asset('product2/screening-methods.png')} alt="Source brochure illustrations comparing colonoscopy, fecal occult blood testing, and DNA methylation" /><figcaption>Illustrations reproduced from the supplied product brochure.</figcaption></figure><div className="method-cards"><article><h4>Colonoscopy</h4><p>{t.colonoscopy}</p></article><article><h4>Fecal occult blood testing (FOBT)</h4><p>{t.fobt}</p></article><article><h4>DNA methylation</h4><p>{t.methylation}</p></article></div></div>
        </section>

        <section className="assay-section product-section">
          <div className="section-title"><div className="eyebrow"><span className="eyebrow-line" />ASSAY PROCEDURE</div><h2>From stool sample to five-gene result.</h2></div>
          <div className="assay-meta"><div><span>ASSAY METHOD</span><strong>{t.method}</strong></div><div><span>ASSAY PLATFORM</span><strong>{t.platform}</strong></div></div>
          <ol className="assay-steps">{t.assaySteps.map((step, i) => <li key={step.title}><span className="step-number">0{i + 1}</span><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol>
          <figure className="source-figure procedure-figure"><img src={asset('product2/assay-procedure.png')} alt="Five-step assay workflow: sample collection, DNA extraction, bisulfite treatment, qPCR, and data analysis" /><figcaption>Five-step assay workflow</figcaption></figure>
        </section>
      </section>}

      {page === 'partnerships' && <section className="page-main detail-main"><div className="page-copy"><div className="eyebrow"><span className="eyebrow-line" />{t.partnerEyebrow}</div><h1>{t.partnerTitle}</h1><p className="lead">{t.partnerText}</p><ul className="feature-list">{t.partnershipPoints.map(item => <li key={item}><span>+</span>{item}</li>)}</ul><a className="button button-dark" href="#contact">{t.contactCta}<Arrow diagonal /></a></div><Visual /></section>}

      {page === 'about' && <section className="about-page-main"><div className="about-page-heading"><div className="eyebrow"><span className="eyebrow-line" />{t.aboutEyebrow}</div><h1>{t.aboutHeading}</h1><p className="lead">{t.aboutLong}</p></div><div className="about-page-bottom"><Visual /><div className="quality-panel"><span className="section-label"><span>01</span>{t.quality}</span><h2>{t.quality}</h2><p>{t.qualityText}</p><div className="quality-stats"><div><strong>2016</strong><span>{t.stat1}</span></div><div><strong>02</strong><span>{t.stat2}</span></div><div><strong>GMP</strong><span>Process control</span></div></div></div></div></section>}

      {page === 'contact' && <section className="contact-page-main"><div className="page-copy contact-copy"><div className="eyebrow"><span className="eyebrow-line" />{t.contactEyebrow}</div><h1>{t.contactTitle}</h1><p className="lead">{t.contactText}</p><div className="contact-mark"><Brand /></div></div><form className="enquiry-form" onSubmit={(event) => { event.preventDefault(); const data = new FormData(event.currentTarget); const subject = encodeURIComponent(`Longfor enquiry: ${data.get('interest') || ''}`); const body = encodeURIComponent(`${t.name}: ${data.get('name')}\n${t.company}: ${data.get('company')}\n${t.email}: ${data.get('email')}\n${t.interest}: ${data.get('interest')}\n\n${t.message}:\n${data.get('message')}`); window.location.href = `mailto:?subject=${subject}&body=${body}`; setSent(true) }}><div className="form-pair"><label>{t.name}<input name="name" required /></label><label>{t.company}<input name="company" /></label></div><label>{t.email}<input type="email" name="email" required /></label><label>{t.interest}<select name="interest" defaultValue=""><option value="" disabled>Select an area</option><option>{t.nav[1]}</option><option>{t.nav[2]}</option><option>{t.nav[3]}</option></select></label><label>{t.message}<textarea name="message" rows="3" required /></label><button className="button button-dark" type="submit">{t.send}<Arrow diagonal /></button><small>{sent ? t.formSuccess : t.formNote}</small></form></section>}

      <div className="page-control"><span>{t.page} {String(pageIndex + 1).padStart(2, '0')} <i>/</i> 06</span><div><button onClick={() => go(pages[(pageIndex + pages.length - 1) % pages.length])} aria-label={t.previous}>←</button><button onClick={() => go(pages[(pageIndex + 1) % pages.length])} aria-label={t.next}>→</button></div></div>
    </main>

    <footer className="footer"><a className="brand-link" href="#home"><Brand /></a><div className="footer-copy"><strong>{t.companyName}</strong><span>{t.footer}</span></div><a className="footer-contact" href="#contact">{t.contactCta}<Arrow diagonal /></a><div className="footer-bottom"><span>© 2026 CHONGQING LONGFOR BIOTECHNOLOGY</span><span>SCIENCE · QUALITY · PARTNERSHIP</span><a href="#home">LONGFOR BIO</a></div></footer>
  </div>
}

export default App
