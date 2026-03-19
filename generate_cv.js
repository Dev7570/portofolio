import fs from 'fs';
import PDFDocument from 'pdfkit';

const doc = new PDFDocument({ margin: 50 });
doc.pipe(fs.createWriteStream('public/assets/Dev_Gupta_CV.pdf'));

const primaryColor = '#2557D6';
const textColor = '#333333';

// Header Background
doc.rect(0, 40, doc.page.width, 70).fill(primaryColor);

// Header Text
doc.fillColor('white')
   .font('Helvetica-Bold')
   .fontSize(28)
   .text('DEV GUPTA', 50, 50);

doc.fontSize(14)
   .font('Helvetica')
   .text('Full Stack Web Developer', 50, 85);

// Contact Info
doc.fillColor('#000000')
   .fontSize(10)
   .text('devggre@gmail.com', 50, 125)
   .text('github.com/Dev7570', 200, 125)
   .text('instagram: devv..', 350, 125)
   .text('dev7570.github.io/portofolio', 450, 125);

doc.moveTo(50, 140).lineTo(doc.page.width - 50, 140).strokeColor('#cccccc').lineWidth(1).stroke();

let y = 160;

function addSectionTitle(title) {
    doc.fillColor(primaryColor)
       .font('Helvetica-Bold')
       .fontSize(14)
       .text(title, 50, y);
    y += 18;
    doc.moveTo(50, y).lineTo(doc.page.width - 50, y).strokeColor(primaryColor).lineWidth(1.5).stroke();
    y += 10;
}

// About Me
addSectionTitle('About Me');
doc.fillColor(textColor)
   .font('Helvetica')
   .fontSize(11)
   .text('I am a passionate Full Stack Web Developer with hands-on experience in building web, desktop, and IoT-based applications. I specialize in Python, React JS, and modern web technologies. I enjoy crafting user-friendly, high-performance digital solutions and continuously explore AI and Machine Learning technologies.', 50, y, {
       width: 500,
       align: 'justify'
   });
y += 60;

// Experience
addSectionTitle('Experience');
doc.font('Helvetica-Bold')
   .fontSize(12)
   .fillColor('#000')
   .text('Web Developer & Software Engineer', 50, y);
doc.font('Helvetica-Oblique').text('2022 - Present', 450, y);
y += 15;
doc.fontSize(11).font('Helvetica-Oblique').text('Freelance', 50, y);
y += 15;
doc.font('Helvetica').fontSize(10).fillColor(textColor)
   .text('• Develop web, desktop, and IoT-based applications using Python, React JS, and modern frameworks.', 60, y)
   .text('• Build efficient systems and deliver user-friendly solutions tailored to client needs.', 60, y + 15)
   .text('• Integrate AI and Machine Learning into projects for smart, data-driven features.', 60, y + 30);
y += 55;

// Projects
addSectionTitle('Projects');

function addProject(title, link, bullets) {
    doc.font('Helvetica-Bold').fontSize(12).fillColor('#000').text(title, 50, y);
    y += 15;
    doc.font('Helvetica-Oblique').fontSize(10).fillColor(primaryColor).text(link, 50, y);
    y += 12;
    doc.font('Helvetica').fillColor(textColor);
    bullets.forEach((b) => {
        doc.text(`• ${b}`, 60, y, { width: 480 });
        y += doc.heightOfString(`• ${b}`, { width: 480 }) + 2;
    });
    y += 10;
}

addProject('Grocery Management System', 'github.com/Dev7570/grocery-management-', [
    'Desktop app built with Python and Tkinter for managing grocery store inventory, pricing, and transactions.',
    'Features include stock management, low-stock alerts, profit/margin calculations, and Excel export.'
]);

addProject('HealthConnect', 'github.com/Dev7570/healthconnect', [
    'Healthcare aggregator platform to find hospitals, book doctor appointments, and compare diagnostic test prices.',
    'Features Google Maps integration, patient reviews, real-time availability, and a 3-step booking system.'
]);

addProject('ShieldBoot', 'github.com/Dev7570/shieldboot', [
    'Bootable USB antivirus tool powered by ClamAV engine running Alpine Linux to scan and remove viruses offline.',
    'Supports BIOS and UEFI, works without installation, includes Python Tkinter GUI and PowerShell setup wizard.'
]);

// Skills
addSectionTitle('Skills');
doc.font('Helvetica').fontSize(10).fillColor(textColor);
const skills = [
    ['• Python', '• React JS', '• Next JS', '• Tailwind CSS'],
    ['• Node JS', '• MySQL', '• IoT Development', '• Machine Learning & AI'],
    ['• UI/UX Design', '• Web Development', '• Software Engineering', '• Git & GitHub']
];
skills.forEach(row => {
    doc.text(row[0], 50, y);
    doc.text(row[1], 180, y);
    doc.text(row[2], 310, y);
    if(row[3]) doc.text(row[3], 440, y);
    y += 18;
});
y += 10;

// Languages
addSectionTitle('Languages');
doc.font('Helvetica').fontSize(11).fillColor(textColor).text('English  |  Hindi', 50, y);

doc.end();
console.log('PDF generated successfully!');
