import json
from PIL import Image

img_path = r"docs\reference\Gemini_Generated_Image_potovbpotovbpoto.png"
im = Image.open(img_path).convert("RGB")
w, h = im.size

points = [
    # Background
    (0.05, 0.5, "Page Background"),
    
    # Back panel
    (0.19, 0.22, "Back Panel - Dark Left"),
    (0.35, 0.20, "Back Panel - Mid Left (oxblood blend)"),
    (0.55, 0.15, "Back Panel - Tab / Mid"),
    (0.68, 0.25, "Back Panel - Darker oxblood before arc"),
    (0.80, 0.20, "Back Panel - Inside Arc (Terracotta Deep)"),
    (0.88, 0.20, "Back Panel - Far Right Terracotta"),
    (0.92, 0.10, "Back Panel - Top Right Corner"),
    (0.60, 0.05, "Back Panel - Top Sheen / Edge"),
    
    # Front glass panel
    (0.24, 0.38, "Front Glass - Top-Left Sage"),
    (0.32, 0.42, "Front Glass - Sage mid"),
    (0.48, 0.48, "Front Glass - Center transition"),
    (0.65, 0.42, "Front Glass - Upper-Right Rose"),
    (0.78, 0.45, "Front Glass - Far-Right Rose"),
    (0.85, 0.55, "Front Glass - Mid-Right Warm transition"),
    (0.25, 0.60, "Front Glass - Mid-Left Warm Cream"),
    (0.25, 0.82, "Front Glass - Lower-Left Warm Cream"),
    (0.50, 0.82, "Front Glass - Bottom-Center Cream"),
    (0.40, 0.88, "Front Glass - Bottom Cream"),
    
    # Rim stroke
    (0.25, 0.28, "Front Glass - Top Rim Stroke"),
    (0.70, 0.38, "Front Glass - Mid Rim Stroke"),
    
    # Text (sample dark text pixels)
    (0.247, 0.715, "Title Text ('My Files')"),
    (0.235, 0.785, "Meta Text ('3 items')"),
    
    # Accent / Button
    (0.83, 0.75, "Accent Button - Center"),
    (0.83, 0.68, "Accent Button - Top Rim Highlight"),
    (0.83, 0.82, "Accent Button - Bottom Dark")
]

results = {
    "dimensions": [w, h],
    "samples": []
}

for px, py, label in points:
    x = int(px * w)
    y = int(py * h)
    r, g, b = im.getpixel((x, y))
    hex_val = f"#{r:02x}{g:02x}{b:02x}"
    results["samples"].append({
        "label": label,
        "x": x,
        "y": y,
        "norm_x": round(px, 3),
        "norm_y": round(py, 3),
        "hex": hex_val,
        "rgb": [r, g, b]
    })

with open(r"scratch\sampled_colors.json", "w") as f:
    json.dump(results, f, indent=2)

print("Done sampling", len(results["samples"]), "points")
