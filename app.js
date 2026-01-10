// Question Sets
const beginnerQuestions = [
    { id: 'b1', text: "Did your company write the core code for this AI yourself?", desc: "Building the 'brain' makes you the legal maker.", yes: 'provider', no: 'deployer' },
    { id: 'b2', text: "Did you hire a software firm to build a custom AI just for your brand?", desc: "'Having it developed' is the same as building it.", yes: 'provider', no: 'deployer' },
    { id: 'b3', text: "Are you using a tool like ChatGPT or Salesforce AI exactly as the vendor provided it?", desc: "Using a finished product makes you a user.", yes: 'deployer', no: 'provider' },
    { id: 'b4', text: "Is your brand's logo the only one a customer sees on the AI interface?", desc: "Your logo = Your legal responsibility for safety.", yes: 'provider', no: 'deployer' },
    { id: 'b5', text: "Are you just feeding your own customer files into a tool to get an answer?", desc: "Giving the AI 'homework' doesn't make you the teacher.", yes: 'deployer', no: 'provider' },
    { id: 'b6', text: "Have you changed the 'logic' of the AI so it works differently than the vendor intended?", desc: "Substantial changes move the risk to you.", yes: 'provider', no: 'deployer' },
    { id: 'b7', text: "Are you using the AI to make decisions about hiring or firing staff?", desc: "This is 'High-Risk' use; you must monitor it.", yes: 'deployer', no: 'provider' },
    { id: 'b8', text: "Are you responsible for the 'CE' safety mark on the software documentation?", desc: "Only makers (Providers) sign for safety.", yes: 'provider', no: 'deployer' },
    { id: 'b9', text: "Do you only control the 'prompts' and specific settings of the tool?", desc: "Operational control keeps you a Deployer.", yes: 'deployer', no: 'provider' },
    { id: 'b10', text: "Have you re-branded a third-party tool to sell it to other companies?", desc: "Re-selling as yours makes you the Provider.", yes: 'provider', no: 'deployer' },
    { id: 'b11', text: "Is your main job to ensure humans are watching the AI's output for errors?", desc: "Oversight is the #1 duty of a Deployer.", yes: 'deployer', no: 'provider' },
    { id: 'b12', text: "Do you have access to the 'Source Code' and can change how the model learns?", desc: "Access to the 'guts' of the AI is a Provider trait.", yes: 'provider', no: 'deployer' },
    { id: 'b13', text: "Are you using the AI to predict customer credit scores or loan eligibility?", desc: "High-risk usage requires strict Deployer logs.", yes: 'deployer', no: 'provider' },
    { id: 'b14', text: "Did you sign a contract that says 'We take full responsibility for this AI'?", desc: "Legal agreements can force you into a role.", yes: 'provider', no: 'deployer' },
    { id: 'b15', text: "Are you just a 'subscriber' paying a monthly fee to use someone else's tech?", desc: "Subscription = Deployment in most cases.", yes: 'deployer', no: 'provider' },
    { id: 'b16', text: "Have you modified the AI to perform a task the vendor explicitly said not to do?", desc: "Breaking the 'manual' makes you the new maker.", yes: 'provider', no: 'deployer' },
    { id: 'b17', text: "Is the AI used solely for internal, non-public research tasks?", desc: "Internal usage has lower 'Provider' triggers.", yes: 'deployer', no: 'provider' },
    { id: 'b18', text: "Are you the entity that explains how the AI works to the government?", desc: "Transparency filings are a Provider's burden.", yes: 'provider', no: 'deployer' },
    { id: 'b19', text: "Does the AI 'live' on your own servers rather than the vendor's cloud?", desc: "Hosting the 'engine' often signals Provider status.", yes: 'provider', no: 'deployer' },
    { id: 'b20', text: "Are you using the AI to personalize prices for different customers?", desc: "Retail use-cases like this require Deployer oversight.", yes: 'deployer', no: 'provider' },
    { id: 'b21', text: "Do you provide the 'Model Card' or 'Technical Spec' to other users?", desc: "Documenting the 'how' is a Maker's job.", yes: 'provider', no: 'deployer' },
    { id: 'b22', text: "Is your control limited to 'On/Off' switches and basic filters?", desc: "Low technical control = Deployer.", yes: 'deployer', no: 'provider' },
    { id: 'b23', text: "Did you decide the 'Intended Purpose' (what the AI is for)?", desc: "Defining the 'why' is a Provider's task.", yes: 'provider', no: 'deployer' },
    { id: 'b24', text: "Do you have to keep logs of every time the AI is used for 6 months?", desc: "Traceability is a key Deployer obligation.", yes: 'deployer', no: 'provider' },
    { id: 'b25', text: "Have you added a 'RAG' layer (connecting your DB to the AI) to the tool?", desc: "RAG is the 'Safe Zone' for technical leads.", yes: 'deployer', no: 'provider' },
    { id: 'b26', text: "Are you responsible for the 'Copyright Policy' of the AI's training data?", desc: "Training data issues belong to the Provider.", yes: 'provider', no: 'deployer' },
    { id: 'b27', text: "Is the AI part of a physical machine you sell (e.g., a smart checkout)?", desc: "Integrated hardware AI usually makes you a Provider.", yes: 'provider', no: 'deployer' },
    { id: 'b28', text: "Are you using the AI for 'biometric' tasks (like recognizing faces)?", desc: "Very high risk; triggers massive Deployer duties.", yes: 'deployer', no: 'provider' },
    { id: 'b29', text: "Did you perform the 'Conformity Assessment' (the big legal audit)?", desc: "This is the final step for a Maker to go live.", yes: 'provider', no: 'deployer' },
    { id: 'b30', text: "Are you an employer using AI to watch your warehouse workers?", desc: "Workplace AI is a High-Risk Deployer scenario.", yes: 'deployer', no: 'provider' },
    { id: 'b31', text: "Did you download an 'Open Source' model and build an app around it?", desc: "Using 'raw' models usually makes you the Provider.", yes: 'provider', no: 'deployer' },
    { id: 'b32', text: "Is your organization based in the EU and using a US-made AI via API?", desc: "Importing a tool for use keeps you as a Deployer.", yes: 'deployer', no: 'provider' },
    { id: 'b33', text: "Do you have a 'Human-in-the-loop' to double-check AI decisions?", desc: "This is the core requirement for Deployers.", yes: 'deployer', no: 'provider' },
    { id: 'b34', text: "Have you disabled the safety filters that the vendor put in place?", desc: "Removing safety guards makes you the Provider.", yes: 'provider', no: 'deployer' },
    { id: 'b35', text: "Is the AI used for a 'non-critical' task like writing marketing emails?", desc: "Low-risk tasks have the simplest Deployer rules.", yes: 'deployer', no: 'provider' }
];

