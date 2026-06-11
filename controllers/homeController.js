const University = require('../models/University');
const Scholarship = require('../models/Scholarship');
const Blog = require('../models/Blog');

exports.home = async (req, res) => {
    try {
        // const featuredUniversities = await University.find({ featured: true }).limit(6);
        // const featuredScholarships = await Scholarship.find({ featured: true }).limit(4);
        // const latestBlogs = await Blog.find().sort('-createdAt').limit(3);
        // const testimonials = [
        //     { name: 'Rahul Sharma', country: 'Canada', message: 'Uni Mitra helped me get admission to University of Toronto!', rating: 5 },
        //     { name: 'Priya Patel', country: 'UK', message: 'Excellent visa guidance. Highly recommended!', rating: 5 },
        //     { name: 'Amit Kumar', country: 'Australia', message: 'Professional team, got my scholarship easily.', rating: 5 }
        // ];
        
        res.render('home', {
            title: 'UNI MITRA OVERSEAS | Study Abroad Consultants',
            // featuredUniversities,
            // featuredScholarships,
            // latestBlogs,
            // testimonials
        });
    } catch (error) {
        console.error(error);
        // res.status(500).render('error', { title: 'Error', message: 'Server Error' });
    }
};

exports.about = (req, res) => {
    res.render('about', {
        title: 'About Us | UNI MITRA OVERSEAS',
        stats: { studentsPlaced: 5000, universitiesPartnered: 200, scholarshipsAwarded: 1000, yearsExperience: 8 }
    });
};

// exports.destinations = (req, res) => {
//     const destinations = [
//         { name: 'United Kingdom', flag: 'uk', overview: 'World-class education, rich history, and vibrant culture', topUniversities: ['Oxford', 'Cambridge', 'Imperial College'], popularCourses: ['Business', 'Engineering', 'Medicine'], tuitionFees: '£10,000 - £38,000/year', workOpportunities: 'Post-study work visa up to 2 years', prOpportunities: 'Skilled Worker visa leading to PR', intakes: 'September, January' },
//         { name: 'Ireland', flag: 'ireland', overview: 'Tech hub of Europe, friendly environment', topUniversities: ['Trinity College Dublin', 'UCD', 'NUIG'], popularCourses: ['Computer Science', 'Pharma', 'Data Science'], tuitionFees: '€9,000 - €25,000/year', workOpportunities: 'Stay-back up to 2 years', prOpportunities: 'Critical Skills visa leading to PR', intakes: 'September, January' },
//         { name: 'Canada', flag: 'canada', overview: 'High quality of life, immigration friendly', topUniversities: ['Toronto', 'UBC', 'McGill'], popularCourses: ['IT', 'Healthcare', 'Business Analytics'], tuitionFees: 'CAD 15,000 - CAD 35,000/year', workOpportunities: 'PGWP up to 3 years', prOpportunities: 'Express Entry & PNP pathways', intakes: 'September, January, May' },
//         { name: 'Australia', flag: 'australia', overview: 'Excellent education system, sunny weather', topUniversities: ['ANU', 'Melbourne', 'Sydney'], popularCourses: ['Nursing', 'Engineering', 'Accounting'], tuitionFees: 'AUD 20,000 - AUD 45,000/year', workOpportunities: 'Post-study work up to 4 years', prOpportunities: 'Skilled Occupation list PR', intakes: 'February, July' }
//     ];
//     res.render('destinations', { title: 'Study Destinations | UNI MITRA OVERSEAS', destinations });
// };

exports.services = (req, res) => {
    const services = [
        { title: 'Admission Guidance', icon: 'graduation-cap', description: 'Expert guidance for university selection and admission process' },
        { title: 'Visa Assistance', icon: 'passport', description: 'Complete visa documentation and interview preparation' },
        { title: 'Scholarship Support', icon: 'trophy', description: 'Find and apply for scholarships up to 100% tuition' },
        { title: 'Education Loan Support', icon: 'bank', description: 'Assistance with education loans from top banks' },
        { title: 'Accommodation Assistance', icon: 'home', description: 'Help finding safe and affordable accommodation' },
        { title: 'SOP & LOR Guidance', icon: 'file-alt', description: 'Professional SOP and LOR writing assistance' },
        { title: 'Application Processing', icon: 'clipboard-list', description: 'End-to-end application processing support' },
        { title: 'Pre-Departure Support', icon: 'plane', description: 'Orientation and pre-departure briefing sessions' }
    ];
    res.render('services', { title: 'Our Services | UNI MITRA OVERSEAS', services });
};

