// ══════════════════════════════════════════════════════
//  DİL / LANGUAGE
// ══════════════════════════════════════════════════════
const LANGS = {
  tr: {
    login_tab:'Giriş Yap', register_tab:'Kayıt Ol', email:'E-posta', password:'Şifre',
    name:'İsim', login_btn:'Giriş Yap', register_btn:'Kayıt Ol',
    tab_chats:'SOHBETLER', tab_feed:'AKIŞ',
    search_placeholder:'İsimle kullanıcı ara...', empty_search:'Arama yaparak kullanıcı bulabilirsiniz',
    stories_title:'Hikayeler', add_story:'Ekle', empty_feed:'Henüz paylaşım yok',
    no_chat_hint:'Mesajlaşmak için bir kullanıcı seçin', msg_placeholder:'Mesaj yaz...',
    new_post:'Yeni Paylaşım', ptype_text:'✏️ Yazı', ptype_link:'🔗 Link', ptype_story:'🌟 Hikaye',
    post_text_ph:'Ne düşünüyorsun?', cancel:'İptal', share:'Paylaş',
    my_profile:'Profilim', logout:'Çıkış Yap',
    online:'Çevrimiçi', last_seen:'Son görülme:',
    err_fill:'Tüm alanları doldurun.', err_pass:'Şifre en az 6 karakter.',
    err_email:'Bu e-posta zaten kayıtlı.', err_login:'E-posta veya şifre hatalı.',
    err_conn:'Bağlantı hatası, tekrar dene.', ok_register:'Kayıt başarılı! Hoş geldin 🎉',
    logged_out:'Çıkış yapıldı', feed_locked:'Bu paylaşımı görmek için önce mesajlaşmaya başlamalısınız.',
    tagline:'Hızlı ve güvenli mesajlaşma', send_msg:'Mesaj gönder',
    no_post_text:'Metin boş olamaz.', no_post_link:'Geçerli bir link girin.',
    post_shared:'Paylaşıldı!', ago_just:'Az önce', ago_min:' dk önce', ago_hour:' sa önce', ago_day:' gün önce',
    no_msg_yet:'Henüz habar ýok 👋', no_post_found:'Paylaşım bulunamadı', no_user_found:'Kullanıcı bulunamadı',
    confirm_delete:'Paylaşım silinsin mi?',
    bio_label:'Hakkımda', bio_placeholder:'Kendinden bahset...', save_bio:'Kaydet', bio_saved:'Bio güncellendi',
    followers:'Takipçi', following:'Takip',
    btn_follow:'Takip Et', btn_pending:'İstek Gönderildi', btn_following:'Takiptesin', btn_message:'Mesaj',
    requests_title:'Takip İstekleri', no_requests:'Bekleyen istek yok',
    req_sent:'Takip isteği gönderildi', req_accepted:'Takip isteği kabul edildi', req_declined:'İstek reddedildi',
    unfollowed:'Takipten çıkıldı', req_accept:'Onayla', req_decline:'Reddet',
    locked_profile:'Bu hesabın içeriğini görmek için takip etmelisin.',
    share_my_profile:'Profilimi Paylaş', share_profile:'Profili Paylaş',
    share_profile_title:'Profili Paylaş', share_profile_desc:'Bu linki paylaşarak profili göster.',
    share_msg_title:'Mesajlaşma Linki', share_msg_desc:'Bu linke tıklayan kişiyle direkt mesajlaşmaya başlarsın.',
    copy:'Kopyala', copied:'Kopyalandı!', more:'Diğer', close:'Kapat',
    link_copied:'Link kopyalandı', dm_started:'Sohbet açıldı',
    ptype_voice:'🎤 Ses', tap_to_record:'Kaydetmek için dokun', stop:'Durdur',
    mic_denied:'Mikrofon izni verilmedi.', mic_error:'Mikrofona erişilemedi.',
    voice_too_short:'Kayıt çok kısa.', voice_sent:'Sesli mesaj gönderildi',
    voice_post_shared:'Sesli paylaşım yapıldı!', voice_max_warning:'En fazla 60 saniye kaydedilebilir.',
    mic_perm_title:'Mikrofon İzni', mic_perm_desc:'Sesli mesaj ve sesli paylaşım gönderebilmek için mikrofonuna erişim izni vermen gerekiyor.',
    mic_perm_allow:'🎙️ İzin Ver', mic_perm_later:'Daha Sonra',
    mic_blocked_hint:'Sesli mesaj göndermek için dokun ve izin ver',
    mic_granted_msg:'Mikrofon izni verildi ✓', mic_denied_msg:'Mikrofon izni reddedildi',
    mic_denied_settings:'Mikrofon izni reddedildi. Tarayıcı ayarlarından izin vermen gerekiyor.',
    mic_checking:'Kontrol ediliyor...',
    record_voice_first:'Önce bir sesli kayıt yapın.',
    pmusic_label:'Profil Müziği', pmusic_placeholder:'https://... (mp3 linki veya YouTube linki)',
    pmusic_hint:'Profilini ziyaret eden kişi sayfayı açtığında bu müzik otomatik çalmaya başlar.',
    save_pmusic:'Kaydet', clear_pmusic:'Kaldır', pmusic_saved:'Profil müziği kaydedildi',
    pmusic_cleared:'Profil müziği kaldırıldı', pmusic_invalid:'Geçerli bir mp3 veya YouTube linki girin.',
    now_playing:'Şimdi Çalıyor', tap_to_play_music:'Müziği çalmak için dokun',
    pmusic_tab_link:'🔗 Link', pmusic_tab_upload:'📁 Dosya Yükle',
    pmusic_upload_hint:'Cihazından bir mp3 dosyası seç (en fazla 30 saniye)',
    pmusic_upload_size_hint:'Dosya, sunucu yerine bu uygulamanın veritabanında küçük boyutlu olarak saklanır; bu yüzden kısa tutman gerekiyor.',
    pmusic_upload_too_long:'Ses dosyası 30 saniyeden uzun olamaz.',
    pmusic_upload_too_big:'Dosya çok büyük, lütfen daha kısa/küçük bir dosya seç.',
    pmusic_upload_invalid_type:'Lütfen bir ses dosyası seç (mp3, wav, ogg, m4a).',
    pmusic_uploading:'Yükleniyor...', pmusic_upload_done:'Dosya hazır, kaydetmeyi unutma',
    pmusic_upload_error:'Dosya işlenemedi, tekrar dene.'
  },
  tk: {
    login_tab:'Giriş', register_tab:'Hasaba Al', email:'E-poçta', password:'Açar söz',
    name:'Ady', login_btn:'Giriş', register_btn:'Hasaba Al',
    tab_chats:'SÖHBETLER', tab_feed:'AKYM',
    search_placeholder:'Ady bilen gözleg...', empty_search:'Ulanyjy gözlemek üçin ady ýazyň',
    stories_title:'Hekaýalar', add_story:'Goşmak', empty_feed:'Henüz paýlaşym ýok',
    no_chat_hint:'Habar ýazmak üçin ulanyjy saýlaň', msg_placeholder:'Habar ýaz...',
    new_post:'Täze Paýlaşym', ptype_text:'✏️ Tekst', ptype_link:'🔗 Link', ptype_story:'🌟 Hekaýa',
    post_text_ph:'Näme pikir edýärsiň?', cancel:'Ýatyr', share:'Paýlaş',
    my_profile:'Meniň profilim', logout:'Çykmak',
    online:'Onlaýn', last_seen:'Soňky görülen:',
    err_fill:'Ähli meýdanlary dolduryň.', err_pass:'Açar söz iň az 6 nyşan.',
    err_email:'Bu e-poçta eýýäm hasaba alyndy.', err_login:'E-poçta ýa-da açar söz nädogry.',
    err_conn:'Baglanyşyk ýalňyşlygy, täzeden synanyşyň.', ok_register:'Hasaba alyndy! Hoş geldiňiz 🎉',
    logged_out:'Çykyldy', feed_locked:'Bu paýlaşymy görmek üçin ilki habar ýazmaly.',
    tagline:'Çalt we ygtybarly habarlaşma', send_msg:'Habar ugrat',
    no_post_text:'Tekst boş bolup bilmez.', no_post_link:'Dogry link giriziň.',
    post_shared:'Paýlaşyldy!', ago_just:'Az öň', ago_min:' min öň', ago_hour:' sag öň', ago_day:' gün öň',
    no_msg_yet:'Henüz habar ýok 👋', no_post_found:'Paýlaşym tapylmady', no_user_found:'Ulanyjy tapylmady',
    confirm_delete:'Paýlaşym pozulsynmy?',
    bio_label:'Barada', bio_placeholder:'Özüň barada ýaz...', save_bio:'Ýatda sakla', bio_saved:'Bio täzelendi',
    followers:'Yzarlaýjy', following:'Yzarlaýar',
    btn_follow:'Yzarla', btn_pending:'Soraldy', btn_following:'Yzarlaýarsyň', btn_message:'Habar',
    requests_title:'Yzarlama Soraglary', no_requests:'Garaşylýan soraglar ýok',
    req_sent:'Yzarlama islegi iberildi', req_accepted:'Islegi kabul edildi', req_declined:'Islegi ret edildi',
    unfollowed:'Yzarlamak bes edildi', req_accept:'Tassykla', req_decline:'Ret et',
    locked_profile:'Bu hasabyň mazmunyny görmek üçin yzarlamaly.',
    share_my_profile:'Profilimi Paýlaş', share_profile:'Profili Paýlaş',
    share_profile_title:'Profili Paýlaş', share_profile_desc:'Bu linki paýlaşyp profili görkez.',
    share_msg_title:'Habarlaşma Linki', share_msg_desc:'Bu linke basan adam bilen göni habarlaşyp başlarsyň.',
    copy:'Göçür', copied:'Göçürildi!', more:'Başga', close:'Ýap',
    link_copied:'Link göçürildi', dm_started:'Söhbet açyldy',
    ptype_voice:'🎤 Ses', tap_to_record:'Ýazgy almak üçin basyň', stop:'Duruzmak',
    mic_denied:'Mikrofon rugsady berilmedi.', mic_error:'Mikrofona girip bolmady.',
    voice_too_short:'Ýazgy gaty gysga.', voice_sent:'Sesli habar iberildi',
    voice_post_shared:'Sesli paýlaşym edildi!', voice_max_warning:'Iň köp 60 sekunt ýazgy alyp bolar.',
    mic_perm_title:'Mikrofon Rugsady', mic_perm_desc:'Sesli habar we sesli paýlaşym ibermek üçin mikrofonyňa rugsat bermeli.',
    mic_perm_allow:'🎙️ Rugsat Ber', mic_perm_later:'Soňra',
    mic_blocked_hint:'Sesli habar ibermek üçin basyň we rugsat beriň',
    mic_granted_msg:'Mikrofon rugsady berildi ✓', mic_denied_msg:'Mikrofon rugsady ret edildi',
    mic_denied_settings:'Mikrofon rugsady ret edildi. Brauzer sazlamalaryndan rugsat bermeli.',
    mic_checking:'Barlanýar...',
    record_voice_first:'Ilki sesli ýazgy ediň.',
    pmusic_label:'Profil Aýdymy', pmusic_placeholder:'https://... (mp3 linki ýa-da YouTube linki)',
    pmusic_hint:'Profiliňi gören adam sahypany açanda bu aýdym awtomatik çalyp başlar.',
    save_pmusic:'Ýatda sakla', clear_pmusic:'Aýyr', pmusic_saved:'Profil aýdymy ýatda saklandy',
    pmusic_cleared:'Profil aýdymy aýryldy', pmusic_invalid:'Dogry mp3 ýa-da YouTube linki giriziň.',
    now_playing:'Häzir Çalýar', tap_to_play_music:'Aýdymy çalmak üçin basyň',
    pmusic_tab_link:'🔗 Link', pmusic_tab_upload:'📁 Faýl Ýükle',
    pmusic_upload_hint:'Enjamyňdan mp3 faýl saýla (iň köp 30 sekunt)',
    pmusic_upload_size_hint:'Faýl, serweriň ýerine bu programmanyň bazasynda kiçi göwrümde saklanýar; şonuň üçin gysga bolmaly.',
    pmusic_upload_too_long:'Ses faýly 30 sekuntdan uzyn bolup bilmez.',
    pmusic_upload_too_big:'Faýl gaty uly, gysga/kiçi faýl saýlaň.',
    pmusic_upload_invalid_type:'Ses faýly saýlaň (mp3, wav, ogg, m4a).',
    pmusic_uploading:'Ýüklenýär...', pmusic_upload_done:'Faýl taýyn, ýatda saklamagy unutma',
    pmusic_upload_error:'Faýl işlenip bilinmedi, gaýtadan synanyş.'
  }
};
let lang = localStorage.getItem('ptg_lang') || 'tr';

