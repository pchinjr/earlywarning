let arc = require('@architect/functions');
let parseBody = arc.http.helpers.bodyParser;

exports.handler = async function http(req) {
  console.log(req)
	let body = parseBody(req);
  let text = `END ${body.text}`;
  console.log(text)
	return {
		headers: {'Content-Type': 'text/plain; charset=utf8'},
		body: text,
	}
};