#!/bin/bash
# makes request to ip:port/file_name causing server response "you got me"
curl -s 0.0.0.0:5000/catch_me | grep -o "You got me!"