function t(key){ return (LANGS[lang]||LANGS.tr)[key] || key; }

function setLang(l){
  lang=l; localStorage.setItem('ptg_lang',l);
  document.querySelectorAll('[data-i]').forEach(el=>{ const k=el.getAttribute('data-i'); if(LANGS[l][k]) el.textContent=LANGS[l][k]; });
  document.querySelectorAll('[data-i-placeholder]').forEach(el=>{ const k=el.getAttribute('data-i-placeholder'); if(LANGS[l][k]) el.placeholder=LANGS[l][k]; });
  document.getElementById('auth-tagline').textContent=t('tagline');
  document.querySelectorAll('.lang-btn').forEach(b=>b.classList.toggle('active', b.textContent.includes(l==='tr'?'Türkçe':'Türkmençe')));
}

// ══════════════════════════════════════════════════════
//  JSONBIN
// ══════════════════════════════════════════════════════
const JSONBIN_KEY  = '$2a$10$JGOBHlKcxZkUbNs5cdk94.hBGlx6vtDMYI5uf0iAzSWlqSlS.J8UW';
const JSONBIN_BASE = 'https://api.jsonbin.io/v3';
let BIN_IDS = JSON.parse(localStorage.getItem('ptg_bins')||'{}');
const _cache = { users:{}, msgs:{}, posts:{}, follows:{} };

async function getBinId(key){
  if(BIN_IDS[key]) return BIN_IDS[key];
  const r=await fetch(`${JSONBIN_BASE}/b`,{method:'POST',headers:{'Content-Type':'application/json','X-Master-Key':JSONBIN_KEY,'X-Bin-Name':'ptg_'+key,'X-Bin-Private':'false'},body:JSON.stringify({})});
  if(!r.ok) throw new Error('bin error');
  const d=await r.json(); BIN_IDS[key]=d.metadata.id;
  localStorage.setItem('ptg_bins',JSON.stringify(BIN_IDS)); return BIN_IDS[key];
}
async function loadData(key){
  try{ const id=await getBinId(key); const r=await fetch(`${JSONBIN_BASE}/b/${id}/latest`,{headers:{'X-Master-Key':JSONBIN_KEY}}); if(!r.ok) return _cache[key]||{}; const d=await r.json(); _cache[key]=d.record||{}; return _cache[key]; }
  catch{ return _cache[key]||{}; }
}
async function saveData(key,data){ _cache[key]=data; try{ const id=await getBinId(key); await fetch(`${JSONBIN_BASE}/b/${id}`,{method:'PUT',headers:{'Content-Type':'application/json','X-Master-Key':JSONBIN_KEY},body:JSON.stringify(data)}); }catch(e){ console.warn(e); } }

// ══════════════════════════════════════════════════════
//  STATE
// ══════════════════════════════════════════════════════
let currentUser=null, activeContact=null, pollTimer=null, lastMsgCount=0, searchMode=false, currentSideTab='chats', lastKnownOnline={};
let tabSwipeStartX=0, tabSwipeStartY=0;
let viewingProfileUid=null;
let shareContext=null; // {type:'profile'|'dm', uid}
let pendingDeepLink=null;

// Ses kaydı state
let mediaRecorder=null, recordedChunks=[], recStartTime=0, recTimerInterval=null, recStream=null;
let micPermissionState='unknown'; // 'unknown' | 'granted' | 'denied'
let recordedVoiceData=null; // {base64, duration, mime}
let voicePreviewAudio=null;
let postMediaRecorder=null, postRecordedChunks=[], postRecStartTime=0, postRecTimerInterval=null, postRecStream=null;
let postRecordedVoiceData=null;
let postVoicePreviewAudio=null;
const MAX_VOICE_SECONDS=60;

// ══════════════════════════════════════════════════════
//  AUDIO — Geliştirilmiş Ses Efektleri
// ══════════════════════════════════════════════════════
let _actx;
function ac(){ if(!_actx) _actx=new(window.AudioContext||window.webkitAudioContext)(); return _actx; }

function playSend(){ 
  try{ 
    const c=ac(),now=c.currentTime,o=c.createOscillator(),g=c.createGain(); 
    o.connect(g);g.connect(c.destination);o.type='sine';
    o.frequency.setValueAtTime(700,now);o.frequency.exponentialRampToValueAtTime(1000,now+.12);
    g.gain.setValueAtTime(0,now);g.gain.linearRampToValueAtTime(.25,now+.02);g.gain.exponentialRampToValueAtTime(.001,now+.15);
    o.start(now);o.stop(now+.2); 
  }catch(e){} 
}

function playRecv(){ 
  try{ 
    const c=ac(),now=c.currentTime;
    [0,.1].forEach((d,i)=>{ 
      const o=c.createOscillator(),g=c.createGain();
      o.connect(g);g.connect(c.destination);o.type='sine';
      o.frequency.value=i===0?900:1200;
      g.gain.setValueAtTime(0,now+d);g.gain.linearRampToValueAtTime(.22,now+d+.02);g.gain.exponentialRampToValueAtTime(.001,now+d+.2);
      o.start(now+d);o.stop(now+d+.24); 
    }); 
  }catch(e){} 
}

function playOnline(){ 
  try{ 
    const c=ac(),now=c.currentTime;
    const notes=[523,658];
    notes.forEach((freq,i)=>{ 
      const o=c.createOscillator(),g=c.createGain();
      o.connect(g);g.connect(c.destination);o.type='triangle';
      o.frequency.value=freq;
      g.gain.setValueAtTime(0,now+i*0.08);g.gain.linearRampToValueAtTime(.18,now+i*0.08+.02);g.gain.exponentialRampToValueAtTime(.001,now+i*0.08+.14);
      o.start(now+i*0.08);o.stop(now+i*0.08+.16); 
    }); 
  }catch(e){} 
}

function playOffline(){ 
  try{ 
    const c=ac(),now=c.currentTime,o=c.createOscillator(),g=c.createGain();
    o.connect(g);g.connect(c.destination);o.type='triangle';
    o.frequency.setValueAtTime(700,now);o.frequency.exponentialRampToValueAtTime(350,now+.2);
    g.gain.setValueAtTime(.15,now);g.gain.exponentialRampToValueAtTime(.001,now+.22);
    o.start(now);o.stop(now+.24); 
  }catch(e){} 
}

function playTyping(){
  try{
    const c=ac(),now=c.currentTime;
    for(let i=0;i<3;i++){
      const o=c.createOscillator(),g=c.createGain();
      o.connect(g);g.connect(c.destination);o.type='sine';
      o.frequency.value=400+i*100;
      g.gain.setValueAtTime(0,now+i*0.08);g.gain.linearRampToValueAtTime(.08,now+i*0.08+.01);g.gain.linearRampToValueAtTime(0,now+i*0.08+.08);
      o.start(now+i*0.08);o.stop(now+i*0.08+.1);
    }
  }catch(e){}
}

// ══════════════════════════════════════════════════════
//  UTILS
// ══════════════════════════════════════════════════════
const COLORS=['#075E54','#128C7E','#e67e22','#9b59b6','#e74c3c','#2980b9','#16a085','#8e44ad'];
function avatarColor(n){ let h=0; for(const c of n) h=(h*31+c.charCodeAt(0))%COLORS.length; return COLORS[h]; }
function initials(n){ return n.split(' ').slice(0,2).map(w=>w[0]||'').join('').toUpperCase(); }
function fmtTime(ts){ return new Date(ts).toLocaleTimeString('tr-TR',{hour:'2-digit',minute:'2-digit'}); }
function fmtDate(ts){ const d=new Date(ts),now=new Date(); if(d.toDateString()===now.toDateString()) return 'Bugün'; const y=new Date(now);y.setDate(y.getDate()-1); if(d.toDateString()===y.toDateString()) return 'Dün'; return d.toLocaleDateString('tr-TR',{day:'numeric',month:'long'}); }
function timeAgo(ts){ const s=Math.floor((Date.now()-ts)/1000); if(s<60) return t('ago_just'); if(s<3600) return Math.floor(s/60)+t('ago_min'); if(s<86400) return Math.floor(s/3600)+t('ago_hour'); return Math.floor(s/86400)+t('ago_day'); }
function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\n/g,'<br>'); }
function hashPass(p){ let h=5381; for(const c of p) h=((h<<5)+h+c.charCodeAt(0))|0; return h.toString(36); }
function convId(a,b){ return [a,b].sort().join('__'); }
function showToast(msg, icon='✓'){ 
  const t2=document.getElementById('toast');
  t2.textContent=icon+' '+msg;
  t2.classList.add('show');
  setTimeout(()=>t2.classList.remove('show'),2500);
  
  // Browser Notification API (tarayıcı push bildirimi olarak da gözükür)
  if('Notification' in window && Notification.permission==='granted'){
    try{
      new Notification('Poçtagram',{
        body:msg,
        icon:'data:image/svg+xml,<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" r="32" fill="%23075E54"/><path d="M32 10C20.95 10 12 18.95 12 30C12 33.8 13.08 37.34 14.95 40.34L12 52L23.95 49.12C26.82 50.67 30.3 51.6 34 51.6C45.05 51.6 54 42.65 54 31.6C54 20.55 45.05 10 32 10Z" fill="%2325D366"/></svg>',
        badge:'data:image/svg+xml,<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" r="32" fill="%23075E54"/></svg>',
        tag:'poctagram-notification',
        requireInteraction:false
      });
    }catch(e){}
  } else if('Notification' in window && Notification.permission!=='denied'){
    Notification.requestPermission().then(()=>{});
  }
}
function setAuthMsg(msg,type=''){ const el=document.getElementById('auth-msg');el.textContent=msg;el.className='auth-msg '+type; }
function showChat(show){ document.getElementById('no-chat').style.display=show?'none':'flex'; document.getElementById('active-chat').style.display=show?'flex':'none'; }
function setLoading(id,loading,label){ const b=document.getElementById(id);b.disabled=loading;b.innerHTML=loading?'<div class="loader"></div>':label; }

// İki kullanıcı birbiriyle mesajlaştı mı?
function haveMessaged(uid1,uid2,msgs){ const cid=convId(uid1,uid2); return Object.values(msgs).some(m=>m.conv===cid); }

// ══════════════════════════════════════════════════════
//  TAKİP SİSTEMİ (follows store)
//  follows[id] = { id, from, to, status: 'pending'|'accepted', ts }
// ══════════════════════════════════════════════════════
function followEdgeId(from,to){ return 'f_'+from+'__'+to; }

function getFollowStatus(follows, fromUid, toUid){
  const e=follows[followEdgeId(fromUid,toUid)];
  return e ? e.status : null; // null | 'pending' | 'accepted'
}

function isFollowing(follows, fromUid, toUid){
  return getFollowStatus(follows, fromUid, toUid)==='accepted';
}

function countFollowers(follows, uid){
  return Object.values(follows).filter(e=>e.to===uid && e.status==='accepted').length;
}
function countFollowing(follows, uid){
  return Object.values(follows).filter(e=>e.from===uid && e.status==='accepted').length;
}

async function sendFollowRequest(targetUid){
  if(!currentUser || targetUid===currentUser.id) return;
  const follows=await loadData('follows');
  const eid=followEdgeId(currentUser.id,targetUid);
  if(follows[eid]) return; // zaten istek var ya da takip ediyor
  follows[eid]={ id:eid, from:currentUser.id, to:targetUid, status:'pending', ts:Date.now() };
  await saveData('follows',follows);
  showToast(t('req_sent'),'📨');
  if(viewingProfileUid===targetUid) renderUserProfileActions();
}

async function cancelFollowRequest(targetUid){
  const follows=await loadData('follows');
  const eid=followEdgeId(currentUser.id,targetUid);
  if(follows[eid] && follows[eid].status==='pending'){ delete follows[eid]; await saveData('follows',follows); }
  if(viewingProfileUid===targetUid) renderUserProfileActions();
}

