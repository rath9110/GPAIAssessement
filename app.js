const questions = [
    // 1-20
    { id: 'q1', text: "Is the AI used solely for professional activities under your authority?", desc: "e.g., internal CRM analytics.", yes: 'deployer', no: 'provider' },
    { id: 'q2', text: "Did your team develop the underlying model architecture or hire a contractor?", desc: "Specifically built for your organization.", yes: 'provider', no: 'deployer' },
    { id: 'q3', text: "Is your role to ensure usage according to 'Instructions for Use'?", desc: "Following vendor-provided guidelines.", yes: 'deployer', no: 'provider' },
    { id: 'q4', text: "Have you branded the AI interface before releasing it to subsidiaries?", desc: "Placing your trademark on the product.", yes: 'provider', no: 'deployer' },
    { id: 'q5', text: "Is your main responsibility to monitor for 'drifts' and errors?", desc: "Reporting anomalies back to the developer.", yes: 'deployer', no: 'provider' },
    { id: 'q6', text: "Have you modified a non-high-risk tool for 'High-Risk' tasks?", desc: "e.g., recruitment screening.", yes: 'provider', no: 'deployer' },
    { id: 'q7', text: "Do you control core training data and weights (not just prompts)?", desc: "Technical control over the model's internals.", yes: 'provider', no: 'deployer' },
    { id: 'q8', text: "Is your duty limited to human oversight based on a manual?", desc: "Following a provided oversight protocol.", yes: 'deployer', no: 'provider' },
    { id: 'q9', text: "Have you made 'Substantial Modifications' changing safety parameters?", desc: "Code-level changes that affect performance/safety.", yes: 'provider', no: 'deployer' },
    { id: 'q10', text: "Do you only manage prompt-based input data through a 3rd-party API?", desc: "No control over the underlying model logic.", yes: 'deployer', no: 'provider' },
    { id: 'q11', text: "Are you responsible for 'Technical Documentation' and CE Conformity?", desc: "Drafting official compliance documents (Annex IV).", yes: 'provider', no: 'deployer' },
    { id: 'q12', text: "Does your organization solely consume AI results to drive logic?", desc: "Using AI recommendations without logic control.", yes: 'deployer', no: 'provider' },
    { id: 'q13', text: "Did you create the Quality Management System (QMS)?", desc: "Setting up the full compliance framework and monitoring.", yes: 'provider', no: 'deployer' },
    { id: 'q14', text: "Is the AI an 'off-the-shelf' component with unchanged logic?", desc: "Standard integration of an existing tool.", yes: 'deployer', no: 'provider' },
    { id: 'q15', text: "Must you publish the public training data summary per Article 53?", desc: "Regulatory transparency duty for GPAI.", yes: 'provider', no: 'deployer' },
    { id: 'q16', text: "Is the system integrated into a retail product sold under your brand?", desc: "Selling the AI-powered product to customers.", yes: 'provider', no: 'deployer' },
    { id: 'q17', text: "Do you only control 'operational settings' (e.g., filters)?", desc: "Surface-level configuration only.", yes: 'deployer', no: 'provider' },
    { id: 'q18', text: "Are you acting as the 'Authorised Representative' for non-EU developers?", desc: "Legal liaison for a foreign entity.", yes: 'auth_rep', no: 'deployer' },
    { id: 'q19', text: "Must you perform a 'Fundamental Rights Impact Assessment'?", desc: "Mandatory for deployers of high-risk systems.", yes: 'deployer', no: 'provider' },
    { id: 'q20', text: "Do you hold CE marking responsibility and perform assessments?", desc: "Official safety certification holder.", yes: 'provider', no: 'deployer' },
    // 21-40
    { id: 'q21', text: "Do you provide a RAG layer feeding proprietary data?", desc: "Without altering the third-party model's weights.", yes: 'deployer', no: 'provider' },
    { id: 'q22', text: "Have you fine-tuned a model with massive datasets?", desc: "Significantly altering original performance/capabilities.", yes: 'provider', no: 'deployer' },
    { id: 'q23', text: "Are employees using 'Shadow AI' without formal oversight?", desc: "Using public tools like ChatGPT without company authority.", yes: 'shadow_risk', no: 'deployer' },
    { id: 'q24', text: "Is the AI a safety component in a product you manufacture?", desc: "e.g., smart warehouse robotics.", yes: 'provider', no: 'deployer' },
    { id: 'q25', text: "Do you use AI to monitor employee performance/promotions?", desc: "In retail or corporate office operations.", yes: 'deployer', no: 'provider' },
    { id: 'q26', text: "Are you an EU entity placing non-EU AI on the market?", desc: "Under their brand name/trademark.", yes: 'importer', no: 'mixed' },
    { id: 'q27', text: "Have you changed a low-risk chatbot's purpose to medical/legal?", desc: "Redefining the 'Intended Purpose'.", yes: 'provider', no: 'deployer' },
    { id: 'q28', text: "Is your role limited to setting 'operational parameters'?", desc: "e.g., setting fraud-detection score thresholds.", yes: 'deployer', no: 'provider' },
    { id: 'q29', text: "Did you develop a 'Systemic Risk' model (>10^25 FLOPs)?", desc: "GPAI with massive compute capacity.", yes: 'systemic', no: 'deployer' },
    { id: 'q30', text: "Are you using AI for 'Real-time Biometric Identification'?", desc: "Usage in physical store locations.", yes: 'deployer', no: 'provider' },
    { id: 'q31', text: "Have you assigned human oversight to competent personnel?", desc: "Who can interpret/override the AI's output.", yes: 'deployer', no: 'provider' },
    { id: 'q32', text: "Are you responsible for attaching the 'CE Marking'?", desc: "Physically attaching it to product/docs.", yes: 'provider', no: 'deployer' },
    { id: 'q33', text: "Do you only control 'logs' and 'usage data'?", desc: "Rather than the technical source code.", yes: 'deployer', no: 'provider' },
    { id: 'q34', text: "Are you 'white-labeling' an AI solution for B2B partners?", desc: "Offering it as a service to franchisees/partners.", yes: 'provider', no: 'deployer' },
    { id: 'q35', text: "Is the AI used for a 'Narrow Procedural Task'?", desc: "e.g., simple spelling check in a CV.", yes: 'deployer', no: 'provider' },
    { id: 'q36', text: "Are you an EU subsidiary liaison for a foreign parent?", desc: "Authorized Representative role.", yes: 'auth_rep', no: 'deployer' },
    { id: 'q37', text: "Do you provide 'Model Cards' and 'Data Summaries'?", desc: "Technical disclosure to downstream users.", yes: 'provider', no: 'deployer' },
    { id: 'q38', text: "Must you inform workers' representatives/unions?", desc: "Before deploying high-risk AI at work.", yes: 'deployer', no: 'provider' },
    { id: 'q39', text: "Is your name the only one appearing on the Terms of Service?", desc: "Primary legal owner facing the user.", yes: 'provider', no: 'deployer' },
    { id: 'q40', text: "Do you maintain logs for at least six months?", desc: "Ensuring traceability of operational usage.", yes: 'deployer', no: 'provider' }
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

// Add Question Counter to UI if it doesn't exist
const qCounter = document.createElement('p');
qCounter.id = 'q-counter';
qCounter.style.marginBottom = '0.5rem';
qCounter.style.fontSize = '0.8rem';
qCounter.style.opacity = '0.5';
questionText.parentNode.insertBefore(qCounter, questionText);

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
    qCounter.innerText = `QUESTION ${currentQuestionIndex + 1} OF ${questions.length}`;

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

    let providerScore = 0;
    let deployerScore = 0;
    let specialRoles = new Set();
    let isSystemic = false;

    questions.forEach(q => {
        const userYes = answers[q.id];
        const res = userYes ? q.yes : q.no;

        if (res === 'provider') providerScore++;
        else if (res === 'deployer') deployerScore++;
        else if (res === 'systemic' && userYes) { providerScore += 2; isSystemic = true; }
        else if (res === 'auth_rep' && userYes) specialRoles.add('Authorized Representative');
        else if (res === 'importer' && userYes) specialRoles.add('Importer');
        else if (res === 'shadow_risk' && userYes) specialRoles.add('Shadow AI Risk');
    });

    let primaryRole = providerScore >= deployerScore ? "GPAI Provider" : "GPAI Deployer";
    if (providerScore === 0 && deployerScore === 0) primaryRole = "Observation/Monitoring Entity";

    const obligations = [];

    if (primaryRole === "GPAI Provider") {
        obligations.push(
            { title: "Technical Documentation", desc: "Annex IV compliance and technical disclosure for authorities are mandatory." },
            { title: "Conformity Assessment", desc: "Ensure the model meets EU safety standards before market placement." },
            { title: "Post-Market Monitoring", desc: "Maintain a plan for continuous evaluation and incident reporting." }
        );
        if (isSystemic) obligations.push({ title: "Systemic Risk Duties", desc: "Conduct rigorous model evaluations and adversarial testing." });
    } else {
        obligations.push(
            { title: "Instruction Compliance", desc: "Follow vendor 'Instructions for Use' strictly to maintain liability protection." },
            { title: "Human Oversight", desc: "Assign personnel who can interpret and override AI decisions effectively." },
            { title: "Monitoring & Retention", desc: "Store operational logs (min 6 months) and monitor for performance drift." }
        );
        if (answers.q19) obligations.push({ title: "FRIA Mandatory", desc: "You must conduct a Fundamental Rights Impact Assessment for high-risk usage." });
    }

    if (specialRoles.has('Importer')) {
        primaryRole += " / Importer";
        obligations.push({ title: "Importer Obligations", desc: "Verify CE marking and contact info of the non-EU provider are correct." });
    }
    if (specialRoles.has('Authorized Representative')) {
        primaryRole += " / Authorized Rep";
        obligations.push({ title: "Liaison Duties", desc: "Act as the primary contact for EU authorities regarding the model's compliance." });
    }
    if (specialRoles.has('Shadow AI Risk')) {
        obligations.push({ title: "⚠️ Shadow AI Threat", desc: "Employee use of unauthorized tools bypasses these formal role obligations and poses security risks." });
    }

    roleTitle.innerText = primaryRole;
    resultDetails.innerHTML = obligations.map(o => `
        <div class="obligation-item fade-in">
            <h4>${o.title}</h4>
            <p>${o.desc}</p>
        </div>
    `).join('');
}

function copyResults() {
    const text = `GPAI Assessment Result\nRole: ${roleTitle.innerText}\nQuestions Answered: ${Object.keys(answers).length}\nTimestamp: ${new Date().toISOString()}`;
    navigator.clipboard.writeText(text).then(() => {
        const btn = document.getElementById('copy-btn');
        const originalText = btn.innerText;
        btn.innerText = "Copied!";
        setTimeout(() => btn.innerText = originalText, 2000);
    });
}
