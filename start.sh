#!/bin/bash

cd back-end
node server.js &
cd ..
cd front-end
npm start