async function unfollowUser(targetUid){
  const follows=await loadData('follows');
  const eid=followEdgeId(currentUser.id,targetUid);
  if(follows[eid]){ delete follows[eid]; await saveData('follows',follows); }
  showToast(t('unfollowed'),'👋');
  if(viewingProfileUid===targetUid) renderUserProfileActions();
}

async function acceptFollowRequest(fromUid){
  const follows=await loadData('follows');
  const eid=followEdgeId(fromUid,currentUser.id);
  if(follows[eid]){ follows[eid].status='accepted'; await saveData('follows',follows); }
  showToast(t('req_accepted'),'✅');
  renderRequestsList(); updateRequestsBadge();
}

async function declineFollowRequest(fromUid){
  const follows=await loadData('follows');
  const eid=followEdgeId(fromUid,currentUser.id);
  if(follows[eid]){ delete follows[eid]; await saveData('follows',follows); }
  showToast(t('req_declined'),'🚫');
  renderRequestsList(); updateRequestsBadge();
}

async function updateRequestsBadge(){
  if(!currentUser) return;
  const follows=await loadData('follows');
  const pendingCount=Object.values(follows).filter(e=>e.to===currentUser.id && e.status==='pending').length;
  document.getElementById('req-badge-dot').style.display=pendingCount>0?'block':'none';
}

// ══════════════════════════════════════════════════════
//  TAB SWITCH (auth)
// ══════════════════════════════════════════════════════
function switchTab(tab){
  document.getElementById('form-login').style.display    =tab==='login'?'':'none';
  document.getElementById('form-register').style.display =tab==='register'?'':'none';
  document.getElementById('tab-login').classList.toggle('active',tab==='login');
  document.getElementById('tab-register').classList.toggle('active',tab==='register');
  setAuthMsg('');
}

// ══════════════════════════════════════════════════════
//  SIDE TAB SWITCH (Sohbetler / Akış) — SWIPE DESTEĞI
// ══════════════════════════════════════════════════════
function switchSideTab(tab){
  currentSideTab=tab;
  document.getElementById('stab-chats').classList.toggle('active',tab==='chats');
  document.getElementById('stab-feed').classList.toggle('active',tab==='feed');
  document.getElementById('tab-chats').style.display=tab==='chats'?'flex':'none';
  const feedEl=document.getElementById('tab-feed');
  if(tab==='feed'){ feedEl.classList.add('show'); loadFeed(); }
  else             { feedEl.classList.remove('show'); }
  const btn=document.getElementById('create-post-btn');
  if(tab==='feed') btn.classList.add('show'); else btn.classList.remove('show');
  playTyping(); // Sekme geçişi sesini çal
}

// Touch Swipe Desteği
document.addEventListener('touchstart',(e)=>{
  const tabs=document.getElementById('sidebar-tabs');
  if(!tabs||!tabs.contains(e.target)) return;
  tabSwipeStartX=e.touches[0].clientX;
  tabSwipeStartY=e.touches[0].clientY;
},false);

document.addEventListener('touchend',(e)=>{
  const tabs=document.getElementById('sidebar-tabs');
  if(!tabs||!tabs.contains(e.changedTouches[0].target)) return;
  const endX=e.changedTouches[0].clientX;
  const endY=e.changedTouches[0].clientY;
  const diffX=endX-tabSwipeStartX;
  const diffY=endY-tabSwipeStartY;
  if(Math.abs(diffY)>Math.abs(diffX)) return; // Dikey swipe değil
  if(Math.abs(diffX)<30) return; // Çok küçük hareket
  
  if(diffX>0 && currentSideTab==='feed'){ switchSideTab('chats'); }
  else if(diffX<0 && currentSideTab==='chats'){ switchSideTab('feed'); }
},false);

// ══════════════════════════════════════════════════════
//  AUTH
// ══════════════════════════════════════════════════════
async function handleLogin(){
  const email=document.getElementById('login-email').value.trim().toLowerCase();
  const pass=document.getElementById('login-pass').value;
  if(!email||!pass){ setAuthMsg(t('err_fill'),'error'); return; }
  setLoading('btn-login',true,t('login_btn'));
  try{
    const users=await loadData('users');
    const user=Object.values(users).find(u=>u.email===email&&u.password===hashPass(pass));
    if(!user){ setAuthMsg(t('err_login'),'error'); return; }
    users[user.id].online=true; users[user.id].lastSeen=Date.now();
    await saveData('users',users);
    currentUser=users[user.id]; localStorage.setItem('ptg_me',JSON.stringify(currentUser)); enterApp();
  }catch(e){ setAuthMsg(t('err_conn'),'error'); }
  finally{ setLoading('btn-login',false,t('login_btn')); }
}

async function handleRegister(){
  const name=document.getElementById('reg-name').value.trim();
  const email=document.getElementById('reg-email').value.trim().toLowerCase();
  const pass=document.getElementById('reg-pass').value;
  if(!name||!email||!pass){ setAuthMsg(t('err_fill'),'error'); return; }
  if(pass.length<6){ setAuthMsg(t('err_pass'),'error'); return; }
  setLoading('btn-register',true,t('register_btn'));
  try{
    const users=await loadData('users');
    if(Object.values(users).find(u=>u.email===email)){ setAuthMsg(t('err_email'),'error'); return; }
    const id='u'+Date.now()+Math.random().toString(36).slice(2,6);
    const user={id,name,email,password:hashPass(pass),online:true,lastSeen:Date.now(),bio:''};
    users[id]=user; await saveData('users',users);
    currentUser=user; localStorage.setItem('ptg_me',JSON.stringify(currentUser));
    setAuthMsg(t('ok_register'),'success'); setTimeout(enterApp,600);
  }catch(e){ setAuthMsg(t('err_conn'),'error'); }
  finally{ setLoading('btn-register',false,t('register_btn')); }
}

async function handleLogout(){
  try{ const users=await loadData('users'); if(users[currentUser.id]){ users[currentUser.id].online=false;users[currentUser.id].lastSeen=Date.now();await saveData('users',users); } }catch(e){}
  clearInterval(pollTimer); currentUser=null;activeContact=null;
  localStorage.removeItem('ptg_me'); closeProfile(); showChat(false);
  document.getElementById('search-input').value='';
  document.getElementById('contacts-list').innerHTML=emptyStateHTML('search');
  document.getElementById('screen-app').classList.remove('active');
  document.getElementById('screen-auth').classList.add('active');
  switchTab('login'); showToast(t('logged_out'),'👋');
}

// ══════════════════════════════════════════════════════
//  ENTER APP
// ══════════════════════════════════════════════════════
function enterApp(){
  hideSplash();
  document.getElementById('screen-auth').classList.remove('active');
  document.getElementById('screen-app').classList.add('active');
  showChat(false); refreshSidebar(); startPolling();
  // dil uygula
  setLang(lang);
  // tab'ı sıfırla
  switchSideTab('chats');
  updateRequestsBadge();
  handleDeepLinkIfAny();
  initMicPermissionFlow();
}

async function initMicPermissionFlow(){
  await checkMicPermissionSilently();
  if(micPermissionState!=='granted'){
    setTimeout(()=>{ if(micPermissionState!=='granted') openMicPermissionModal(); },1200);
  }
}

function hideSplash(){
  const s=document.getElementById('screen-splash');
  if(s) s.style.display='none';
}

// ══════════════════════════════════════════════════════
//  SIDEBAR
// ══════════════════════════════════════════════════════
function emptyStateHTML(type){
  if(type==='search') return `<div class="empty-state"><svg fill="none" stroke="currentColor" stroke-width="1" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg><p>${t('empty_search')}</p></div>`;
  return `<div class="empty-state"><svg fill="none" stroke="currentColor" stroke-width="1" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg><p>${t('no_user_found')}</p></div>`;
}

async function refreshSidebar(){
  if(searchMode) return;
  const [users,msgs]=await Promise.all([loadData('users'),loadData('msgs')]);
  const seen={};
  Object.values(msgs).forEach(m=>{ if(m.from===currentUser.id||m.to===currentUser.id){ const o=m.from===currentUser.id?m.to:m.from; if(!seen[o]||m.ts>seen[o]) seen[o]=m.ts; } });
  const contacts=Object.keys(seen).sort((a,b)=>seen[b]-seen[a]).map(uid=>users[uid]).filter(Boolean);
  if(!contacts.length){ document.getElementById('contacts-list').innerHTML=emptyStateHTML('search'); return; }
  renderContactList(contacts,msgs);
}

function renderContactList(users,msgs){
  if(!msgs) msgs=_cache.msgs||{};
  const list=document.getElementById('contacts-list');
  if(!users.length){ list.innerHTML=emptyStateHTML('none'); return; }
  list.innerHTML=users.map(u=>{
    const cid=convId(currentUser.id,u.id);
    const conv=Object.values(msgs).filter(m=>m.conv===cid).sort((a,b)=>a.ts-b.ts);
    const last=conv[conv.length-1]; const unread=conv.filter(m=>m.from===u.id&&!m.read).length;
    const col=avatarColor(u.name); const online=u.online&&(Date.now()-u.lastSeen<90000);
    const active=activeContact&&activeContact.id===u.id;
    return `<div class="contact-item${active?' active':''}" data-uid="${u.id}">
      <div class="avatar" style="background:${col}" onclick="openUserProfile('${u.id}')">${initials(u.name)}${online?'<span class="online-dot"></span>':''}</div>
      <div class="contact-info" onclick="openChat('${u.id}')">
        <div class="contact-name">${esc(u.name)}</div>
        <div class="contact-last">${last?esc(last.text.slice(0,45)):`<span style="color:#aaa">${t('send_msg')}</span>`}</div>
      </div>
      <div class="contact-meta" onclick="openChat('${u.id}')">
        ${last?`<span class="contact-time">${fmtTime(last.ts)}</span>`:''}
        ${unread?`<span class="unread-badge">${unread>9?'9+':unread}</span>`:''}
      </div>
    </div>`;
  }).join('');
}

async function handleSearch(){
  const q=document.getElementById('search-input').value.trim().toLowerCase();
  if(!q){ searchMode=false;refreshSidebar();return; }
  searchMode=true;
  const users=await loadData('users');
  const results=Object.values(users).filter(u=>u.id!==currentUser.id&&u.name.toLowerCase().includes(q));
  renderContactList(results);
}

// ══════════════════════════════════════════════════════
//  CHAT
// ══════════════════════════════════════════════════════
async function openChat(uid){
  const users=await loadData('users'); if(!users[uid]) return;
  activeContact=users[uid];
  document.getElementById('search-input').value=''; searchMode=false;
  showChat(true); document.getElementById('chat-area').classList.add('open');
  const col=avatarColor(activeContact.name);
  const av=document.getElementById('chat-header-avatar'); av.style.background=col;av.textContent=initials(activeContact.name);
  document.getElementById('chat-header-name').textContent=activeContact.name;
  const online=activeContact.online&&(Date.now()-activeContact.lastSeen<90000);
  document.getElementById('chat-header-status').textContent=online?t('online'):t('last_seen')+' '+fmtTime(activeContact.lastSeen);
  lastKnownOnline[uid]=online;
  await renderMessages(); markRead(uid); refreshSidebar();
  setTimeout(()=>document.getElementById('msg-input').focus(),150);
}

function closeChatMobile(){ document.getElementById('chat-area').classList.remove('open');showChat(false);activeContact=null;refreshSidebar(); }

