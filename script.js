// Photographer object
const photographer = {
    name: "Brynn Behind The Lens",
    specialty: "Portrait Photography",
    location: "Texas",

    // Object method
    getInfo: function() {
        return `${this.name} specializes in ${this.specialty}.`;
    }
};

// Display photographer information
document.getElementById("photographer-name").textContent =
    "Photographer: " + photographer.name;

document.getElementById("specialty").textContent =
    "Specialty: " + photographer.specialty;

document.getElementById("location").textContent =
    "Location: " + photographer.location;

// Photography sessions array
const sessions = [
    "Senior Portraits",
    "Couples",
    "Maternity",
    "Branding",
    "Family"
];

// Find a session using an array method
const featuredSession = sessions.indexOf("Senior Portraits");

// Display the featured session
document.getElementById("featured-session").textContent =
    "Today's featured session: " + sessions[featuredSession];

// Log information to the console
console.log(photographer.getInfo());
console.log(sessions);
console.log(sessions[featuredSession]);