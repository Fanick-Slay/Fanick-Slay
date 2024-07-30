const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_15_07_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTE2LFxuICAgICAgICAzNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDgzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDM2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDk2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDUsXG4gICAgICAgIDkzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjEwLFxuICAgICAgICA5MixcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTU5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDMyLFxuICAgICAgICA1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTk1LFxuICAgICAgICA3MixcbiAgICAgICAgMTkxLFxuICAgICAgICAxODAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDM3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTE5LFxuICAgICAgICA3NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDg3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDkwLFxuICAgICAgICAwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDU5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTMyLFxuICAgICAgICA0OSxcbiAgICAgICAgNjksXG4gICAgICAgIDIyNixcbiAgICAgICAgMjcsXG4gICAgICAgIDMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyOCxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU2LFxuICAgICAgICA2OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzAsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjMzLFxuICAgICAgICAxODUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDU0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDMyLFxuICAgICAgICAxNzksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxODYsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTU4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyMixcbiAgICAgICAgNTQsXG4gICAgICAgIDc0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTksXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDk5LFxuICAgICAgICA1MCxcbiAgICAgICAgOTksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDYxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA0NixcbiAgICAgICAgMTMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjA1LFxuICAgICAgICA3OCxcbiAgICAgICAgMjUzLFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTc3LFxuICAgICAgICA0NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDcxLFxuICAgICAgICA5MyxcbiAgICAgICAgODUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNixcbiAgICAgICAgMzQsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEyMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NixcbiAgICAgICAgNSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIzMixcbiAgICAgICAgNjAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzksXG4gICAgICAgIDQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTU1LFxuICAgICAgICA4MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTkyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNCxcbiAgICAgICAgNCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMixcbiAgICAgICAgMTIzLFxuICAgICAgICA2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDQzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMzksXG4gICAgICAgIDU1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjksXG4gICAgICAgIDEzLFxuICAgICAgICA2MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDEyNixcbiAgICAgICAgNixcbiAgICAgICAgMTM1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIzWllSUWpueHh3YVBaMUtZcW5iaTlnYW9aRStSNjM1aWtpVXZHbnYwRFVnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNzY1OTM5MzYyMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNDA1OTcyREE2RDVFODk3QkUzRjIwMTE2NTEyRjMxNDBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyMzIzNzA0XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImFkTjZ3UjRJVHdDeWFxdXpaQlR3ZFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYmIzYTM5YWMtYmUyMS00MzE5LWE3YjYtMzZkYmE2M2M1MTQ2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ2LFxuICAgICAgMTk2LFxuICAgICAgMTY4LFxuICAgICAgMjIzLFxuICAgICAgMTAwLFxuICAgICAgMTM3LFxuICAgICAgMjM0LFxuICAgICAgMTkyLFxuICAgICAgODgsXG4gICAgICAxMTAsXG4gICAgICAyMTMsXG4gICAgICAyMzEsXG4gICAgICAxMzQsXG4gICAgICAyMjcsXG4gICAgICAyMDgsXG4gICAgICAyMDEsXG4gICAgICA3NyxcbiAgICAgIDUsXG4gICAgICAyMTYsXG4gICAgICAxNTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzQsXG4gICAgICAxMTcsXG4gICAgICA0MyxcbiAgICAgIDE4MSxcbiAgICAgIDQ2LFxuICAgICAgMTY3LFxuICAgICAgMjQ5LFxuICAgICAgOTgsXG4gICAgICAxNjksXG4gICAgICAyMzUsXG4gICAgICA4NSxcbiAgICAgIDUsXG4gICAgICAyMTIsXG4gICAgICAxOTgsXG4gICAgICAyMzAsXG4gICAgICA2NyxcbiAgICAgIDc5LFxuICAgICAgMTg5LFxuICAgICAgMixcbiAgICAgIDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSzVIWFJEMjZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNzY1OTM5MzYyMDozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQ0FOQUwrXzk1NThcIixcbiAgICBcImxpZFwiOiBcIjMyNTczMTE1ODU5MDI2OjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUDJ6djgwQkVQR2xvclVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJmWkM5NTF3MDQzUWlUTHgzM1hYU24wRnpHeTl0RmxoVVgvSG03UnhxM25vPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImlUZFVTQWE3QVhpN3U5MjR5MjMvRHI3S0twdk04WkJ2VWQ1TFhRYUtYQ1NYN0Fxanc2ZUFqdzRMQXpXTDUyRCtwRVpsdkl0N1pnV29yWUJPc3M2akJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlFsY1pCZERTcVJHZ2lURkt6QmxqSzdkQTFEOTQxK1NWZmo0OUNLbGorSnQrajZ6TnZLd3c2R3Y0bTZBSEdkL0tsN0ljcGI3Vm8xVFdvbHBySXhTbmpBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNzY1OTM5MzYyMDozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMzIzNzAxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQ0ltXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDSW0uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJtOGxOZ0N4dkxNOUkvWUlUWVNSMzdjKzZQdlA2SU5KSXY2QWduVWNVZDdVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQzMDk1NTAwNSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyMzIzNzAyNjA5XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
