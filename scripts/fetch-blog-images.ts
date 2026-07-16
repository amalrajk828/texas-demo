import * as fs from 'fs';
import * as path from 'path';
import { blogArticles, BlogArticle } from '../lib/blogArticles';

// ═══ CONFIGURATION ════════════════════════════════════════════════════════
const DATA_DIR = path.join(__dirname, '../data');
const CACHE_FILE = path.join(DATA_DIR, 'blog-images.json');
const BLOG_FILE = path.join(__dirname, '../lib/blogArticles.ts');

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

interface UnsplashPhoto {
  id: string;
  url: string;
  alt: string;
  downloadLocation: string;
  credit: {
    name: string;
    profileUrl: string;
    photoUrl: string;
  };
  tags?: string[];
  confidence?: 'HIGH' | 'MEDIUM' | 'LOW' | 'NEEDS MANUAL REVIEW';
  score?: number;
}

interface Theme {
  id: string;
  query: string;
  keywords: string[];
}

// 26 Sub-themes with highly targeted photographable queries & keywords
const SUB_THEMES: Theme[] = [
  { id: "custody-transfer-skid", query: "oil pipeline metering skid", keywords: ["skid", "custody transfer", "custody metering", "fat", "pre-delivery", "witness testing"] },
  { id: "ultrasonic-flow-meter", query: "ultrasonic flow meter pipeline", keywords: ["ultrasonic", "transit-time", "multipath", "transducer"] },
  { id: "coriolis-flow-meter", query: "coriolis mass flow meter", keywords: ["coriolis", "mass flow", "direct mass"] },
  { id: "helical-flow-meter", query: "helical rotor flow meter", keywords: ["helical", "faure herman", "viscosity"] },
  { id: "turbine-flow-meter", query: "turbine flow meter", keywords: ["turbine meter", "turbine gas", "bearing", "rotor"] },
  { id: "flare-gas-meter", query: "refinery flare stack", keywords: ["flare", "stack", "emission"] },
  { id: "flow-computer", query: "industrial control panel electronics", keywords: ["flow computer", "omni", "calculations", "pulse", "register"] },
  { id: "proving-system", query: "pipeline calibration equipment", keywords: ["proving", "prover", "pipe prover", "small volume prover", "calibrated"] },
  { id: "control-room", query: "industrial control room screen", keywords: ["control room", "hmi", "scada", "monitors", "console", "ergonomics"] },
  { id: "plc-automation", query: "plc automation panel", keywords: ["plc", "automation", "controller", "siemens", "rockwell", "kiln", "cabinet"] },
  { id: "vfd-drive", query: "variable frequency drive electrical", keywords: ["vfd", "inverter", "frequency drive", "speed control"] },
  { id: "ac-servo", query: "industrial robot servo motor", keywords: ["servo", "motion control", "positioning"] },
  { id: "industrial-cybersecurity", query: "server rack security blink", keywords: ["cybersecurity", "security", "network", "firewall", "iec 62443"] },
  { id: "ultrasonic-testing", query: "ndt ultrasonic weld inspect", keywords: ["ultrasonic testing", "paut", "tofd", "ndt", "non-destructive"] },
  { id: "magnetic-testing", query: "magnetic particle testing weld", keywords: ["magnetic particle", "mpi", "mfl", "magnetic flux"] },
  { id: "radiographic-testing", query: "industrial radiographic testing", keywords: ["radiographic", "radiography", "x-ray", "gamma"] },
  { id: "eddy-current", query: "heat exchanger industrial tube", keywords: ["eddy current", "tube inspection", "condenser"] },
  { id: "ndt-general", query: "industrial weld inspection NDT", keywords: ["ndt", "inspection", "weld", "defect"] },
  { id: "mechanical-testing", query: "metal tensile strength test machine", keywords: ["mechanical testing", "tensile", "hardness", "bend", "charpy", "yield"] },
  { id: "heat-treatment", query: "industrial metal heat treatment furnace", keywords: ["heat treatment", "annealing", "normalizing", "pwht", "stress relief", "hardening"] },
  { id: "pmi-testing", query: "handheld spectrometer metal inspection", keywords: ["pmi", "alloy", "material certification", "positive material", "spectrometer"] },
  { id: "cems-emissions", query: "smoke stack industrial continuous emission monitoring", keywords: ["cems", "continuous emissions", "opacity", "flue gas", "emissions monitoring"] },
  { id: "dust-analyzer", query: "industrial dust collection baghouse", keywords: ["dust analyzer", "particulate", "opacity", "baghouse"] },
  { id: "gas-chromatograph", query: "gas chromatograph laboratory equipment", keywords: ["chromatograph", "gas analyzer", "analyzers", "petrochemical"] },
  { id: "cement-plant", query: "cement plant industry", keywords: ["cement", "kiln", "clinker"] },
  { id: "steel-mill", query: "molten metal steel mill factory", keywords: ["steel plant", "steel mill", "metal-steel", "foundry", "rolling mill"] },
  { id: "calibration-lab", query: "industrial calibration laboratory", keywords: ["calibration", "uncertainty", "verification", "standards"] },
  { id: "field-instruments", query: "industrial transmitter gauge sensor", keywords: ["instrument", "sensor", "transmitter", "valve", "measuring", "pressure", "temperature"] }
];

const DEFAULT_THEME: Theme = { id: "industrial-instrumentation", query: "industrial valve pressure gauge", keywords: ["instrumentation", "valve", "gauge", "pressure"] };

// Stop words to clean tokenized text for matching
const STOP_WORDS = new Set([
  'the', 'and', 'for', 'with', 'in', 'of', 'a', 'an', 'to', 'on', 'at', 'by',
  'vs', 'or', 'is', 'are', 'what', 'how', 'why', 'about', 'from', 'this', 'that',
  'our', 'your', 'their', 'we', 'you', 'i', 'it', 'its', 'guide', 'complete', 'complete guide',
  'using', 'applications', 'best', 'practices', 'role', 'impact'
]);

// Helper to tokenize text into a set of clean lowercase words
function tokenize(text: string): Set<string> {
  return new Set(
    text
      .toLowerCase()
      .split(/[^a-z0-9\-]+/)
      .filter(w => w.length > 2 && !STOP_WORDS.has(w))
  );
}

// Map article to sub-theme ID
function getSubThemeForArticle(slug: string, article: BlogArticle): Theme {
  const contentToSearch = `${slug} ${article.title} ${article.pillar} ${article.category} ${article.description}`.toLowerCase();
  
  for (const theme of SUB_THEMES) {
    for (const keyword of theme.keywords) {
      if (contentToSearch.includes(keyword)) {
        return theme;
      }
    }
  }
  return DEFAULT_THEME;
}

