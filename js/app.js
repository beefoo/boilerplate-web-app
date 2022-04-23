class App {
  constructor(options = {}) {
    const defaults = {};
    this.options = { ...defaults, ...options };
  }

  init() {
    this.initialized = true;
  }
}

export default App;
