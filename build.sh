#!/bin/bash

DESTINATION=~/Desktop/github-tricks-and-treats-`cat manifest.json| jq -r .version`.zip
git archive --format=zip master > $DESTINATION

echo "Created..."
ls -lh $DESTINATION
