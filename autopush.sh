#!/bin/bash

# Add all changes to the staging area
git add .

# Commit the changes with a timestamped message
commit_message="Auto push - $(date +'%Y-%m-%d %H:%M:%S')"
git commit -m "$commit_message"

# Push the changes to the remote repository
git push origin main
