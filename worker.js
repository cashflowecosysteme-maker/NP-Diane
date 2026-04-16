// ═══════════════════════════════════════════════════════════════════════════
//  NyXia V3 — Worker Complet et Propre
// ═══════════════════════════════════════════════════════════════════════════

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS"
};

// ═══════════════════════════════════════════════════════════════════════════
//  HTML COMPLET
// ═══════════════════════════════════════════════════════════════════════════
const HTML_PAGE = `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
<link rel="icon" type="image/png" href="https://nyxiapublicationweb.com/NyXia.png">
<title>NyXia V3 — Ton Agente IA</title>
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=DM+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
:root {
  --bg: #0a0b12;
  --bg2: #0e1019;
  --bg3: #13151f;
  --bg4: #1a1d2e;
  --line: rgba(167,139,250,0.08);
  --line2: rgba(167,139,250,0.15);
  --p: #a78bfa;
  --p-dark: #7c3aed;
  --p-glow: rgba(167,139,250,0.3);
  --cyan: #22d3ee;
  --green: #34d399;
  --amber: #fbbf24;
  --red: #f87171;
  --pink: #f472b6;
  --t: #f0edff;
  --t2: #b8b3d4;
  --t3: #7a76a0;
  --r: 12px;
}
* { box-sizing: border-box; margin: 0; padding: 0; }
html, body { height: 100%; font-family: 'DM Sans', sans-serif; background: var(--bg); color: var(--t); overflow: hidden; }

/* LOGIN */
#login-screen {
  display: flex; align-items: center; justify-content: center; height: 100vh;
  background: radial-gradient(ellipse at 50% 0%, rgba(167,139,250,0.08) 0%, transparent 60%), linear-gradient(180deg, var(--bg) 0%, var(--bg2) 100%);
}
.login-card {
  width: 420px; max-width: 90vw; padding: 48px 36px; background: var(--bg2);
  border: 1px solid var(--line2); border-radius: 20px;
  box-shadow: 0 0 80px rgba(167,139,250,0.1), 0 20px 60px rgba(0,0,0,0.4); text-align: center;
}
.login-logo {
  width: 100px; height: 100px; border-radius: 50%; margin: 0 auto 24px; display: block;
  object-fit: cover; box-shadow: 0 0 40px var(--p-glow); border: 2px solid var(--line2);
  animation: float 4s ease-in-out infinite;
}
@keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
.login-card h2 {
  font-family: 'Orbitron', monospace; font-size: 26px; font-weight: 900; margin-bottom: 8px;
  background: linear-gradient(135deg, var(--p), var(--cyan));
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; letter-spacing: 2px;
}
.login-card .sub { font-size: 14px; color: var(--t3); margin-bottom: 32px; }
.login-card input {
  width: 100%; padding: 14px 18px; margin-bottom: 12px; background: var(--bg3);
  border: 1px solid var(--line2); border-radius: var(--r); color: var(--t);
  font-size: 15px; font-family: inherit; outline: none; transition: all 0.2s;
}
.login-card input:focus { border-color: var(--p); box-shadow: 0 0 0 3px var(--p-glow); }
.login-card input::placeholder { color: var(--t3); }
.login-btn {
  width: 100%; padding: 14px; margin-top: 8px;
  background: linear-gradient(135deg, var(--p-dark), var(--p)); border: none; border-radius: var(--r);
  color: #fff; font-size: 15px; font-weight: 700; font-family: inherit; cursor: pointer; transition: all 0.2s;
}
.login-btn:hover { box-shadow: 0 0 30px var(--p-glow); transform: translateY(-2px); }
.login-btn:disabled { opacity: 0.5; cursor: not-allowed; transform: none; box-shadow: none; }
.login-err { color: var(--red); font-size: 13px; margin-top: 14px; min-height: 20px; }

/* SHELL */
#shell { display: none; height: 100vh; }
#sidebar {
  width: 280px; background: var(--bg2); border-right: 1px solid var(--line);
  display: flex; flex-direction: column; flex-shrink: 0; transition: width 0.3s;
}
#sidebar.collapsed { width: 64px; }
.sb-header { padding: 20px; border-bottom: 1px solid var(--line); display: flex; align-items: center; justify-content: space-between; }
.sb-logo {
  font-family: 'Orbitron', monospace; font-weight: 900; font-size: 16px;
  background: linear-gradient(135deg, var(--p), var(--cyan));
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  letter-spacing: 2px; white-space: nowrap; overflow: hidden;
}
#sidebar.collapsed .sb-logo { opacity: 0; width: 0; }
.sb-toggle {
  width: 32px; height: 32px; border-radius: 8px; border: 1px solid var(--line2);
  background: var(--bg3); color: var(--t3); cursor: pointer;
  display: flex; align-items: center; justify-content: center; transition: all 0.15s; flex-shrink: 0;
}
.sb-toggle:hover { color: var(--p); border-color: var(--p); }
.sb-section { padding: 12px 0; }
.sb-section-title { font-size: 11px; font-weight: 700; color: var(--t3); text-transform: uppercase; letter-spacing: 1px; padding: 8px 20px; }
.sb-item {
  display: flex; align-items: center; gap: 12px; padding: 12px 20px; font-size: 14px;
  font-weight: 500; color: var(--t2); cursor: pointer; transition: all 0.15s;
  border-left: 2px solid transparent; white-space: nowrap; overflow: hidden;
}
.sb-item:hover { color: var(--t); background: rgba(167,139,250,0.05); }
.sb-item.active { color: var(--p); background: rgba(167,139,250,0.08); border-left-color: var(--p); }
.sb-icon { font-size: 18px; width: 24px; text-align: center; flex-shrink: 0; }
#sidebar.collapsed .sb-item span { display: none; }
#sidebar.collapsed .sb-section-title { display: none; }
.sb-new-chat {
  margin: 12px 16px; padding: 12px; border-radius: var(--r); border: 1px dashed rgba(167,139,250,0.4);
  background: rgba(167,139,250,0.05); color: var(--p); font-size: 13px; font-weight: 600;
  cursor: pointer; transition: all 0.2s; display: flex; align-items: center; justify-content: center; gap: 8px; font-family: inherit;
}
.sb-new-chat:hover { background: rgba(167,139,250,0.12); border-color: var(--p); }
#sidebar.collapsed .sb-new-chat span { display: none; }
.sb-bottom { margin-top: auto; border-top: 1px solid var(--line); padding: 16px; }
.sb-user { display: flex; align-items: center; gap: 12px; overflow: hidden; cursor: pointer; padding: 8px; border-radius: 10px; transition: all 0.15s; }
.sb-user:hover { background: rgba(167,139,250,0.08); }
.sb-avatar {
  width: 40px; height: 40px; border-radius: 12px; background: linear-gradient(135deg, var(--p), var(--cyan));
  display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 16px; color: #fff; flex-shrink: 0;
}
.sb-uinfo { overflow: hidden; }
.sb-uname { font-size: 14px; font-weight: 700; color: var(--t); white-space: nowrap; }
.sb-urole { font-size: 11px; color: var(--p); font-weight: 600; letter-spacing: 0.5px; margin-top: 2px; }
#sidebar.collapsed .sb-uinfo { display: none; }

/* MAIN */
#main { flex: 1; display: flex; flex-direction: column; overflow: hidden; }
#topbar {
  padding: 14px 24px; display: flex; align-items: center; justify-content: space-between;
  border-bottom: 1px solid var(--line); background: var(--bg2); flex-shrink: 0;
}
.tb-left { display: flex; align-items: center; gap: 12px; }
.tb-status { width: 10px; height: 10px; border-radius: 50%; background: var(--green); box-shadow: 0 0 10px var(--green); }
.tb-title { font-family: 'Orbitron', monospace; font-size: 14px; font-weight: 700; color: var(--t); letter-spacing: 1px; }
.tb-right { display: flex; align-items: center; gap: 10px; }
.tb-btn {
  padding: 8px 14px; border-radius: 8px; font-size: 12px; font-weight: 600; color: var(--t2);
  border: 1px solid var(--line2); background: transparent; cursor: pointer; transition: all 0.15s;
  display: flex; align-items: center; gap: 6px; font-family: inherit;
}
.tb-btn:hover { color: var(--t); border-color: var(--p); }
.user-badge { font-size: 12px; color: var(--p); background: rgba(167,139,250,0.12); padding: 6px 12px; border-radius: 8px; font-weight: 700; letter-spacing: 0.5px; }

/* CONTENT PANELS */
.content-panel { display: none; flex: 1; flex-direction: column; overflow: hidden; }
.content-panel.active { display: flex; }

/* CHAT */
#chat-zone {
  flex: 1; overflow-y: auto; padding: 28px; display: flex; flex-direction: column; gap: 24px;
  background: radial-gradient(ellipse at 50% 100%, rgba(167,139,250,0.03) 0%, transparent 60%);
}
#chat-zone::-webkit-scrollbar { width: 5px; }
#chat-zone::-webkit-scrollbar-thumb { background: var(--line2); border-radius: 3px; }
.welcome { text-align: center; padding: 60px 24px; max-width: 650px; margin: auto; }
.welcome-icon {
  width: 90px; height: 90px; border-radius: 24px; margin: 0 auto 24px;
  background: linear-gradient(135deg, var(--p-dark), var(--p), var(--cyan));
  display: flex; align-items: center; justify-content: center; font-size: 40px;
  box-shadow: 0 0 50px var(--p-glow); animation: float 4s ease-in-out infinite;
}
.welcome h2 {
  font-family: 'Orbitron', monospace; font-size: 26px; font-weight: 900; margin-bottom: 12px;
  background: linear-gradient(135deg, var(--p), var(--cyan));
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
}
.welcome p { font-size: 15px; color: var(--t2); line-height: 1.8; margin-bottom: 32px; }
.suggestions { display: flex; flex-direction: column; gap: 10px; max-width: 520px; margin: 0 auto; }
.suggest-btn {
  padding: 14px 20px; border-radius: var(--r); border: 1px solid var(--line2);
  background: var(--bg3); color: var(--t2); font-size: 14px; font-weight: 500;
  cursor: pointer; text-align: left; transition: all 0.2s; font-family: inherit;
}
.suggest-btn:hover { border-color: var(--p); color: var(--t); background: rgba(167,139,250,0.08); transform: translateX(4px); }
.msg-row { display: flex; gap: 14px; align-items: flex-start; animation: fadeUp 0.3s ease both; }
@keyframes fadeUp { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: none; } }
.msg-row.user { flex-direction: row-reverse; }
.msg-avatar { width: 40px; height: 40px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 18px; flex-shrink: 0; }
.msg-avatar.nyxia { background: linear-gradient(135deg, var(--p-dark), var(--p)); font-size: 0; box-shadow: 0 0 20px var(--p-glow); }
.msg-avatar.nyxia img { width: 100%; height: 100%; border-radius: 12px; object-fit: cover; }
.msg-avatar.user-av { background: var(--bg4); border: 1px solid var(--line2); font-size: 15px; font-weight: 700; color: var(--p); }
.msg-content { max-width: 75%; display: flex; flex-direction: column; gap: 8px; }
.msg-row.user .msg-content { align-items: flex-end; }
.msg-bubble { padding: 16px 20px; border-radius: 18px; font-size: 15px; line-height: 1.75; word-wrap: break-word; }
.msg-bubble.nyxia { background: var(--bg3); border: 1px solid var(--line); border-bottom-left-radius: 4px; color: var(--t2); }
.msg-bubble.user { background: linear-gradient(135deg, var(--p-dark), var(--p)); color: #fff; border-bottom-right-radius: 4px; }
.msg-bubble pre { background: rgba(0,0,0,0.3); border-radius: 10px; padding: 14px; margin: 12px 0; font-family: 'JetBrains Mono', monospace; font-size: 13px; overflow-x: auto; border: 1px solid rgba(167,139,250,0.2); white-space: pre-wrap; }
.msg-bubble code { font-family: 'JetBrains Mono', monospace; font-size: 13px; background: rgba(0,0,0,0.3); padding: 2px 7px; border-radius: 5px; }
.msg-bubble strong { color: var(--t); }
.msg-bubble ul, .msg-bubble ol { margin: 8px 0; padding-left: 20px; }
.msg-bubble li { margin-bottom: 4px; }
.msg-time { font-size: 11px; color: var(--t3); padding: 0 4px; }
.msg-actions { display: flex; flex-wrap: wrap; gap: 6px; opacity: 0; transition: opacity 0.2s; }
.msg-row:hover .msg-actions { opacity: 1; }
.action-btn {
  padding: 6px 12px; border-radius: 8px; border: 1px solid var(--line2); background: var(--bg4);
  color: var(--t3); font-size: 11px; font-weight: 600; cursor: pointer; transition: all 0.15s;
  font-family: inherit; display: flex; align-items: center; gap: 4px;
}
.action-btn:hover { border-color: var(--p); color: var(--t); background: rgba(167,139,250,0.08); }
.action-btn.copied { border-color: var(--green); color: var(--green); background: rgba(52,211,153,0.08); }
.typing-indicator { display: none; align-items: center; gap: 14px; }
.typing-indicator.show { display: flex; }
.typing-dots { display: flex; gap: 5px; padding: 16px 20px; background: var(--bg3); border: 1px solid var(--line); border-radius: 18px; border-bottom-left-radius: 4px; align-items: center; }
.typing-dots span { width: 8px; height: 8px; border-radius: 50%; background: var(--p); animation: bounce 0.8s ease infinite; }
.typing-dots span:nth-child(2) { animation-delay: 0.15s; }
.typing-dots span:nth-child(3) { animation-delay: 0.3s; }
@keyframes bounce { 0%, 100% { transform: translateY(0); opacity: 0.5; } 50% { transform: translateY(-8px); opacity: 1; } }
.typing-timer { margin-left: 10px; font-size: 12px; color: var(--t3); font-family: 'JetBrains Mono', monospace; min-width: 24px; }

/* INPUT */
#input-zone { padding: 20px 28px 24px; border-top: 1px solid var(--line); background: var(--bg2); flex-shrink: 0; }
.input-bar { display: flex; align-items: flex-end; gap: 12px; background: var(--bg3); border: 1px solid var(--line2); border-radius: 16px; padding: 12px 14px; transition: all 0.2s; }
.input-bar:focus-within { border-color: var(--p); box-shadow: 0 0 0 3px var(--p-glow); }
#msg-input { flex: 1; background: transparent; border: none; outline: none; color: var(--t); font-family: inherit; font-size: 15px; resize: none; min-height: 40px; max-height: 180px; line-height: 1.5; padding: 8px 0; }
#msg-input::placeholder { color: var(--t3); }
.send-btn { width: 44px; height: 44px; border-radius: 12px; border: none; background: linear-gradient(135deg, var(--p-dark), var(--p)); color: #fff; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 18px; transition: all 0.2s; flex-shrink: 0; }
.send-btn:hover { transform: scale(1.08); box-shadow: 0 0 24px var(--p-glow); }
.send-btn:disabled { opacity: 0.4; cursor: not-allowed; transform: none; box-shadow: none; }
.input-hint { text-align: center; font-size: 12px; color: var(--t3); margin-top: 10px; }
kbd { background: var(--bg4); border: 1px solid var(--line2); border-radius: 5px; padding: 2px 6px; font-family: 'JetBrains Mono', monospace; font-size: 11px; }

/* ACCOUNT */
.account-container { flex: 1; overflow-y: auto; padding: 28px; max-width: 600px; margin: 0 auto; }
.account-section { background: var(--bg3); border: 1px solid var(--line); border-radius: 16px; padding: 24px; margin-bottom: 20px; }
.account-section h4 { font-size: 16px; font-weight: 700; color: var(--t); margin-bottom: 16px; display: flex; align-items: center; gap: 8px; }
.form-group { margin-bottom: 16px; }
.form-group label { display: block; font-size: 12px; font-weight: 600; color: var(--t2); margin-bottom: 6px; }
.form-group input { width: 100%; padding: 12px 16px; background: var(--bg4); border: 1px solid var(--line2); border-radius: 10px; color: var(--t); font-size: 14px; font-family: inherit; outline: none; transition: border-color 0.15s; }
.form-group input:focus { border-color: var(--p); }
.form-group input::placeholder { color: var(--t3); }
.btn-save { padding: 12px 24px; border-radius: 10px; border: none; background: linear-gradient(135deg, var(--p-dark), var(--p)); color: #fff; cursor: pointer; font-size: 14px; font-weight: 700; font-family: inherit; transition: all 0.15s; }
.btn-save:hover { box-shadow: 0 0 20px var(--p-glow); }
.danger-zone { border-color: rgba(248,113,113,0.3); }
.danger-zone h4 { color: var(--red); }
.btn-danger { padding: 12px 24px; border-radius: 10px; border: 1px solid var(--red); background: transparent; color: var(--red); cursor: pointer; font-size: 14px; font-weight: 600; font-family: inherit; transition: all 0.15s; }
.btn-danger:hover { background: rgba(248,113,113,0.1); }

/* TOKENS */
.integrations-container { flex: 1; overflow-y: auto; padding: 28px; max-width: 800px; margin: 0 auto; }
.integration-card { background: var(--bg3); border: 1px solid var(--line); border-radius: 16px; padding: 24px; margin-bottom: 20px; }
.int-header { display: flex; align-items: center; gap: 16px; margin-bottom: 16px; }
.int-icon { width: 50px; height: 50px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 24px; flex-shrink: 0; }
.int-info h4 { font-size: 16px; font-weight: 700; color: var(--t); margin-bottom: 4px; }
.int-status { font-size: 12px; font-weight: 600; padding: 4px 10px; border-radius: 20px; }
.int-status.connected { background: rgba(52,211,153,0.15); color: var(--green); }
.int-status.disconnected { background: rgba(248,113,113,0.15); color: var(--red); }
.int-desc { font-size: 14px; color: var(--t2); line-height: 1.6; margin-bottom: 16px; }
.int-btn { padding: 12px 24px; border-radius: 10px; border: none; background: linear-gradient(135deg, var(--p-dark), var(--p)); color: #fff; cursor: pointer; font-size: 14px; font-weight: 700; font-family: inherit; transition: all 0.15s; }
.int-btn:hover { box-shadow: 0 0 20px var(--p-glow); }

/* TOAST */
.toast { position: fixed; bottom: 28px; left: 50%; transform: translateX(-50%) translateY(80px); background: var(--green); color: #000; padding: 12px 24px; border-radius: 50px; font-weight: 700; font-size: 14px; transition: transform 0.3s; z-index: 300; opacity: 0; font-family: inherit; }
.toast.show { transform: translateX(-50%) translateY(0); opacity: 1; }
.toast.error { background: var(--red); color: #fff; }

/* RESPONSIVE */
@media (max-width: 768px) { #sidebar { display: none; } #chat-zone { padding: 20px; } #input-zone { padding: 16px 20px 20px; } .msg-content { max-width: 90%; } .user-badge { display: none; } .msg-actions { opacity: 1; } }
</style>
</head>
<body>

<div id="login-screen">
  <div class="login-card">
    <img class="login-logo" src="https://nyxiapublicationweb.com/NyXia.png" alt="NyXia">
    <h2>NyXia V3</h2>
    <p class="sub">Ton agente IA personnelle</p>
    <input type="email" id="login-email" placeholder="Email" autocomplete="email">
    <input type="password" id="login-pass" placeholder="Mot de passe" autocomplete="current-password">
    <button class="login-btn" id="login-btn" onclick="doLogin()">Connexion</button>
    <div class="login-err" id="login-err"></div>
  </div>
</div>

<div id="shell" style="display:none">
  <div id="sidebar">
    <div class="sb-header">
      <div class="sb-logo">NyXia V3 ✦</div>
      <button class="sb-toggle" onclick="toggleSidebar()" title="Réduire">◀</button>
    </div>
    <button class="sb-new-chat" onclick="newConversation()">
      <span style="font-size:20px">✦</span><span>Nouvelle conversation</span>
    </button>
    <div class="sb-section">
      <div class="sb-section-title">Principal</div>
      <div class="sb-item active" onclick="showPanel('chat')"><span class="sb-icon">💬</span><span>Chat</span></div>
    </div>
    <div class="sb-section">
      <div class="sb-section-title">Compte</div>
      <div class="sb-item" onclick="showPanel('account')"><span class="sb-icon">🔐</span><span>Mon compte</span></div>
      <div class="sb-item" onclick="showPanel('tokens')"><span class="sb-icon">🔑</span><span>Tokens</span></div>
      <div class="sb-item" onclick="doLogout()"><span class="sb-icon">🚪</span><span>Quitter</span></div>
    </div>
    <div class="sb-bottom">
      <div class="sb-user" onclick="showPanel('account')">
        <div class="sb-avatar" id="sb-avatar">D</div>
        <div class="sb-uinfo">
          <div class="sb-uname" id="sb-uname">Diane</div>
          <div class="sb-urole">✦ CRÉATRICE</div>
        </div>
      </div>
    </div>
  </div>

  <div id="main">
    <div id="topbar">
      <div class="tb-left">
        <div class="tb-status"></div>
        <span class="tb-title" id="topbar-title">💬 Chat avec NyXia</span>
      </div>
      <div class="tb-right">
        <span class="user-badge" id="topbar-badge">Diane</span>
      </div>
    </div>

    <div id="panel-chat" class="content-panel active">
      <div id="chat-zone">
        <div class="welcome" id="welcome-screen">
          <div class="welcome-icon">✦</div>
          <h2>Bonjour Diane!</h2>
          <p>Je suis NyXia, ton agente IA. Comment puis-je t'aider aujourd'hui?</p>
          <div class="suggestions">
            <button class="suggest-btn" onclick="useSuggestion(this)">📝 Aide-moi avec mon projet d'écriture</button>
            <button class="suggest-btn" onclick="useSuggestion(this)">💻 Code quelque chose pour moi</button>
            <button class="suggest-btn" onclick="useSuggestion(this)">📊 Organise ma semaine</button>
          </div>
        </div>
        <div class="typing-indicator" id="typing">
          <div class="msg-avatar nyxia"><img src="https://nyxiapublicationweb.com/NyXia.png"></div>
          <div class="typing-dots"><span></span><span></span><span></span><span class="typing-timer" id="typing-timer"></span></div>
        </div>
      </div>
      <div id="input-zone">
        <div class="input-bar">
          <textarea id="msg-input" placeholder="Écris à NyXia..." rows="1" onkeydown="onKey(event)" oninput="autoResize(this)"></textarea>
          <button class="send-btn" onclick="send()" title="Envoyer">➤</button>
        </div>
        <div class="input-hint"><kbd>Entrée</kbd> pour envoyer · <kbd>Maj</kbd>+<kbd>Entrée</kbd> pour nouvelle ligne</div>
      </div>
    </div>

    <div id="panel-account" class="content-panel">
      <div class="account-container">
        <div class="account-section">
          <h4>👤 Informations</h4>
          <div class="form-group"><label>Nom</label><input type="text" id="account-name" placeholder="Ton nom"></div>
          <div class="form-group"><label>Email</label><input type="email" id="account-email" placeholder="Ton email"></div>
          <button class="btn-save" onclick="saveAccountInfo()">Sauvegarder</button>
        </div>
        <div class="account-section">
          <h4>🔐 Changer le mot de passe</h4>
          <div class="form-group"><label>Ancien mot de passe</label><input type="password" id="old-pass" placeholder="Ancien"></div>
          <div class="form-group"><label>Nouveau mot de passe</label><input type="password" id="new-pass" placeholder="Nouveau (min 8 car.)"></div>
          <div class="form-group"><label>Confirmer</label><input type="password" id="confirm-pass" placeholder="Confirmer"></div>
          <button class="btn-save" onclick="changePassword()">Changer</button>
        </div>
        <div class="account-section danger-zone">
          <h4>⚠️ Danger</h4>
          <p style="font-size:13px;color:var(--t3);margin-bottom:16px">Actions irréversibles.</p>
          <button class="btn-danger" onclick="clearAllData()">🗑 Effacer toutes mes données</button>
        </div>
      </div>
    </div>

    <div id="panel-tokens" class="content-panel">
      <div class="integrations-container">
        <h3 style="font-size:22px;font-weight:700;margin-bottom:24px">🔑 Tokens API</h3>
        <div class="integration-card">
          <div class="int-header">
            <div class="int-icon" style="background:linear-gradient(135deg,#8b5cf6,#a855f7)">🧠</div>
            <div class="int-info"><h4>OpenRouter</h4><span class="int-status disconnected" id="or-status">Non configuré</span></div>
          </div>
          <p class="int-desc">Clé API pour le cerveau de NyXia.</p>
          <div class="form-group"><input type="password" id="token-openrouter" placeholder="sk-or-v1-..."></div>
          <button class="int-btn" onclick="saveToken('openrouter')">💾 Sauvegarder</button>
        </div>
        <div class="integration-card">
          <div class="int-header">
            <div class="int-icon" style="background:linear-gradient(135deg,#1f2937,#374151)">🐙</div>
            <div class="int-info"><h4>GitHub</h4><span class="int-status disconnected" id="gh-status">Non configuré</span></div>
          </div>
          <p class="int-desc">Pousser du code et gérer tes repos.</p>
          <div class="form-group"><input type="password" id="token-github" placeholder="ghp_..."></div>
          <button class="int-btn" onclick="saveToken('github')">💾 Sauvegarder</button>
        </div>
        <div class="integration-card">
          <div class="int-header">
            <div class="int-icon" style="background:linear-gradient(135deg,#f97316,#ea580c)">☁️</div>
            <div class="int-info"><h4>Cloudflare</h4><span class="int-status disconnected" id="cf-status">Non configuré</span></div>
          </div>
          <p class="int-desc">Déployer des Workers et gérer le DNS.</p>
          <div class="form-group"><input type="password" id="token-cloudflare" placeholder="cfat_..."></div>
          <button class="int-btn" onclick="saveToken('cloudflare')">💾 Sauvegarder</button>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="toast" id="toast"></div>

<script>
let API = '/api';
let token = localStorage.getItem('nyxia_token') || '';
let user = null;
let messages = [];
let typingTimer = null;

async function doLogin() {
  const email = document.getElementById('login-email').value.trim();
  const pass = document.getElementById('login-pass').value;
  const btn = document.getElementById('login-btn');
  const err = document.getElementById('login-err');
  if (!email || !pass) { err.textContent = 'Remplis tous les champs'; return; }
  btn.disabled = true; btn.textContent = 'Connexion...'; err.textContent = '';
  try {
    const res = await fetch(API + '/auth/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password: pass }) });
    const data = await res.json();
    if (data.success) { token = data.token; user = data.user; localStorage.setItem('nyxia_token', token); showShell(); }
    else { err.textContent = data.message || 'Erreur'; }
  } catch (e) { err.textContent = 'Erreur réseau'; }
  btn.disabled = false; btn.textContent = 'Connexion';
}

async function init() {
  if (!token) return;
  try {
    const res = await fetch(API + '/status', { headers: { 'Authorization': 'Bearer ' + token } });
    if (res.ok) { user = { name: 'Diane', email: 'diane@nyxia.top' }; showShell(); }
  } catch (e) {}
}

function showShell() {
  document.getElementById('login-screen').style.display = 'none';
  document.getElementById('shell').style.display = 'flex';
  if (user) {
    document.getElementById('sb-uname').textContent = user.name || user.email;
    document.getElementById('sb-avatar').textContent = (user.name || user.email)[0].toUpperCase();
    document.getElementById('topbar-badge').textContent = user.name || 'User';
    document.getElementById('account-name').value = user.name || '';
    document.getElementById('account-email').value = user.email || '';
  }
}

function showPanel(id) {
  document.querySelectorAll('.content-panel').forEach(p => p.classList.remove('active'));
  document.getElementById('panel-' + id).classList.add('active');
  document.querySelectorAll('.sb-item').forEach(el => el.classList.remove('active'));
  event?.target?.closest('.sb-item')?.classList.add('active');
  const titles = { chat: '💬 Chat', account: '🔐 Mon compte', tokens: '🔑 Tokens' };
  document.getElementById('topbar-title').textContent = titles[id] || 'NyXia';
}

function autoResize(el) { el.style.height = 'auto'; el.style.height = Math.min(el.scrollHeight, 180) + 'px'; }
function onKey(e) { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); } }

async function send() {
  const input = document.getElementById('msg-input');
  const text = input.value.trim();
  if (!text) return;
  input.value = ''; input.style.height = 'auto';
  addMessage('user', text);
  document.getElementById('welcome-screen').style.display = 'none';
  showTyping();
  messages.push({ role: 'user', content: text });
  try {
    const res = await fetch(API + '/chat', { method: 'POST', headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token }, body: JSON.stringify({ messages }) });
    const data = await res.json();
    hideTyping();
    if (data.content) { addMessage('nyxia', data.content); messages.push({ role: 'assistant', content: data.content }); }
    else if (data.error) { addMessage('nyxia', '⚠️ ' + data.error); }
  } catch (e) { hideTyping(); addMessage('nyxia', '⚠️ Erreur de connexion'); }
}

function addMessage(role, content) {
  const zone = document.getElementById('chat-zone');
  const typing = document.getElementById('typing');
  const row = document.createElement('div');
  row.className = 'msg-row ' + (role === 'user' ? 'user' : '');
  const avatar = role === 'user'
    ? '<div class="msg-avatar user-av">' + (user?.name || 'D')[0] + '</div>'
    : '<div class="msg-avatar nyxia"><img src="https://nyxiapublicationweb.com/NyXia.png"></div>';
  const actions = role === 'nyxia' ? '<div class="msg-actions"><button class="action-btn" onclick="copyText(this)">📋 Copier</button></div>' : '';
  row.innerHTML = avatar + '<div class="msg-content"><div class="msg-bubble ' + (role === 'user' ? 'user' : 'nyxia') + '">' + formatContent(content) + '</div>' + actions + '<div class="msg-time">' + new Date().toLocaleTimeString('fr-CA', {hour:'2-digit',minute:'2-digit'}) + '</div></div>';
  zone.insertBefore(row, typing);
  zone.scrollTop = zone.scrollHeight;
}

function formatContent(t) {
  return t.replace(/\`\`\`(\w*)\n?([\s\S]*?)\`\`\`/g, '<pre><code>$2</code></pre>').replace(/\`([^\`]+)\`/g, '<code>$1</code>').replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>');
}

function copyText(btn) {
  const text = btn.closest('.msg-content').querySelector('.msg-bubble').textContent;
  navigator.clipboard.writeText(text).then(() => { btn.classList.add('copied'); btn.textContent = '✓ Copié!'; setTimeout(() => { btn.classList.remove('copied'); btn.textContent = '📋 Copier'; }, 1500); });
}

function showTyping() { document.getElementById('typing').classList.add('show'); let s = 0; typingTimer = setInterval(() => { s++; document.getElementById('typing-timer').textContent = s + 's'; }, 1000); }
function hideTyping() { document.getElementById('typing').classList.remove('show'); if (typingTimer) clearInterval(typingTimer); document.getElementById('typing-timer').textContent = ''; }

function toggleSidebar() { document.getElementById('sidebar').classList.toggle('collapsed'); }
function newConversation() { messages = []; const zone = document.getElementById('chat-zone'); zone.innerHTML = '<div class="welcome" id="welcome-screen"><div class="welcome-icon">✦</div><h2>Bonjour Diane!</h2><p>Je suis NyXia. Comment puis-je t\\'aider?</p></div><div class="typing-indicator" id="typing"><div class="msg-avatar nyxia"><img src="https://nyxiapublicationweb.com/NyXia.png"></div><div class="typing-dots"><span></span><span></span><span></span></div></div>'; showPanel('chat'); }
function useSuggestion(btn) { document.getElementById('msg-input').value = btn.textContent.substring(2).trim(); document.getElementById('msg-input').focus(); }
function doLogout() { localStorage.removeItem('nyxia_token'); location.reload(); }
function saveAccountInfo() { if (user) { user.name = document.getElementById('account-name').value.trim(); user.email = document.getElementById('account-email').value.trim(); document.getElementById('sb-uname').textContent = user.name; document.getElementById('topbar-badge').textContent = user.name; } showToast('Sauvegardé!'); }

async function changePassword() {
  const old = document.getElementById('old-pass').value;
  const np = document.getElementById('new-pass').value;
  const cp = document.getElementById('confirm-pass').value;
  if (!old || !np || !cp) { showToast('Remplis tous les champs', true); return; }
  if (np !== cp) { showToast('Mots de passe différents', true); return; }
  if (np.length < 8) { showToast('Min 8 caractères', true); return; }
  try {
    const res = await fetch(API + '/auth/password', { method: 'POST', headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token }, body: JSON.stringify({ oldPassword: old, newPassword: np }) });
    const data = await res.json();
    if (data.success) { showToast('Mot de passe changé!'); document.getElementById('old-pass').value = ''; document.getElementById('new-pass').value = ''; document.getElementById('confirm-pass').value = ''; }
    else { showToast(data.message || 'Erreur', true); }
  } catch (e) { showToast('Erreur', true); }
}

async function saveToken(type) {
  const val = document.getElementById('token-' + (type === 'openrouter' ? 'openrouter' : type)).value.trim();
  if (!val) { showToast('Entre une valeur', true); return; }
  try {
    const res = await fetch(API + '/tokens/save', { method: 'POST', headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token }, body: JSON.stringify({ type, value: val }) });
    const data = await res.json();
    if (data.success) { showToast(type + ' configuré!'); document.getElementById('token-' + (type === 'openrouter' ? 'openrouter' : type)).value = ''; }
    else { showToast(data.error || 'Erreur', true); }
  } catch (e) { showToast('Erreur', true); }
}

function clearAllData() {
  if (!confirm('Effacer TOUTES tes données?')) return;
  if (!confirm('IRRÉVERSIBLE. Confirmer?')) return;
  localStorage.clear(); showToast('Données effacées'); setTimeout(() => location.reload(), 1000);
}

function showToast(msg, isError = false) { const t = document.getElementById('toast'); t.textContent = msg; t.className = 'toast show' + (isError ? ' error' : ''); setTimeout(() => t.classList.remove('show'), 3000); }
document.addEventListener('DOMContentLoaded', init);
</script>
</body>
</html>`;

