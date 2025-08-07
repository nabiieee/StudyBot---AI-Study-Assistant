const messagesContainer = document.getElementById("messages");
const messageInput = document.getElementById("messageInput");
const sendButton = document.getElementById("sendButton");

// ===== GEMINI API CONFIGURATION =====
// Replace 'YOUR_API_KEY_HERE' with your actual Gemini API key
const GEMINI_API_KEY = "AIzaSyDHThQib_a-okOyC5LJPHBUTCpmHwca7Zs";
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`;

// Study-related keywords for validation
const studyKeywords = [
  "study",
  "learn",
  "homework",
  "assignment",
  "exam",
  "test",
  "quiz",
  "research",
  "explain",
  "solve",
  "calculate",
  "analyze",
  "define",
  "describe",
  "compare",
  "math",
  "science",
  "history",
  "literature",
  "physics",
  "chemistry",
  "biology",
  "english",
  "geography",
  "psychology",
  "sociology",
  "economics",
  "philosophy",
  "programming",
  "computer",
  "algorithm",
  "equation",
  "formula",
  "theory",
  "concept",
  "principle",
  "law",
  "rule",
  "method",
  "technique",
  "strategy",
  "book",
  "chapter",
  "lesson",
  "course",
  "subject",
  "topic",
  "academic",
  "education",
  "school",
  "college",
  "university",
  "degree",
  "diploma",
  "thesis",
  "essay",
  "paper",
  "report",
  "project",
  "presentation",
  "engineering",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  // Core academic terms
  "study",
  "learn",
  "learning",
  "homework",
  "assignment",
  "exam",
  "test",
  "quiz",
  "research",
  "explain",
  "solve",
  "calculate",
  "analyze",
  "analyse",
  "define",
  "describe",
  "compare",
  "contrast",
  "evaluate",
  "assess",
  "review",
  "summarize",
  "summarise",
  "interpret",
  "understand",

  // Subject areas - Core subjects
  "math",
  "mathematics",
  "maths",
  "arithmetic",
  "algebra",
  "geometry",
  "calculus",
  "statistics",
  "trigonometry",
  "probability",
  "numbers",
  "fraction",
  "decimal",
  "percentage",
  "science",
  "physics",
  "chemistry",
  "biology",
  "anatomy",
  "physiology",
  "genetics",
  "history",
  "literature",
  "english",
  "grammar",
  "vocabulary",
  "writing",
  "reading",
  "geography",
  "geology",
  "astronomy",
  "meteorology",
  "ecology",
  "environment",

  // Advanced subjects
  "psychology",
  "sociology",
  "anthropology",
  "philosophy",
  "ethics",
  "logic",
  "economics",
  "finance",
  "accounting",
  "business",
  "marketing",
  "management",
  "politics",
  "government",
  "law",
  "legal",
  "constitution",
  "democracy",
  "art",
  "music",
  "drama",
  "theater",
  "theatre",
  "dance",
  "creative",
  "pe",
  "physical education",
  "health",
  "nutrition",
  "fitness",
  "sports",

  // STEM and Technology
  "programming",
  "coding",
  "computer",
  "software",
  "hardware",
  "algorithm",
  "data",
  "engineering",
  "mechanical",
  "electrical",
  "civil",
  "chemical",
  "biomedical",
  "technology",
  "digital",
  "robotics",
  "artificial intelligence",
  "machine learning",
  "cybersecurity",
  "network",
  "database",
  "web development",
  "app development",

  // Language studies
  "spanish",
  "french",
  "german",
  "italian",
  "chinese",
  "japanese",
  "korean",
  "hindi",
  "arabic",
  "russian",
  "portuguese",
  "language",
  "linguistics",
  "translation",
  "pronunciation",
  "accent",
  "dialect",
  "fluency",
  "bilingual",
  "multilingual",

  // Academic concepts and methods
  "equation",
  "formula",
  "theorem",
  "proof",
  "hypothesis",
  "theory",
  "model",
  "concept",
  "principle",
  "law",
  "rule",
  "method",
  "technique",
  "strategy",
  "process",
  "procedure",
  "system",
  "structure",
  "function",
  "relationship",
  "pattern",
  "trend",
  "correlation",
  "causation",
  "evidence",
  "data",

  // Study materials and resources
  "book",
  "textbook",
  "chapter",
  "lesson",
  "unit",
  "module",
  "course",
  "curriculum",
  "syllabus",
  "subject",
  "topic",
  "section",
  "paragraph",
  "sentence",
  "word",
  "diagram",
  "chart",
  "graph",
  "table",
  "figure",
  "illustration",
  "example",
  "exercise",
  "problem",
  "question",
  "answer",
  "solution",
  "step",
  "instruction",

  // Educational institutions and levels
  "academic",
  "education",
  "educational",
  "school",
  "elementary",
  "primary",
  "secondary",
  "high school",
  "college",
  "university",
  "graduate",
  "undergraduate",
  "degree",
  "diploma",
  "certificate",
  "qualification",
  "credit",
  "semester",
  "grade",
  "year",
  "class",
  "classroom",
  "student",
  "teacher",
  "professor",
  "instructor",
  "tutor",
  "mentor",
  "peer",
  "group study",
  "discussion",

  // Assessment and evaluation
  "thesis",
  "dissertation",
  "essay",
  "paper",
  "report",
  "project",
  "presentation",
  "portfolio",
  "journal",
  "log",
  "notebook",
  "notes",
  "summary",
  "outline",
  "draft",
  "revision",
  "edit",
  "proofread",
  "feedback",
  "grade",
  "score",
  "mark",
  "evaluation",
  "assessment",
  "rubric",
  "criteria",
  "standard",

  // Study skills and techniques
  "memorize",
  "memorise",
  "remember",
  "recall",
  "review",
  "practice",
  "drill",
  "flashcard",
  "mnemonic",
  "note-taking",
  "highlighting",
  "annotation",
  "time management",
  "schedule",
  "planning",
  "organization",
  "organisation",
  "focus",
  "concentration",
  "attention",
  "motivation",
  "goal",
  "objective",

  // Research and investigation
  "research",
  "investigate",
  "explore",
  "discover",
  "find",
  "search",
  "locate",
  "source",
  "reference",
  "citation",
  "bibliography",
  "database",
  "library",
  "article",
  "journal",
  "publication",
  "author",
  "expert",
  "authority",
  "primary source",
  "secondary source",
  "data collection",
  "survey",
  "interview",

  // Critical thinking and analysis
  "critical thinking",
  "reasoning",
  "logic",
  "argument",
  "debate",
  "discussion",
  "opinion",
  "perspective",
  "viewpoint",
  "bias",
  "objective",
  "subjective",
  "fact",
  "opinion",
  "inference",
  "conclusion",
  "assumption",
  "premise",
  "synthesis",
  "comparison",
  "classification",
  "categorization",
  "organization",

  // Specific academic verbs
  "identify",
  "classify",
  "categorize",
  "list",
  "enumerate",
  "sequence",
  "order",
  "rank",
  "prioritize",
  "distinguish",
  "differentiate",
  "relate",
  "connect",
  "apply",
  "implement",
  "demonstrate",
  "illustrate",
  "exemplify",
  "justify",
  "support",
  "validate",
  "verify",
  "confirm",
  "refute",
  "disprove",

  // Learning difficulties and support
  "difficulty",
  "struggle",
  "challenge",
  "problem",
  "issue",
  "confusion",
  "unclear",
  "help",
  "assistance",
  "support",
  "guidance",
  "clarification",
  "explanation",
  "simplify",
  "break down",
  "step by step",
  "tutorial",

  // Test and exam preparation
  "prepare",
  "preparation",
  "revision",
  "practice test",
  "mock exam",
  "sample question",
  "past paper",
  "study guide",
  "cheat sheet",
  "formula sheet",
  "reference",
  "tip",
  "strategy",
  "technique",

  // Online and digital learning
  "online",
  "virtual",
  "remote",
  "distance learning",
  "e-learning",
  "mooc",
  "webinar",
  "video",
  "tutorial",
  "podcast",
  "interactive",
  "simulation",
  "animation",
  "multimedia",
  "digital",
  "app",
  "software",

  // Specialized fields
  "medicine",
  "medical",
  "nursing",
  "pharmacy",
  "dentistry",
  "veterinary",
  "architecture",
  "design",
  "agriculture",
  "journalism",
  "communication",
  "statistics",
  "data science",
  "analytics",
  "research methodology",

  // Question words and phrases
  "what",
  "why",
  "how",
  "when",
  "where",
  "who",
  "which",
  "whose",
  "what is",
  "how to",
  "why does",
  "explain how",
  "tell me about",
  "can you help",
  "i need help",
  "i dont understand",
  "i don't understand",
  "confused about",
  "stuck on",
  "having trouble",
  "need assistance",
];

function isStudyRelated(message) {
  const lowercaseMessage = message.toLowerCase();
  return studyKeywords.some((keyword) => lowercaseMessage.includes(keyword));
}

// Enhanced system prompt for study-focused responses
function createStudyPrompt(userMessage) {
  return `You are StudyBot, an AI assistant specifically designed to help students with their academic questions and studies. 

