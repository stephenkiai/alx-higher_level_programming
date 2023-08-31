#!/bin/bash
#script taking in a URL, sends request to the URL, and displays body size
curl -s "$1" | wc -c
