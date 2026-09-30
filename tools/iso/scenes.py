"""Scenes built from models: the home board, the restaurant and salon plans, and the static figures."""
import models as m
from iso_lib import box, place

T = 12


def shell(W, D, front, tall=120, low=34):
    """Tall back and left walls, low cut right and front walls. front = [(x0, x1, kind)] along the street."""
    parts = [box(-T, -T, W + 2 * T, T, tall, "tall"), box(-T, 0, T, D + T, tall, "tall"), box(W, 0, T, D + T, low, "wall")]
    for a, b, k in front:
        parts.append(box(a, D, b - a, T, low, k))
    return parts


# ===== Restaurant =====

def restaurant():
    W, D = 900, 560
    p = shell(W, D, [(-T, 60, "wall"), (60, 320, "glass"), (320, 380, "wall"), (460, 520, "wall"), (520, 780, "glass"), (780, W + T, "wall")])
    # stock room
    p += [box(380, 0, 8, 150, 34, "wall"), box(380, 150, 50, 8, 34, "wall"), box(476, 150, 44, 8, 34, "wall")]
    p += m.shelving(392, 6, 118, 26, 72, rows=3, obj=9)
    p += place(m.shelving(0, 0, 60, 24, 60, rows=2), dx=392, dy=100, obj=9)
    # kitchen
    p += [box(520, 0, 8, 160, 34, "wall"), box(520, 205, 8, 25, 34, "wall"), box(528, 222, 82, 8, 34, "wall"), box(730, 222, 170, 8, 34, "wall")]
    p += [box(610, 222, 120, 8, 22, "furn")]
    p += m.stove(540, 12, 110, 44) + m.hood(540, 0, 110)
    p += m.sink(660, 12, 60, 44)
    p += m.prep_table(730, 12, 150, 44)
    p += m.fridge_side(836, 80, 54, 90, 96)
    p += m.prep_table(610, 106, 170, 50)
    p += m.kds_hung(638, 204, 48, 64, obj=3)
    # counter
    p += m.counter_block(540, 262, 300, 40) + m.counter_block(800, 302, 40, 80)
    p += place(m.register(), 0.55, 552, 250, 40)
    p += place(m.counter_station(), 0.55, 620, 250, 40, obj=2)
    p += m.customer_display(700, 294, 40, obj=8)
    p += m.tv_hung(548, 234, 72, 60, obj=4) + m.tv_hung(740, 234, 72, 60, obj=4)
    # pickup shelf
    p += m.counter_block(856, 420, 40, 110, 62)
    p += place(m.bag(0, 0, 0, 26, 24, 30, sticker=True), dx=862, dy=430, dz=62, obj=5)
    p += place(m.bag(0, 0, 0, 24, 22, 24), dx=864, dy=474, dz=62, obj=5)
    # kiosks by the door
    p += place(m.kiosk(), 0.9, 440, 440, 0, obj=1) + place(m.kiosk(), 0.9, 512, 440, 0, obj=1)
    # host stand
    p += m.host_stand(296, 478) + place(m.phone(bubbles=False), 0.36, 300, 470, 43, obj=6)
    # dining room
    p += m.banquette(0, 50, 300)
    for ty in (60, 150, 240):
        p += m.table_sq(34, ty, 44, 44) + m.chair(94, ty + 14, "w")
    for tx, obj in ((170, None), (290, 7)):
        p += m.table_sq(tx, 200, 60, 60, obj=obj)
        p += m.chair(tx + 22, 178, "s", obj) + m.chair(tx + 22, 266, "n", obj) + m.chair(tx - 20, 222, "e", obj) + m.chair(tx + 64, 222, "w", obj)
    for cx in (200, 310):
        p += m.table_round(cx, 100, 22) + m.chair(cx - 8, 56, "s") + m.chair(cx - 8, 128, "n")
    for cx in (200, 320):
        p += m.table_round(cx, 390, 24)
        p += m.chair(cx - 8, 344, "s") + m.chair(cx - 8, 420, "n") + m.chair(cx - 48, 382, "e") + m.chair(cx + 32, 382, "w")
    markers = {
        1: (486, 480, 150), 2: (637, 268, 62), 3: (670, 207, 88), 4: (578, 237, 106), 5: (878, 452, 96),
        6: (310, 490, 52), 7: (320, 230, 34), 8: (715, 296, 66), 9: (450, 19, 76),
    }
    labels = {"kitchen": (740, 180, 0), "dining": (150, 480, 0), "register": (660, 345, 0), "entrance": (420, 540, 0)}
    return p, markers, labels


# ===== Salon =====

