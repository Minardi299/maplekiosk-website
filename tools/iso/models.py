"""Detailed isometric models, in centimetres. Each function returns a list of parts.

Screens face +y (the front-left face) so the viewer sees them. Text inside the drawings stays
language-neutral: numbers, prices and symbols only.
"""
from iso_lib import AMBER, CREAM, INK, LINE, MUTED, RED, SAND, WHITE, box, cyl, dot, line, rect, text

DARK = "#2a2622"
DIM = "#b8ada0"
PINK = "#f3c9c1"


def tile_base(ox, oy):
    return [box(ox + 6, oy + 6, 88, 88, 8, "base")]


# ===== Devices =====

def kiosk(ox=0, oy=0, z=0, obj=None):
    tiles = []
    for col, u in enumerate((9, 29)):
        for row, v in enumerate((64, 48, 32)):
            tiles += [rect("front", u, v, u + 18, v + 14, CREAM, LINE, 0.6),
                      dot("front", u + 9, v + 9, 3, AMBER if (col + row) % 2 else RED),
                      line("front", u + 4, v + 3.5, u + 14, v + 3.5, MUTED, 0.8)]
    screen = [
        rect("front", 4, 14, 52, 92, INK),
        rect("front", 6, 16, 50, 90, WHITE),
        rect("front", 6, 82, 50, 90, RED),
        line("front", 10, 86, 24, 86, WHITE, 1.4),
        *tiles,
        rect("front", 9, 19, 47, 27, INK),
        text("front", 17, 21.2, "$13.95 →", 3.6, WHITE),
        line("front", 20, 7, 36, 7, INK, 1.6),
    ]
    return [
        box(ox + 24, oy + 34, 52, 40, 4, "sand", z0=z, obj=obj),
        box(ox + 44, oy + 44, 12, 12, 52, "furn", z0=z + 4, obj=obj),
        box(ox + 22, oy + 42, 56, 10, 96, "furn", z0=z + 56, obj=obj, decals=screen),
        box(ox + 78, oy + 44, 7, 8, 20, "screen", z0=z + 72, obj=obj, decals=[rect("front", 1.5, 12, 5.5, 17, MUTED)]),
    ]


def kds_display(w=84, h=52):
    d = [rect("front", 3, 3, w - 3, h - 3, DARK), text("front", 6, h - 8.5, "#041 · #042 · #043 · #044", 3.4, DIM)]
    heads = [RED, SAND, AMBER, SAND]
    bottoms = [8, 14, 18, 24]
    col = (w - 12) / 4
    for i in range(4):
        u = 6 + i * col
        top = h - 12
        d += [rect("front", u, bottoms[i] * h / 52, u + col - 2, top, WHITE),
              rect("front", u, top - 5, u + col - 2, top, heads[i])]
        for k, v in enumerate((top - 10, top - 14, top - 18)):
            if v > bottoms[i] * h / 52 + 2:
                d.append(line("front", u + 2.5, v, u + col - (6 if k % 2 else 4), v, MUTED, 0.9))
    return d


def kds(ox=0, oy=0, z=0, obj=None, bump=True):
    parts = [
        box(ox + 36, oy + 48, 28, 16, 3, "screen", z0=z, obj=obj),
        box(ox + 47, oy + 52, 6, 6, 26, "screen", z0=z + 3, obj=obj),
        box(ox + 8, oy + 44, 84, 7, 52, "screen", z0=z + 29, obj=obj, decals=kds_display()),
    ]
    if bump:
        keys = [rect("top", 4 + 8 * k, 3, 10 + 8 * k, 7, RED if k == 4 else WHITE, INK, 0.5) for k in range(5)]
        parts.append(box(ox + 26, oy + 66, 48, 10, 3, "screen", z0=z, obj=obj, decals=keys))
    return parts


def kds_hung(x, y, z, w=64, obj=None):
    """A kitchen screen hung above the pass, facing the cooks' side is skipped: it faces the viewer."""
    h = w * 52 / 84
    return [
        box(x + w / 2 - 2, y + 2, 4, 3, 30, "screen", z0=z + h, obj=obj),
        box(x, y, w, 6, h, "screen", z0=z, obj=obj, decals=kds_display(w, h)),
    ]


