// Embedded translations
const translations = {
    en: {
        welcomeTitle: "Welcome to Altegra Consulting AB",
        welcomeText: "Empowering Your PLM Solutions",
        servicesTitle: "Our Services",
        servicesContent: [
            "Specification, customization, and implementation of PLM solutions.",
            "Integration and communication with adjacent systems.",
            "Data migration from various PLM systems or other sources.",
            "Expert handling of system upgrades and enhancements.",
            "Management and support for installed PLM solutions.",
            "Expert guidance to optimize workflows and strategies tailored to your business goals."
        ],
        plmHeading: "Specialists in PLM Solutions",
        plmDescription:
            "Altegra Consulting are specialists in the PLM (Product Lifecycle Management) area. Together with customers, we carry out:",        
        plmCTA: "How can we help you?",
        contactUs: "Contact Us",
		plmParagraph: "Specification, customization, and implementation of PLM systems; seamless integration with adjacent platforms like CAD/CAE environments; efficient migration of data between PLM systems; system upgrades to maintain technological relevance; and expert management of installed solutions. Let us empower your business with innovative and future-ready PLM strategies."

    },
    sv: {
        welcomeTitle: "Välkommen till Altegra Consulting AB",
        welcomeText: "Stärker dina PLM-lösningar",
        servicesTitle: "Våra Tjänster",
        servicesContent: [
            "Specifikation, anpassning och implementering av PLM-lösningar.",
            "Integration och kommunikation med angränsande system.",
            "Migrering av data från olika PLM-system eller andra källor.",
            "Experthantering av systemuppgraderingar och förbättringar.",
            "Förvaltning och support för installerade PLM-lösningar.",
            "Expertrådgivning för att optimera arbetsflöden och strategier anpassade efter dina affärsmål."
        ],
        plmHeading: "Specialister inom PLM-lösningar",
        plmDescription:
            "Altegra Consulting är specialister inom PLM (Product Lifecycle Management). Tillsammans med kunder genomför vi:",       
        plmCTA: "Hur kan vi hjälpa dig?",
        contactUs: "Kontakta Oss",
		plmParagraph: "Specifikation, anpassning och implementering av PLM-system; sömlös integration med angränsande plattformar som CAD/CAE-miljöer; effektiv migrering av data mellan PLM-system; systemuppgraderingar för att bibehålla teknologisk relevans; och experthantering av installerade lösningar. Låt oss stärka ditt företag med innovativa och framtidssäkra PLM-strategier."

    }
};

const languageToggle = document.getElementById("languageToggle");

const updateContent = (lang) => {
    if (!translations[lang]) {
        console.error(`Translation for ${lang} not found.`);
        return;
    }

    // Update header
    document.querySelector("#welcome-title").innerText = translations[lang].welcomeTitle;
    document.querySelector("#welcome-text").innerText = translations[lang].welcomeText;

    // Update services section title
    document.querySelector("#services-title").innerText = translations[lang].servicesTitle;

    // Update expertise cards dynamically
    const expertiseCards = document.querySelectorAll(".expertise-card");
    translations[lang].servicesContent.forEach((content, index) => {
        if (expertiseCards[index]) {
            expertiseCards[index].querySelector("p").innerText = content;
        }
    });

    // Update PLM section dynamically
    const plmHeading = document.querySelector("#plm-services h2");
    const plmDescription = document.querySelector("#plm-services p");
    const plmCTA = document.querySelector("#plm-services p.lead:last-of-type");
	// Update paragraph in the PLM section
	const plmParagraph = document.querySelector("#plm-services p:not(.lead)");
	
	if (plmParagraph) plmParagraph.innerText = translations[lang].plmParagraph;
    if (plmHeading) plmHeading.innerText = translations[lang].plmHeading;
    if (plmDescription) plmDescription.innerText = translations[lang].plmDescription;
    
    if (plmCTA) plmCTA.innerText = translations[lang].plmCTA;

    // Update contact section title
    const contactHeading = document.querySelector("#contact h2");
    if (contactHeading) {
        contactHeading.innerText = translations[lang].contactUs;
    }
};

// Initialize with English as default language
updateContent("en");

// Add event listener for dropdown changes
languageToggle.addEventListener("change", (event) => {
    const selectedLang = event.target.value;
    updateContent(selectedLang);
});

document.addEventListener("DOMContentLoaded", () => {
    const plmImage = document.getElementById("plm-image");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                plmImage.classList.add("visible");
            }
        });
    });

    observer.observe(plmImage);
});
