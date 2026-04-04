// NyXia V3 Worker - Complete Version with Model Selector
// NE JAMAIS TOUCHER A NYXIA 2!

const VAULT_SECRET_VALUE = "nx-vlt-s3cr3t-K9x2mP7wQ4nR8fY5jD3aL6cZ1bH0tE";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS"
};

// Complete Dashboard HTML with beautiful login
const DASHBOARD_HTML = `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>NyXia V3</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:'Inter',system-ui;background:linear-gradient(135deg,#0a0b12 0%,#1a1b2e 50%,#0a0b12 100%);color:#e2e8f0;min-height:100vh}
::-webkit-scrollbar{width:8px}
::-webkit-scrollbar-track{background:#1a1b2e}
::-webkit-scrollbar-thumb{background:#4a4a6a;border-radius:4px}

/* Login Screen */
.login-screen{min-height:100vh;display:flex;align-items:center;justify-content:center;padding:20px;background:radial-gradient(ellipse at top,#1a1b2e 0%,#0a0b12 70%)}
.login-container{width:100%;max-width:420px;animation:fadeIn 0.5s ease}
@keyframes fadeIn{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
.login-logo{text-align:center;margin-bottom:40px}
.login-logo h1{font-size:48px;font-weight:700;background:linear-gradient(135deg,#a78bfa,#f472b6,#a78bfa);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:8px}
.login-logo p{color:#64748b;font-size:14px}
.login-card{background:rgba(30,32,50,0.8);backdrop-filter:blur(20px);border-radius:24px;padding:40px;border:1px solid rgba(167,139,250,0.2);box-shadow:0 25px 50px -12px rgba(0,0,0,0.5)}
.login-card h2{font-size:24px;font-weight:600;margin-bottom:8px;text-align:center}
.login-card .subtitle{text-align:center;color:#64748b;margin-bottom:32px}
.form-group{margin-bottom:20px}
.form-group label{display:block;font-size:13px;font-weight:500;color:#94a3b8;margin-bottom:8px}
.form-group input{width:100%;padding:14px 18px;background:rgba(15,16,26,0.8);border:1px solid rgba(100,116,139,0.3);border-radius:12px;color:#e2e8f0;font-size:15px;transition:all 0.3s}
.form-group input:focus{outline:none;border-color:#a78bfa;box-shadow:0 0 0 3px rgba(167,139,250,0.2)}
.form-group input::placeholder{color:#4a5568}
.btn-primary{width:100%;padding:14px;background:linear-gradient(135deg,#a78bfa,#8b5cf6);border:none;border-radius:12px;color:#fff;font-size:15px;font-weight:600;cursor:pointer;transition:all 0.3s}
.btn-primary:hover{transform:translateY(-2px);box-shadow:0 10px 30px rgba(167,139,250,0.4)}
.btn-primary:active{transform:translateY(0)}
.error-msg{background:rgba(239,68,68,0.1);border:1px solid rgba(239,68,68,0.3);color:#f87171;padding:12px 16px;border-radius:10px;font-size:14px;margin-top:16px;display:none;text-align:center}
.login-footer{text-align:center;margin-top:24px;color:#64748b;font-size:13px}
.login-footer a{color:#a78bfa;text-decoration:none}

/* Dashboard */
.dashboard{display:none;min-height:100vh}
.dashboard.active{display:flex}
.sidebar{width:280px;background:rgba(20,22,35,0.95);border-right:1px solid rgba(100,116,139,0.2);padding:20px 0;position:fixed;height:100vh;overflow-y:auto}
.sidebar-header{padding:0 20px 20px;border-bottom:1px solid rgba(100,116,139,0.2);margin-bottom:20px}
.sidebar-header h1{font-size:28px;font-weight:700;background:linear-gradient(135deg,#a78bfa,#f472b6);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.sidebar-header .version{font-size:12px;color:#64748b;margin-top:4px}
.nav-section{padding:0 12px;margin-bottom:20px}
.nav-section-title{font-size:11px;font-weight:600;color:#64748b;text-transform:uppercase;letter-spacing:1px;padding:0 12px;margin-bottom:8px}
.nav-item{display:flex;align-items:center;gap:12px;padding:12px 16px;border-radius:10px;cursor:pointer;transition:all 0.2s;color:#94a3b8;font-size:14px}
.nav-item:hover{background:rgba(167,139,250,0.1);color:#e2e8f0}
.nav-item.active{background:linear-gradient(135deg,rgba(167,139,250,0.2),rgba(244,114,182,0.1));color:#a78bfa;border-left:3px solid #a78bfa}
.nav-item svg{width:20px;height:20px}
.user-section{position:absolute;bottom:0;left:0;right:0;padding:20px;border-top:1px solid rgba(100,116,139,0.2);background:rgba(20,22,35,0.95)}
.user-info{display:flex;align-items:center;gap:12px}
.user-avatar{width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#a78bfa,#f472b6);display:flex;align-items:center;justify-content:center;font-weight:600}
.user-details{flex:1}
.user-name{font-size:14px;font-weight:500}
.user-email{font-size:12px;color:#64748b}
.logout-btn{background:none;border:none;color:#64748b;cursor:pointer;padding:8px;border-radius:8px}
.logout-btn:hover{background:rgba(239,68,68,0.1);color:#f87171}

.main-content{flex:1;margin-left:280px;padding:24px;min-height:100vh}
.content-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:24px}
.content-header h2{font-size:24px;font-weight:600}

/* Chat Panel */
.chat-container{display:flex;flex-direction:column;height:calc(100vh - 120px);background:rgba(20,22,35,0.6);border-radius:20px;border:1px solid rgba(100,116,139,0.2);overflow:hidden}
.chat-messages{flex:1;overflow-y:auto;padding:24px}
.message{max-width:80%;margin-bottom:16px;animation:msgIn 0.3s ease}
@keyframes msgIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
.message.user{margin-left:auto}
.message-bubble{padding:14px 18px;border-radius:16px;line-height:1.5}
.message.user .message-bubble{background:linear-gradient(135deg,#a78bfa,#8b5cf6);color:#fff;border-bottom-right-radius:4px}
.message.assistant .message-bubble{background:rgba(40,42,60,0.8);color:#e2e8f0;border-bottom-left-radius:4px}
.chat-input-area{padding:16px 24px;background:rgba(15,16,26,0.8);border-top:1px solid rgba(100,116,139,0.2)}
.chat-input-wrapper{display:flex;gap:12px;align-items:flex-end}
.chat-input{flex:1;background:rgba(30,32,50,0.8);border:1px solid rgba(100,116,139,0.3);border-radius:16px;padding:14px 18px;color:#e2e8f0;font-size:15px;resize:none;min-height:52px;max-height:150px}
.chat-input:focus{outline:none;border-color:#a78bfa}
.send-btn{width:52px;height:52px;border-radius:16px;background:linear-gradient(135deg,#a78bfa,#8b5cf6);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all 0.3s}
.send-btn:hover{transform:scale(1.05)}
.send-btn svg{width:24px;height:24px;color:#fff}
.typing-indicator{display:none;padding:8px 16px;color:#64748b;font-size:14px}
.typing-indicator.active{display:block}

/* Model Selector */
.model-selector-panel{padding:20px}
.model-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px;margin-top:20px}
.model-card{background:rgba(30,32,50,0.6);border:1px solid rgba(100,116,139,0.2);border-radius:16px;padding:20px;cursor:pointer;transition:all 0.3s}
.model-card:hover{border-color:#a78bfa;transform:translateY(-2px)}
.model-card.selected{border-color:#a78bfa;background:rgba(167,139,250,0.1);box-shadow:0 0 20px rgba(167,139,250,0.2)}
.model-card h3{font-size:16px;font-weight:600;margin-bottom:8px}
.model-card .provider{font-size:12px;color:#a78bfa;margin-bottom:8px}
.model-card .description{font-size:13px;color:#94a3b8}
.model-card .checkmark{display:none;position:absolute;top:12px;right:12px;width:24px;height:24px;background:#a78bfa;border-radius:50%;align-items:center;justify-content:center}
.model-card.selected .checkmark{display:flex}
.current-model{background:linear-gradient(135deg,rgba(167,139,250,0.2),rgba(244,114,182,0.1));border:1px solid rgba(167,139,250,0.3);border-radius:12px;padding:16px 20px;margin-bottom:20px;display:flex;align-items:center;gap:12px}
.current-model-label{font-size:13px;color:#94a3b8}
.current-model-name{font-size:16px;font-weight:600;color:#a78bfa}

/* Other Panels */
.panel{display:none;padding:20px}
.panel.active{display:block}
.empty-state{text-align:center;padding:60px 20px;color:#64748b}
.empty-state svg{width:64px;height:64px;margin-bottom:16px;opacity:0.5}
.empty-state h3{font-size:18px;font-weight:500;margin-bottom:8px;color:#94a3b8}

/* Responsive */
@media(max-width:768px){
.sidebar{transform:translateX(-100%);z-index:100}
.sidebar.open{transform:translateX(0)}
.main-content{margin-left:0}
.mobile-menu-btn{display:block}
}
</style>
</head>
<body>

<!-- Login Screen -->
<div class="login-screen" id="loginScreen">
<div class="login-container">
<div class="login-logo">
<h1>NyXia</h1>
<p>Ton assistante AI personnelle</p>
</div>
<div class="login-card">
<h2>Bienvenue</h2>
<p class="subtitle">Connecte-toi pour continuer</p>
<div class="form-group">
<label>Email</label>
<input type="email" id="loginEmail" placeholder="ton@email.com">
</div>
<div class="form-group">
<label>Mot de passe</label>
<input type="password" id="loginPassword" placeholder="••••••••">
</div>
<button class="btn-primary" onclick="handleLogin()">Se connecter</button>
<div class="error-msg" id="loginError"></div>
<div class="login-footer">
Version 3.2 • Propulse par OpenRouter
</div>
</div>
</div>
</div>

<!-- Dashboard -->
<div class="dashboard" id="dashboard">
<div class="sidebar">
<div class="sidebar-header">
<h1>NyXia</h1>
<div class="version">V3.2</div>
</div>
<div class="nav-section">
<div class="nav-section-title">Principal</div>
<div class="nav-item active" data-panel="chat" onclick="switchPanel('chat')">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
Chat
</div>
<div class="nav-item" data-panel="models" onclick="switchPanel('models')">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
Modeles
</div>
</div>
<div class="nav-section">
<div class="nav-section-title">Gestion</div>
<div class="nav-item" data-panel="projects" onclick="switchPanel('projects')">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
Projets
</div>
<div class="nav-item" data-panel="knowledge" onclick="switchPanel('knowledge')">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
Base de connaissance
</div>
<div class="nav-item" data-panel="tokens" onclick="switchPanel('tokens')">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>
Tokens
</div>
<div class="nav-item" data-panel="memory" onclick="switchPanel('memory')">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a10 10 0 1 0 10 10H12V2z"/><path d="M12 2a10 10 0 0 1 10 10"/></svg>
Memoire
</div>
</div>
<div class="user-section">
<div class="user-info">
<div class="user-avatar" id="userAvatar">D</div>
<div class="user-details">
<div class="user-name" id="userName">Diane</div>
<div class="user-email" id="userEmail">...</div>
</div>
<button class="logout-btn" onclick="handleLogout()" title="Deconnexion">
<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
</button>
</div>
</div>
</div>

<div class="main-content">
<!-- Chat Panel -->
<div class="panel active" id="chatPanel">
<div class="content-header">
<h2>Chat avec NyXia</h2>
<div class="current-model">
<span class="current-model-label">Modele actuel:</span>
<span class="current-model-name" id="currentModelDisplay">GLM-5</span>
</div>
</div>
<div class="chat-container">
<div class="chat-messages" id="chatMessages"></div>
<div class="typing-indicator" id="typingIndicator">NyXia ecrit...</div>
<div class="chat-input-area">
<div class="chat-input-wrapper">
<textarea class="chat-input" id="chatInput" placeholder="Ecris ton message..." rows="1" onkeydown="handleKeyDown(event)"></textarea>
<button class="send-btn" onclick="sendMessage()">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
</button>
</div>
</div>
</div>
</div>

<!-- Models Panel -->
<div class="panel" id="modelsPanel">
<div class="content-header">
<h2>Selecteur de Modele</h2>
</div>
<div class="model-selector-panel">
<div class="current-model">
<span class="current-model-label">Modele actif:</span>
<span class="current-model-name" id="currentModelName">GLM-5</span>
</div>
<div class="model-grid" id="modelGrid"></div>
</div>
</div>

<!-- Projects Panel -->
<div class="panel" id="projectsPanel">
<div class="content-header">
<h2>Projets</h2>
</div>
<div class="empty-state">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
<h3>Aucun projet</h3>
<p>Creer ton premier projet pour commencer</p>
</div>
</div>

<!-- Knowledge Panel -->
<div class="panel" id="knowledgePanel">
<div class="content-header">
<h2>Base de Connaissance</h2>
</div>
<div class="empty-state">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
<h3>Base de connaissance vide</h3>
<p>Ajoute des documents pour enrichir NyXia</p>
</div>
</div>

<!-- Tokens Panel -->
<div class="panel" id="tokensPanel">
<div class="content-header">
<h2>Tokens API</h2>
</div>
<div class="empty-state">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>
<h3>Gerer tes cles API</h3>
<p>Configure tes tokens pour les services externes</p>
</div>
</div>

<!-- Memory Panel -->
<div class="panel" id="memoryPanel">
<div class="content-header">
<h2>Memoire</h2>
</div>
<div class="empty-state">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a10 10 0 1 0 10 10H12V2z"/><path d="M12 2a10 10 0 0 1 10 10"/></svg>
<h3>Memoire de NyXia</h3>
<p>Les conversations et preferences sont sauvegardees ici</p>
</div>
</div>
</div>
</div>

<script>
let token = localStorage.getItem('nx_tok') || '';
let currentModel = localStorage.getItem('nx_model') || 'glm-5';
let chatHistory = [];

async function checkAuth() {
  if (!token) {
    showLogin();
    return;
  }
  try {
    const res = await fetch('/api/status', { headers: { 'Authorization': 'Bearer ' + token } });
    if (res.ok) {
      showDashboard();
      loadModels();
    } else {
      showLogin();
    }
  } catch (e) {
    showLogin();
  }
}

function showLogin() {
  document.getElementById('loginScreen').style.display = 'flex';
  document.getElementById('dashboard').classList.remove('active');
}

function showDashboard() {
  document.getElementById('loginScreen').style.display = 'none';
  document.getElementById('dashboard').classList.add('active');
}

async function handleLogin() {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  const errorEl = document.getElementById('loginError');
  
  if (!email || !password) {
    errorEl.textContent = 'Remplis tous les champs';
    errorEl.style.display = 'block';
    return;
  }
  
  try {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    
    if (data.success) {
      token = data.token;
      localStorage.setItem('nx_tok', token);
      if (data.user) {
        document.getElementById('userName').textContent = data.user.name || email;
        document.getElementById('userEmail').textContent = data.user.email || email;
        document.getElementById('userAvatar').textContent = (data.user.name || email).charAt(0).toUpperCase();
      }
      showDashboard();
      loadModels();
    } else {
      errorEl.textContent = data.message || 'Erreur de connexion';
      errorEl.style.display = 'block';
    }
  } catch (e) {
    errorEl.textContent = 'Erreur de connexion';
    errorEl.style.display = 'block';
  }
}

function handleLogout() {
  localStorage.removeItem('nx_tok');
  token = '';
  showLogin();
}

function switchPanel(panelId) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.getElementById(panelId + 'Panel').classList.add('active');
  document.querySelector('.nav-item[data-panel="' + panelId + '"]').classList.add('active');
}

async function loadModels() {
  try {
    const res = await fetch('/api/models', { headers: { 'Authorization': 'Bearer ' + token } });
    const data = await res.json();
    const grid = document.getElementById('modelGrid');
    grid.innerHTML = '';
    
    data.models.forEach(m => {
      const card = document.createElement('div');
      card.className = 'model-card' + (m.id === currentModel ? ' selected' : '');
      card.innerHTML = '<h3>' + m.name + '</h3><div class="provider">' + m.provider + '</div><div class="description">' + m.description + '</div>';
      card.onclick = () => selectModel(m.id, m.name);
      grid.appendChild(card);
    });
    
    updateModelDisplay();
  } catch (e) {
    console.error('Error loading models:', e);
  }
}

function selectModel(modelId, modelName) {
  currentModel = modelId;
  localStorage.setItem('nx_model', modelId);
  document.querySelectorAll('.model-card').forEach(c => c.classList.remove('selected'));
  event.currentTarget.classList.add('selected');
  updateModelDisplay();
}

function updateModelDisplay() {
  const modelNames = {
    'glm-5': 'GLM-5',
    'anthropic/claude-3.5-sonnet': 'Claude 3.5 Sonnet',
    'anthropic/claude-3-opus': 'Claude 3 Opus',
    'openai/gpt-4o': 'GPT-4o',
    'openai/gpt-4-turbo': 'GPT-4 Turbo',
    'meta-llama/llama-3.1-405b-instruct': 'Llama 3.1 405B',
    'google/gemini-pro-1.5': 'Gemini Pro 1.5',
    'mistralai/mistral-large': 'Mistral Large',
    'deepseek/deepseek-chat': 'DeepSeek'
  };
  const name = modelNames[currentModel] || currentModel;
  document.getElementById('currentModelDisplay').textContent = name;
  document.getElementById('currentModelName').textContent = name;
}

function handleKeyDown(e) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
}

async function sendMessage() {
  const input = document.getElementById('chatInput');
  const message = input.value.trim();
  if (!message) return;
  
  addMessage('user', message);
  input.value = '';
  
  const typing = document.getElementById('typingIndicator');
  typing.classList.add('active');
  
  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify({
        message: message,
        model: currentModel,
        history: chatHistory
      })
    });
    
    const data = await res.json();
    typing.classList.remove('active');
    
    if (data.error) {
      addMessage('assistant', 'Erreur: ' + data.error);
    } else {
      chatHistory.push({ role: 'user', content: message });
      chatHistory.push({ role: 'assistant', content: data.content });
      addMessage('assistant', data.content);
    }
  } catch (e) {
    typing.classList.remove('active');
    addMessage('assistant', 'Erreur de connexion. Verifie ta connexion.');
  }
}

function addMessage(role, content) {
  const container = document.getElementById('chatMessages');
  const msg = document.createElement('div');
  msg.className = 'message ' + role;
  msg.innerHTML = '<div class="message-bubble">' + escapeHtml(content) + '</div>';
  container.appendChild(msg);
  container.scrollTop = container.scrollHeight;
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

checkAuth();
</script>
</body>
</html>`;

