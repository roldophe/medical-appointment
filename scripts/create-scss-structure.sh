#!/bin/bash

# Root SCSS directory
ROOT_DIR="./../src/assets/scss"

# Create directories
mkdir -p "$ROOT_DIR"/custom/{base,structure,components,pages,plugins,fonts,utils}

# Create files for each directory
touch "$ROOT_DIR"/custom/base/{_variables.scss,_typography.scss,_reset.scss}
touch "$ROOT_DIR"/custom/components/{_button.scss,_form.scss,_navbar.scss}
touch "$ROOT_DIR"/custom/pages/{_home.scss,_about.scss}
touch "$ROOT_DIR"/custom/utils/{_mixins.scss,_functions.scss}
touch "$ROOT_DIR"/tailwind.scss
touch "$ROOT_DIR"/icons.scss
touch "$ROOT_DIR"/custom.scss
touch "$ROOT_DIR"/app.scss

echo "SCSS structure created successfully!"