const technicalQuestions = [
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

// Context mapping for questions
const questionContext = {
    // Maker Logic (Provider Triggers)
    'b1': '<strong>Core Development</strong><br>If you control the weights, architecture, or source code, you are the Provider. You own the technical debt and the safety risks.',
    'b2': '<strong>Custom Hire</strong><br>Hiring a third party to build a "bespoke" model for your brand usually makes you the Provider because you are placing it on the market under your name.',
    'b4': '<strong>Branding & White-labeling</strong><br>Under Article 25, putting your trademark on a third-party AI makes you the "de facto" Provider. The user sees your brand; the law sees your liability.',
    'b6': '<strong>Substantial Modifications</strong><br>If you change the "intended purpose" or disable safety filters, you have "substantially modified" the system. You are now legally the new Provider.',
    'b10': '<strong>Branding & White-labeling</strong><br>Re-selling a third-party tool as your own makes you the Provider under EU AI Act Article 25.',
    'b12': '<strong>Core Development</strong><br>Access to the "guts" of the AI (source code, model weights) is a Provider trait.',
    'b16': '<strong>Substantial Modifications</strong><br>Breaking the "manual" (vendor instructions) makes you the new maker.',
    'b34': '<strong>Substantial Modifications</strong><br>Removing safety guards makes you the Provider.',
    'q2': '<strong>Core Development</strong><br>If you control the weights, architecture, or source code, you are the Provider.',
    'q4': '<strong>Branding & White-labeling</strong><br>Your trademark = Your legal responsibility for safety.',
    'q7': '<strong>Core Development</strong><br>Technical control over the model\'s internals makes you the Provider.',
    'q9': '<strong>Substantial Modifications</strong><br>Code-level changes that affect performance/safety move you to Provider status.',
    'q39': '<strong>Branding & White-labeling</strong><br>Being the only name on the Terms of Service signals Provider responsibility.',

    // User Logic (Deployer Triggers)
    'b3': '<strong>Standard SaaS Usage</strong><br>Using a finished product (like ChatGPT) keeps you a Deployer. Your job is to follow the "Instructions for Use."',
    'b5': '<strong>RAG & Prompting</strong><br>Giving the AI "homework" doesn\'t make you the teacher. This is operational use.',
    'b9': '<strong>RAG & Prompting</strong><br>Operational control (prompts, settings) keeps you a Deployer.',
    'b11': '<strong>Human-in-the-loop</strong><br>Oversight is the #1 duty of a Deployer. You must ensure humans can override AI decisions.',
    'b15': '<strong>Standard SaaS Usage</strong><br>Subscription = Deployment in most cases.',
    'b25': '<strong>RAG & Prompting</strong><br>RAG (Retrieval-Augmented Generation) is the "Safe Zone" for technical leads. You\'re still a Deployer.',
    'b33': '<strong>Human-in-the-loop</strong><br>This is the core requirement for Deployers.',
    'q14': '<strong>Standard SaaS Usage</strong><br>Standard integration of an existing tool keeps you as a Deployer.',
    'q21': '<strong>RAG & Prompting</strong><br>Connecting your database without altering model weights is considered "operational use."',
    'q31': '<strong>Human-in-the-loop</strong><br>You must ensure competent personnel can interpret and override the AI\'s output.',

    // High-Risk Scenarios
    'b7': '<strong>High-Risk: Employment & HR</strong><br>Using AI for hiring/firing is "High-Risk." You must perform a Fundamental Rights Impact Assessment (FRIA).',
    'b13': '<strong>High-Risk: Financial Services</strong><br>Credit scoring triggers strict transparency and logging requirements for Deployers.',
    'b20': '<strong>High-Risk: Financial Services</strong><br>Personalized pricing requires Deployer oversight and transparency.',
    'b28': '<strong>High-Risk: Biometric</strong><br>Very high risk; triggers massive Deployer duties.',
    'b30': '<strong>High-Risk: Employment & HR</strong><br>Workplace AI is a High-Risk Deployer scenario.',
    'q25': '<strong>High-Risk: Employment & HR</strong><br>Employee monitoring triggers enhanced Deployer obligations.',
    'q28': '<strong>High-Risk: Financial Services</strong><br>Setting fraud-detection thresholds is still Deployer activity, but with strict logging.'
};

let questions = [];
let currentQuestionIndex = 0;
let answers = {};
let selectedLevel = '';

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
const backBtn = document.getElementById('back-btn');
let questionHistory = [];

// Event Listeners
document.querySelectorAll('.expertise-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const level = e.currentTarget.dataset.level;
        // If switching levels, clear previous progress or ask confirmation
        if (localStorage.getItem('gpai_progress') && JSON.parse(localStorage.getItem('gpai_progress')).level !== level) {
            if (!confirm("Start a new assessment? This will overwrite your previous saved progress.")) return;
            localStorage.removeItem('gpai_progress');
        }

        selectedLevel = level;
        if (level === 'beginner') {
            questions = beginnerQuestions;
        } else {
            questions = technicalQuestions;
        }
        startAssessment();
    });
});