// Token Functions
async function createSignedToken(data, secret) {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey("raw", encoder.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const payload = btoa(JSON.stringify(data));
  const sig = await crypto.subtle.sign("HMAC", key, encoder.encode(payload));
  const hex = Array.from(new Uint8Array(sig)).map(function(b) { return b.toString(16).padStart(2, "0"); }).join("");
  return payload + "." + hex;
}

async function verifySignedToken(tokenStr, secret) {
  if (!tokenStr || typeof tokenStr !== "string") return null;
  const dotIdx = tokenStr.lastIndexOf(".");
  if (dotIdx === -1) return null;
  const payload = tokenStr.slice(0, dotIdx);
  const hexSig = tokenStr.slice(dotIdx + 1);
  try {
    const encoder = new TextEncoder();
    const key = await crypto.subtle.importKey("raw", encoder.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["verify"]);
    const sigBytes = new Uint8Array(hexSig.match(/.{2}/g).map(function(b) { return parseInt(b, 16); }));
    const valid = await crypto.subtle.verify("HMAC", key, sigBytes, encoder.encode(payload));
    if (!valid) return null;
    const data = JSON.parse(atob(payload));
    if (data.exp && data.exp < Date.now()) return null;
    return data;
  } catch (e) {
    return null;
  }
}

async function requireAuth(request, secret) {
  const authHeader = request.headers.get("Authorization") || "";
  const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : authHeader;
  return await verifySignedToken(token, secret);
}

async function callOpenRouter(apiKey, model, messages) {
  const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": "Bearer " + apiKey,
      "Content-Type": "application/json",
      "HTTP-Referer": "https://nyxia.top",
      "X-Title": "NyXia V3"
    },
    body: JSON.stringify({
      model: model,
      messages: [
        { role: "system", content: "Tu es NyXia, une assistante AI francaise. Tu reponds toujours en francais de maniere naturelle et chaleureuse. Tu es l assistante personnelle de Diane." },
        ...messages
      ]
    })
  });
  if (!res.ok) {
    const errText = await res.text();
    throw new Error("OpenRouter error: " + errText);
  }
  const data = await res.json();
  return data.choices[0].message.content || "Je n ai pas pu generer de reponse.";
}

