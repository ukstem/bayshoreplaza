#!/bin/bash
# Render all WhatsApp Status cards (1080x1920 JPEG) from status-card.html.
# Requires Google Chrome + macOS sips. Run from the promo/ folder:
#   ./build-status-cards.sh
# Personalized card for one shop:
#   ./build-status-cards.sh food "Seaview Kitchen" 12
set -e
cd "$(dirname "$0")"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

render () { # $1=output name, $2=query string
  "$CHROME" --headless --disable-gpu --hide-scrollbars \
    --screenshot="$1.png" --window-size=1080,1920 --virtual-time-budget=6000 \
    "file://$PWD/status-card.html?$2" 2>/dev/null
  sips -s format jpeg -s formatOptions 82 "$1.png" --out "$1.jpg" >/dev/null
  rm "$1.png"
  echo "built $1.jpg"
}

if [ -n "$2" ]; then
  # personalized: ./build-status-cards.sh <card> <shop name> [unit]
  shop=$(python3 -c "import urllib.parse,sys;print(urllib.parse.quote(sys.argv[1]))" "$2")
  render "status-$1-$(echo "$2" | tr ' ' '-' | tr '[:upper:]' '[:lower:]')" "card=$1&shop=$shop&unit=$3"
else
  for card in launch food groceries pharmacy fashion electronics beauty; do
    render "status-$card" "card=$card"
  done
fi
