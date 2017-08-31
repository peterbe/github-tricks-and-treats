#!/bin/bash

DESTINATION=~/Desktop/github-tricks-and-treats-`cat manifest.json| jq .version | sed -e 's/^"//' -e 's/"$//'`.zip
zip "$DESTINATION" `git ls-files`

echo "Created $DESTINATION"
ls -lh "$DESTINATION"
