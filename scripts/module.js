Hooks.once('init', async function() {
	console.log("Initializing MÖRK BORG 3p module");
	CONFIG.MB.wieldPowerCritOn = 20;
	CONFIG.MB.wieldPowerCritPack = "morkborg-3p.mork-borg-3p-tables";
	CONFIG.MB.wieldPowerCritTable = "Eldritch Elevations";
  
	// add our additional classes to the scvmfactory generator
	CONFIG.MB.scvmFactory.classUuids.push(
		// betrayed phantom
		"Compendium.morkborg-3p.mork-borg-3p-items.tZo8QZBZrH9fBeNI",
		// blighted merman
		"Compendium.morkborg-3p.mork-borg-3p-items.G9NM1nMI7cwa4DE2",
	  // blood knight
	  "Compendium.morkborg-3p.mork-borg-3p-items.Item.Yhnqcnwb7DzHx2ov",
		// catacomb saint
		"Compendium.morkborg-3p.mork-borg-3p-items.ktYfH0f5gY4cCHMl",
		// damned blade thrall
		"Compendium.morkborg-3p.mork-borg-3p-items.jpmK3KOXx4i3WLAA",
		// divine hag
		"Compendium.morkborg-3p.mork-borg-3p-items.tca5SWJ2IaTmiDHs",
		// exalted gambler
		"Compendium.morkborg-3p.mork-borg-3p-items.wa4yxdTBpSVtzwVA",
		// fanatic physician
		"Compendium.morkborg-3p.mork-borg-3p-items.ITWQGGF3AFUGcAMr",
		// fugitive knight
		"Compendium.morkborg-3p.mork-borg-3p-items.Z9qYuZkoa0txg1TX",
		// sin eater
		"Compendium.morkborg-3p.mork-borg-3p-items.GhuFnPrfEgzS0NjU",
	  // Sinful sailor
	  "Compendium.morkborg-3p.mork-borg-3p-items.2ciG5JtfVXXAI3vA",
		// slapping bastard
		"Compendium.morkborg-3p.mork-borg-3p-items.qPSUBgeMWRkCtQFq",
		// soul-damned drunkard
		"Compendium.morkborg-3p.mork-borg-3p-items.j4jZAUI4wbkitPDp",
		// svampatare
		"Compendium.morkborg-3p.mork-borg-3p-items.g8JnRKWDxp92Bbs1",
		// the bellfounder
		"Compendium.morkborg-3p.mork-borg-3p-items.JNvP1NLKQ577RBQw",
		// rotting necromancer
		"Compendium.morkborg-3p.mork-borg-3p-items.PHhZQuw3dn8Ssfhe",
		// death hunter
		"Compendium.morkborg-3p.mork-borg-3p-items.yaprmub7NRMrmgzn",
	  // guilt bearer
		"Compendium.morkborg-3p.mork-borg-3p-items.kjvlgGzKGSF2cv4y",
	);
  });