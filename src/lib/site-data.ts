import {
  Building2,
  HardHat,
  Ruler,
  ClipboardList,
  Hammer,
  Factory,
  Route,
  Boxes,
  Drill,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    slug: "general-building",
    title: "Building Construction",
    description:
      "Residential, commercial, institutional and industrial buildings delivered with precision, safety and premium workmanship.",
    icon: Building2,
  },
  {
    slug: "civil-engineering",
    title: "Civil Engineering",
    description:
      "Roads, drainage, earthworks, bridges and structural infrastructure engineered for long-term performance.",
    icon: HardHat,
  },
  {
    slug: "design-and-build",
    title: "Design & Build",
    description:
      "A single-team approach uniting planning, architecture, engineering and construction under one accountable partnership.",
    icon: Ruler,
  },
  {
    slug: "project-management",
    title: "Project Management",
    description:
      "Planning, scheduling, budgeting, QA/QC and site supervision that keep projects safe, on programme and on budget.",
    icon: ClipboardList,
  },
  {
    slug: "renovation-and-refurbishment",
    title: "Renovation & Refurbishment",
    description:
      "Renovation, expansion and restoration works that enhance the value, functionality and appearance of existing properties.",
    icon: Hammer,
  },
  {
    slug: "industrial-construction",
    title: "Industrial Construction",
    description:
      "Factories, warehouses, manufacturing plants and industrial facilities built for uptime, safety and operational performance.",
    icon: Factory,
  },
  {
    slug: "facility-maintenance",
    title: "Facility Maintenance",
    description:
      "Planned maintenance, repairs and facility management that keep buildings performing efficiently across their lifecycle.",
    icon: Route,
  },
  {
    slug: "prefabricated",
    title: "Pre-Fabricated Structures",
    description: "Rapidly deployable, engineered prefab solutions for schools, camps, clinics and remote sites.",
    icon: Boxes,
  },
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  location: string;
  image: string;
  summary: string;
  client?: string;
  status?: string;
  description?: string;
  gallery?: { src: string; alt: string; caption?: string }[];
};

import hospitalAerial from "@/assets/hospital-image83_1.asset.json";
import hospitalExterior from "@/assets/hospital-image85_1.asset.json";
import hospitalFacade from "@/assets/hospital-image78_1.asset.json";
import hospitalRoofing from "@/assets/hospital-image87_1.asset.json";
import hospitalWard from "@/assets/hospital-image81_1.asset.json";
import hospitalNursesBay from "@/assets/hospital-image80_1.asset.json";
import hospitalCompletedExterior from "@/assets/hospital-image101_1.asset.json";
import hospitalCompletedRoom from "@/assets/hospital-image103_1.asset.json";
import hospitalCeilingProgress from "@/assets/hospital-image105_1.asset.json";
import hospitalBlockwork from "@/assets/hospital-image106_1.asset.json";
import hospitalScaffoldCourtyard from "@/assets/hospital-image11_1.asset.json";
import hospitalMasonryCrew from "@/assets/hospital-image8_1.asset.json";
import hospitalScaffoldFacade from "@/assets/hospital-image10_1.asset.json";

