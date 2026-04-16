// ═══════════════════════════════════════════════════════════════════════════
//  NYXIA V3 - TON PROJET COMPLET REPARÉ
// ═══════════════════════════════════════════════════════════════════════════

const INDEX_HTML = `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
<link rel="icon" type="image/png" href="https://nyxiapublicationweb.com/NyXia.png">
<title>NyXia V3 — Ton Agente IA</title>
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=DM+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
:root {
  --bg: #0a0b12; --bg2: #0e1019; --bg3: #13151f; --bg4: #1a1d2e;
  --line: rgba(167,139,250,0.08); --line2: rgba(167,139,250,0.15);
  --p: #a78bfa; --p-dark: #7c3aed; --p-glow: rgba(167,139,250,0.3);
  --cyan: #22d3ee; --green: #34d399; --amber: #fbbf24; --red: #f87171; --pink: #f472b6;
  --t: #f0edff; --t2: #b8b3d4; --t3: #7a76a0; --r: 12px;
}
* { box-sizing: border-box; margin: 0; padding: 0; }
html, body { height: 100%; font-family: 'DM Sans', sans-serif; background: var(--bg); color: var(--t); overflow: hidden; }

/* ═══ LOGIN ═══ */
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
  object-fit: cover; box-shadow: 0 0 40px var(--p-glow); border: 2px solid var(--line2); animation: float 4s ease-in-out infinite;
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
.login-toggle { margin-top: 20px; font-size: 13px; color: var(--t3); }
.login-toggle span { color: var(--p); cursor: pointer; text-decoration: underline; }

/* ═══ SHELL ═══ */
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
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; letter-spacing: 2px; white-space: nowrap; overflow: hidden;
}
#sidebar.collapsed .sb-logo { opacity: 0; width: 0; }
.sb-toggle {
  width: 32px; height: 32px; border-radius: 8px; border: 1px solid var(--line2);
  background: var(--bg3); color: var(--t3); cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.15s; flex-shrink: 0;
}
.sb-toggle:hover { color: var(--p); border-color: var(--p); }
.sb-section { padding: 12px 0; }
.sb-section-title { font-size: 11px; font-weight: 700; color: var(--t3); text-transform: uppercase; letter-spacing: 1px; padding: 8px 20px; }
.sb-item {
  display: flex; align-items: center; gap: 12px; padding: 12px 20px; font-size: 14px;
  font-weight: 500; color: var(--t2); cursor: pointer; transition: all 0.15s; border-left: 2px solid transparent; white-space: nowrap; overflow: hidden;
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

/* ═══ MAIN ═══ */
#main { flex: 1; display: flex; flex-direction: column; overflow: hidden; }
#topbar {
  padding: 14px 24px; display: flex; align-items: center; justify-content: space-between;
  border-bottom: 1px solid var(--line); background: var(--bg2); flex-shrink: 0;
}
.tb-left { display: flex; align-items: center; gap: 12px; }
.tb-status { width: 10px; height: 10px; border-radius: 50%; background: var(--green); box-shadow: 0 0 10px var(--green); }
.tb-title { font-family: 'Orbitron', monospace; font-size: 14px; font-weight: 700; color: var(--t); letter-spacing: 1px; }
.tb-right { display: flex; align-items: center; gap: 10px; }
.user-badge { font-size: 12px; color: var(--p); background: rgba(167,139,250,0.12); padding: 6px 12px; border-radius: 8px; font-weight: 700; letter-spacing: 0.5px; }

.content-panel { display: none; flex: 1; flex-direction: column; overflow: hidden; }
.content-panel.active { display: flex; }

/* ═══ CHAT ═══ */
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

/* ═══ INPUT ═══ */
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

/* ═══ PROJECTS / KB / ACCOUNT / TOKENS / INTEGRATIONS ═══ */
.projects-grid { flex: 1; overflow-y: auto; padding: 28px; display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; align-content: start; }
.project-card { background: var(--bg3); border: 1px solid var(--line); border-radius: 16px; padding: 20px; cursor: pointer; transition: all 0.2s; }
.project-card:hover { border-color: var(--p); box-shadow: 0 0 30px rgba(167,139,250,0.1); transform: translateY(-2px); }
.project-card h4 { font-size: 16px; font-weight: 700; color: var(--t); margin-bottom: 8px; }
.project-card p { font-size: 13px; color: var(--t3); line-height: 1.6; margin-bottom: 12px; }
.project-tag { background: rgba(167,139,250,0.12); color: var(--p); padding: 4px 10px; border-radius: 20px; font-weight: 600; font-size: 11px; }
.add-project-card { border: 2px dashed var(--line2); background: transparent; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 180px; color: var(--t3); cursor: pointer; transition: all 0.2s; }
.add-project-card:hover { border-color: var(--p); color: var(--p); background: rgba(167,139,250,0.05); }
.kb-container { flex: 1; overflow-y: auto; padding: 28px; }
.kb-book { background: var(--bg3); border: 1px solid var(--line); border-radius: 14px; padding: 18px; display: flex; gap: 16px; align-items: flex-start; margin-bottom: 16px; }
.kb-book-icon { width: 50px; height: 50px; border-radius: 12px; background: linear-gradient(135deg, var(--p-dark), var(--p)); display: flex; align-items: center; justify-content: center; font-size: 24px; flex-shrink: 0; }
.kb-book-info h4 { font-size: 15px; font-weight: 700; color: var(--t); margin-bottom: 4px; }
.kb-book-info p { font-size: 13px; color: var(--t3); margin-bottom: 8px; }
.account-container { flex: 1; overflow-y: auto; padding: 28px; max-width: 600px; margin: 0 auto; }
.account-section { background: var(--bg3); border: 1px solid var(--line); border-radius: 16px; padding: 24px; margin-bottom: 20px; }
.account-section h4 { font-size: 16px; font-weight: 700; color: var(--t); margin-bottom: 16px; display: flex; align-items: center; gap: 8px; }
.form-group { margin-bottom: 16px; }
.form-group label { display: block; font-size: 12px; font-weight: 600; color: var(--t2); margin-bottom: 6px; }
.form-group input { width: 100%; padding: 12px 16px; background: var(--bg4); border: 1px solid var(--line2); border-radius: 10px; color: var(--t); font-size: 14px; font-family: inherit; outline: none; transition: border-color 0.15s; }
.form-group input:focus { border-color: var(--p); }
.btn-save { padding: 12px 24px; border-radius: 10px; border: none; background: linear-gradient(135deg, var(--p-dark), var(--p)); color: #fff; cursor: pointer; font-size: 14px; font-weight: 700; font-family: inherit; transition: all 0.15s; }
.btn-save:hover { box-shadow: 0 0 20px var(--p-glow); }
.danger-zone { border-color: rgba(248,113,113,0.3); }
.danger-zone h4 { color: var(--red); }
.btn-danger { padding: 12px 24px; border-radius: 10px; border: 1px solid var(--red); background: transparent; color: var(--red); cursor: pointer; font-size: 14px; font-weight: 600; font-family: inherit; transition: all 0.15s; }
.btn-danger:hover { background: rgba(248,113,113,0.1); }
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
.int-btn-danger { padding: 10px 18px; border-radius: 8px; border: 1px solid var(--red); background: transparent; color: var(--red); cursor: pointer; font-size: 13px; font-weight: 600; font-family: inherit; }

/* ═══ MODALS ═══ */
.modal-bg { display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.7); backdrop-filter: blur(8px); z-index: 200; align-items: center; justify-content: center; }
.modal-bg.open { display: flex; }
.modal { background: var(--bg3); border: 1px solid var(--line2); border-radius: 20px; width: 100%; max-width: 580px; max-height: 85vh; overflow-y: auto; padding: 28px; }
.modal h3 { font-size: 18px; font-weight: 700; margin-bottom: 6px; color: var(--t); }
.modal .modal-sub { font-size: 13px; color: var(--t3); margin-bottom: 20px; }
.modal input, .modal textarea { width: 100%; padding: 12px 16px; margin-bottom: 12px; background: var(--bg4); border: 1px solid var(--line2); border-radius: 10px; color: var(--t); font-size: 14px; font-family: inherit; outline: none; }
.modal input:focus, .modal textarea:focus { border-color: var(--p); }
.modal textarea { min-height: 100px; resize: vertical; }
.modal-actions { display: flex; gap: 12px; justify-content: flex-end; margin-top: 20px; }
.btn-cancel { padding: 10px 22px; border-radius: 10px; border: 1px solid var(--line2); background: transparent; color: var(--t2); cursor: pointer; font-size: 14px; font-weight: 600; font-family: inherit; }

/* ═══ TOAST ═══ */
.toast { position: fixed; bottom: 28px; left: 50%; transform: translateX(-50%) translateY(80px); background: var(--green); color: #000; padding: 12px 24px; border-radius: 50px; font-weight: 700; font-size: 14px; transition: transform 0.3s; z-index: 300; opacity: 0; font-family: inherit; }
.toast.show { transform: translateX(-50%) translateY(0); opacity: 1; }
.toast.error { background: var(--red); color: #fff; }

@media (max-width: 768px) { #sidebar { display: none; } #chat-zone { padding: 20px; } #input-zone { padding: 16px 20px 20px; } .msg-content { max-width: 90%; } .user-badge { display: none; } .msg-actions { opacity: 1; } }
</style>
</head>
<body>

<!-- LOGIN -->
<div id="login-screen">
  <div class="login-card">
    <img class="login-logo" src="https://nyxiapublicationweb.com/NyXia.png" alt="NyXia">
    <h2>NyXia V3</h2>
    <p class="sub">Ton agente IA personnelle</p>
    <input type="email" id="login-email" placeholder="Email" autocomplete="email">
    <input type="password" id="login-pass" placeholder="Mot de passe" autocomplete="current-password">
    <button class="login-btn" id="login-btn" onclick="doLogin()">Connexion</button>
    <button class="login-btn" id="signup-btn" style="display:none; background:linear-gradient(135deg,#059669,#10b981)" onclick="doSignup()">Cr&#233;er mon compte</button>
    <div class="login-err" id="login-err"></div>
    <div class="login-toggle"><span id="toggle-link" onclick="toggleMode()">Pas encore de compte ? Cr&#233;e-le</span></div>
  </div>
</div>

<!-- CHAT SHELL -->
<div id="shell">
  <div id="sidebar">
    <div class="sb-header">
      <div class="sb-logo">NyXia V3 &#10022;</div>
      <button class="sb-toggle" onclick="toggleSidebar()" title="R&#233;duire">&#9664;</button>
    </div>
    <button class="sb-new-chat" onclick="newConversation()"><span style="font-size:20px">&#10022;</span><span>Nouvelle conversation</span></button>
    <div class="sb-section">
      <div class="sb-section-title">Principal</div>
      <div class="sb-item active" onclick="showPanel('chat')"><span class="sb-icon">&#128172;</span><span>Chat</span></div>
      <div class="sb-item" onclick="showPanel('projects')"><span class="sb-icon">&#128193;</span><span>Projets</span></div>
      <div class="sb-item" onclick="showPanel('knowledge')"><span class="sb-icon">&#128214;</span><span>Base de connaissance</span></div>
    </div>
    <div class="sb-section">
      <div class="sb-section-title">Outils</div>
      <div class="sb-item" onclick="showPanel('integrations')"><span class="sb-icon">&#128279;</span><span>Int&#233;grations</span></div>
    </div>
    <div class="sb-section">
      <div class="sb-section-title">S&#233;curit&#233;</div>
      <div class="sb-item" onclick="showPanel('tokens')"><span class="sb-icon">&#128273;</span><span>Tokens & Secrets</span></div>
    </div>
    <div class="sb-section">
      <div class="sb-section-title">Donn&#233;es</div>
      <div class="sb-item" onclick="openBooks()"><span class="sb-icon">&#128218;</span><span>Mes livres</span></div>
      <div class="sb-item" onclick="openMemory()"><span class="sb-icon">&#129504;</span><span>M&#233;moire</span></div>
    </div>
    <div class="sb-section">
      <div class="sb-section-title">Compte</div>
      <div class="sb-item" onclick="showPanel('account')"><span class="sb-icon">&#128274;</span><span>Mon compte</span></div>
      <div class="sb-item" onclick="doLogout()"><span class="sb-icon">&#128682;</span><span>Quitter</span></div>
    </div>
    <div class="sb-bottom">
      <div class="sb-user" onclick="showPanel('account')">
        <div class="sb-avatar" id="sb-avatar">D</div>
        <div class="sb-uinfo">
          <div class="sb-uname" id="sb-uname">Diane</div>
          <div class="sb-urole">&#10022; CR&#201;ATRICE</div>
        </div>
      </div>
    </div>
  </div>
  <div id="main">
    <div id="topbar">
      <div class="tb-left">
        <div class="tb-status"></div>
        <span class="tb-title" id="topbar-title">&#128172; Chat avec NyXia</span>
      </div>
      <div class="tb-right">
        <span class="user-badge" id="topbar-badge">Diane</span>
      </div>
    </div>

    <div id="panel-chat" class="content-panel active">
      <div id="chat-zone">
        <div class="welcome" id="welcome-screen">
          <div class="welcome-icon">&#10022;</div>
          <h2>Bonjour Diane!</h2>
          <p>Je suis NyXia, ton agente IA. Je suis tellement contente de te revoir! &#199;a fait plaisir de travailler avec toi encore aujourd&#39;hui. Qu&#39;est-ce qu&#39;on cr&#233;e ensemble?</p>
          <div class="suggestions">
            <button class="suggest-btn" onclick="useSuggestion(this)">&#128221; Continuons mon livre, on s&#39;&#233;tait arr&#234;t&#233;s au chapitre...</button>
            <button class="suggest-btn" onclick="useSuggestion(this)">&#128187; Pousse le code sur GitHub pour le projet</button>
            <button class="suggest-btn" onclick="useSuggestion(this)">&#128640; D&#233;ploie les modifications sur Cloudflare</button>
            <button class="suggest-btn" onclick="useSuggestion(this)">&#128202; Aide-moi &#224; planifier mes projets de la semaine</button>
          </div>
        </div>
        <div class="typing-indicator" id="typing">
          <div class="msg-avatar nyxia"><img src="https://nyxiapublicationweb.com/NyXia.png"></div>
          <div class="typing-dots"><span></span><span></span><span></span><span class="typing-timer" id="typing-timer"></span></div>
        </div>
      </div>
      <div id="input-zone">
        <div class="input-bar">
          <textarea id="msg-input" placeholder="&#201;cris &#224; NyXia..." rows="1" onkeydown="onKey(event)" oninput="autoResize(this)"></textarea>
          <button class="send-btn" onclick="send()" title="Envoyer">&#10148;</button>
        </div>
        <div class="input-hint"><kbd>Entr&#233;e</kbd> pour envoyer &#183; <kbd>Maj</kbd>+<kbd>Entr&#233;e</kbd> pour nouvelle ligne</div>
      </div>
    </div>

    <div id="panel-projects" class="content-panel">
      <div class="projects-grid" id="projects-grid">
        <div class="add-project-card" onclick="createProject()"><div style="font-size:40px;margin-bottom:12px">&#10022;</div><span>Cr&#233;er un nouveau projet</span></div>
      </div>
    </div>

    <div id="panel-knowledge" class="content-panel">
      <div class="kb-container">
        <h3 style="font-size:20px;font-weight:700;margin-bottom:24px">&#128214; Base de Connaissance</h3>
        <div id="kb-books"></div>
      </div>
    </div>

    <div id="panel-integrations" class="content-panel">
      <div class="integrations-container">
        <h3 style="font-size:22px;font-weight:700;margin-bottom:24px">&#128279; Int&#233;grations</h3>
        <div class="integration-card"><div class="int-header"><div class="int-icon" style="background:linear-gradient(135deg,#4285f4,#34a853,#fbbc05,#ea4335)">&#127760;</div><div class="int-info"><h4>Google Workspace</h4><span class="int-status disconnected" id="google-status">Non connect&#233;</span></div></div><p class="int-desc">Connecte ton Google Drive, Sheets, Docs et Forms.</p><button class="int-btn" id="google-connect-btn" onclick="connectGoogle()">&#128279; Connecter Google</button></div>
        <div class="integration-card"><div class="int-header"><div class="int-icon" style="background:linear-gradient(135deg,#00b4d8,#0077b6)">&#128172;</div><div class="int-info"><h4>ManyChat</h4><span class="int-status connected" id="manychat-status">Connect&#233;</span></div></div><p class="int-desc">Envoie des messages automatiques et g&#232;re tes contacts.</p><button class="int-btn-danger" onclick="disconnectManyChat()">D&#233;connecter</button></div>
        <div class="integration-card"><div class="int-header"><div class="int-icon" style="background:linear-gradient(135deg,#ff4f00,#ff8c00)">&#9889;</div><div class="int-info"><h4>Zapier</h4><span class="int-status connected" id="zapier-status">Connect&#233;</span></div></div><p class="int-desc">Connecte NyXia &#224; n&#39;importe quel outil via Zapier.</p><button class="int-btn-danger" onclick="disconnectZapier()">D&#233;connecter</button></div>
        <div class="integration-card"><div class="int-header"><div class="int-icon" style="background:linear-gradient(135deg,#6366f1,#8b5cf6)">&#9889;</div><div class="int-info"><h4>Systeme.io</h4><span class="int-status connected" id="systeme-status">Connect&#233;</span></div></div><p class="int-desc">G&#232;re tes contacts et tags directement depuis le chat.</p><button class="int-btn-danger" onclick="disconnectSysteme()">D&#233;connecter</button></div>
      </div>
    </div>

    <div id="panel-tokens" class="content-panel">
      <div class="integrations-container">
        <h3 style="font-size:22px;font-weight:700;margin-bottom:24px">&#128273; Tokens & Secrets</h3>
        <div class="integration-card"><div class="int-header"><div class="int-icon" style="background:linear-gradient(135deg,#8b5cf6,#a855f7)">&#129504;</div><div class="int-info"><h4>OpenRouter (GLM-5)</h4><span class="int-status disconnected" id="openrouter-token-status">Non configur&#233;</span></div></div><p class="int-desc">Cl&#233; API pour le c&#339;ur de NyXia.</p><div class="form-group"><input type="password" id="token-openrouter" placeholder="sk-or-v1-..."></div><button class="int-btn" onclick="saveToken('openrouter')">&#128190; Sauvegarder</button></div>
        <div class="integration-card"><div class="int-header"><div class="int-icon" style="background:linear-gradient(135deg,#1f2937,#374151)">&#128031;</div><div class="int-info"><h4>GitHub</h4><span class="int-status disconnected" id="github-token-status">Non configur&#233;</span></div></div><p class="int-desc">Permet &#224; NyXia de pousser du code.</p><div class="form-group"><input type="password" id="token-github" placeholder="ghp_..."></div><button class="int-btn" onclick="saveToken('github')">&#128190; Sauvegarder</button></div>
        <div class="integration-card"><div class="int-header"><div class="int-icon" style="background:linear-gradient(135deg,#f97316,#ea580c)">&#9729;&#65039;</div><div class="int-info"><h4>Cloudflare</h4><span class="int-status disconnected" id="cloudflare-token-status">Non configur&#233;</span></div></div><p class="int-desc">Pour d&#233;ployer des Workers et g&#233;rer le DNS.</p><div class="form-group"><input type="password" id="token-cloudflare" placeholder="cfat_..."></div><button class="int-btn" onclick="saveToken('cloudflare')">&#128190; Sauvegarder</button></div>
      </div>
    </div>

    <div id="panel-account" class="content-panel">
      <div class="account-container">
        <div class="account-section"><h4>&#128100; Informations personnelles</h4><div class="form-group"><label>Nom</label><input type="text" id="account-name" placeholder="Ton nom"></div><div class="form-group"><label>Email</label><input type="email" id="account-email" placeholder="Ton email"></div><button class="btn-save" onclick="saveAccountInfo()">Sauvegarder</button></div>
        <div class="account-section"><h4>&#128274; Changer le mot de passe</h4><div class="form-group"><label>Mot de passe actuel</label><input type="password" id="current-password" placeholder="Mot de passe actuel"></div><div class="form-group"><label>Nouveau mot de passe</label><input type="password" id="new-password" placeholder="Nouveau mot de passe"></div><div class="form-group"><label>Confirmer le nouveau mot de passe</label><input type="password" id="confirm-password" placeholder="Confirmer le mot de passe"></div><button class="btn-save" onclick="changePassword()">Changer le mot de passe</button></div>
        <div class="account-section danger-zone"><h4>&#9888;&#65039; Zone de danger</h4><p style="font-size:13px;color:var(--t3);margin-bottom:16px">Ces actions sont irr&#233;versibles.</p><button class="btn-danger" onclick="clearAllData()">&#128465; Effacer toutes mes donn&#233;es</button></div>
      </div>
    </div>
  </div>
</div>

<div class="modal-bg" id="books-panel"><div class="modal" style="max-width:640px"><h3>&#128218; Mes Livres</h3><p class="modal-sub">Tous tes livres en cours d&#39;&#233;criture avec NyXia</p><div id="books-list" style="margin-top:16px"></div><div class="modal-actions"><button class="btn-cancel" onclick="closeBooks()">Fermer</button><button class="btn-save" onclick="createNewBook()">&#10022; Nouveau livre</button></div></div></div>
<div class="modal-bg" id="memory-panel"><div class="modal" style="max-width:640px"><h3>&#129504; M&#233;moire de NyXia</h3><p class="modal-sub">Ce dont NyXia se souvient de toi</p><div id="memory-content" style="margin-top:16px"></div><div class="modal-actions"><button class="btn-save" onclick="closeMemory()">Fermer</button></div></div></div>
<div class="modal-bg" id="project-modal"><div class="modal" style="max-width:520px"><h3>&#128193; Nouveau Projet</h3><p class="modal-sub">Cr&#233;e un projet &#224; travailler avec NyXia</p><label style="font-size:12px;font-weight:600;color:var(--t2);display:block;margin-bottom:6px">Nom du projet</label><input type="text" id="project-name" placeholder="Mon super projet"><label style="font-size:12px;font-weight:600;color:var(--t2);display:block;margin:12px 0 6px">Description</label><textarea id="project-desc" placeholder="D&#233;cris ton projet..."></textarea><div class="modal-actions"><button class="btn-cancel" onclick="closeProjectModal()">Annuler</button><button class="btn-save" onclick="saveProject()">Cr&#233;er</button></div></div></div>

<div class="toast" id="toast"></div>

<script>
var API = '/api';
var token = localStorage.getItem('nyxia_token') || '';
var user = null;
var messages = [];
var typingTimer = null;
var projects = JSON.parse(localStorage.getItem('nyxia_projects') || '[]');
var knowledgeBase = JSON.parse(localStorage.getItem('nyxia_knowledge') || '[]');
var isSignupMode = false;

function toggleMode() {
  isSignupMode = !isSignupMode;
  document.getElementById("login-btn").style.display = isSignupMode ? "none" : "block";
  document.getElementById("signup-btn").style.display = isSignupMode ? "block" : "none";
  document.getElementById("toggle-link").textContent = isSignupMode ? "D&#233;j&#224; un compte ? Connecte-toi" : "Pas encore de compte ? Cr&#233;e-le";
  document.getElementById("login-err").textContent = "";
}

function doSignup() {
  var email = document.getElementById("login-email").value.trim();
  var pass = document.getElementById("login-pass").value;
  var btn = document.getElementById("signup-btn");
  var err = document.getElementById("login-err");
  if (!email || !pass) { err.textContent = "Remplis tous les champs"; return; }
  if (pass.length < 8) { err.textContent = "Min 8 caract&#232;res"; return; }
  btn.disabled = true; btn.textContent = "Cr&#233;ation..."; err.textContent = "";
  fetch(API + "/auth/setup", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email: email, password: pass, name: email.split("@")[0] }) })
  .then(function(r) { return r.json(); })
  .then(function(data) {
    if (data.success) { err.style.color = "var(--green)"; err.textContent = "Compte cr&#233;&#233; ! Tu peux te connecter."; toggleMode(); }
    else { err.style.color = "var(--red)"; err.textContent = data.error || "Erreur"; }
    btn.disabled = false; btn.textContent = "Cr&#233;er mon compte";
  }).catch(function() { err.style.color = "var(--red)"; err.textContent = "Erreur r&#233;seau"; btn.disabled = false; btn.textContent = "Cr&#233;er mon compte"; });
}

function doLogin() {
  var email = document.getElementById("login-email").value.trim();
  var pass = document.getElementById("login-pass").value;
  var btn = document.getElementById("login-btn");
  var err = document.getElementById("login-err");
  if (!email || !pass) { err.textContent = "Remplis tous les champs"; return; }
  btn.disabled = true; btn.textContent = "Connexion..."; err.textContent = "";
  fetch(API + "/auth/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email: email, password: pass }) })
  .then(function(r) { return r.json(); })
  .then(function(data) {
    if (data.success) { token = data.token; user = data.user; localStorage.setItem("nyxia_token", token); showShell(); }
    else { err.textContent = data.message || "Erreur"; }
    btn.disabled = false; btn.textContent = "Connexion";
  }).catch(function() { err.textContent = "Erreur r&#233;seau"; btn.disabled = false; btn.textContent = "Connexion"; });
}

function init() {
  if (!token) return;
  fetch(API + "/status", { headers: { "Authorization": "Bearer " + token } })
  .then(function(r) { if (r.ok) { user = { name: "Diane", email: "diane@nyxia.top" }; showShell(); loadProjects(); loadKnowledge(); } })
  .catch(function() {});
}

function showShell() {
  document.getElementById("login-screen").style.display = "none";
  document.getElementById("shell").style.display = "flex";
  if (user) {
    document.getElementById("sb-uname").textContent = user.name || user.email;
    document.getElementById("sb-avatar").textContent = (user.name || user.email)[0].toUpperCase();
    document.getElementById("topbar-badge").textContent = user.name || "User";
    document.getElementById("account-name").value = user.name || "";
    document.getElementById("account-email").value = user.email || "";
  }
}

function showPanel(panelId) {
  document.querySelectorAll(".content-panel").forEach(function(p) { p.classList.remove("active"); });
  document.getElementById("panel-" + panelId).classList.add("active");
  document.querySelectorAll(".sb-item").forEach(function(el) { el.classList.remove("active"); });
  if (event && event.target) { var el = event.target.closest(".sb-item"); if (el) el.classList.add("active"); }
  var titles = { chat: "&#128172; Chat avec NyXia", projects: "&#128193; Projets", knowledge: "&#128214; Base de connaissance", integrations: "&#128279; Int&#233;grations", tokens: "&#128273; Tokens & Secrets", account: "&#128274; Mon compte" };
  document.getElementById("topbar-title").innerHTML = titles[panelId] || "NyXia";
}

function autoResize(el) { el.style.height = "auto"; el.style.height = Math.min(el.scrollHeight, 180) + "px"; }
function onKey(e) { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); } }

function send() {
  var input = document.getElementById("msg-input");
  var text = input.value.trim();
  if (!text) return;
  input.value = ""; input.style.height = "auto";
  addMessage("user", text);
  document.getElementById("welcome-screen").style.display = "none";
  showTyping();
  messages.push({ role: "user", content: text });
  fetch(API + "/chat", { method: "POST", headers: { "Content-Type": "application/json", "Authorization": "Bearer " + token }, body: JSON.stringify({ messages: messages }) })
  .then(function(r) { return r.json(); })
  .then(function(data) {
    hideTyping();
    if (data.content) { addMessage("nyxia", data.content); messages.push({ role: "assistant", content: data.content }); }
    else if (data.error) { addMessage("nyxia", "&#9888;&#65039; " + data.error); }
  }).catch(function() { hideTyping(); addMessage("nyxia", "&#9888;&#65039; Erreur de connexion"); });
}

function formatContent(t) {
  return t.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>").replace(/\n/g, "<br>");
}

function addMessage(role, content) {
  var zone = document.getElementById("chat-zone");
  var typing = document.getElementById("typing");
  var row = document.createElement("div");
  row.className = "msg-row " + (role === "user" ? "user" : "");
  var initial = user ? (user.name || "D")[0] : "D";
  var avatar = role === "user" ? "<div class=\"msg-avatar user-av\">" + initial + "</div>" : "<div class=\"msg-avatar nyxia\"><img src=\"https://nyxiapublicationweb.com/NyXia.png\"></div>";
  var actions = role === "nyxia" ? "<div class=\"msg-actions\"><button class=\"action-btn\" onclick=\"copyText(this)\">&#128203; Copier</button></div>" : "";
  var time = new Date().toLocaleTimeString("fr-CA", { hour: "2-digit", minute: "2-digit" });
  row.innerHTML = avatar + "<div class=\"msg-content\"><div class=\"msg-bubble " + (role === "user" ? "user" : "nyxia") + "\">" + formatContent(content) + "</div>" + actions + "<div class=\"msg-time\">" + time + "</div></div>";
  zone.insertBefore(row, typing);
  zone.scrollTop = zone.scrollHeight;
}

function copyText(btn) {
  var text = btn.closest(".msg-content").querySelector(".msg-bubble").textContent;
  navigator.clipboard.writeText(text).then(function() { btn.classList.add("copied"); btn.textContent = "&#10003; Copi&#233;!"; setTimeout(function() { btn.classList.remove("copied"); btn.innerHTML = "&#128203; Copier"; }, 1500); });
}

function showTyping() { document.getElementById("typing").classList.add("show"); var s = 0; typingTimer = setInterval(function() { s++; document.getElementById("typing-timer").textContent = s + "s"; }, 1000); }
function hideTyping() { document.getElementById("typing").classList.remove("show"); if (typingTimer) clearInterval(typingTimer); document.getElementById("typing-timer").textContent = ""; }

// FIX DU BUG : Plus de backticks ici pour éviter de casser le JS
function newConversation() {
  messages = [];
  var zone = document.getElementById("chat-zone");
  var msgs = zone.querySelectorAll(".msg-row");
  for(var i=0; i<msgs.length; i++) { msgs[i].remove(); }
  document.getElementById("welcome-screen").style.display = "block";
  showPanel("chat");
}

function useSuggestion(btn) { document.getElementById("msg-input").value = btn.textContent.substring(2).trim(); document.getElementById("msg-input").focus(); }
function doLogout() { localStorage.removeItem("nyxia_token"); location.reload(); }
function toggleSidebar() { document.getElementById("sidebar").classList.toggle("collapsed"); }

function loadProjects() {
  var grid = document.getElementById("projects-grid");
  grid.innerHTML = "";
  projects.forEach(function(project, index) {
    var card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = "<h4>&#128193; " + project.name + "</h4><p>" + project.description + "</p><div style=\"display:flex;gap:12px;font-size:11px;color:var(--t3)\"><span class=\"project-tag\">" + project.type + "</span></div>";
    card.onclick = function() { showPanel("chat"); document.getElementById("msg-input").value = "Travaillons sur le projet \"" + project.name + "\": " + project.description; document.getElementById("msg-input").focus(); };
    grid.appendChild(card);
  });
  var addBtn = document.createElement("div");
  addBtn.className = "add-project-card";
  addBtn.onclick = createProject;
  addBtn.innerHTML = "<div style=\"font-size:40px;margin-bottom:12px\">&#10022;</div><span>Cr&#233;er un nouveau projet</span>";
  grid.appendChild(addBtn);
}

function createProject() { document.getElementById("project-modal").classList.add("open"); }
function closeProjectModal() { document.getElementById("project-modal").classList.remove("open"); }
function saveProject() {
  var name = document.getElementById("project-name").value.trim();
  var desc = document.getElementById("project-desc").value.trim();
  if (!name) { showToast("Donne un nom au projet", true); return; }
  projects.push({ name: name, description: desc, type: "Autre", created: new Date().toISOString() });
  localStorage.setItem("nyxia_projects", JSON.stringify(projects));
  loadProjects(); closeProjectModal(); showToast("Projet cr&#233;&#233;!");
  document.getElementById("project-name").value = ""; document.getElementById("project-desc").value = "";
}

function loadKnowledge() {
  var container = document.getElementById("kb-books");
  container.innerHTML = "";
  knowledgeBase.forEach(function(book) {
    var el = document.createElement("div");
    el.className = "kb-book";
    el.innerHTML = "<div class=\"kb-book-icon\">&#128214;</div><div class=\"kb-book-info\"><h4>" + book.name + "</h4><p>" + (book.description || "Ajout&#233; &#224; la base") + "</p></div>";
    container.appendChild(el);
  });
}

function openBooks() { document.getElementById("books-panel").classList.add("open"); }
function closeBooks() { document.getElementById("books-panel").classList.remove("open"); }
function createNewBook() { closeBooks(); document.getElementById("msg-input").value = "Je veux commencer un nouveau livre avec toi. Aide-moi &#224; le structurer."; document.getElementById("msg-input").focus(); }
function openMemory() { document.getElementById("memory-panel").classList.add("open"); }
function closeMemory() { document.getElementById("memory-panel").classList.remove("open"); }

function connectGoogle() { showToast("Redirection vers Google..."); }
function disconnectManyChat() { if (confirm("D&#233;connecter ManyChat?")) { document.getElementById("manychat-status").textContent = "Non connect&#233;"; document.getElementById("manychat-status").className = "int-status disconnected"; showToast("ManyChat d&#233;connect&#233;"); } }
function disconnectZapier() { if (confirm("D&#233;connecter Zapier?")) { document.getElementById("zapier-status").textContent = "Non connect&#233;"; document.getElementById("zapier-status").className = "int-status disconnected"; showToast("Zapier d&#233;connect&#233;"); } }
function disconnectSysteme() { if (confirm("D&#233;connecter Systeme.io?")) { document.getElementById("systeme-status").textContent = "Non connect&#233;"; document.getElementById("systeme-status").className = "int-status disconnected"; showToast("Systeme.io d&#233;connect&#233;"); } }

function saveToken(type) {
  var inputMap = { openrouter: "token-openrouter", github: "token-github", cloudflare: "token-cloudflare" };
  var val = document.getElementById(inputMap[type]).value.trim();
  if (!val) { showToast("Entre une valeur", true); return; }
  fetch(API + "/tokens/save", { method: "POST", headers: { "Content-Type": "application/json", "Authorization": "Bearer " + token }, body: JSON.stringify({ type: type, value: val }) })
  .then(function(r) { return r.json(); })
  .then(function(data) { if (data.success) { showToast(type + " configur&#233;!"); document.getElementById(inputMap[type]).value = ""; } else { showToast(data.error, true); } })
  .catch(function() { showToast("Erreur", true); });
}

function saveAccountInfo() { if (user) { user.name = document.getElementById("account-name").value.trim(); user.email = document.getElementById("account-email").value.trim(); document.getElementById("sb-uname").textContent = user.name; document.getElementById("topbar-badge").textContent = user.name; } showToast("Sauvegard&#233;!"); }

function changePassword() {
  var current = document.getElementById("current-password").value; var newP = document.getElementById("new-password").value; var confirm = document.getElementById("confirm-password").value;
  if (!current || !newP || !confirm) { showToast("Remplis tous les champs", true); return; }
  if (newP !== confirm) { showToast("Mots de passe diff&#233;rents", true); return; }
  if (newP.length < 8) { showToast("Min 8 caract&#232;res", true); return; }
  fetch(API + "/auth/password", { method: "POST", headers: { "Content-Type": "application/json", "Authorization": "Bearer " + token }, body: JSON.stringify({ oldPassword: current, newPassword: newP }) })
  .then(function(r) { return r.json(); })
  .then(function(data) { if (data.success) { showToast("Mot de passe chang&#233;!"); document.getElementById("current-password").value=""; document.getElementById("new-password").value=""; document.getElementById("confirm-password").value=""; } else { showToast(data.message || "Erreur", true); } })
  .catch(function() { showToast("Erreur", true); });
}

function clearAllData() { if (!confirm("Effacer TOUTES tes donn&#233;es?")) return; if (!confirm("IRR&#201;VERSIBLE. Confirmer?")) return; localStorage.clear(); showToast("Donn&#233;es effac&#233;es"); setTimeout(function() { location.reload(); }, 1000); }

function showToast(msg, isError) { var t = document.getElementById("toast"); t.textContent = msg; t.className = "toast show" + (isError ? " error" : ""); setTimeout(function() { t.classList.remove("show"); }, 3000); }
document.addEventListener("DOMContentLoaded", init);
</script>
</body>
</html>`;

