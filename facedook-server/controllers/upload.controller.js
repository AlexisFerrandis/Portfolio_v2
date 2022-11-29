const UserModel = require("../models/user.model");
const fs = require("fs");
const { promisify } = require("util");
const pipeline = promisify(require("stream").pipeline);
const { uploadErrors } = require("../utils/errors.utils");

module.exports.uploadProfil = async (req, res) => {
	try {
		if (req.file.mimetype != "image/jpg" && req.file.mimetype != "image/png" && req.file.mimetype != "image/jpeg") throw Error("invalid file :" + req.file.mimetype);
		if (req.file.size > 3000000) throw Error("max size");
	} catch (err) {
		const errors = uploadErrors(err);
		return res.status(201).json({ errors });
	}

	const userId = req.body.userId;
	const fileName = (req.body.name + userId + ".jpg").toLowerCase();
	const buffer = Buffer.from(req.file.buffer);
	fs.writeFile(`./uploads/profil/${fileName}`, buffer, function (err) {
		if (err) {
			return res.status(400).send(err);
		}
	});

	try {
		await UserModel.findByIdAndUpdate(
			userId,
			{ $set: { picture: `./uploads/profil/${fileName}` } },
			// { new: true, upsert: true, setDefaultsOnInsert: true },
			// (err, data).then((data) => res.send(data)).catch((err) => res.status(500).send({ message: err }))
			{ new: true, upsert: true, setDefaultsOnInsert: true },
			(err, data) => {
				if (!err) res.send(data);
				else res.status(500).json({ message: err });
			}
		);
	} catch (err) {
		return res.status(500).send({ message: err });
	}
};

module.exports.uploadBanner = async (req, res) => {
	try {
		if (req.file.mimetype != "image/jpg" && req.file.mimetype != "image/png" && req.file.mimetype != "image/jpeg") throw Error("invalid file :" + req.file.mimetype);
		if (req.file.size > 3000000) throw Error("max size");
	} catch (err) {
		const errors = uploadErrors(err);
		return res.status(201).json({ errors });
	}

	const userId = req.body.userId;
	const fileName = (userId + req.body.name + ".jpg").toLowerCase();
	const buffer = Buffer.from(req.file.buffer);
	fs.writeFile(`./uploads/profil/${fileName}`, buffer, function (err) {
		if (err) {
			return res.status(400).send(err);
		}
	});

	res.status(200).send(req.body)
	try {
		await UserModel.findByIdAndUpdate(
			userId,
			{ $set: { bannerPicture: `./uploads/profil/${fileName}` } },
			// { new: true, upsert: true, setDefaultsOnInsert: true },
			// (err, data).then((data) => res.send(data)).catch((err) => res.status(500).send({ message: err }))
			{ new: true, upsert: true, setDefaultsOnInsert: true },
			(err, data) => {
				if (!err) res.send(data);
				else res.status(500).json({ message: err });
			}
		);
	} catch (err) {
		return res.status(500).send({ message: err });
	}
};
