Hooks.once('init', async function() {
  console.log("Initializing MÖRK BORG 3p module");
  CONFIG.MB.wieldPowerCritOn = 20;
  CONFIG.MB.wieldPowerCritPack = "morkborg-3p.rolls-eldritch-elevations";
  CONFIG.MB.wieldPowerCritTable = "Eldritch Elevations";
});

Hooks.once('ready', async function() {

});