// Tooltip hover behavior
const helpIcon = document.getElementById('help-icon');
const tooltip = document.getElementById('tooltip');

helpIcon.addEventListener('mouseenter', () => {
    tooltip.classList.add('visible');
});

helpIcon.addEventListener('mouseleave', () => {
    tooltip.classList.remove('visible');
});

// Also hide tooltip when mouse leaves the tooltip itself
tooltip.addEventListener('mouseleave', () => {
    tooltip.classList.remove('visible');
});

// Keep tooltip visible when hovering over it
tooltip.addEventListener('mouseenter', () => {
    tooltip.classList.add('visible');
});

document.getElementById('restart-btn').addEventListener('click', () => {
    localStorage.removeItem('gpai_progress');
    location.reload();
});

document.querySelectorAll('.choice-btn').forEach(btn => {
    btn.addEventListener('click', (e) => handleAnswer(e.target.dataset.answer === 'yes'));
});
document.getElementById('copy-btn').addEventListener('click', copyResults);
backBtn.addEventListener('click', goBack);

function startAssessment() {
    welcomeScreen.classList.add('hidden');
    assessmentWell.classList.remove('hidden');

    // Try to load progress
    loadProgress();

    showQuestion();
}

function showQuestion() {
    const q = questions[currentQuestionIndex];
    questionText.innerText = q.text;
    questionDesc.innerText = q.desc;
    qCounter.innerText = `QUESTION ${currentQuestionIndex + 1} OF ${questions.length}`;

    // Update tooltip content
    const tooltipContent = document.getElementById('tooltip-content');
    if (questionContext[q.id]) {
        tooltipContent.innerHTML = questionContext[q.id];
        helpIcon.style.display = 'inline-flex';
    } else {
        tooltipContent.innerHTML = '<strong>No additional context available</strong>';
        helpIcon.style.display = 'none';
    }

    // Reset tooltip visibility
    tooltip.classList.remove('visible');

    // Update Progress
    const progress = (currentQuestionIndex / questions.length) * 100;
    progressBar.style.width = `${progress}%`;

    // Manage Back Button visibility
    if (questionHistory.length > 0) {
        backBtn.classList.remove('hidden');
    } else {
        backBtn.classList.add('hidden');
    }
}

