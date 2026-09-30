"""Isometric line-art primitives: boxes and cylinders with flat faces, plus decals painted on visible faces."""
import heapq
import math
import sys

C = math.cos(math.pi / 6)
S = 0.5
INK, RED, RED2, AMBER = "#1d1a17", "#c0392b", "#a8291b", "#e07b4a"
CREAM, SAND, LINE, MUTED, WHITE = "#faf7f2", "#f3ede4", "#e8e1d7", "#6b645c", "#ffffff"

# top, +y face (front-left), +x face (front-right)
FACES = {
    "furn": (WHITE, SAND, LINE),
    "screen": (INK, "#2d2925", "#3d3833"),
    "wall": (INK, SAND, LINE),
    "tall": (INK, SAND, LINE),
    "glass": (WHITE, WHITE, WHITE),
    "slab": (CREAM, RED, RED2),
    "accent": (RED, RED2, "#8f2a1f"),
    "base": (WHITE, SAND, LINE),
    "sand": (SAND, LINE, "#dcd3c6"),
    "amber": (AMBER, "#c9683b", "#b35c33"),
}


def P(x, y, z):
    return ((x - y) * C, (x + y) * S - z)


def pts(ps):
    return " ".join(f"{a:.1f},{b:.1f}" for a, b in ps)


def box(x, y, w, d, h, kind="furn", z0=0, obj=None, decals=None):
    return dict(t="box", x0=x, y0=y, x1=x + w, y1=y + d, z0=z0, z1=z0 + h, kind=kind, obj=obj, decals=decals or [])


def cyl(cx, cy, r, h, kind="furn", z0=0, obj=None):
    return dict(t="cyl", cx=cx, cy=cy, r=r, x0=cx - r, y0=cy - r, x1=cx + r, y1=cy + r, z0=z0, z1=z0 + h, kind=kind, obj=obj, decals=[])


# ===== decals =====
# face "front" = the +y face (u along x, v up), "side" = the +x face (u along -y from the front edge, v up), "top" (u along x, v along y)
def _fp(b, face, u, v):
    if face == "front":
        return P(b["x0"] + u, b["y1"], b["z0"] + v)
    if face == "side":
        return P(b["x1"], b["y1"] - u, b["z0"] + v)
    return P(b["x0"] + u, b["y0"] + v, b["z1"])


def rect(face, u0, v0, u1, v1, fill, stroke="none", sw=0.8):
    return ("rect", face, u0, v0, u1, v1, fill, stroke, sw)


def line(face, u0, v0, u1, v1, stroke=INK, sw=1):
    return ("line", face, u0, v0, u1, v1, stroke, sw)


def dot(face, u, v, r, fill, stroke="none"):
    return ("dot", face, u, v, r, fill, stroke)


def text(face, u, v, s, size=6, fill=INK, weight=500, family="DM Mono, monospace"):
    return ("text", face, u, v, s, size, fill, weight, family)


def _decal(b, d):
    k, face = d[0], d[1]
    if k == "rect":
        _, _, u0, v0, u1, v1, fill, stroke, sw = d
        q = [_fp(b, face, u0, v0), _fp(b, face, u1, v0), _fp(b, face, u1, v1), _fp(b, face, u0, v1)]
        return f'<polygon points="{pts(q)}" fill="{fill}" stroke="{stroke}" stroke-width="{sw}"/>'
    if k == "line":
        _, _, u0, v0, u1, v1, stroke, sw = d
        a, c = _fp(b, face, u0, v0), _fp(b, face, u1, v1)
        return f'<line x1="{a[0]:.1f}" y1="{a[1]:.1f}" x2="{c[0]:.1f}" y2="{c[1]:.1f}" stroke="{stroke}" stroke-width="{sw}" stroke-linecap="round"/>'
    if k == "dot":
        _, _, u, v, r, fill, stroke = d
        q = [_fp(b, face, u + r * math.cos(t * math.pi / 8), v + r * math.sin(t * math.pi / 8)) for t in range(16)]
        return f'<polygon points="{pts(q)}" fill="{fill}" stroke="{stroke}" stroke-width="0.8"/>'
    if k == "text":
        _, _, u, v, s, size, fill, weight, family = d
        o = _fp(b, face, 0, 0)
        if face == "front":
            m = f"matrix({C:.4f},{S},0,1,{o[0]:.1f},{o[1]:.1f})"
            x, y = u, -v
        elif face == "side":
            m = f"matrix({C:.4f},{-S},0,1,{o[0]:.1f},{o[1]:.1f})"
            x, y = u, -v
        else:
            m = f"matrix({C:.4f},{S},{-C:.4f},{S},{o[0]:.1f},{o[1]:.1f})"
            x, y = u, v
        return f'<text transform="{m}" x="{x}" y="{y}" font-family="{family}" font-size="{size}" font-weight="{weight}" fill="{fill}" stroke="none">{s}</text>'
    raise KeyError(k)


def draw_box(it, kind=None):
    x0, y0, x1, y1, z0, z1 = it["x0"], it["y0"], it["x1"], it["y1"], it["z0"], it["z1"]
    k = kind or it["kind"]
    top, left, right = FACES[k]
    sw = 0.8 if k == "glass" else 1
    cls = f' class="o o{it["obj"]}" data-obj="{it["obj"]}"' if it.get("obj") else ""
    g = [f'<g{cls} data-k="{k}" stroke="{INK}" stroke-width="{sw}" stroke-linejoin="round">']
    g.append(f'<polygon class="f-l" fill="{left}" points="{pts([P(x0,y1,z0),P(x1,y1,z0),P(x1,y1,z1),P(x0,y1,z1)])}"/>')
    g.append(f'<polygon class="f-r" fill="{right}" points="{pts([P(x1,y0,z0),P(x1,y1,z0),P(x1,y1,z1),P(x1,y0,z1)])}"/>')
    g.append(f'<polygon class="f-t" fill="{top}" points="{pts([P(x0,y0,z1),P(x1,y0,z1),P(x1,y1,z1),P(x0,y1,z1)])}"/>')
    g.extend(_decal(it, d) for d in it.get("decals", []))
    g.append("</g>")
    return "".join(g)


