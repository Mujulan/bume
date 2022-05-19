const fs = require('fs')
const chalk = require('chalk')

//---------( APIKEY )---------//
global.APIs = {
zenz: 'https://zenzapis.xyz',
}
global.APIKeys = {
'https://zenzapis.xyz': 'BagasPrdn',
}

//---------( SETTING )---------//
global.owner = ['62882005687229']
global.premium = ['62882005687229']
global.ownernomer = '62882005687229'
global.ownername = '𝙻𝙴𝙾𝙼𝙾𝚁𝙳𝚇𝙳'
global.botname = '𝙻𝙴𝙾𝙼𝙾𝚁𝙳𝙱𝙾𝚃'
global.footer = '𝙻𝙴𝙾𝙼𝙾𝚁𝙳𝚇𝙳'
global.thumb = fs.readFileSync('./image/fake.jpg')
global.veloriy = fs.readFileSync('./image/kagura.mp4')
global.sessionName = 'session'
global.packname = '© 𝙻𝙴𝙾𝙼𝙾𝙴𝙳𝙱𝙾𝚃'
global.author = '𝙇𝙀𝙊𝙈𝙊𝙍𝘿𝙓𝘿'
global.sp = '⭔'

//===> ATUR BIAR KALIAN SENENG
global.autoTyping = false //Ubah Ke true Jika Ingin Saat Ada Yang Chat Bot Auto Mengetik
global.anticall = false //Ubah Ke true Jika Tidak Ingin Bot Blockir Yang Telepon

//---------( INFO )---------//
global.youtube = 'https://youtube.com/c/LEX4YOUU'
global.ig = 'https://instagram.com/leomordbot'
global.mygc = 'https://chat.whatsapp.com/D4Ww2QJRs1lEKqkniexY3u'
global.myweb = 'https://github.com/Lexxy24'
global.email = 'botleomord@gmail.com'
global.region = 'indonesia'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.BgWelcLeav = 'https://telegra.ph/file/ca207893ae26d531cd9c6.jpg'
global.limitawal = {
premium: "Infinity", 
free: 15,
}

//---------( RANDOM IMAGE )---------//
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//---------( MESSAGES )---------//
global.mess = {
success: '_Done._',
admin: '_Fitur Khusus Admin Group!_',
botAdmin: '_Bot Harus Menjadi Admin Terlebih Dahulu!_',
owner: '_Fitur Khusus Owner Bot_',
group: '_Fitur Digunakan Hanya Untuk Group!_',
private: '_Fitur Digunakan Hanya Untuk Private Chat!_',
bot: '_Fitur Khusus Pengguna Nomor Bot_',
wait: '_𝙼𝚘𝚑𝚘𝚗 𝙳𝚒 𝚃𝚞𝚗𝚐𝚐𝚞 𝙻𝚊𝚐𝚒 𝙳𝚒 𝙿𝚛𝚘𝚜𝚎𝚜..._',
error: '_𝙼𝚊𝚊𝚏 𝙵𝚒𝚝𝚞𝚛𝚗𝚢𝚊 𝚂𝚎𝚍𝚊𝚗𝚐 𝙴𝚛𝚘𝚛!_',
endLimit: '_Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12_',
}

//---------( PEMBATAS )---------//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})