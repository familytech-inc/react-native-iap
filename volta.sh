#!/bin/bash

export VOLTA_HOME="$HOME/.volta"
export PATH="$VOLTA_HOME/bin:$PATH"

volta install node
volta install yarn
