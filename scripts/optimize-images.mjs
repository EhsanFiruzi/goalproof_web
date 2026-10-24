import sharp from "sharp";
import { readdir, mkdir } from "node:fs/promises";
import path from "node:path";

const dir = "public/app_screen_shot";
const out = "public/app_screen_shot_opt";
await mkdir(out, { recursive: true });

for (const f of await readdir(dir)) {
  if (!f.endsWith(".png")) continue;
  const name = path.parse(f).name;
  await sharp(path.join(dir, f))
    .webp({ quality: 88, effort: 6 })
    .toFile(path.join(out, `${name}.webp`));
  console.log("done", name);
}