export const hospitalProject: Project = {
  slug: "hospital-projects",
  title: "Hospital Construction & Renovation Projects",
  category: "Healthcare Infrastructure",
  location: "Ghana",
  image: hospitalAerial.url,
  client: "Confidential",
  status: "Completed",
  summary:
    "Modern healthcare facilities delivered end-to-end — construction, renovation, finishing, MEP installations and external works.",
  description:
    "Firma Projektz Ltd delivers hospital construction and renovation projects that provide safe, modern and efficient healthcare environments. Our scope covers building construction, interior finishing, external works, drainage, painting, electrical and plumbing installations, flooring, ceilings and full project coordination — executed to strict quality and safety standards.",
  gallery: [
    {
      src: hospitalAerial.url,
      alt: "Aerial view of completed hospital facility built by Firma Projektz Ltd in Ghana.",
      caption: "Completed hospital facility — aerial view",
    },
    {
      src: hospitalExterior.url,
      alt: "Newly constructed hospital block by Firma Projektz Ltd in Ghana.",
      caption: "Newly constructed hospital block",
    },
    {
      src: hospitalFacade.url,
      alt: "Finished hospital exterior with painted facade and accessibility ramp by Firma Projektz Ltd in Ghana.",
      caption: "Finished exterior with accessibility ramp",
    },
    {
      src: hospitalRoofing.url,
      alt: "Hospital construction progress showing steel roof truss installation by Firma Projektz Ltd in Ghana.",
      caption: "Roof truss installation in progress",
    },
    {
      src: hospitalNursesBay.url,
      alt: "Completed hospital nurses bay interior with medical gas outlets by Firma Projektz Ltd in Ghana.",
      caption: "Nurses bay — interior finishing",
    },
    {
      src: hospitalWard.url,
      alt: "Completed hospital ward with medical equipment installed by Firma Projektz Ltd in Ghana.",
      caption: "Patient ward with equipment installed",
    },
    {
      src: hospitalBlockwork.url,
      alt: "Hospital extension blockwork and reinforced concrete columns under construction by Firma Projektz Ltd in Ghana.",
      caption: "Blockwork and columns — extension in progress",
    },
    {
      src: hospitalCeilingProgress.url,
      alt: "Hospital interior partitioning, ceiling grid and MEP first fix in progress by Firma Projektz Ltd in Ghana.",
      caption: "Partitions, ceiling grid & MEP first fix",
    },
    {
      src: hospitalCompletedExterior.url,
      alt: "Completed hospital building exterior with paved forecourt by Firma Projektz Ltd in Ghana.",
      caption: "Completed exterior with paved forecourt",
    },
    {
      src: hospitalCompletedRoom.url,
      alt: "Completed hospital consulting room with tiled floor and finished ceiling by Firma Projektz Ltd in Ghana.",
      caption: "Completed consulting room",
    },
    {
      src: hospitalScaffoldFacade.url,
      alt: "Hospital block facade under construction with scaffolding and completed roofing by Firma Projektz Ltd in Ghana.",
      caption: "Facade construction with roofing complete",
    },
    {
      src: hospitalScaffoldCourtyard.url,
      alt: "Internal courtyard of hospital building enclosed by scaffolding during construction by Firma Projektz Ltd in Ghana.",
      caption: "Internal courtyard — scaffolding phase",
    },
    {
      src: hospitalMasonryCrew.url,
      alt: "Firma Projektz Ltd site crew installing blockwork partitions inside a hospital building in Ghana.",
      caption: "Site crew — internal blockwork installation",
    },
  ],
};

