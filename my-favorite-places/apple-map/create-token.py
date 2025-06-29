
# pip install pyjwt cryptography
import jwt
import time

TEAM_ID = '6W8B6G9KYD'
KEY_ID = 'LVJU8TF3GT'
# To create a p8
# see https://developer.apple.com/documentation/applemapsserverapi/creating-a-maps-identifier-and-a-private-key
PRIVATE_KEY_PATH = '/Users/kin/Documents/mapkit-private-key.p8'

with open(PRIVATE_KEY_PATH, 'r') as f:
    private_key = f.read()

current_time = int(time.time())
token = jwt.encode(
    {
        'iss': TEAM_ID,
        'iat': current_time,
        'exp': current_time + 3600  # 1 hour
    },
    private_key,
    algorithm='ES256',
    headers={'kid': KEY_ID}
)

print(token)

# After this, use the token in your Apple MapKit JS requests
# First
# curl --location 'https://maps-api.apple.com/v1/token' \
# --header 'Authorization: Bearer eyJhbGciOiJFUzI1NiIsImtpZCI6IkxWSlU4VEYzR1QiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiI2VzhCNkc5S1lEIiwiaWF0IjoxNzUxMTc5MzI4LCJleHAiOjE3NTExODI5Mjh9.XGDl3Zkub3nvZMrFwlTL64z_0321SoidSMKfgXY2_7FonRc1yoOerpMqerwG4wWRwQBte-Qndic4KDLCchz4jw'
# Then
# curl --location 'https://maps-api.apple.com/v1/reverseGeocode?loc=37.3301996%2C-122.0106415&lang=ja-JP' \
# --header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJtYXBzYXBpIiwidGlkIjoiNlc4QjZHOUtZRCIsImFwcGlkIjoiNlc4QjZHOUtZRC5tYXBzLmNvbS5raW4iLCJpdGkiOmZhbHNlLCJpcnQiOmZhbHNlLCJpYXQiOjE3NTExNzk1NDAsImV4cCI6MTc1MTE4MTM0MH0.EF5549YsQFojFBntpJxyHXYlFMe25rtNxWbLPjcPyjjCDKRv6k-4IdFVnZI0SFyaYRBdtSe4LhVzKt0vTPhbpg'