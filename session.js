//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkhhR1gvUk5xc25Xd3pBeE5GMUh2eGltR0FsSmYrT2gxdmtBODBmUlBXbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMUR5b0d6aitVQUoySFJ3SVM3elB4U1VEd0FpenFCeS85aDZxWDBKc2l4az0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0RG4vcFB1SHo1YW1IWVBwWHhnQnU3MXBtQXY1RXlLYW1uenNIZnRhc25FPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGZFpETXpmQU9TRjEzeUJMTWZKanVobm1sWThtQXc4eEU1bkdWNlR3NkhFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlHYzBwWW5RU3g3SFg2WGgwWm45YXY4Tjg5TU9uVUo0cmphRWJoRzhPR0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkcyWGx6dmhWeE95OGppampXUXpHTE44Qm1OcjRMT1R0a1oxNXRpeUw4R2s9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0J2bFl4djgrSldVK01lcGN4eENsczVuU3YrLzJ0cnBJYjJuZTE4djAyST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicjZ5aENpVWFUTmUxMWx1MDNCakVCeXNEYk5sZGhRYUJLVUJlWkhPZ3YyWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJDZlg0b0ZMcDlhMzdVbzFseTRXTVMyRjVncHo3bnhPRGg2NnVML3JnaSsvVjB4QXlYbTdsWUl4WTQxdTlJSEFtbmx4d25UR0dpc3R5QUNVOWhpcWlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTksImFkdlNlY3JldEtleSI6IkZEdjR3d0p2eWdmMDV3Q2JrK3U3Z2VpazA0NSsyNldNZ2tXVERlOEhjV2c9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NjIxOTcxMzJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiM0E0NzZGRkM2OTUzNDc5MjA1QzQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1MDMyNzAwNX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiYWZrTVNVckpTYlN5ekRyTmdXVFZvQSIsInBob25lSWQiOiJkMzkyMWI3Zi05ZTI0LTRlZmMtYTYyNi05MGJmZjg1MzcyZjkiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaHJ6MndMZE5Eeit5Y1RCRjVQYUd4YkZpa1FNPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxSFZ5VlpzbnB0K0RlaCtBdXdjTDF4ZzF3ck09In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNMMzVrWjBGRU5XOXo4SUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIzL0lXY04zTDVEUlRQK2JuaGR3UmgzUWsxekowbW9KWWhyQUVFdVlTRmlrPSIsImFjY291bnRTaWduYXR1cmUiOiJZZHBwaXJqQTNjMXhuRUVNS0FrWjB2WUNYcFYraGVjMFFTOVhVODJWQ25qSm5OZWh4M0F6UlNUM0FsRkdnaVVsNlZUQS9TUzNic2dxOVU4MFZsU0xBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiS25pMzJXT1hVdEIrNUFRWXZzekNmOW5IbVFJVUdsdkgxWkV1WjY2NE50K0RHNkxkK2VMdDdKWkJDa2svTHYrLzk4YjNKVGdDc1NRUHVoNkxPRTlnalE9PSJ9LCJtZSI6eyJpZCI6Ijk0NzYyMTk3MTMyOjQzQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjE0MTA0NTA1NjM5MDk2OjQzQGxpZCIsIm5hbWUiOiJWSSBNVSBLIFRISSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc2MjE5NzEzMjo0M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkL3lGbkRkeStRMFV6L201NFhjRVlkMEpOY3lkSnFDV0lhd0JCTG1FaFlwIn19XSwicGxhdGZvcm0iOiJpcGhvbmUiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBa0lDQT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1MDMyNzAwMCwibGFzdFByb3BIYXNoIjoiM1I5WjM5IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFGRkIifQ==",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "your account crated number",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
