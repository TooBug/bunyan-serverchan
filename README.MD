# bunyan stream of ServerChan (A push service at <http://sc.ftqq.com/>)

## what

[bunyan](https://github.com/trentm/node-bunyan) is a node.js module to handle errors. And it provides a interface for developers to handle the errors.

This module is a wrapper of ServerChan push service, to send the error catght by bunyan.

## Install

```sh
npm install bunyan-serverchan --save
```

## Usage

```javascript
var ServerChan = require('bunyan-serverchan');

bunyan.createLogger({
	name: 'app',
	streams:[{
		level: 'error',
		stream: new ServerChan({key:MY_SERVER_CHAN_KEY})
	}]
});
```

## History

### v0.1.0 2016-01-18

- First release.
