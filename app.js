const questions = [
    // Original Core Questions
    { id: 'creation', text: "Did you develop the GPAI model?", desc: "Includes training the base model or having it developed specifically for your brand.", yes: 'provider', no: 'deployer' },
    { id: 'market', text: "Is it offered under your name/trademark?", desc: "Are you placing the model on the market as your own product or service?", yes: 'provider', no: 'deployer' },
    { id: 'modification', text: "Did you substantially modify the model?", desc: "Significant fine-tuning that changes its performance.", yes: 'provider', no: 'deployer' },
    // New Detailed Questions (21-40)
    { id: 'q21', text: "Do you provide a RAG layer using proprietary data?", desc: "Feeding data into a 3rd-party model without altering its weights.", yes: 'deployer', no: 'provider' },
    { id: 'q22', text: "Have you fine-tuned a model with massive datasets?", desc: "Significantly altering its original capabilities.", yes: 'provider', no: 'deployer' },
    { id: 'q23', text: "Are employees using 'Shadow AI' without formal oversight?", desc: "Using public tools like ChatGPT without company authority.", yes: 'shadow', no: 'deployer' },
    { id: 'q24', text: "Is the AI a safety component in a product you manufacture?", desc: "E.g., robotics or safety-critical hardware.", yes: 'provider', no: 'deployer' },
    { id: 'q25', text: "Do you use AI to monitor employee performance/promotions?", desc: "Common in retail or large-scale operations.", yes: 'deployer', no: 'provider' },
    { id: 'q26', text: "Are you an EU entity placing non-EU AI on the market?", desc: "Using the non-EU company's trademark.", yes: 'importer', no: 'mixed' },
    { id: 'q27', text: "Have you changed a low-risk chatbot's purpose to medical/legal?", desc: "Redefining the 'Intended Purpose' of the system.", yes: 'provider', no: 'deployer' },
    { id: 'q28', text: "Is your role limited to setting 'operational parameters'?", desc: "E.g., setting thresholds for fraud scores.", yes: 'deployer', no: 'provider' },
    { id: 'q29', text: "Did you develop a 'Systemic Risk' model (>10^25 FLOPs)?", desc: "Determines high-level systemic obligations.", yes: 'systemic', no: 'deployer' },
    { id: 'q30', text: "Are you using AI for Real-time Biometric Identification?", desc: "In physical store locations or public spaces.", yes: 'deployer', no: 'provider' },
    { id: 'q31', text: "Have you formally assigned human oversight to competent personnel?", desc: "Personnel who can interpret and override outputs.", yes: 'deployer', no: 'provider' },
    { id: 'q32', text: "Are you responsible for the 'CE Marking' on the product?", desc: "Physical attachment to product or documentation.", yes: 'provider', no: 'deployer' },
    { id: 'q33', text: "Do you only control logs/usage data (not source code)?", desc: "No access to the model's technical internals.", yes: 'deployer', no: 'provider' },
    { id: 'q34', text: "Are you 'white-labeling' an AI solution for B2B partners?", desc: "Offering it as your own service to partners.", yes: 'provider', no: 'deployer' },
    { id: 'q35', text: "Is the AI used for a 'Narrow Procedural Task'?", desc: "Tasks that don't influence high-risk decisions (e.g., spellcheck).", yes: 'deployer', no: 'provider' },
    { id: 'q36', text: "Are you an EU subsidiary acting as a liaison for a foreign parent?", desc: "Acting as the Authorized Representative.", yes: 'auth_rep', no: 'deployer' },
    { id: 'q37', text: "Do you provide technical Model Cards and Data Summaries?", desc: "Sharing documentation with downstream users.", yes: 'provider', no: 'deployer' },
    { id: 'q38', text: "Must you inform unions before deploying high-risk AI?", desc: "Common requirement for employers.", yes: 'deployer', no: 'provider' },
    { id: 'q39', text: "Is your name the only one appearing on the Terms of Service?", desc: "The user-facing legal agreement holder.", yes: 'provider', no: 'deployer' },
    { id: 'q40', text: "Do you maintain logs for at least six months?", desc: "Ensuring traceability of AI operations.", yes: 'deployer', no: 'provider' }
];

let currentQuestionIndex = 0;
let answers = {};

// UI Elements
const welcomeScreen = document.getElementById('welcome-screen');
const assessmentWell = document.getElementById('assessment-well');
const resultScreen = document.getElementById('result-screen');
const questionText = document.getElementById('question-text');
const questionDesc = document.getElementById('question-desc');
const progressBar = document.getElementById('progress-bar');
const roleTitle = document.getElementById('role-title');
const resultDetails = document.getElementById('result-details');

