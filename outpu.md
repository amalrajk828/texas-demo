The site-wide color change is incomplete. Many sections still use the old grey background (about #E8E8E6). Examples: the "Company Overview / In Quality We Believe" section, the "Operational Excellence / How We Deliver Quality" section, and the About page hero ("Engineering Precision & Industrial Automation Since 2008"), plus other sections on every page. Do a full audit and fix every one.

Goal:
- Every page and section background becomes pure white (#FFFFFF).
- Every card, box, panel or container that currently has a white background becomes #DCDCD9.

Requirements:
1. Search the whole codebase, not just the home page, for every source of the old grey: hard-coded hex/rgb values (#E8E8E6, #E8E8E5, #E7E7E5, #EAEAE8, #F2F2F0 and similar greys), CSS variables (--background, --bg, --surface, --section-bg), Tailwind classes (bg-gray-*, bg-neutral-*, bg-stone-*, bg-zinc-*, bg-slate-*), inline styles, styled-components, section wrappers, and body/html/main.
2. Check backgrounds that are not plain colors: linear-gradient / radial-gradient backgrounds, overlay pseudo-elements (::before / ::after), background-image patterns, and opacity layers. The About hero has a faint grid pattern over a grey background. Make the base white and keep the grid lines only if they still look clean on white (very light, e.g. rgba(0,0,0,0.04)); otherwise remove the grey tint but keep the pattern.
3. Sections to check at minimum: header/hero, Company Overview carousel section, Operational Excellence section, stats section, services section, Products, Solutions, Industries, Blog, Clients, CTA banners, footer wrapper, and every inner page (About, Contact, Services, etc.).
4. Cards: any card or panel that was white (carousel slides, service cards, stats cards, blog cards, client logo boxes, form boxes, nav pill, etc.) becomes #DCDCD9. Because the section behind it is now white, this keeps them visible. Do not change cards that are already colored (red buttons, dark image panels, red accent elements).
5. Hover wave effect: the wave / water-fill hover on cards was set to #DCDCD9. Since the cards themselves are now #DCDCD9, the wave would be invisible. Change the wave color to white (#FFFFFF), with #F5F5F3 for secondary layers, so it still reads clearly on hover. Use one shared variable for it.
6. Define the two colors once as CSS variables and use them everywhere instead of repeating hex codes:
   --page-bg: #FFFFFF;
   --card-bg: #DCDCD9;
   --card-hover-wave: #FFFFFF;
7. Fix side effects: progress-bar tracks, dividers, borders and input fields that used grey to separate from the grey background should still be visible (use #D0D0CD tracks, #C8C8C5 borders). Keep text readable (dark headings #1A1A1A, body grey #555555 or darker on #DCDCD9). Check the glass/blur nav pill and carousel arrows/dots for contrast.
8. Do not change layout, fonts, spacing, images, content, red brand colors, or animations. Only change background colors.
9. When finished, give a list of every file and selector changed, then check each page (Home, About, Products, Solutions, Services, Industries, Blog, Clients, Contact) on desktop, tablet and mobile, and confirm that no grey section background is left and every card is #DCDCD9.