async function renderMessages(){
  if(!activeContact) return;
  const msgs=await loadData('msgs');
  const cid=convId(currentUser.id,activeContact.id);
  const conv=Object.values(msgs).filter(m=>m.conv===cid).sort((a,b)=>a.ts-b.ts);
  const wrap=document.getElementById('messages-wrap');
  if(!conv.length){ wrap.innerHTML=`<div style="text-align:center;color:#aaa;padding:40px 20px;font-size:13px;">${t('no_msg_yet')}</div>`;lastMsgCount=0;return; }
  let html='',lastDate='';
  conv.forEach(m=>{
    const d=fmtDate(m.ts);
    if(d!==lastDate){ html+=`<div class="date-divider"><span>${d}</span></div>`;lastDate=d; }
    const out=m.from===currentUser.id;
    let tickHTML='';
    if(out){
      const st=m.status||'delivered';
      if(st==='sending') tickHTML=`<span class="msg-sending"><span class="sq"></span><span class="sq"></span><span class="sq"></span><span class="sq"></span><span class="sq"></span></span>`;
      else if(st==='sent') tickHTML=`<span class="tick"><svg viewBox="0 0 18 18"><path fill="#aaa" d="M17.394 5.035l-.57-.444a.434.434 0 0 0-.609.076L8.397 13.13l-3.967-3.497a.434.434 0 0 0-.614.029l-.505.545a.434.434 0 0 0 .028.614l4.553 4.017a.434.434 0 0 0 .614-.028l9.056-10.561a.434.434 0 0 0-.168-.214z"/></svg></span>`;
      else if(m.read) tickHTML=`<span class="tick"><svg viewBox="0 0 18 18"><path fill="#53bdeb" d="M17.394 5.035l-.57-.444a.434.434 0 0 0-.609.076L8.397 13.13l-3.967-3.497a.434.434 0 0 0-.614.029l-.505.545a.434.434 0 0 0 .028.614l4.553 4.017a.434.434 0 0 0 .614-.028l9.056-10.561a.434.434 0 0 0-.168-.214z"/><path fill="#53bdeb" d="M12.694 5.035l-.57-.444a.434.434 0 0 0-.609.076L3.697 13.13l-1.967-1.497a.434.434 0 0 0-.614.029l-.505.545a.434.434 0 0 0 .028.614l2.553 2.017a.434.434 0 0 0 .614-.028l9.056-10.561a.434.434 0 0 0-.062-.214z"/></svg></span>`;
      else tickHTML=`<span class="tick"><svg viewBox="0 0 18 18"><path fill="#aaa" d="M17.394 5.035l-.57-.444a.434.434 0 0 0-.609.076L8.397 13.13l-3.967-3.497a.434.434 0 0 0-.614.029l-.505.545a.434.434 0 0 0 .028.614l4.553 4.017a.434.434 0 0 0 .614-.028l9.056-10.561a.434.434 0 0 0-.168-.214z"/><path fill="#aaa" d="M12.694 5.035l-.57-.444a.434.434 0 0 0-.609.076L3.697 13.13l-1.967-1.497a.434.434 0 0 0-.614.029l-.505.545a.434.434 0 0 0 .028.614l2.553 2.017a.434.434 0 0 0 .614-.028l9.056-10.561a.434.434 0 0 0-.062-.214z"/></svg></span>`;
    }
    if(m.voice){
      const waveBars=buildStaticWaveHTML(m.voiceWave||defaultWavePattern(),'voice-msg-wave','msg-wave-'+m.id);
      html+=`<div class="msg-row ${out?'out':'in'}"><div class="msg-bubble voice-msg-bubble" style="user-select:text">
        <button class="voice-play-btn" onclick="playVoiceMessage('${m.id}','${esc(m.voice).replace(/'/g,"\\'")}',this)">
          <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
        </button>
        ${waveBars}
        <span class="voice-msg-duration">${fmtDuration(m.voiceDuration||0)}</span>
        <div class="msg-meta" style="margin-top:0">${tickHTML}</div>
      </div></div>`;
    } else {
    html+=`<div class="msg-row ${out?'out':'in'}"><div class="msg-bubble" style="user-select:text">${esc(m.text)}<div class="msg-meta"><span>${fmtTime(m.ts)}</span>${tickHTML}</div></div></div>`;
    }
  });
  wrap.innerHTML=html;wrap.scrollTop=wrap.scrollHeight;lastMsgCount=conv.length;
}

async function markRead(fromUid){
  const msgs=await loadData('msgs');let changed=false;
  Object.values(msgs).forEach(m=>{ if(m.from===fromUid&&m.to===currentUser.id&&!m.read){ m.read=true;changed=true; } });
  if(changed){ _cache.msgs=msgs;saveData('msgs',msgs);if(activeContact&&activeContact.id===fromUid) renderMessages(); }
}

async function sendMessage(){
  const input=document.getElementById('msg-input');const text=input.value.trim();
  if(!text||!activeContact) return;
  input.value='';autoResize(input);playSend();
  const msgId='m'+Date.now()+Math.random().toString(36).slice(2,5);
  const msg={id:msgId,conv:convId(currentUser.id,activeContact.id),from:currentUser.id,to:activeContact.id,text,ts:Date.now(),read:false,status:'sending'};
  if(!_cache.msgs) _cache.msgs={}; _cache.msgs[msgId]=msg;
  await renderMessages();refreshSidebar();
  try{ const msgs=await loadData('msgs');msgs[msgId]={...msg,status:'sent'};await saveData('msgs',msgs);_cache.msgs[msgId].status='sent';await renderMessages(); }
  catch(e){ console.warn(e); }
}

async function sendMessageRaw(text, isSticker){
  if(!text||!activeContact) return;
  playSend();
  const msgId='m'+Date.now()+Math.random().toString(36).slice(2,5);
  const msg={id:msgId,conv:convId(currentUser.id,activeContact.id),from:currentUser.id,to:activeContact.id,text,sticker:!!isSticker,ts:Date.now(),read:false,status:'sending'};
  if(!_cache.msgs) _cache.msgs={}; _cache.msgs[msgId]=msg;
  await renderMessages();refreshSidebar();
  try{ const msgs=await loadData('msgs');msgs[msgId]={...msg,status:'sent'};await saveData('msgs',msgs);_cache.msgs[msgId].status='sent';await renderMessages(); }
  catch(e){ console.warn(e); }
}

// ══════════════════════════════════════════════════════
//  SES KAYDI YARDIMCILARI (ortak)
// ══════════════════════════════════════════════════════
function fmtDuration(sec){ sec=Math.round(sec||0); const m=Math.floor(sec/60),s=sec%60; return m+':'+String(s).padStart(2,'0'); }

function blobToBase64(blob){
  return new Promise((resolve,reject)=>{
    const reader=new FileReader();
    reader.onloadend=()=>resolve(reader.result);
    reader.onerror=reject;
    reader.readAsDataURL(blob);
  });
}

function defaultWavePattern(){
  // Rastgele görsel dalga deseni (gerçek ses analiz değil, görsel amaçlı)
  const bars=[]; for(let i=0;i<24;i++) bars.push(6+Math.round(Math.random()*16));
  return bars;
}

function buildStaticWaveHTML(pattern,cls,id){
  return `<div class="${cls}" id="${id}">`+pattern.map(h=>`<span style="height:${h}px"></span>`).join('')+`</div>`;
}

function pickMimeType(){
  const candidates=['audio/webm','audio/mp4','audio/ogg'];
  for(const c of candidates){ if(window.MediaRecorder && MediaRecorder.isTypeSupported && MediaRecorder.isTypeSupported(c)) return c; }
  return '';
}

// ══════════════════════════════════════════════════════
//  MİKROFON İZNİ YÖNETİMİ
// ══════════════════════════════════════════════════════
function openMicPermissionModal(){
  document.getElementById('mic-perm-status').textContent='';
  document.getElementById('mic-perm-status').className='mic-perm-status';
  document.getElementById('mic-permission-modal').classList.add('show');
}
function closeMicPermissionModal(){
  document.getElementById('mic-permission-modal').classList.remove('show');
}

async function requestMicPermission(){
  const statusEl=document.getElementById('mic-perm-status');
  const btn=document.getElementById('btn-mic-allow');
  statusEl.textContent=t('mic_checking'); statusEl.className='mic-perm-status';
  btn.disabled=true;
  try{
    const stream=await navigator.mediaDevices.getUserMedia({audio:true});
    // İzin verildi — akışı hemen kapat, sadece izni test ettik
    stream.getTracks().forEach(tr=>tr.stop());
    micPermissionState='granted';
    statusEl.textContent=t('mic_granted_msg'); statusEl.className='mic-perm-status granted';
    updateMicPillVisibility();
    showToast(t('mic_granted_msg'),'🎙️');
    setTimeout(closeMicPermissionModal,900);
  }catch(e){
    micPermissionState='denied';
    statusEl.textContent=t('mic_denied_settings'); statusEl.className='mic-perm-status denied';
    updateMicPillVisibility();
  }finally{
    btn.disabled=false;
  }
}

function updateMicPillVisibility(){
  const blocked=micPermissionState!=='granted';
  const chatPill=document.getElementById('chat-mic-pill');
  const postPill=document.getElementById('post-mic-pill');
  if(chatPill) chatPill.classList.toggle('show',blocked);
  if(postPill) postPill.classList.toggle('show',blocked);
  const chatBtn=document.getElementById('voice-record-btn');
  const postBtn=document.getElementById('post-voice-record-btn');
  if(chatBtn) chatBtn.classList.toggle('blocked',blocked);
  if(postBtn) postBtn.classList.toggle('blocked',blocked);
}

// Tarayıcı izin durumunu sessizce kontrol et (mümkünse), modalı otomatik tetikleme
async function checkMicPermissionSilently(){
  try{
    if(navigator.permissions && navigator.permissions.query){
      const status=await navigator.permissions.query({name:'microphone'});
      if(status.state==='granted') micPermissionState='granted';
      else if(status.state==='denied') micPermissionState='denied';
      else micPermissionState='unknown';
      status.onchange=()=>{
        micPermissionState=status.state==='granted'?'granted':(status.state==='denied'?'denied':'unknown');
        updateMicPillVisibility();
      };
    }
  }catch(e){ /* permissions API desteklenmiyor olabilir, sorun değil */ }
  updateMicPillVisibility();
}

// Kayıt başlatmadan önce izin var mı kontrol et; yoksa izin modalını aç
function ensureMicPermission(){
  if(micPermissionState==='granted') return true;
  openMicPermissionModal();
  return false;
}

// ══════════════════════════════════════════════════════
//  SESLİ MESAJ — CHAT KAYDI
// ══════════════════════════════════════════════════════
async function toggleVoiceRecording(){
  if(mediaRecorder && mediaRecorder.state==='recording'){ stopVoiceRecording(); return; }
  if(recordedVoiceData){ return; } // önizleme aşamasında yeniden başlatma
  if(!ensureMicPermission()) return;
  try{
    recStream=await navigator.mediaDevices.getUserMedia({audio:true});
    micPermissionState='granted'; updateMicPillVisibility();
  }catch(e){
    micPermissionState='denied'; updateMicPillVisibility();
    showToast(t('mic_denied'),'🎙️'); return;
  }
  recordedChunks=[];
  const mime=pickMimeType();
  try{ mediaRecorder=mime?new MediaRecorder(recStream,{mimeType:mime}):new MediaRecorder(recStream); }
  catch(e){ showToast(t('mic_error'),'⚠️'); return; }
  mediaRecorder.ondataavailable=e=>{ if(e.data && e.data.size>0) recordedChunks.push(e.data); };
  mediaRecorder.onstop=onVoiceRecordingStop;
  mediaRecorder.start();
  recStartTime=Date.now();

  document.getElementById('msg-input').style.display='none';
  document.getElementById('sticker-toggle-btn').style.display='none';
  document.getElementById('recording-bar').classList.add('show');
  document.getElementById('voice-record-btn').classList.add('recording');
  buildRecWave('rec-wave');
  updateRecTimer();
  recTimerInterval=setInterval(updateRecTimer,200);
}

function buildRecWave(elId){
  const el=document.getElementById(elId);
  el.innerHTML='';
  for(let i=0;i<28;i++){ const s=document.createElement('span'); s.style.animationDelay=(Math.random()*0.6)+'s'; el.appendChild(s); }
}

function updateRecTimer(){
  const sec=(Date.now()-recStartTime)/1000;
  document.getElementById('rec-time').textContent=fmtDuration(sec);
  if(sec>=MAX_VOICE_SECONDS){ showToast(t('voice_max_warning'),'⏱️'); stopVoiceRecording(); }
}

function stopVoiceRecording(){
  if(mediaRecorder && mediaRecorder.state==='recording') mediaRecorder.stop();
  clearInterval(recTimerInterval);
  if(recStream){ recStream.getTracks().forEach(tr=>tr.stop()); recStream=null; }
}

