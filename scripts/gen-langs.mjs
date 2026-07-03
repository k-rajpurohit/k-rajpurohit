#!/usr/bin/env node
// Renders github-langs.svg — most-used languages across authored code.
//
// Uses GitHub's own per-repo language bytes (includes private + org repos the
// token can read) instead of cloning anything. Two accuracy rules:
//   1. Repos with >20MB of language bytes are skipped — that footprint is a
//      committed virtualenv / vendored dependencies, not authored work (six
//      old internship repos each carry ~90MB of site-packages that otherwise
//      drown everything at "Python 89%").
//   2. Markup/data/config languages are excluded so the card shows what gets
//      programmed, not what gets generated.

const TOKEN = process.env.GH_TOKEN;
const USER_AFFILIATION = 'owner';
const EXTRA_REPOS = ['Automation-Owl-projects/SAAS-Social-Media'];
const VENDOR_BYTES_CEILING = 20_000_000;
const EXCLUDED_LANGS = new Set([
    'HTML', 'CSS', 'SCSS', 'Less', 'EJS', 'Jupyter Notebook', 'Shell',
    'Makefile', 'Dockerfile', 'Batchfile', 'CMake', 'Meson', 'Roff',
    'Smarty', 'TeX', 'PowerShell',
]);
const COLORS = {
    JavaScript: '#f1e05a', TypeScript: '#3178c6', Python: '#3572A5',
    'C++': '#f34b7d', C: '#555555', Cython: '#fedf5b', Go: '#00ADD8',
    Java: '#b07219', Rust: '#dea584', PHP: '#4F5D95', Ruby: '#701516',
    Kotlin: '#A97BFF', Swift: '#F05138', 'C#': '#178600', Dart: '#00B4AB',
};

async function api(path) {
    const res = await fetch(`https://api.github.com${path}`, {
        headers: {
            authorization: `Bearer ${TOKEN}`,
            accept: 'application/vnd.github+json',
            'user-agent': 'profile-langs-card',
        },
    });
    if (!res.ok) return null;
    return res.json();
}

const repos = [];
for (let page = 1; page <= 4; page++) {
    const batch = await api(`/user/repos?per_page=100&page=${page}&affiliation=${USER_AFFILIATION}`);
    if (!Array.isArray(batch) || batch.length === 0) break;
    repos.push(...batch.map((r) => r.full_name));
    if (batch.length < 100) break;
}
repos.push(...EXTRA_REPOS);

const totals = {};
for (const repo of repos) {
    const langs = await api(`/repos/${repo}/languages`);
    if (!langs) continue;
    const size = Object.values(langs).reduce((a, b) => a + b, 0);
    if (size > VENDOR_BYTES_CEILING) continue; // vendored-deps signature
    for (const [lang, bytes] of Object.entries(langs)) {
        if (!EXCLUDED_LANGS.has(lang)) totals[lang] = (totals[lang] || 0) + bytes;
    }
}

const grand = Object.values(totals).reduce((a, b) => a + b, 0) || 1;
const top = Object.entries(totals)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8)
    .map(([lang, bytes]) => ({ lang, pct: (100 * bytes) / grand, color: COLORS[lang] || '#8b949e' }));

const W = 480, PAD = 24, BAR_Y = 44, BAR_H = 10, BAR_W = W - PAD * 2;
let x = PAD;
const segs = top.map((t) => {
    const w = Math.max(2, (BAR_W * t.pct) / 100);
    const s = `<rect x="${x.toFixed(1)}" y="${BAR_Y}" width="${w.toFixed(1)}" height="${BAR_H}" fill="${t.color}"/>`;
    x += w;
    return s;
}).join('');
const rows = top.map((t, i) => {
    const col = i % 2, row = Math.floor(i / 2);
    const lx = PAD + col * (BAR_W / 2), ly = 86 + row * 24;
    return `<circle cx="${lx + 5}" cy="${ly - 4}" r="5" fill="${t.color}"/>` +
        `<text x="${lx + 18}" y="${ly}" class="lang">${t.lang}</text>` +
        `<text x="${lx + BAR_W / 2 - 16}" y="${ly}" text-anchor="end" class="pct">${t.pct.toFixed(1)}%</text>`;
}).join('');
const H = 86 + Math.ceil(top.length / 2) * 24 + 6;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="Most used languages">
<style>text{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif}.title{font-size:16px;font-weight:600;fill:#0969da}.lang{font-size:12px;fill:#656d76}.pct{font-size:12px;fill:#8b949e}</style>
<text x="${PAD}" y="27" class="title">Most used languages</text>
<clipPath id="bar"><rect x="${PAD}" y="${BAR_Y}" width="${BAR_W}" height="${BAR_H}" rx="5"/></clipPath>
<g clip-path="url(#bar)">${segs}</g>
${rows}
</svg>`;

await (await import('node:fs/promises')).writeFile('github-langs.svg', svg);
console.log('languages:', top.map((t) => `${t.lang} ${t.pct.toFixed(1)}%`).join(', '));