def menu_display(w, h, sold_out=True, big=None):
    d = [rect("front", 3, 3, w - 3, h - 3, DARK)]
    if big:
        d += [text("front", w * 0.28, h * 0.36, big, h * 0.34, WHITE, 700, "Bricolage Grotesque, sans-serif"),
              rect("front", w * 0.32, h * 0.14, w * 0.68, h * 0.26, RED)]
        return d
    d.append(rect("front", 7, h - 11, w * 0.42, h - 7, RED))
    rows = 4
    for i in range(rows):
        v = h - 17 - i * (h - 22) / rows
        out = sold_out and i == 2
        d += [line("front", 8, v, w * 0.52, v, DIM if out else CREAM, 1.3),
              line("front", w * 0.55, v, w * 0.8, v, "#5d554d", 0.8),
              line("front", w * 0.83, v, w - 8, v, DIM if out else CREAM, 1.3)]
        if out:
            d.append(rect("front", w * 0.62, v - 2.2, w - 7, v + 2.2, RED))
    return d


def tv(ox=0, oy=0, z=0, obj=None, big=None):
    return [
        box(ox + 18, oy + 46, 5, 5, 64, "furn", z0=z, obj=obj),
        box(ox + 77, oy + 46, 5, 5, 64, "furn", z0=z, obj=obj),
        box(ox + 14, oy + 44, 18, 12, 2, "sand", z0=z, obj=obj),
        box(ox + 68, oy + 44, 18, 12, 2, "sand", z0=z, obj=obj),
        box(ox + 8, oy + 42, 84, 6, 46, "screen", z0=z + 30, obj=obj, decals=menu_display(84, 46, big=big)),
    ]


def tv_hung(x, y, z, w=60, obj=None):
    h = w * 0.56
    return [
        box(x + 10, y + 2, 3, 3, 30, "screen", z0=z + h, obj=obj),
        box(x + w - 13, y + 2, 3, 3, 30, "screen", z0=z + h, obj=obj),
        box(x, y, w, 5, h, "screen", z0=z, obj=obj, decals=menu_display(w, h)),
    ]


def bag(x, y, z, w, d, h, sticker=False, obj=None):
    dec = [rect("front", w * 0.2, h * 0.35, w * 0.8, h * 0.72, WHITE, INK, 0.5),
           line("front", w * 0.28, h * 0.62, w * 0.7, h * 0.62, MUTED, 0.8),
           line("front", w * 0.28, h * 0.52, w * 0.6, h * 0.52, MUTED, 0.8),
           line("front", w * 0.28, h * 0.44, w * 0.66, h * 0.44, MUTED, 0.8)]
    if sticker:
        dec.append(rect("front", w * 0.56, h * 0.74, w * 0.84, h * 0.9, RED))
    return [
        box(x, y, w, d, h, "sand", z0=z, obj=obj, decals=dec),
        box(x + 1, y + d * 0.3, w - 2, d * 0.4, 5, "sand", z0=z + h, obj=obj),
    ]


def delivery(ox=0, oy=0, z=0, obj=None):
    return (bag(ox + 16, oy + 22, z, 36, 26, 38, sticker=True, obj=obj)
            + bag(ox + 50, oy + 48, z, 34, 26, 30, obj=obj)
            + bag(ox + 20, oy + 56, z, 26, 20, 22, obj=obj))


