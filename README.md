# amplify

## Deploy

```
aws cloudformation deploy --template-file ./infrastructure/amplify.yaml --stack-name TodoApp --capabilities CAPABILITY_IAM --parameter-overrides OauthToken=<GITHUB PERSONAL ACCESS TOKEN> Repository=https://github.com/sthulb/vue Domain=example.com
```