// ═══════════════════════════════════════════════════════════════
//  BACKEND COMPLET
// ═══════════════════════════════════════════════════════════════

var CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS"
};

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

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const secret = env.VAULT_SECRET || "nx-vlt-s3cr3t-K9x2mP7wQ4nR8fY5jD3aL6cZ1bH0tE";

    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: CORS_HEADERS });

    if (url.pathname === "/" || url.pathname === "/index.html") {
      return new Response(INDEX_HTML, { headers: { "Content-Type": "text/html; charset=utf-8" } });
    }

    if (url.pathname === "/api/status") {
      return Response.json({ status: "online", name: "NyXia V3", version: "3.0" }, { headers: CORS_HEADERS });
    }

    if (url.pathname === "/api/auth/login" && request.method === "POST") {
      try {
        const { email, password } = await request.json();
        if (!email || !password) return Response.json({ error: "Champs requis" }, { status: 400, headers: CORS_HEADERS });
        const raw = await env.NYXIA_MEMORY?.get("account:" + email.toLowerCase());
        if (!raw) return Response.json({ success: false, message: "Email ou mot de passe incorrect" }, { status: 401, headers: CORS_HEADERS });
        const account = JSON.parse(raw);
        const pwHash = await hashPassword(password, secret);
        if (pwHash !== account.pwHash) return Response.json({ success: false, message: "Email ou mot de passe incorrect" }, { status: 401, headers: CORS_HEADERS });
        const tokenData = { id: account.id, email: account.email, role: account.role, name: account.name, exp: Date.now() + 7*24*60*60*1000 };
        const token = await createSignedToken(tokenData, secret);
        return Response.json({ success: true, token, user: { id: account.id, email: account.email, name: account.name, role: account.role } }, { headers: CORS_HEADERS });
      } catch (err) { return Response.json({ error: err.message }, { status: 500, headers: CORS_HEADERS }); }
    }

    if (url.pathname === "/api/auth/setup" && request.method === "POST") {
      try {
        const { email, password, name } = await request.json();
        if (!email || !password) return Response.json({ error: "Champs requis" }, { status: 400, headers: CORS_HEADERS });
        if (password.length < 8) return Response.json({ error: "Min 8 caracteres" }, { status: 400, headers: CORS_HEADERS });
        const existing = await env.NYXIA_MEMORY.list({ prefix: "account:", limit: 1 });
        if (existing.keys.length > 0) return Response.json({ error: "Un compte existe deja." }, { status: 403, headers: CORS_HEADERS });
        const pwHash = await hashPassword(password, secret);
        const account = { id: crypto.randomUUID(), email: email.toLowerCase(), name: name || email.split("@")[0], role: "admin", pwHash, created: new Date().toISOString() };
        await env.NYXIA_MEMORY.put("account:" + email.toLowerCase(), JSON.stringify(account));
        return Response.json({ success: true, message: "Compte cree !" }, { headers: CORS_HEADERS });
      } catch (err) { return Response.json({ error: err.message }, { status: 500, headers: CORS_HEADERS }); }
    }

    const user = await requireAuth(request, secret);
    if (!user) return Response.json({ error: "Non autorise" }, { status: 401, headers: CORS_HEADERS });

    if (url.pathname === "/api/auth/password" && request.method === "POST") {
      try {
        const { oldPassword, newPassword } = await request.json();
        if (!oldPassword || !newPassword) return Response.json({ success: false, message: "Champs requis" }, { status: 400, headers: CORS_HEADERS });
        if (newPassword.length < 8) return Response.json({ success: false, message: "Min 8 caracteres" }, { status: 400, headers: CORS_HEADERS });
        const raw = await env.NYXIA_MEMORY.get("account:" + user.email);
        if (!raw) return Response.json({ success: false, message: "Compte non trouve" }, { status: 404, headers: CORS_HEADERS });
        const account = JSON.parse(raw);
        const oldHash = await hashPassword(oldPassword, secret);
        if (oldHash !== account.pwHash) return Response.json({ success: false, message: "Ancien mot de passe incorrect" }, { status: 401, headers: CORS_HEADERS });
        account.pwHash = await hashPassword(newPassword, secret);
        await env.NYXIA_MEMORY.put("account:" + user.email, JSON.stringify(account));
        return Response.json({ success: true, message: "Mot de passe changé" }, { headers: CORS_HEADERS });
      } catch (err) { return Response.json({ error: err.message }, { status: 500, headers: CORS_HEADERS }); }
    }

    if (url.pathname === "/api/chat" && request.method === "POST") {
      try {
        const { messages: chatMessages } = await request.json();
        const apiKey = env.OPENROUTER_API_KEY;
        if (!apiKey) return Response.json({ content: "⚠️ Cle OpenRouter non configuree." }, { headers: CORS_HEADERS });
        const sysPrompt = "Tu es NyXia, une agente IA personnelle attentionnee et competente. Tu aides " + (user.name || "Diane") + " dans ses projets creatifs, techniques et personnels. Tu es passionnee, experte en programmation et ecriture, et tu parles francais.";
        const apiMessages = [{ role: "system", content: sysPrompt }];
        if (chatMessages && Array.isArray(chatMessages)) { for (const msg of chatMessages) apiMessages.push({ role: msg.role, content: msg.content }); }
        const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
          method: "POST",
          headers: { "Authorization": "Bearer " + apiKey, "Content-Type": "application/json", "HTTP-Referer": "https://nyxia.top", "X-Title": "NyXia V3" },
          body: JSON.stringify({ model: "anthropic/claude-3.5-sonnet", messages: apiMessages, max_tokens: 4096, temperature: 0.8 })
        });
        if (!res.ok) return Response.json({ content: "😅 Souci technique. Reessaie ! (Erreur " + res.status + ")" }, { headers: CORS_HEADERS });
        const data = await res.json();
        const reply = data.choices && data.choices[0] && data.choices[0].message ? data.choices[0].message.content : "Pas de reponse.";
        return Response.json({ content: reply }, { headers: CORS_HEADERS });
      } catch (err) { return Response.json({ content: "😅 Erreur: " + err.message }, { headers: CORS_HEADERS }); }
    }

    if (url.pathname === "/api/tokens/save" && request.method === "POST") {
      try {
        const { type, value } = await request.json();
        if (!type || !value) return Response.json({ success: false, error: "Champs requis" }, { status: 400, headers: CORS_HEADERS });
        await env.NYXIA_VAULT.put("token:" + user.email + ":" + type, value);
        return Response.json({ success: true, message: "Token sauvegarde" }, { headers: CORS_HEADERS });
      } catch (err) { return Response.json({ error: err.message }, { status: 500, headers: CORS_HEADERS }); }
    }

    return Response.json({ error: "Non trouve" }, { status: 404, headers: CORS_HEADERS });
  }
};