def phone(ox=0, oy=0, z=0, obj=None, bubbles=True, scale=1.0):
    s = scale
    keypad = [rect("top", (28 + c * 7) * s, (16 + r * 6) * s, (33 + c * 7) * s, (20 + r * 6) * s, WHITE, INK, 0.5)
              for c in range(3) for r in range(4)]
    parts = [
        box(ox + 20 * s, oy + 40 * s, 58 * s, 40 * s, 12 * s, "furn", z0=z, obj=obj, decals=keypad),
        box(ox + 50 * s, oy + 40 * s, 28 * s, 12 * s, 6 * s, "furn", z0=z + 12 * s, obj=obj,
            decals=[rect("top", 3 * s, 3 * s, 25 * s, 9 * s, DARK), text("top", 5 * s, 7.6 * s, "0:42", 3.8 * s, WHITE)]),
        box(ox + 22 * s, oy + 42 * s, 16 * s, 36 * s, 4 * s, "sand", z0=z + 12 * s, obj=obj),
        box(ox + 23 * s, oy + 44 * s, 14 * s, 32 * s, 6 * s, "screen", z0=z + 16 * s, obj=obj),
        box(ox + 22 * s, oy + 42 * s, 16 * s, 8 * s, 4 * s, "screen", z0=z + 22 * s, obj=obj),
        box(ox + 22 * s, oy + 70 * s, 16 * s, 8 * s, 4 * s, "screen", z0=z + 22 * s, obj=obj),
    ]
    if bubbles:
        caller = [line("front", 5, 17, 38, 17, MUTED, 1.2), line("front", 5, 12, 30, 12, MUTED, 1.2), line("front", 5, 7, 34, 7, MUTED, 1.2)]
        reply = [text("front", 6, 9, "✓", 11, WHITE, 700, "DM Sans, sans-serif"), line("front", 20, 14, 38, 14, PINK, 1.2), line("front", 20, 8, 32, 8, PINK, 1.2)]
        parts += [
            box(ox + 12, oy + 28, 46, 2, 24, "furn", z0=z + 34, obj=obj, decals=caller),
            box(ox + 18, oy + 28, 6, 2, 6, "furn", z0=z + 28, obj=obj),
            box(ox + 44, oy + 22, 46, 2, 22, "accent", z0=z + 56, obj=obj, decals=reply),
            box(ox + 78, oy + 22, 6, 2, 6, "accent", z0=z + 50, obj=obj),
        ]
    return parts


def register(ox=0, oy=0, z=0, obj=None):
    keys = [rect("top", 4 + c * 6, 4 + r * 5, 8.5 + c * 6, 7.5 + r * 5, SAND, "none") for c in range(4) for r in range(3)]
    return [
        box(ox + 10, oy + 26, 60, 50, 12, "screen", z0=z, obj=obj,
            decals=[line("front", 8, 6, 52, 6, "#5d554d", 1.2), rect("front", 26, 3, 34, 5, "#5d554d")]),
        box(ox + 14, oy + 44, 30, 28, 6, "screen", z0=z + 12, obj=obj, decals=keys),
        box(ox + 50, oy + 52, 16, 18, 10, "screen", z0=z + 12, obj=obj, decals=[line("top", 3, 3, 13, 3, WHITE, 1.2)]),
        box(ox + 52, oy + 51, 12, 1, 7, "furn", z0=z + 22, obj=obj),
        box(ox + 22, oy + 32, 6, 6, 14, "screen", z0=z + 12, obj=obj),
        box(ox + 12, oy + 30, 44, 6, 30, "screen", z0=z + 26, obj=obj,
            decals=[rect("front", 3, 3, 41, 27, "#3a3530"), line("front", 7, 20, 30, 20, DIM, 1.2), line("front", 7, 14, 24, 14, DIM, 1.2), text("front", 7, 6, "$25.45", 5, WHITE)]),
    ]


def tablet_on_stand(ox, oy, z, w, h, display, obj=None, bezel="furn"):
    return [
        box(ox + w / 2 - 8, oy + 8, 16, 12, 2, "sand", z0=z, obj=obj),
        box(ox + w / 2 - 2, oy + 12, 4, 4, 10, "sand", z0=z + 2, obj=obj),
        box(ox, oy + 10, w, 3, h, bezel, z0=z + 12, obj=obj, decals=display),
    ]


def counter_station(ox=0, oy=0, z=0, obj=None):
    disp = [rect("front", 2, 2, 42, 28, WHITE, LINE, 0.5)]
    for i, v in enumerate((23, 19, 15)):
        disp += [line("front", 5, v, 24, v, MUTED, 0.9), line("front", 32, v, 39, v, INK, 0.9)]
    disp += [rect("front", 5, 4, 39, 10, RED), text("front", 13, 5.6, "$25.45", 4, WHITE)]
    return tablet_on_stand(ox + 12, oy + 30, z, 44, 30, disp, obj) + card_terminal(ox + 58, oy + 40, z, obj, scale=0.8)


