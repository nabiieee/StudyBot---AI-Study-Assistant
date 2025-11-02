// ===== Chat UI ELEMENTS =====

const messagesContainer = document.getElementById("messages");
const messageInput = document.getElementById("messageInput");
const sendButton = document.getElementById("sendButton");

// ===== GEMINI API CONFIGURATION =====
const GEMINI_API_KEY = "AIzaSyAvmuCHOx0pwhihv-f3vJaePC_Ua78TC8E";
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`;


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

     // ===== USER AUTHENTICATION SYSTEM =====
        let currentUser = null;
        let currentChatId = null;
        let chats = {};

        // Study keywords (using your existing comprehensive list)
        
        // Initialize app
        document.addEventListener('DOMContentLoaded', function() {
            // ensure storage exists, then initialize UI and listeners
            initializeStorage();
            checkAuthentication();
            setupEventListeners();
            // loadUserChats() exists and loads or starts a chat; loadChatHistory() did not exist
            loadUserChats();
        });

        function checkAuthentication() {
            const userData = JSON.parse(localStorage.getItem('studybot_user') || 'null');
            if (userData) {
                currentUser = userData;
                showAuthenticatedUI();
                loadUserChats();
            } else {
                showUnauthenticatedUI();
            }
        }

        function showAuthenticatedUI() {
            document.getElementById('authButtons').style.display = 'none';
            document.getElementById('userInfo').style.display = 'flex';
            document.getElementById('logoutBtn').style.display = 'block';
            document.getElementById('userName').textContent = currentUser.name;
            document.getElementById('userAvatar').textContent = currentUser.name.charAt(0).toUpperCase();
            document.getElementById('loginTip').textContent = `Welcome back, ${currentUser.name}! Your chats are automatically saved.`;
        }

        function showUnauthenticatedUI() {
            document.getElementById('authButtons').style.display = 'flex';
            document.getElementById('userInfo').style.display = 'none';
            document.getElementById('logoutBtn').style.display = 'none';
        }

        // Modal functions
        function showLoginModal() {
            document.getElementById('signupModal').classList.remove('show');
            document.getElementById('loginModal').classList.add('show');
        }

        function showSignupModal() {
            document.getElementById('loginModal').classList.remove('show');
            document.getElementById('signupModal').classList.add('show');
        }

        function hideModal() {
            document.getElementById('loginModal').classList.remove('show');
            document.getElementById('signupModal').classList.remove('show');
        }

        // Authentication handlers
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            
            // Simple authentication (in production, use proper authentication)
            const users = JSON.parse(localStorage.getItem('studybot_users') || '{}');
            const user = users[email];
            
            if (user && user.password === password) {
                currentUser = { email: user.email, name: user.name };
                localStorage.setItem('studybot_user', JSON.stringify(currentUser));
                showAuthenticatedUI();
                hideModal();
                loadUserChats();
                showNotification('Welcome back!', 'success');
            } else {
                showNotification('Invalid email or password', 'error');
            }
        });

        document.getElementById('signupForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('signupName').value;
            const email = document.getElementById('signupEmail').value;
            const password = document.getElementById('signupPassword').value;
            
            const users = JSON.parse(localStorage.getItem('studybot_users') || '{}');
            
            if (users[email]) {
                showNotification('Email already exists', 'error');
                return;
            }
            
            users[email] = { name, email, password };
            localStorage.setItem('studybot_users', JSON.stringify(users));
            
            currentUser = { email, name };
            localStorage.setItem('studybot_user', JSON.stringify(currentUser));
            
            showAuthenticatedUI();
            hideModal();
            showNotification('Account created successfully!', 'success');
        });

        function logout() {
            currentUser = null;
            currentChatId = null;
            localStorage.removeItem('studybot_user');
            showUnauthenticatedUI();
            clearMessages();
            showWelcomeMessage();
            clearChatHistory();
            showNotification('Logged out successfully', 'success');
        }

        // Chat management
        function startNewChat() {
            if (!currentUser) {
                showLoginModal();
                return;
            }
            
            currentChatId = generateChatId();
            clearMessages();
            showWelcomeMessage();
            updateChatHistory();
        }

        function generateChatId() {
            return 'chat_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        }

        function saveChat() {
            if (!currentUser || !currentChatId) return;
            
            const messages = Array.from(document.querySelectorAll('.message')).map(msg => {
                const isUser = msg.classList.contains('user');
                const content = msg.querySelector('.message-content').textContent;
                return { isUser, content, timestamp: new Date().toISOString() };
            });
            
            if (messages.length === 0) return;
            
            const userChats = JSON.parse(localStorage.getItem(`studybot_chats_${currentUser.email}`) || '{}');
            
            // Generate title from first user message
            const firstUserMessage = messages.find(msg => msg.isUser);
            const title = firstUserMessage ? 
                firstUserMessage.content.substring(0, 50) + (firstUserMessage.content.length > 50 ? '...' : '') :
                'New Chat';
            
            userChats[currentChatId] = {
                id: currentChatId,
                title,
                messages,
                createdAt: userChats[currentChatId]?.createdAt || new Date().toISOString(),
                updatedAt: new Date().toISOString()
            };
            
            localStorage.setItem(`studybot_chats_${currentUser.email}`, JSON.stringify(userChats));
            updateChatHistory();
        }

        function loadUserChats() {
            if (!currentUser) return;
            
            const userChats = JSON.parse(localStorage.getItem(`studybot_chats_${currentUser.email}`) || '{}');
            chats = userChats;
            updateChatHistory();
            
            // Load most recent chat or start new one
            const chatIds = Object.keys(userChats);
            if (chatIds.length > 0) {
                const mostRecent = chatIds.reduce((a, b) => 
                    userChats[a].updatedAt > userChats[b].updatedAt ? a : b
                );
                loadChat(mostRecent);
            } else {
                startNewChat();
            }
        }

        function loadChat(chatId) {
            if (!chats[chatId]) return;
            
            currentChatId = chatId;
            clearMessages();
            
            const chat = chats[chatId];
            chat.messages.forEach(msg => {
                addMessage(msg.content, msg.isUser, false);
            });
            
            updateChatHistory();
            hideWelcomeMessage();
        }

        function updateChatHistory() {
            const historyContainer = document.getElementById('chatHistory');
            historyContainer.innerHTML = '';
            
            const sortedChats = Object.values(chats).sort((a, b) => 
                new Date(b.updatedAt) - new Date(a.updatedAt)
            );
            
            sortedChats.forEach(chat => {
                const chatItem = document.createElement('div');
                chatItem.className = `chat-item ${chat.id === currentChatId ? 'active' : ''}`;
                chatItem.onclick = () => loadChat(chat.id);
                
                chatItem.innerHTML = `
                    <div class="chat-title">${chat.title}</div>
                    <div class="chat-date">${formatDate(chat.updatedAt)}</div>
                `;
                
                historyContainer.appendChild(chatItem);
            });
        }

        function clearChatHistory() {
            document.getElementById('chatHistory').innerHTML = '';
        }

        function formatDate(dateString) {
            const date = new Date(dateString);
            const now = new Date();
            const diffMs = now - date;
            const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
            
            if (diffDays === 0) return 'Today';
            if (diffDays === 1) return 'Yesterday';
            if (diffDays < 7) return `${diffDays} days ago`;
            
            return date.toLocaleDateString();
        }

        // Message handling
        function addMessage(content, isUser = false, save = true) {
            const messageDiv = document.createElement('div');
            messageDiv.className = `message ${isUser ? 'user' : 'bot'}`;
            
            const avatar = document.createElement('div');
            avatar.className = 'avatar';
            avatar.textContent = isUser ? (currentUser ? currentUser.name.charAt(0).toUpperCase() : 'U') : '🤖';
            
            const messageContent = document.createElement('div');
            messageContent.className = 'message-content';
            if (content.includes("I'm specifically designed to help")) {
                messageContent.classList.add('error-message');
            }
            messageContent.textContent = content;
            
            messageDiv.appendChild(avatar);
            messageDiv.appendChild(messageContent);
            
            const messagesContainer = document.getElementById('messages');
            messagesContainer.appendChild(messageDiv);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
            
            hideWelcomeMessage();
            
            if (save && currentUser) {
                saveChat();
            }
        }

        function clearMessages() {
            const messagesContainer = document.getElementById('messages');
            const messages = messagesContainer.querySelectorAll('.message');
            messages.forEach(msg => msg.remove());
        }

        function showWelcomeMessage() {
            document.getElementById('welcomeMessage').style.display = 'block';
        }

        function hideWelcomeMessage() {
            document.getElementById('welcomeMessage').style.display = 'none';
        }

        // StudyBot knowledge base (using your existing offline system)
        const studyKnowledgeBase = {
            math: {
                keywords: ['math', 'mathematics', 'calculate', 'solve', 'equation', 'algebra', 'geometry', 'calculus', 'statistics', 'trigonometry', 'probability', 'fraction', 'decimal', 'percentage', 'number'],
                topics: {
                    algebra: {
                        patterns: ['algebra', 'variable', 'equation', 'linear', 'quadratic', 'polynomial'],
                        responses: [
                            "Algebra is about finding unknown values using letters (variables) like x and y. For example, in 2x + 5 = 13, we solve for x by subtracting 5 from both sides (2x = 8), then dividing by 2 (x = 4).",
                            "To solve linear equations: 1) Isolate the variable on one side, 2) Perform the same operation on both sides, 3) Simplify step by step. Remember: what you do to one side, you must do to the other!",
                            "Quadratic equations (ax² + bx + c = 0) can be solved using: 1) Factoring, 2) Quadratic formula: x = [-b ± √(b²-4ac)] / 2a, or 3) Completing the square."
                        ]
                    },
                    geometry: {
                        patterns: ['geometry', 'triangle', 'circle', 'square', 'rectangle', 'area', 'volume', 'perimeter', 'angle'],
                        responses: [
                            "Geometry deals with shapes and their properties. Key formulas: Rectangle area = length × width, Triangle area = ½ × base × height, Circle area = πr².",
                            "The Pythagorean theorem (a² + b² = c²) works for right triangles, where c is the hypotenuse (longest side). Very useful for finding missing side lengths!",
                            "Remember: Perimeter is the distance around a shape, Area is the space inside a 2D shape, Volume is the space inside a 3D shape."
                        ]
                    }
                }
            },
            science: {
                keywords: ['science', 'physics', 'chemistry', 'biology', 'experiment', 'molecule', 'cell', 'atom', 'energy', 'force', 'reaction', 'evolution', 'genetics'],
                topics: {
                    physics: {
                        patterns: ['physics', 'force', 'energy', 'motion', 'gravity', 'electricity', 'magnetism', 'wave', 'light', 'velocity', 'acceleration'],
                        responses: [
                            "Physics studies how things move and interact. Newton's three laws: 1) Objects at rest stay at rest unless acted upon, 2) F = ma (force equals mass times acceleration), 3) Every action has an equal and opposite reaction.",
                            "Energy cannot be created or destroyed, only transformed. Kinetic energy = ½mv², Potential energy = mgh. Energy constantly changes from one form to another."
                        ]
                    },
                    chemistry: {
                        patterns: ['chemistry', 'atom', 'molecule', 'reaction', 'element', 'compound', 'periodic table', 'bond', 'acid', 'base', 'ph'],
                        responses: [
                            "Chemistry is about atoms and how they combine. Atoms have protons (+), neutrons (neutral), and electrons (-). The number of protons determines the element.",
                            "Chemical bonds form when atoms share or transfer electrons. Covalent bonds share electrons, ionic bonds transfer electrons. Water (H₂O) has covalent bonds."
                        ]
                    },
                    biology: {
                        patterns: ['biology', 'cell', 'dna', 'genetics', 'evolution', 'photosynthesis', 'respiration', 'organism', 'ecosystem', 'anatomy'],
                        responses: [
                            "Biology studies living things. All life is made of cells - the basic unit of life. Plant cells have cell walls and chloroplasts, animal cells don't.",
                            "Photosynthesis: 6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂. Plants convert carbon dioxide and water into glucose and oxygen using sunlight energy."
                        ]
                    }
                }
            },
            programming: {
                keywords: ['programming', 'code', 'python', 'javascript', 'algorithm', 'function', 'variable', 'loop', 'array', 'object', 'debug'],
                topics: {
                    basics: {
                        patterns: ['variable', 'function', 'loop', 'condition', 'array', 'basic', 'beginner'],
                        responses: [
                            "Programming basics: Variables store data, Functions perform tasks, Loops repeat actions, Conditions make decisions. Think of code as step-by-step instructions for the computer.",
                            "Variables are like labeled boxes that hold information. In Python: name = 'Alice', age = 15. Choose descriptive names: 'student_grade' not 'x'."
                        ]
                    }
                }
            }
        };

        function isStudyRelated(message) {
            const lowercaseMessage = message.toLowerCase();
            return studyKeywords.some(keyword => lowercaseMessage.includes(keyword));
        }

        function generateOfflineResponse(message) {
            const lowercaseMessage = message.toLowerCase();
            
            if (!isStudyRelated(message)) {
                return "I'm specifically designed to help with study and academic-related questions. Please ask me something about your studies, homework, or any educational topic you'd like to learn about! 📚";
            }

            // Find the most relevant subject area
            let bestMatch = null;
            let bestScore = 0;

            for (const [subject, data] of Object.entries(studyKnowledgeBase)) {
                const subjectScore = data.keywords.filter(keyword => 
                    lowercaseMessage.includes(keyword)
                ).length;

                if (subjectScore > bestScore) {
                    bestScore = subjectScore;
                    bestMatch = { subject, data };
                }
            }

            if (bestMatch && bestScore > 0) {
                // Find the most specific topic within the subject
                let bestTopic = null;
                let bestTopicScore = 0;

                for (const [topicName, topicData] of Object.entries(bestMatch.data.topics)) {
                    const topicScore = topicData.patterns.filter(pattern => 
                        lowercaseMessage.includes(pattern)
                    ).length;

                    if (topicScore > bestTopicScore) {
                        bestTopicScore = topicScore;
                        bestTopic = { name: topicName, data: topicData };
                    }
                }

                if (bestTopic && bestTopicScore > 0) {
                    const responses = bestTopic.data.responses;
                    const selectedResponse = responses[Math.floor(Math.random() * responses.length)];
                    
                    let prefix = "";
                    if (lowercaseMessage.includes('how')) {
                        prefix = "Here's how to approach this: ";
                    } else if (lowercaseMessage.includes('what')) {
                        prefix = "Let me explain: ";
                    } else if (lowercaseMessage.includes('why')) {
                        prefix = "The reason is: ";
                    }
                    
                    return prefix + selectedResponse + "\n\nWould you like me to explain any specific part in more detail?";
                }
            }

            // Fallback responses
            const generalStudyResponses = [
                "That's an interesting academic question! While I have specific knowledge in many areas, I'd recommend checking your textbook or course materials for the most accurate information on this topic.",
                "This is a great study question! For detailed information on this topic, I suggest consulting your class notes, textbook, or asking your teacher for clarification.",
                "This is a valuable learning question! For comprehensive coverage of this topic, I recommend checking educational resources, your syllabus, or speaking with your teacher."
            ];

            const response = generalStudyResponses[Math.floor(Math.random() * generalStudyResponses.length)];
            return response + "\n\nI'm here to help with other study topics I know well, like basic math, science concepts, writing tips, or programming fundamentals!";
        }

        // 1. Function to call Gemini API (improved request, logging and extraction)
async function getGeminiResponse(message) {
  const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`;

  try {
    const response = await fetch(GEMINI_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: message }],
          },
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("❌ Gemini API HTTP Error:", response.status, errorText);
      return "Sorry, I couldn’t get an answer from the Gemini API right now.";
    }

    const data = await response.json();
    console.log("✅ Gemini raw response:", data);

    const text =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Sorry, I couldn’t parse the Gemini API response.";
    return text;
  } catch (err) {
    console.error("⚠️ getGeminiResponse error:", err);
    return "Failed to reach Gemini API. Please try again later.";
  }
}



