#!/bin/bash
#script taking in URL & display all HTTP methods the server accepts
curl -sI "$1" | awk '/^Allow:/{print $2}'