import academicAerial from "@/assets/academic-image45_1.asset.json";
import academicCampusProgress from "@/assets/academic-image46_1.asset.json";
import academicSiteWorks from "@/assets/academic-image48_1.asset.json";
import academicSuperstructure from "@/assets/academic-image50_1.asset.json";
import academicTower from "@/assets/academic-image54_1.asset.json";
import academicHallAerial from "@/assets/academic-image55_1.asset.json";
import energySwitchgear from "@/assets/energy-image96_1.asset.json";
import energyCommissioning from "@/assets/energy-image97_1.asset.json";
import energyControlRoom from "@/assets/energy-image98_1.asset.json";
import energyStructure from "@/assets/energy-image99_1.asset.json";
import energySiteBuild from "@/assets/energy-image100_1.asset.json";
import hostelRoofing from "@/assets/hostel-image62_1.asset.json";
import hostelSuperstructure from "@/assets/hostel-image63_1.asset.json";
import hostelSiteProgress from "@/assets/hostel-image64_1.asset.json";
import hostelColumns from "@/assets/hostel-image65_1.asset.json";
import hostelFoundations from "@/assets/hostel-image66_1.asset.json";
import hostelSetout from "@/assets/hostel-image67_1.asset.json";
import hostelPic13 from "@/assets/hostel-13.jpg.asset.json";
import hostelPic14 from "@/assets/hostel-14.jpg.asset.json";
import hostelPic15 from "@/assets/hostel-15.jpg.asset.json";
import hostelPic16 from "@/assets/hostel-16.jpg.asset.json";
import hostelPic17 from "@/assets/hostel-17.jpg.asset.json";
import hostelPic18 from "@/assets/hostel-18.jpg.asset.json";
import residentialCover from "@/assets/residential-image68_1.asset.json";
import residentialPlaster from "@/assets/residential-image71_1.asset.json";
import residentialProgress from "@/assets/residential-image72_1.asset.json";
import residentialFormwork from "@/assets/residential-image73_1.asset.json";
import residentialFraming from "@/assets/residential-image74_1.asset.json";
import residentialSlab from "@/assets/residential-image75_1.asset.json";
import residentialFoundations from "@/assets/20260128_131843_1.jpg.asset.json";
import residentialGroundBeams from "@/assets/20260424_070107_1.jpg.asset.json";
import residentialWaterproofing from "@/assets/20260217_104715_1.jpg.asset.json";
import residentialSubstructure from "@/assets/20260211_172918_1.jpg.asset.json";
import residentialFrontRender from "@/assets/FRONT_1.jpg.asset.json";
import residentialBackRender from "@/assets/BACK_VIEW_1.jpg.asset.json";
import residentialPoolRender from "@/assets/POOL_SIDE_1.jpg.asset.json";
import officeCompleted from "@/assets/office-image2_1.asset.json";
import officeSuperstructure from "@/assets/office-image36_1.asset.json";
import officeColumns from "@/assets/office-image37_1.asset.json";
import officeFinishing from "@/assets/office-image38_1.asset.json";
import civilRebarWall from "@/assets/civil-20250226_125745.jpg.asset.json";
import civilPumpTruck from "@/assets/civil-20250227_134251.jpg.asset.json";
import civilConcretePour from "@/assets/civil-20250227_175846.jpg.asset.json";
import civilSlabCuring from "@/assets/civil-20250228_083139.jpg.asset.json";
import civilLaterPour from "@/assets/civil-20250307_151841.jpg.asset.json";
import civilShotcrete from "@/assets/civil-20250318_093249.jpg.asset.json";
import civilRetainingWall from "@/assets/civil-20250627_155758.jpg.asset.json";
import civilTrenchRebar from "@/assets/civil-20250717_164010.jpg.asset.json";
import civilMixerPour from "@/assets/civil-20250819_161629.jpg.asset.json";
import civilFinishedWall from "@/assets/civil-20251002_091918.jpg.asset.json";
import civilPipeline from "@/assets/civil-20260123_162527.jpg.asset.json";

export const academicProject: Project = {
  slug: "academic-projects",
  title: "Academic Infrastructure Development Projects",
  category: "Educational Facilities",
  location: "Ghana",
  image: academicAerial.url,
  client: "Confidential",
  status: "Completed",
  summary:
    "Classroom blocks, lecture halls, laboratories and administration buildings delivered with quality, safety and durability.",
  description:
    "Firma Projektz Ltd delivers academic infrastructure that creates safe, functional and inspiring learning environments. Our scope covers classroom blocks, lecture halls, administration buildings, libraries, laboratories, renovation works, roofing, flooring, painting, electrical and plumbing installations, drainage, external works and full project management — all built to lasting standards.",
  gallery: [
    {
      src: academicAerial.url,
      alt: "Aerial view of completed academic campus built by Firma Projektz Ltd in Ghana.",
      caption: "Completed academic campus — aerial view",
    },
    {
      src: academicHallAerial.url,
      alt: "Aerial view of monumental lecture hall constructed by Firma Projektz Ltd in Ghana.",
      caption: "Lecture hall & auditorium — aerial view",
    },
    {
      src: academicSiteWorks.url,
      alt: "Academic building superstructure and external works in progress by Firma Projektz Ltd in Ghana.",
      caption: "Superstructure & external works in progress",
    },
    {
      src: academicSuperstructure.url,
      alt: "Multi-storey classroom block superstructure and blockwork by Firma Projektz Ltd in Ghana.",
      caption: "Classroom block — blockwork & framing",
    },
    {
      src: academicCampusProgress.url,
      alt: "Multi-block academic facility under construction by Firma Projektz Ltd in Ghana.",
      caption: "Campus-wide construction progress",
    },
    {
      src: academicTower.url,
      alt: "Administration tower and entrance archway under construction by Firma Projektz Ltd in Ghana.",
      caption: "Administration tower & entrance archway",
    },
  ],
};

