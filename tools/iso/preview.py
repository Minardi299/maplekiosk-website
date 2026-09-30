"""Render every scene and figure into one HTML page for visual checks: python3 tools/iso/preview.py out.html"""
import json
import re
import sys

import export
import scenes


def scene_html(ts, active=None):
    data = json.loads(re.search(r"= (\{.*\}) as const", ts).group(1))
    marks = "".join(
        f'<span class="mk" style="left:{mk["x"]}%;top:{mk["y"]}%">{mk["id"]}</span>' for mk in data["markers"]
    ) + "".join(f'<span class="lb" style="left:{lb["x"]}%;top:{lb["y"]}%">{lb["key"]}</span>' for lb in data["labels"])
    return (f'<div class="wrap"><svg viewBox="{data["viewBox"]}" class="iso-svg">{data["svg"]}</svg>{marks}</div>')


def main(out):
    b = export.board().replace('class="tile"', 'class="tile on"')
    r = export.plan("r", scenes.restaurant, ((460, 560), (380, 560), (460, 480)))
    s = export.plan("s", scenes.salon, ((780, 560), (700, 560), (780, 480)))
    figs = "".join(f'<figure><div class="fig">{export.figure(f())}</div><figcaption>{n}</figcaption></figure>' for n, f in scenes.FIGURES.items())
    html = f"""<!doctype html><meta charset="utf-8"><link href="https://fonts.googleapis.com/css2?family=DM+Mono&display=swap" rel="stylesheet">
<style>body{{background:#faf7f2;margin:0;padding:24px;font-family:'DM Mono',monospace}}.iso-svg{{display:block;width:100%;height:auto}}.iso-svg *{{vector-effect:non-scaling-stroke}}
.wrap{{position:relative;background:#fff;border:1.5px solid #1d1a17;margin-bottom:24px}}.mk{{position:absolute;transform:translate(-50%,-50%);width:26px;height:26px;border-radius:50%;background:#c0392b;color:#fff;border:2px solid #fff;display:flex;align-items:center;justify-content:center;font-size:12px}}
.lb{{position:absolute;transform:translate(-50%,-50%);font-size:10px;color:#6b645c;background:#faf7f2;padding:1px 4px}}
.figs{{display:grid;grid-template-columns:repeat(5,1fr);gap:16px}}figure{{margin:0;background:#fff;border:1px solid #e8e1d7;padding:10px}}.fig svg{{width:100%;height:170px}}figcaption{{font-size:11px;color:#6b645c}}
.half{{width:620px}}</style>
<h3>board</h3><div class="half">{scene_html(b)}</div><h3>restaurant</h3>{scene_html(r)}<h3>salon</h3>{scene_html(s)}<h3>figures</h3><div class="figs">{figs}</div>"""
    open(out, "w").write(html)


if __name__ == "__main__":
    main(sys.argv[1])
