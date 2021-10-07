# AmplifyNext
This is a Next.js integration with AWS Amplify.
## Deploy the Infrastructure

**Role stack**
```
aws cloudformation deploy --template-file ./infrastructure/amplify-role.yaml --stack-name AmplifyNext-Role --capabilities CAPABILITY_NAMED_IAM --tags project=AmplifyNext
```

**App stack**
```
aws cloudformation deploy --template-file ./infrastructure/amplify-app.yaml --stack-name AmplifyNext-App --capabilities CAPABILITY_IAM --parameter-overrides GitHubOauthToken=$GITHUB_ACCESS_TOKEN --tags project=AmplifyNext
```
