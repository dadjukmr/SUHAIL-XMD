const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/TqtqWTB/Ephoto360-com-166de104a10faf.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923xxx Your Number";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/82336d4b04ac81b77e18e.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.junn4.my.id" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_07_09_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDgyLFxuICAgICAgICA1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDk4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTEwLFxuICAgICAgICA2MyxcbiAgICAgICAgMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjM3LFxuICAgICAgICA0NSxcbiAgICAgICAgMjA2LFxuICAgICAgICA4NixcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDExOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTMsXG4gICAgICAgIDIxNixcbiAgICAgICAgOTYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjU1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDgwLFxuICAgICAgICAxMTksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDQwLFxuICAgICAgICA1LFxuICAgICAgICAxOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDc5LFxuICAgICAgICAzNCxcbiAgICAgICAgMjM5LFxuICAgICAgICA2NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDk5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDksXG4gICAgICAgIDE2NixcbiAgICAgICAgNjAsXG4gICAgICAgIDM2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1LFxuICAgICAgICA3OCxcbiAgICAgICAgMjM4LFxuICAgICAgICA5MixcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NixcbiAgICAgICAgNDMsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDg0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDk3LFxuICAgICAgICAxNixcbiAgICAgICAgOTAsXG4gICAgICAgIDk4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTE3LFxuICAgICAgICA2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDQ2LFxuICAgICAgICAzMyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMDksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzLFxuICAgICAgICA4NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjksXG4gICAgICAgIDc3LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTcyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDc0LFxuICAgICAgICA3NCxcbiAgICAgICAgNixcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDQsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDMwLFxuICAgICAgICAyOSxcbiAgICAgICAgODMsXG4gICAgICAgIDI4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNixcbiAgICAgICAgNjYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDczLFxuICAgICAgICAyMjcsXG4gICAgICAgIDc4LFxuICAgICAgICA5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDQzLFxuICAgICAgICAxLFxuICAgICAgICA5OCxcbiAgICAgICAgODAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTk3LFxuICAgICAgICA2LFxuICAgICAgICA4OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjM4LFxuICAgICAgICA5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDkwLFxuICAgICAgICA1OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEwMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA1MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNixcbiAgICAgICAgODYsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDk2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDU5LFxuICAgICAgICAxODcsXG4gICAgICAgIDg2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDQwLFxuICAgICAgICA2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTU0LFxuICAgICAgICA5NixcbiAgICAgICAgMTcxLFxuICAgICAgICA1NixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTk1LFxuICAgICAgICA3MCxcbiAgICAgICAgNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDMxLFxuICAgICAgICAxODIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDksXG4gICAgICAgIDIwMixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDU3LFxuICAgICAgICA1NixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQxLFxuICAgICAgICA0OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDI5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDQ0LFxuICAgICAgICA0NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzLFxuICAgICAgICA1NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAzMyxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJxU3JnSWZVL3ZJcTdBd0dQRFpTZWxwVXppRFNuRjZOamlqeWdJaUtla3owPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJleVA1ZnlEcFNUR21pM082NzY3WW93XCIsXG4gIFwicGhvbmVJZFwiOiBcIjZhNDljMGQ0LWJmMTEtNGY2ZC1iODMwLTczZDMxZjg1ODEwM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTYsXG4gICAgICAxNDcsXG4gICAgICA0NyxcbiAgICAgIDI1MSxcbiAgICAgIDI0NyxcbiAgICAgIDEzMSxcbiAgICAgIDE1LFxuICAgICAgMTcyLFxuICAgICAgMTU5LFxuICAgICAgMTIxLFxuICAgICAgODgsXG4gICAgICAxNTMsXG4gICAgICA4MCxcbiAgICAgIDE5MyxcbiAgICAgIDI4LFxuICAgICAgMTgzLFxuICAgICAgMTYyLFxuICAgICAgMjgsXG4gICAgICAyNTEsXG4gICAgICA5M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjEsXG4gICAgICAyOCxcbiAgICAgIDM5LFxuICAgICAgMjQ0LFxuICAgICAgMTU2LFxuICAgICAgNTMsXG4gICAgICAxMzMsXG4gICAgICAxNTcsXG4gICAgICAyMzMsXG4gICAgICAxOTUsXG4gICAgICA2NixcbiAgICAgIDE5MixcbiAgICAgIDE2NyxcbiAgICAgIDE3OCxcbiAgICAgIDE0NyxcbiAgICAgIDEzNixcbiAgICAgIDE2LFxuICAgICAgMTk3LFxuICAgICAgMjM4LFxuICAgICAgMjAxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjM4N1lBNEdFXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzc2OTg1NzU2MDg6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjQ4NDkwNzE3NjUwOTY3OjEwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1Aya2lzQUVFTmJxbjdjR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiK2cvU0NpMGJISGJpZ0R5QkVWVC82NDl5WmtxRHFxOVlHM0JBbzE0UDdFbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJvdEpqOERtNVVNQmVYSytNYXpHNExaaVRvTVZVMDV4RUdBN2JibTZVYXk1Rk4rNlZIZ0phekZLT0pCb2xVdVJOcC90MHF1T0JGcHNXVEsyODNxY2lCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ6ekpCcWhQM3d1dGhER1BqNTZEcU9oaXU5aTQ3amwvcVVybUtmMEJ2MjkyM2hYMFJhVVVVaGZ6MmhZQ1BWeDgrYUFzTm44ZWZuelFFcnZWM1FxYTdCUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzc2OTg1NzU2MDg6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDc0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjY0Nzc2NTgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPeEdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU94Ry5qc29uIjogIntcImtleURhdGFcIjpcInVGazEwM2FvN1BEV3ZBY2RDSXlXbHVCdW0ydUxiSVBBclI5UCtHaTg2S2c9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTIwODEyODEyMixcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