addEventListener("fetch", function(event) {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);
  
  // Use the hardcoded VAULT_SECRET
  const VAULT_SECRET = VAULT_SECRET_VALUE;
  
  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: cors });
  }
  
  if (url.pathname === "/" || url.pathname === "/index.html") {
    return new Response(DASHBOARD_HTML, { headers: { "Content-Type": "text/html; charset=utf-8", ...cors } });
  }
  
  if (url.pathname === "/api/status") {
    return Response.json({ 
      status: "online", 
      name: "NyXia V3", 
      version: "3.2",
      features: ["chat", "model-selector", "openrouter"],
      timestamp: new Date().toISOString() 
    }, { headers: cors });
  }
  
  if (url.pathname === "/api/auth/login" && request.method === "POST") {
    try {
      const body = await request.json();
      const email = body.email;
      const password = body.password;
      if (!email || !password) {
        return Response.json({ error: "Champs requis" }, { status: 400, headers: cors });
      }
      
      const accountRaw = await NYXIA_MEMORY.get("account:" + email.toLowerCase());
      if (!accountRaw) {
        return Response.json({ success: false, message: "Email ou mot de passe incorrect" }, { status: 401, headers: cors });
      }
      
      const account = JSON.parse(accountRaw);
      const encoder = new TextEncoder();
      const secret = VAULT_SECRET;
      const key = await crypto.subtle.importKey("raw", encoder.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
      const sig = await crypto.subtle.sign("HMAC", key, encoder.encode(password));
      const pwHash = Array.from(new Uint8Array(sig)).map(function(b) { return b.toString(16).padStart(2, "0"); }).join("");
      
      if (pwHash !== account.pwHash) {
        return Response.json({ success: false, message: "Email ou mot de passe incorrect" }, { status: 401, headers: cors });
      }
      
      const tokenData = {
        id: account.id,
        email: account.email,
        role: account.role,
        name: account.name,
        exp: Date.now() + 7 * 24 * 60 * 60 * 1000
      };
      const token = await createSignedToken(tokenData, secret);
      
      return Response.json({
        success: true,
        token: token,
        user: { id: account.id, email: account.email, name: account.name, role: account.role }
      }, { headers: cors });
    } catch (err) {
      return Response.json({ error: err.message }, { status: 500, headers: cors });
    }
  }
  
  const user = await requireAuth(request, VAULT_SECRET);
  if (!user) {
    return Response.json({ error: "Non autorise" }, { status: 401, headers: cors });
  }
  
  if (url.pathname === "/api/chat" && request.method === "POST") {
    try {
      const body = await request.json();
      const message = body.message;
      const model = body.model || "glm-5";
      const history = body.history || [];
      
      const openrouterKey = OPENROUTER_API_KEY;
      if (!openrouterKey) {
        return Response.json({ error: "OpenRouter API key non configure. Ajoute OPENROUTER_API_KEY dans les secrets du worker." }, { headers: cors });
      }
      
      const messages = history.slice();
      messages.push({ role: "user", content: message });
      
      let modelName = model;
      if (modelName === "glm-5") {
        modelName = "z-ai/glm-5";
      }
      
      const response = await callOpenRouter(openrouterKey, modelName, messages);
      return Response.json({ content: response, model: modelName }, { headers: cors });
    } catch (err) {
      return Response.json({ error: err.message }, { status: 500, headers: cors });
    }
  }
  
  if (url.pathname === "/api/models" && request.method === "GET") {
    return Response.json({
      models: [
        { id: "glm-5", name: "GLM-5", provider: "Z.ai", description: "Modele intelligent et creatif" },
        { id: "anthropic/claude-3.5-sonnet", name: "Claude 3.5 Sonnet", provider: "Anthropic", description: "Excellent pour l ecriture" },
        { id: "anthropic/claude-3-opus", name: "Claude 3 Opus", provider: "Anthropic", description: "Le plus puissant" },
        { id: "openai/gpt-4o", name: "GPT-4o", provider: "OpenAI", description: "Polyvalent et rapide" },
        { id: "openai/gpt-4-turbo", name: "GPT-4 Turbo", provider: "OpenAI", description: "Rapide et intelligent" },
        { id: "meta-llama/llama-3.1-405b-instruct", name: "Llama 3.1 405B", provider: "Meta", description: "Open-source puissant" },
        { id: "google/gemini-pro-1.5", name: "Gemini Pro 1.5", provider: "Google", description: "Contexte long" },
        { id: "mistralai/mistral-large", name: "Mistral Large", provider: "Mistral", description: "Modele francais" },
        { id: "deepseek/deepseek-chat", name: "DeepSeek", provider: "DeepSeek", description: "Rapport qualite/prix" }
      ],
      default: "glm-5"
    }, { headers: cors });
  }
  
  return Response.json({ error: "Non trouve" }, { status: 404, headers: cors });
}
