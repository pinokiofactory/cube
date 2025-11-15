module.exports = {
  requires: {
    bundle: "ai"
  },
  run: [
    {
      method: "shell.run",
      params: {
        message: [
          "git clone https://github.com/peanutcocktail/cube app",
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        venv: "env",
        path: "app",
        message: [
          "uv pip install huggingface_hub==0.36",
          "uv pip install -e .[meshlab]",
          "uv pip install gradio"
        ]
      }
    },
    {
      method: "script.start",
      params: {
        uri: "torch.js",
        params: {
          venv: "env",
          path: "app",
          // xformers: true
        }
      }
    },
    {
      method: "shell.run",
      params: {
        path: "app",
        message: " hf download Roblox/cube3d-v0.1 --local-dir ./model_weights "
      }
    }
  ]
}