export const energyProject: Project = {
  slug: "energy-infrastructure",
  title: "Energy Infrastructure Works",
  category: "Energy & Utilities Infrastructure",
  location: "Ghana",
  image: energySiteBuild.url,
  client: "Confidential",
  status: "Completed",
  summary:
    "Substations, control buildings, equipment foundations and utility structures engineered to power Ghana's growing energy sector.",
  description:
    "Firma Projektz Ltd delivers robust energy infrastructure that powers communities, industries and economic growth. Our capability spans construction, rehabilitation and upgrade of electrical substations, distribution facilities, utility buildings, renewable energy support structures, reinforced concrete foundations, equipment bases, control buildings, access roads, drainage and associated civil works — all executed with engineering rigour, safety and long-term durability.",
  gallery: [
    {
      src: energySiteBuild.url,
      alt: "Energy infrastructure project constructed by Firma Projektz Ltd in Ghana — elevated utility building on reinforced concrete columns.",
      caption: "Elevated utility building — structural works",
    },
    {
      src: energyStructure.url,
      alt: "Power infrastructure civil engineering works completed by Firma Projektz Ltd — steel framing and partition installation.",
      caption: "Steel framing & partition installation",
    },
    {
      src: energyControlRoom.url,
      alt: "Utility infrastructure development by Firma Projektz Ltd — control building interior finishing with suspended ceiling grid.",
      caption: "Control building interior fit-out",
    },
    {
      src: energySwitchgear.url,
      alt: "Electrical infrastructure project delivered by Firma Projektz Ltd — Schneider Electric switchgear installation and testing.",
      caption: "Switchgear installation & testing",
    },
    {
      src: energyCommissioning.url,
      alt: "Energy infrastructure project by Firma Projektz Ltd — electrical panel commissioning and system verification in Ghana.",
      caption: "Panel commissioning & system verification",
    },
  ],
};

export const hostelProject: Project = {
  slug: "hostel-works",
  title: "Hostel Construction & Accommodation Development Projects",
  category: "Residential & Institutional Infrastructure",
  location: "Ghana",
  image: hostelRoofing.url,
  client: "Confidential",
  status: "Completed",
  summary:
    "Modern hostel developments built for comfort, functionality and long-term durability — across student, staff and private accommodation.",
  description:
    "Firma Projektz Ltd delivers modern hostel developments that combine architectural quality, structural integrity and long-term value. From student accommodation and staff housing to private residential hostels and multi-storey lodging, our capabilities span earthworks, reinforced concrete structures, masonry, roofing, MEP installations, interior finishing, external works, drainage, landscaping and full project management — with meticulous attention to detail throughout.",
  gallery: [
    {
      src: hostelSetout.url,
      alt: "Hostel construction project by Firma Projektz Ltd in Ghana — site set-out and foundation trenches marked on prepared ground.",
      caption: "Site set-out & foundation trenches",
    },
    {
      src: hostelFoundations.url,
      alt: "Hostel foundation and reinforced concrete substructure works by Firma Projektz Ltd in Ghana.",
      caption: "Reinforced concrete foundation works",
    },
    {
      src: hostelSuperstructure.url,
      alt: "Multi-storey hostel superstructure with concrete columns and blockwork by Firma Projektz Ltd in Ghana.",
      caption: "Superstructure — columns & blockwork",
    },
    {
      src: hostelColumns.url,
      alt: "Hostel construction progress showing reinforced concrete columns and adjacent completed blocks by Firma Projektz Ltd in Ghana.",
      caption: "Column casting & structural progress",
    },
    {
      src: hostelSiteProgress.url,
      alt: "Student accommodation facility construction progress with formwork and material stockpiles by Firma Projektz Ltd in Ghana.",
      caption: "Formwork & site-wide construction progress",
    },
    {
      src: hostelRoofing.url,
      alt: "Modern residential hostel roofing works with timber trusses installed by Firma Projektz Ltd in Ghana.",
      caption: "Roof truss installation",
    },
    {
      src: hostelPic18.url,
      alt: "Hostel construction site with crews installing decorative stone cladding and external finishes by Firma Projektz Ltd in Ghana.",
      caption: "External finishing & stone cladding works",
    },
    {
      src: hostelPic17.url,
      alt: "Aerial view of completed hostel block with red metal roofing by Firma Projektz Ltd in Ghana.",
      caption: "Completed roofing — aerial view",
    },
    {
      src: hostelPic16.url,
      alt: "Hostel courtyard paving preparation with stone-clad columns and completed roofing by Firma Projektz Ltd in Ghana.",
      caption: "Courtyard paving preparation",
    },
    {
      src: hostelPic13.url,
      alt: "Completed stone-clad hostel gatehouse and entrance gate by Firma Projektz Ltd in Ghana.",
      caption: "Stone-clad gatehouse & entrance",
    },
    {
      src: hostelPic14.url,
      alt: "Finished ground-floor hostel walkway with tiled flooring, artificial turf and stone-clad columns by Firma Projektz Ltd in Ghana.",
      caption: "Ground floor walkway — finished",
    },
    {
      src: hostelPic15.url,
      alt: "Completed multi-storey hostel courtyard with tiled walkways, landscaping and stone-clad columns by Firma Projektz Ltd in Ghana.",
      caption: "Completed hostel courtyard",
    },
  ],
};

