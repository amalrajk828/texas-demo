import re

try:
    c = open('lib/products.ts', 'r', encoding='utf-8').read()
    head_match = re.search(r'<<<<<<< HEAD\n(.*?)=======', c, re.DOTALL)
    head_content = head_match.group(1) if head_match else ''
    theirs_match = re.search(r'=======\n(.*?)>>>>>>> origin/products_new', c, re.DOTALL)
    theirs_content = theirs_match.group(1) if theirs_match else ''
    
    if head_content and theirs_content:
        theirs_items = re.search(r'export const products:\s*Product\[\]\s*=\s*\[(.*?)\n\];\n', theirs_content, re.DOTALL)
        if theirs_items:
            items_str = theirs_items.group(1).replace('\\\\', '\\\\\\\\')
            new_head = re.sub(r'(\n\];\n\s*export function getProductsByPath)', r',\n' + items_str + r'\1', head_content)
            c = re.sub(r'<<<<<<< HEAD\n.*?\n>>>>>>> origin/products_new\n', new_head, c, flags=re.DOTALL)
            open('lib/products.ts', 'w', encoding='utf-8').write(c)
            print("Successfully merged lib/products.ts")
        else:
            print("Could not find theirs items in lib/products.ts")
except Exception as e: print(f"products.ts error: {e}")
