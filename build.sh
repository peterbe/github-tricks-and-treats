#!/bin/bash

DESTINATION=~/Desktop/github-tricks-and-treats.zip
zip "$DESTINATION" `git ls-files`

echo "Created $DESTINATION"
ls -lh "$DESTINATION"
