# Light 1: Editorial industrial homepage

This review route uses the exact homepage content extracted from the components rendered by `app/page.tsx`.

Warm gradients, a subtle industrial dot-and-line pattern, Georgia display headings with bold Trebuchet body copy, a split video hero with a frosted-glass caption panel, rectangular expertise cards, and restrained Framer Motion distinguish this route from the rounded glass layout of Light 2. The light navbar centers the Texas logo between the navigation and contact action, with a centered logo, menu button, and contact icon on small screens. The existing automation video opens the hero, plays muted while visible, and has play/pause and slide controls. Reduced-motion visitors see its poster until they choose to play.

The sections below the hero now use a muted steel-teal secondary color and a clearer sequence: the company introduction, three matching rectangular frosted-glass expertise cards with offset shadows and subtle pointer tilt, detailed service chapters, proof in numbers, the team, certifications, and a split-image contact invitation. The three image-led service chapters sit together on desktop and form a swipeable, keyboard-accessible row on smaller screens, over a CSS industrial grid and line drawing. Hero and overview statistics use larger, readable figures and labels. The Vision section presents the original three figures as a swipeable, keyboard-accessible editorial carousel. Service chapters and certification panels use restrained directional hover and focus effects. No new marketing copy or component dependency was added.

Both themes share source-checked copy and remain noindex client-review routes. The existing homepage is preserved.

The partner logo grid appears directly after Industries in place of the detailed Texaflow and Space AI platform cards. It uses the existing homepage partner list and links, with visible names beneath the logos.

See [shared implementation and verification notes](../../components/home-review/README.md).

Run `npm run check:review-content` to verify content parity.