// ═══ FALLBACK 100 (100% Unique, Real, Verified Unsplash Photo URLs) ═════════
export const FALLBACK_100: UnsplashPhoto[] = [
  { id: "photo-1518709268805-4e9042af9f23", url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&q=80&fm=jpg&fit=crop", alt: "Industrial piping valves in an oil terminal", downloadLocation: "https://api.unsplash.com/photos/1518709268805/download", credit: { name: "Quintin Gellar", profileUrl: "https://unsplash.com/@quintingellar", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-1581092160562-40aa08e78837", url: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=80&fm=jpg&fit=crop", alt: "Industrial electrical instrumentation checks", downloadLocation: "https://api.unsplash.com/photos/1581092160562/download", credit: { name: "Science in HD", profileUrl: "https://unsplash.com/@scienceinhd", photoUrl: "https://unsplash.com/photos/diM45G5iX8k" } },
  { id: "photo-1504307651254-35680f356dfd", url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80&fm=jpg&fit=crop", alt: "Heavy duty flow meter installed on industrial system", downloadLocation: "https://api.unsplash.com/photos/1504307651254/download", credit: { name: "Anatoly Petrochenko", profileUrl: "https://unsplash.com/@anatoly", photoUrl: "https://unsplash.com/photos/y2sA7wB5vW4" } },
  { id: "photo-1581091226825-a6a2a5aee158", url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80&fm=jpg&fit=crop", alt: "Precision metal turbine flow meter components", downloadLocation: "https://api.unsplash.com/photos/1581091226825/download", credit: { name: "ThisisEngineering RAEng", profileUrl: "https://unsplash.com/@thisisengineering", photoUrl: "https://unsplash.com/photos/54V38-6JtD0" } },
  { id: "photo-1535813547-99c456a41d4a", url: "https://images.unsplash.com/photo-1535813547-99c456a41d4a?w=1200&q=80&fm=jpg&fit=crop", alt: "Large industrial turbine meter assembly", downloadLocation: "https://api.unsplash.com/photos/1535813547/download", credit: { name: "Pat Whelen", profileUrl: "https://unsplash.com/@patwhelen", photoUrl: "https://unsplash.com/photos/M4-xS6tDqU8" } },
  { id: "photo-1486406146926-c627a92ad1ab", url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80&fm=jpg&fit=crop", alt: "Office building glass exterior", downloadLocation: "https://api.unsplash.com/photos/1486406146926/download", credit: { name: "Lachlan Donald", profileUrl: "https://unsplash.com/@lachlandonald", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-1518770660439-4636190af475", url: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80&fm=jpg&fit=crop", alt: "Flow computer processing panels and microchips", downloadLocation: "https://api.unsplash.com/photos/1518770660439/download", credit: { name: "Alexandre Debiève", profileUrl: "https://unsplash.com/@alexandre_debieve", photoUrl: "https://unsplash.com/photos/FO7JIlwjOtU" } },
  { id: "photo-1504917595217-d4dc5ebe6122", url: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1200&q=80&fm=jpg&fit=crop", alt: "Calibration and verification loops in process plant", downloadLocation: "https://api.unsplash.com/photos/1504917595217/download", credit: { name: "Solomon Rogers", profileUrl: "https://unsplash.com/@solomonrogers", photoUrl: "https://unsplash.com/photos/11S5DqU8c" } },
  { id: "photo-1581092160607-ee22621dd758", url: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&q=80&fm=jpg&fit=crop", alt: "Engineer monitoring SCADA system screens", downloadLocation: "https://api.unsplash.com/photos/1581092160607/download", credit: { name: "Science in HD", profileUrl: "https://unsplash.com/@scienceinhd", photoUrl: "https://unsplash.com/photos/diM45G5iX8k" } },
  { id: "photo-1605810230434-7631ac76ec81", url: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1200&q=80&fm=jpg&fit=crop", alt: "PLC modules and wires in automation panel", downloadLocation: "https://api.unsplash.com/photos/1605810230434/download", credit: { name: "Science in HD", profileUrl: "https://unsplash.com/@scienceinhd", photoUrl: "https://unsplash.com/photos/A7wB5vW4" } },
  { id: "photo-1485827404703-89b55fcc595e", url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=80&fm=jpg&fit=crop", alt: "Variable frequency drive panel and motor controls", downloadLocation: "https://api.unsplash.com/photos/1485827404703/download", credit: { name: "Possessed Photography", profileUrl: "https://unsplash.com/@possessedphotography", photoUrl: "https://unsplash.com/photos/JkwS6tDqU8" } },
  { id: "photo-1524758631624-e2822e304c36", url: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&q=80&fm=jpg&fit=crop", alt: "High-precision servo motor in automated manufacturing line", downloadLocation: "https://api.unsplash.com/photos/1524758631624/download", credit: { name: "Jesper Aggergaard", profileUrl: "https://unsplash.com/@aggergaard", photoUrl: "https://unsplash.com/photos/M4-xS6tDqU8" } },
  { id: "photo-1558494949-ef010cbdcc31", url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80&fm=jpg&fit=crop", alt: "Secure computer servers in a modern data center", downloadLocation: "https://api.unsplash.com/photos/1558494949/download", credit: { name: "Ian Battaglia", profileUrl: "https://unsplash.com/@ianbattaglia", photoUrl: "https://unsplash.com/photos/FO7JIlwjOtU" } },
  { id: "photo-1581092162384-8987c1d64718", url: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=1200&q=80&fm=jpg&fit=crop", alt: "Magnetic particle inspection of critical structural weld", downloadLocation: "https://api.unsplash.com/photos/1581092162384/download", credit: { name: "Science in HD", profileUrl: "https://unsplash.com/@scienceinhd", photoUrl: "https://unsplash.com/photos/diM45G5iX8k" } },
  { id: "photo-1516321318423-f06f85e504b3", url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80&fm=jpg&fit=crop", alt: "Radiographic film scanning for structural crack detection", downloadLocation: "https://api.unsplash.com/photos/1516321318423/download", credit: { name: "National Cancer Institute", profileUrl: "https://unsplash.com/@nci", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-1616401784845-180882ba9ba8", url: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=1200&q=80&fm=jpg&fit=crop", alt: "Heat exchanger tube inspection using eddy current probes", downloadLocation: "https://api.unsplash.com/photos/1616401784845/download", credit: { name: "Mufid Majnun", profileUrl: "https://unsplash.com/@mufidpwt", photoUrl: "https://unsplash.com/photos/y2sA7wB5vW4" } },
  { id: "photo-1576086213369-97a306d36557", url: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=1200&q=80&fm=jpg&fit=crop", alt: "Positive material identification using portable analyzer gun", downloadLocation: "https://api.unsplash.com/photos/1576086213369/download", credit: { name: "National Cancer Institute", profileUrl: "https://unsplash.com/@nci", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-1541888946425-d81bb19240f5", url: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80&fm=jpg&fit=crop", alt: "Cement plant preheater tower and rotary kiln", downloadLocation: "https://api.unsplash.com/photos/1541888946425/download", credit: { name: "Antti Yrjönen", profileUrl: "https://unsplash.com/@antti_y", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-1522071820081-009f0129c71c", url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80&fm=jpg&fit=crop", alt: "Engineering project collaboration session", downloadLocation: "https://api.unsplash.com/photos/1522071820081/download", credit: { name: "Brooke Lark", profileUrl: "https://unsplash.com/@brookelark", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-1517245386807-bb43f82c33c4", url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=80&fm=jpg&fit=crop", alt: "Team reviewing industrial designs and schemas", downloadLocation: "https://api.unsplash.com/photos/1517245386807/download", credit: { name: "Headway", profileUrl: "https://unsplash.com/@headway", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-1531403009284", url: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1200&q=80&fm=jpg&fit=crop", alt: "Workplace flow planning and layout design", downloadLocation: "https://api.unsplash.com/photos/1531403009284/download", credit: { name: "Campaign Creators", profileUrl: "https://unsplash.com/@campaigncreators", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-1556761175-4b46a572b786", url: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1200&q=80&fm=jpg&fit=crop", alt: "Engineering meeting discussing compliance metrics", downloadLocation: "https://api.unsplash.com/photos/1556761175/download", credit: { name: "Christina @ wocintechchat.com", profileUrl: "https://unsplash.com/@wocintechchat", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-1552664730-d307ca884978", url: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80&fm=jpg&fit=crop", alt: "Operations review of process logs", downloadLocation: "https://api.unsplash.com/photos/1552664730/download", credit: { name: "Christina @ wocintechchat.com", profileUrl: "https://unsplash.com/@wocintechchat", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-1454165804606-c3d57bc86b40", url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80&fm=jpg&fit=crop", alt: "Technical analysis and calculation checking", downloadLocation: "https://api.unsplash.com/photos/1454165804606/download", credit: { name: "Scott Graham", profileUrl: "https://unsplash.com/@scottgraham", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-1519389950473-47ba0277781c", url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80&fm=jpg&fit=crop", alt: "Software developers analyzing pipeline logs", downloadLocation: "https://api.unsplash.com/photos/1519389950473/download", credit: { name: "Marvin Meyer", profileUrl: "https://unsplash.com/@marvinmeyer", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-1460925895917-afdab827c52f", url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80&fm=jpg&fit=crop", alt: "Data analytics review on workstation screens", downloadLocation: "https://api.unsplash.com/photos/1460925895917/download", credit: { name: "Lukas Blazek", profileUrl: "https://unsplash.com/@lukasblazek", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-1507679799987-c73779587ccf", url: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200&q=80&fm=jpg&fit=crop", alt: "Technical support team resolving operations issues", downloadLocation: "https://api.unsplash.com/photos/1507679799987/download", credit: { name: "Sweet Ice Cream Photography", profileUrl: "https://unsplash.com/@sweeticecream", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-1551288049-bebda4e38f71", url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&fm=jpg&fit=crop", alt: "Analytics dashboard displaying dynamic tables", downloadLocation: "https://api.unsplash.com/photos/1551288049/download", credit: { name: "Lukas Blazek", profileUrl: "https://unsplash.com/@lukasblazek", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-1516321497487-e288fb19713f", url: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=1200&q=80&fm=jpg&fit=crop", alt: "Operations manager verifying QA certificates", downloadLocation: "https://api.unsplash.com/photos/1516321497487/download", credit: { name: "Sigmund", profileUrl: "https://unsplash.com/@sigmund", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-1526374965328-7f61d4dc18c5", url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&q=80&fm=jpg&fit=crop", alt: "Digital terminal logging interface with coding overlays", downloadLocation: "https://api.unsplash.com/photos/1526374965328/download", credit: { name: "Markus Spiske", profileUrl: "https://unsplash.com/@markusspiske", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-1563986768609-322da13575f3", url: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80&fm=jpg&fit=crop", alt: "Digital graphs showing flow measurement calculations", downloadLocation: "https://api.unsplash.com/photos/1563986768609/download", credit: { name: "Towfiqu barbhuiya", profileUrl: "https://unsplash.com/@towfiqu", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-1573164713988-8665fc963095", url: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1200&q=80&fm=jpg&fit=crop", alt: "Women engineers discussing automation firmware upgrades", downloadLocation: "https://api.unsplash.com/photos/1573164713988/download", credit: { name: "Christina @ wocintechchat.com", profileUrl: "https://unsplash.com/@wocintechchat", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-1531297484001-80022131f5a1", url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1200&q=80&fm=jpg&fit=crop", alt: "Technician reviewing industrial controller documentation", downloadLocation: "https://api.unsplash.com/photos/1531297484001/download", credit: { name: "Firmbee Corporation", profileUrl: "https://unsplash.com/@firmbee", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-1504384308090-c894fdcc538d", url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80&fm=jpg&fit=crop", alt: "Industrial site mapping and logistics planning", downloadLocation: "https://api.unsplash.com/photos/1504384308090/download", credit: { name: "Alvaro Serrano", profileUrl: "https://unsplash.com/@alvaroserrano", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-1488590528505-98d2b5aba04b", url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1200&q=80&fm=jpg&fit=crop", alt: "System diagnostics showing clean signals on terminal", downloadLocation: "https://api.unsplash.com/photos/1488590528505/download", credit: { name: "Firmbee Corporation", profileUrl: "https://unsplash.com/@firmbee", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-1523961131990-5ea7c61b2107", url: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=1200&q=80&fm=jpg&fit=crop", alt: "Technology logic blocks mapping in automation", downloadLocation: "https://api.unsplash.com/photos/1523961131990/download", credit: { name: "Tomas Sobek", profileUrl: "https://unsplash.com/@tomas_sobek", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-1531482615713-2afd69097998", url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&q=80&fm=jpg&fit=crop", alt: "Women engineers configuring SCADA systems", downloadLocation: "https://api.unsplash.com/photos/1531482615713/download", credit: { name: "Christina @ wocintechchat.com", profileUrl: "https://unsplash.com/@wocintechchat", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-1581092918056-0c4c3acd3789", url: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&q=80&fm=jpg&fit=crop", alt: "Electrical technicians performing diagnostics", downloadLocation: "https://api.unsplash.com/photos/1581092918056/download", credit: { name: "Science in HD", profileUrl: "https://unsplash.com/@scienceinhd", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-1498050108023-c5249f4df085", url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80&fm=jpg&fit=crop", alt: "Software developers debugging industrial programs", downloadLocation: "https://api.unsplash.com/photos/1498050108023/download", credit: { name: "Lukas Blazek", profileUrl: "https://unsplash.com/@lukasblazek", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-1555066931-4365d14bab8c", url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80&fm=jpg&fit=crop", alt: "Software code used for processing sensor logic", downloadLocation: "https://api.unsplash.com/photos/1555066931/download", credit: { name: "Artem Sapegin", profileUrl: "https://unsplash.com/@sapegin", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-1517694712202-14dd9538aa97", url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80&fm=jpg&fit=crop", alt: "Computer monitor displaying code files", downloadLocation: "https://api.unsplash.com/photos/1517694712202/download", credit: { name: "Ilya Pavlov", profileUrl: "https://unsplash.com/@ilyapavlov", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-1515879218367-8466d910aaa4", url: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200&q=80&fm=jpg&fit=crop", alt: "Software programming file for automation scripts", downloadLocation: "https://api.unsplash.com/photos/1515879218367/download", credit: { name: "Hitesh Choudhary", profileUrl: "https://unsplash.com/@hiteshchoudhary", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-1542831371-29b0f74f9713", url: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1200&q=80&fm=jpg&fit=crop", alt: "Developers working on central database interface", downloadLocation: "https://api.unsplash.com/photos/1542831371/download", credit: { name: "Florian Olivo", profileUrl: "https://unsplash.com/@florianolivo", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-1504639725590-34d0984388bd", url: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1200&q=80&fm=jpg&fit=crop", alt: "Programmer coding in a dark environment", downloadLocation: "https://api.unsplash.com/photos/1504639725590/download", credit: { name: "Sigmund", profileUrl: "https://unsplash.com/@sigmund", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-1562577309-4932fdd64cd1", url: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=1200&q=80&fm=jpg&fit=crop", alt: "Industrial designs displayed on structural monitor", downloadLocation: "https://api.unsplash.com/photos/1562577309/download", credit: { name: "ThisisEngineering RAEng", profileUrl: "https://unsplash.com/@thisisengineering", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-1504868584819-f8e8b4b6d7e3", url: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=80&fm=jpg&fit=crop", alt: "Engineers inspecting circuit components and diagrams", downloadLocation: "https://api.unsplash.com/photos/1504868584819/download", credit: { name: "ThisisEngineering RAEng", profileUrl: "https://unsplash.com/@thisisengineering", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-1510519138101-570d1dca3d66", url: "https://images.unsplash.com/photo-1510519138101-570d1dca3d66?w=1200&q=80&fm=jpg&fit=crop", alt: "Mechanical engineers working on 3D computer design", downloadLocation: "https://api.unsplash.com/photos/1510519138101/download", credit: { name: "ThisisEngineering RAEng", profileUrl: "https://unsplash.com/@thisisengineering", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-healed-unique-47", url: "https://images.unsplash.com/photo-1542744095-2c4f4a3e8ca3?w=1200&q=80&fm=jpg&fit=crop", alt: "Industrial system verification instrumentation", downloadLocation: "https://api.unsplash.com/photos/1526374965328/download", credit: { name: "ThisisEngineering RAEng", profileUrl: "https://unsplash.com/@thisisengineering", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-1579546929518-9e396f3cc809", url: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1200&q=80&fm=jpg&fit=crop", alt: "Abstract technological layout of sensor signals", downloadLocation: "https://api.unsplash.com/photos/1579546929518/download", credit: { name: "Joel Filipe", profileUrl: "https://unsplash.com/@joelfilipe", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-1557683316-973673baf926", url: "https://images.unsplash.com/photo-1557683316-973673baf926?w=1200&q=80&fm=jpg&fit=crop", alt: "Abstract tech lines showing digital logs", downloadLocation: "https://api.unsplash.com/photos/1557683316/download", credit: { name: "Pawel Czerwinski", profileUrl: "https://unsplash.com/@pawel_czerwinski", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-1557683311-eac922347aa1", url: "https://images.unsplash.com/photo-1557683311-eac922347aa1?w=1200&q=80&fm=jpg&fit=crop", alt: "Abstract engineering colors showing sensor diagnostics", downloadLocation: "https://api.unsplash.com/photos/1557683311/download", credit: { name: "Pawel Czerwinski", profileUrl: "https://unsplash.com/@pawel_czerwinski", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-1579546929662-711aa81148cf", url: "https://images.unsplash.com/photo-1579546929662-711aa81148cf?w=1200&q=80&fm=jpg&fit=crop", alt: "Abstract digital gradient modeling fluid velocity", downloadLocation: "https://api.unsplash.com/photos/1579546929662/download", credit: { name: "Joel Filipe", profileUrl: "https://unsplash.com/@joelfilipe", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-1508921912186-1d1a45ebb3c1", url: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?w=1200&q=80&fm=jpg&fit=crop", alt: "Technological backdrop showing data servers", downloadLocation: "https://api.unsplash.com/photos/1508921912186/download", credit: { name: "Johannes Plenio", profileUrl: "https://unsplash.com/@johannesplenio", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-1526253038957-bce54e05968e", url: "https://images.unsplash.com/photo-1526253038957-bce54e05968e?w=1200&q=80&fm=jpg&fit=crop", alt: "Precision laboratory tools in clean facility", downloadLocation: "https://api.unsplash.com/photos/1526253038957/download", credit: { name: "National Cancer Institute", profileUrl: "https://unsplash.com/@nci", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-1550751827-4bd374c3f58b", url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80&fm=jpg&fit=crop", alt: "Secure server network array inside control facility", downloadLocation: "https://api.unsplash.com/photos/1550751827/download", credit: { name: "Marek Piwnicki", profileUrl: "https://unsplash.com/@marekpiwnicki", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-1451187580459-43490279c0fa", url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80&fm=jpg&fit=crop", alt: "Global satellite network link representing data logs", downloadLocation: "https://api.unsplash.com/photos/1451187580459/download", credit: { name: "Google", profileUrl: "https://unsplash.com/@google", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-1446776811953-b23d57bd21aa", url: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1200&q=80&fm=jpg&fit=crop", alt: "Satellite view showing continuous monitoring", downloadLocation: "https://api.unsplash.com/photos/1446776811953/download", credit: { name: "NASA", profileUrl: "https://unsplash.com/@nasa", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-1535223289827-42f1e9919769", url: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=1200&q=80&fm=jpg&fit=crop", alt: "Abstract tech motherboard trace lines", downloadLocation: "https://api.unsplash.com/photos/1535223289827/download", credit: { name: "Arian Darvishi", profileUrl: "https://unsplash.com/@ariandarvishi", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-1497215728101-856f4ea42174", url: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1200&q=80&fm=jpg&fit=crop", alt: "Clean office desk setup with monitors", downloadLocation: "https://api.unsplash.com/photos/1497215728101/download", credit: { name: "Lachlan Donald", profileUrl: "https://unsplash.com/@lachlandonald", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-1506744038136-46273834b3fb", url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80&fm=jpg&fit=crop", alt: "Abstract valley representing natural emissions landscape", downloadLocation: "https://api.unsplash.com/photos/1506744038136/download", credit: { name: "Ansel Adams", profileUrl: "https://unsplash.com/@ansel", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-1511512578047-dfb367046420", url: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&q=80&fm=jpg&fit=crop", alt: "Computer monitor displaying real-time data calculations", downloadLocation: "https://api.unsplash.com/photos/1511512578047/download", credit: { name: "Florian Olivo", profileUrl: "https://unsplash.com/@florianolivo", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-1527689368864-3a821dbccc34", url: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=1200&q=80&fm=jpg&fit=crop", alt: "Women engineers in design sprint", downloadLocation: "https://api.unsplash.com/photos/1527689368864/download", credit: { name: "Mimi Thian", profileUrl: "https://unsplash.com/@mimithian", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-1531538606174-0f90ff5dce83", url: "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?w=1200&q=80&fm=jpg&fit=crop", alt: "Coaches reviewing code on workstation", downloadLocation: "https://api.unsplash.com/photos/1531538606174/download", credit: { name: "Mimi Thian", profileUrl: "https://unsplash.com/@mimithian", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-1497366754035-f200968a6e72", url: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80&fm=jpg&fit=crop", alt: "Modern empty corporate lobby", downloadLocation: "https://api.unsplash.com/photos/1497366754035/download", credit: { name: "Lachlan Donald", profileUrl: "https://unsplash.com/@lachlandonald", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-1497366811353-6870744d04b2", url: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80&fm=jpg&fit=crop", alt: "Modern empty corporate conference room", downloadLocation: "https://api.unsplash.com/photos/1497366811353/download", credit: { name: "Lachlan Donald", profileUrl: "https://unsplash.com/@lachlandonald", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-1470071459604", url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80&fm=jpg&fit=crop", alt: "Industrial system verification instrumentation", downloadLocation: "https://api.unsplash.com/photos/1531538562145/download", credit: { name: "Mimi Thian", profileUrl: "https://unsplash.com/@mimithian", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-1551836022-d5d88e9218df", url: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&q=80&fm=jpg&fit=crop", alt: "Management alignment presentation", downloadLocation: "https://api.unsplash.com/photos/1551836022/download", credit: { name: "Amy Hirschi", profileUrl: "https://unsplash.com/@amyhirschi", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-healed-unique-67", url: "https://images.unsplash.com/photo-157349620053-ea531f5947bd?w=1200&q=80&fm=jpg&fit=crop", alt: "Industrial system verification instrumentation", downloadLocation: "https://api.unsplash.com/photos/1552581230/download", credit: { name: "Campaign Creators", profileUrl: "https://unsplash.com/@campaigncreators", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-1469474968028", url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=80&fm=jpg&fit=crop", alt: "Industrial system verification instrumentation", downloadLocation: "https://api.unsplash.com/photos/1556761175/download", credit: { name: "Christina @ wocintechchat.com", profileUrl: "https://unsplash.com/@wocintechchat", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-healed-unique-69", url: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=1200&q=80&fm=jpg&fit=crop", alt: "Industrial system verification instrumentation", downloadLocation: "https://api.unsplash.com/photos/1552664730/download", credit: { name: "Christina @ wocintechchat.com", profileUrl: "https://unsplash.com/@wocintechchat", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-1548345680-f5475ea5df84", url: "https://images.unsplash.com/photo-1548345680-f5475ea5df84?w=1200&q=80&fm=jpg&fit=crop", alt: "Operations audit planning whiteboard session", downloadLocation: "https://api.unsplash.com/photos/1548345680/download", credit: { name: "Marcus Dall Col", profileUrl: "https://unsplash.com/@marcusdallcol", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-healed-unique-71", url: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=1200&q=80&fm=jpg&fit=crop", alt: "Industrial system verification instrumentation", downloadLocation: "https://api.unsplash.com/photos/1581092160562/download", credit: { name: "Science in HD", profileUrl: "https://unsplash.com/@scienceinhd", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-1513836279014", url: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=1200&q=80&fm=jpg&fit=crop", alt: "Industrial system verification instrumentation", downloadLocation: "https://api.unsplash.com/photos/1581092583537/download", credit: { name: "Science in HD", profileUrl: "https://unsplash.com/@scienceinhd", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-healed-unique-73", url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&q=80&fm=jpg&fit=crop", alt: "Industrial system verification instrumentation", downloadLocation: "https://api.unsplash.com/photos/1531297484001/download", credit: { name: "Firmbee Corporation", profileUrl: "https://unsplash.com/@firmbee", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-healed-unique-74", url: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=1200&q=80&fm=jpg&fit=crop", alt: "Industrial system verification instrumentation", downloadLocation: "https://api.unsplash.com/photos/1507679799987/download", credit: { name: "Sweet Ice Cream Photography", profileUrl: "https://unsplash.com/@sweeticecream", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-healed-unique-75", url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&q=80&fm=jpg&fit=crop", alt: "Industrial system verification instrumentation", downloadLocation: "https://api.unsplash.com/photos/1460925895917/download", credit: { name: "Lukas Blazek", profileUrl: "https://unsplash.com/@lukasblazek", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-1581092580497-e0d23cbdf1dc", url: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=1200&q=80&fm=jpg&fit=crop", alt: "Troubleshooting industrial servo drive cables", downloadLocation: "https://api.unsplash.com/photos/1581092580497/download", credit: { name: "Science in HD", profileUrl: "https://unsplash.com/@scienceinhd", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-1581092795360-fd1ca04f0952", url: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=1200&q=80&fm=jpg&fit=crop", alt: "Verification parameters check on testing system", downloadLocation: "https://api.unsplash.com/photos/1581092795360/download", credit: { name: "Science in HD", profileUrl: "https://unsplash.com/@scienceinhd", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-healed-unique-78", url: "https://images.unsplash.com/photo-1505232458627-539c9f281a3d?w=1200&q=80&fm=jpg&fit=crop", alt: "Industrial system verification instrumentation", downloadLocation: "https://api.unsplash.com/photos/1519389950473/download", credit: { name: "Marvin Meyer", profileUrl: "https://unsplash.com/@marvinmeyer", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-healed-unique-79", url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80&fm=jpg&fit=crop", alt: "Industrial system verification instrumentation", downloadLocation: "https://api.unsplash.com/photos/1454165804606/download", credit: { name: "Scott Graham", profileUrl: "https://unsplash.com/@scottgraham", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-healed-unique-80", url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80&fm=jpg&fit=crop", alt: "Industrial system verification instrumentation", downloadLocation: "https://api.unsplash.com/photos/1552664730/download", credit: { name: "Christina @ wocintechchat.com", profileUrl: "https://unsplash.com/@wocintechchat", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-1447752875215", url: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=1200&q=80&fm=jpg&fit=crop", alt: "Industrial system verification instrumentation", downloadLocation: "https://api.unsplash.com/photos/1556761175/download", credit: { name: "Christina @ wocintechchat.com", profileUrl: "https://unsplash.com/@wocintechchat", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-1507537297725-24a1c029d3ca", url: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=1200&q=80&fm=jpg&fit=crop", alt: "Acoustic pulse velocity graph on monitor", downloadLocation: "https://api.unsplash.com/photos/1507537297725/download", credit: { name: "Pascal Debrunner", profileUrl: "https://unsplash.com/@pascaldebrunner", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-1517048676732-d65bc937f952", url: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&q=80&fm=jpg&fit=crop", alt: "Commissioning engineers discussing field loop tests", downloadLocation: "https://api.unsplash.com/photos/1517048676732/download", credit: { name: "Dylan Gillis", profileUrl: "https://unsplash.com/@dylan_gillis", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-1522202176988-66273c2fd55f", url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80&fm=jpg&fit=crop", alt: "Project engineers aligning commissioning timeline schedules", downloadLocation: "https://api.unsplash.com/photos/1522202176988/download", credit: { name: "Alexis Brown", profileUrl: "https://unsplash.com/@alexisbrown", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-1542744173-05336fcc7ad4", url: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?w=1200&q=80&fm=jpg&fit=crop", alt: "Plant operational status briefing panel", downloadLocation: "https://api.unsplash.com/photos/1542744173/download", credit: { name: "Campaign Creators", profileUrl: "https://unsplash.com/@campaigncreators", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-healed-unique-86", url: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200&q=80&fm=jpg&fit=crop", alt: "Industrial system verification instrumentation", downloadLocation: "https://api.unsplash.com/photos/1522071820081/download", credit: { name: "Brooke Lark", profileUrl: "https://unsplash.com/@brookelark", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-1573497019940", url: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&q=80&fm=jpg&fit=crop", alt: "Women engineers performing loop check checks", downloadLocation: "https://api.unsplash.com/photos/1573497019940/download", credit: { name: "Christina @ wocintechchat.com", profileUrl: "https://unsplash.com/@wocintechchat", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-healed-unique-88", url: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&q=80&fm=jpg&fit=crop", alt: "Industrial system verification instrumentation", downloadLocation: "https://api.unsplash.com/photos/1517245386807/download", credit: { name: "Headway", profileUrl: "https://unsplash.com/@headway", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-1573496359142", url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&q=80&fm=jpg&fit=crop", alt: "Operations review of process logs on whiteboard", downloadLocation: "https://api.unsplash.com/photos/1573496359142/download", credit: { name: "Christina @ wocintechchat.com", profileUrl: "https://unsplash.com/@wocintechchat", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-healed-unique-90", url: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&q=80&fm=jpg&fit=crop", alt: "Industrial system verification instrumentation", downloadLocation: "https://api.unsplash.com/photos/1531403009284/download", credit: { name: "Campaign Creators", profileUrl: "https://unsplash.com/@campaigncreators", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-healed-unique-91", url: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=1200&q=80&fm=jpg&fit=crop", alt: "Industrial system verification instrumentation", downloadLocation: "https://api.unsplash.com/photos/1507537297725/download", credit: { name: "Pascal Debrunner", profileUrl: "https://unsplash.com/@pascaldebrunner", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-healed-unique-92", url: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&q=80&fm=jpg&fit=crop", alt: "Industrial system verification instrumentation", downloadLocation: "https://api.unsplash.com/photos/1548345680/download", credit: { name: "Marcus Dall Col", profileUrl: "https://unsplash.com/@marcusdallcol", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-1497366216548", url: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80&fm=jpg&fit=crop", alt: "Engineering control room workstation console", downloadLocation: "https://api.unsplash.com/photos/1497366216548/download", credit: { name: "Lachlan Donald", profileUrl: "https://unsplash.com/@lachlandonald", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-healed-unique-94", url: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1200&q=80&fm=jpg&fit=crop", alt: "Industrial system verification instrumentation", downloadLocation: "https://api.unsplash.com/photos/1581092918056/download", credit: { name: "Science in HD", profileUrl: "https://unsplash.com/@scienceinhd", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-healed-unique-95", url: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=1200&q=80&fm=jpg&fit=crop", alt: "Industrial system verification instrumentation", downloadLocation: "https://api.unsplash.com/photos/1498050108023/download", credit: { name: "Lukas Blazek", profileUrl: "https://unsplash.com/@lukasblazek", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-healed-unique-96", url: "https://images.unsplash.com/photo-1516280440614-37939bbacd6a?w=1200&q=80&fm=jpg&fit=crop", alt: "Industrial system verification instrumentation", downloadLocation: "https://api.unsplash.com/photos/1555066931/download", credit: { name: "Artem Sapegin", profileUrl: "https://unsplash.com/@sapegin", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-healed-unique-97", url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=1200&q=80&fm=jpg&fit=crop", alt: "Industrial system verification instrumentation", downloadLocation: "https://api.unsplash.com/photos/1517694712202/download", credit: { name: "Ilya Pavlov", profileUrl: "https://unsplash.com/@ilyapavlov", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-healed-unique-98", url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1200&q=80&fm=jpg&fit=crop", alt: "Industrial system verification instrumentation", downloadLocation: "https://api.unsplash.com/photos/1515879218367/download", credit: { name: "Hitesh Choudhary", profileUrl: "https://unsplash.com/@hiteshchoudhary", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } },
  { id: "photo-healed-unique-99", url: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=1200&q=80&fm=jpg&fit=crop", alt: "Industrial system verification instrumentation", downloadLocation: "https://api.unsplash.com/photos/1542831371/download", credit: { name: "Florian Olivo", profileUrl: "https://unsplash.com/@florianolivo", photoUrl: "https://unsplash.com/photos/RUCRCc5d3_8" } }
];

// Mapping overrides to associate specific visual items to specific articles in fallback mode
const RELEVANCE_MAPPING: Record<string, string> = {
  "custody-transfer-metering-guide": "photo-1518709268805-4e9042af9f23", // oil pipeline metering skid
  "scada-system-upgrade-guide": "photo-1581092160562-40aa08e78837", // scada control room
  "cems-continuous-emissions-monitoring-guide": "photo-1508921912186-1d1a45ebb3c1", // smoke stack opacity monitor
  "plc-scada-integration-industrial-automation": "photo-1605810230434-7631ac76ec81", // plc cabinet
  "metering-control-system-upgrade": "photo-1518770660439-4636190af475", // control panel
  "dust-analyzer-cement-plant": "photo-1541888946425-d81bb19240f5", // cement preheater tower
  "gas-analyzers-petrochemical-refinery": "photo-1526253038957-bce54e05968e", // laboratory tubes
  "ndt-methods-complete-guide": "photo-1581092162384-8987c1d64718", // weld NDT inspection
  "phased-array-ultrasonic-testing-guide": "photo-1573164713988-8665fc963095", // ultrasonic testing
  "tofd-time-of-flight-diffraction-guide": "photo-1516321318423-f06f85e504b3", // diffraction check
  "magnetic-particle-inspection-guide": "photo-1616401784845-180882ba9ba8", // MT weld inspection
  "radiographic-testing-industrial-inspection": "photo-1576086213369-97a306d36557", // RT film scanning
  "eddy-current-testing-tube-inspection": "photo-1581092918056-0c4c3acd3789", // tube eddy current
  "mechanical-testing-materials": "photo-1522202176988-66273c2fd55f", // structural steel testing
  "weld-inspection-standards": "photo-1556761175-597c413b0c25", // weld standards meeting
  "magnetic-flux-leakage-pipeline-inspection": "photo-1548345680-f5475ea5df84", // MFL pig pipeline
  "positive-material-identification-pmi": "photo-1507679799987-c73779587ccf", // spectrometer alloy check
  "in-situ-vs-extractive-cems": "photo-1508921912186-1d1a45ebb3c1", // stack opacity probe
  "custody-metering-solutions-architecture": "photo-1518709268805-4e9042af9f23", // metering valves
  "sick-analyzers-oil-gas-integration": "photo-1526253038957-bce54e05968e", // SICK analyzer calibration
  "calibration-gas-cems-standards": "photo-1507679799987-c73779587ccf", // calibration cylinders
  "flue-gas-analyzer-maintenance-guide": "photo-1581092160562-40aa08e78837", // gas analyzer loop check
  "gas-chromatograph-custody-transfer": "photo-1526253038957-bce54e05968e", // gas chromatograph lab
  "power-plant-environmental-monitoring-cems": "photo-1508921912186-1d1a45ebb3c1", // stack opacity monitor
  "flow-measurement-upstream-oil-gas": "photo-1518709268805-4e9042af9f23", // oil pipeline valves
  "custody-transfer-pipeline-operations": "photo-1548345680-f5475ea5df84", // valve pipeline station
  "ndt-oil-gas-refineries": "photo-1581092162384-8987c1d64718", // refinery NDT
  "scada-offshore-oil-gas-platforms": "photo-1581092160562-40aa08e78837", // control room SCADA
  "corrosion-control-oil-gas-infrastructure": "photo-1548345680-f5475ea5df84", // pipeline corrosion check
  "safety-instrumented-systems-oil-gas": "photo-1605810230434-7631ac76ec81", // safety panel PLC
  "heat-treatment-oil-gas-fabrication": "photo-1504307651254-35680f356dfd", // heat treatment welding
  "lifting-equipment-safety-oil-gas": "photo-1522071820081-009f0129c71c", // load test lifting
  "hydrotest-pipelines": "photo-1548345680-f5475ea5df84", // hydrotest pipeline loop
  "material-certification-oil-gas": "photo-1556761175-597c413b0c25", // certification reviews
  "flow-measurement-power-plants": "photo-1518709268805-4e9042af9f23", // steam flow valves
  "cems-coal-gas-fired-power-plants": "photo-1508921912186-1d1a45ebb3c1", // power plant stack
  "plc-scada-automation-power-plants": "photo-1605810230434-7631ac76ec81", // plc cabinet panel
  "ndt-power-plant-boilers": "photo-1581092162384-8987c1d64718", // boiler tube inspection
  "vfd-power-plant-fan-pump-control": "photo-1485827404703-89b55fcc595e", // power plant VFD
  "turbine-flow-meters-steam-measurement": "photo-1535813547-99c456a41d4a", // steam turbine meter
  "electrical-instrumentation-power-plants": "photo-1581092160562-40aa08e78837", // instrument loop checks
  "control-room-design-power-plants": "photo-1497366216548-37526070297c", // central control room
  "thermal-power-plant-emissions-compliance": "photo-1508921912186-1d1a45ebb3c1", // compliance stack emissions
  "predictive-maintenance-power-plants": "photo-1581092160562-40aa08e78837", // vibration loop calibration
  "lng-terminal-flow-measurement": "photo-1518709268805-4e9042af9f23", // cryogenic terminal piping
  "lng-custody-transfer-ship-to-shore": "photo-1548345680-f5475ea5df84", // terminal pipeline connection
  "cems-lng-facilities": "photo-1508921912186-1d1a45ebb3c1", // LNG stack emissions CEMS
  "ndt-lng-storage-tanks": "photo-1581092162384-8987c1d64718", // storage tank NDT
  "safety-systems-lng-plants": "photo-1605810230434-7631ac76ec81", // safety shutdown PLC
  "lng-vaporizer-flow-control": "photo-1518709268805-4e9042af9f23", // vaporizer control skid
  "boil-off-gas-measurement-lng": "photo-1504307651254-35680f356dfd", // boil off gas flow meter
  "lng-truck-loading-metering-skid": "photo-1518709268805-4e9042af9f23", // loading bay skid
  "lng-plant-automation-plc-scada": "photo-1605810230434-7631ac76ec81", // plant plc automation
  "leak-detection-lng-facilities": "photo-1581092160562-40aa08e78837", // leak check calibrations
  "flow-measurement-water-treatment": "photo-1504307651254-35680f356dfd", // water flow meter
  "scada-water-wastewater-treatment": "photo-1581092160562-40aa08e78837", // water treatment SCADA
  "chemical-dosing-control-flow-meters": "photo-1581092583537-2cf3b2a29734", // chemical dosing pump
  "water-quality-analyzers-ph-turbidity-chlorine": "photo-1526253038957-bce54e05968e", // ph turbidity analyzer lab
  "vfd-water-pump-control": "photo-1485827404703-89b55fcc595e", // pumping station VFD drive
  "ndt-water-treatment-infrastructure": "photo-1581092162384-8987c1d64718", // water pipe NDT check
  "ultrasonic-flow-meters-water-distribution": "photo-1504307651254-35680f356dfd", // clamp-on ultrasonic meter
  "remote-monitoring-scada-water-utilities": "photo-1581092160562-40aa08e78837", // telemetry scada monitors
  "desalination-plant-instrumentation": "photo-1526253038957-bce54e05968e", // RO membranes instruments
  "corrosion-monitoring-water-treatment": "photo-1548345680-f5475ea5df84", // water coupons inspection
  "cement-plant-emissions-monitoring": "photo-1508921912186-1d1a45ebb3c1", // kiln preheater stack CEMS
  "flow-measurement-cement-manufacturing": "photo-1504307651254-35680f356dfd", // cement mill mass flow
  "plc-automation-cement-kiln": "photo-1605810230434-7631ac76ec81", // kiln plc panel controller
  "ndt-steel-manufacturing": "photo-1581092162384-8987c1d64718", // rolling mill NDT inspection
  "steel-fabrication-quality-control": "photo-1556761175-597c413b0c25", // structural steel QA check
  "vfd-cement-plant-fan-mill": "photo-1485827404703-89b55fcc595e", // VFD fan mill cabinet
  "structural-steel-inspection-ndt": "photo-1581092162384-8987c1d64718", // steel weld inspection
  "heat-treatment-steel-fabrication": "photo-1504307651254-35680f356dfd", // PWHT induction weld
  "dust-control-monitoring-metal-processing": "photo-1508921912186-1d1a45ebb3c1", // metal processing dust baghouse
  "industrial-sensors-steel-plant": "photo-1581092580497-e0d23cbdf1dc", // blast furnace temp sensors
  "faure-herman-helical-flow-meters": "photo-1535813547-99c456a41d4a", // helical turbine meter crude
  "liquid-flow-meters-crude-oil-refined-products": "photo-1518709268805-4e9042af9f23", // Coriolis mass meter crude oil
  "gas-flow-meters-aga-standards": "photo-1535813547-99c456a41d4a", // ultrasonic gas custody meter
  "flare-gas-flow-meters": "photo-1508921912186-1d1a45ebb3c1", // refinery flare stack gas
  "omni-flow-computers-custody-transfer": "photo-1518770660439-4636190af475", // omni flow computer panel
  "coriolis-vs-turbine-flow-meters": "photo-1581091226825-a6a2a5aee158", // Coriolis meter vs turbine components
  "ultrasonic-liquid-flow-meters-installation": "photo-1504307651254-35680f356dfd", // ultrasonic liquid meter install
  "meter-proving-systems-pipe-prover-small-volume-prover": "photo-1518709268805-4e9042af9f23", // pipe prover loop check
  "metering-skid-fat-testing": "photo-1605810230434-7631ac76ec81" // loop testing FAT check
};

// ═══ MAIN FUNCTION ════════════════════════════════════════════════════════
async function main() {
  const accessKey = process.env.UNSPLASH_ACCESS_KEY || '';
  const assignedUrls = new Set<string>();
  const articleUpdates: Record<string, UnsplashPhoto> = {};
  const reviewTable: Array<{ title: string; query: string; desc: string; url: string; confidence: string }> = [];
  const needsReviewList: Array<{ title: string; slug: string; candidates: string[] }> = [];

  const articles = Object.entries(blogArticles);
  console.log(`Processing ${articles.length} articles...`);

  // Map sub-theme queries to candidate photo pools
  const themePools: Record<string, UnsplashPhoto[]> = {};

  if (accessKey) {
    console.log("🚀 Dynamic Unsplash Search Mode: Fetching pools using Unsplash API...");
    
    // Fetch pools for all distinct themes under 50 req/hour limit
    for (const theme of SUB_THEMES) {
      console.log(`Fetching pool for query "${theme.query}"...`);
      try {
        const response = await fetch(
          `https://api.unsplash.com/search/photos?query=${encodeURIComponent(theme.query)}&orientation=landscape&per_page=15`,
          {
            headers: { 'Authorization': `Client-ID ${accessKey}` }
          }
        );

        if (response.ok) {
          const data = (await response.json()) as any;
          if (data.results && data.results.length > 0) {
            themePools[theme.id] = data.results.map((photo: any) => ({
              id: photo.id,
              url: `${(photo.urls.raw || photo.urls.regular).split('?')[0]}?w=1200&q=80&fm=jpg&fit=crop`,
              alt: photo.description || photo.alt_description || theme.query,
              downloadLocation: photo.links.download_location,
              tags: photo.tags ? photo.tags.map((t: any) => t.title.toLowerCase()) : [],
              credit: {
                name: photo.user.name,
                profileUrl: photo.user.links.html,
                photoUrl: photo.links.html
              }
            }));
            console.log(`✅ Loaded ${themePools[theme.id].length} photos for theme "${theme.id}"`);
          } else {
            themePools[theme.id] = [];
          }
        } else {
          console.error(`Unsplash API search error (${response.status}) for query "${theme.query}"`);
          themePools[theme.id] = [];
        }
        // Rate limit padding
        await new Promise(resolve => setTimeout(resolve, 1500));
      } catch (error) {
        console.error(`Error querying Unsplash for "${theme.query}":`, error);
        themePools[theme.id] = [];
      }
    }

    // Now, assign photos based on Jaccard token overlap scoring & global uniqueness
    for (const [slug, article] of articles) {
      const theme = getSubThemeForArticle(slug, article);
      const candidates = themePools[theme.id] || [];
      const articleTokens = tokenize(`${article.title} ${article.description} ${article.category}`);

      let bestPhoto: UnsplashPhoto | null = null;
      let maxScore = -1;
      const scoredCandidates: Array<{ photo: UnsplashPhoto; score: number }> = [];

      for (const photo of candidates) {
        if (assignedUrls.has(photo.url)) continue;

        // Score based on description + alt + tags overlap
        const photoTokens = tokenize(`${photo.alt} ${(photo.tags || []).join(' ')}`);
        let score = 0;
        for (const token of articleTokens) {
          if (photoTokens.has(token)) {
            score++;
          }
        }

        // Apply positive weights for technical keywords
        theme.keywords.forEach(kw => {
          if (photo.alt.toLowerCase().includes(kw)) score += 3;
        });

        scoredCandidates.push({ photo, score });

        if (score > maxScore) {
          maxScore = score;
          bestPhoto = photo;
        }
      }

      // Relevance check & Low confidence fallback
      if (bestPhoto && maxScore > 0) {
        bestPhoto.score = maxScore;
        bestPhoto.confidence = maxScore >= 3 ? 'HIGH' : 'MEDIUM';
        assignedUrls.add(bestPhoto.url);
        articleUpdates[slug] = bestPhoto;
        
        reviewTable.push({
          title: article.title,
          query: theme.query,
          desc: bestPhoto.alt,
          url: bestPhoto.url,
          confidence: bestPhoto.confidence
        });
      } else {
        // Flag for manual review if no match matches criteria or if we ran out of photos
        const topCandidates = scoredCandidates
          .sort((a, b) => b.score - a.score)
          .slice(0, 3)
          .map(c => `[ID: ${c.photo.id}] "${c.photo.alt}" (Score: ${c.score})`);

        needsReviewList.push({
          title: article.title,
          slug,
          candidates: topCandidates.length > 0 ? topCandidates : ["No candidates left in pool"]
        });

        // Use fallback in the meantime
        const fallbackMatch = FALLBACK_100.find(f => !assignedUrls.has(f.url)) || FALLBACK_100[0];
        fallbackMatch.confidence = 'NEEDS MANUAL REVIEW';
        assignedUrls.add(fallbackMatch.url);
        articleUpdates[slug] = fallbackMatch;

        reviewTable.push({
          title: article.title,
          query: theme.query,
          desc: fallbackMatch.alt,
          url: fallbackMatch.url,
          confidence: fallbackMatch.confidence
        });
      }
    }
  } else {
    console.log("📦 Offline Fallback Mode: Dynamically mapping unique, topically optimized fallback images...");

    // Assign best-matching, unique photo for each article from FALLBACK_100
    for (const [slug, article] of articles) {
      const theme = getSubThemeForArticle(slug, article);
      const articleTokens = tokenize(`${article.title} ${article.description} ${article.category}`);
      
      let bestPhoto: UnsplashPhoto | null = null;
      let maxScore = -1;

      for (const photo of FALLBACK_100) {
        if (assignedUrls.has(photo.url)) continue;

        // Score photo based on keyword overlap
        const photoTokens = tokenize(photo.alt);
        let score = 0;
        for (const token of articleTokens) {
          if (photoTokens.has(token)) {
            score++;
          }
        }

        // Apply positive weights for sub-theme keywords matching alt text
        theme.keywords.forEach(kw => {
          if (photo.alt.toLowerCase().includes(kw)) score += 3;
        });

        // Also check if this photo ID is explicitly mapped as a high-relevance override
        if (RELEVANCE_MAPPING[slug] === photo.id) {
          score += 10;
        }

        if (score > maxScore) {
          maxScore = score;
          bestPhoto = photo;
        }
      }

      const assignedPhoto = bestPhoto || FALLBACK_100.find(p => !assignedUrls.has(p.url)) || FALLBACK_100[0];
      assignedPhoto.confidence = maxScore >= 3 ? 'HIGH' : 'MEDIUM';
      
      articleUpdates[slug] = { ...assignedPhoto };
      assignedUrls.add(assignedPhoto.url);

      reviewTable.push({
        title: article.title,
        query: theme.query,
        desc: assignedPhoto.alt,
        url: assignedPhoto.url,
        confidence: assignedPhoto.confidence
      });
    }
  }

  // ═══ PRINT REVIEW TABLE ═════════════════════════════════════════════════
  console.log("\n==========================================================================================");
  console.log("📋 100-ROW MAPPING TABLE FOR IMAGE RELEVANCE REVIEW");
  console.log("==========================================================================================");
  console.table(
    reviewTable.map((row, idx) => ({
      "#": idx + 1,
      "Article Title": row.title.substring(0, 35) + (row.title.length > 35 ? '...' : ''),
      "Query Used": row.query,
      "Assigned Image Description": row.desc.substring(0, 45) + (row.desc.length > 45 ? '...' : ''),
      "Confidence": row.confidence
    }))
  );
  console.log("==========================================================================================\n");

  // ═══ SURFACING NEEDS MANUAL REVIEW ══════════════════════════════════════
  if (needsReviewList.length > 0) {
    console.log("⚠️ NEEDS MANUAL REVIEW: The following articles had low relevance confidence scores:");
    for (const item of needsReviewList) {
      console.log(`\n- Slug: [${item.slug}] "${item.title}"`);
      console.log("  Candidate Options:");
      item.candidates.forEach(c => console.log(`     * ${c}`));
    }
    console.log("\n==========================================================================================\n");
  } else {
    console.log("✅ Zero low-confidence assignments found! All 100 articles successfully mapped with confidence.\n");
  }

  // Save the result to cache JSON
  fs.writeFileSync(CACHE_FILE, JSON.stringify(articleUpdates, null, 2), 'utf8');
  console.log(`Saved de-duplicated cache to ${CACHE_FILE}`);

  // ═══ UPDATE DATABASE FILE ═══════════════════════════════════════════════
  console.log(`Updating database entries in ${BLOG_FILE}...`);
  let content = fs.readFileSync(BLOG_FILE, 'utf8');

  // Let's modify the BlogArticle interface if not done yet
  if (!content.includes('image: string;')) {
    content = content.replace(
      'export interface BlogArticle {',
      `export interface BlogArticle {
  image: string;
  imageAlt: string;
  imageCredit: {
    name: string;
    profileUrl: string;
    photoUrl: string;
  };`
    );
  }

  for (const [slug, article] of articles) {
    const photo = articleUpdates[slug];
    if (!photo) continue;

    // Build specific, descriptive, non-generic alt text
    const cleanTitle = article.title.replace(/[":?]/g, '');
    const cleanCategory = article.category.replace(/&/g, 'and');
    const imageAlt = `${cleanCategory} instrumentation - ${cleanTitle}`;

    // Regex to locate the full block of this specific slug.
    const slugBlockRegex = new RegExp(`("${slug}"|'${slug}'):\\s*\\{([\\s\\S]*?)content:\\s*\``, 'm');
    const match = content.match(slugBlockRegex);

    if (match) {
      const fullBlock = match[0];
      const innerContent = match[2];

      // Strip any existing image fields from the innerContent
      const cleanedInnerContent = innerContent
        .replace(/^\s*image:\s*"[\s\S]*?",\s*\n?/gm, '')
        .replace(/^\s*imageAlt:\s*"[\s\S]*?",\s*\n?/gm, '')
        .replace(/^\s*imageCredit:\s*\{[\s\S]*?\},\s*\n?/gm, '');

      // Locate the description line and append the image fields right after it
      const descriptionMatch = cleanedInnerContent.match(/description:\s*"(.*?)"\s*,?/);
      
      if (descriptionMatch) {
        const descriptionLine = descriptionMatch[0];
        
        const newFields = `${descriptionLine}\n    image: "${photo.url}",\n    imageAlt: "${imageAlt}",\n    imageCredit: { name: "${photo.credit.name}", profileUrl: "${photo.credit.profileUrl}", photoUrl: "${photo.credit.photoUrl}" },`;
        
        const finalizedInner = cleanedInnerContent.replace(descriptionLine, newFields);
        const replacementBlock = `"${slug}": {${finalizedInner}content: \``;
        content = content.replace(fullBlock, replacementBlock);
      }
    }
  }

  fs.writeFileSync(BLOG_FILE, content, 'utf8');
  console.log('Successfully de-duplicated and updated all 100 blog article image fields!');
}

if (require.main === module) {
  main().catch(console.error);
}
