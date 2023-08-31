#!/bin/bash
# POST request to passed URL and display response body
curl -s -X POST -d "email=test@gmail.com&subject=I will always be here for PLD" "$1"
