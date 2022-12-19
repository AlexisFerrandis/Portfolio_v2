export const items = {
	POTION: {
		Name: "Potion",
        PluralName: "Potions",
		Description: "Restaure 20 PV d'un POKéMON.",
        TargetType: "friendly",
		Price : 100,
		Src: "POTION",
		Success: [
			{
				type: "textMessage",
				text: "{CASTER} utilise une {MOVE} !",
			},
			{
				type: "animation",
				animation: "POTION",
			},
			{
				type: "stateChange",
                recover: 20,
			},
            {
				type: "textMessage",
				text: "{CASTER} récupère 20 HP !",
			},
		]
	},
    FULLHEAL: {
		Name: "Total Soin",
        PluralName: "Total Soins",
		Description: "Contre tout changement de statut.",
        TargetType: "friendly",
		Price : 400,
		Src: "FULLHEAL",
		Success: [
			{
				type: "textMessage",
				text: "{CASTER} utilise {MOVE} !",
			},
			{
				type: "animation",
				animation: "FULLHEAL",
			},
			{
				type: "stateChange",
				statusHandler: null,
			},
            {
				type: "textMessage",
				text: "{CASTER} est en forme !",
			},
		]
	},
	ANTIDOTE: {
		Name: "Antidote",
        PluralName: "Antidotes",
		Description: "Guérit un Pokémon empoisonné.",
        TargetType: "friendly",
		Price : 200,
		Src: "ANTIDOTE",
		Success: [
			{
				type: "textMessage",
				text: "{CASTER} utilise un {MOVE} !",
			},
			{
				type: "animation",
				animation: "ANTIDOTE",
			},
			{
				type: "stateChange",
				// just for poison
				statusHandler: null,
			},
            {
				type: "textMessage",
				text: "{CASTER} n'est plus empoisonné.",
			},
		]
	},
	PARALYZEHEAL: {
		Name: "Anti-Para",
        PluralName: "AntiParas",
		Description: "Soigne un Pokémon de la paralysie.",
        TargetType: "friendly",
		Price : 200,
		Src: "PARALYZEHEAL",
		Success: [
			{
				type: "textMessage",
				text: "{CASTER} utilise un {MOVE} !",
			},
			{
				type: "animation",
				animation: "PARALYZEHEAL",
			},
			{
				type: "stateChange",
				// just for para
				statusHandler: null,
			},
            {
				type: "textMessage",
				text: "{CASTER} n'est plus paralysé.",
			},
		]
	},
}
