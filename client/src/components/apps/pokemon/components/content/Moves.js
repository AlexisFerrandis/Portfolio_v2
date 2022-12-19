export const moves = {
	SCRATCH: {
		Name: "Griffe",
		Description: "Lacère la cible avec des griffes pour lui infliger des dégâts.",
		Accuracy: 100,
		MoveType: "NORMAL",
		Success: [
			{
				type: "textMessage",
				text: "{CASTER} utilise {MOVE} !",
			},
			{
				type: "animation",
				animation: "SCRATCH",
			},
			{
				type: "stateChange",
				damage: 40,
			},
		]
	},
	GROWL: {
		Name: "Rugissement",
		Description: "Le lanceur pousse un cri pour baisser l'attaque de la cible.",
		Accuracy: 100,
		MoveType: "NORMAL",
		Success: [
			{
				type: "textMessage",
				text: "{CASTER} utilise {MOVE} !",
			},
			{
				type: "animation",
				animation: "GROWL",
			},
			{
				type: "stateChange",
				statsHandler: {
					type: "low-atk",
					expiresIn: 99,
				},
			},
		]
	},
	TAILWHIP: {
		Name: "Mimi-Queue",
		Description: "Le lanceur remue sa queue pour baisser la défense de la cible.",
		Accuracy: 90,
		MoveType: "NORMAL",
		Success: [
			{
				type: "textMessage",
				text: "{CASTER} utilise {MOVE} !",
			},
			{
				type: "animation",
				animation: "TAILWHIP",
			},
			{
				type: "stateChange",
				statsHandler: {
					type: "low-def",
					expiresIn: 99,
				},
			}
		]
	},
	TACKLE : {
		Name: "Charge",
		Description : "Le lanceur charge la cible et la percute de tout son poids.",
		MoveType : "NORMAL",
		Accuracy: 100,
		Success: [
			{
				type: "textMessage",
				text: "{CASTER} utilise {MOVE} !",
			},
			{
				type: "animation",
				animation: "TACKLE" , 
				color: "#db32a5"
			},
			{
				type: "stateChange",
				damage: 40,
			},
		]
	},
	PECK : {
		Name: "Picpic",
		Description : "Le lanceur frappe la cible avec son bec pour infliger des dégâts.",
		MoveType : "FLYING",
		Accuracy: 100,
		Success: [
			{
				type: "textMessage",
				text: "{CASTER} utilise {MOVE} !",
			},
			{
				type: "animation",
				animation: "PECK" , 
				color: "#db32a5"
			},
			{
				type: "stateChange",
				damage: 35,
			},
		]
	},
	STRINGSHOT : {
		Name: "Sécrétion",
		Description : "Le lanceur crache de la soie pour ligoter la cible et baisser sa Vitesse.",
		MoveType : "BUG",
		Accuracy: 95,
		Success: [
			{
				type: "textMessage",
				text: "{CASTER} utilise {MOVE} !",
			},
			{
				type: "animation",
				animation: "STRINGSHOT",
			},
			{
				type: "stateChange",
				statsHandler: {
					type: "low-spd",
					expiresIn: 99,
				},
			}
		]
	},
	HARDEN : {
		Name: "Armure",
		Description : "Augmente d'un niveau la défense du Pokémon lanceur.",
		MoveType : "FLYING",
		Accuracy: 100,
		Success: [
			{
				type: "textMessage",
				text: "{CASTER} utilise {MOVE} !",
			},
			{
				type: "animation",
				animation: "HARDEN" , 
			},
			{
				type: "stateChange",
				statsHandler: {
					type: "low-def",
					expiresIn: 99,
				},
			},
			{
				type: "textMessage",
				text: "La défense du {CASTER} augmente !",
			},
		]
	},
	EMBER: {
		Name: "Flammèche",
		Description : "L'ennemi est attaqué par une faible flamme.",
		MoveType : "FIRE",
		Accuracy: 100,
		Success: [
			{
				type: "textMessage",
				text: "{CASTER} utilise {MOVE} !",
			},
			{
				type: "animation",
				animation: "EMBER" , 
				color: "#db32a5"
			},
			{
				type: "stateChange",
				damage: 49,
			},
		]
	},
	FURYATTACK: {
		Name: "Furie",
		Description : "Furie inflige des dommages de deux à cinq fois.",
		MoveType : "NORMAL",
		Accuracy: 90,
		Success: [
			{
				type: "textMessage",
				text: "{CASTER} utilise {MOVE} !",
			},
			{
				type: "animation",
				animation: "FURYATTACK" , 
				color: "#db32a5"
			},
			{
				type: "animation",
				animation: "FURYATTACK" , 
				color: "#db32a5"
			},
			{
				type: "stateChange",
				damage: 37,
			},
			{
				type: "textMessage",
				text: "Touché 2 fois !",
			},
		]
	},
	THUNDERSHOCK: {
		Name: "Éclair",
		Description : "Une décharge électrique tombe sur la cible, ce qui peut aussi la paralyser.",
		MoveType: "ELECTRIC",
		Accuracy: 90,
		// TargetType: "friendly",
		Success: [
			{
				type: "textMessage",
				text: "{CASTER} utilise {MOVE} !",
			},
			{
				type: "animation",
				animation: "THUNDERSHOCK" , 
				color: "#db32a5"
			},
			{
				type: "stateChange",
				damage: 50,
			},
			// {
			// 	type: "stateChange",
			// 	statusHandler: {
			// 		type: "par",
			// 		expiresIn: 3,
			// 		probability: [false, false, true],
			// 	},
			// 	// onCaster: true
			// },
		]
	}, 
	LICK: {
		Name: "Léchouille",
		Description : "Léchouille inflige des dégâts avec une puissance de 30.",
		MoveType : "GHOST",
		Accuracy: 90,
		Success: [
			{
				type: "textMessage",
				text: "{CASTER} utilise {MOVE} !",
			},
			{
				type: "animation",
				animation: "LICK" , 
				color: "#db32a5"
			},
			{
				type: "stateChange",
				damage: 30,
			},
		]
	},
	SPITE: {
		Name: "Dépit",
		Description : "Dépit enlève 4 PP de la dernière capacité utilisée par l'ennemie.",
		MoveType : "GHOST",
		Accuracy: 90,
		Success: [
			{
				type: "textMessage",
				text: "{CASTER} utilise {MOVE} !",
			},
			{
				type: "animation",
				animation: "SPITE" , 
				color: "#db32a5"
			},
			{
				type: "textMessage",
				text: "Mais rien ne se passe.",
			},
		]
	},
	LEER: {
		Name: "Gros Yeux",
		Description : "Groz'Yeux baisse la défense de la cible d'un niveau.",
		MoveType : "GHOST",
		Accuracy: 90,
		Success: [
			{
				type: "textMessage",
				text: "{CASTER} utilise {MOVE} !",
			},
			{
				type: "animation",
				animation: "LEER",
			},
			{
				type: "stateChange",
				statsHandler: {
					type: "low-def",
					expiresIn: 99,
				},
			}
		]
	},
	KARATECHOP: {
		Name: "Poing Karaté",
		Description : "Poing Karaté inflige des dégâts avec un taux élevé de coups critiques.",
		MoveType : "COMBAT",
		Accuracy: 90,
		Success: [
			{
				type: "textMessage",
				text: "{CASTER} utilise {MOVE} !",
			},
			{
				type: "animation",
				animation: "KARATECHOP",
			},
			{
				type: "stateChange",
				damage: 40,
			},
		]
	},
	VINEWHIP: {
		Name: "Fouet Lianes",
		Description : "Fouet Lianes inflige des dégâts, sans effets secondaires.",
		MoveType : "COMBAT",
		Accuracy: 90,
		Success: [
			{
				type: "textMessage",
				text: "{CASTER} utilise {MOVE} !",
			},
			{
				type: "animation",
				animation: "VINEWHIP",
			},
			{
				type: "stateChange",
				damage: 35,
			},
		]
	},
}