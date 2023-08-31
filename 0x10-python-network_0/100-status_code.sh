#!/bin/bash
# sends request to URL argument & display status code of response
curl -so /dev/null -w "%{http_code}" "$1"