exports.contact = (req, res) => {
    res.render('contact', { title: 'Contact Us | UNI MITRA OVERSEAS' });
};

// exports.applicationForm = (req, res) => {
//     res.render('application', { title: 'Online Application | UNI MITRA OVERSEAS' });
// };



// Inside homeController.js (add this method)
exports.visaPage = (req, res) => {
    res.render('visa', {
        title: 'Visa Information Guide | UNI MITRA OVERSEAS'
    });
};

// Add this method to homeController.js
exports.coachingPage = (req, res) => {
    res.render('coaching', {
        title: 'IELTS & Exam Coaching | UNI MITRA OVERSEAS'
    });
};

// Inside homeController.js – add this method

exports.studyInPage = (req, res) => {
    const country = req.query.country || 'uk'; // default to UK
    const countryData = {
        uk: {
            name: 'United Kingdom',
            flagUrl: 'https://flagcdn.com/w320/gb.png',
            imageUrl: 'https://placehold.co/600x400/0d42ff/white?text=UK',
            overview: 'The UK is home to world-renowned universities like Oxford, Cambridge, and Imperial College. It offers a rich cultural heritage, shorter course durations, and post-study work opportunities.',
            topUniversities: ['University of Oxford', 'University of Cambridge', 'Imperial College London', 'UCL', 'University of Edinburgh'],
            intakes: ['September', 'January', 'May (limited)'],
            fees: '£10,000 – £38,000 per year',
            workRights: '20 hours/week during term, full-time holidays',
            prPathway: 'Skilled Worker visa → ILR after 5 years',
            admissionSteps: [
                { title: 'Choose Course & University', description: 'Research and shortlist programs based on your profile.' },
                { title: 'Prepare Documents', description: 'Academic transcripts, IELTS/PTE, SOP, LORs.' },
                { title: 'Submit Application', description: 'Apply via UCAS or university portal.' },
                { title: 'Receive Offer & Apply for Visa', description: 'Accept offer, pay deposit, apply for Student Visa.' }
            ]
        },
        us: {
            name: 'United States',
            flagUrl: 'https://flagcdn.com/w320/us.png',
            imageUrl: 'https://placehold.co/600x400/0d42ff/white?text=USA',
            overview: 'The USA has the largest international student population. With over 4,000 accredited institutions, it offers unparalleled flexibility and opportunities for research and career growth.',
            topUniversities: ['MIT', 'Stanford', 'Harvard', 'Caltech', 'University of Chicago'],
            intakes: ['Fall (August/September)', 'Spring (January)', 'Summer (May)'],
            fees: '$20,000 – $60,000 per year',
            workRights: 'On-campus up to 20 hours/week; CPT/OPT for internships',
            prPathway: 'H1-B → Green Card (long process)',
            admissionSteps: [
                { title: 'Shortlist Universities', description: 'Consider rankings, location, and costs.' },
                { title: 'Take Standardized Tests', description: 'SAT/ACT (undergrad), GRE/GMAT (grad), TOEFL/IELTS.' },
                { title: 'Submit Applications', description: 'Via Common App or university portals.' },
                { title: 'Apply for F1 Visa', description: 'After receiving I-20.' }
            ]
        },
        australia: {
            name: 'Australia',
            flagUrl: 'https://flagcdn.com/w320/au.png',
            imageUrl: 'https://placehold.co/600x400/0d42ff/white?text=Australia',
            overview: 'Australia offers a high standard of living, excellent universities, and post-study work visas. It is a popular destination for students seeking quality education and immigration pathways.',
            topUniversities: ['Australian National University', 'University of Melbourne', 'University of Sydney', 'UNSW Sydney', 'University of Queensland'],
            intakes: ['February', 'July', 'November (limited)'],
            fees: 'AUD 20,000 – AUD 45,000 per year',
            workRights: '48 hours/fortnight during term, full-time holidays',
            prPathway: 'Temporary Graduate visa → Skilled visa → PR',
            admissionSteps: [
                { title: 'Choose Course', description: 'Check CRICOS registration for international students.' },
                { title: 'Meet English & Academic Requirements', description: 'IELTS/PTE, transcripts.' },
                { title: 'Apply via University or Agent', description: 'Receive Offer Letter.' },
                { title: 'Apply for Student Visa (subclass 500)', description: 'Provide genuine temporary entrant (GTE) statement.' }
            ]
        },
        ireland: {
            name: 'Ireland',
            flagUrl: 'https://flagcdn.com/w320/ie.png',
            imageUrl: 'https://placehold.co/600x400/0d42ff/white?text=Ireland',
            overview: 'Ireland is known as the "Silicon Valley of Europe". It offers a vibrant culture, friendly people, and excellent post-study work opportunities.',
            topUniversities: ['Trinity College Dublin', 'University College Dublin', 'University of Galway', 'University College Cork', 'Dublin City University'],
            intakes: ['September', 'January'],
            fees: '€9,000 – €25,000 per year',
            workRights: '20 hours/week during term, full-time holidays',
            prPathway: 'Third Level Graduate Scheme → Critical Skills Employment Permit → Stamp 4',
            admissionSteps: [
                { title: 'Select Program', description: 'Use CAO or direct application.' },
                { title: 'Prepare Documents', description: 'Transcripts, English test (IELTS 6.0+).' },
                { title: 'Receive Offer', description: 'Accept and pay deposit.' },
                { title: 'Apply for Long Stay D Visa', description: 'Show proof of funds (€7,000 + fees).' }
            ]
        },
        france: {
            name: 'France',
            flagUrl: 'https://flagcdn.com/w320/fr.png',
            imageUrl: 'https://placehold.co/600x400/0d42ff/white?text=France',
            overview: 'France offers world-class education, affordable tuition, and a rich cultural experience. Many programs are taught in English.',
            topUniversities: ['Sorbonne University', 'École Polytechnique', 'HEC Paris', 'Sciences Po', 'University of Paris'],
            intakes: ['September', 'January'],
            fees: '€2,770 – €3,770 per year (public universities)',
            workRights: '964 hours/year (approx 20 hours/week)',
            prPathway: 'After 5 years of residency, can apply for PR (carte de résident)',
            admissionSteps: [
                { title: 'Find a Program', description: 'Use Campus France platform.' },
                { title: 'Apply', description: 'Directly to university or via Études en France.' },
                { title: 'Receive Acceptance', description: 'Obtain visa letter.' },
                { title: 'Apply for Long-Stay Visa', description: 'VLS-TS for students.' }
            ]
        },
        canada: {
            name: 'Canada',
            flagUrl: 'https://flagcdn.com/w320/ca.png',
            imageUrl: 'https://placehold.co/600x400/0d42ff/white?text=Canada',
            overview: 'Canada is known for its high quality of life, multicultural society, and friendly immigration policies. It is a top choice for students seeking PR.',
            topUniversities: ['University of Toronto', 'UBC', 'McGill University', 'University of Alberta', 'University of Waterloo'],
            intakes: ['September', 'January', 'May'],
            fees: 'CAD 15,000 – CAD 35,000 per year',
            workRights: '20 hours/week off-campus, full-time breaks',
            prPathway: 'PGWP → Express Entry / PNP',
            admissionSteps: [
                { title: 'Research Programs', description: 'Check DLI list.' },
                { title: 'Meet Requirements', description: 'IELTS 6.0+, transcripts.' },
                { title: 'Apply', description: 'Directly or through OUAC (Ontario).' },
                { title: 'Apply for Study Permit', description: 'With proof of funds (CAD 20,635+).' }
            ]
        },
        germany: {
            name: 'Germany',
            flagUrl: 'https://flagcdn.com/w320/de.png',
            imageUrl: 'https://placehold.co/600x400/0d42ff/white?text=Germany',
            overview: 'Germany offers tuition-free education at public universities (except in Baden-Württemberg). It is a hub for engineering and technology.',
            topUniversities: ['Technical University of Munich', 'LMU Munich', 'Heidelberg University', 'RWTH Aachen', 'Humboldt University'],
            intakes: ['Winter (October)', 'Summer (April)'],
            fees: '€0 – €3,000 per year (public universities)',
            workRights: '120 full days or 240 half days per year',
            prPathway: '18 months job-seeking visa → Blue Card → PR (21-33 months)',
            admissionSteps: [
                { title: 'Find a Course', description: 'Use DAAD database.' },
                { title: 'Check Requirements', description: 'APS certificate (for some countries), German language (if required).' },
                { title: 'Apply via Uni-Assist or Direct', description: 'Submit documents.' },
                { title: 'Apply for Student Visa', description: 'Blocked account (€11,904).' }
            ]
        }
    };

    const selected = countryData[country] || countryData.uk;
    res.render('study-in', {
        title: `Study in ${selected.name} | UNI MITRA OVERSEAS`,
        countryName: selected.name,
        flagUrl: selected.flagUrl,
        imageUrl: selected.imageUrl,
        overview: selected.overview,
        topUniversities: selected.topUniversities,
        intakes: selected.intakes,
        fees: selected.fees,
        workRights: selected.workRights,
        prPathway: selected.prPathway,
        admissionSteps: selected.admissionSteps
    });
};