function cancelRecording(){
  recordedChunks=[];
  if(mediaRecorder && mediaRecorder.state==='recording'){
    mediaRecorder.onstop=()=>{}; // veriyi atla
    mediaRecorder.stop();
  }
  clearInterval(recTimerInterval);
  if(recStream){ recStream.getTracks().forEach(tr=>tr.stop()); recStream=null; }
  resetVoiceRecordingUI();
}

function resetVoiceRecordingUI(){
  document.getElementById('recording-bar').classList.remove('show');
  document.getElementById('voice-preview-bar').classList.remove('show');
  document.getElementById('msg-input').style.display='';
  document.getElementById('sticker-toggle-btn').style.display='';
  document.getElementById('voice-record-btn').classList.remove('recording');
  recordedVoiceData=null;
}

async function onVoiceRecordingStop(){
  document.getElementById('recording-bar').classList.remove('show');
  document.getElementById('voice-record-btn').classList.remove('recording');
  if(!recordedChunks.length) return;
  const duration=(Date.now()-recStartTime)/1000;
  if(duration<0.6){ resetVoiceRecordingUI(); return; }
  const blob=new Blob(recordedChunks,{type:recordedChunks[0].type||'audio/webm'});
  const base64=await blobToBase64(blob);
  recordedVoiceData={base64,duration,wave:defaultWavePattern()};
  document.getElementById('voice-preview-time').textContent=fmtDuration(duration);
  document.getElementById('voice-preview-bar').classList.add('show');
  document.getElementById('voice-record-btn').style.display='none';
  document.getElementById('send-btn').style.display='none';
}

function discardVoiceRecording(){
  if(voicePreviewAudio){ voicePreviewAudio.pause(); voicePreviewAudio=null; }
  resetVoiceRecordingUI();
  document.getElementById('voice-record-btn').style.display='';
  document.getElementById('send-btn').style.display='';
}

function toggleVoicePreviewPlay(){
  if(!recordedVoiceData) return;
  const icon=document.getElementById('voice-preview-play-icon');
  if(voicePreviewAudio && !voicePreviewAudio.paused){ voicePreviewAudio.pause(); icon.innerHTML='<path d="M8 5v14l11-7z"/>'; return; }
  voicePreviewAudio=new Audio(recordedVoiceData.base64);
  voicePreviewAudio.play();
  icon.innerHTML='<rect x="6" y="5" width="4" height="14"/><rect x="14" y="5" width="4" height="14"/>';
  voicePreviewAudio.onended=()=>{ icon.innerHTML='<path d="M8 5v14l11-7z"/>'; };
}

async function sendVoiceMessage(){
  if(!recordedVoiceData || !activeContact) return;
  playSend();
  const msgId='m'+Date.now()+Math.random().toString(36).slice(2,5);
  const msg={id:msgId,conv:convId(currentUser.id,activeContact.id),from:currentUser.id,to:activeContact.id,
    text:'🎤 '+t('ptype_voice'),voice:recordedVoiceData.base64,voiceDuration:recordedVoiceData.duration,voiceWave:recordedVoiceData.wave,
    ts:Date.now(),read:false,status:'sending'};
  if(!_cache.msgs) _cache.msgs={}; _cache.msgs[msgId]=msg;
  resetVoiceRecordingUI();
  document.getElementById('voice-record-btn').style.display='';
  document.getElementById('send-btn').style.display='';
  await renderMessages();refreshSidebar();
  try{ const msgs=await loadData('msgs');msgs[msgId]={...msg,status:'sent'};await saveData('msgs',msgs);_cache.msgs[msgId].status='sent';await renderMessages(); showToast(t('voice_sent'),'🎤'); }
  catch(e){ console.warn(e); showToast(t('mic_error'),'⚠️'); }
}

let activeVoicePlayer=null, activeVoicePlayerBtn=null;
function playVoiceMessage(id,base64,btnEl){
  if(activeVoicePlayer && activeVoicePlayerBtn===btnEl){
    if(!activeVoicePlayer.paused){ activeVoicePlayer.pause(); btnEl.querySelector('svg').innerHTML='<path d="M8 5v14l11-7z"/>'; return; }
    activeVoicePlayer.play(); btnEl.querySelector('svg').innerHTML='<rect x="6" y="5" width="4" height="14"/><rect x="14" y="5" width="4" height="14"/>'; return;
  }
  if(activeVoicePlayer){ activeVoicePlayer.pause(); if(activeVoicePlayerBtn) activeVoicePlayerBtn.querySelector('svg').innerHTML='<path d="M8 5v14l11-7z"/>'; }
  activeVoicePlayer=new Audio(base64);
  activeVoicePlayerBtn=btnEl;
  const waveEl=document.getElementById('msg-wave-'+id);
  activeVoicePlayer.play();
  btnEl.querySelector('svg').innerHTML='<rect x="6" y="5" width="4" height="14"/><rect x="14" y="5" width="4" height="14"/>';
  activeVoicePlayer.ontimeupdate=()=>{
    if(!waveEl||!activeVoicePlayer.duration) return;
    const ratio=activeVoicePlayer.currentTime/activeVoicePlayer.duration;
    const bars=waveEl.children; const litCount=Math.floor(ratio*bars.length);
    for(let i=0;i<bars.length;i++) bars[i].classList.toggle('played',i<litCount);
  };
  activeVoicePlayer.onended=()=>{ btnEl.querySelector('svg').innerHTML='<path d="M8 5v14l11-7z"/>'; if(waveEl) Array.from(waveEl.children).forEach(b=>b.classList.remove('played')); };
}

function handleInputKey(e){ if(e.key==='Enter'&&!e.shiftKey){ e.preventDefault();sendMessage(); } }
function autoResize(el){ el.style.height='auto';el.style.height=Math.min(el.scrollHeight,120)+'px'; }

// ══════════════════════════════════════════════════════
//  ÇIKARTMALAR (Sticker / Emoji panel)
// ══════════════════════════════════════════════════════
const STICKER_SETS = {
  '😀':['😀','😂','🤣','😍','😘','😜','😎','🤩','🥳','😇','🙃','😅','🤗','🤔','😴','🥱','😋','🤤','😭','😡','🥰','😏','🤭','😱','🫠','🤓','😬','🙄','😤','🤯'],
  '❤️':['❤️','🧡','💛','💚','💙','💜','🖤','🤍','💕','💖','💗','💘','💝','💞','💓','😻','😍','🥰','💋','😘'],
  '👍':['👍','👎','👏','🙌','🤝','🙏','💪','✌️','🤘','👌','🫶','🤙','👋','🫡','✊','🤞','🫰','👊','🖐️','🤲'],
  '🎉':['🎉','🎊','🥳','🎈','🎁','🏆','🥇','🔥','✨','⭐','🌟','💯','🎯','🚀','🌈','☀️','🍀','💎','🎵','🎶'],
  '🐶':['🐶','🐱','🐭','🐹','🐰','🦊','🐻','🐼','🐨','🦁','🐮','🐷','🐸','🐵','🦄','🐔','🦋','🐢','🐬','🐳'],
  '🍕':['🍕','🍔','🍟','🌮','🍣','🍩','🍪','🍰','🎂','☕','🍵','🧋','🍺','🍷','🍓','🍉','🍎','🍌','🥑','🍿']
};
let activeStickerTab='😀';

function buildStickerPanel(){
  const tabsEl=document.getElementById('sticker-tabs');
  tabsEl.innerHTML=Object.keys(STICKER_SETS).map(k=>
    `<button class="sticker-tab-btn${k===activeStickerTab?' active':''}" onclick="switchStickerTab('${k}')">${k}</button>`
  ).join('');
  renderStickerGrid();
}
function switchStickerTab(key){ activeStickerTab=key; buildStickerPanel(); }
function renderStickerGrid(){
  const grid=document.getElementById('sticker-grid');
  grid.innerHTML=STICKER_SETS[activeStickerTab].map(s=>
    `<div class="sticker-cell" onclick="sendSticker('${s}')">${s}</div>`
  ).join('');
}
function toggleStickerPanel(){
  const panel=document.getElementById('sticker-panel');
  const btn=document.querySelector('.sticker-btn');
  const showing=panel.classList.toggle('show');
  btn.classList.toggle('active',showing);
  if(showing) buildStickerPanel();
}
function sendSticker(emoji){
  sendMessageRaw(emoji, true);
}

// ══════════════════════════════════════════════════════
//  AKIŞ / FEED — herkesin postu görünür (kilit yok)
// ══════════════════════════════════════════════════════
let currentPostType='text';

function setPostType(type){
  currentPostType=type;
  ['text','link','voice','story'].forEach(tp=>{
    document.getElementById('ptype-'+tp).classList.toggle('active',tp===type);
  });
  document.getElementById('post-text-input').style.display = (type==='link'||type==='voice')?'none':'block';
  document.getElementById('post-link-input').style.display = (type==='link')?'block':'none';
  document.getElementById('post-voice-wrap').style.display = (type==='voice')?'block':'none';
  const ph = type==='story' ? t('ptype_story')+' yazısını gir' : t('post_text_ph');
  document.getElementById('post-text-input').placeholder=ph;
}

function openPostModal(type){
  currentPostType=type||'text';
  setPostType(currentPostType);
  document.getElementById('post-text-input').value='';
  document.getElementById('post-link-input').value='';
  discardPostVoiceRecording();
  document.getElementById('post-modal').classList.add('show');
}
function closePostModal(){ document.getElementById('post-modal').classList.remove('show'); cancelPostRecording(); }
function closePostModalOutside(e){ if(e.target.id==='post-modal') closePostModal(); }

async function submitPost(){
  const textVal=document.getElementById('post-text-input').value.trim();
  const linkVal=document.getElementById('post-link-input').value.trim();
  if(currentPostType==='link'){
    if(!linkVal){ showToast(t('no_post_link'),'⚠️');return; }
  } else if(currentPostType==='voice'){
    if(!postRecordedVoiceData){ showToast(t('record_voice_first'),'🎤');return; }
  } else {
    if(!textVal){ showToast(t('no_post_text'),'⚠️');return; }
  }
  const post={
    id:'p'+Date.now()+Math.random().toString(36).slice(2,5),
    uid:currentUser.id, author:currentUser.name,
    type:currentPostType,
    text: currentPostType==='link'?(textVal||linkVal):(currentPostType==='voice'?'':textVal),
    link: currentPostType==='link'?linkVal:null,
    voice: currentPostType==='voice'?postRecordedVoiceData.base64:null,
    voiceDuration: currentPostType==='voice'?postRecordedVoiceData.duration:null,
    voiceWave: currentPostType==='voice'?postRecordedVoiceData.wave:null,
    ts:Date.now(), likes:[], views:[]
  };
  const posts=await loadData('posts');
  posts[post.id]=post; await saveData('posts',posts);
  discardPostVoiceRecording();
  closePostModal();
  showToast(currentPostType==='voice'?t('voice_post_shared'):t('post_shared'),'📤'); loadFeed();
}

// ══════════════════════════════════════════════════════
//  SESLİ PAYLAŞIM — POST KAYDI
// ══════════════════════════════════════════════════════
async function togglePostVoiceRecording(){
  if(postMediaRecorder && postMediaRecorder.state==='recording'){ stopPostVoiceRecording(); return; }
  if(postRecordedVoiceData) return;
  if(!ensureMicPermission()) return;
  try{
    postRecStream=await navigator.mediaDevices.getUserMedia({audio:true});
    micPermissionState='granted'; updateMicPillVisibility();
  }catch(e){
    micPermissionState='denied'; updateMicPillVisibility();
    showToast(t('mic_denied'),'🎙️'); return;
  }
  postRecordedChunks=[];
  const mime=pickMimeType();
  try{ postMediaRecorder=mime?new MediaRecorder(postRecStream,{mimeType:mime}):new MediaRecorder(postRecStream); }
  catch(e){ showToast(t('mic_error'),'⚠️'); return; }
  postMediaRecorder.ondataavailable=e=>{ if(e.data && e.data.size>0) postRecordedChunks.push(e.data); };
  postMediaRecorder.onstop=onPostVoiceRecordingStop;
  postMediaRecorder.start();
  postRecStartTime=Date.now();

  document.getElementById('post-voice-idle').style.display='none';
  document.getElementById('post-voice-recording').style.display='flex';
  buildRecWave('post-rec-wave');
  updatePostRecTimer();
  postRecTimerInterval=setInterval(updatePostRecTimer,200);
}

