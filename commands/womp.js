const ytdl = require('ytdl-core');
const opus = require('opusscript');

module.exports = {
	name: 'womp',
	description: 'plays a horn',
	cooldown: 5,
	execute(message, args) {
        const { voiceChannel } = message.member;

        if (!voiceChannel) {
            return message.reply('please join a voice channel first!');
        }

        voiceChannel.join().then(connection => {
            const stream = ytdl('https://www.youtube.com/watch?v=dqPxDYdbgoc', { filter: 'audioonly' });
            const dispatcher = connection.playStream(stream);

            dispatcher.on('end', () => voiceChannel.leave());
        });
	},
};