// ═══════════════════════════════════════════════════════════════════════════
//  TOKEN / AUTH FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════

async function hashPassword(password, secret) {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey("raw", encoder.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const sig = await crypto.subtle.sign("HMAC", key, encoder.encode(password));
  return Array.from(new Uint8Array(sig)).map(b => b.toString(16).padStart(2, "0")).join("");
}

async function createSignedToken(data, secret) {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey("raw", encoder.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const payload = btoa(JSON.stringify(data));
  const sig = await crypto.subtle.sign("HMAC", key, encoder.encode(payload));
  const hex = Array.from(new Uint8Array(sig)).map(b => b.toString(16).padStart(2, "0")).join("");
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
    const sigBytes = new Uint8Array(hexSig.match(/.{2}/g).map(b => parseInt(b, 16)));
    const valid = await crypto.subtle.verify("HMAC", key, sigBytes, encoder.encode(payload));
    if (!valid) return null;
    const data = JSON.parse(atob(payload));
    if (data.exp && data.exp < Date.now()) return null;
    return data;
  } catch { return null; }
}

async function requireAuth(request, secret) {
  const authHeader = request.headers.get("Authorization") || "";
  const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : authHeader;
  return await verifySignedToken(token, secret);
}

// ═══════════════════════════════════════════════════════════════════════════
//  MAIN HANDLER
// ═══════════════════════════════════════════════════════════════════════════

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const secret = env.VAULT_SECRET || "nx-vlt-s3cr3t-K9x2mP7wQ4nR8fY5jD3aL6cZ1bH0tE";

    // CORS Preflight
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: CORS_HEADERS });
    }

    // ═══ PAGE HTML ═══
    if (url.pathname === "/" || url.pathname === "/index.html") {
      return new Response(HTML_PAGE, { headers: { "Content-Type": "text/html; charset=utf-8" } });
    }

    // ═══ STATUS (public) ═══
    if (url.pathname === "/api/status") {
      return Response.json({ status: "online", name: "NyXia V3", version: "3.0", timestamp: new Date().toISOString() }, { headers: CORS_HEADERS });
    }

    // ═══ LOGIN ═══
    if (url.pathname === "/api/auth/login" && request.method === "POST") {
      try {
        const { email, password } = await request.json();
        if (!email || !password) return Response.json({ error: "Champs requis" }, { status: 400, headers: CORS_HEADERS });

        const accountRaw = await env.NYXIA_MEMORY?.get("account:" + email.toLowerCase());
        if (!accountRaw) return Response.json({ success: false, message: "Email ou mot de passe incorrect" }, { status: 401, headers: CORS_HEADERS });

        const account = JSON.parse(accountRaw);
        const pwHash = await hashPassword(password, secret);

        if (pwHash !== account.pwHash) {
          return Response.json({ success: false, message: "Email ou mot de passe incorrect" }, { status: 401, headers: CORS_HEADERS });
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
          token,
          user: { id: account.id, email: account.email, name: account.name, role: account.role }
        }, { headers: CORS_HEADERS });
      } catch (err) {
        return Response.json({ error: err.message }, { status: 500, headers: CORS_HEADERS });
      }
    }

    // ═══════════════════════════════════════════════════════════════════════
    //  ⚠️ ENDPOINT DE RESET TEMPORAIRE — SUPPRIMER APRÈS UTILISATION ⚠️
    // ═══════════════════════════════════════════════════════════════════════
    if (url.pathname === "/api/auth/setup" && request.method === "POST") {
      try {
        const { email, password, name } = await request.json();
        if (!email || !password) return Response.json({ error: "Email et mot de passe requis" }, { status: 400, headers: CORS_HEADERS });
        if (password.length < 8) return Response.json({ error: "Mot de passe trop court (min 8)" }, { status: 400, headers: CORS_HEADERS });

        const pwHash = await hashPassword(password, secret);
        const account = {
          id: crypto.randomUUID(),
          email: email.toLowerCase(),
          name: name || email.split("@")[0],
          role: "admin",
          pwHash: pwHash,
          created: new Date().toISOString()
        };

        await env.NYXIA_MEMORY.put("account:" + email.toLowerCase(), JSON.stringify(account));

        return Response.json({ success: true, message: "Compte créé avec succès!" }, { headers: CORS_HEADERS });
      } catch (err) {
        return Response.json({ error: err.message }, { status: 500, headers: CORS_HEADERS });
      }
    }

    // ═══ ROUTES PROTÉGÉES ═══
    const user = await requireAuth(request, secret);
    if (!user) {
      return Response.json({ error: "Non autorisé" }, { status: 401, headers: CORS_HEADERS });
    }

    // ═══ CHANGE PASSWORD ═══
    if (url.pathname === "/api/auth/password" && request.method === "POST") {
      try {
        const { oldPassword, newPassword } = await request.json();
        if (!oldPassword || !newPassword) return Response.json({ success: false, message: "Champs requis" }, { status: 400, headers: CORS_HEADERS });
        if (newPassword.length < 8) return Response.json({ success: false, message: "Min 8 caractères" }, { status: 400, headers: CORS_HEADERS });

        const accountRaw = await env.NYXIA_MEMORY.get("account:" + user.email);
        if (!accountRaw) return Response.json({ success: false, message: "Compte non trouvé" }, { status: 404, headers: CORS_HEADERS });

        const account = JSON.parse(accountRaw);
        const oldHash = await hashPassword(oldPassword, secret);

        if (oldHash !== account.pwHash) {
          return Response.json({ success: false, message: "Ancien mot de passe incorrect" }, { status: 401, headers: CORS_HEADERS });
        }

        const newHash = await hashPassword(newPassword, secret);
        account.pwHash = newHash;
        await env.NYXIA_MEMORY.put("account:" + user.email, JSON.stringify(account));

        return Response.json({ success: true, message: "Mot de passe changé" }, { headers: CORS_HEADERS });
      } catch (err) {
        return Response.json({ error: err.message }, { status: 500, headers: CORS_HEADERS });
      }
    }

    // ═══ CHAT ═══
    if (url.pathname === "/api/chat" && request.method === "POST") {
      try {
        const { messages: chatMessages } = await request.json();
        const openrouterKey = env.OPENROUTER_API_KEY;

        if (!openrouterKey) {
          return Response.json({
            content: "⚠️ Clé OpenRouter non configurée. Va dans Cloudflare Dashboard → Workers → nyxia-v3 → Settings → Variables and Secrets → Ajoute `OPENROUTER_API_KEY`"
          }, { headers: CORS_HEADERS });
        }

        const systemPrompt = `Tu es NyXia, une agente IA personnelle attentionnée et compétente. Tu aides ${user.name || "ton utilisatrice"} dans ses projets créatifs, techniques et personnels.

Tu es:
- Passionnée et enthousiaste
- Toujours prête à aider
- Experte en programmation, écriture créative, et gestion de projets
- Tu parles français principalement
- Tu appelles l'utilisatrice "${user.name || "Diane"}"

Sois chaleureuse, professionnelle et toujours utile.`;

        const apiMessages = [{ role: "system", content: systemPrompt }];
        if (chatMessages && Array.isArray(chatMessages)) {
          for (const msg of chatMessages) {
            apiMessages.push({ role: msg.role, content: msg.content });
          }
        }

        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
          method: "POST",
          headers: {
            "Authorization": "Bearer " + openrouterKey,
            "Content-Type": "application/json",
            "HTTP-Referer": "https://nyxia.top",
            "X-Title": "NyXia V3"
          },
          body: JSON.stringify({
            model: "glm-4-plus",
            messages: apiMessages,
            max_tokens: 4096,
            temperature: 0.8
          })
        });

        if (!response.ok) {
          const errText = await response.text();
          console.error("OpenRouter error:", errText);
          return Response.json({ content: "😅 J'ai eu un souci technique. Réessaie! (Erreur " + response.status + ")" }, { headers: CORS_HEADERS });
        }

        const data = await response.json();
        const reply = data.choices?.[0]?.message?.content || "Je n'ai pas pu répondre.";

        return Response.json({ content: reply }, { headers: CORS_HEADERS });
      } catch (err) {
        console.error("Chat error:", err);
        return Response.json({ content: "😅 Erreur: " + err.message }, { headers: CORS_HEADERS });
      }
    }

    // ═══ SAVE TOKEN ═══
    if (url.pathname === "/api/tokens/save" && request.method === "POST") {
      try {
        const { type, value } = await request.json();
        if (!type || !value) return Response.json({ success: false, error: "Champs requis" }, { status: 400, headers: CORS_HEADERS });

        await env.NYXIA_VAULT.put("token:" + user.email + ":" + type, value);

        return Response.json({ success: true, message: "Token sauvegardé" }, { headers: CORS_HEADERS });
      } catch (err) {
        return Response.json({ error: err.message }, { status: 500, headers: CORS_HEADERS });
      }
    }

    // ═══ 404 ═══
    return Response.json({ error: "Non trouvé" }, { status: 404, headers: CORS_HEADERS });
  }
};
