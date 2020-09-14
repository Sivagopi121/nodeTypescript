### App Deployed on Heroku with Automatic deployment on commit to Master branch
https://node-typescript-vik.herokuapp.com

### Test using the following commands
```curl --location --request POST 'https://node-typescript-vik.herokuapp.com/api/v1/parse' \
--header 'Content-Type: application/json' \
--data-raw '{
    "data": "JOHN0000MICHAEL0009994567"
}'```

```curl --location --request POST 'https://node-typescript-vik.herokuapp.com/api/v2/parse' \
--header 'Content-Type: application/json' \
--data-raw '{
    "data": "JOHN0000MICHAEL0009994567"
}'```

