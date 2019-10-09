//梳理vue源码逻辑，相当困难，自感能力未及

// new vue 方法在src/core/instance/index.js文件中调用

function Vue (options) {
    if (process.env.NODE_ENV !== 'production' &&
      !(this instanceof Vue)
    ) {
      warn('Vue is a constructor and should be called with the `new` keyword')
    }
    this._init(options)
  }
  

