#!/bin/bash
# sends JSON POST request to URL first args & display response body
curl -s -X POST -H "Content-Type: application/json" -d "@$2" "$1"
