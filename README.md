# AmplifyNext
This is a Next.js integration with AWS Amplify.
## Deploy the app on CloudFormation

```
aws cloudformation deploy --template-file ./infrastructure/roles.yaml --stack-name AmplifyNext-Roles --capabilities CAPABILITY_NAMED_IAM
```

```
aws cloudformation deploy --template-file ./infrastructure/amplify.yaml --stack-name AmplifyNext-App --capabilities CAPABILITY_IAM --parameter-overrides GitHubOauthToken=$GITHUB_ACCESS_TOKEN
```
