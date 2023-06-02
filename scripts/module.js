Hooks.once('init', async function() {
  console.log("Initializing MÖRK BORG 3p module");
  CONFIG.MB.wieldPowerCritOn = 20;
  CONFIG.MB.wieldPowerCritPack = "morkborg-3p.mork-borg-3p-tables";
  CONFIG.MB.wieldPowerCritTable = "Eldritch Elevations";

  // add our additional classes to the scvmfactory generator
  CONFIG.MB.scvmFactory.classUuids.push(
  	// betrayed phantom
  	"Compendium.morkborg-3p.class-betrayed-phantom.tZo8QZBZrH9fBeNI",
  	// blighted merman
  	"Compendium.morkborg-3p.class-blighted-merman.G9NM1nMI7cwa4DE2",
  	// catacomb saint
  	"Compendium.morkborg-3p.class-catacomb-saint.ktYfH0f5gY4cCHMl",
  	// damned blade thrall
  	"Compendium.morkborg-3p.class-damned-blade-thrall.jpmK3KOXx4i3WLAA",
  	// divine hag
  	"Compendium.morkborg-3p.class-divine-hag.tca5SWJ2IaTmiDHs",
  	// exalted gambler
  	"Compendium.morkborg-3p.class-exalted-gambler.wa4yxdTBpSVtzwVA",
  	// fanatic physician
  	"Compendium.morkborg-3p.class-fanatic-physician.ITWQGGF3AFUGcAMr",
  	// fugitive knight
  	"Compendium.morkborg-3p.class-fugitive-knight.Z9qYuZkoa0txg1TX",
  	// sin eater
  	"Compendium.morkborg-3p.class-sin-eater.GhuFnPrfEgzS0NjU",
  	// slapping bastard
  	"Compendium.morkborg-3p.class-slapping-bastard.qPSUBgeMWRkCtQFq",
  	// soul-damned drunkard
	  "Compendium.morkborg-3p.class-soul-damned-drunkard.j4jZAUI4wbkitPDp",
  	// svampatare
  	"Compendium.morkborg-3p.class-svampatare.g8JnRKWDxp92Bbs1",
  	// the bellfounder
  	"Compendium.morkborg-3p.class-the-bellfounder.JNvP1NLKQ577RBQw",
  );
});