function updatePostRecTimer(){
  const sec=(Date.now()-postRecStartTime)/1000;
  document.getElementById('post-rec-time').textContent=fmtDuration(sec);
  if(sec>=MAX_VOICE_SECONDS){ showToast(t('voice_max_warning'),'⏱️'); stopPostVoiceRecording(); }
}

function stopPostVoiceRecording(){
  if(postMediaRecorder && postMediaRecorder.state==='recording') postMediaRecorder.stop();
  clearInterval(postRecTimerInterval);
  if(postRecStream){ postRecStream.getTracks().forEach(tr=>tr.stop()); postRecStream=null; }
}

function cancelPostRecording(){
  if(postMediaRecorder && postMediaRecorder.state==='recording'){
    postMediaRecorder.onstop=()=>{};
    postMediaRecorder.stop();
  }
  clearInterval(postRecTimerInterval);
  if(postRecStream){ postRecStream.getTracks().forEach(tr=>tr.stop()); postRecStream=null; }
  document.getElementById('post-voice-recording').style.display='none';
  document.getElementById('post-voice-idle').style.display='flex';
}

async function onPostVoiceRecordingStop(){
  document.getElementById('post-voice-recording').style.display='none';
  if(!postRecordedChunks.length){ document.getElementById('post-voice-idle').style.display='flex'; return; }
  const duration=(Date.now()-postRecStartTime)/1000;
  if(duration<0.6){ showToast(t('voice_too_short'),'⚠️'); document.getElementById('post-voice-idle').style.display='flex'; return; }
  const blob=new Blob(postRecordedChunks,{type:postRecordedChunks[0].type||'audio/webm'});
  const base64=await blobToBase64(blob);
  postRecordedVoiceData={base64,duration,wave:defaultWavePattern()};
  document.getElementById('post-voice-preview-time').textContent=fmtDuration(duration);
  document.getElementById('post-voice-preview').style.display='flex';
}

function discardPostVoiceRecording(){
  if(postVoicePreviewAudio){ postVoicePreviewAudio.pause(); postVoicePreviewAudio=null; }
  postRecordedVoiceData=null;
  const idle=document.getElementById('post-voice-idle'), prev=document.getElementById('post-voice-preview'), rec=document.getElementById('post-voice-recording');
  if(idle){ idle.style.display='flex'; }
  if(prev){ prev.style.display='none'; }
  if(rec){ rec.style.display='none'; }
}

function togglePostVoicePreviewPlay(){
  if(!postRecordedVoiceData) return;
  const icon=document.getElementById('post-voice-preview-play-icon');
  if(postVoicePreviewAudio && !postVoicePreviewAudio.paused){ postVoicePreviewAudio.pause(); icon.innerHTML='<path d="M8 5v14l11-7z"/>'; return; }
  postVoicePreviewAudio=new Audio(postRecordedVoiceData.base64);
  postVoicePreviewAudio.play();
  icon.innerHTML='<rect x="6" y="5" width="4" height="14"/><rect x="14" y="5" width="4" height="14"/>';
  postVoicePreviewAudio.onended=()=>{ icon.innerHTML='<path d="M8 5v14l11-7z"/>'; };
}


async function loadFeed(){
  const [posts,users,msgs]=await Promise.all([loadData('posts'),loadData('users'),loadData('msgs')]);

  // Hikaye çemberleri — tüm kullanıcıların aktif hikayeleri (son 24 saat)
  const now=Date.now(); const DAY=86400000;
  const myStories=Object.values(posts).filter(p=>p.uid===currentUser.id&&p.type==='story'&&(now-p.ts)<DAY);
  const seenStories=JSON.parse(localStorage.getItem('ptg_seen_stories')||'[]');

  let storiesHTML=`<div class="story-item" onclick="openPostModal('story')">
    <div class="story-add"><svg width="22" height="22" fill="none" stroke="#667781" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/></svg></div>
    <span class="story-name">${t('add_story')}</span>
  </div>`;

  // Kendi hikayem
  if(myStories.length){
    const col=avatarColor(currentUser.name);
    storiesHTML+=`<div class="story-item" onclick="viewStories('${currentUser.id}')">
      <div class="story-ring mine"><div class="story-ring-inner" style="background:${col}">${initials(currentUser.name)}</div></div>
      <span class="story-name">Sen</span>
    </div>`;
  }

  // Diğer tüm kullanıcıların hikayeleri (herkese açık)
  Object.values(users).forEach(u=>{
    if(u.id===currentUser.id) return;
    const uStories=Object.values(posts).filter(p=>p.uid===u.id&&p.type==='story'&&(now-p.ts)<DAY);
    if(!uStories.length) return;
    const col=avatarColor(u.name);
    const allSeen=uStories.every(s=>seenStories.includes(s.id));
    storiesHTML+=`<div class="story-item" onclick="viewStories('${u.id}')">
      <div class="story-ring${allSeen?' seen':''}"><div class="story-ring-inner" style="background:${col}">${initials(u.name)}</div></div>
      <span class="story-name">${esc(u.name.split(' ')[0])}</span>
    </div>`;
  });
  document.getElementById('stories-row').innerHTML=storiesHTML;

  // Feed — yazı & link postları (hikayeleri akışta gösterme) — herkesin postu görünür
  const feedPosts=Object.values(posts).filter(p=>p.type!=='story').sort((a,b)=>b.ts-a.ts);

  if(!feedPosts.length){
    document.getElementById('feed-list').innerHTML=`<div class="empty-state" style="margin-top:20px"><svg fill="none" stroke="currentColor" stroke-width="1" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg><p>${t('empty_feed')}</p></div>`;
    return;
  }

  let feedHTML='';
  feedPosts.forEach(p=>{
    const author=users[p.uid];
    if(!author) return;
    const col=avatarColor(author.name);
    const liked=p.likes&&p.likes.includes(currentUser.id);

    feedHTML+=`<div class="post-card">
      <div class="post-header" onclick="openUserProfile('${p.uid}')">
        <div class="avatar avatar-sm" style="background:${col}">${initials(author.name)}</div>
        <div style="flex:1;min-width:0">
          <div style="font-size:14px;font-weight:700">${esc(author.name)}</div>
          <div style="font-size:11px;color:var(--gray-dark)">${timeAgo(p.ts)}</div>
        </div>
        ${p.uid===currentUser.id?`<button onclick="event.stopPropagation();deletePost('${p.id}')" style="background:none;border:none;cursor:pointer;color:var(--gray-dark);font-size:18px;padding:0 4px">⋯</button>`:''}
      </div>
      ${p.text?`<div class="post-body">${esc(p.text)}</div>`:''}
      ${p.link?`<a class="post-link" href="${esc(p.link)}" target="_blank" rel="noopener">🔗 ${esc(p.link)}</a>`:''}
      ${p.voice?`<div class="voice-post-bubble">
        <button class="voice-play-btn" onclick="playVoiceMessage('${p.id}','${esc(p.voice).replace(/'/g,"\\'")}',this)">
          <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
        </button>
        ${buildStaticWaveHTML(p.voiceWave||defaultWavePattern(),'voice-msg-wave','msg-wave-'+p.id)}
        <span class="voice-msg-duration">${fmtDuration(p.voiceDuration||0)}</span>
      </div>`:''}
      <div class="post-actions">
        <button class="post-action-btn${liked?' liked':''}" onclick="toggleLike('${p.id}')">
          ${liked?'❤️':'🤍'} ${p.likes?p.likes.length:0}
        </button>
      </div>
    </div>`;
  });

  document.getElementById('feed-list').innerHTML=feedHTML||`<div class="empty-state" style="margin-top:20px"><p>${t('empty_feed')}</p></div>`;
}

async function toggleLike(postId){
  const posts=await loadData('posts');
  if(!posts[postId]) return;
  if(!posts[postId].likes) posts[postId].likes=[];
  const idx=posts[postId].likes.indexOf(currentUser.id);
  if(idx>=0) posts[postId].likes.splice(idx,1);
  else posts[postId].likes.push(currentUser.id);
  await saveData('posts',posts); loadFeed();
}

async function deletePost(postId){
  if(!confirm(t('confirm_delete'))) return;
  const posts=await loadData('posts');
  delete posts[postId]; await saveData('posts',posts); loadFeed();
}

// ══════════════════════════════════════════════════════
//  HİKAYE GÖRÜNTÜLEYICI
// ══════════════════════════════════════════════════════
let storyList=[], storyIdx=0, storyTimer=null;

async function viewStories(uid){
  const [posts,users]=await Promise.all([loadData('posts'),loadData('users')]);
  const now=Date.now();const DAY=86400000;
  storyList=Object.values(posts).filter(p=>p.uid===uid&&p.type==='story'&&(now-p.ts)<DAY).sort((a,b)=>a.ts-b.ts);
  if(!storyList.length) return;
  storyIdx=0;
  const u=users[uid]||{name:'?'};
  const col=avatarColor(u.name);
  document.getElementById('story-avatar').style.background=col;
  document.getElementById('story-avatar').textContent=initials(u.name);
  document.getElementById('story-author-name').textContent=u.name;
  document.getElementById('story-viewer').classList.add('show');
  showStory(0);
  // Görüldü işaretle
  const seen=JSON.parse(localStorage.getItem('ptg_seen_stories')||'[]');
  storyList.forEach(s=>{ if(!seen.includes(s.id)) seen.push(s.id); });
  localStorage.setItem('ptg_seen_stories',JSON.stringify(seen));
}

let storyVoiceAudio=null;
function showStory(idx){
  if(idx>=storyList.length){ closeStory();return; }
  storyIdx=idx;
  const s=storyList[idx];
  if(storyVoiceAudio){ storyVoiceAudio.pause(); storyVoiceAudio=null; }
  const contentEl=document.getElementById('story-text').parentElement;
  if(s.voice){
    contentEl.innerHTML=`<div class="voice-story-content">
      <button class="voice-story-play" id="story-voice-btn" onclick="toggleStoryVoicePlay('${esc(s.voice).replace(/'/g,"\\'")}')">
        <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
      </button>
      ${buildStaticWaveHTML(s.voiceWave||defaultWavePattern(),'voice-story-wave','story-voice-wave')}
      <div style="color:#fff;font-size:14px;opacity:.8">${fmtDuration(s.voiceDuration||0)}</div>
      ${s.text?`<div class="story-text" style="font-size:16px">${esc(s.text)}</div>`:''}
    </div>`;
  } else {
    contentEl.innerHTML=`<div class="story-text">${esc(s.text)}</div>`;
  }
  document.getElementById('story-time').textContent=timeAgo(s.ts);
  // Progress bars
  const prog=document.getElementById('story-progress');
  prog.innerHTML=storyList.map((_,i)=>`<div class="story-prog-bar"><div class="story-prog-fill" id="spf-${i}" style="width:${i<idx?'100%':'0%'}"></div></div>`).join('');
  // Animate current
  clearTimeout(storyTimer);
  const fill=document.getElementById('spf-'+idx);
  const durMs = s.voice ? Math.max(3000,(s.voiceDuration||5)*1000) : 5000;
  if(fill){ fill.style.transition=`width ${durMs}ms linear`;setTimeout(()=>{ fill.style.width='100%'; },50); }
  if(s.voice){
    storyVoiceAudio=new Audio(s.voice);
    storyVoiceAudio.play().catch(()=>{});
    const btn=document.getElementById('story-voice-btn');
    if(btn) btn.querySelector('svg').innerHTML='<rect x="6" y="5" width="4" height="14"/><rect x="14" y="5" width="4" height="14"/>';
    storyVoiceAudio.ontimeupdate=()=>{
      const waveEl=document.getElementById('story-voice-wave');
      if(!waveEl||!storyVoiceAudio.duration) return;
      const ratio=storyVoiceAudio.currentTime/storyVoiceAudio.duration;
      const bars=waveEl.children; const litCount=Math.floor(ratio*bars.length);
      for(let i=0;i<bars.length;i++) bars[i].classList.toggle('played',i<litCount);
    };
  }
  storyTimer=setTimeout(()=>showStory(idx+1),durMs+200);
}