function handleAnswer(answer) {
    const q = questions[currentQuestionIndex];
    answers[q.id] = answer;

    // Push current index to history
    questionHistory.push(currentQuestionIndex);

    currentQuestionIndex++;

    saveProgress();

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        calculateResults();
    }
}

function goBack() {
    if (questionHistory.length === 0) return;

    // Pop the previous question index
    currentQuestionIndex = questionHistory.pop();

    // Remove the answer for the question we're going back to (optional, but cleaner)
    // answers[questions[currentQuestionIndex].id] = undefined; 

    saveProgress();
    showQuestion();
}

function saveProgress() {
    const progress = {
        level: selectedLevel,
        currentQuestionIndex: currentQuestionIndex,
        answers: answers,
        history: questionHistory
    };
    localStorage.setItem('gpai_progress', JSON.stringify(progress));
}

function loadProgress() {
    const saved = localStorage.getItem('gpai_progress');
    if (saved) {
        const progress = JSON.parse(saved);
        if (progress.level === selectedLevel) {
            currentQuestionIndex = progress.currentQuestionIndex;
            answers = progress.answers || {};
            questionHistory = progress.history || [];
        }
    }
}

function calculateResults() {
    assessmentWell.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    progressBar.style.width = `100%`;

    // Clear progress on completion
    localStorage.removeItem('gpai_progress');

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
        else if (res === 'distributor' && userYes) specialRoles.add('Distributor');
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
        if (answers.q19 || answers.b15) obligations.push({ title: "FRIA Mandatory", desc: "You must conduct a Fundamental Rights Impact Assessment for high-risk usage." });
    }

    if (specialRoles.has('Importer')) {
        primaryRole += " / Importer";
        obligations.push({ title: "Importer Obligations", desc: "Verify CE marking and contact info of the non-EU provider are correct." });
    }
    if (specialRoles.has('Authorized Representative')) {
        primaryRole += " / Authorized Rep";
        obligations.push({ title: "Liaison Duties", desc: "Act as the primary contact for EU authorities regarding the model's compliance." });
    }
    if (specialRoles.has('Distributor')) {
        primaryRole = "Distributor";
        obligations.push({ title: "Distributor Duties", desc: "Ensure proper storage, handling, and that CE marking remains intact during distribution." });
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
    const text = `GPAI Assessment Result\nLevel: ${selectedLevel}\nRole: ${roleTitle.innerText}\nQuestions Answered: ${Object.keys(answers).length}\nTimestamp: ${new Date().toISOString()}`;
    navigator.clipboard.writeText(text).then(() => {
        const btn = document.getElementById('copy-btn');
        const originalText = btn.innerText;
        btn.innerText = "Summary Copied!";
        setTimeout(() => btn.innerText = originalText, 2000);
    });
}