def card_terminal(ox=0, oy=0, z=0, obj=None, scale=1.0, card=True):
    s = scale
    top = [rect("top", 3 * s, 3 * s, 23 * s, 17 * s, DARK)]
    for i, u in enumerate((5, 11.5, 18)):
        top.append(rect("top", u * s, 10 * s, (u + 4.5) * s, 15 * s, RED if i == 1 else "#4a443e", "none"))
    top += [rect("top", (4 + c * 6.5) * s, (21 + r * 5.5) * s, (8.5 + c * 6.5) * s, (24.5 + r * 5.5) * s, WHITE, INK, 0.4) for c in range(3) for r in range(4)]
    parts = [box(ox, oy, 26 * s, 46 * s, 12 * s, "furn", z0=z, obj=obj, decals=top)]
    if card:
        parts.append(box(ox + 5 * s, oy - 7 * s, 16 * s, 9 * s, 1.5, "accent", z0=z + 12 * s, obj=obj))
    return parts


def customer_display(x, y, z, obj=None):
    disp = [rect("front", 2, 2, 28, 18, DARK)]
    disp += [dot("front", 6 + i * 4.4, 7, 1.6, RED if i < 5 else "#5d554d") for i in range(6)]
    disp.append(line("front", 5, 13, 20, 13, WHITE, 1.2))
    return [box(x + 12, y, 6, 6, 12, "sand", z0=z, obj=obj),
            box(x, y + 4, 30, 3, 20, "screen", z0=z + 12, obj=obj, decals=disp)]