function toggleStoryVoicePlay(base64){
  const btn=document.getElementById('story-voice-btn');
  if(!storyVoiceAudio) return;
  if(storyVoiceAudio.paused){ storyVoiceAudio.play(); if(btn) btn.querySelector('svg').innerHTML='<rect x="6" y="5" width="4" height="14"/><rect x="14" y="5" width="4" height="14"/>'; }
  else { storyVoiceAudio.pause(); if(btn) btn.querySelector('svg').innerHTML='<path d="M8 5v14l11-7z"/>'; }
}

function prevStory(){ clearTimeout(storyTimer); if(storyVoiceAudio) storyVoiceAudio.pause(); showStory(Math.max(0,storyIdx-1)); }
function nextStory(){ clearTimeout(storyTimer); if(storyVoiceAudio) storyVoiceAudio.pause(); showStory(storyIdx+1); }
function closeStory(){ clearTimeout(storyTimer); if(storyVoiceAudio){ storyVoiceAudio.pause(); storyVoiceAudio=null; } document.getElementById('story-viewer').classList.remove('show'); }

// ══════════════════════════════════════════════════════
//  POLLING
// ══════════════════════════════════════════════════════
function startPolling(){
  pollTimer=setInterval(async()=>{
    try{
      const users=_cache.users||{};
      if(users[currentUser.id]){ users[currentUser.id].online=true;users[currentUser.id].lastSeen=Date.now();saveData('users',users); }
      if(!searchMode) refreshSidebar();
      if(activeContact){
        const msgs=await loadData('msgs');
        const cid=convId(currentUser.id,activeContact.id);
        const conv=Object.values(msgs).filter(m=>m.conv===cid);
        if(conv.length>lastMsgCount){ const newOnes=conv.sort((a,b)=>a.ts-b.ts).slice(lastMsgCount);if(newOnes.some(m=>m.from===activeContact.id)) playRecv();await renderMessages();markRead(activeContact.id); }
        const allUsers=await loadData('users');const cu=allUsers[activeContact.id];
        if(cu){
          const on=cu.online&&(Date.now()-cu.lastSeen<90000);
          document.getElementById('chat-header-status').textContent=on?t('online'):t('last_seen')+' '+fmtTime(cu.lastSeen);
          // Online/offline ses bildirimi — yalnızca durum değiştiğinde çal
          const key=activeContact.id;
          if(lastKnownOnline[key]!==undefined && lastKnownOnline[key]!==on){
            if(on) playOnline(); else playOffline();
          }
          lastKnownOnline[key]=on;
        }
      }
      if(currentSideTab==='feed') loadFeed();
      updateRequestsBadge();
      if(document.getElementById('requests-panel').classList.contains('show')) renderRequestsList();
      if(viewingProfileUid) renderUserProfileActions();
    }catch(e){}
  },4000);
}

// ══════════════════════════════════════════════════════
//  PROFILE (kendi profilim)
// ══════════════════════════════════════════════════════
function openProfile(){
  if(!currentUser) return;
  const col=avatarColor(currentUser.name);
  document.getElementById('profile-avatar-big').style.background=col;
  document.getElementById('profile-avatar-big').textContent=initials(currentUser.name);
  document.getElementById('profile-name-big').textContent=currentUser.name;
  document.getElementById('profile-email-big').textContent=currentUser.email;
  document.getElementById('profile-bio-input').value=currentUser.bio||'';
  document.getElementById('profile-music-input').value=currentUser.musicUrl||'';
  removePMusicUpload();
  if(currentUser.musicData){
    setPMusicSource('upload');
    pmusicPendingUpload={base64:currentUser.musicData, mime:currentUser.musicMime||'', name:currentUser.musicName||'Müzik', duration:0};
    document.getElementById('pmusic-upload-file-info').classList.add('show');
    document.getElementById('pmusic-upload-filename').textContent='🎵 '+(currentUser.musicName||'Müzik');
    document.getElementById('pmusic-upload-progress-fill').style.width='100%';
  } else {
    setPMusicSource('link');
  }
  document.getElementById('profile-panel').classList.add('show');
}
function closeProfile(){ document.getElementById('profile-panel').classList.remove('show'); }
function closeProfileOutside(e){ if(e.target.id==='profile-panel') closeProfile(); }

async function saveBio(){
  const bio=document.getElementById('profile-bio-input').value.trim().slice(0,150);
  const users=await loadData('users');
  if(users[currentUser.id]){
    users[currentUser.id].bio=bio;
    await saveData('users',users);
    currentUser.bio=bio;
    localStorage.setItem('ptg_me',JSON.stringify(currentUser));
    showToast(t('bio_saved'),'✓');
  }
}

// ══════════════════════════════════════════════════════
//  PROFİL MÜZİĞİ (mp3 linki / YouTube linki / cihazdan yüklenen dosya)
// ══════════════════════════════════════════════════════
const PMUSIC_MAX_SECONDS=30;
const PMUSIC_MAX_BYTES=2*1024*1024; // ~2MB ham dosya sınırı (base64 sonrası ~2.7MB, JSONBin 5MB limitinin altında kalır)
let pmusicSourceMode='link'; // 'link' | 'upload'
let pmusicPendingUpload=null; // {base64, mime, name, duration}

function setPMusicSource(mode){
  pmusicSourceMode=mode;
  document.getElementById('pmusic-tab-link').classList.toggle('active',mode==='link');
  document.getElementById('pmusic-tab-upload').classList.toggle('active',mode==='upload');
  document.getElementById('pmusic-link-area').style.display=mode==='link'?'block':'none';
  document.getElementById('pmusic-upload-area').style.display=mode==='upload'?'block':'none';
}

function detectMusicType(url){
  if(!url) return null;
  const yt=/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/shorts\/)([\w-]{6,})/i.exec(url);
  if(yt) return {type:'youtube', id:yt[1]};
  if(/\.(mp3|ogg|wav|m4a|aac)(\?.*)?$/i.test(url.trim())) return {type:'audio', url:url.trim()};
  return null;
}

function handlePMusicFileSelect(e){
  const file=e.target.files && e.target.files[0];
  e.target.value='';
  if(!file) return;
  if(!/^audio\//.test(file.type) && !/\.(mp3|wav|ogg|m4a|aac)$/i.test(file.name)){
    showToast(t('pmusic_upload_invalid_type'),'⚠️'); return;
  }
  if(file.size>PMUSIC_MAX_BYTES){
    showToast(t('pmusic_upload_too_big'),'⚠️'); return;
  }

  const infoBox=document.getElementById('pmusic-upload-file-info');
  const filenameEl=document.getElementById('pmusic-upload-filename');
  const fillEl=document.getElementById('pmusic-upload-progress-fill');
  infoBox.classList.add('show');
  filenameEl.textContent=t('pmusic_uploading');
  fillEl.style.width='15%';

  // Süreyi kontrol etmek için geçici bir audio elemanı kullan
  const tempUrl=URL.createObjectURL(file);
  const probe=new Audio();
  probe.preload='metadata';
  probe.src=tempUrl;
  probe.onloadedmetadata=()=>{
    const duration=probe.duration;
    URL.revokeObjectURL(tempUrl);
    if(duration && duration>PMUSIC_MAX_SECONDS+0.5){
      showToast(t('pmusic_upload_too_long'),'⚠️');
      infoBox.classList.remove('show');
      return;
    }
    fillEl.style.width='55%';
    const reader=new FileReader();
    reader.onload=()=>{
      pmusicPendingUpload={ base64:reader.result, mime:file.type||'audio/mpeg', name:file.name, duration:duration||0 };
      fillEl.style.width='100%';
      filenameEl.textContent=`🎵 ${file.name} (${fmtDuration(duration||0)})`;
      showToast(t('pmusic_upload_done'),'✓');
    };
    reader.onerror=()=>{
      showToast(t('pmusic_upload_error'),'⚠️');
      infoBox.classList.remove('show');
    };
    reader.readAsDataURL(file);
  };
  probe.onerror=()=>{
    URL.revokeObjectURL(tempUrl);
    showToast(t('pmusic_upload_error'),'⚠️');
    infoBox.classList.remove('show');
  };
}

function removePMusicUpload(){
  pmusicPendingUpload=null;
  document.getElementById('pmusic-upload-file-info').classList.remove('show');
  document.getElementById('pmusic-upload-filename').textContent='—';
  document.getElementById('pmusic-upload-progress-fill').style.width='0%';
}

async function savePMusic(){
  const users=await loadData('users');
  if(!users[currentUser.id]) return;

  if(pmusicSourceMode==='upload'){
    if(!pmusicPendingUpload){ showToast(t('pmusic_upload_invalid_type'),'⚠️'); return; }
    users[currentUser.id].musicUrl='';
    users[currentUser.id].musicData=pmusicPendingUpload.base64;
    users[currentUser.id].musicMime=pmusicPendingUpload.mime;
    users[currentUser.id].musicName=pmusicPendingUpload.name;
    await saveData('users',users);
    currentUser.musicUrl=''; currentUser.musicData=pmusicPendingUpload.base64;
    currentUser.musicMime=pmusicPendingUpload.mime; currentUser.musicName=pmusicPendingUpload.name;
    localStorage.setItem('ptg_me',JSON.stringify(currentUser));
    showToast(t('pmusic_saved'),'🎵');
  } else {
    const raw=document.getElementById('profile-music-input').value.trim();
    if(raw && !detectMusicType(raw)){ showToast(t('pmusic_invalid'),'⚠️'); return; }
    users[currentUser.id].musicUrl=raw;
    users[currentUser.id].musicData='';
    users[currentUser.id].musicMime='';
    users[currentUser.id].musicName='';
    await saveData('users',users);
    currentUser.musicUrl=raw; currentUser.musicData=''; currentUser.musicMime=''; currentUser.musicName='';
    localStorage.setItem('ptg_me',JSON.stringify(currentUser));
    showToast(t('pmusic_saved'),'🎵');
  }
}

async function clearPMusic(){
  document.getElementById('profile-music-input').value='';
  removePMusicUpload();
  const users=await loadData('users');
  if(users[currentUser.id]){
    users[currentUser.id].musicUrl='';
    users[currentUser.id].musicData='';
    users[currentUser.id].musicMime='';
    users[currentUser.id].musicName='';
    await saveData('users',users);
    currentUser.musicUrl=''; currentUser.musicData=''; currentUser.musicMime=''; currentUser.musicName='';
    localStorage.setItem('ptg_me',JSON.stringify(currentUser));
    showToast(t('pmusic_cleared'),'🗑️');
  }
}

let profileMusicAudioEl=null;
let profileMusicYtPlayer=null;
let profileMusicState='idle'; // idle | playing | paused | blocked

function stopProfileMusic(){
  if(profileMusicAudioEl){ try{ profileMusicAudioEl.pause(); }catch(e){} profileMusicAudioEl=null; }
  const ytFrame=document.getElementById('uprofile-music-yt-frame');
  if(ytFrame) ytFrame.innerHTML='';
  profileMusicYtPlayer=null;
  profileMusicState='idle';
  const bar=document.getElementById('uprofile-music-bar');
  const hint=document.getElementById('uprofile-music-tap-hint');
  if(bar) bar.classList.remove('show');
  if(hint) hint.classList.remove('show');
}

