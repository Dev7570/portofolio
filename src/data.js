import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/ai.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";
import Tools12 from "/assets/tools/kotlin.png";
import Tools13 from "/assets/tools/firebase.png";
import Tools14 from "/assets/tools/html.png";
import Tools15 from "/assets/tools/css.png";
import Tools16 from "/assets/tools/ts.png";
import Tools17 from "/assets/tools/php.png";
import Tools18 from "/assets/tools/vite.png";
import Tools19 from "/assets/tools/mysql.png";


export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Next JS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Adobe Illustrator",
    ket: "Design App",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "Kotlin",
    ket: "Language",
    dad: "1200",
  },
  {
    id: 13,
    gambar: Tools13,
    nama: "Firebase",
    ket: "Framework",
    dad: "1300",
  },
  {
    id: 14,
    gambar: Tools14,
    nama: "HTML",
    ket: "Language",
    dad: "1400",
  },
  {
    id: 15,
    gambar: Tools15,
    nama: "CSS",
    ket: "Language",
    dad: "1500",
  },
  {
    id: 16,
    gambar: Tools16,
    nama: "TypeScript",
    ket: "Language",
    dad: "1600",
  },
  {
    id: 17,
    gambar: Tools17,
    nama: "PHP",
    ket: "Language",
    dad: "1700",
  },
  {
    id: 18,
    gambar: Tools18,
    nama: "Vite",
    ket: "Framework",
    dad: "1800",
  },
  {
    id: 19,
    gambar: Tools19,
    nama: "MySql",
    ket: "Framework",
    dad: "1900",
  },
];

import Proyek1 from "/assets/proyek/proyek1.jpg";
import Proyek2 from "/assets/proyek/proyek2.jpg";
import Proyek3 from "/assets/proyek/proyek3.jpg";

export const listProyek = [
  {
    id: 1,
    image: Proyek1,
    title: "Grocery Management System",
    subtitle: "Grocery Management System (Tkinter Project)",
    fullDescription: "The Grocery Management System is a desktop-based application developed using Python and Tkinter to efficiently manage grocery store operations. It provides an intuitive graphical user interface (GUI) that helps users handle inventory, pricing, and transaction history in an organized way. The system allows users to manage inventory by adding, updating, deleting, and monitoring stock levels with low-stock alerts, handle pricing with cost price, selling price, profit, and margin calculations, track history by recording all activities like adding, updating, and deleting items, view a dashboard displaying key insights such as total items, low stock, and category-wise distribution, and export inventory, pricing, and history data to Excel files.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
     url: "https://github.com/Dev7570",
    dad: "100",
  },
  {
    id: 2,
    image: Proyek2,
    title: "HealthConnect",
    subtitle: "A healthcare aggregator platform to find hospitals, book appointments & compare test prices.",
    fullDescription: "HealthConnect is a comprehensive digital healthcare platform designed to bridge the gap between patients and hospitals in their local area. The platform lists all major hospitals in a city along with detailed information including specialities offered, number of beds, timings, and whether the hospital is currently open. Patients can search and filter hospitals by speciality, sort them by ratings or number of reviews, and read genuine patient feedback before making a decision. The Test Price Comparison tool allows users to select any diagnostic test and instantly compare its price across all listed hospitals. The Doctor Booking System lets patients view available doctors, check their speciality, experience, consultation fee, and availability, and book an appointment in just 3 simple steps. The platform also features an integrated Map View powered by Google Maps, allowing patients to visually locate hospitals and get directions. HealthConnect is built with a vision to make quality healthcare accessible, transparent, and affordable for every citizen.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/Dev7570/healthconnect",
    dad: "200",
  },
  {
    id: 3,
    image: Proyek3,
    title: "ShieldBoot",
    subtitle: "A bootable USB antivirus tool that scans and removes viruses — even when the OS is infected.",
    fullDescription: "ShieldBoot is an open-source, portable antivirus scanner built to run from a bootable USB pendrive. Unlike regular antivirus software that runs inside Windows, ShieldBoot boots its own lightweight Linux operating system (Alpine Linux) directly from the USB — completely bypassing the infected OS. This means it can detect and remove viruses, trojans, ransomware, rootkits, keyloggers, and spyware that hide from Windows-based scanners. The tool is powered by the ClamAV engine with over 4 million virus signatures. Once inserted into any PC and booted, ShieldBoot automatically mounts the target drive, scans every file, quarantines threats, and saves a full report back to the USB drive. ShieldBoot comes with a professional dark-themed GUI built in Python (tkinter), a PowerShell GUI for Windows setup, and Bash scripts for Linux. It supports both BIOS and UEFI computers and requires no installation on the target machine. Virus definitions are stored directly on the USB for fully offline scanning — making it ideal for air-gapped or heavily infected systems.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/Dev7570/shieldboot",
    dad: "300",
  },
];