def stamp_card(ox=0, oy=0, z=0, obj=None):
    top = [line("top", 6, 7, 30, 7, INK, 1.6), line("top", 6, 12, 22, 12, MUTED, 1)]
    for i in range(10):
        top.append(dot("top", 10 + (i % 5) * 11, 24 + (i // 5) * 12, 3.4, RED if i < 8 else WHITE, INK))
    wallet = [rect("front", 2, 2, 20, 38, WHITE), rect("front", 2, 30, 20, 38, RED),
              rect("front", 6, 10, 16, 22, INK), rect("front", 8, 12, 14, 20, WHITE), rect("front", 10, 14, 12, 18, INK)]
    return [box(ox + 14, oy + 28, 64, 44, 2, "furn", z0=z, obj=obj, decals=top),
            box(ox + 72, oy + 44, 3, 12, 2, "furn", z0=z, obj=obj),
            box(ox + 66, oy + 16, 22, 4, 40, "screen", z0=z, obj=obj, decals=wallet)]


def profiles_tablet(ox=0, oy=0, z=0, obj=None):
    disp = [rect("front", 2, 2, 50, 34, WHITE, LINE, 0.5), dot("front", 11, 25, 5, SAND, INK),
            line("front", 20, 28, 40, 28, INK, 1.6), line("front", 20, 23, 34, 23, MUTED, 1),
            rect("front", 38, 29, 48, 33, RED)]
    disp += [dot("front", 7 + i * 4.6, 13, 1.7, RED if i < 8 else LINE) for i in range(10)]
    disp.append(line("front", 6, 7, 30, 7, MUTED, 1))
    return tablet_on_stand(ox + 22, oy + 36, z, 52, 36, disp, obj, bezel="screen")


def calendar_tablet(ox=0, oy=0, z=0, obj=None):
    disp = [rect("front", 2, 2, 50, 34, WHITE, LINE, 0.5)]
    for c in range(3):
        disp.append(line("front", 14 + c * 12, 4, 14 + c * 12, 32, LINE, 0.6))
    disp += [rect("front", 15, 22, 25, 31, RED), rect("front", 27, 14, 37, 26, AMBER), rect("front", 39, 20, 49, 30, SAND, INK, 0.4),
             rect("front", 15, 5, 25, 12, SAND, INK, 0.4), rect("front", 39, 5, 49, 13, RED)]
    disp += [line("front", 4, v, 11, v, MUTED, 0.8) for v in (29, 22, 15, 8)]
    return tablet_on_stand(ox + 22, oy + 36, z, 52, 36, disp, obj, bezel="screen")


def insights_monitor(ox=0, oy=0, z=0, obj=None):
    disp = [rect("front", 3, 3, 73, 45, WHITE, LINE, 0.5)]
    for i, hgt in enumerate((10, 16, 26, 34, 22, 14, 8)):
        disp.append(rect("front", 8 + i * 9, 8, 14 + i * 9, 8 + hgt, RED if i == 3 else SAND, INK, 0.4))
    disp.append(line("front", 6, 8, 72, 8, INK, 0.8))
    return [box(ox + 38, oy + 50, 24, 14, 3, "screen", z0=z, obj=obj),
            box(ox + 47, oy + 54, 6, 5, 24, "screen", z0=z + 3, obj=obj),
            box(ox + 10, oy + 46, 80, 6, 48, "screen", z0=z + 27, obj=obj, decals=disp)]


def server(ox=0, oy=0, z=0, obj=None):
    front = []
    for i in range(5):
        v = 14 + i * 16
        front += [rect("front", 5, v, 35, v + 11, "#3a3530"), dot("front", 30, v + 5.5, 1.6, RED if i == 0 else AMBER if i == 2 else "#6b8f5e")]
    return [box(ox + 30, oy + 30, 40, 44, 96, "screen", z0=z, obj=obj, decals=front),
            box(ox + 26, oy + 28, 48, 48, 4, "sand", z0=z, obj=obj)]


def waitlist_sign(ox=0, oy=0, z=0, obj=None):
    disp = [rect("front", 3, 3, 35, 51, DARK)]
    for i in range(4):
        v = 42 - i * 10
        disp += [rect("front", 6, v, 12, v + 6, RED if i == 0 else "#4a443e"), line("front", 15, v + 3, 31, v + 3, WHITE if i == 0 else DIM, 1.2)]
    return [box(ox + 38, oy + 50, 24, 20, 3, "sand", z0=z, obj=obj),
            box(ox + 48, oy + 57, 4, 4, 50, "furn", z0=z + 3, obj=obj),
            box(ox + 31, oy + 54, 38, 5, 54, "screen", z0=z + 53, obj=obj, decals=disp)]


def payroll(ox=0, oy=0, z=0, obj=None):
    sheet = [line("top", 6, 6, 40, 6, INK, 1.6)]
    for r in range(4):
        v = 14 + r * 8
        sheet += [line("top", 6, v, 22, v, MUTED, 1), line("top", 28, v, 34, v, MUTED, 1), line("top", 40, v, 50, v, RED if r == 0 else INK, 1.2)]
    return [box(ox + 18, oy + 22, 58, 48, 2, "furn", z0=z, obj=obj, decals=sheet),
            box(ox + 36, oy + 18, 22, 6, 4, "screen", z0=z, obj=obj),
            box(ox + 60, oy + 58, 24, 22, 10, "furn", z0=z, obj=obj,
                decals=[rect("top", 3, 3, 21, 9, DARK), text("top", 5, 7.7, "$412", 4.2, WHITE)])]


def storefront(ox, oy, z=0, w=70, obj=None):
    front = [rect("front", 6, 4, 24, 34, WHITE, INK, 0.7), rect("front", 30, 12, w - 6, 34, WHITE, INK, 0.7),
             line("front", 30 + (w - 36) / 2, 12, 30 + (w - 36) / 2, 34, INK, 0.7),
             rect("front", 3, 40, w - 3, 50, RED)]
    for i in range(int((w - 6) / 8)):
        front.append(line("front", 3 + i * 8, 40, 3 + i * 8, 50, "#8f2a1f", 0.6))
    return [box(ox, oy, w, 44, 58, "furn", z0=z, obj=obj, decals=front),
            box(ox - 2, oy - 2, w + 4, 48, 4, "sand", z0=z + 58, obj=obj)]


# ===== Restaurant furniture =====

def table_sq(x, y, w=44, d=44, h=30, obj=None):
    legs = [box(x + 3, y + 3, 3, 3, h - 3, "sand", obj=obj), box(x + w - 6, y + 3, 3, 3, h - 3, "sand", obj=obj),
            box(x + 3, y + d - 6, 3, 3, h - 3, "sand", obj=obj), box(x + w - 6, y + d - 6, 3, 3, h - 3, "sand", obj=obj)]
    return legs + [box(x, y, w, d, 3, "furn", z0=h - 3, obj=obj)]


def table_round(cx, cy, r=22, h=30, obj=None):
    return [cyl(cx, cy, r * 0.45, 2, "sand", obj=obj), cyl(cx, cy, 2.5, h - 3, "sand", z0=2, obj=obj),
            cyl(cx, cy, r, 3, "furn", z0=h - 3, obj=obj)]


def chair(x, y, facing="s", obj=None):
    """Seat 16 x 16 at (x, y); the backrest sits opposite to where the sitter faces."""
    parts = [box(x + 1, y + 1, 2.5, 2.5, 16, "sand", obj=obj), box(x + 12.5, y + 1, 2.5, 2.5, 16, "sand", obj=obj),
             box(x + 1, y + 12.5, 2.5, 2.5, 16, "sand", obj=obj), box(x + 12.5, y + 12.5, 2.5, 2.5, 16, "sand", obj=obj),
             box(x, y, 16, 16, 3, "furn", z0=16, obj=obj)]
    back = {"s": (x, y, 16, 3), "n": (x, y + 13, 16, 3), "e": (x, y, 3, 16), "w": (x + 13, y, 3, 16)}[facing]
    parts.append(box(back[0], back[1], back[2], back[3], 18, "furn", z0=19, obj=obj))
    return parts


def stool(cx, cy, obj=None):
    return [cyl(cx, cy, 2, 16, "sand", obj=obj), cyl(cx, cy, 8, 3, "furn", z0=16, obj=obj)]


def banquette(x, y, d, obj=None):
    return [box(x, y, 24, d, 16, "sand", obj=obj), box(x, y, 8, d, 36, "furn", obj=obj)]


def stove(x, y, w=110, d=44, obj=None):
    top = []
    for i in range(3):
        top.append(dot("top", 16 + i * 30, d / 2, 8.5, DARK))
        top.append(dot("top", 16 + i * 30, d / 2, 4, "#4a443e"))
    front = [rect("front", 8, 5, w - 8, 24, SAND, INK, 0.7), line("front", 16, 21, w - 16, 21, INK, 1.4)]
    front += [dot("front", 12 + i * ((w - 24) / 4), 30, 2.2, INK) for i in range(5)]
    return [box(x, y, w, d, 36, "furn", obj=obj, decals=top + front)]


def hood(x, y, w=110, obj=None):
    return [box(x, y, w, 30, 26, "furn", z0=96, obj=obj, decals=[line("front", 6, 6, w - 6, 6, MUTED, 0.8)]),
            box(x + w / 2 - 14, y, 28, 20, 40, "furn", z0=122, obj=obj)]


def fridge(x, y, w=44, d=60, h=96, obj=None):
    fr = [line("front", w / 2, 3, w / 2, h - 3, INK, 0.9), rect("front", w / 2 - 5, h * 0.55, w / 2 - 3, h * 0.8, MUTED),
          rect("front", w / 2 + 3, h * 0.55, w / 2 + 5, h * 0.8, MUTED)]
    side = [line("side", 0, h * 0.35, d, h * 0.35, LINE, 0.6)]
    return [box(x, y, w, d, h, "furn", obj=obj, decals=fr + side)]


def fridge_side(x, y, w=60, d=44, h=96, obj=None):
    """A fridge against the right wall: its doors face -x, so the viewer sees its side."""
    return [box(x, y, w, d, h, "furn", obj=obj, decals=[line("front", 4, h - 10, w - 4, h - 10, LINE, 0.6)])]


def prep_table(x, y, w, d, board=True, obj=None):
    parts = [box(x + 2, y + 2, 3, 3, 33, "sand", obj=obj), box(x + w - 5, y + 2, 3, 3, 33, "sand", obj=obj),
             box(x + 2, y + d - 5, 3, 3, 33, "sand", obj=obj), box(x + w - 5, y + d - 5, 3, 3, 33, "sand", obj=obj),
             box(x + 2, y + 2, w - 4, d - 4, 2, "sand", z0=10, obj=obj),
             box(x, y, w, d, 3, "furn", z0=33, obj=obj)]
    if board:
        parts.append(box(x + w * 0.2, y + d * 0.25, w * 0.3, d * 0.5, 2, "amber", z0=36, obj=obj))
        parts.append(box(x + w * 0.6, y + d * 0.35, w * 0.18, d * 0.3, 6, "furn", z0=36, obj=obj))
    return parts


def sink(x, y, w=60, d=44, obj=None):
    return [box(x, y, w, d, 36, "furn", obj=obj,
                decals=[rect("top", 6, 8, w - 6, d - 6, LINE, INK, 0.7), rect("top", 10, 12, w - 10, d - 10, "#dcd3c6", "none")]),
            box(x + w / 2 - 2, y + 2, 4, 4, 14, "furn", z0=36, obj=obj),
            box(x + w / 2 - 2, y + 2, 4, 12, 3, "furn", z0=47, obj=obj)]


def shelving(x, y, w, d, h, rows=3, obj=None, fill=True):
    parts = [box(x, y, 3, d, h, "sand", obj=obj), box(x + w - 3, y, 3, d, h, "sand", obj=obj)]
    for r in range(rows + 1):
        parts.append(box(x, y, w, d, 2, "furn", z0=r * (h - 2) / rows, obj=obj))
    if fill:
        for r in range(rows):
            z = r * (h - 2) / rows + 2
            cx = x + 6
            for k in range(int((w - 12) / 14)):
                bw = 10 if k % 2 else 12
                parts.append(box(cx, y + d * 0.2, bw, d * 0.6, (h - 2) / rows * (0.55 if k % 3 else 0.75), "sand" if k % 2 else "furn", z0=z, obj=obj))
                cx += bw + 3
    return parts


def counter_block(x, y, w, d, h=40, obj=None):
    front = [line("front", 4, h - 8, w - 4, h - 8, LINE, 0.8)]
    return [box(x, y, w, d, h - 4, "sand", obj=obj, decals=front), box(x - 1, y - 1, w + 2, d + 2, 4, "furn", z0=h - 4, obj=obj)]


def host_stand(x, y, obj=None):
    return [box(x, y, 50, 28, 40, "sand", obj=obj, decals=[line("front", 6, 32, 44, 32, LINE, 0.8)]),
            box(x - 1, y - 1, 52, 30, 3, "furn", z0=40, obj=obj)]


# ===== Salon furniture =====

def nail_station(x, y, obj=None):
    """Table facing the viewer: the tech sits behind (-y), the client in front (+y)."""
    top = [rect("top", 30, 16, 46, 26, SAND, INK, 0.6)]
    parts = [box(x, y, 76, 34, 30, "furn", obj=obj, decals=[line("front", 4, 22, 72, 22, LINE, 0.8), rect("front", 30, 10, 46, 20, SAND, INK, 0.6)] ),
             box(x - 1, y - 1, 78, 36, 3, "furn", z0=30, obj=obj, decals=top),
             box(x + 34, y + 18, 10, 12, 5, "furn", z0=33, obj=obj)]
    for i, col in enumerate(("accent", "amber", "screen", "accent")):
        parts.append(cyl(x + 58 + (i % 2) * 6, y + 8 + (i // 2) * 7, 2.2, 7, col, z0=33, obj=obj))
    parts += [box(x + 8, y + 4, 8, 8, 3, "sand", z0=33, obj=obj), box(x + 11, y + 7, 2, 2, 34, "sand", z0=36, obj=obj),
              box(x + 11, y + 7, 18, 2, 2, "sand", z0=68, obj=obj), box(x + 24, y + 3, 12, 10, 5, "furn", z0=64, obj=obj)]
    return parts


def armchair(x, y, w=40, facing="n", color="furn", obj=None):
    """Client chair; facing 'n' means the sitter faces -y (toward the table behind)."""
    if facing == "n":
        return [box(x, y, w, 36, 18, "sand", obj=obj), box(x + 3, y + 3, w - 6, 28, 5, color, z0=18, obj=obj),
                box(x, y + 28, w, 8, 36, color, obj=obj), box(x, y, 5, 30, 26, color, obj=obj), box(x + w - 5, y, 5, 30, 26, color, obj=obj)]
    return [box(x, y, w, 36, 18, "sand", obj=obj), box(x + 3, y + 5, w - 6, 28, 5, color, z0=18, obj=obj),
            box(x, y, w, 8, 36, color, obj=obj), box(x, y + 6, 5, 30, 26, color, obj=obj), box(x + w - 5, y + 6, 5, 30, 26, color, obj=obj)]


def pedicure_chair(x, y, obj=None):
    """Against the right wall, facing -x: throne on a plinth, footbath in front."""
    return [box(x, y, 56, 50, 22, "sand", obj=obj),
            box(x + 4, y + 4, 44, 42, 8, "furn", z0=22, obj=obj),
            box(x + 44, y, 12, 50, 60, "furn", z0=22, obj=obj),
            box(x + 4, y, 40, 5, 22, "furn", z0=30, obj=obj),
            box(x + 4, y + 45, 40, 5, 22, "furn", z0=30, obj=obj),
            box(x - 36, y + 8, 30, 34, 14, "furn", obj=obj, decals=[rect("top", 4, 4, 26, 30, "#dfe8ea", INK, 0.6)])]


def styling_station(x, y, obj=None):
    """Mirror and shelf on the back wall; the chair in front faces the mirror."""
    mirror = [rect("front", 4, 4, 46, 76, "#eef1f1", INK, 0.6), line("front", 12, 60, 24, 72, WHITE, 1.5), line("front", 16, 52, 34, 70, WHITE, 1.5)]
    return [box(x, y, 50, 4, 80, "furn", z0=40, obj=obj, decals=mirror),
            box(x + 2, y, 46, 18, 4, "furn", z0=36, obj=obj),
            cyl(x + 14, y + 8, 2.5, 8, "accent", z0=40, obj=obj), cyl(x + 22, y + 8, 2, 11, "screen", z0=40, obj=obj),
            cyl(x + 25, y + 40, 12, 3, "screen", obj=obj), cyl(x + 25, y + 40, 3, 20, "sand", z0=3, obj=obj),
            box(x + 12, y + 30, 26, 24, 7, "screen", z0=23, obj=obj), box(x + 12, y + 50, 26, 5, 28, "screen", z0=26, obj=obj),
            box(x + 8, y + 32, 4, 18, 8, "screen", z0=30, obj=obj), box(x + 38, y + 32, 4, 18, 8, "screen", z0=30, obj=obj)]


def shampoo_sink(x, y, obj=None):
    return [box(x, y, 50, 30, 50, "furn", obj=obj, decals=[rect("top", 8, 6, 42, 24, "#dfe8ea", INK, 0.6)]),
            box(x + 23, y + 2, 4, 4, 12, "furn", z0=50, obj=obj),
            box(x + 6, y + 30, 38, 36, 20, "sand", obj=obj), box(x + 6, y + 30, 38, 10, 40, "screen", z0=20, obj=obj),
            box(x + 8, y + 40, 34, 26, 5, "screen", z0=20, obj=obj)]


def front_desk(x, y, w=120, d=34, obj=None):
    front = [line("front", 6, 38, w - 6, 38, LINE, 0.8), rect("front", w * 0.35, 12, w * 0.65, 26, RED)]
    return [box(x, y, w, d, 44, "sand", obj=obj, decals=front),
            box(x - 2, y - 2, w + 4, d + 4, 4, "furn", z0=44, obj=obj),
            box(x, y - 20, w, 20, 32, "furn", obj=obj)]


def bench(x, y, w=130, obj=None):
    return [box(x, y, w, 30, 18, "sand", obj=obj), box(x + 2, y + 2, w - 4, 26, 6, "furn", z0=18, obj=obj),
            box(x, y, w, 7, 40, "furn", obj=obj)]


def product_shelf(x, y, w=100, obj=None):
    parts = []
    for r in range(3):
        z = 40 + r * 26
        parts.append(box(x, y, w, 16, 3, "furn", z0=z, obj=obj))
        for k in range(int((w - 8) / 9)):
            col = ("accent", "amber", "screen", "furn", "accent", "sand")[(k + r) % 6]
            parts.append(cyl(x + 7 + k * 9, y + 8, 3, 10 + (k % 3) * 2, col, z0=z + 3, obj=obj))
    return parts


def plant(x, y, obj=None):
    return [cyl(x, y, 10, 20, "amber", obj=obj), cyl(x, y, 13, 10, "sand", z0=20, obj=obj),
            cyl(x, y, 10, 10, "sand", z0=30, obj=obj), cyl(x, y, 6, 8, "sand", z0=40, obj=obj)]
