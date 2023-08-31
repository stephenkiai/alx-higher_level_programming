#!/usr/bin/env bash
#script taking in a URL, sends request to the URL, and displays body size

# Check if a URL is provided as an argument
if [ $# -ne 1 ]; then
    echo "Usage: $0 <URL>"
    exit 1
fi

url="$1"

# Send the request & store response in a variable
response=$(curl -sI "$url")

# Extract content length from the response headers
content_length=$(echo "$response" | grep -i "content-length:" | awk '{print $2}' | tr -d '\r')

if [ -z "$content_length" ]; then
    echo "Content length not found in the response headers."
    exit 1
fi

echo "$content_length"