IMPORTANT INSTRUCTIONS:
- Only respond to study, academic, and educational questions
- If the question is not study-related, politely redirect the user to ask academic questions
- Provide clear, educational, and helpful explanations
- Use examples when helpful
- Break down complex concepts into simpler parts
- Be encouraging and supportive of learning
- Focus on helping students understand concepts, not just giving answers

User's question: "${userMessage}"

Please provide a helpful, educational response that assists with their studies.`;
}

async function callGeminiAPI(message) {
  try {
    // Check if the message is study-related first
    if (!isStudyRelated(message)) {
      return "I'm specifically designed to help with study and academic-related questions. Please ask me something about your studies, homework, or any educational topic you'd like to learn about! 📚";
    }

    const prompt = createStudyPrompt(message);

    const response = await fetch(GEMINI_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: prompt,
              },
            ],
          },
        ],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        },
        safetySettings: [
          {
            category: "HARM_CATEGORY_HARASSMENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE",
          },
          {
            category: "HARM_CATEGORY_HATE_SPEECH",
            threshold: "BLOCK_MEDIUM_AND_ABOVE",
          },
          {
            category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE",
          },
          {
            category: "HARM_CATEGORY_DANGEROUS_CONTENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE",
          },
        ],
      }),
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    const data = await response.json();

    if (data.candidates && data.candidates[0] && data.candidates[0].content) {
      return data.candidates[0].content.parts[0].text;
    } else {
      throw new Error("Invalid response format from API");
    }
  } catch (error) {
    console.error("Gemini API Error:", error);

    // Fallback response
    if (error.message.includes("API_KEY")) {
      return "⚠️ API Configuration Error: Please make sure you've added your Gemini API key. Check the console for more details.";
    } else if (error.message.includes("403")) {
      return "⚠️ API Access Error: Please check your API key permissions and quota.";
    } else if (error.message.includes("429")) {
      return "⚠️ Rate Limit: Too many requests. Please try again in a moment.";
    } else {
      return "I'm having trouble connecting to my knowledge base right now. Please try again in a moment, or rephrase your question. 🤖";
    }
  }
}

function addMessage(content, isUser = false) {
  const messageDiv = document.createElement("div");
  messageDiv.className = `message ${isUser ? "user" : "bot"}`;

  const avatar = document.createElement("div");
  avatar.className = "avatar";
  avatar.textContent = isUser ? "S" : "🤖";

  const messageContent = document.createElement("div");
  messageContent.className = "message-content";
  if (content.includes("I'm specifically designed to help")) {
    messageContent.classList.add("error-message");
  }
  messageContent.textContent = content;

  messageDiv.appendChild(avatar);
  messageDiv.appendChild(messageContent);

  messagesContainer.appendChild(messageDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function showTypingIndicator() {
  const typingDiv = document.createElement("div");
  typingDiv.className = "message bot";
  typingDiv.id = "typing-indicator";

  const avatar = document.createElement("div");
  avatar.className = "avatar";
  avatar.textContent = "🤖";

  const typingContent = document.createElement("div");
  typingContent.className = "message-content typing-indicator";

  for (let i = 0; i < 3; i++) {
    const dot = document.createElement("div");
    dot.className = "typing-dot";
    typingContent.appendChild(dot);
  }

  typingDiv.appendChild(avatar);
  typingDiv.appendChild(typingContent);

  messagesContainer.appendChild(typingDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function removeTypingIndicator() {
  const typingIndicator = document.getElementById("typing-indicator");
  if (typingIndicator) {
    typingIndicator.remove();
  }
}

async function sendMessage() {
  const message = messageInput.value.trim();
  if (!message) return;

  // Add user message
  addMessage(message, true);

  // Clear input
  messageInput.value = "";
  messageInput.style.height = "auto";

  // Disable send button
  sendButton.disabled = true;

  // Show typing indicator
  showTypingIndicator();

  try {
    // Call Gemini API
    const response = await callGeminiAPI(message);
    removeTypingIndicator();
    addMessage(response, false);
  } catch (error) {
    console.error("Error getting response:", error);
    removeTypingIndicator();
    addMessage(
      "I'm having trouble processing your request right now. Please try again! 🤖",
      false
    );
  } finally {
    sendButton.disabled = false;
    messageInput.focus();
  }
}

function insertSuggestion(suggestion) {
  messageInput.value = suggestion;
  messageInput.focus();
  autoResize();
}

function autoResize() {
  messageInput.style.height = "auto";
  messageInput.style.height = Math.min(messageInput.scrollHeight, 120) + "px";
}

// Event listeners
messageInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
});

messageInput.addEventListener("input", autoResize);

// Remove welcome message on first user input
messageInput.addEventListener("focus", () => {
  const welcomeMessage = document.querySelector(".welcome-message");
  if (welcomeMessage && messagesContainer.children.length === 1) {
    // Don't remove immediately, wait for actual message
  }
});

// Focus input on page load
messageInput.focus();
