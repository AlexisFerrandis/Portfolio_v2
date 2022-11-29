const mongoose = require("mongoose");

mongoose
	.connect(`mongodb+srv://${process.env.DB_USER_PASS}@facetook.sayqsnw.mongodb.net/facedook?retryWrites=true&w=majority`, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("Connected to MongoDB"))
	.catch((err) => console.log("Fail to connect to mongoDb", err));