def draw_cyl(it):
    top, side, _ = FACES[it["kind"]]
    cx, cy, r, z0, z1 = it["cx"], it["cy"], it["r"], it["z0"], it["z1"]
    bx, by = P(cx, cy, z0)
    tx, ty = P(cx, cy, z1)
    rx, ry = r * math.sqrt(2) * C, r * math.sqrt(2) * S
    cls = f' class="o o{it["obj"]}" data-obj="{it["obj"]}"' if it.get("obj") else ""
    return (
        f'<g{cls} data-k="{it["kind"]}" stroke="{INK}" stroke-width="1">'
        f'<path class="f-l" fill="{side}" d="M{bx-rx:.1f} {ty:.1f}V{by:.1f}A{rx:.1f} {ry:.1f} 0 0 0 {bx+rx:.1f} {by:.1f}V{ty:.1f}Z"/>'
        f'<ellipse class="f-t" fill="{top}" cx="{tx:.1f}" cy="{ty:.1f}" rx="{rx:.1f}" ry="{ry:.1f}"/></g>'
    )


def sbbox(it):
    xs, ys = [], []
    for x in (it["x0"], it["x1"]):
        for y in (it["y0"], it["y1"]):
            for z in (it["z0"], it["z1"]):
                a, b = P(x, y, z)
                xs.append(a)
                ys.append(b)
    return min(xs), min(ys), max(xs), max(ys)


def _before(a, b):
    e = 0.01
    if a["x1"] <= b["x0"] + e and not (b["y1"] <= a["y0"] + e):
        return True
    if b["x1"] <= a["x0"] + e and not (a["y1"] <= b["y0"] + e):
        return False
    if a["y1"] <= b["y0"] + e:
        return True
    if b["y1"] <= a["y0"] + e:
        return False
    return (a["z0"], a["z1"]) < (b["z0"], b["z1"])


def order(its):
    n = len(its)
    bb = [sbbox(i) for i in its]
    succ = [[] for _ in range(n)]
    indeg = [0] * n
    for i in range(n):
        for j in range(i + 1, n):
            A, B = bb[i], bb[j]
            if A[2] <= B[0] or B[2] <= A[0] or A[3] <= B[1] or B[3] <= A[1]:
                continue
            if _before(its[i], its[j]):
                succ[i].append(j)
                indeg[j] += 1
            else:
                succ[j].append(i)
                indeg[i] += 1
    key = lambda i: (its[i]["x0"] + its[i]["x1"] + its[i]["y0"] + its[i]["y1"], its[i]["z0"])
    heap = [(key(i), i) for i in range(n) if indeg[i] == 0]
    heapq.heapify(heap)
    out, done, forced = [], [False] * n, 0
    while len(out) < n:
        if not heap:
            # cycle: release the farthest-back part that is still waiting
            i = min((i for i in range(n) if not done[i]), key=lambda i: (indeg[i], key(i)))
            indeg[i] = 0
            heapq.heappush(heap, (key(i), i))
            forced += 1
        _, i = heapq.heappop(heap)
        if done[i]:
            continue
        done[i] = True
        out.append(i)
        for j in succ[i]:
            indeg[j] -= 1
            if indeg[j] == 0 and not done[j]:
                heapq.heappush(heap, (key(j), j))
    if forced:
        sys.stderr.write(f"iso: broke {forced} draw-order cycle(s)\n")
    return [its[i] for i in out]


def _scale_decal(d, s):
    k = d[0]
    if k in ("rect", "line"):
        return (k, d[1], *(v * s for v in d[2:6]), *d[6:])
    if k == "dot":
        return (k, d[1], d[2] * s, d[3] * s, d[4] * s, *d[5:])
    if k == "text":
        return (k, d[1], d[2] * s, d[3] * s, d[4], d[5] * s, *d[6:])
    return d


def place(parts, s=1.0, dx=0.0, dy=0.0, dz=0.0, obj=None):
    """Scale parts about the origin, then move them. Decals scale with their box."""
    out = []
    for p in parts:
        q = dict(p)
        for a, off in (("x0", dx), ("x1", dx), ("y0", dy), ("y1", dy), ("z0", dz), ("z1", dz)):
            q[a] = p[a] * s + off
        if p["t"] == "cyl":
            q["cx"], q["cy"], q["r"] = p["cx"] * s + dx, p["cy"] * s + dy, p["r"] * s
        q["decals"] = [_scale_decal(d, s) for d in p.get("decals", [])]
        if obj is not None:
            q["obj"] = obj
        out.append(q)
    return out


def render(its):
    return "".join(draw_box(i) if i["t"] == "box" else draw_cyl(i) for i in order(its))


def svg(its, cls="th-svg", pad=6, extra=""):
    xs, ys = [], []
    for i in its:
        b = sbbox(i)
        xs += [b[0], b[2]]
        ys += [b[1], b[3]]
    vb = (min(xs) - pad, min(ys) - pad, max(xs) - min(xs) + 2 * pad, max(ys) - min(ys) + 2 * pad)
    return f'<svg viewBox="{vb[0]:.1f} {vb[1]:.1f} {vb[2]:.1f} {vb[3]:.1f}" class="{cls}" aria-hidden="true">' + render(its) + extra + "</svg>"