export const residentialProject: Project = {
  slug: "residential-apartments",
  title: "Residential & Apartment Development Projects",
  category: "Residential Construction & Property Development",
  location: "Ghana",
  image: residentialCover.url,
  client: "Confidential",
  status: "Completed",
  summary:
    "Modern apartment developments blending architectural elegance, structural strength and long-term investment value across Ghana.",
  description:
    "Firma Projektz Ltd delivers residential apartment developments that redefine modern urban living through considered design, engineering rigour and construction quality. From luxury apartments and multi-family complexes to affordable housing and high-rise residences, we manage every phase — site preparation, reinforced concrete structures, masonry, roofing systems, MEP installations, elevators, interior finishing, external works, landscaping, parking and drainage. Every development is designed to maximise comfort, natural light, ventilation, functionality and security while creating communities where residents can genuinely live well.",
  gallery: [
    {
      src: residentialCover.url,
      alt: "Luxury apartment complex constructed by Firma Projektz Ltd in Ghana — completed multi-storey residential development with pool and landscaped grounds.",
      caption: "Completed luxury apartment complex",
    },
    {
      src: residentialSlab.url,
      alt: "Residential apartment development by Firma Projektz Ltd — suspended slab reinforcement and rebar mesh installation in Ghana.",
      caption: "Suspended slab reinforcement",
    },
    {
      src: residentialFraming.url,
      alt: "Modern residential apartments delivered by Firma Projektz Ltd — reinforced concrete formwork and superstructure framing in Ghana.",
      caption: "Formwork & superstructure framing",
    },
    {
      src: residentialFormwork.url,
      alt: "Multi-storey apartment development by Firma Projektz Ltd — reinforced concrete floors and rooftop slab formwork in progress.",
      caption: "Multi-storey concrete construction in progress",
    },
    {
      src: residentialPlaster.url,
      alt: "Residential apartment building by Firma Projektz Ltd in Ghana — external plastering and rooftop reinforcement works.",
      caption: "External plastering & rooftop works",
    },
    {
      src: residentialProgress.url,
      alt: "Residential apartment development completed by Firma Projektz Ltd in Ghana — multi-storey apartment block nearing completion with external works.",
      caption: "Apartment block nearing completion",
    },
    {
      src: residentialFoundations.url,
      alt: "Residential apartment development by Firma Projektz Ltd in Ghana — foundation blockwork and setting-out for multiple housing units.",
      caption: "Foundation blockwork & setting-out",
    },
    {
      src: residentialSubstructure.url,
      alt: "Residential apartment substructure by Firma Projektz Ltd in Ghana — reinforced concrete columns and ground-floor blockwork rising above foundations.",
      caption: "Reinforced columns & substructure works",
    },
    {
      src: residentialWaterproofing.url,
      alt: "Residential apartment foundation waterproofing by Firma Projektz Ltd in Ghana — bitumen-coated substructure walls with column starters ready for backfill.",
      caption: "Substructure waterproofing & column starters",
    },
    {
      src: residentialGroundBeams.url,
      alt: "Residential apartment development by Firma Projektz Ltd in Ghana — completed ground beams and column starters ready for superstructure works.",
      caption: "Ground beams & backfill in progress",
    },
    {
      src: residentialFrontRender.url,
      alt: "Residential apartment development by Firma Projektz Ltd in Ghana — architectural front elevation render of a modern multi-storey apartment block with ground-floor commercial units.",
      caption: "Architectural render — front elevation",
    },
    {
      src: residentialBackRender.url,
      alt: "Residential apartment development by Firma Projektz Ltd in Ghana — rear elevation render showing balconies, louvred screens and landscaped entry court.",
      caption: "Architectural render — rear elevation & entry court",
    },
    {
      src: residentialPoolRender.url,
      alt: "Residential apartment development by Firma Projektz Ltd in Ghana — poolside amenity render with sun loungers, umbrellas and landscaped deck.",
      caption: "Architectural render — poolside amenity deck",
    },
  ],
};

