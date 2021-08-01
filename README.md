# Next.js integration with AWS Amplify

## Deploy

```
aws cloudformation deploy --template-file ./infrastructure/amplify.yaml --stack-name AmplifyNext --capabilities CAPABILITY_IAM --parameter-overrides OauthToken=$GITHUB_ACCESS_TOKEN Repository=https://github.com/simonespa/amplify-nextjs
```