async function startProfileMusicFor(uid){
  stopProfileMusic();
  if(!uid) return;
  const users=await loadData('users');
  const u=users[uid]; if(!u) return;

  // 1) Cihazdan yüklenmiş dosya varsa önceliklendir
  if(u.musicData){
    const bar=document.getElementById('uprofile-music-bar');
    const titleEl=document.getElementById('uprofile-music-title');
    titleEl.textContent = u.musicName || 'Müzik';
    bar.classList.add('show');
    const audio=new Audio(u.musicData);
    audio.loop=true;
    audio.volume=0.6;
    profileMusicAudioEl=audio;
    try{
      await audio.play();
      profileMusicState='playing';
      setMusicIconPlaying(true);
    }catch(e){
      profileMusicState='blocked';
      setMusicIconPlaying(false);
      document.getElementById('uprofile-music-tap-hint').classList.add('show');
    }
    return;
  }

  // 2) Aksi halde link (mp3 URL veya YouTube)
  if(!u.musicUrl) return;
  const info=detectMusicType(u.musicUrl);
  if(!info) return;

  const bar=document.getElementById('uprofile-music-bar');
  const titleEl=document.getElementById('uprofile-music-title');
  titleEl.textContent = info.type==='youtube' ? 'YouTube' : (u.musicUrl.split('/').pop().split('?')[0] || 'Müzik');
  bar.classList.add('show');

  if(info.type==='audio'){
    const audio=new Audio(info.url);
    audio.loop=true;
    audio.volume=0.6;
    profileMusicAudioEl=audio;
    try{
      await audio.play();
      profileMusicState='playing';
      setMusicIconPlaying(true);
    }catch(e){
      profileMusicState='blocked';
      setMusicIconPlaying(false);
      document.getElementById('uprofile-music-tap-hint').classList.add('show');
    }
  } else if(info.type==='youtube'){
    const ytFrame=document.getElementById('uprofile-music-yt-frame');
    ytFrame.innerHTML=`<iframe id="uprofile-yt-iframe" width="200" height="200" src="https://www.youtube.com/embed/${info.id}?autoplay=1&loop=1&playlist=${info.id}&controls=0" frameborder="0" allow="autoplay; encrypted-media"></iframe>`;
    // YouTube autoplay genelde tarayıcılarca engellenir, kesin doğrulama yapamadığımız için 'çalmaya çalışıyor' varsayıp tap-hint'i de gösteriyoruz
    profileMusicState='playing';
    setMusicIconPlaying(true);
    setTimeout(()=>{
      // Otomatik oynatma engellenmiş olabilir; emin olmak için manuel başlatma seçeneğini de açık bırak
      document.getElementById('uprofile-music-tap-hint').classList.add('show');
    },1500);
  }
}

function setMusicIconPlaying(playing){
  const icon=document.getElementById('uprofile-music-icon');
  const toggleIcon=document.getElementById('uprofile-music-toggle-icon');
  if(icon) icon.classList.toggle('paused',!playing);
  if(toggleIcon){
    toggleIcon.innerHTML = playing
      ? '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>'
      : '<path d="M8 5v14l11-7z"/>';
  }
}

function toggleProfileMusic(){
  if(profileMusicAudioEl){
    if(profileMusicState==='playing'){ profileMusicAudioEl.pause(); profileMusicState='paused'; setMusicIconPlaying(false); }
    else { profileMusicAudioEl.play().then(()=>{ profileMusicState='playing'; setMusicIconPlaying(true); }).catch(()=>{}); }
  } else if(document.getElementById('uprofile-yt-iframe')){
    // Basit yaklaşım: iframe'i kaldırıp tekrar oluşturarak duraklat/devam simüle ediyoruz
    manualStartProfileMusic();
  }
}

function manualStartProfileMusic(){
  document.getElementById('uprofile-music-tap-hint').classList.remove('show');
  if(profileMusicAudioEl){
    profileMusicAudioEl.play().then(()=>{ profileMusicState='playing'; setMusicIconPlaying(true); }).catch(()=>{});
  } else if(viewingProfileUid){
    startProfileMusicFor(viewingProfileUid);
  }
}


// ══════════════════════════════════════════════════════
//  KULLANICI PROFİL SAYFASI (Instagram tarzı) + TAKİP
// ══════════════════════════════════════════════════════
async function openUserProfile(uid){
  if(!uid) return;
  if(uid===currentUser.id){ openProfile(); return; }
  viewingProfileUid=uid;
  const users=await loadData('users');
  const u=users[uid]; if(!u) return;
  const col=avatarColor(u.name);
  document.getElementById('uprofile-avatar').style.background=col;
  document.getElementById('uprofile-avatar').textContent=initials(u.name);
  document.getElementById('uprofile-name').textContent=u.name;
  document.getElementById('uprofile-header-name').textContent=u.name;
  document.getElementById('uprofile-bio').textContent=u.bio||'';
  document.getElementById('uprofile-bio').style.display=u.bio?'block':'none';
  document.getElementById('user-profile-screen').classList.add('show');
  await renderUserProfileActions();
  startProfileMusicFor(uid);
}

async function renderUserProfileActions(){
  if(!viewingProfileUid) return;
  const uid=viewingProfileUid;
  const follows=await loadData('follows');
  document.getElementById('uprofile-followers-count').textContent=countFollowers(follows,uid);
  document.getElementById('uprofile-following-count').textContent=countFollowing(follows,uid);

  const status=getFollowStatus(follows,currentUser.id,uid); // null|'pending'|'accepted'
  const actionsEl=document.getElementById('uprofile-actions');
  let html='';
  if(status==='accepted'){
    html+=`<button class="btn-follow following" onclick="unfollowUser('${uid}')">${t('btn_following')}</button>`;
    html+=`<button class="btn-follow message" onclick="closeUserProfile();openChat('${uid}')">${t('btn_message')}</button>`;
  } else if(status==='pending'){
    html+=`<button class="btn-follow pending" onclick="cancelFollowRequest('${uid}')">${t('btn_pending')}</button>`;
  } else {
    html+=`<button class="btn-follow follow" onclick="sendFollowRequest('${uid}')">${t('btn_follow')}</button>`;
  }
  actionsEl.innerHTML=html;
}

function closeUserProfile(){
  document.getElementById('user-profile-screen').classList.remove('show');
  viewingProfileUid=null;
  stopProfileMusic();
}

// ══════════════════════════════════════════════════════
//  TAKİP İSTEKLERİ PANELİ
// ══════════════════════════════════════════════════════
async function openRequests(){
  document.getElementById('requests-panel').classList.add('show');
  await renderRequestsList();
}
function closeRequestsOutside(e){ if(e.target.id==='requests-panel') closeRequestsPanel(); }
function closeRequestsPanel(){ document.getElementById('requests-panel').classList.remove('show'); }

async function renderRequestsList(){
  const [follows,users]=await Promise.all([loadData('follows'),loadData('users')]);
  const pending=Object.values(follows).filter(e=>e.to===currentUser.id && e.status==='pending').sort((a,b)=>b.ts-a.ts);
  const listEl=document.getElementById('requests-list');
  if(!pending.length){
    listEl.innerHTML=`<div class="empty-state"><p>${t('no_requests')}</p></div>`;
    return;
  }
  listEl.innerHTML=pending.map(e=>{
    const u=users[e.from]; if(!u) return '';
    const col=avatarColor(u.name);
    return `<div class="request-row">
      <div class="avatar avatar-sm" style="background:${col};cursor:pointer" onclick="closeRequestsPanel();openUserProfile('${u.id}')">${initials(u.name)}</div>
      <div class="contact-name" style="cursor:pointer" onclick="closeRequestsPanel();openUserProfile('${u.id}')">${esc(u.name)}</div>
      <div class="request-actions">
        <button class="req-btn req-accept" onclick="acceptFollowRequest('${u.id}')">${t('req_accept')}</button>
        <button class="req-btn req-decline" onclick="declineFollowRequest('${u.id}')">${t('req_decline')}</button>
      </div>
    </div>`;
  }).join('');
}

// ══════════════════════════════════════════════════════
//  PAYLAŞIM (Profil Linki / Direkt Mesaj Linki) + DEEP LINK
// ══════════════════════════════════════════════════════
function buildLink(type,uid){
  const base=location.origin+location.pathname;
  return type==='dm' ? `${base}?dm=${encodeURIComponent(uid)}` : `${base}?profile=${encodeURIComponent(uid)}`;
}

function openShareProfilePanel(uid){
  if(!uid) uid=currentUser.id;
  shareContext={type:'profile',uid};
  document.getElementById('share-panel-title').textContent=t('share_profile_title');
  document.getElementById('share-panel-desc').textContent=t('share_profile_desc');
  document.getElementById('share-link-input').value=buildLink('profile',uid);
  document.getElementById('share-copy-btn').textContent=t('copy');
  document.getElementById('share-copy-btn').classList.remove('copied');
  document.getElementById('share-panel').classList.add('show');
}

function openShareLinkPanel(){
  if(!currentUser) return;
  shareContext={type:'dm',uid:currentUser.id};
  document.getElementById('share-panel-title').textContent=t('share_msg_title');
  document.getElementById('share-panel-desc').textContent=t('share_msg_desc');
  document.getElementById('share-link-input').value=buildLink('dm',currentUser.id);
  document.getElementById('share-copy-btn').textContent=t('copy');
  document.getElementById('share-copy-btn').classList.remove('copied');
  document.getElementById('share-panel').classList.add('show');
}

function closeSharePanel(){ document.getElementById('share-panel').classList.remove('show'); shareContext=null; }
function closeShareOutside(e){ if(e.target.id==='share-panel') closeSharePanel(); }

async function copyShareLink(){
  const input=document.getElementById('share-link-input');
  const btn=document.getElementById('share-copy-btn');
  try{
    await navigator.clipboard.writeText(input.value);
  }catch(e){
    input.removeAttribute('readonly'); input.select(); document.execCommand('copy'); input.setAttribute('readonly','');
  }
  btn.textContent=t('copied'); btn.classList.add('copied');
  showToast(t('link_copied'),'🔗');
  setTimeout(()=>{ btn.textContent=t('copy'); btn.classList.remove('copied'); },1800);
}

function shareVia(channel){
  if(!shareContext) return;
  const link=document.getElementById('share-link-input').value;
  const text=shareContext.type==='dm' ? t('share_msg_title')+': '+link : t('share_profile_title')+': '+link;
  if(channel==='whatsapp'){
    window.open('https://wa.me/?text='+encodeURIComponent(text),'_blank');
  } else if(channel==='telegram'){
    window.open('https://t.me/share/url?url='+encodeURIComponent(link)+'&text='+encodeURIComponent(text),'_blank');
  } else if(channel==='native'){
    if(navigator.share){
      navigator.share({title:'Poçtagram',text,url:link}).catch(()=>{});
    } else {
      copyShareLink();
    }
  }
}

// Sayfa açılışında URL'de ?dm= veya ?profile= var mı bak
function captureDeepLinkFromURL(){
  const params=new URLSearchParams(location.search);
  if(params.has('dm')) pendingDeepLink={type:'dm',uid:params.get('dm')};
  else if(params.has('profile')) pendingDeepLink={type:'profile',uid:params.get('profile')};
}

async function handleDeepLinkIfAny(){
  if(!pendingDeepLink || !currentUser) return;
  const link=pendingDeepLink; pendingDeepLink=null;
  if(link.uid===currentUser.id) return;
  const users=await loadData('users');
  if(!users[link.uid]) return;
  if(link.type==='dm'){
    openChat(link.uid);
    showToast(t('dm_started'),'💬');
  } else {
    openUserProfile(link.uid);
  }
  // URL'i temizle (link sürekli tekrar tetiklenmesin)
  const cleanUrl=location.origin+location.pathname;
  history.replaceState({},'',cleanUrl);
}


window.addEventListener('DOMContentLoaded',()=>{
  setLang(lang);
  captureDeepLinkFromURL();
  const saved=localStorage.getItem('ptg_me');

  const SPLASH_MS=5400;
  setTimeout(()=>{
    if(saved){ try{ currentUser=JSON.parse(saved);enterApp(); }catch{ localStorage.removeItem('ptg_me'); hideSplash(); } }
    else { hideSplash(); }
  },SPLASH_MS);

  ['login-email','login-pass'].forEach(id=>document.getElementById(id).addEventListener('keydown',e=>{ if(e.key==='Enter') handleLogin(); }));
  ['reg-name','reg-email','reg-pass'].forEach(id=>document.getElementById(id).addEventListener('keydown',e=>{ if(e.key==='Enter') handleRegister(); }));
  window.addEventListener('visibilitychange',()=>{
    if(document.visibilityState==='hidden'&&currentUser){ const u=_cache.users||{};if(u[currentUser.id]){ u[currentUser.id].online=false;u[currentUser.id].lastSeen=Date.now();saveData('users',u); } }
  });
  
  // Bağlam menüsünü (sağ tık) devre dışı bırak
  document.addEventListener('contextmenu',(e)=>{ e.preventDefault();return false; },false);
  
  // Long press'i devre dışı bırak (mobil bağlam menüsü)
  document.addEventListener('touchstart',(e)=>{
    if(e.target.tagName==='INPUT' || e.target.tagName==='TEXTAREA') return;
    const longPressTimer=setTimeout(()=>{ e.preventDefault(); },500);
    document.addEventListener('touchend',()=>clearTimeout(longPressTimer),{once:true});
  },false);
});
