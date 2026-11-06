# UGV-DTU website: what we still need from the team

Everything below is either a **placeholder on the live site** or **copy that came from the design file and has not been checked against reality**. Nothing here has been invented: where the repo had no data, the site shows "TBD" or the design's sample text.

Priority: **P1** = visible placeholder, **P2** = unverified claim on the site, **P3** = nice to have.

---

## 1. CAD / 3D models (P1)

**Currently:** every vehicle page shows a rotating placeholder cube. The hero rover and the project showcase use simple procedural shapes, not real CAD. Only Avni has models in the repo (`public/avni*.glb`), and they are not wired into the site yet.

| # | Needed | Used for |
|---|---|---|
| 1 | Avni, Ashwini, Valkyrie, Agni, Centaur, Airawat, Kurm: one CAD model each | Fleet roller preview and each vehicle's page |
| 2 | Ashwini (IGVC 2025), the IGVC 2023 platform, the MathWorks Minidrone | Project showcase (3 scroll scenes) |
| 3 | A complete vehicle (suggest Avni or Ashwini) | Hero 3D rover, which is currently generic |
| 4 | Optional: the vehicle split into sub-assemblies (chassis, drivetrain, sensor mast, electronics box) | The hero "Explode" view |

**Format and export checklist**
- File type: **.glb** (glTF binary). If you only have STEP/SLDPRT/STL, send those and we will convert.
- Size: under **8 MB** per model (existing `avni_pcb.glb` is 12 MB; too heavy). Decimate, or export a "visual" configuration without internal fasteners.
- Units metres, **Z or Y up (tell us which)**, origin at the centre of the base plate, wheels touching the ground plane.
- Materials: plain PBR colours are fine; we restyle to the site's dark/orange look.
- Name the parts sensibly (`wheel_FL`, `lidar`, `chassis`...), because the explode and "inspect tag" features need part names.
- Valkyrie is an aerial vehicle; confirm whether it belongs under "UGV fleet".

## 2. Vehicle data (P1): 7 vehicles

The old site only had a name, one paragraph and photos. For **each** of Avni, Ashwini, Valkyrie, Agni, Centaur, Airawat, Kurm we need:
- Year / competition(s) it was built for
- Drive type (e.g. differential, 4WD, skid-steer)
- 3 to 6 spec lines (top speed, mass, battery, compute, sensors, autonomy stack)
- Current status (active / retired / in build)
- Confirm the existing description text is still accurate
- 3 to 5 good photos (the repo has 1 to 3 per vehicle; Kurm and Airawat have one each)

## 3. People (P1)

- **20 photos in `src/assets/team` are not attached to anyone.** We need name, role and department for each, or confirmation to drop them:
  - Listed in old data but not assigned: dhairya_aneja, dhruv_rastogi, aryan_munjal, ria_solanki, himanshu_prajapati, abhinav_agarwal, ishaan_yadav, ansh_dahiya, bhavya_garg, laxman_bhusal
  - Never imported: akshat, anusri, apeksha, bhuvi, dhruv, diksha, gatik, khushil_mahajan, vedant, yuvraj
- Confirm the current council (Captain, Vice-Captain, Team Manager, Treasurer) and all department heads: names, roles, photos.
- Confirm **who is in each department**. Software currently shows 13 members; the other departments should be checked.
- Optional: one-line quote per council member (the design has a hover quote; we left it empty). Social links now show on cards; any person with no icon has no link in the old data.
- Alumni / past captains list, if wanted (not in the design).

## 4. Facts stated on the site that need verifying (P2)

These come from the design file's sample copy and look plausible but are not from the repo:
- **Hero:** "Ten years of designing, building and deploying..." and "10+ Years building".
- **Ashwini showcase:** "3030 aluminium T-slot chassis, RPLiDAR A3M1, Intel RealSense D455 and RTK GPS, ROS Noetic with move_base, LoRa wireless e-stop reaching 1 km, top speed 6 mph, ramps up to 16°".
- **IGVC 2023 (Oakland University) and Minidrone 2021 (EMEA)** showcase text.
- **Hero part tags:** LiDAR, Depth camera, RTK GPS, LoRa E-Stop.
- **Department one-liners and focus lines:** e.g. Software "ROS 2 · SLAM · CV", Electrical "PCB · BMS · LoRa E-Stop".
- **About page** and the **UGVC / ISDC / IGVC page copy** (descriptions, years, locations).
- **Achievements table:** 16 entries came from the old site; please add year and venue per row if you want them shown.
- Mark any statement that is wrong and we will correct it.

## 5. Contact details: conflicts to resolve (P1)

| Item | Footer says | Contact page says |
|---|---|---|
| Phone | +91 99934 00267 | +91 70420 11047 |
| Location | WT-3 and 4, Wind Tunnel, DTU | 3rd Floor, Electrical Department |

Please give us **one** correct phone number, **one** workshop address, the official team email (currently ugv@dtu.ac.in), and the exact Instagram and LinkedIn URLs (LinkedIn is currently `linkedin.com/company/ugv-dtu/`). The old contact form (Formspree) is not in the new design; tell us if you want a form back and where submissions should go.

## 6. Research (P2)

- Only **2 papers** exist (the AGNI sensor-fusion paper, and the power-distribution board paper). Send any others: title, authors, venue, year, abstract, link (DOI / arXiv / IEEE), and a PDF if it can be hosted.
- The animated mini-demos on each card (SLAM, EKF...) are the design's decoration and do not describe your papers; tell us if you want them changed or removed.

## 7. Sponsors (P2)

- **Transparent SVG or high-resolution PNG** logos (current files are small PNGs).
- Website link per sponsor, sponsorship tier or year if you want them shown, and any sponsors missing from the 7 shown (SolidWorks, MathWorks, Ansys, Earth Day, JSW, PCBWay, Robokits).
- A sponsorship brochure (PDF) if the "Become a sponsor" button should link to one.

## 8. Gallery and blogs (P3)

- **Captions** for all 13 gallery photos (now "UGV-DTU archive · 01" etc.), ideally with year and event, and photographer credit.
- More photos welcome (aim for 1600 px on the long edge; we optimise them).
- 4 blog posts exist. Send new posts as Markdown plus images. The first post (ROS 2 autonomy stack) has no image, so its card shows a plain placeholder; a cover image would help. Confirm author names (all say "UGV-DTU") and dates.

## 9. Brand and site basics (P2)

- Final **logo files** (SVG, plus light and dark variants). The logo is currently drawn inline from the design file.
- **Favicon and app icons** (512 px PNG); `public/manifest.json` and `favicon.ico` are from the old site.
- A **social preview image** (1200x630) and a one-line site description.
- **Domain and hosting** decision, plus analytics preference (none right now).
- Permission/licence confirmation for the photos of people (team and competition photos).

## 10. Decisions we need

1. Show the real Avni model in the Avni vehicle page (replacing the cube)? Recommended once item 1 is supplied.
2. Keep the blog post pages (an addition beyond the design file, needed to read the existing posts)?
3. Keep the roster carousel the design file contains but never switches on? (We left it out.)
4. ~~Show social links on member cards?~~ Done. Cards now show LinkedIn / GitHub / Instagram icons from the existing data. Anyone with a missing icon has no link in the old data, so please send the missing ones.