def salon():
    W, D = 900, 560
    p = shell(W, D, [(-T, 40, "wall"), (40, 300, "glass"), (300, 700, "glass"), (780, W + T, "wall")])
    # styling and shampoo on the back wall
    p += m.styling_station(40, 0, obj=3) + m.styling_station(130, 0)
    p += m.shampoo_sink(236, 0)
    # retail shelf on the back wall
    p += m.product_shelf(640, 0, 120, obj=8)
    # nail bar
    for i, x in enumerate((190, 330, 470)):
        o = 7
        p += m.nail_station(x, 150, obj=o)
        p += m.stool(x + 38, 128, obj=o)
        p += m.armchair(x + 18, 196, 40, "n", obj=o)
    # pedicure chairs on the right wall
    p += m.pedicure_chair(834, 90) + m.pedicure_chair(834, 190)
    # front desk
    p += m.front_desk(560, 392, 150)
    p += place(m.phone(bubbles=False), 0.4, 560, 366, 48, obj=1)
    p += place(m.calendar_tablet(), 0.5, 588, 358, 48, obj=2)
    p += place(m.card_terminal(), 0.6, 676, 400, 48, obj=4)
    p += m.customer_display(640, 420, 48, obj=5)
    # waiting
    p += place(m.bench(0, 0, 150), dx=40, dy=440) + place(m.waitlist_sign(), 0.8, 190, 420, 0, obj=6)
    markers = {1: (580, 390, 60, 26), 2: (612, 382, 74, 62), 3: (65, 20, 126), 4: (684, 410, 56, 52), 5: (655, 424, 80, 26),
               6: (232, 464, 88), 7: (405, 166, 60), 8: (700, 8, 124)}
    labels = {"styling": (110, 110, 0), "nails": (400, 106, 0), "pedicure": (800, 300, 0), "desk": (640, 480, 0),
              "waiting": (110, 520, 0), "entrance": (740, 540, 0)}
    return p, markers, labels


# ===== Home board =====

CELL, GAP = 100, 12
BOARD = {"kds": (0, 0), "kiosk": (1, 0), "tv": (2, 0), "delivery": (0, 1), "ai": (2, 1), "profiles": (0, 2), "loyalty": (1, 2), "checkout": (2, 2)}


def board_tile(mid, ox, oy):
    z = 8
    base = m.tile_base(ox, oy)
    if mid == "kds":
        return base + m.kds(ox, oy, z)
    if mid == "kiosk":
        return base + place(m.kiosk(), 0.82, ox + 9, oy + 8, z)
    if mid == "tv":
        return base + m.tv(ox, oy, z)
    if mid == "delivery":
        return base + m.delivery(ox, oy, z)
    if mid == "ai":
        return base + m.phone(ox, oy, z)
    if mid == "profiles":
        return base + m.profiles_tablet(ox, oy, z)
    if mid == "loyalty":
        return base + m.stamp_card(ox, oy, z)
    if mid == "checkout":
        return base + m.card_terminal(ox + 37, oy + 30, z, scale=1.0)
    raise KeyError(mid)


# ===== Static figures =====

def tiled(parts):
    return m.tile_base(0, 0) + parts


FIGURES = {
    "ai": lambda: tiled(m.phone(0, 0, 8)),
    "loyalty": lambda: tiled(m.stamp_card(0, 0, 8)),
    "counter": lambda: tiled(m.counter_station(0, 0, 8)),
    "insights": lambda: tiled(m.insights_monitor(0, 0, 8)),
    "kiosk": lambda: tiled(place(m.kiosk(), 0.82, 9, 8, 8)),
    "kds": lambda: tiled(m.kds(0, 0, 8)),
    "tv": lambda: tiled(m.tv(0, 0, 8)),
    "delivery": lambda: tiled(m.delivery(0, 0, 8)),
    "profiles": lambda: tiled(m.profiles_tablet(0, 0, 8)),
    "checkout": lambda: tiled(m.card_terminal(37, 30, 8)),
    "register": lambda: tiled(m.register(10, 0, 8)),
    "server": lambda: tiled(m.server(0, 0, 8)),
    "calendar": lambda: tiled(m.calendar_tablet(0, 0, 8)),
    "payroll": lambda: tiled(m.payroll(0, 0, 8)),
    "waitlist": lambda: tiled(m.waitlist_sign(0, 0, 8)),
    "nail": lambda: [box(0, 0, 120, 110, 8, "base")] + place(m.nail_station(0, 0), 1, 20, 22, 8) + place(m.armchair(0, 0, 36, "n"), 1, 40, 64, 8),
    "counter-scene": lambda: [box(0, 0, 150, 100, 8, "base")] + m.counter_block(10, 44, 90, 34, 40) + place(m.register(), 0.5, 18, 32, 48)
    + place(m.counter_station(), 0.5, 56, 34, 48) + place(m.kiosk(), 0.75, 88, 12, 8),
    "stores": lambda: [box(0, 0, 280, 90, 8, "base")] + m.storefront(10, 20, 8, 70) + m.storefront(100, 20, 8, 70) + m.storefront(190, 20, 8, 70),
    "tv-404": lambda: tiled(m.tv(0, 0, 8, big="404")),
}
