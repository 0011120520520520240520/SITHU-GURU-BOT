let handler = async (m, { conn, args, text, usedPrefix, command }) => {
	
   let tee = `✳️ Enter a short text\n\n📌 Example  : *${usedPrefix + command}* GURU`
   let too = `✳️ Separate the text with a *+* \n\n📌 Example : \n*${usedPrefix + command}* GURU *+* BOT`
    m.react(rwait)
let type = (command).toLowerCase()
switch (type) {
	
	case 'gfx1':
	if (!text) throw tee 
	let chut = global.API('fgmods', '/api/kaneki', { text }, 'apikey')
	conn.sendFile(m.chat, chut, 'logo.png', `✅ Result`, m)
	m.react(done)
	break
	case 'gfx2':	
	if (!text) throw tee
	let nw = global.API('fgmods', '/api/girlneko', { text }, 'apikey')
	conn.sendFile(m.chat, nw, 'logo.png', `✅ Result`, m)
	m.react(done)
	break
	case 'gfx3':
	if (!text) throw tee 
	let ch = global.API('fgmods', '/api/rem', { text }, 'apikey')
	conn.sendFile(m.chat, ch, 'logo.png', `✅ Result`, m)
	m.react(done)
	break 	
        case 'gfx4': 
   if (!text) throw tee
   let gu = global.API('fgmods', '/api/sadboy', { text: 'GURU', text2: text}, 'apikey')
	conn.sendFile(m.chat, gu, 'logo.png', `✅ Result`, m)
	m.react(done)
	break 
	default:
} 
} 
handler.help = ['gfx1', 'gfx2', 'gfx3', 'gfx4']
handler.tags = ['maker']
handler.command = /^(gfx1|gfx2|gfx3|gfx4)$/i
handler.diamond = true

export default handler	

