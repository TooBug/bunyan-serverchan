var ServerChan = function(config){
	if(!config || !config.key){
		throw new Error('[bunyan-serverchan] config.key is required.');
	}
	this._key = config.key;
};

ServerChan.prototype.write = function(record){
	try{
		if(typeof record === 'string'){
			record = JSON.parse(record);
		}
		var agent = require('superagent');
		agent
			.post('http://sc.ftqq.com/' + this._key + '.send')
			.type('form')
			.send({
				text: '【' + record.err.name + '】' + record.err.message,
				desp: record.msg + '\n\n' + record.err.name + '\n' + record.err.message + '\n\n' + record.err.stack
			})
			.set('Accept', 'application/json')
			.end(function(err, res){
				if(err){
					console.log('[bunyan-serverchan] send error',err);
				}else{
					var result = JSON.parse(res.text);
					if(result.error_code){
						console.log('[bunyan-serverchan] send failed',result.error_message);
					}else{
						console.log('[bunyan-serverchan] send success');
					}
				}
			});
	}catch(e){
		console.log('[bunyan-serverchan] write error');
		console.log(e, e.stack);
	}
};

module.exports = ServerChan;
