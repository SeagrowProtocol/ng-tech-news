// Chatbot Toggle
function toggleChat() {
    const chat = document.getElementById('chat-window');
    chat.classList.toggle('hidden');
}

// Simple Logic for the Bot
const botResponses = {
    "vip": "Good day. Our VIP service is ₦1,000 per month. You get early alerts at 7am daily. Shall I open the VIP page?",
    "cv": "Eighty per cent of our clients get interviews within two weeks. Our CV service starts at ₦3,000. Would you like to see the packages?",
    "default": "I am here to help. You can also reach our human support on WhatsApp at +2349125651147."
};

// Save Job to localStorage (No Login Required)
function saveJob(jobId, jobTitle) {
    let saved = JSON.parse(localStorage.getItem('savedJobs')) || [];
    if (!saved.some(job => job.id === jobId)) {
        saved.push({ id: jobId, title: jobTitle, date: new Date().toLocaleDateString() });
        localStorage.setItem('savedJobs', JSON.stringify(saved));
        alert('Job saved to your dashboard!');
    }
}

// Payment Redirect Logic
function generateWhatsAppPayment(service, price) {
    const name = document.getElementById('user-name').value;
    const email = document.getElementById('user-email').value;
    const message = `Hello Remoteng, I want to pay for ${service}. \nName: ${name} \nEmail: ${email} \nPrice: ${price}`;
    const url = `https://wa.me/2349125651147?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}