export const officeProject: Project = {
  slug: "office-buildings",
  title: "Office Buildings & Corporate Facility Development Projects",
  category: "Commercial Construction & Corporate Infrastructure",
  location: "Ghana",
  image: officeCompleted.url,
  client: "Confidential",
  status: "Completed",
  summary:
    "Sophisticated office buildings and corporate facilities combining architectural excellence, engineering precision and long-term business value.",
  description:
    "Firma Projektz Ltd delivers office buildings and corporate facilities that combine architectural quality, engineering precision and long-term business value. We build modern workspaces designed to support productivity, innovation and evolving business needs — covering site preparation, reinforced concrete structures, structural steel, curtain wall systems, roofing, MEP and HVAC, elevators, interior fit-outs, premium finishes, parking, landscaping, drainage and complete project management.",
  gallery: [
    {
      src: officeCompleted.url,
      alt: "Corporate office building constructed by Firma Projektz Ltd in Ghana — completed multi-storey commercial facade with premium stone cladding.",
      caption: "Completed corporate office building",
    },
    {
      src: officeColumns.url,
      alt: "Commercial office facility delivered by Firma Projektz Ltd — reinforced concrete column formwork and rebar cages during structural works.",
      caption: "Reinforced concrete column works",
    },
    {
      src: officeSuperstructure.url,
      alt: "Modern office development by Firma Projektz Ltd — multi-storey office superstructure with blockwork and scaffolding in Ghana.",
      caption: "Office superstructure & blockwork progress",
    },
    {
      src: officeFinishing.url,
      alt: "Corporate headquarters construction by Firma Projektz Ltd — office building exterior finishing and site works nearing completion in Ghana.",
      caption: "Exterior finishing & site works",
    },
  ],
};

