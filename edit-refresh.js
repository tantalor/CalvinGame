// Rate to reload level data in milliseconds.
const RELOAD_RATE_MS = 100;

class EditRefresh {
  constructor() {
    this.reloadInterval = undefined;
    
    this.redrawFunction = undefined;
  }
  
  setRedrawFunction(redrawFunction) {
    this.redrawFunction = redrawFunction;
  }
  
  start() {
    // Stop existing reload loop if we have one.
    this.stop();
    
    console.log("Edit refresh is active!");
    
    this.reloadInterval = setInterval(
      () => this.reloadCurrentLevel(),
      RELOAD_RATE_MS);
  }
  
  stop() {
    if (this.reloadInterval != undefined) {
      console.log("Edit refresh is stopped!");
      
      clearInterval(this.reloadInterval);
      this.reloadInterval = undefined;
    }
  }
  
  reloadCurrentLevel() {
    // Remove existing script tag for levels.js
    for (const script of document.getElementsByTagName('script')) {
      if (/levels\.js/.test(script.src)) {
        script.remove()
      }
    }
    
    const timestamp = +new Date();
    
    // Load levels.js, which replaces "levels" global.
    const script = document.createElement('script');
    // This timestamp is necessary to keep the browser from caching the file.
    script.src = "levels.js?" + timestamp;
    document.body.appendChild(script);
    
    // Trigger the game to restart itself.
    if (this.redrawFunction) {
      this.redrawFunction();
    }
  }
}

const editRefresh = new EditRefresh();
console.log("Edit refresh is available!");
console.log("To start: editRefresh.start()");
console.log("To stop: editRefresh.stop()");