// Event Listeners
document.getElementById('start-btn').addEventListener('click', startAssessment);
document.getElementById('restart-btn').addEventListener('click', () => location.reload());
document.querySelectorAll('.choice-btn').forEach(btn => {
    btn.addEventListener('click', (e) => handleAnswer(e.target.dataset.answer === 'yes'));
});
document.getElementById('copy-btn').addEventListener('click', copyResults);

function startAssessment() {
    welcomeScreen.classList.add('hidden');
    assessmentWell.classList.remove('hidden');
    showQuestion();
}

function showQuestion() {
    const q = questions[currentQuestionIndex];
    questionText.innerText = q.text;
    questionDesc.innerText = q.desc;

    // Update Progress
    const progress = (currentQuestionIndex / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
}

function handleAnswer(answer) {
    const q = questions[currentQuestionIndex];
    answers[q.id] = answer;

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        calculateResults();
    }
}

function calculateResults() {
    assessmentWell.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    progressBar.style.width = `100%`;

    let providerCount = 0;
    let deployerCount = 0;
    let specialRoles = new Set();
    let isSystemic = false;

    questions.forEach(q => {
        const ans = answers[q.id];
        const resultLabel = ans ? q.yes : q.no;

        if (resultLabel === 'provider') providerCount++;
        else if (resultLabel === 'deployer') deployerCount++;
        else if (resultLabel === 'systemic' && ans) { providerCount++; isSystemic = true; }
        else if (resultLabel === 'importer' && ans) specialRoles.add('Importer');
        else if (resultLabel === 'auth_rep' && ans) specialRoles.add('Authorized Representative');
        else if (resultLabel === 'shadow' && ans) specialRoles.add('Shadow AI User');
    });

    let role = "Undefined";
    let obligations = [];

    // Final Role Decision
    if (providerCount >= deployerCount && providerCount > 0) {
        role = isSystemic ? "GPAI Provider (Systemic Risk)" : "GPAI Provider";
        if (specialRoles.has('Importer')) role += " / Importer";
    } else if (deployerCount > 0) {
        role = "GPAI Deployer";
    }

    if (specialRoles.has('Shadow AI User')) {
        role = "At Risk / Shadow AI (Not Formal Deployer)";
        obligations.push({ title: "Compliance Risk", desc: "Your 'Shadow AI' usage may bypass corporate governance and security protocols." });
    }

    if (role.includes("Provider")) {
        obligations.push(
            { title: "Technical Documentation", desc: "Strict requirements for maintaining documentation for downstream users and authorities." },
            { title: "Quality Management", desc: "Establish a system to ensure compliance and post-market monitoring." },
            { title: "Transparency", desc: "Provide instructions and summaries of training data as per EU standards." }
        );
        if (isSystemic) obligations.push({ title: "Systemic Risk Monitoring", desc: "Must conduct model evaluations and report large-scale incidents to the AI Office." });
    } else if (role.includes("Deployer")) {
        obligations.push(
            { title: "Human Oversight", desc: "Ensure competent personnel monitor the AI's impact and can override it if needed." },
            { title: "Log Retention", desc: "Traceability is key; maintain operational logs for at least 6 months." },
            { title: "Fundamental Rights", desc: "Assess the impact on fundamental rights, especially in HR or retail monitoring." }
        );
    } else if (role === "Undefined") {
        obligations.push({ title: "No Clear Role", desc: "Based on these parameters, your activity doesn't fall squarely into Provider or Deployer categories." });
    }

    // Add Special Role notes
    specialRoles.forEach(sr => {
        if (sr !== 'Shadow AI User') {
            obligations.push({ title: `${sr} Duties`, desc: `You have specific liaison or verification duties under Article 23+ of the AI Act.` });
        }
    });

    roleTitle.innerText = role;
    resultDetails.innerHTML = obligations.map(o => `
        <div class="obligation-item fade-in">
            <h4>${o.title}</h4>
            <p>${o.desc}</p>
        </div>
    `).join('');
}


function copyResults() {
    const text = `GPAI Assessment Result\nRole: ${roleTitle.innerText}\nTimestamp: ${new Date().toISOString()}`;
    navigator.clipboard.writeText(text).then(() => {
        const btn = document.getElementById('copy-btn');
        const originalText = btn.innerText;
        btn.innerText = "Copied!";
        setTimeout(() => btn.innerText = originalText, 2000);
    });
}