export const civilProject: Project = {
  slug: "civil-engineering-projects",
  title: "Civil Engineering & Infrastructure Projects",
  category: "Heavy Civil & Infrastructure",
  location: "Ghana",
  image: civilLaterPour.url,
  client: "Confidential",
  status: "Completed",
  summary:
    "Large-scale earthworks, reinforced concrete substructures and heavy civil infrastructure engineered for lasting performance.",
  description:
    "Firma Projektz Ltd delivers civil engineering and heavy infrastructure projects built for durability, safety and long-term performance. Our scope covers bulk earthworks, cut-and-fill operations, reinforced concrete substructures, retaining walls, foundations, culverts, drainage systems, access roads, pavements and complex reinforcement works — executed with disciplined site management, rigorous QA/QC, precision surveying and full coordination of plant, materials and skilled crews across every phase.",
  gallery: [
    {
      src: civilLaterPour.url,
      alt: "Heavy civil concrete pour on a Firma Projektz Ltd infrastructure project in Ghana.",
      caption: "Concrete pour in progress",
    },
    {
      src: civilRebarWall.url,
      alt: "Reinforced concrete retaining wall reinforcement and precision survey set-out by Firma Projektz Ltd on a civil engineering project in Ghana.",
      caption: "Retaining wall rebar & set-out",
    },
    {
      src: civilPumpTruck.url,
      alt: "Concrete pump truck positioned for reinforced foundation pour on a Firma Projektz Ltd civil engineering site in Ghana.",
      caption: "Concrete pump truck positioning",
    },
    {
      src: civilConcretePour.url,
      alt: "Heavy civil concrete pour with pump truck and transit mixer coordinated by Firma Projektz Ltd site crew in Ghana.",
      caption: "Coordinated pump & mixer pour",
    },
    {
      src: civilSlabCuring.url,
      alt: "Completed reinforced concrete slab and ongoing rebar works on a Firma Projektz Ltd civil infrastructure project in Ghana.",
      caption: "Completed slab & continuing rebar works",
    },
    {
      src: civilShotcrete.url,
      alt: "Firma Projektz Ltd crew placing concrete along a reinforced slope stabilisation and retaining structure on a civil engineering project in Ghana.",
      caption: "Slope stabilisation & reinforced concrete placement",
    },
    {
      src: civilRetainingWall.url,
      alt: "Aerial view of a large reinforced concrete retaining wall under construction by Firma Projektz Ltd on a civil infrastructure project in Ghana.",
      caption: "Reinforced retaining wall — formwork & rebar",
    },
    {
      src: civilTrenchRebar.url,
      alt: "Deep trench with rebar cage and concrete pump line prepared for a mass concrete pour on a Firma Projektz Ltd civil engineering site in Ghana.",
      caption: "Deep trench rebar cage & pump line set-up",
    },
    {
      src: civilMixerPour.url,
      alt: "Self-loading concrete mixer discharging into formwork alongside a reinforced retaining wall on a Firma Projektz Ltd civil engineering project in Ghana.",
      caption: "Concrete discharge into retaining wall formwork",
    },
    {
      src: civilFinishedWall.url,
      alt: "Site engineer inspecting a completed reinforced concrete retaining wall on a Firma Projektz Ltd civil infrastructure project in Ghana.",
      caption: "Completed retaining wall under site inspection",
    },
    {
      src: civilPipeline.url,
      alt: "Long pipeline and cable tray installation across a graded civil works site delivered by Firma Projektz Ltd in Ghana.",
      caption: "Pipeline & cable tray installation across graded site",
    },
  ],
};

import industrialPic1 from "@/assets/industrial-picture1.jpg.asset.json";
import industrialPic2 from "@/assets/industrial-picture2.jpg.asset.json";
import industrialPic3 from "@/assets/industrial-picture3.jpg.asset.json";
import industrialPic4 from "@/assets/industrial-picture4.jpg.asset.json";
import industrialPic5 from "@/assets/industrial-picture5.jpg.asset.json";
import industrialPic6 from "@/assets/industrial-picture6.jpg.asset.json";
import industrialPic7 from "@/assets/industrial-picture7.jpg.asset.json";
import industrialPic8 from "@/assets/industrial-picture8.jpg.asset.json";
import industrialPic9 from "@/assets/industrial-picture9.jpg.asset.json";
import industrialPic10 from "@/assets/industrial-picture10.jpg.asset.json";
import industrialPic11 from "@/assets/industrial-11.jpg.asset.json";
import industrialPic12 from "@/assets/industrial-12.jpg.asset.json";