// 2. Update sendMessage to use Gemini API for study-related questions
async function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const sendButton = document.getElementById('sendButton');
    const message = messageInput.value.trim();
    
    if (!message) return;

    // always create a chat id when none exists (previous logic required !currentUser too)
    if (!currentChatId) {
        currentChatId = generateChatId();
    }

    addMessage(message, true);
    messageInput.value = '';
    messageInput.style.height = 'auto';
    sendButton.disabled = true;
    showTypingIndicator();

    try {
        let response;
        if (isStudyRelated(message)) {
            // Use Gemini API for study-related questions
            response = await getGeminiResponse(message);
        } else {
            // Use offline fallback for non-study questions
            response = generateOfflineResponse(message);
        }
        removeTypingIndicator();
        addMessage(response, false);
        sendButton.disabled = false;
        messageInput.focus();
    } catch (error) {
        console.error('Error getting response:', error);
        removeTypingIndicator();
        addMessage("I'm having trouble processing your request right now. Please try again! 🤖", false);
        sendButton.disabled = false;
        messageInput.focus();
    }
}

// Typing indicator functions
        function showTypingIndicator() {
            const typingDiv = document.createElement('div');
            typingDiv.className = 'message bot';
            typingDiv.id = 'typing-indicator';
            
            const avatar = document.createElement('div');
            avatar.className = 'avatar';
            avatar.textContent = '🤖';
            
            const typingContent = document.createElement('div');
            typingContent.className = 'message-content typing-indicator';
            
            for (let i = 0; i < 3; i++) {
                const dot = document.createElement('div');
                dot.className = 'typing-dot';
                typingContent.appendChild(dot);
            }
            
            typingDiv.appendChild(avatar);
            typingDiv.appendChild(typingContent);
            
            const messagesContainer = document.getElementById('messages');
            messagesContainer.appendChild(typingDiv);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }

        function removeTypingIndicator() {
            const typingIndicator = document.getElementById('typing-indicator');
            if (typingIndicator) {
                typingIndicator.remove();
            }
        }

        // Utility functions
        function insertSuggestion(suggestion) {
            const messageInput = document.getElementById('messageInput');
            messageInput.value = suggestion;
            messageInput.focus();
            autoResize();
        }

        function autoResize() {
            const messageInput = document.getElementById('messageInput');
            messageInput.style.height = 'auto';
            messageInput.style.height = Math.min(messageInput.scrollHeight, 120) + 'px';
        }

        function toggleSidebar() {
            const sidebar = document.getElementById('sidebar');
            sidebar.classList.toggle('hidden');
        }

        function showNotification(message, type = 'info') {
            // Simple notification system
            const notification = document.createElement('div');
            notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                padding: 12px 20px;
                border-radius: 8px;
                color: white;
                font-weight: 500;
                z-index: 3000;
                animation: slideInRight 0.3s ease-out;
                ${type === 'success' ? 'background: #10b981;' : 
                  type === 'error' ? 'background: #ef4444;' : 'background: #6366f1;'}
            `;
            notification.textContent = message;
            
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.style.animation = 'slideOutRight 0.3s ease-out';
                setTimeout(() => document.body.removeChild(notification), 300);
            }, 3000);
        }

        // Event listeners setup
        function setupEventListeners() {
            const messageInput = document.getElementById('messageInput');
            
            messageInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    sendMessage();
                }
            });

            messageInput.addEventListener('input', autoResize);

            // Close modals on outside click
            document.addEventListener('click', (e) => {
                if (e.target.classList.contains('modal')) {
                    hideModal();
                }
            });

            // Focus input on page load
            messageInput.focus();
        }

        // Add CSS animations for notifications
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideInRight {
                from {
                    opacity: 0;
                    transform: translateX(100px);
                }
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
            }
            @keyframes slideOutRight {
                from {
                    opacity: 1;
                    transform: translateX(0);
                }
                to {
                    opacity: 0;
                    transform: translateX(100px);
                }
            }
        `;
        document.head.appendChild(style);

        // Initialize localStorage data structure
        function initializeStorage() {
            if (!localStorage.getItem('studybot_users')) {
                localStorage.setItem('studybot_users', '{}');
            }
        }

        // Call initialization
        initializeStorage();