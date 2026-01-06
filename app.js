const questions = [
    {
        id: 'creation',
        text: "Did you develop the GPAI model?",
        desc: "Includes training the base model or having it developed specifically for your brand.",
        type: 'boolean'
    },
    {
        id: 'market',
        text: "Is it offered under your name/trademark?",
        desc: "Are you placing the model on the market as your own product or service?",
        type: 'boolean'
    },
    {
        id: 'modification',
        text: "Did you substantially modify the model?",
        desc: "Significant fine-tuning or changes that change its original purpose or performance.",
        type: 'boolean'
    },
    {
        id: 'integration',
        text: "Do you use it for professional tasks?",
        desc: "Using a model provided by others within your business or for customers.",
        type: 'boolean'
    },
    {
        id: 'systemic',
        text: "Is the training energy > 10^25 FLOPs?",
        desc: "This determines if the model poses a systemic risk. Answer 'No' if unsure.",
        type: 'boolean'
    }
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

    let role = "Undefined";
    let obligations = [];

    // Provider Logic: (Developed AND Branded) OR Substantially Modified
    const isProvider = (answers.creation && answers.market) || answers.modification;
    // Deployer Logic: (Using it) AND NOT a Provider
    const isDeployer = answers.integration && !isProvider;

    if (isProvider) {
        role = "GPAI Provider";
        obligations = [
            { title: "Technical Documentation", desc: "Must maintain detailed documentation for downstream providers and authorities." },
            { title: "Policy Compliance", desc: "Adhere to EU copyright laws and publish training data summaries." },
            { title: "Systemic Risk Monitoring", desc: answers.systemic ? "EXTRA: Rigorous risk assessments and model evaluations required due to systemic classification." : "Standard GPAI provider obligations apply." }
        ];
    } else if (isDeployer) {
        role = "GPAI Deployer";
        obligations = [
            { title: "Instruction Adherence", desc: "Use the model according to the provider's instructions." },
            { title: "Human Oversight", desc: "Assign competent persons to monitor and supervise the system." },
            { title: "Input Data Monitoring", desc: "Ensure input data is relevant and representative for the intended use." }
        ];
    } else {
        role = "External / Casual User";
        obligations = [
            { title: "No Specific GPAI Duties", desc: "Based on your answers, you likely do not fall under the primary GPAI regulatory categories." }
        ];
    }

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