export const industrialProject: Project = {
  slug: "industrial-projects",
  title: "Industrial Facility & Secure Compound Projects",
  category: "Industrial Construction & Infrastructure",
  location: "Ghana",
  image: industrialPic9.url,
  client: "Confidential",
  status: "Completed",
  summary:
    "Fully secured industrial compounds, perimeter fortifications and support facilities engineered for operational resilience and long-term durability.",
  description:
    "Firma Projektz Ltd delivers industrial construction projects designed for uptime, safety and lasting performance. Our teams execute the full lifecycle of industrial developments — from site clearing, setting out and reinforced foundations to structural blockwork, perimeter walls with reinforced concrete columns, gatehouses, guard posts, security fencing, razor-wire crowning, drainage and access works. Every project is coordinated with disciplined site management, rigorous QA/QC and premium workmanship to create secure, functional facilities that protect assets and support demanding industrial operations.",
  gallery: [
    {
      src: industrialPic9.url,
      alt: "Completed industrial compound perimeter wall, gatehouse and security fencing delivered by Firma Projektz Ltd in Ghana.",
      caption: "Completed gatehouse & secure perimeter",
    },
    {
      src: industrialPic5.url,
      alt: "Early-stage industrial site preparation with reinforced concrete column starters by Firma Projektz Ltd in Ghana.",
      caption: "Site preparation & column starters",
    },
    {
      src: industrialPic3.url,
      alt: "Initial blockwork and reinforced column cages rising along an industrial perimeter wall built by Firma Projektz Ltd in Ghana.",
      caption: "Perimeter blockwork begins",
    },
    {
      src: industrialPic1.url,
      alt: "Firma Projektz Ltd construction crew erecting a long reinforced perimeter wall on an industrial project in Ghana.",
      caption: "Perimeter wall construction in progress",
    },
    {
      src: industrialPic2.url,
      alt: "Skilled masons laying concrete blocks on a reinforced industrial perimeter wall under site supervision by Firma Projektz Ltd in Ghana.",
      caption: "Skilled masonry under site supervision",
    },
    {
      src: industrialPic4.url,
      alt: "Firma Projektz Ltd masons installing blockwork between reinforced columns on an industrial compound wall in Ghana.",
      caption: "Blockwork between reinforced columns",
    },
    {
      src: industrialPic6.url,
      alt: "Tall completed section of an industrial perimeter wall constructed by Firma Projektz Ltd in Ghana.",
      caption: "Completed perimeter wall section",
    },
    {
      src: industrialPic8.url,
      alt: "Gatehouse and guard post under construction alongside an industrial perimeter wall by Firma Projektz Ltd in Ghana.",
      caption: "Gatehouse & guard post under construction",
    },
    {
      src: industrialPic7.url,
      alt: "Completed industrial perimeter wall with razor-wire security crowning by Firma Projektz Ltd in Ghana.",
      caption: "Perimeter wall with razor-wire security",
    },
    {
      src: industrialPic10.url,
      alt: "Long completed perimeter wall securing an industrial facility, delivered by Firma Projektz Ltd in Ghana.",
      caption: "Completed industrial perimeter — long view",
    },
    {
      src: industrialPic11.url,
      alt: "Completed industrial perimeter wall with gatehouse and razor-wire security crowning, with site access works in progress by Firma Projektz Ltd in Ghana.",
      caption: "Perimeter, gatehouse and access works",
    },
    {
      src: industrialPic12.url,
      alt: "Reinforced industrial perimeter wall with steel palisade fencing and razor-wire crowning under supervision by Firma Projektz Ltd in Ghana.",
      caption: "Reinforced wall with palisade and razor-wire",
    },
  ],
};

export const projects: Project[] = [
  hospitalProject,
  civilProject,
  academicProject,
  officeProject,
  energyProject,
  industrialProject,
  hostelProject,
  residentialProject,
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Every project is delivered with technical excellence, meticulous workmanship and an unwavering commitment to quality, safety and client satisfaction.",
    name: "Our Commitment",
    role: "Firma Projektz Ltd",
    company: "Total Construction Solutions",
  },
  {
    quote:
      "We build lasting partnerships through transparent communication, dependable service and consistent delivery of high-quality construction.",
    name: "Client Partnership",
    role: "Our Promise",
    company: "Trusted Construction Partner",
  },
  {
    quote:
      "Every successful project strengthens our reputation for quality, reliability and professionalism. Verified client testimonials will be published as they become available.",
    name: "Building Client Trust",
    role: "Our Commitment",
    company: "Firma Projektz Ltd",
  },
];

export const stats = [
  { value: "15+", label: "Years of experience" },
  { value: "120+", label: "Projects delivered" },
  { value: "10+", label: "Regions served" },
  { value: "100%", label: "Safety commitment" },
];
