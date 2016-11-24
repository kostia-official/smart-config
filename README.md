# Smart Config

Smart config managing tool. Features:
- parse JSON in environment variables;
- get environment variables from file;
- extend configs.

# Configuring

Config dir path can be set with env var `CONFIG_DIR_PATH`. Default value `your-project-dir/config` with files:
- default.json
- production.json

Environment variables that shouldn't be in github you can set in file `your-project-dir/.env.json`. 
You can change path in `ENV_FILE_DIR` env var.

# TODO

- more detailed README;
- support of custom variables (staging, dev, etc.);
- refactoring.