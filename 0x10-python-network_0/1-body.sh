#!/bin/bash
#script taking in a URL,sends GET request to the URL,& displays response body
curl -s -w "%{http_code}" "$1" | awk '/^200/{p=1} p; /^$/{exit}'
