from pathlib import Path
from PIL import Image, ImageDraw

root = Path(__file__).resolve().parents[1]
files = sorted((root / 'assets/images').glob('*20261116.png'))
if len(files) != 12:
    raise RuntimeError(f'Expected 12 completed images, found {len(files)}')
out = Image.new('RGB', (1000, 760), 'white')
draw = ImageDraw.Draw(out)
for i, file in enumerate(files):
    with Image.open(file) as image:
        rgb = image.convert('RGB')
        rgb.save(file.with_suffix('.webp'), 'WEBP', quality=85, method=6)
        out.paste(rgb.resize((246, 164)), ((i % 4) * 250, (i // 4) * 190))
    draw.text(((i % 4) * 250, (i // 4) * 190 + 165), file.stem.removeprefix('news-'), fill='black')
out.save(root / 'scripts/news-20261116-contact.jpg')
print('Optimized 12 completed original hero images to WebP; Wuhan pending.')
