/* Asia-Connect, shared data (real roster from asia-connect.partners, June 2026).
   Exposed as window.AC_DATA for every screen + the routing agent. */
(function () {
  const partners = [
    { id: 'laredo', name: 'Patrick Laredo', role: 'Chairman & Founder', base: 'Singapore', tenure: '35+ yrs', domains: ['Interim & Consulting', 'Cross-Border Expansion'], note: 'Founded X-PM and Asia-Connect; ex-KPMG French consulting lead.' },
    { id: 'euvrard', name: 'Franck Euvrard', role: 'Partner, Mobility & EV', base: 'Paris / Asia', tenure: '30+ yrs', domains: ['Mobility', 'Technology & Digital', 'Industry & Machinery'], note: 'Automotive & EV operator, Faurecia, VinFast, Tata Technologies, KPIT.' },
    { id: 'mardrus', name: 'Christian Mardrus', role: 'Partner, Mobility', base: 'Paris', tenure: '30+ yrs', domains: ['Mobility', 'Technology & Digital', 'Supply Chain & Logistics'], note: 'Former Renault-Nissan Executive Committee; Senior Advisor at BCG.' },
    { id: 'aidi', name: 'Asma Aidi', role: 'Partner, Transformation', base: 'Singapore', tenure: '35+ yrs', domains: ['Business Transformation', 'Transport & Supply Chain', 'Turnaround Strategy'], note: 'C-level at Thales, Vodafone, SNCF (Keolis, GEODIS).' },
    { id: 'walti', name: 'Andy Wälti', role: 'Partner, Industry & Chemicals', base: 'Bangkok', tenure: '30 yrs', domains: ['Healthcare & Biotech', 'Energy & Chemicals', 'Finance & Investment'], note: 'Region Head China & APAC at Clariant; Novartis, Sandoz.' },
    { id: 'ajacques', name: 'Nicolas Ajacques', role: 'Partner, Energy & Consumer', base: 'Shanghai', tenure: '25+ yrs', domains: ['Energy & Chemicals', 'Consumer Goods', 'Industry & Machinery'], note: 'CEO roles at Savencia, ARC; TotalEnergies Li-ion JV. Ex-President French Chamber China.' },
    { id: 'wang', name: 'Christine Wang', role: 'Partner, Innovation & AI', base: 'Munich / Shanghai', tenure: '15+ yrs', domains: ['Innovation & New Models', 'AI & Digitization', 'Market Expansion'], note: 'Lufthansa, Alibaba, BCG X. INSEAD MBA, seven languages.' },
    { id: 'piveteau', name: 'Jean-Michel Piveteau', role: 'Partner, Finance', base: 'Shanghai', tenure: '40+ yrs', domains: ['Finance & Investment', 'Interim & Consulting', 'Cross-Border Expansion'], note: 'BNP Paribas investment banking across Asia & the Gulf; 27 yrs in China.' },
    { id: 'becker', name: 'Elise Becker', role: 'Partner, Aero & Hospitality', base: 'Europe / APAC', tenure: '20 yrs', domains: ['Aeronautics & Transport', 'Telecoms', 'Hospitality & Food'], note: 'BCG; Airbus, Lufthansa Group. Europe↔APAC crisis recovery.' },
    { id: 'best', name: 'Friedhelm Best', role: 'Partner, Engineering', base: 'Singapore', tenure: '25 yrs', domains: ['Engineering & Machinery', 'Technology & Digital', 'Operational Excellence'], note: 'Ex-VP Singaporean-German Chamber of Industry & Commerce.' },
    { id: 'chen', name: 'Lena Chen', role: 'Partner, TMT & GCC', base: 'Riyadh / Shanghai', tenure: '15+ yrs', domains: ['Technology, Media & Telecom', 'GCC Expansion', 'China Globalization'], note: 'Built a listed tech group\u2019s MENA HQ from scratch.' },
    { id: 'bachar', name: 'Anas BaChar', role: 'Partner, M&A & Climate', base: 'Abu Dhabi', tenure: '20 yrs', domains: ['M&A, Debt & Capital', 'ClimateTech & AgriFood', 'Impact & ESG'], note: 'Investment banker; co-founded a USD 550M nature-based asset manager. HEC Paris.' },
    { id: 'thuet', name: 'Christophe Thuet', role: 'Partner, Industry', base: 'Singapore', tenure: '20+ yrs', domains: ['Cross-Border Expansion', 'Industry & Machinery', 'Governance'], note: 'Managing Partner, Energon Consulting Asia. IPO & M&A integration.' },
    { id: 'johansson', name: 'Göran Johansson', role: 'Partner, FMCG & Interim', base: 'Copenhagen', tenure: '25+ yrs', domains: ['FMCG', 'Interim Management', 'Digitalization'], note: 'Founded Denmark\u2019s first interim provider; GSK, Nestlé Nordics CEO.' },
    { id: 'amram', name: 'Ilann Amram', role: 'Alliance Partner, Indonesia', base: 'Jakarta', tenure: '25 yrs', domains: ['Technology & Digital', 'Engineering & Machinery'], note: 'Emerson, Rio Tinto; helps tech firms enter Indonesia. IFMT interim-certified.' },
    { id: 'giang', name: 'Sophie Thuy Minh Giang', role: 'Partner, Vietnam', base: 'Hanoi', tenure: '10+ yrs', domains: ['Market Entry', 'Greenfield Factory Set-up', 'M&A'], note: 'FDI advisory & cross-cultural set-up in Vietnam.' },
    { id: 'gomer', name: 'Frédéric Gomer', role: 'Alliance Partner, Turnaround', base: 'Asia / Europe', tenure: '20+ yrs', domains: ['Turnaround & Recovery', 'Supply Chain', 'Interim & Consulting'], note: 'MD, B2G Consulting; author of The Turnaround Blueprint. 30+ transformations.' },
    { id: 'kostos', name: 'Jay Kostos', role: 'Alliance Partner, Supply Chain', base: 'Singapore', tenure: '20+ yrs', domains: ['Supply Chain & Logistics', 'Interim & Consulting', 'Sustainability & ESG'], note: 'Resilient, sustainable supply chains across Europe & APAC.' },
    { id: 'borg', name: 'Philip Borg', role: 'Partner, Finance', base: 'Seoul', tenure: '15 yrs', domains: ['Finance & Investment', 'Interim & Consulting'], note: 'Financial primary research; co-founded an expert-network firm. NUS.' },
  ];

  const markets = ['Singapore', 'Vietnam', 'Malaysia', 'Indonesia', 'Thailand', 'Philippines', 'India', 'China', 'Japan', 'South Korea', 'Pakistan', 'Saudi Arabia', 'UAE'];

  const sectors = ['Mobility & EV', 'Industry & Machinery', 'Energy & Chemicals', 'Healthcare & Biotech', 'Technology & Digital', 'Finance & Investment', 'Consumer & FMCG', 'Supply Chain & Logistics', 'M&A & Capital', 'Sustainability & ESG'];

  // Routing map for the concierge agent: situation -> recommended service + partners
  const routes = [
    { id: 'ev', label: 'EV / automotive localisation', match: ['ev', 'electric', 'automotive', 'car', 'vehicle', 'mobility', 'battery', 'local content', 'localis', 'localiz', 'oem', 'plant', 'factory'], service: 'Project Delivery', section: 'services', partners: ['euvrard', 'mardrus'], line: 'A local-content deadline is an execution problem, not a strategy one. You need an operator who has stood up a line in-region.' },
    { id: 'crisis', label: 'A crisis / turnaround', match: ['crisis', 'turnaround', 'recovery', 'restructur', 'distress', 'losing', 'urgent', 'emergency', 'dispute'], service: 'Crisis & Recovery', section: 'services', partners: ['gomer', 'aidi'], line: 'When it\u2019s serious, we take the wheel, stabilise first, then lead the recovery to a clean hand-over.' },
    { id: 'leadership', label: 'A sudden leadership gap', match: ['ceo', 'cfo', 'coo', 'left', 'departure', 'interim', 'gap', 'maternity', 'cover', 'resign'], service: 'Interim Leadership', section: 'services', partners: ['laredo', 'johansson'], line: 'We deploy a seasoned principal into the seat in days, not a profile from a pool.' },
    { id: 'entry', label: 'Market entry / setup', match: ['market entry', 'enter', 'expansion', 'greenfield', 'set up', 'setup', 'new market', 'vietnam', 'indonesia', 'india'], service: 'Project Delivery', section: 'services', partners: ['giang', 'amram', 'best'], line: 'Entry is won on the ground, qualifying suppliers, reading regulators, and deciding on site.' },
    { id: 'ma', label: 'M&A / capital', match: ['m&a', 'merger', 'acquisition', 'capital', 'fundrais', 'debt', 'invest', 'carve'], service: 'Project Delivery', section: 'services', partners: ['bachar', 'piveteau'], line: 'From diligence to integration, we put a principal who has closed cross-border deals on your side of the table.' },
    { id: 'digital', label: 'Digital / AI transformation', match: ['digital', 'ai', 'transformation', 'technology', 'software', 'data', 'automation'], service: 'Project Delivery', section: 'services', partners: ['wang', 'aidi'], line: 'Transformation lands when someone owns delivery from inside the team, not from a deck.' },
    { id: 'supply', label: 'Supply chain / operations', match: ['supply chain', 'logistics', 'operations', 'manufactur', 'procurement', 'sourcing', 'quality'], service: 'Project Delivery', section: 'services', partners: ['kostos', 'gomer'], line: 'We embed an operator who fixes the line and the lead time, measurably.' },
    { id: 'energy', label: 'Energy / chemicals / industry', match: ['energy', 'chemical', 'industrial', 'esg', 'sustainab', 'climate'], service: 'Interim Leadership', section: 'services', partners: ['ajacques', 'walti'], line: 'Heavy industry in Asia needs leaders who have run plants here, through transition.' },
    { id: 'health', label: 'Healthcare / biotech', match: ['health', 'pharma', 'biotech', 'medtech', 'medical', 'cardio', 'device'], service: 'Project Delivery', section: 'services', partners: ['walti', 'sandyani'], line: 'Regulated markets reward operators who know the regulator and the route to launch.' },
    { id: 'finance', label: 'Finance / banking', match: ['finance', 'banking', 'cfo', 'treasury', 'investment'], service: 'Interim Leadership', section: 'services', partners: ['piveteau', 'borg'], line: 'Decades of in-region banking and finance leadership, available on a defined mandate.' },
  ];

  const facts = { partners: 18, markets: 13, deploy: '< 10 days', mandate: '3–12 mo' };

  window.AC_DATA = { partners, markets, sectors, routes, facts, byId: (id) => partners.find((p) => p.id === id) };
})();
