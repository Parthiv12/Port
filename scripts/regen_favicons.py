from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

OUT_DIR = Path("public/favicon")
OUT_DIR.mkdir(parents=True, exist_ok=True)

BG = "#041a2d"
FG = "#22b8b0"


def _get_font(size: int) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    font_size = max(10, int(size * 0.56))
    for font_name in ["arialbd.ttf", "segoeuib.ttf", "DejaVuSans-Bold.ttf"]:
        try:
            return ImageFont.truetype(font_name, font_size)
        except OSError:
            continue
    return ImageFont.load_default()


def draw_icon(size: int) -> Image.Image:
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    draw.rectangle((0, 0, size - 1, size - 1), fill=BG)

    text = "PG"
    font = _get_font(size)
    left, top, right, bottom = draw.textbbox((0, 0), text, font=font)
    text_width = right - left
    text_height = bottom - top
    x = (size - text_width) / 2
    y = (size - text_height) / 2 - (size * 0.02)
    draw.text((x, y), text, font=font, fill=FG)

    return img


def write_svg() -> None:
    svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" fill="#041a2d" />
  <text
    x="50%"
    y="55%"
    text-anchor="middle"
    dominant-baseline="middle"
    font-family="Arial, Helvetica, sans-serif"
    font-size="34"
    font-weight="700"
    fill="#22b8b0"
  >PG</text>
</svg>
'''
    (OUT_DIR / "favicon.svg").write_text(svg, encoding="utf-8")


def main() -> None:
    sizes = [16, 32, 48, 180, 192, 512]
    images = {}
    for size in sizes:
        icon = draw_icon(size)
        images[size] = icon
        icon.save(OUT_DIR / f"favicon-{size}.png", format="PNG", optimize=True)

    images[512].save(
        OUT_DIR / "favicon.ico",
        format="ICO",
        sizes=[(16, 16), (32, 32), (48, 48)],
    )

    write_svg()


if __name__ == "__main__":
    main()
