import re

# globals.css
try:
    c = open('app/globals.css', 'r', encoding='utf-8').read()
    c = re.sub(r'<<<<<<< HEAD\n(.*?)\n=======\n.*?\n>>>>>>> origin/products\n', r'\1\n', c, flags=re.DOTALL)
    open('app/globals.css', 'w', encoding='utf-8').write(c)
except Exception as e: print(f"globals.css error: {e}")

# layout.tsx
try:
    c = open('app/layout.tsx', 'r', encoding='utf-8').read()
    c = re.sub(r'<<<<<<< HEAD\n.*?\n=======\n(.*?)\n>>>>>>> origin/products\n', r'\1\n', c, flags=re.DOTALL)
    open('app/layout.tsx', 'w', encoding='utf-8').write(c)
except Exception as e: print(f"layout.tsx error: {e}")

# next.config.ts
try:
    c = open('next.config.ts', 'r', encoding='utf-8').read()
    def repl_config(m):
        return '''    remotePatterns: [
      { protocol: "https", hostname: "texastechserv.com", pathname: "/wp-content/**" },
    ],
    formats: ["image/avif", "image/webp"],
    qualities: [40, 50, 60, 75, 85, 90, 100],
    unoptimized: true,\n'''
    c = re.sub(r'<<<<<<< HEAD\n.*?\n=======\n.*?\n>>>>>>> origin/products\n', repl_config, c, flags=re.DOTALL)
    open('next.config.ts', 'w', encoding='utf-8').write(c)
except Exception as e: print(f"next.config.ts error: {e}")

# lib/products.ts
try:
    c = open('lib/products.ts', 'r', encoding='utf-8').read()
    head_match = re.search(r'<<<<<<< HEAD\n(.*?)=======', c, re.DOTALL)
    head_content = head_match.group(1) if head_match else ''
    theirs_match = re.search(r'=======\n(.*?)>>>>>>> origin/products', c, re.DOTALL)
    theirs_content = theirs_match.group(1) if theirs_match else ''
    
    if head_content and theirs_content:
        theirs_items = re.search(r'export const products:\s*Product\[\]\s*=\s*\[(.*?)\n\];\n', theirs_content, re.DOTALL)
        if theirs_items:
            items_str = theirs_items.group(1).replace('\\\\', '\\\\\\\\')
            new_head = re.sub(r'(\n\];\n\s*export function)', r',\n' + items_str + r'\1', head_content)
            c = re.sub(r'<<<<<<< HEAD\n.*?\n>>>>>>> origin/products\n', new_head, c, flags=re.DOTALL)
            open('lib/products.ts', 'w', encoding='utf-8').write(c)
        else:
            print("Could not find theirs items in lib/products.ts")
except Exception as e: print(f"products.ts error: {e}")
