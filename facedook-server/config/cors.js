require("dotenv").config({ path: "./config/.env" });

module.exports = (req, res, next) => {
	res.setHeader("HTTP", "1.1 200 OK");

	const corsWhitelist = [`${process.env.DEV_URL}`, `${process.env.DEV_URL_TWO}`, `${process.env.CLIENT_URL}`];
	if (corsWhitelist.indexOf(req.headers.origin) !== -1) {
		res.setHeader("Access-Control-Allow-Origin", req.headers.origin);
	}

	res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization, X-Custom-Header, sessionId");
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS, HEAD");
	res.setHeader("Access-Control-Allow-Credentials", true);

	next();
};
